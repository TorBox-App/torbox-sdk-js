import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const createUsenetDownloadOkResponseData = z.lazy(() => {
  return z.object({
    authId: z.string().optional(),
    hash: z.string().optional(),
    usenetdownloadId: z.number().optional(),
  });
});

/**
 *
 * @typedef  {CreateUsenetDownloadOkResponseData} createUsenetDownloadOkResponseData
 * @property {string}
 * @property {string}
 * @property {string}
 */
export type CreateUsenetDownloadOkResponseData = z.infer<typeof createUsenetDownloadOkResponseData>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const createUsenetDownloadOkResponseDataResponse = z.lazy(() => {
  return z
    .object({
      auth_id: z.string().optional(),
      hash: z.string().optional(),
      usenetdownload_id: z.number().optional(),
    })
    .transform((data) => ({
      authId: data['auth_id'],
      hash: data['hash'],
      usenetdownloadId: data['usenetdownload_id'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const createUsenetDownloadOkResponseDataRequest = z.lazy(() => {
  return z
    .object({
      authId: z.string().optional(),
      hash: z.string().optional(),
      usenetdownloadId: z.number().optional(),
    })
    .transform((data) => ({
      auth_id: data['authId'],
      hash: data['hash'],
      usenetdownload_id: data['usenetdownloadId'],
    }));
});
