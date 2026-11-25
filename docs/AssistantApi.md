# AssistantApi

All URIs are relative to *https://api.torbox.app*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**chatWithAssistant**](AssistantApi.md#chatwithassistant) | **POST** /v1/api/assistant/chat | Chat With Assistant |
| [**deleteAssistantConversation**](AssistantApi.md#deleteassistantconversation) | **DELETE** /v1/api/assistant/conversations/{session_id} | Delete Assistant Conversation |
| [**deleteAssistantConversations**](AssistantApi.md#deleteassistantconversations) | **DELETE** /v1/api/assistant/conversations | Delete All Assistant Conversations |
| [**getAssistantUsage**](AssistantApi.md#getassistantusage) | **GET** /v1/api/assistant/usage | Get Assistant Usage |
| [**listAssistantConversations**](AssistantApi.md#listassistantconversations) | **GET** /v1/api/assistant/conversations | Get Assistant Conversations |
| [**readAssistantConversation**](AssistantApi.md#readassistantconversation) | **GET** /v1/api/assistant/conversations/{session_id} | Get Assistant Conversation |



## chatWithAssistant

> string chatWithAssistant(ChatRequest)

Chat With Assistant

### Overview  Send a message to the AI Assistant. Optionally include a &#x60;session_id&#x60; to resume a previous conversation. If no &#x60;session_id&#x60; is given, the AI will have no previous context and will create a new conversation.  Also included is a way to upload &#x60;files&#x60; in base64 allowing you to attach a file that the AI Assistant can use.  We also allow you to send &#x60;blocks&#x60; which is a list of strings that state what additional features your chat interface includes. If no &#x60;blocks&#x60; are sent, responses are sent in plain text and markdown (for things like tables or bolding text).  The answer is streamed as plain text while it is written. Send the header &#x60;Accept: text/event-stream&#x60; to get it as server-sent events instead: &#x60;tool&#x60; with the &#x60;name&#x60; of each tool the assistant uses, &#x60;text&#x60; with each piece of the answer, &#x60;support&#x60; with the &#x60;id&#x60; of the support conversation when the chat is handed to the support team, &#x60;usage&#x60; with the share of the day\&#39;s allowance that is &#x60;used&#x60; and when it &#x60;resets_at&#x60;, &#x60;error&#x60; with the error if the answer fails, and &#x60;done&#x60; at the end.  &#x60;&#x60;&#x60; event: tool data: {\&quot;name\&quot;: \&quot;get_torrent_list\&quot;}  event: text data: {\&quot;text\&quot;: \&quot;You have 2 torrents, \&quot;}  event: text data: {\&quot;text\&quot;: \&quot;and both have finished downloading.\&quot;}  event: usage data: {\&quot;used\&quot;: 0.0123, \&quot;resets_at\&quot;: \&quot;2026-01-01T00:00:00Z\&quot;}  event: done data: {} &#x60;&#x60;&#x60;  The &#x60;X-Session-ID&#x60; response header holds the &#x60;session_id&#x60; to send with the next message.  ### Authorization  Requires an API key using the Authorization Bearer Header. 

### Example

```ts
import {
  Configuration,
  AssistantApi,
} from '@torbox/torbox-api';
import type { ChatWithAssistantRequest } from '@torbox/torbox-api';

async function example() {
  console.log("🚀 Testing @torbox/torbox-api SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: ApiKey
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AssistantApi(config);

  const body = {
    // ChatRequest
    ChatRequest: {"message":"string","session_id":"string","files":[{"name":"string","data":"string"}],"blocks":["string"]},
  } satisfies ChatWithAssistantRequest;

  try {
    const data = await api.chatWithAssistant(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **ChatRequest** | [ChatRequest](ChatRequest.md) |  | |

### Return type

**string**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `text/plain`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **422** | Validation Error |  -  |
| **429** | Too Many Requests |  -  |
| **500** | Internal Server Error |  -  |
| **503** | Service Unavailable |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteAssistantConversation

> DeleteAssistantConversationResponse deleteAssistantConversation(session_id)

Delete Assistant Conversation

### Overview  Deletes a specific conversation with the AI assistant. Usage persists from the conversation.  ### Authorization  Requires an API key using the Authorization Bearer Header. 

### Example

```ts
import {
  Configuration,
  AssistantApi,
} from '@torbox/torbox-api';
import type { DeleteAssistantConversationRequest } from '@torbox/torbox-api';

async function example() {
  console.log("🚀 Testing @torbox/torbox-api SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: ApiKey
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AssistantApi(config);

  const body = {
    // string | The session you want to retrieve.
    session_id: session_id_example,
  } satisfies DeleteAssistantConversationRequest;

  try {
    const data = await api.deleteAssistantConversation(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **session_id** | `string` | The session you want to retrieve. | [Defaults to `undefined`] |

### Return type

[**DeleteAssistantConversationResponse**](DeleteAssistantConversationResponse.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **422** | Validation Error |  -  |
| **429** | Too Many Requests |  -  |
| **500** | Internal Server Error |  -  |
| **503** | Service Unavailable |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteAssistantConversations

> DeleteAssistantConversationsResponse deleteAssistantConversations()

Delete All Assistant Conversations

### Overview  Deletes all conversations for a user\&#39;s account. Usage persists from the conversations.  ### Authorization  Requires an API key using the Authorization Bearer Header. 

### Example

```ts
import {
  Configuration,
  AssistantApi,
} from '@torbox/torbox-api';
import type { DeleteAssistantConversationsRequest } from '@torbox/torbox-api';

async function example() {
  console.log("🚀 Testing @torbox/torbox-api SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: ApiKey
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AssistantApi(config);

  try {
    const data = await api.deleteAssistantConversations();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**DeleteAssistantConversationsResponse**](DeleteAssistantConversationsResponse.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **429** | Too Many Requests |  -  |
| **500** | Internal Server Error |  -  |
| **503** | Service Unavailable |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getAssistantUsage

> GetAssistantUsageResponse getAssistantUsage()

Get Assistant Usage

### Overview  Gets the current user\&#39;s AI assistant usage. Users are limited to a certain number of tokens daily, and this endpoint tells you exactly how much is left as a percentage. This makes it easy for developers so they don\&#39;t have to spend time counting tokens, which is usually inaccurate.  ### Authorization  Requires an API key using the Authorization Bearer Header. 

### Example

```ts
import {
  Configuration,
  AssistantApi,
} from '@torbox/torbox-api';
import type { GetAssistantUsageRequest } from '@torbox/torbox-api';

async function example() {
  console.log("🚀 Testing @torbox/torbox-api SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: ApiKey
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AssistantApi(config);

  try {
    const data = await api.getAssistantUsage();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**GetAssistantUsageResponse**](GetAssistantUsageResponse.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **429** | Too Many Requests |  -  |
| **500** | Internal Server Error |  -  |
| **503** | Service Unavailable |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listAssistantConversations

> ListAssistantConversationsResponse listAssistantConversations()

Get Assistant Conversations

### Overview  Gets the user\&#39;s open conversations. Conversations are sorted newest first. Each conversation is kept for 30 days after its last message.  ### Authorization  Requires an API key using the Authorization Bearer Header. 

### Example

```ts
import {
  Configuration,
  AssistantApi,
} from '@torbox/torbox-api';
import type { ListAssistantConversationsRequest } from '@torbox/torbox-api';

async function example() {
  console.log("🚀 Testing @torbox/torbox-api SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: ApiKey
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AssistantApi(config);

  try {
    const data = await api.listAssistantConversations();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**ListAssistantConversationsResponse**](ListAssistantConversationsResponse.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **429** | Too Many Requests |  -  |
| **500** | Internal Server Error |  -  |
| **503** | Service Unavailable |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## readAssistantConversation

> ReadAssistantConversationResponse readAssistantConversation(session_id, since)

Get Assistant Conversation

### Overview  Get a specific user conversation with the AI assistant.  You can pass the &#x60;since&#x60; parameter with a Unix timestamp, and will show any revisions since that time, this way, you don\&#39;t waste bandwidth retrieving and updating the entire conversation. If no update has been made since, the data return will be null.  ### Authorization  Requires an API key using the Authorization Bearer Header. 

### Example

```ts
import {
  Configuration,
  AssistantApi,
} from '@torbox/torbox-api';
import type { ReadAssistantConversationRequest } from '@torbox/torbox-api';

async function example() {
  console.log("🚀 Testing @torbox/torbox-api SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: ApiKey
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AssistantApi(config);

  const body = {
    // string | The session you want to retrieve.
    session_id: session_id_example,
    // number | Unix timestamp of the conversation you want to get since this time. (optional)
    since: 789,
  } satisfies ReadAssistantConversationRequest;

  try {
    const data = await api.readAssistantConversation(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **session_id** | `string` | The session you want to retrieve. | [Defaults to `undefined`] |
| **since** | `number` | Unix timestamp of the conversation you want to get since this time. | [Optional] [Defaults to `undefined`] |

### Return type

[**ReadAssistantConversationResponse**](ReadAssistantConversationResponse.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **422** | Validation Error |  -  |
| **429** | Too Many Requests |  -  |
| **500** | Internal Server Error |  -  |
| **503** | Service Unavailable |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

