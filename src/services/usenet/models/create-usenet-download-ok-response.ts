import { z } from 'zod';
import {
  createUsenetDownloadOkResponseData,
  createUsenetDownloadOkResponseDataRequest,
  createUsenetDownloadOkResponseDataResponse,
} from './create-usenet-download-ok-response-data';

/**
 * The shape of the model inside the application code - what the users use
 */
export const createUsenetDownloadOkResponse = z.lazy(() => {
  return z.object({
    data: createUsenetDownloadOkResponseData.optional(),
    detail: z.string().optional(),
    success: z.boolean().optional(),
  });
});

/**
 *
 * @typedef  {CreateUsenetDownloadOkResponse} createUsenetDownloadOkResponse
 * @property {CreateUsenetDownloadOkResponseData}
 * @property {string}
 * @property {boolean}
 */
export type CreateUsenetDownloadOkResponse = z.infer<typeof createUsenetDownloadOkResponse>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const createUsenetDownloadOkResponseResponse = z.lazy(() => {
  return z
    .object({
      data: createUsenetDownloadOkResponseDataResponse.optional(),
      detail: z.string().optional(),
      success: z.boolean().optional(),
    })
    .transform((data) => ({
      data: data['data'],
      detail: data['detail'],
      success: data['success'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const createUsenetDownloadOkResponseRequest = z.lazy(() => {
  return z
    .object({
      data: createUsenetDownloadOkResponseDataRequest.nullish(),
      detail: z.string().nullish(),
      success: z.boolean().nullish(),
    })
    .transform((data) => ({
      data: data['data'],
      detail: data['detail'],
      success: data['success'],
    }));
});
