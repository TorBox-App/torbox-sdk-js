import { z } from 'zod';

/**
 * Zod schema for the AsyncCreateTorrentRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const asyncCreateTorrentRequest = z.lazy(() => {
  return z.object({
    file: z
      .union([
        z.instanceof(ArrayBuffer),
        z.instanceof(Uint8Array),
        z.instanceof(Buffer),
        z.instanceof(Blob),
      ])
      .optional()
      .nullable(),
    magnet: z.string().optional().nullable(),
    seed: z.string().optional().nullable(),
    allowZip: z.string().optional().nullable(),
    name: z.string().optional().nullable(),
    asQueued: z.string().optional().nullable(),
    addOnlyIfCached: z.string().optional().nullable(),
  });
});

/**
 * @typedef {AsyncCreateTorrentRequest} asyncCreateTorrentRequest
 * @property {ArrayBuffer | Uint8Array | Buffer | Blob} file
 * @property {string} magnet
 * @property {string} seed
 * @property {string} allowZip
 * @property {string} name
 * @property {string} asQueued
 * @property {string} addOnlyIfCached
 */
export type AsyncCreateTorrentRequest = z.infer<typeof asyncCreateTorrentRequest>;

/**
 * Zod schema for mapping API responses to the AsyncCreateTorrentRequest application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const asyncCreateTorrentRequestResponse = z.lazy(() => {
  return z
    .object({
      file: z
        .union([
          z.instanceof(ArrayBuffer),
          z.instanceof(Uint8Array),
          z.instanceof(Buffer),
          z.instanceof(Blob),
        ])
        .optional()
        .nullable(),
      magnet: z.string().optional().nullable(),
      seed: z.string().optional().nullable(),
      allow_zip: z.string().optional().nullable(),
      name: z.string().optional().nullable(),
      as_queued: z.string().optional().nullable(),
      add_only_if_cached: z.string().optional().nullable(),
    })
    .transform((data) => ({
      file: data['file'],
      magnet: data['magnet'],
      seed: data['seed'],
      allowZip: data['allow_zip'],
      name: data['name'],
      asQueued: data['as_queued'],
      addOnlyIfCached: data['add_only_if_cached'],
    }));
});

/**
 * Zod schema for mapping the AsyncCreateTorrentRequest application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const asyncCreateTorrentRequestRequest = z.lazy(() => {
  return z
    .object({
      file: z
        .union([
          z.instanceof(ArrayBuffer),
          z.instanceof(Uint8Array),
          z.instanceof(Buffer),
          z.instanceof(Blob),
        ])
        .optional()
        .nullable(),
      magnet: z.string().optional().nullable(),
      seed: z.string().optional().nullable(),
      allowZip: z.string().optional().nullable(),
      name: z.string().optional().nullable(),
      asQueued: z.string().optional().nullable(),
      addOnlyIfCached: z.string().optional().nullable(),
    })
    .transform((data) => ({
      file: data['file'],
      magnet: data['magnet'],
      seed: data['seed'],
      allow_zip: data['allowZip'],
      name: data['name'],
      as_queued: data['asQueued'],
      add_only_if_cached: data['addOnlyIfCached'],
    }));
});
