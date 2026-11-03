import { z } from 'zod';

/**
 * Zod schema for the MainApiSdkRequestDownloadLinksPostRequest1 model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const mainApiSdkRequestDownloadLinksPostRequest1 = z.lazy(() => {
  return z.object({
    fileIds: z.array(z.number()).optional().nullable(),
  });
});

/**
 * @typedef {MainApiSdkRequestDownloadLinksPostRequest1} mainApiSdkRequestDownloadLinksPostRequest1
 * @property {number[]} fileIds
 */
export type MainApiSdkRequestDownloadLinksPostRequest1 = z.infer<
  typeof mainApiSdkRequestDownloadLinksPostRequest1
>;

/**
 * Zod schema for mapping API responses to the MainApiSdkRequestDownloadLinksPostRequest1 application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const mainApiSdkRequestDownloadLinksPostRequest1Response = z.lazy(() => {
  return z
    .object({
      file_ids: z.array(z.number()).optional().nullable(),
    })
    .transform((data) => ({
      fileIds: data['file_ids'],
    }));
});

/**
 * Zod schema for mapping the MainApiSdkRequestDownloadLinksPostRequest1 application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const mainApiSdkRequestDownloadLinksPostRequest1Request = z.lazy(() => {
  return z
    .object({
      fileIds: z.array(z.number()).optional().nullable(),
    })
    .transform((data) => ({
      file_ids: data['fileIds'],
    }));
});
