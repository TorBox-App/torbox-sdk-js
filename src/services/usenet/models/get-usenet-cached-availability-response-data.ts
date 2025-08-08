import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const getUsenetCachedAvailabilityOkResponseData = z.lazy(() => {
  return z.object({
    name: z.string().optional(),
    size: z.number().optional(),
    hash: z.string().optional(),
  });
});

/**
 *
 * @typedef  {GetUsenetCachedAvailabilityOkResponseData} getUsenetCachedAvailabilityOkResponseData
 * @property {string}
 * @property {number}
 * @property {string}
 */
export type GetUsenetCachedAvailabilityOkResponseData = z.infer<typeof getUsenetCachedAvailabilityOkResponseData>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const getUsenetCachedAvailabilityOkResponseDataResponse = z.lazy(() => {
  return z
    .object({
      name: z.string().optional(),
      size: z.number().optional(),
      hash: z.string().optional(),
    })
    .transform((data) => ({
      name: data['name'],
      size: data['size'],
      hash: data['hash'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const getUsenetCachedAvailabilityOkResponseDataRequest = z.lazy(() => {
  return z
    .object({
      name: z.string().optional(),
      size: z.number().optional(),
      hash: z.string().optional(),
    })
    .transform((data) => ({
      name: data['name'],
      size: data['size'],
      hash: data['hash'],
    }));
});
