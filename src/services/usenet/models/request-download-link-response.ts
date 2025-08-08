import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const requestDownloadLinkOkResponse = z.lazy(() => {
  return z.object({
    data: z.string().optional(),
    detail: z.string().optional(),
    error: z.any().optional().nullable(),
    success: z.boolean().optional(),
  });
});

/**
 *
 * @typedef  {RequestDownloadLinkOkResponse} requestDownloadLinkOkResponse
 * @property {string}
 * @property {string}
 * @property {any}
 * @property {boolean}
 */
export type RequestDownloadLinkOkResponse = z.infer<typeof requestDownloadLinkOkResponse>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const requestDownloadLinkOkResponseResponse = z.lazy(() => {
  return z
    .object({
      data: z.string().optional(),
      detail: z.string().optional(),
      error: z.any().optional().nullable(),
      success: z.boolean().optional(),
    })
    .transform((data) => ({
      data: data['data'],
      detail: data['detail'],
      error: data['error'],
      success: data['success'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const requestDownloadLinkOkResponseRequest = z.lazy(() => {
  return z
    .object({
      data: z.string().optional(),
      detail: z.string().optional(),
      error: z.any().optional().nullable(),
      success: z.boolean().optional(),
    })
    .transform((data) => ({
      data: data['data'],
      detail: data['detail'],
      error: data['error'],
      success: data['success'],
    }));
});
