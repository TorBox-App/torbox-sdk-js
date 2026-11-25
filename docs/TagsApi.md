# TagsApi

All URIs are relative to *https://api.torbox.app*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**controlTag**](TagsApi.md#controltag) | **POST** /v1/api/tags/controltag | Control Tag |
| [**editTag**](TagsApi.md#edittag) | **PUT** /v1/api/tags/edittag | Edit Tag |
| [**getTags**](TagsApi.md#gettags) | **GET** /v1/api/tags/mytags | Get User Tags |



## controlTag

> ControlTagResponse controlTag(ControlTag)

Control Tag

### Overview  Controls a tag. Currently, the only operation is \&quot;delete\&quot;, which deletes the tag and removes it from every download using it; the downloads stay in your account and are otherwise unmodified. The ID is the tag\&#39;s ID from &#x60;/mytags&#x60; endpoint.  ### Authorization  Requires an API key using the Authorization Bearer Header. 

### Example

```ts
import {
  Configuration,
  TagsApi,
} from '@torbox/torbox-api';
import type { ControlTagRequest } from '@torbox/torbox-api';

async function example() {
  console.log("🚀 Testing @torbox/torbox-api SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: ApiKey
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TagsApi(config);

  const body = {
    // ControlTag
    ControlTag: {"id":0,"operation":"delete"},
  } satisfies ControlTagRequest;

  try {
    const data = await api.controlTag(body);
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
| **ControlTag** | [ControlTag](ControlTag.md) |  | |

### Return type

[**ControlTagResponse**](ControlTagResponse.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **422** | Validation Error |  -  |
| **429** | Too Many Requests |  -  |
| **500** | Internal Server Error |  -  |
| **503** | Service Unavailable |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## editTag

> EditTagResponse editTag(EditTag)

Edit Tag

### Overview  Renames a tag. This new name is case sensitive. The ID is the tag\&#39;s ID from the &#x60;/mytags&#x60;. Fails with &#x60;DUPLICATE_ITEM&#x60; when another of the user\&#39;s tags already has the same name, in any casing.  ### Authorization  Requires an API key using the Authorization Bearer Header. 

### Example

```ts
import {
  Configuration,
  TagsApi,
} from '@torbox/torbox-api';
import type { EditTagRequest } from '@torbox/torbox-api';

async function example() {
  console.log("🚀 Testing @torbox/torbox-api SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: ApiKey
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TagsApi(config);

  const body = {
    // EditTag
    EditTag: {"id":0,"new_name":"string"},
  } satisfies EditTagRequest;

  try {
    const data = await api.editTag(body);
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
| **EditTag** | [EditTag](EditTag.md) |  | |

### Return type

[**EditTagResponse**](EditTagResponse.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **409** | Conflict |  -  |
| **422** | Validation Error |  -  |
| **429** | Too Many Requests |  -  |
| **500** | Internal Server Error |  -  |
| **503** | Service Unavailable |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getTags

> GetTagsResponse getTags()

Get User Tags

### Overview  Gets the tags attached to a user account, with the downloads using each tag, their count and total size.  ### Authorization  Requires an API key using the Authorization Bearer Header. 

### Example

```ts
import {
  Configuration,
  TagsApi,
} from '@torbox/torbox-api';
import type { GetTagsRequest } from '@torbox/torbox-api';

async function example() {
  console.log("🚀 Testing @torbox/torbox-api SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: ApiKey
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TagsApi(config);

  try {
    const data = await api.getTags();
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

[**GetTagsResponse**](GetTagsResponse.md)

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

