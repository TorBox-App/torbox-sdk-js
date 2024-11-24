import { z } from 'zod';
import {
  getTorrentCachedAvailabilityOkResponseData,
  getTorrentCachedAvailabilityOkResponseDataRequest,
  getTorrentCachedAvailabilityOkResponseDataResponse,
} from './get-torrent-cached-availability-ok-response-data';

/**
 * The shape of the model inside the application code - what the users use
 */
export const getTorrentCachedAvailabilityOkResponse = z.lazy(() => {
  return z.object({
    data: getTorrentCachedAvailabilityOkResponseData.optional().nullable(),
    detail: z.string().optional(),
    success: z.boolean().optional(),
  });
});

/**
 *
 * @typedef  {GetTorrentCachedAvailabilityOkResponse} getTorrentCachedAvailabilityOkResponse
 * @property {GetTorrentCachedAvailabilityOkResponseData}
 * @property {string}
 * @property {boolean}
 */
export type GetTorrentCachedAvailabilityOkResponse = z.infer<typeof getTorrentCachedAvailabilityOkResponse>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const getTorrentCachedAvailabilityOkResponseResponse = z.lazy(() => {
  return z
    .object({
      data: getTorrentCachedAvailabilityOkResponseDataResponse.optional().nullable(),
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
export const getTorrentCachedAvailabilityOkResponseRequest = z.lazy(() => {
  return z
    .object({
      data: getTorrentCachedAvailabilityOkResponseDataRequest.nullish(),
      detail: z.string().nullish(),
      success: z.boolean().nullish(),
    })
    .transform((data) => ({
      data: data['data'],
      detail: data['detail'],
      success: data['success'],
    }));
});