# QueuedApi

All URIs are relative to *https://api.torbox.app*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**controlQueuedDownloads**](QueuedApi.md#controlqueueddownloads) | **POST** /v1/api/queued/controlqueued | Control Queued Downloads |
| [**getQueuedDownloads**](QueuedApi.md#getqueueddownloads) | **GET** /v1/api/queued/getqueued | Get Queued Downloads |



## controlQueuedDownloads

> ControlQueuedDownloadsResponse controlQueuedDownloads(ControlQueuedDownload)

Control Queued Downloads

### Overview  Controls a queued torrent. By sending the queued torrent\&#39;s ID and the type of operation you want to perform, it will perform that action on the queued torrent.  Operations are either:  - **Delete** &#x60;deletes the queued download from your account&#x60;  - **Start** &#x60;starts a queued download, cannot be used with the \&quot;all\&quot; parameter&#x60;   ### Authorization  Requires an API key using the Authorization Bearer Header. 

### Example

```ts
import {
  Configuration,
  QueuedApi,
} from '@torbox/torbox-api';
import type { ControlQueuedDownloadsRequest } from '@torbox/torbox-api';

async function example() {
  console.log("🚀 Testing @torbox/torbox-api SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: ApiKey
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new QueuedApi(config);

  const body = {
    // ControlQueuedDownload
    ControlQueuedDownload: {"queued_id":0,"operation":"delete","all":false},
  } satisfies ControlQueuedDownloadsRequest;

  try {
    const data = await api.controlQueuedDownloads(body);
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
| **ControlQueuedDownload** | [ControlQueuedDownload](ControlQueuedDownload.md) |  | |

### Return type

[**ControlQueuedDownloadsResponse**](ControlQueuedDownloadsResponse.md)

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


## getQueuedDownloads

> GetQueuedDownloadsResponse getQueuedDownloads(id, type, bypass_cache, offset, limit)

Get Queued Downloads

### Overview  Retrieves all of a user\&#39;s queued downloads by type. If you want to get all 3 types, \&quot;torrent\&quot;, \&quot;usenet\&quot; and \&quot;webdl\&quot; then you will need to run this request 3 times, each with the different type.  ### Authorization  Requires an API key using the Authorization Bearer Header. 

### Example

```ts
import {
  Configuration,
  QueuedApi,
} from '@torbox/torbox-api';
import type { GetQueuedDownloadsRequest } from '@torbox/torbox-api';

async function example() {
  console.log("🚀 Testing @torbox/torbox-api SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: ApiKey
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new QueuedApi(config);

  const body = {
    // number | Determines the queued download requested, will return an object rather than list. Optional. (optional)
    id: 789,
    // string | The type of the queued download you want to retrieve. Can be \"torrent\", \"usenet\" or \"webdl\". Optional. Default is \"torrent\". (optional)
    type: type_example,
    // boolean | Allows you to bypass the cached data, and always get fresh information. Useful if constantly querying for fresh download stats. Otherwise, we request that you save our database a few calls. (optional)
    bypass_cache: true,
    // number | Determines the offset of items to get from the database. Default is 0. Optional. (optional)
    offset: 789,
    // number | Determines the number of items to recieve per request. Default is 1000. Optional. (optional)
    limit: 789,
  } satisfies GetQueuedDownloadsRequest;

  try {
    const data = await api.getQueuedDownloads(body);
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
| **id** | `number` | Determines the queued download requested, will return an object rather than list. Optional. | [Optional] [Defaults to `undefined`] |
| **type** | `string` | The type of the queued download you want to retrieve. Can be \&quot;torrent\&quot;, \&quot;usenet\&quot; or \&quot;webdl\&quot;. Optional. Default is \&quot;torrent\&quot;. | [Optional] [Defaults to `&#39;torrent&#39;`] |
| **bypass_cache** | `boolean` | Allows you to bypass the cached data, and always get fresh information. Useful if constantly querying for fresh download stats. Otherwise, we request that you save our database a few calls. | [Optional] [Defaults to `false`] |
| **offset** | `number` | Determines the offset of items to get from the database. Default is 0. Optional. | [Optional] [Defaults to `0`] |
| **limit** | `number` | Determines the number of items to recieve per request. Default is 1000. Optional. | [Optional] [Defaults to `1000`] |

### Return type

[**GetQueuedDownloadsResponse**](GetQueuedDownloadsResponse.md)

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

