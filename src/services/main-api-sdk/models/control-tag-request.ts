import { z } from 'zod';

/**
 * Zod schema for the ControlTagRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const controlTagRequest = z.lazy(() => {
  return z.object({
    id: z.number().optional().nullable(),
    operation: z.string().optional().nullable(),
  });
});

/**
 * @typedef {ControlTagRequest} controlTagRequest
 * @property {number} id
 * @property {string} operation
 */
export type ControlTagRequest = z.infer<typeof controlTagRequest>;

/**
 * Zod schema for mapping API responses to the ControlTagRequest application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const controlTagRequestResponse = z.lazy(() => {
  return z
    .object({
      id: z.number().optional().nullable(),
      operation: z.string().optional().nullable(),
    })
    .transform((data) => ({
      id: data['id'],
      operation: data['operation'],
    }));
});

/**
 * Zod schema for mapping the ControlTagRequest application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const controlTagRequestRequest = z.lazy(() => {
  return z
    .object({
      id: z.number().optional().nullable(),
      operation: z.string().optional().nullable(),
    })
    .transform((data) => ({
      id: data['id'],
      operation: data['operation'],
    }));
});
