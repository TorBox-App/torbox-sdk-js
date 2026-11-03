import { z } from 'zod';

/**
 * Zod schema for the CreateUsenetDownloadRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const createUsenetDownloadRequest = z.lazy(() => {
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
    link: z.string().optional().nullable(),
    name: z.string().optional().nullable(),
    password: z.string().optional().nullable(),
    postProcessing: z.string().optional().nullable(),
    asQueued: z.string().optional().nullable(),
    addOnlyIfCached: z.string().optional().nullable(),
  });
});

/**
 * @typedef {CreateUsenetDownloadRequest} createUsenetDownloadRequest
 * @property {ArrayBuffer | Uint8Array | Buffer | Blob} file
 * @property {string} link
 * @property {string} name
 * @property {string} password
 * @property {string} postProcessing
 * @property {string} asQueued
 * @property {string} addOnlyIfCached
 */
export type CreateUsenetDownloadRequest = z.infer<typeof createUsenetDownloadRequest>;

/**
 * Zod schema for mapping API responses to the CreateUsenetDownloadRequest application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createUsenetDownloadRequestResponse = z.lazy(() => {
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
      link: z.string().optional().nullable(),
      name: z.string().optional().nullable(),
      password: z.string().optional().nullable(),
      post_processing: z.string().optional().nullable(),
      as_queued: z.string().optional().nullable(),
      add_only_if_cached: z.string().optional().nullable(),
    })
    .transform((data) => ({
      file: data['file'],
      link: data['link'],
      name: data['name'],
      password: data['password'],
      postProcessing: data['post_processing'],
      asQueued: data['as_queued'],
      addOnlyIfCached: data['add_only_if_cached'],
    }));
});

/**
 * Zod schema for mapping the CreateUsenetDownloadRequest application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createUsenetDownloadRequestRequest = z.lazy(() => {
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
      link: z.string().optional().nullable(),
      name: z.string().optional().nullable(),
      password: z.string().optional().nullable(),
      postProcessing: z.string().optional().nullable(),
      asQueued: z.string().optional().nullable(),
      addOnlyIfCached: z.string().optional().nullable(),
    })
    .transform((data) => ({
      file: data['file'],
      link: data['link'],
      name: data['name'],
      password: data['password'],
      post_processing: data['postProcessing'],
      as_queued: data['asQueued'],
      add_only_if_cached: data['addOnlyIfCached'],
    }));
});
