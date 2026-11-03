import { z } from 'zod';

/**
 * Zod schema for the GetUsenetCachedAvailabilityBatchRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const getUsenetCachedAvailabilityBatchRequest = z.lazy(() => {
  return z.object({
    hashes: z.array(z.string()).optional().nullable(),
  });
});

/**
 * @typedef {GetUsenetCachedAvailabilityBatchRequest} getUsenetCachedAvailabilityBatchRequest
 * @property {string[]} hashes
 */
export type GetUsenetCachedAvailabilityBatchRequest = z.infer<
  typeof getUsenetCachedAvailabilityBatchRequest
>;

/**
 * Zod schema for mapping API responses to the GetUsenetCachedAvailabilityBatchRequest application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getUsenetCachedAvailabilityBatchRequestResponse = z.lazy(() => {
  return z
    .object({
      hashes: z.array(z.string()).optional().nullable(),
    })
    .transform((data) => ({
      hashes: data['hashes'],
    }));
});

/**
 * Zod schema for mapping the GetUsenetCachedAvailabilityBatchRequest application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getUsenetCachedAvailabilityBatchRequestRequest = z.lazy(() => {
  return z
    .object({
      hashes: z.array(z.string()).optional().nullable(),
    })
    .transform((data) => ({
      hashes: data['hashes'],
    }));
});
