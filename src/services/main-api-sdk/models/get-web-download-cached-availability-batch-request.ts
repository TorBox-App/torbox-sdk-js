import { z } from 'zod';

/**
 * Zod schema for the GetWebDownloadCachedAvailabilityBatchRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const getWebDownloadCachedAvailabilityBatchRequest = z.lazy(() => {
  return z.object({
    hashes: z.array(z.string()).optional().nullable(),
  });
});

/**
 * @typedef {GetWebDownloadCachedAvailabilityBatchRequest} getWebDownloadCachedAvailabilityBatchRequest
 * @property {string[]} hashes
 */
export type GetWebDownloadCachedAvailabilityBatchRequest = z.infer<
  typeof getWebDownloadCachedAvailabilityBatchRequest
>;

/**
 * Zod schema for mapping API responses to the GetWebDownloadCachedAvailabilityBatchRequest application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getWebDownloadCachedAvailabilityBatchRequestResponse = z.lazy(() => {
  return z
    .object({
      hashes: z.array(z.string()).optional().nullable(),
    })
    .transform((data) => ({
      hashes: data['hashes'],
    }));
});

/**
 * Zod schema for mapping the GetWebDownloadCachedAvailabilityBatchRequest application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getWebDownloadCachedAvailabilityBatchRequestRequest = z.lazy(() => {
  return z
    .object({
      hashes: z.array(z.string()).optional().nullable(),
    })
    .transform((data) => ({
      hashes: data['hashes'],
    }));
});
