// Hand-written layer of the TorBox TypeScript SDK (sdk-config/overlays/typescript). Not generated.
import {
  AssistantApi, GeneralApi, IntegrationsApi, NotificationsApi, QueuedApi, RssApi, StreamApi, TagsApi,
  TorrentsApi, UsenetApi, UserApi, VendorsApi, WebDownloadsApi,
} from './apis/index.js';
import { Configuration, ResponseError, type FetchAPI } from './runtime.js';

export const DEFAULT_BASE_URL = 'https://api.torbox.app';
const RETRY_STATUSES = new Set([429, 503]);

/** An answer with success=false or an error status. `error` is the stable code (e.g. BAD_TOKEN). */
export class TorBoxError extends Error {
  override name = 'TorBoxError';
  constructor(
    /** HTTP status, or null when a 200 answer said success=false */
    public readonly status: number | null,
    /** Error code, e.g. BAD_TOKEN, RATE_LIMIT_EXCEEDED */
    public readonly error: string | null,
    /** Message for people, safe to show to users */
    public readonly detail: string,
    public readonly data: unknown = null,
    public readonly headers: Headers | null = null,
  ) {
    super(`${status ?? ''} ${error ?? ''}: ${detail}`.trim());
  }

  static async fromResponse(response: Response): Promise<TorBoxError> {
    let body: any = null;
    try {
      body = await response.clone().json();
    } catch {
      /* not JSON */
    }
    if (body && Array.isArray(body.detail)) {
      // FastAPI request validation (422) is {"detail": [...]}, not the envelope
      return new TorBoxError(response.status, 'VALIDATION_ERROR', body.detail.map((d: any) => d?.msg ?? String(d)).join('; '), body.detail, response.headers);
    }
    return new TorBoxError(response.status, body?.error ?? null, body?.detail ?? response.statusText, body?.data ?? null, response.headers);
  }
}

export interface TorBoxOptions {
  /** Your API key from https://torbox.app/settings */
  apiKey: string;
  baseUrl?: string;
  /** Per-attempt timeout in milliseconds (default 30000) */
  timeoutMs?: number;
  /** Retries for 429/503 (default 3), honouring Retry-After */
  maxRetries?: number;
  fetch?: FetchAPI;
}

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

/** fetch with a timeout per attempt and retries on 429/503 (Retry-After, else exponential backoff). */
export function retryingFetch(base: FetchAPI, timeoutMs: number, maxRetries: number): FetchAPI {
  return async (input, init) => {
    for (let attempt = 0; ; attempt++) {
      const timeout = AbortSignal.timeout(timeoutMs);
      const signal = init?.signal ? AbortSignal.any([init.signal, timeout]) : timeout;
      const response = await base(input, { ...init, signal });
      if (!RETRY_STATUSES.has(response.status) || attempt >= maxRetries) return response;
      const retryAfter = Number(response.headers.get('retry-after'));
      await sleep(Number.isFinite(retryAfter) && retryAfter > 0 ? retryAfter * 1000 : 500 * 2 ** attempt);
    }
  };
}

function unwrap(result: any): any {
  if (result && typeof result === 'object' && 'success' in result) {
    if (result.success === false) throw new TorBoxError(null, result.error ?? null, result.detail ?? '', result.data ?? null);
    return result.data;
  }
  return result;
}

/** Same methods as the generated API class; returns `data`, throws TorBoxError, fills `token` for download links. */
type Unwrapped<T> = {
  [K in keyof T]: T[K] extends (...args: infer A) => Promise<infer R>
    ? K extends `${string}Raw` | `${string}RequestOpts`
      ? T[K]
      : (...args: A) => Promise<R extends { data?: infer D } ? NonNullable<D> | D : R>
    : T[K];
};

function group<T extends object>(api: T, apiKey: string): Unwrapped<T> {
  return new Proxy(api, {
    get(target, prop, receiver) {
      const value = Reflect.get(target, prop, receiver);
      if (typeof value !== 'function' || typeof prop !== 'string' || prop.endsWith('Raw') || prop.endsWith('RequestOpts')) return value;
      return async (params: Record<string, unknown> = {}, init?: RequestInit) => {
        // download link endpoints take the key as ?token=
        if (/DownloadLinks?(Get|Post)?$/.test(prop) && params.token === undefined) params = { ...params, token: apiKey };
        try {
          return unwrap(await value.call(target, params, init));
        } catch (err) {
          if (err instanceof ResponseError) throw await TorBoxError.fromResponse(err.response);
          throw err;
        }
      };
    },
  }) as Unwrapped<T>;
}

export class TorBox {
  readonly configuration: Configuration;
  readonly torrents: Unwrapped<TorrentsApi>;
  readonly usenet: Unwrapped<UsenetApi>;
  readonly webDownloads: Unwrapped<WebDownloadsApi>;
  readonly user: Unwrapped<UserApi>;
  readonly general: Unwrapped<GeneralApi>;
  readonly notifications: Unwrapped<NotificationsApi>;
  readonly rss: Unwrapped<RssApi>;
  readonly integrations: Unwrapped<IntegrationsApi>;
  readonly queued: Unwrapped<QueuedApi>;
  readonly stream: Unwrapped<StreamApi>;
  readonly tags: Unwrapped<TagsApi>;
  readonly assistant: Unwrapped<AssistantApi>;
  readonly vendors: Unwrapped<VendorsApi>;

  constructor(options: TorBoxOptions) {
    if (!options?.apiKey) throw new Error('apiKey is required (https://torbox.app/settings)');
    const fetchApi = retryingFetch(options.fetch ?? globalThis.fetch.bind(globalThis), options.timeoutMs ?? 30_000, options.maxRetries ?? 3);
    this.configuration = new Configuration({
      basePath: (options.baseUrl ?? DEFAULT_BASE_URL).replace(/\/$/, ''),
      accessToken: options.apiKey,
      fetchApi,
      headers: { 'x-torbox-sdk': 'typescript/9.3.1-20261125.4' },
    });
    const c = this.configuration;
    const k = options.apiKey;
    this.torrents = group(new TorrentsApi(c), k);
    this.usenet = group(new UsenetApi(c), k);
    this.webDownloads = group(new WebDownloadsApi(c), k);
    this.user = group(new UserApi(c), k);
    this.general = group(new GeneralApi(c), k);
    this.notifications = group(new NotificationsApi(c), k);
    this.rss = group(new RssApi(c), k);
    this.integrations = group(new IntegrationsApi(c), k);
    this.queued = group(new QueuedApi(c), k);
    this.stream = group(new StreamApi(c), k);
    this.tags = group(new TagsApi(c), k);
    this.assistant = group(new AssistantApi(c), k);
    this.vendors = group(new VendorsApi(c), k);
  }

  /** Every item of a list endpoint that takes offset/limit: `for await (const t of client.paginate((p) => client.torrents.getTorrentList(p)))` */
  async *paginate<T>(list: (params: { offset: number; limit: number }) => Promise<T[] | T | null | undefined>, pageSize = 1000): AsyncGenerator<T> {
    for (let offset = 0; ; offset += pageSize) {
      const page = await list({ offset, limit: pageSize });
      const items = Array.isArray(page) ? page : page == null ? [] : [page];
      yield* items;
      if (items.length < pageSize) return;
    }
  }
}
