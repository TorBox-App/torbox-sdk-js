import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const addReferralToAccountOkResponse = z.lazy(() => {
  return z.object({
    data: z.any().optional().nullable(),
    detail: z.string().optional(),
    success: z.boolean().optional(),
  });
});

/**
 *
 * @typedef  {AddReferralToAccountOkResponse} addReferralToAccountOkResponse
 * @property {any}
 * @property {string}
 * @property {boolean}
 */
export type AddReferralToAccountOkResponse = z.infer<typeof addReferralToAccountOkResponse>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const addReferralToAccountOkResponseResponse = z.lazy(() => {
  return z
    .object({
      data: z.any().optional().nullable(),
      detail: z.string().optional(),
      success: z.boolean().optional(),
    })
    .transform((data) => ({
      data: data['data'],
      detail: data['detail'],
      success: data['success'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const addReferralToAccountOkResponseRequest = z.lazy(() => {
  return z
    .object({ data: z.any().nullish(), detail: z.string().nullish(), success: z.boolean().nullish() })
    .transform((data) => ({
      data: data['data'],
      detail: data['detail'],
      success: data['success'],
    }));
});