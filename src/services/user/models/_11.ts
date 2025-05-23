import { z } from 'zod';

export type I_11Schema = {
  data?: any | null;
  detail?: string;
  error?: string;
  success?: boolean;
};

export const _11Response = z.lazy(() => {
  return z
    .object({
      data: z.any().optional().nullable(),
      detail: z.string().optional(),
      error: z.string().optional(),
      success: z.boolean().optional(),
    })
    .transform((data) => ({
      data: data['data'],
      detail: data['detail'],
      error: data['error'],
      success: data['success'],
    }));
});

export class _11 extends Error {
  public data?: any | null;
  public detail?: string;
  public error?: string;
  public success?: boolean;
  constructor(message?: string, response?: unknown) {
    super(message);

    const parsedResponse = _11Response.parse(response);

    this.data = parsedResponse.data;
    this.detail = parsedResponse.detail;
    this.error = parsedResponse.error;
    this.success = parsedResponse.success;
  }
}
