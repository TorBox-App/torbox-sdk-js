import { z } from 'zod';
import { getUsenetCachedAvailabilityOkResponseData, getUsenetCachedAvailabilityOkResponseDataResponse } from './get-usenet-cached-availability-response-data';

/**
 * The shape of the model inside the application code - what the users use
 */
export const getUsenetCachedAvailabilityOkResponse = z.lazy(() => {
  return z.object({
    data: z.union([z.array(getUsenetCachedAvailabilityOkResponseData), z.record(z.string(), getUsenetCachedAvailabilityOkResponseData)]).optional(),
    detail: z.string().optional(),
    error: z.string().optional().nullable(),
    success: z.boolean().optional(),
  });
});

/**
 *
 * @typedef  {GetUsenetCachedAvailabilityOkResponse} getUsenetCachedAvailabilityOkResponse
 * @property {any}
 * @property {string}
 * @property {string}
 * @property {boolean}
 */
export type GetUsenetCachedAvailabilityOkResponse = z.infer<typeof getUsenetCachedAvailabilityOkResponse>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const getUsenetCachedAvailabilityOkResponseResponse = z.lazy(() => {
  return z
    .object({
      data: z.union([z.array(getUsenetCachedAvailabilityOkResponseDataResponse), z.record(z.string(), getUsenetCachedAvailabilityOkResponseDataResponse)]).optional(),
      detail: z.string().optional(),
      error: z.string().optional().nullable(),
      success: z.boolean().optional(),
    })
    .transform((data) => ({
      data: data['data'],
      detail: data['detail'],
      error: data['error'],
      success: data['success'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const getUsenetCachedAvailabilityOkResponseRequest = z.lazy(() => {
  return z
    .object({
      data: z.union([z.array(getUsenetCachedAvailabilityOkResponseDataResponse), z.record(z.string(), getUsenetCachedAvailabilityOkResponseDataResponse)]).optional(),
      detail: z.string().optional(),
      error: z.string().optional().nullable(),
      success: z.boolean().optional(),
    })
    .transform((data) => ({
      data: data['data'],
      detail: data['detail'],
      error: data['error'],
      success: data['success'],
    }));
});
