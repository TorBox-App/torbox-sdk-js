# UsenetApi

All URIs are relative to *https://api.torbox.app*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**asyncCreateUsenetDownload**](UsenetApi.md#asynccreateusenetdownload) | **POST** /v1/api/usenet/asynccreateusenetdownload | Async Create Usenet Download |
| [**controlUsenetDownload**](UsenetApi.md#controlusenetdownload) | **POST** /v1/api/usenet/controlusenetdownload | Control Usenet Download |
| [**createUsenetDownload**](UsenetApi.md#createusenetdownload) | **POST** /v1/api/usenet/createusenetdownload | Create Usenet Download |
| [**editUsenetItem**](UsenetApi.md#editusenetitem) | **PUT** /v1/api/usenet/editusenetdownload | Edit Usenet Item |
| [**getNewsServerAccount**](UsenetApi.md#getnewsserveraccount) | **GET** /v1/api/usenet/provider/account | Get News Server Account |
| [**getNewsServerConnectionInformation**](UsenetApi.md#getnewsserverconnectioninformation) | **GET** /v1/api/usenet/provider/connection | Get News Server Connection Information |
| [**getUsenetCachedAvailability**](UsenetApi.md#getusenetcachedavailability) | **GET** /v1/api/usenet/checkcached | Get Usenet Cached Availability |
| [**getUsenetCachedAvailabilityBatch**](UsenetApi.md#getusenetcachedavailabilitybatch) | **POST** /v1/api/usenet/checkcached | Get Usenet Cached Availability Batch |
| [**getUsenetList**](UsenetApi.md#getusenetlist) | **GET** /v1/api/usenet/mylist | Get Usenet List |
| [**requestUsenetDownloadLink**](UsenetApi.md#requestusenetdownloadlink) | **GET** /v1/api/usenet/requestdl | Request Download Link |
| [**requestUsenetDownloadLinksGet**](UsenetApi.md#requestusenetdownloadlinksget) | **GET** /v1/api/usenet/requestdl/batch | Request Download Links - GET |
| [**requestUsenetDownloadLinksPost**](UsenetApi.md#requestusenetdownloadlinkspost) | **POST** /v1/api/usenet/requestdl/batch | Request Download Links - POST |
| [**resetNewsServerAccountPassword**](UsenetApi.md#resetnewsserveraccountpassword) | **POST** /v1/api/usenet/provider/account/resetpw | Reset News Server Account Password |



## asyncCreateUsenetDownload

> AsyncCreateUsenetDownloadResponse asyncCreateUsenetDownload(link, file, name, password, post_processing, as_queued, add_only_if_cached)

Async Create Usenet Download

### Overview  Creates a usenet download asynchronously under your account. Simply send **either** a link, or an nzb file. Once they have been checked, they will begin downloading assuming your account has available active download slots, and they aren\&#39;t too large.  The request will return instantly, not returning any data other than a success message. This is the same for failures, as they will return the error in the background as a notification, rather than immediately.  The post processing options are the same as for the Create Usenet Download endpoint.  ### Rate Limits  This endpoint is rate limited to **60 requests per hour** per API token.  ### Authorization  Requires an API key using the Authorization Bearer Header. 

### Example

```ts
import {
  Configuration,
  UsenetApi,
} from '@torbox/torbox-api';
import type { AsyncCreateUsenetDownloadRequest } from '@torbox/torbox-api';

async function example() {
  console.log("🚀 Testing @torbox/torbox-api SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: ApiKey
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new UsenetApi(config);

  const body = {
    // string | An accessible link to an NZB file. Cannot be a redirection. Optional. (optional)
    link: link_example,
    // Blob | An NZB File. Optional. (optional)
    file: BINARY_DATA_HERE,
    // string | The name you want the usenet download to be. Optional. (optional)
    name: name_example,
    // string | The password to send to the Usenet client. This is used for extracting the RAR at the end. Optional. (optional)
    password: password_example,
    // number | The post processing option to use. Read the overview of the Create Usenet Download endpoint for the options. Default is -1. Optional. (optional)
    post_processing: 789,
    // boolean | Tells TorBox you want this usenet download instantly queued. Optional. (optional)
    as_queued: true,
    // boolean | Only adds the download if it is cached on TorBox. If not cached, it won\\\'t be added. (optional)
    add_only_if_cached: true,
  } satisfies AsyncCreateUsenetDownloadRequest;

  try {
    const data = await api.asyncCreateUsenetDownload(body);
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
| **link** | `string` | An accessible link to an NZB file. Cannot be a redirection. Optional. | [Optional] [Defaults to `undefined`] |
| **file** | `Blob` | An NZB File. Optional. | [Optional] [Defaults to `undefined`] |
| **name** | `string` | The name you want the usenet download to be. Optional. | [Optional] [Defaults to `undefined`] |
| **password** | `string` | The password to send to the Usenet client. This is used for extracting the RAR at the end. Optional. | [Optional] [Defaults to `undefined`] |
| **post_processing** | `number` | The post processing option to use. Read the overview of the Create Usenet Download endpoint for the options. Default is -1. Optional. | [Optional] [Defaults to `-1`] |
| **as_queued** | `boolean` | Tells TorBox you want this usenet download instantly queued. Optional. | [Optional] [Defaults to `false`] |
| **add_only_if_cached** | `boolean` | Only adds the download if it is cached on TorBox. If not cached, it won\\\&#39;t be added. | [Optional] [Defaults to `false`] |

### Return type

[**AsyncCreateUsenetDownloadResponse**](AsyncCreateUsenetDownloadResponse.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: `multipart/form-data`
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


## controlUsenetDownload

> ControlUsenetDownloadResponse controlUsenetDownload(ControlUsenetDownload)

Control Usenet Download

### Overview  Controls a usenet download. By sending the usenet download\&#39;s ID and the type of operation you want to perform, it will send that request to the usenet client.  Operations are either:  - **Delete** &#x60;deletes the nzb from the client and your account permanently&#x60;   ### Authorization  Requires an API key using the Authorization Bearer Header. 

### Example

```ts
import {
  Configuration,
  UsenetApi,
} from '@torbox/torbox-api';
import type { ControlUsenetDownloadRequest } from '@torbox/torbox-api';

async function example() {
  console.log("🚀 Testing @torbox/torbox-api SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: ApiKey
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new UsenetApi(config);

  const body = {
    // ControlUsenetDownload
    ControlUsenetDownload: {"usenet_id":1,"operation":"delete","all":false},
  } satisfies ControlUsenetDownloadRequest;

  try {
    const data = await api.controlUsenetDownload(body);
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
| **ControlUsenetDownload** | [ControlUsenetDownload](ControlUsenetDownload.md) |  | |

### Return type

[**ControlUsenetDownloadResponse**](ControlUsenetDownloadResponse.md)

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


## createUsenetDownload

> CreateUsenetDownloadResponse createUsenetDownload(link, file, name, password, post_processing, as_queued, add_only_if_cached)

Create Usenet Download

### Overview  Creates a usenet download under your account. Simply send **either** a link, or an nzb file. Once they have been checked, they will begin downloading assuming your account has available active download slots, and they aren\&#39;t too large.  #### Post Processing Options:  All post processing options that the Usenet client will perform before TorBox\&#39;s own processing to make the files available. It is recommended you either don\&#39;t send this parameter, or keep it at &#x60;-1&#x60; for default, which will give only the wanted files.  - &#x60;-1&#x60;, Default. This runs repairs, and extractions as well as deletes the source files leaving only the wanted downloaded files.  - &#x60;0&#x60;, None. No post-processing at all. Just download all the files (including all PAR2). TorBox will still do its normal processing to make the download available, but no repairs, or extraction will take place.  - &#x60;1&#x60;, Repair. Download files and do a PAR2 verification. If the verification fails, download more PAR2 files and attempt to repair the files.  - &#x60;2&#x60;, Repair and Unpack. Download all files, do a PAR2 verification and unpack the files. The final folder will also include the RAR and ZIP files.  - &#x60;3&#x60;, Repair, Unpack and Delete. Download all files, do a PAR2 verification, unpack the files to the final folder and delete the source files.   ### Authorization  Requires an API key using the Authorization Bearer Header. 

### Example

```ts
import {
  Configuration,
  UsenetApi,
} from '@torbox/torbox-api';
import type { CreateUsenetDownloadRequest } from '@torbox/torbox-api';

async function example() {
  console.log("🚀 Testing @torbox/torbox-api SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: ApiKey
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new UsenetApi(config);

  const body = {
    // string | An accessible link to an NZB file. Cannot be a redirection. Optional. (optional)
    link: link_example,
    // Blob | An NZB File. Optional. (optional)
    file: BINARY_DATA_HERE,
    // string | The name you want the usenet download to be. Optional. (optional)
    name: name_example,
    // string | The password to send to the Usenet client. This is used for extracting the RAR at the end. Optional. (optional)
    password: password_example,
    // number | The post processing option to use. Read the overview for the options. Default is -1. Optional. (optional)
    post_processing: 789,
    // boolean | Tells TorBox you want this usenet download.instantly queued. Optional. (optional)
    as_queued: true,
    // boolean | Only adds the download if it is cached on TorBox. If not cached, it won\\\'t be added. (optional)
    add_only_if_cached: true,
  } satisfies CreateUsenetDownloadRequest;

  try {
    const data = await api.createUsenetDownload(body);
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
| **link** | `string` | An accessible link to an NZB file. Cannot be a redirection. Optional. | [Optional] [Defaults to `undefined`] |
| **file** | `Blob` | An NZB File. Optional. | [Optional] [Defaults to `undefined`] |
| **name** | `string` | The name you want the usenet download to be. Optional. | [Optional] [Defaults to `undefined`] |
| **password** | `string` | The password to send to the Usenet client. This is used for extracting the RAR at the end. Optional. | [Optional] [Defaults to `undefined`] |
| **post_processing** | `number` | The post processing option to use. Read the overview for the options. Default is -1. Optional. | [Optional] [Defaults to `-1`] |
| **as_queued** | `boolean` | Tells TorBox you want this usenet download.instantly queued. Optional. | [Optional] [Defaults to `false`] |
| **add_only_if_cached** | `boolean` | Only adds the download if it is cached on TorBox. If not cached, it won\\\&#39;t be added. | [Optional] [Defaults to `false`] |

### Return type

[**CreateUsenetDownloadResponse**](CreateUsenetDownloadResponse.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: `multipart/form-data`
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


## editUsenetItem

> EditUsenetItemResponse editUsenetItem(EditUsenetDownload)

Edit Usenet Item

### Overview  Updates a download item based on the item\&#39;s ID. Sending a PUT request with valid items overwrites the previous items entirely, so use this endpoint with caution. Please make sure to read the restrictions below as they are important.  ### Restrictions  - Does not affect the cached database (or any other user\&#39;s item).  - Name must pass validation:      - Above 1 character long.      - Below 200 characters long.      - Cannot contain any non-url or non filesystem safe characters. (This is removed automatically).      - Cannot contain any leading or trailing whitespace. You can have spaces in the middle. (This is removed automatically).  - Tags follow the same rules as the name.  - Alternative hashes must be of MD5, SHA1, or SHA256.   ### Authorization  Requires an API key using the Authorization Bearer Header. 

### Example

```ts
import {
  Configuration,
  UsenetApi,
} from '@torbox/torbox-api';
import type { EditUsenetItemRequest } from '@torbox/torbox-api';

async function example() {
  console.log("🚀 Testing @torbox/torbox-api SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: ApiKey
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new UsenetApi(config);

  const body = {
    // EditUsenetDownload
    EditUsenetDownload: {"usenet_download_id":0,"name":"string","tags":["string"],"alternative_hashes":["0123456789abcdef0123456789abcdef01234567"],"airlocked":false},
  } satisfies EditUsenetItemRequest;

  try {
    const data = await api.editUsenetItem(body);
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
| **EditUsenetDownload** | [EditUsenetDownload](EditUsenetDownload.md) |  | |

### Return type

[**EditUsenetItemResponse**](EditUsenetItemResponse.md)

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


## getNewsServerAccount

> GetNewsServerAccountResponse getNewsServerAccount()

Get News Server Account

### Overview  Gets the user\&#39;s TorBox News Server Account with authentication details. Does not show password if not creating the account. Account creation happens on the first request. If you need to get the password, or reset the password, use the &#x60;/usenet/provider/account/resetpw&#x60; &#x60;POST&#x60; endpoint.  ### Authorization  Requires an API key using the Authorization Bearer Header. 

### Example

```ts
import {
  Configuration,
  UsenetApi,
} from '@torbox/torbox-api';
import type { GetNewsServerAccountRequest } from '@torbox/torbox-api';

async function example() {
  console.log("🚀 Testing @torbox/torbox-api SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: ApiKey
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new UsenetApi(config);

  try {
    const data = await api.getNewsServerAccount();
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

[**GetNewsServerAccountResponse**](GetNewsServerAccountResponse.md)

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


## getNewsServerConnectionInformation

> GetNewsServerConnectionInformationResponse getNewsServerConnectionInformation()

Get News Server Connection Information

### Overview  Gets the TorBox News Server Connection information. This is a static path, and is not dynamic.  ### Authorization  No authentication required. 

### Example

```ts
import {
  Configuration,
  UsenetApi,
} from '@torbox/torbox-api';
import type { GetNewsServerConnectionInformationRequest } from '@torbox/torbox-api';

async function example() {
  console.log("🚀 Testing @torbox/torbox-api SDK...");
  const api = new UsenetApi();

  try {
    const data = await api.getNewsServerConnectionInformation();
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

[**GetNewsServerConnectionInformationResponse**](GetNewsServerConnectionInformationResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **404** | Not Found |  -  |
| **429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getUsenetCachedAvailability

> GetUsenetCachedAvailabilityResponse getUsenetCachedAvailability(hash, format, list_files, CheckCached)

Get Usenet Cached Availability

### Overview  Takes in a list of comma separated usenet hashes and checks if the usenet download is cached. This endpoint only gets a max of around 100 at a time, due to http limits in queries. If you want to do more, you can simply do more hash queries. Such as: &#x60;?hash&#x3D;XXXX&amp;hash&#x3D;XXXX&amp;hash&#x3D;XXXX&#x60;  or &#x60;?hash&#x3D;XXXX,XXXX&amp;hash&#x3D;XXXX&amp;hash&#x3D;XXXX,XXXX&#x60; and this will work too. Performance is very fast. Less than 1 second per 100. Time is approximately O(log n) time for those interested in taking it to its max. That is without caching as well. This endpoint stores a cache for an hour.  You may also pass a &#x60;format&#x60; parameter with the format you want the data in. Options are either &#x60;object&#x60; or &#x60;list&#x60;. You can view examples of both below.  To get the hash of a usenet download, you can read [this document](https://support.torbox.app/en/articles/13681109-technical-getting-hashes-for-searches) for all of the strategies.  ### Authorization  Requires an API key using the Authorization Bearer Header. 

### Example

```ts
import {
  Configuration,
  UsenetApi,
} from '@torbox/torbox-api';
import type { GetUsenetCachedAvailabilityRequest } from '@torbox/torbox-api';

async function example() {
  console.log("🚀 Testing @torbox/torbox-api SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: ApiKey
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new UsenetApi(config);

  const body = {
    // Array<string> | The list of usenet hashes you want to check. Comma seperated. To find the hash, md5 the link of the usenet link or file. (optional)
    hash: ...,
    // string | Format you want the data in. Acceptable is either \"object\" or \"list\". List is the most performant option as it doesn\'t require modification of the list. (optional)
    format: format_example,
    // boolean | Allows you to list the files found inside the cached data. Optional. (optional)
    list_files: true,
    // CheckCached (optional)
    CheckCached: ...,
  } satisfies GetUsenetCachedAvailabilityRequest;

  try {
    const data = await api.getUsenetCachedAvailability(body);
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
| **hash** | `Array<string>` | The list of usenet hashes you want to check. Comma seperated. To find the hash, md5 the link of the usenet link or file. | [Optional] |
| **format** | `string` | Format you want the data in. Acceptable is either \&quot;object\&quot; or \&quot;list\&quot;. List is the most performant option as it doesn\&#39;t require modification of the list. | [Optional] [Defaults to `&#39;object&#39;`] |
| **list_files** | `boolean` | Allows you to list the files found inside the cached data. Optional. | [Optional] [Defaults to `false`] |
| **CheckCached** | [CheckCached](CheckCached.md) |  | [Optional] |

### Return type

[**GetUsenetCachedAvailabilityResponse**](GetUsenetCachedAvailabilityResponse.md)

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


## getUsenetCachedAvailabilityBatch

> GetUsenetCachedAvailabilityBatchResponse getUsenetCachedAvailabilityBatch(hash, format, list_files, CheckCached)

Get Usenet Cached Availability Batch

### Overview  Takes in a list of comma separated hashes and checks if the torrent is cached. With the POST endpoint you can submit a nearly unlimited hashes compared to the GET endpoint which is limited by url parameters.  Performance is very fast. Less than 1 second per 100. Time is approximately O(log n) time for those interested in taking it to its max. That is without caching as well. This endpoint stores a cache for an hour.  You may also pass a &#x60;format&#x60; parameter with the format you want the data in. Options are either &#x60;object&#x60; or &#x60;list&#x60;. You can view examples of both below.  ### Authorization  Requires an API key using the Authorization Bearer Header. 

### Example

```ts
import {
  Configuration,
  UsenetApi,
} from '@torbox/torbox-api';
import type { GetUsenetCachedAvailabilityBatchRequest } from '@torbox/torbox-api';

async function example() {
  console.log("🚀 Testing @torbox/torbox-api SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: ApiKey
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new UsenetApi(config);

  const body = {
    // Array<string> (optional)
    hash: ...,
    // string (optional)
    format: format_example,
    // boolean (optional)
    list_files: true,
    // CheckCached (optional)
    CheckCached: {hashes=[string]},
  } satisfies GetUsenetCachedAvailabilityBatchRequest;

  try {
    const data = await api.getUsenetCachedAvailabilityBatch(body);
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
| **format** | `string` |  | [Optional] [Defaults to `&#39;object&#39;`] |
| **list_files** | `boolean` |  | [Optional] [Defaults to `false`] |
| **CheckCached** | [CheckCached](CheckCached.md) |  | [Optional] |

### Return type

[**GetUsenetCachedAvailabilityBatchResponse**](GetUsenetCachedAvailabilityBatchResponse.md)

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


## getUsenetList

> GetUsenetListResponse getUsenetList(id, bypass_cache, offset, limit, files, active)

Get Usenet List

### Overview  Gets the user\&#39;s usenet download list. This gives you the needed information to perform other usenet actions. Unlike Torrents, this information is updated on its own every 5 seconds for live usenet downloads.  ### Authorization  Requires an API key using the Authorization Bearer Header. 

### Example

```ts
import {
  Configuration,
  UsenetApi,
} from '@torbox/torbox-api';
import type { GetUsenetListRequest } from '@torbox/torbox-api';

async function example() {
  console.log("🚀 Testing @torbox/torbox-api SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: ApiKey
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new UsenetApi(config);

  const body = {
    // number | Determines the usenet download requested, will return an object rather than list. Optional. (optional)
    id: 789,
    // boolean | Allows you to bypass the cached data, and always get fresh information. Useful if constantly querying for fresh download stats. Otherwise, we request that you save our database a few calls. (optional)
    bypass_cache: true,
    // number | Determines the offset of items to get from the database. Default is 0. Optional. (optional)
    offset: 789,
    // number | Determines the number of items to recieve per request. Default is 1000. Optional. (optional)
    limit: 789,
    // boolean | Exclude files from response. Optional (optional)
    files: true,
    // boolean | Shows only active downloads. Optional (optional)
    active: true,
  } satisfies GetUsenetListRequest;

  try {
    const data = await api.getUsenetList(body);
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
| **id** | `number` | Determines the usenet download requested, will return an object rather than list. Optional. | [Optional] [Defaults to `undefined`] |
| **bypass_cache** | `boolean` | Allows you to bypass the cached data, and always get fresh information. Useful if constantly querying for fresh download stats. Otherwise, we request that you save our database a few calls. | [Optional] [Defaults to `false`] |
| **offset** | `number` | Determines the offset of items to get from the database. Default is 0. Optional. | [Optional] [Defaults to `0`] |
| **limit** | `number` | Determines the number of items to recieve per request. Default is 1000. Optional. | [Optional] [Defaults to `1000`] |
| **files** | `boolean` | Exclude files from response. Optional | [Optional] [Defaults to `true`] |
| **active** | `boolean` | Shows only active downloads. Optional | [Optional] [Defaults to `undefined`] |

### Return type

[**GetUsenetListResponse**](GetUsenetListResponse.md)

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


## requestUsenetDownloadLink

> RequestUsenetDownloadLinkResponse requestUsenetDownloadLink(token, usenet_id, file_id, zip_link, user_ip, redirect, append_name)

Request Download Link

### Overview  Requests the download link from the server. Because downloads are metered, TorBox cannot afford to allow free access to the links directly. This endpoint opens the link for 3 hours for downloads. Once a download is started, the user has nearly unlilimited time to download the file. The 1 hour time limit is simply for starting downloads. This prevents long term link sharing.  ### Permalinks  Instead of generating many CDN urls by requesting this endpoint, you can instead create a permalink such as: &#x60;https://api.torbox.app/v1/api/torrents/requestdl?token&#x3D;APIKEY&amp;torrent_id&#x3D;NUMBER&amp;file_id&#x3D;NUMBER&amp;redirect&#x3D;true&#x60; and when a user clicks on it, it will automatically redirect them to the CDN link. This saves requests and doesn\&#39;t abuse the API. Use this method rather than saving CDN links as they are not permanent. To invalidate these permalinks, simply reset your API token or delete the item from your dashboard.  ### Authorization  Requires an API key as a parameter for the &#x60;token&#x60; parameter. 

### Example

```ts
import {
  Configuration,
  UsenetApi,
} from '@torbox/torbox-api';
import type { RequestUsenetDownloadLinkRequest } from '@torbox/torbox-api';

async function example() {
  console.log("🚀 Testing @torbox/torbox-api SDK...");
  const api = new UsenetApi();

  const body = {
    // string | Your API Key
    token: token_example,
    // number | The usenet download\'s ID that you want to download
    usenet_id: 789,
    // number | The files\'s ID that you want to download. Optional if using \"zip_link\". (optional)
    file_id: 789,
    // boolean | If you want a zip link. Required if no file_id. Takes precedence over file_id if both are given. (optional)
    zip_link: true,
    // string | The user\'s IPv4 to determine the closest CDN. Optional. (optional)
    user_ip: user_ip_example,
    // boolean | If you want to redirect the user to the CDN link. This is useful for creating permalinks so that you can just make this request URL the link. (optional)
    redirect: true,
    // boolean | If you want to add the \"filename\" parameter to the returned CDN link. Optional. Default false. (optional)
    append_name: true,
  } satisfies RequestUsenetDownloadLinkRequest;

  try {
    const data = await api.requestUsenetDownloadLink(body);
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
| **usenet_id** | `number` | The usenet download\&#39;s ID that you want to download | [Defaults to `undefined`] |
| **file_id** | `number` | The files\&#39;s ID that you want to download. Optional if using \&quot;zip_link\&quot;. | [Optional] [Defaults to `0`] |
| **zip_link** | `boolean` | If you want a zip link. Required if no file_id. Takes precedence over file_id if both are given. | [Optional] [Defaults to `false`] |
| **user_ip** | `string` | The user\&#39;s IPv4 to determine the closest CDN. Optional. | [Optional] [Defaults to `undefined`] |
| **redirect** | `boolean` | If you want to redirect the user to the CDN link. This is useful for creating permalinks so that you can just make this request URL the link. | [Optional] [Defaults to `false`] |
| **append_name** | `boolean` | If you want to add the \&quot;filename\&quot; parameter to the returned CDN link. Optional. Default false. | [Optional] [Defaults to `false`] |

### Return type

[**RequestUsenetDownloadLinkResponse**](RequestUsenetDownloadLinkResponse.md)

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


## requestUsenetDownloadLinksGet

> RequestUsenetDownloadLinksGetResponse requestUsenetDownloadLinksGet(token, usenet_id, file_ids, user_ip, append_name, RequestDownloadBatch)

Request Download Links - GET

### Overview  Requests multiple download links from the server. Because downloads are metered, TorBox cannot afford to allow free access to the links directly. This endpoint opens the link for 3 hours for downloads. Once a download is started, the user has nearly unlilimited time to download the file. The 1 hour time limit is simply for starting downloads. This prevents long term link sharing.  ### Authorization  Requires an API key as a parameter for the &#x60;token&#x60; parameter. 

### Example

```ts
import {
  Configuration,
  UsenetApi,
} from '@torbox/torbox-api';
import type { RequestUsenetDownloadLinksGetRequest } from '@torbox/torbox-api';

async function example() {
  console.log("🚀 Testing @torbox/torbox-api SDK...");
  const api = new UsenetApi();

  const body = {
    // string | Your API Key
    token: token_example,
    // number | The usenet download\'s ID that you want to download
    usenet_id: 789,
    // Array<number> | The files\'s ID that you want to download (optional)
    file_ids: ...,
    // string | The user\'s IP to determine the closest CDN. Optional. (optional)
    user_ip: user_ip_example,
    // boolean | If you want to add the \"filename\" parameter to the returned CDN link. Optional. Default false. (optional)
    append_name: true,
    // RequestDownloadBatch (optional)
    RequestDownloadBatch: ...,
  } satisfies RequestUsenetDownloadLinksGetRequest;

  try {
    const data = await api.requestUsenetDownloadLinksGet(body);
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
| **usenet_id** | `number` | The usenet download\&#39;s ID that you want to download | [Defaults to `undefined`] |
| **file_ids** | `Array<number>` | The files\&#39;s ID that you want to download | [Optional] |
| **user_ip** | `string` | The user\&#39;s IP to determine the closest CDN. Optional. | [Optional] [Defaults to `undefined`] |
| **append_name** | `boolean` | If you want to add the \&quot;filename\&quot; parameter to the returned CDN link. Optional. Default false. | [Optional] [Defaults to `false`] |
| **RequestDownloadBatch** | [RequestDownloadBatch](RequestDownloadBatch.md) |  | [Optional] |

### Return type

[**RequestUsenetDownloadLinksGetResponse**](RequestUsenetDownloadLinksGetResponse.md)

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


## requestUsenetDownloadLinksPost

> RequestUsenetDownloadLinksPostResponse requestUsenetDownloadLinksPost(token, usenet_id, file_ids, user_ip, append_name, RequestDownloadBatch)

Request Download Links - POST

### Overview  Requests multiple download links from the server. Because downloads are metered, TorBox cannot afford to allow free access to the links directly. This endpoint opens the link for 3 hours for downloads. Once a download is started, the user has nearly unlilimited time to download the file. The 1 hour time limit is simply for starting downloads. This prevents long term link sharing.  ### Authorization  Requires an API key as a parameter for the &#x60;token&#x60; parameter. 

### Example

```ts
import {
  Configuration,
  UsenetApi,
} from '@torbox/torbox-api';
import type { RequestUsenetDownloadLinksPostRequest } from '@torbox/torbox-api';

async function example() {
  console.log("🚀 Testing @torbox/torbox-api SDK...");
  const api = new UsenetApi();

  const body = {
    // string | Your API Key
    token: token_example,
    // number | The usenet downloads\' ID that you want to download
    usenet_id: 789,
    // Array<number> (optional)
    file_ids: ...,
    // string | The user\'s IP to determine the closest CDN. Optional. (optional)
    user_ip: user_ip_example,
    // boolean | If you want to add the \"filename\" parameter to the returned CDN link. Optional. Default false. (optional)
    append_name: true,
    // RequestDownloadBatch (optional)
    RequestDownloadBatch: {file_ids=[0, 1, 2]},
  } satisfies RequestUsenetDownloadLinksPostRequest;

  try {
    const data = await api.requestUsenetDownloadLinksPost(body);
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
| **usenet_id** | `number` | The usenet downloads\&#39; ID that you want to download | [Defaults to `undefined`] |
| **file_ids** | `Array<number>` |  | [Optional] |
| **user_ip** | `string` | The user\&#39;s IP to determine the closest CDN. Optional. | [Optional] [Defaults to `undefined`] |
| **append_name** | `boolean` | If you want to add the \&quot;filename\&quot; parameter to the returned CDN link. Optional. Default false. | [Optional] [Defaults to `false`] |
| **RequestDownloadBatch** | [RequestDownloadBatch](RequestDownloadBatch.md) |  | [Optional] |

### Return type

[**RequestUsenetDownloadLinksPostResponse**](RequestUsenetDownloadLinksPostResponse.md)

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


## resetNewsServerAccountPassword

> ResetNewsServerAccountPasswordResponse resetNewsServerAccountPassword()

Reset News Server Account Password

### Overview  Resets the user\&#39;s TorBox News Server account password. This password is automatically generated, and is not saved, it is only shown once.  ### Authorization  Requires an API key using the Authorization Bearer Header. 

### Example

```ts
import {
  Configuration,
  UsenetApi,
} from '@torbox/torbox-api';
import type { ResetNewsServerAccountPasswordRequest } from '@torbox/torbox-api';

async function example() {
  console.log("🚀 Testing @torbox/torbox-api SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: ApiKey
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new UsenetApi(config);

  try {
    const data = await api.resetNewsServerAccountPassword();
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

[**ResetNewsServerAccountPasswordResponse**](ResetNewsServerAccountPasswordResponse.md)

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

