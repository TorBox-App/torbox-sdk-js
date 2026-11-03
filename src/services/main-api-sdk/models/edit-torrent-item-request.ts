import { z } from 'zod';

/**
 * Zod schema for the EditTorrentItemRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const editTorrentItemRequest = z.lazy(() => {
  return z.object({
    torrentId: z.number().optional().nullable(),
    name: z.string().optional().nullable(),
    tags: z.array(z.string()).optional().nullable(),
    alternativeHashes: z.array(z.string()).optional().nullable(),
    airlocked: z.boolean().optional().nullable(),
  });
});

/**
 * @typedef {EditTorrentItemRequest} editTorrentItemRequest
 * @property {number} torrentId
 * @property {string} name
 * @property {string[]} tags
 * @property {string[]} alternativeHashes
 * @property {boolean} airlocked
 */
export type EditTorrentItemRequest = z.infer<typeof editTorrentItemRequest>;

/**
 * Zod schema for mapping API responses to the EditTorrentItemRequest application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const editTorrentItemRequestResponse = z.lazy(() => {
  return z
    .object({
      torrent_id: z.number().optional().nullable(),
      name: z.string().optional().nullable(),
      tags: z.array(z.string()).optional().nullable(),
      alternative_hashes: z.array(z.string()).optional().nullable(),
      airlocked: z.boolean().optional().nullable(),
    })
    .transform((data) => ({
      torrentId: data['torrent_id'],
      name: data['name'],
      tags: data['tags'],
      alternativeHashes: data['alternative_hashes'],
      airlocked: data['airlocked'],
    }));
});

/**
 * Zod schema for mapping the EditTorrentItemRequest application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const editTorrentItemRequestRequest = z.lazy(() => {
  return z
    .object({
      torrentId: z.number().optional().nullable(),
      name: z.string().optional().nullable(),
      tags: z.array(z.string()).optional().nullable(),
      alternativeHashes: z.array(z.string()).optional().nullable(),
      airlocked: z.boolean().optional().nullable(),
    })
    .transform((data) => ({
      torrent_id: data['torrentId'],
      name: data['name'],
      tags: data['tags'],
      alternative_hashes: data['alternativeHashes'],
      airlocked: data['airlocked'],
    }));
});
