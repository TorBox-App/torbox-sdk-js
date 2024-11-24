import { SerializationStyle } from './serialization/base-serializer';
import { HttpMethod, HttpResponse, Options, RetryOptions, SdkConfig } from './types';
import { RequestHandlerChain } from './handlers/handler-chain';
import { HookHandler } from './handlers/hook-handler';
import { ResponseValidationHandler } from './handlers/response-validation-handler';
import { RequestValidationHandler } from './handlers/request-validation-handler';
import { CustomHook } from './hooks/custom-hook';
import { TerminatingHandler } from './handlers/terminating-handler';
import { RetryHandler } from './handlers/retry-handler';
import { Request } from './transport/request';
import { AuthHandler } from './handlers/auth-handler';

export class HttpClient {
  private readonly requestHandlerChain = new RequestHandlerChain();

  constructor(
    private config: SdkConfig,
    hook = new CustomHook(),
  ) {
    this.requestHandlerChain.addHandler(new ResponseValidationHandler());
    this.requestHandlerChain.addHandler(new RequestValidationHandler());
    this.requestHandlerChain.addHandler(new AuthHandler());
    this.requestHandlerChain.addHandler(new RetryHandler());
    this.requestHandlerChain.addHandler(new HookHandler(hook));
    this.requestHandlerChain.addHandler(new TerminatingHandler());
  }

  call<T>(request: Request<T>): Promise<HttpResponse<T>> {
    return this.requestHandlerChain.callChain(request);
  }

  public async callPaginated<FullResponse, Page>(request: Request<FullResponse, Page>): Promise<HttpResponse<Page>> {
    const response = await this.call<FullResponse>(request as any);

    if (!response.data) {
      throw new Error('no response data to paginate through');
    }

    return {
      ...response,
      data: this.getPage<FullResponse, Page>(request, response.data),
    };
  }

  setBaseUrl(url: string): void {
    this.config.baseUrl = url;
  }

  setConfig(config: SdkConfig): void {
    this.config = config;
  }

  private getPage<FullResponse, Page>(request: Request<FullResponse, Page>, data: FullResponse): Page {
    if (!request.pagination) {
      throw new Error('getPage called for request without pagination property');
    }

    let curr: any = data;
    for (const segment of request.pagination?.pagePath || []) {
      curr = curr[segment];
    }

    const page = request.pagination?.pageSchema?.parse(curr);
    if (!page) {
      throw new Error(
        `error getting page data. Curr: ${JSON.stringify(curr)}. PagePath: ${request.pagination?.pagePath}. Data: ${JSON.stringify(data)}`,
      );
    }
    return page;
  }
}