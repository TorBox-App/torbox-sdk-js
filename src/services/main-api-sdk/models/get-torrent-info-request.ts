import { z } from 'zod';

/**
 * Zod schema for the GetTorrentInfoRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const getTorrentInfoRequest = z.lazy(() => {
  return z.object({
    magnet: z.string().optional().nullable(),
    file: z
      .union([
        z.instanceof(ArrayBuffer),
        z.instanceof(Uint8Array),
        z.instanceof(Buffer),
        z.instanceof(Blob),
      ])
      .optional()
      .nullable(),
    hash: z.string().optional().nullable(),
    timeout: z.string().optional().nullable(),
    useCacheLookup: z.string().optional().nullable(),
    peersOnly: z.string().optional().nullable(),
  });
});

/**
 * @typedef {GetTorrentInfoRequest} getTorrentInfoRequest
 * @property {string} magnet
 * @property {ArrayBuffer | Uint8Array | Buffer | Blob} file
 * @property {string} hash
 * @property {string} timeout
 * @property {string} useCacheLookup
 * @property {string} peersOnly
 */
export type GetTorrentInfoRequest = z.infer<typeof getTorrentInfoRequest>;

/**
 * Zod schema for mapping API responses to the GetTorrentInfoRequest application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getTorrentInfoRequestResponse = z.lazy(() => {
  return z
    .object({
      magnet: z.string().optional().nullable(),
      file: z
        .union([
          z.instanceof(ArrayBuffer),
          z.instanceof(Uint8Array),
          z.instanceof(Buffer),
          z.instanceof(Blob),
        ])
        .optional()
        .nullable(),
      hash: z.string().optional().nullable(),
      timeout: z.string().optional().nullable(),
      use_cache_lookup: z.string().optional().nullable(),
      peers_only: z.string().optional().nullable(),
    })
    .transform((data) => ({
      magnet: data['magnet'],
      file: data['file'],
      hash: data['hash'],
      timeout: data['timeout'],
      useCacheLookup: data['use_cache_lookup'],
      peersOnly: data['peers_only'],
    }));
});

/**
 * Zod schema for mapping the GetTorrentInfoRequest application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getTorrentInfoRequestRequest = z.lazy(() => {
  return z
    .object({
      magnet: z.string().optional().nullable(),
      file: z
        .union([
          z.instanceof(ArrayBuffer),
          z.instanceof(Uint8Array),
          z.instanceof(Buffer),
          z.instanceof(Blob),
        ])
        .optional()
        .nullable(),
      hash: z.string().optional().nullable(),
      timeout: z.string().optional().nullable(),
      useCacheLookup: z.string().optional().nullable(),
      peersOnly: z.string().optional().nullable(),
    })
    .transform((data) => ({
      magnet: data['magnet'],
      file: data['file'],
      hash: data['hash'],
      timeout: data['timeout'],
      use_cache_lookup: data['useCacheLookup'],
      peers_only: data['peersOnly'],
    }));
});
