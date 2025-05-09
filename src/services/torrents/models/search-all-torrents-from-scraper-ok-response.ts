import { z } from 'zod';
import {
  searchAllTorrentsFromScraperOkResponseData,
  searchAllTorrentsFromScraperOkResponseDataRequest,
  searchAllTorrentsFromScraperOkResponseDataResponse,
} from './search-all-torrents-from-scraper-ok-response-data';

/**
 * The shape of the model inside the application code - what the users use
 */
export const searchAllTorrentsFromScraperOkResponse = z.lazy(() => {
  return z.object({
    data: z.array(searchAllTorrentsFromScraperOkResponseData).optional(),
    detail: z.string().optional(),
    error: z.any().optional().nullable(),
    success: z.boolean().optional(),
  });
});

/**
 *
 * @typedef  {SearchAllTorrentsFromScraperOkResponse} searchAllTorrentsFromScraperOkResponse
 * @property {SearchAllTorrentsFromScraperOkResponseData[]}
 * @property {string}
 * @property {any}
 * @property {boolean}
 */
export type SearchAllTorrentsFromScraperOkResponse = z.infer<typeof searchAllTorrentsFromScraperOkResponse>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const searchAllTorrentsFromScraperOkResponseResponse = z.lazy(() => {
  return z
    .object({
      data: z.array(searchAllTorrentsFromScraperOkResponseDataResponse).optional(),
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
export const searchAllTorrentsFromScraperOkResponseRequest = z.lazy(() => {
  return z
    .object({
      data: z.array(searchAllTorrentsFromScraperOkResponseDataRequest).nullish(),
      detail: z.string().nullish(),
      error: z.any().nullish(),
      success: z.boolean().nullish(),
    })
    .transform((data) => ({
      data: data['data'],
      detail: data['detail'],
      error: data['error'],
      success: data['success'],
    }));
});
