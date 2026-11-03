import { z } from 'zod';

/**
 * Zod schema for the CreateWebDownloadRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const createWebDownloadRequest = z.lazy(() => {
  return z.object({
    link: z.string().optional().nullable(),
    password: z.string().optional().nullable(),
    name: z.string().optional().nullable(),
    asQueued: z.string().optional().nullable(),
    addOnlyIfCached: z.string().optional().nullable(),
  });
});

/**
 * @typedef {CreateWebDownloadRequest} createWebDownloadRequest
 * @property {string} link
 * @property {string} password
 * @property {string} name
 * @property {string} asQueued
 * @property {string} addOnlyIfCached
 */
export type CreateWebDownloadRequest = z.infer<typeof createWebDownloadRequest>;

/**
 * Zod schema for mapping API responses to the CreateWebDownloadRequest application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createWebDownloadRequestResponse = z.lazy(() => {
  return z
    .object({
      link: z.string().optional().nullable(),
      password: z.string().optional().nullable(),
      name: z.string().optional().nullable(),
      as_queued: z.string().optional().nullable(),
      add_only_if_cached: z.string().optional().nullable(),
    })
    .transform((data) => ({
      link: data['link'],
      password: data['password'],
      name: data['name'],
      asQueued: data['as_queued'],
      addOnlyIfCached: data['add_only_if_cached'],
    }));
});

/**
 * Zod schema for mapping the CreateWebDownloadRequest application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createWebDownloadRequestRequest = z.lazy(() => {
  return z
    .object({
      link: z.string().optional().nullable(),
      password: z.string().optional().nullable(),
      name: z.string().optional().nullable(),
      asQueued: z.string().optional().nullable(),
      addOnlyIfCached: z.string().optional().nullable(),
    })
    .transform((data) => ({
      link: data['link'],
      password: data['password'],
      name: data['name'],
      as_queued: data['asQueued'],
      add_only_if_cached: data['addOnlyIfCached'],
    }));
});
