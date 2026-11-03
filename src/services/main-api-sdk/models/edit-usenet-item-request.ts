import { z } from 'zod';

/**
 * Zod schema for the EditUsenetItemRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const editUsenetItemRequest = z.lazy(() => {
  return z.object({
    usenetDownloadId: z.number().optional().nullable(),
    name: z.string().optional().nullable(),
    tags: z.array(z.string()).optional().nullable(),
    alternativeHashes: z.array(z.string()).optional().nullable(),
    airlocked: z.boolean().optional().nullable(),
  });
});

/**
 * @typedef {EditUsenetItemRequest} editUsenetItemRequest
 * @property {number} usenetDownloadId
 * @property {string} name
 * @property {string[]} tags
 * @property {string[]} alternativeHashes
 * @property {boolean} airlocked
 */
export type EditUsenetItemRequest = z.infer<typeof editUsenetItemRequest>;

/**
 * Zod schema for mapping API responses to the EditUsenetItemRequest application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const editUsenetItemRequestResponse = z.lazy(() => {
  return z
    .object({
      usenet_download_id: z.number().optional().nullable(),
      name: z.string().optional().nullable(),
      tags: z.array(z.string()).optional().nullable(),
      alternative_hashes: z.array(z.string()).optional().nullable(),
      airlocked: z.boolean().optional().nullable(),
    })
    .transform((data) => ({
      usenetDownloadId: data['usenet_download_id'],
      name: data['name'],
      tags: data['tags'],
      alternativeHashes: data['alternative_hashes'],
      airlocked: data['airlocked'],
    }));
});

/**
 * Zod schema for mapping the EditUsenetItemRequest application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const editUsenetItemRequestRequest = z.lazy(() => {
  return z
    .object({
      usenetDownloadId: z.number().optional().nullable(),
      name: z.string().optional().nullable(),
      tags: z.array(z.string()).optional().nullable(),
      alternativeHashes: z.array(z.string()).optional().nullable(),
      airlocked: z.boolean().optional().nullable(),
    })
    .transform((data) => ({
      usenet_download_id: data['usenetDownloadId'],
      name: data['name'],
      tags: data['tags'],
      alternative_hashes: data['alternativeHashes'],
      airlocked: data['airlocked'],
    }));
});
