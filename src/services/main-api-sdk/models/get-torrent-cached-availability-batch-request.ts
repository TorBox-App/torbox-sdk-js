import { z } from 'zod';

/**
 * Zod schema for the GetTorrentCachedAvailabilityBatchRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const getTorrentCachedAvailabilityBatchRequest = z.lazy(() => {
  return z.object({
    hashes: z.array(z.string()).optional().nullable(),
  });
});

/**
 * @typedef {GetTorrentCachedAvailabilityBatchRequest} getTorrentCachedAvailabilityBatchRequest
 * @property {string[]} hashes
 */
export type GetTorrentCachedAvailabilityBatchRequest = z.infer<
  typeof getTorrentCachedAvailabilityBatchRequest
>;

/**
 * Zod schema for mapping API responses to the GetTorrentCachedAvailabilityBatchRequest application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getTorrentCachedAvailabilityBatchRequestResponse = z.lazy(() => {
  return z
    .object({
      hashes: z.array(z.string()).optional().nullable(),
    })
    .transform((data) => ({
      hashes: data['hashes'],
    }));
});

/**
 * Zod schema for mapping the GetTorrentCachedAvailabilityBatchRequest application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getTorrentCachedAvailabilityBatchRequestRequest = z.lazy(() => {
  return z
    .object({
      hashes: z.array(z.string()).optional().nullable(),
    })
    .transform((data) => ({
      hashes: data['hashes'],
    }));
});
