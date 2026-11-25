# WebDownloadsApi

All URIs are relative to *https://api.torbox.app*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**asyncCreateWebDownload**](WebDownloadsApi.md#asynccreatewebdownload) | **POST** /v1/api/webdl/asynccreatewebdownload | Async Create Web Download |
| [**controlWebDownload**](WebDownloadsApi.md#controlwebdownload) | **POST** /v1/api/webdl/controlwebdownload | Control Web Download |
| [**createWebDownload**](WebDownloadsApi.md#createwebdownload) | **POST** /v1/api/webdl/createwebdownload | Create Web Download |
| [**editWebDownloadItem**](WebDownloadsApi.md#editwebdownloaditem) | **PUT** /v1/api/webdl/editwebdownload | Edit Web Download Item |
| [**getHosterList**](WebDownloadsApi.md#gethosterlist) | **GET** /v1/api/webdl/hosters | Get Hoster List |
| [**getWebDownloadCachedAvailability**](WebDownloadsApi.md#getwebdownloadcachedavailability) | **GET** /v1/api/webdl/checkcached | Get Web Download Cached Availability |
| [**getWebDownloadCachedAvailabilityBatch**](WebDownloadsApi.md#getwebdownloadcachedavailabilitybatch) | **POST** /v1/api/webdl/checkcached | Get Web Download Cached Availability Batch |
| [**getWebDownloadList**](WebDownloadsApi.md#getwebdownloadlist) | **GET** /v1/api/webdl/mylist | Get Web Download List |
| [**requestWebDownloadLink**](WebDownloadsApi.md#requestwebdownloadlink) | **GET** /v1/api/webdl/requestdl | Request Download Link |
| [**requestWebDownloadLinksGet**](WebDownloadsApi.md#requestwebdownloadlinksget) | **GET** /v1/api/webdl/requestdl/batch | Request Download Links - GET |
| [**requestWebDownloadLinksPost**](WebDownloadsApi.md#requestwebdownloadlinkspost) | **POST** /v1/api/webdl/requestdl/batch | Request Download Links - POST |



## asyncCreateWebDownload

> AsyncCreateWebDownloadResponse asyncCreateWebDownload(link, password, name, as_queued, add_only_if_cached)

Async Create Web Download

### Overview  Creates a web download asynchronously under your account. Simply send a link to any file on the internet. Once it has been checked, it will begin downloading assuming your account has available active download slots, and they aren\&#39;t too large.  The request will return instantly, not returning any data other than a success message. This is the same for failures, as they will return the error in the background as a notification, rather than immediately.  ### Rate Limits  This endpoint is rate limited to **60 requests per hour** per API token.  ### Authorization  Requires an API key using the Authorization Bearer Header. 

### Example

```ts
import {
  Configuration,
  WebDownloadsApi,
} from '@torbox/torbox-api';
import type { AsyncCreateWebDownloadRequest } from '@torbox/torbox-api';

async function example() {
  console.log("🚀 Testing @torbox/torbox-api SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: ApiKey
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new WebDownloadsApi(config);

  const body = {
    // string | An accessible link to any file on the internet. Cannot be a redirection.
    link: link_example,
    // string | Password to the file, if the files requires it. Optional. (optional)
    password: password_example,
    // string | The name you want the web download to be. Optional. (optional)
    name: name_example,
    // boolean | Tells TorBox you want this web download instantly queued. Optional. (optional)
    as_queued: true,
    // boolean | Only adds the download if it is cached on TorBox. If not cached, it won\\\'t be added. (optional)
    add_only_if_cached: true,
  } satisfies AsyncCreateWebDownloadRequest;

  try {
    const data = await api.asyncCreateWebDownload(body);
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
| **link** | `string` | An accessible link to any file on the internet. Cannot be a redirection. | [Defaults to `undefined`] |
| **password** | `string` | Password to the file, if the files requires it. Optional. | [Optional] [Defaults to `undefined`] |
| **name** | `string` | The name you want the web download to be. Optional. | [Optional] [Defaults to `undefined`] |
| **as_queued** | `boolean` | Tells TorBox you want this web download instantly queued. Optional. | [Optional] [Defaults to `false`] |
| **add_only_if_cached** | `boolean` | Only adds the download if it is cached on TorBox. If not cached, it won\\\&#39;t be added. | [Optional] [Defaults to `false`] |

### Return type

[**AsyncCreateWebDownloadResponse**](AsyncCreateWebDownloadResponse.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: `application/x-www-form-urlencoded`
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


## controlWebDownload

> ControlWebDownloadResponse controlWebDownload(ControlWebDownload)

Control Web Download

### Overview  Controls a web download. By sending the web download\&#39;s ID and the type of operation you want to perform, it will send that request to the debrid client.  Operations are either:  - **Delete** &#x60;deletes the download from the client and your account permanently&#x60;   ### Authorization  Requires an API key using the Authorization Bearer Header. 

### Example

```ts
import {
  Configuration,
  WebDownloadsApi,
} from '@torbox/torbox-api';
import type { ControlWebDownloadRequest } from '@torbox/torbox-api';

async function example() {
  console.log("🚀 Testing @torbox/torbox-api SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: ApiKey
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new WebDownloadsApi(config);

  const body = {
    // ControlWebDownload
    ControlWebDownload: {"webdl_id":1,"operation":"delete","all":false},
  } satisfies ControlWebDownloadRequest;

  try {
    const data = await api.controlWebDownload(body);
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
| **ControlWebDownload** | [ControlWebDownload](ControlWebDownload.md) |  | |

### Return type

[**ControlWebDownloadResponse**](ControlWebDownloadResponse.md)

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


## createWebDownload

> CreateWebDownloadResponse createWebDownload(link, password, name, as_queued, add_only_if_cached)

Create Web Download

### Overview  Creates a web download under your account. Simply send a link to any file on the internet. Once it has been checked, it will begin downloading assuming your account has available active download slots, and they aren\&#39;t too large.  ### Authorization  Requires an API key using the Authorization Bearer Header. 

### Example

```ts
import {
  Configuration,
  WebDownloadsApi,
} from '@torbox/torbox-api';
import type { CreateWebDownloadRequest } from '@torbox/torbox-api';

async function example() {
  console.log("🚀 Testing @torbox/torbox-api SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: ApiKey
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new WebDownloadsApi(config);

  const body = {
    // string | An accessible link to any file on the internet. Cannot be a redirection.
    link: link_example,
    // string | Password to the file, if the files requires it. Optional. (optional)
    password: password_example,
    // string | The name you want the torrent to be. Optional. (optional)
    name: name_example,
    // boolean | Tells TorBox you want this web download.instantly queued. Optional. (optional)
    as_queued: true,
    // boolean | Only adds the download if it is cached on TorBox. If not cached, it won\\\'t be added. (optional)
    add_only_if_cached: true,
  } satisfies CreateWebDownloadRequest;

  try {
    const data = await api.createWebDownload(body);
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
| **link** | `string` | An accessible link to any file on the internet. Cannot be a redirection. | [Defaults to `undefined`] |
| **password** | `string` | Password to the file, if the files requires it. Optional. | [Optional] [Defaults to `undefined`] |
| **name** | `string` | The name you want the torrent to be. Optional. | [Optional] [Defaults to `undefined`] |
| **as_queued** | `boolean` | Tells TorBox you want this web download.instantly queued. Optional. | [Optional] [Defaults to `false`] |
| **add_only_if_cached** | `boolean` | Only adds the download if it is cached on TorBox. If not cached, it won\\\&#39;t be added. | [Optional] [Defaults to `false`] |

### Return type

[**CreateWebDownloadResponse**](CreateWebDownloadResponse.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: `application/x-www-form-urlencoded`
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


## editWebDownloadItem

> EditWebDownloadItemResponse editWebDownloadItem(EditWebDownload)

Edit Web Download Item

### Overview  Updates a download item based on the item\&#39;s ID. Sending a PUT request with valid items overwrites the previous items entirely, so use this endpoint with caution. Please make sure to read the restrictions below as they are important.  ### Restrictions  - Does not affect the cached database (or any other user\&#39;s item).  - Name must pass validation:      - Above 1 character long.      - Below 200 characters long.      - Cannot contain any non-url or non filesystem safe characters. (This is removed automatically).      - Cannot contain any leading or trailing whitespace. You can have spaces in the middle. (This is removed automatically).  - Tags follow the same rules as the name.  - Alternative hashes must be of MD5, SHA1, or SHA256.   ### Authorization  Requires an API key using the Authorization Bearer Header. 

### Example

```ts
import {
  Configuration,
  WebDownloadsApi,
} from '@torbox/torbox-api';
import type { EditWebDownloadItemRequest } from '@torbox/torbox-api';

async function example() {
  console.log("🚀 Testing @torbox/torbox-api SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: ApiKey
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new WebDownloadsApi(config);

  const body = {
    // EditWebDownload
    EditWebDownload: {"webdl_id":0,"name":"string","tags":["string"],"alternative_hashes":["0123456789abcdef0123456789abcdef01234567"],"airlocked":false},
  } satisfies EditWebDownloadItemRequest;

  try {
    const data = await api.editWebDownloadItem(body);
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
| **EditWebDownload** | [EditWebDownload](EditWebDownload.md) |  | |

### Return type

[**EditWebDownloadItemResponse**](EditWebDownloadItemResponse.md)

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


## getHosterList

> GetHosterListResponse getHosterList()

Get Hoster List

### Overview  A dynamic list of hosters that TorBox is capable of downloading through its paid service.  - **Name** - a clean name for display use, the well known name of the service, should be recognizable to users.  - **Domains** - an array of known domains that the hoster uses. While each may serve a different purpose it is still included.  - **URL** - the main url of the service. This should take you to the home page or a service page of the hoster.  - **Icon** - a square image, usually a favicon or logo, that represents the service, should be recognizable as the hoster\&#39;s icon.  - **Status** - whether this hoster can be used on TorBox or not at the current time. It is usually a good idea to check this value before submitting a download to TorBox\&#39;s servers for download.  - **Type** - values are either \&quot;hoster\&quot; or \&quot;stream\&quot;. Both do the same thing, but is good to differentiate services used for different things.  - **Note** - a string value (or null) that may give helpful information about the current status or state of a hoster. This can and should be shown to end users.  - **Daily Link Limit** - the number of downloads a user can use per day. As a user submits links, once they hit this number, the API will deny them from adding anymore of this type of link. A zero value means that it is unlimited.  - **Daily Link Used** - the number of downloads a user has already used. Usually zero unless you send authentication to the endpoint. This will return accurate values.  - **Daily Bandwidth Limit** - the value in bytes that a user is allowed to download from this hoster. A zero value means that it is unlimited. It is recommended to use the Daily Link Limit instead.  - **Daily Bandwidth Used** - the value in bytes that a user has already used to download from this hoster. Usually zero unless you send authentication to the endpoint. This will return accurate values.   ### Authorization  Optional authorization. Authorization is not required in this endpoint unless you want to get the user\&#39;s live data. Requires an API key using the Authorization Bearer Header to get the live and accurate data for **Daily Link Used** and **Daily Bandwidth Used**. 

### Example

```ts
import {
  Configuration,
  WebDownloadsApi,
} from '@torbox/torbox-api';
import type { GetHosterListRequest } from '@torbox/torbox-api';

async function example() {
  console.log("🚀 Testing @torbox/torbox-api SDK...");
  const api = new WebDownloadsApi();

  try {
    const data = await api.getHosterList();
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

[**GetHosterListResponse**](GetHosterListResponse.md)

### Authorization

No authorization required

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
| **503** | Service Unavailable |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getWebDownloadCachedAvailability

> GetWebDownloadCachedAvailabilityResponse getWebDownloadCachedAvailability(hash, format, list_files, CheckCached)

Get Web Download Cached Availability

### Overview  Takes in a list of comma separated usenet hashes and checks if the web download is cached. This endpoint only gets a max of around 100 at a time, due to http limits in queries. If you want to do more, you can simply do more hash queries. Such as: &#x60;?hash&#x3D;XXXX&amp;hash&#x3D;XXXX&amp;hash&#x3D;XXXX&#x60;  or &#x60;?hash&#x3D;XXXX,XXXX&amp;hash&#x3D;XXXX&amp;hash&#x3D;XXXX,XXXX&#x60; and this will work too. Performance is very fast. Less than 1 second per 100. Time is approximately O(log n) time for those interested in taking it to its max. That is without caching as well. This endpoint stores a cache for an hour.  You may also pass a &#x60;format&#x60; parameter with the format you want the data in. Options are either &#x60;object&#x60; or &#x60;list&#x60;. You can view examples of both below.  To get the hash of a web download you can read [this document](https://support.torbox.app/en/articles/13681109-technical-getting-hashes-for-searches) for all of the strategies.  ### Authorization  Requires an API key using the Authorization Bearer Header. 

### Example

```ts
import {
  Configuration,
  WebDownloadsApi,
} from '@torbox/torbox-api';
import type { GetWebDownloadCachedAvailabilityRequest } from '@torbox/torbox-api';

async function example() {
  console.log("🚀 Testing @torbox/torbox-api SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: ApiKey
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new WebDownloadsApi(config);

  const body = {
    // Array<string> | The list of web hashes you want to check. Comma seperated. To find the hash, md5 the link. (optional)
    hash: ...,
    // string | Format you want the data in. Acceptable is either \"object\" or \"list\". List is the most performant option as it doesn\'t require modification of the list. (optional)
    format: format_example,
    // boolean | Allows you to list the files found inside the cached data. (optional)
    list_files: true,
    // CheckCached (optional)
    CheckCached: ...,
  } satisfies GetWebDownloadCachedAvailabilityRequest;

  try {
    const data = await api.getWebDownloadCachedAvailability(body);
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
| **hash** | `Array<string>` | The list of web hashes you want to check. Comma seperated. To find the hash, md5 the link. | [Optional] |
| **format** | `string` | Format you want the data in. Acceptable is either \&quot;object\&quot; or \&quot;list\&quot;. List is the most performant option as it doesn\&#39;t require modification of the list. | [Optional] [Defaults to `&#39;object&#39;`] |
| **list_files** | `boolean` | Allows you to list the files found inside the cached data. | [Optional] [Defaults to `false`] |
| **CheckCached** | [CheckCached](CheckCached.md) |  | [Optional] |

### Return type

[**GetWebDownloadCachedAvailabilityResponse**](GetWebDownloadCachedAvailabilityResponse.md)

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


## getWebDownloadCachedAvailabilityBatch

> GetWebDownloadCachedAvailabilityBatchResponse getWebDownloadCachedAvailabilityBatch(hash, format, list_files, CheckCached)

Get Web Download Cached Availability Batch

### Overview  Takes in a list of comma separated hashes and checks if the torrent is cached. With the POST endpoint you can submit a nearly unlimited hashes compared to the GET endpoint which is limited by url parameters.  Performance is very fast. Less than 1 second per 100. Time is approximately O(log n) time for those interested in taking it to its max. That is without caching as well. This endpoint stores a cache for an hour.  You may also pass a &#x60;format&#x60; parameter with the format you want the data in. Options are either &#x60;object&#x60; or &#x60;list&#x60;. You can view examples of both below.  ### Authorization  Requires an API key using the Authorization Bearer Header. 

### Example

```ts
import {
  Configuration,
  WebDownloadsApi,
} from '@torbox/torbox-api';
import type { GetWebDownloadCachedAvailabilityBatchRequest } from '@torbox/torbox-api';

async function example() {
  console.log("🚀 Testing @torbox/torbox-api SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: ApiKey
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new WebDownloadsApi(config);

  const body = {
    // Array<string> (optional)
    hash: ...,
    // string | Format you want the data in. Acceptable is either \"object\" or \"list\". List is the most performant option as it doesn\'t require modification of the list. (optional)
    format: format_example,
    // boolean | Allows you to list the files found inside the cached data. (optional)
    list_files: true,
    // CheckCached (optional)
    CheckCached: {"hashes":["string"]},
  } satisfies GetWebDownloadCachedAvailabilityBatchRequest;

  try {
    const data = await api.getWebDownloadCachedAvailabilityBatch(body);
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
| **hash** | `Array<string>` |  | [Optional] |
| **format** | `string` | Format you want the data in. Acceptable is either \&quot;object\&quot; or \&quot;list\&quot;. List is the most performant option as it doesn\&#39;t require modification of the list. | [Optional] [Defaults to `&#39;object&#39;`] |
| **list_files** | `boolean` | Allows you to list the files found inside the cached data. | [Optional] [Defaults to `false`] |
| **CheckCached** | [CheckCached](CheckCached.md) |  | [Optional] |

### Return type

[**GetWebDownloadCachedAvailabilityBatchResponse**](GetWebDownloadCachedAvailabilityBatchResponse.md)

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


## getWebDownloadList

> GetWebDownloadListResponse getWebDownloadList(id, bypass_cache, offset, limit, files, active)

Get Web Download List

### Overview  Gets the user\&#39;s web download list. This gives you the needed information to perform other usenet actions. Unlike Torrents, this information is updated on its own every 5 seconds for live web downloads.  ### Authorization  Requires an API key using the Authorization Bearer Header. 

### Example

```ts
import {
  Configuration,
  WebDownloadsApi,
} from '@torbox/torbox-api';
import type { GetWebDownloadListRequest } from '@torbox/torbox-api';

async function example() {
  console.log("🚀 Testing @torbox/torbox-api SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: ApiKey
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new WebDownloadsApi(config);

  const body = {
    // number | Determines the torrent requested, will return an object rather than list. Optional. (optional)
    id: 789,
    // boolean | Allows you to bypass the cached data, and always get fresh information. Useful if constantly querying for fresh download stats. Otherwise, we request that you save our database a few calls. (optional)
    bypass_cache: true,
    // number | Determines the offset of items to get from the database. Default is 0. Optional. (optional)
    offset: 789,
    // number | Determines the number of items to recieve per request. Default is 1000. Optional. (optional)
    limit: 789,
    // boolean | Exclude files from response. Optional (optional)
    files: true,
    // boolean | Shows only active downloads. Optional (optional)
    active: true,
  } satisfies GetWebDownloadListRequest;

  try {
    const data = await api.getWebDownloadList(body);
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
| **id** | `number` | Determines the torrent requested, will return an object rather than list. Optional. | [Optional] [Defaults to `undefined`] |
| **bypass_cache** | `boolean` | Allows you to bypass the cached data, and always get fresh information. Useful if constantly querying for fresh download stats. Otherwise, we request that you save our database a few calls. | [Optional] [Defaults to `false`] |
| **offset** | `number` | Determines the offset of items to get from the database. Default is 0. Optional. | [Optional] [Defaults to `0`] |
| **limit** | `number` | Determines the number of items to recieve per request. Default is 1000. Optional. | [Optional] [Defaults to `1000`] |
| **files** | `boolean` | Exclude files from response. Optional | [Optional] [Defaults to `true`] |
| **active** | `boolean` | Shows only active downloads. Optional | [Optional] [Defaults to `undefined`] |

### Return type

[**GetWebDownloadListResponse**](GetWebDownloadListResponse.md)

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


## requestWebDownloadLink

> RequestWebDownloadLinkResponse requestWebDownloadLink(token, web_id, file_id, zip_link, user_ip, redirect, append_name)

Request Download Link

### Overview  Requests the download link from the server. Because downloads are metered, TorBox cannot afford to allow free access to the links directly. This endpoint opens the link for 3 hours for downloads. Once a download is started, the user has nearly unlilimited time to download the file. The 1 hour time limit is simply for starting downloads. This prevents long term link sharing.  ### Permalinks  Instead of generating many CDN urls by requesting this endpoint, you can instead create a permalink such as: &#x60;https://api.torbox.app/v1/api/torrents/requestdl?token&#x3D;APIKEY&amp;torrent_id&#x3D;NUMBER&amp;file_id&#x3D;NUMBER&amp;redirect&#x3D;true&#x60; and when a user clicks on it, it will automatically redirect them to the CDN link. This saves requests and doesn\&#39;t abuse the API. Use this method rather than saving CDN links as they are not permanent. To invalidate these permalinks, simply reset your API token or delete the item from your dashboard.  ### Authorization  Requires an API key as a parameter for the &#x60;token&#x60; parameter. 

### Example

```ts
import {
  Configuration,
  WebDownloadsApi,
} from '@torbox/torbox-api';
import type { RequestWebDownloadLinkRequest } from '@torbox/torbox-api';

async function example() {
  console.log("🚀 Testing @torbox/torbox-api SDK...");
  const api = new WebDownloadsApi();

  const body = {
    // string | Your API Key
    token: token_example,
    // number | The web download\'s ID that you want to download
    web_id: 789,
    // number | The files\'s ID that you want to download (optional)
    file_id: 789,
    // boolean | If you want a zip link. Required if no file_id. Takes precedence over file_id if both are given. (optional)
    zip_link: true,
    // string | The user\'s IP to determine the closest CDN. Optional. (optional)
    user_ip: user_ip_example,
    // boolean | If you want to redirect the user to the CDN link. This is useful for creating permalinks so that you can just make this request URL the link. (optional)
    redirect: true,
    // boolean | If you want to add the \"filename\" parameter to the returned CDN link. Optional. Default false. (optional)
    append_name: true,
  } satisfies RequestWebDownloadLinkRequest;

  try {
    const data = await api.requestWebDownloadLink(body);
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
| **token** | `string` | Your API Key | [Defaults to `undefined`] |
| **web_id** | `number` | The web download\&#39;s ID that you want to download | [Defaults to `undefined`] |
| **file_id** | `number` | The files\&#39;s ID that you want to download | [Optional] [Defaults to `0`] |
| **zip_link** | `boolean` | If you want a zip link. Required if no file_id. Takes precedence over file_id if both are given. | [Optional] [Defaults to `false`] |
| **user_ip** | `string` | The user\&#39;s IP to determine the closest CDN. Optional. | [Optional] [Defaults to `undefined`] |
| **redirect** | `boolean` | If you want to redirect the user to the CDN link. This is useful for creating permalinks so that you can just make this request URL the link. | [Optional] [Defaults to `false`] |
| **append_name** | `boolean` | If you want to add the \&quot;filename\&quot; parameter to the returned CDN link. Optional. Default false. | [Optional] [Defaults to `false`] |

### Return type

[**RequestWebDownloadLinkResponse**](RequestWebDownloadLinkResponse.md)

### Authorization

No authorization required

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


## requestWebDownloadLinksGet

> RequestWebDownloadLinksGetResponse requestWebDownloadLinksGet(token, web_id, file_ids, user_ip, append_name, RequestDownloadBatch)

Request Download Links - GET

### Overview  Requests multiple download links from the server. Because downloads are metered, TorBox cannot afford to allow free access to the links directly. This endpoint opens the link for 3 hours for downloads. Once a download is started, the user has nearly unlilimited time to download the file. The 1 hour time limit is simply for starting downloads. This prevents long term link sharing.  ### Authorization  Requires an API key as a parameter for the &#x60;token&#x60; parameter. 

### Example

```ts
import {
  Configuration,
  WebDownloadsApi,
} from '@torbox/torbox-api';
import type { RequestWebDownloadLinksGetRequest } from '@torbox/torbox-api';

async function example() {
  console.log("🚀 Testing @torbox/torbox-api SDK...");
  const api = new WebDownloadsApi();

  const body = {
    // string | Your API Key
    token: token_example,
    // number | The web download\'s ID that you want to download
    web_id: 789,
    // Array<number> | The files\'s ID that you want to download (optional)
    file_ids: ...,
    // string | The user\'s IP to determine the closest CDN. Optional. (optional)
    user_ip: user_ip_example,
    // boolean | If you want to add the \"filename\" parameter to the returned CDN link. Optional. Default false. (optional)
    append_name: true,
    // RequestDownloadBatch (optional)
    RequestDownloadBatch: ...,
  } satisfies RequestWebDownloadLinksGetRequest;

  try {
    const data = await api.requestWebDownloadLinksGet(body);
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
| **token** | `string` | Your API Key | [Defaults to `undefined`] |
| **web_id** | `number` | The web download\&#39;s ID that you want to download | [Defaults to `undefined`] |
| **file_ids** | `Array<number>` | The files\&#39;s ID that you want to download | [Optional] |
| **user_ip** | `string` | The user\&#39;s IP to determine the closest CDN. Optional. | [Optional] [Defaults to `undefined`] |
| **append_name** | `boolean` | If you want to add the \&quot;filename\&quot; parameter to the returned CDN link. Optional. Default false. | [Optional] [Defaults to `false`] |
| **RequestDownloadBatch** | [RequestDownloadBatch](RequestDownloadBatch.md) |  | [Optional] |

### Return type

[**RequestWebDownloadLinksGetResponse**](RequestWebDownloadLinksGetResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **422** | Validation Error |  -  |
| **429** | Too Many Requests |  -  |
| **500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## requestWebDownloadLinksPost

> RequestWebDownloadLinksPostResponse requestWebDownloadLinksPost(token, web_id, file_ids, user_ip, append_name, RequestDownloadBatch)

Request Download Links - POST

### Overview  Requests multiple download links from the server. Because downloads are metered, TorBox cannot afford to allow free access to the links directly. This endpoint opens the link for 3 hours for downloads. Once a download is started, the user has nearly unlilimited time to download the file. The 1 hour time limit is simply for starting downloads. This prevents long term link sharing.  ### Authorization  Requires an API key as a parameter for the &#x60;token&#x60; parameter. 

### Example

```ts
import {
  Configuration,
  WebDownloadsApi,
} from '@torbox/torbox-api';
import type { RequestWebDownloadLinksPostRequest } from '@torbox/torbox-api';

async function example() {
  console.log("🚀 Testing @torbox/torbox-api SDK...");
  const api = new WebDownloadsApi();

  const body = {
    // string | Your API Key
    token: token_example,
    // number | The web downloads\' ID that you want to download
    web_id: 789,
    // Array<number> (optional)
    file_ids: ...,
    // string | The user\'s IP to determine the closest CDN. Optional. (optional)
    user_ip: user_ip_example,
    // boolean | If you want to add the \"filename\" parameter to the returned CDN link. Optional. Default false. (optional)
    append_name: true,
    // RequestDownloadBatch (optional)
    RequestDownloadBatch: {file_ids=[0, 1, 2]},
  } satisfies RequestWebDownloadLinksPostRequest;

  try {
    const data = await api.requestWebDownloadLinksPost(body);
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
| **token** | `string` | Your API Key | [Defaults to `undefined`] |
| **web_id** | `number` | The web downloads\&#39; ID that you want to download | [Defaults to `undefined`] |
| **file_ids** | `Array<number>` |  | [Optional] |
| **user_ip** | `string` | The user\&#39;s IP to determine the closest CDN. Optional. | [Optional] [Defaults to `undefined`] |
| **append_name** | `boolean` | If you want to add the \&quot;filename\&quot; parameter to the returned CDN link. Optional. Default false. | [Optional] [Defaults to `false`] |
| **RequestDownloadBatch** | [RequestDownloadBatch](RequestDownloadBatch.md) |  | [Optional] |

### Return type

[**RequestWebDownloadLinksPostResponse**](RequestWebDownloadLinksPostResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **422** | Validation Error |  -  |
| **429** | Too Many Requests |  -  |
| **500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

