import { z } from 'zod';

/**
 * Zod schema for the EditWebDownloadItemRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const editWebDownloadItemRequest = z.lazy(() => {
  return z.object({
    webdlId: z.number().optional().nullable(),
    name: z.string().optional().nullable(),
    tags: z.array(z.string()).optional().nullable(),
    alternativeHashes: z.array(z.string()).optional().nullable(),
    airlocked: z.boolean().optional().nullable(),
  });
});

/**
 * @typedef {EditWebDownloadItemRequest} editWebDownloadItemRequest
 * @property {number} webdlId
 * @property {string} name
 * @property {string[]} tags
 * @property {string[]} alternativeHashes
 * @property {boolean} airlocked
 */
export type EditWebDownloadItemRequest = z.infer<typeof editWebDownloadItemRequest>;

/**
 * Zod schema for mapping API responses to the EditWebDownloadItemRequest application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const editWebDownloadItemRequestResponse = z.lazy(() => {
  return z
    .object({
      webdl_id: z.number().optional().nullable(),
      name: z.string().optional().nullable(),
      tags: z.array(z.string()).optional().nullable(),
      alternative_hashes: z.array(z.string()).optional().nullable(),
      airlocked: z.boolean().optional().nullable(),
    })
    .transform((data) => ({
      webdlId: data['webdl_id'],
      name: data['name'],
      tags: data['tags'],
      alternativeHashes: data['alternative_hashes'],
      airlocked: data['airlocked'],
    }));
});

/**
 * Zod schema for mapping the EditWebDownloadItemRequest application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const editWebDownloadItemRequestRequest = z.lazy(() => {
  return z
    .object({
      webdlId: z.number().optional().nullable(),
      name: z.string().optional().nullable(),
      tags: z.array(z.string()).optional().nullable(),
      alternativeHashes: z.array(z.string()).optional().nullable(),
      airlocked: z.boolean().optional().nullable(),
    })
    .transform((data) => ({
      webdl_id: data['webdlId'],
      name: data['name'],
      tags: data['tags'],
      alternative_hashes: data['alternativeHashes'],
      airlocked: data['airlocked'],
    }));
});
