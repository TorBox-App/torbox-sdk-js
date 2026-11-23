import { z } from 'zod';

/**
 * Zod schema for the ChatWithAssistantRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const chatWithAssistantRequest = z.lazy(() => {
  return z.object({
    message: z.string().optional().nullable(),
    sessionId: z.string().optional().nullable(),
    files: z.array(z.string()).optional().nullable(),
    blocks: z.array(z.string()).optional().nullable(),
  });
});

/**
 * @typedef {ChatWithAssistantRequest} chatWithAssistantRequest
 * @property {string} message
 * @property {string} sessionId
 * @property {string[]} files
 * @property {string[]} blocks
 */
export type ChatWithAssistantRequest = z.infer<typeof chatWithAssistantRequest>;

/**
 * Zod schema for mapping API responses to the ChatWithAssistantRequest application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const chatWithAssistantRequestResponse = z.lazy(() => {
  return z
    .object({
      message: z.string().optional().nullable(),
      session_id: z.string().optional().nullable(),
      files: z.array(z.string()).optional().nullable(),
      blocks: z.array(z.string()).optional().nullable(),
    })
    .transform((data) => ({
      message: data['message'],
      sessionId: data['session_id'],
      files: data['files'],
      blocks: data['blocks'],
    }));
});

/**
 * Zod schema for mapping the ChatWithAssistantRequest application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const chatWithAssistantRequestRequest = z.lazy(() => {
  return z
    .object({
      message: z.string().optional().nullable(),
      sessionId: z.string().optional().nullable(),
      files: z.array(z.string()).optional().nullable(),
      blocks: z.array(z.string()).optional().nullable(),
    })
    .transform((data) => ({
      message: data['message'],
      session_id: data['sessionId'],
      files: data['files'],
      blocks: data['blocks'],
    }));
});
