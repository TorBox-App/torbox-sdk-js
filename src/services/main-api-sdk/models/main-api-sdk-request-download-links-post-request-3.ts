import { z } from 'zod';

/**
 * Zod schema for the MainApiSdkRequestDownloadLinksPostRequest3 model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const mainApiSdkRequestDownloadLinksPostRequest3 = z.lazy(() => {
  return z.object({
    fileIds: z.array(z.number()).optional().nullable(),
  });
});

/**
 * @typedef {MainApiSdkRequestDownloadLinksPostRequest3} mainApiSdkRequestDownloadLinksPostRequest3
 * @property {number[]} fileIds
 */
export type MainApiSdkRequestDownloadLinksPostRequest3 = z.infer<
  typeof mainApiSdkRequestDownloadLinksPostRequest3
>;

/**
 * Zod schema for mapping API responses to the MainApiSdkRequestDownloadLinksPostRequest3 application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const mainApiSdkRequestDownloadLinksPostRequest3Response = z.lazy(() => {
  return z
    .object({
      file_ids: z.array(z.number()).optional().nullable(),
    })
    .transform((data) => ({
      fileIds: data['file_ids'],
    }));
});

/**
 * Zod schema for mapping the MainApiSdkRequestDownloadLinksPostRequest3 application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const mainApiSdkRequestDownloadLinksPostRequest3Request = z.lazy(() => {
  return z
    .object({
      fileIds: z.array(z.number()).optional().nullable(),
    })
    .transform((data) => ({
      file_ids: data['fileIds'],
    }));
});
