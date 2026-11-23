import { z } from 'zod';

/**
 * Zod schema for the EditTagRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const editTagRequest = z.lazy(() => {
  return z.object({
    id: z.number().optional().nullable(),
    newName: z.string().optional().nullable(),
  });
});

/**
 * @typedef {EditTagRequest} editTagRequest
 * @property {number} id
 * @property {string} newName
 */
export type EditTagRequest = z.infer<typeof editTagRequest>;

/**
 * Zod schema for mapping API responses to the EditTagRequest application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const editTagRequestResponse = z.lazy(() => {
  return z
    .object({
      id: z.number().optional().nullable(),
      new_name: z.string().optional().nullable(),
    })
    .transform((data) => ({
      id: data['id'],
      newName: data['new_name'],
    }));
});

/**
 * Zod schema for mapping the EditTagRequest application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const editTagRequestRequest = z.lazy(() => {
  return z
    .object({
      id: z.number().optional().nullable(),
      newName: z.string().optional().nullable(),
    })
    .transform((data) => ({
      id: data['id'],
      new_name: data['newName'],
    }));
});
