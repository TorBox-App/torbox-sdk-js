import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const xxxxxxxxxxxxxxxxxx = z.lazy(() => {
  return z.object({
    hash: z.string().optional(),
    name: z.string().optional(),
    size: z.number().optional(),
  });
});

/**
 *
 * @typedef  {Xxxxxxxxxxxxxxxxxx} xxxxxxxxxxxxxxxxxx
 * @property {string}
 * @property {string}
 * @property {number}
 */
export type Xxxxxxxxxxxxxxxxxx = z.infer<typeof xxxxxxxxxxxxxxxxxx>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const xxxxxxxxxxxxxxxxxxResponse = z.lazy(() => {
  return z
    .object({
      hash: z.string().optional(),
      name: z.string().optional(),
      size: z.number().optional(),
    })
    .transform((data) => ({
      hash: data['hash'],
      name: data['name'],
      size: data['size'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const xxxxxxxxxxxxxxxxxxRequest = z.lazy(() => {
  return z
    .object({ hash: z.string().nullish(), name: z.string().nullish(), size: z.number().nullish() })
    .transform((data) => ({
      hash: data['hash'],
      name: data['name'],
      size: data['size'],
    }));
});