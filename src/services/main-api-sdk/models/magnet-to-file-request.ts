import { z } from 'zod';

/**
 * Zod schema for the MagnetToFileRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const magnetToFileRequest = z.lazy(() => {
  return z.object({
    magnet: z.string().optional().nullable(),
  });
});

/**
 * @typedef {MagnetToFileRequest} magnetToFileRequest
 * @property {string} magnet
 */
export type MagnetToFileRequest = z.infer<typeof magnetToFileRequest>;

/**
 * Zod schema for mapping API responses to the MagnetToFileRequest application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const magnetToFileRequestResponse = z.lazy(() => {
  return z
    .object({
      magnet: z.string().optional().nullable(),
    })
    .transform((data) => ({
      magnet: data['magnet'],
    }));
});

/**
 * Zod schema for mapping the MagnetToFileRequest application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const magnetToFileRequestRequest = z.lazy(() => {
  return z
    .object({
      magnet: z.string().optional().nullable(),
    })
    .transform((data) => ({
      magnet: data['magnet'],
    }));
});
