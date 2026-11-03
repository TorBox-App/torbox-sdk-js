import { z } from 'zod';

/**
 * Zod schema for the GetTokenFromDeviceCodeProcessRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const getTokenFromDeviceCodeProcessRequest = z.lazy(() => {
  return z.object({
    deviceCode: z.string().optional().nullable(),
  });
});

/**
 * @typedef {GetTokenFromDeviceCodeProcessRequest} getTokenFromDeviceCodeProcessRequest
 * @property {string} deviceCode
 */
export type GetTokenFromDeviceCodeProcessRequest = z.infer<
  typeof getTokenFromDeviceCodeProcessRequest
>;

/**
 * Zod schema for mapping API responses to the GetTokenFromDeviceCodeProcessRequest application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getTokenFromDeviceCodeProcessRequestResponse = z.lazy(() => {
  return z
    .object({
      device_code: z.string().optional().nullable(),
    })
    .transform((data) => ({
      deviceCode: data['device_code'],
    }));
});

/**
 * Zod schema for mapping the GetTokenFromDeviceCodeProcessRequest application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getTokenFromDeviceCodeProcessRequestRequest = z.lazy(() => {
  return z
    .object({
      deviceCode: z.string().optional().nullable(),
    })
    .transform((data) => ({
      device_code: data['deviceCode'],
    }));
});
