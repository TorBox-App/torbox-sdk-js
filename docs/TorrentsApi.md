# TorrentsApi

All URIs are relative to *https://api.torbox.app*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**asyncCreateTorrent**](TorrentsApi.md#asynccreatetorrent) | **POST** /v1/api/torrents/asynccreatetorrent | Async Create Torrent |
| [**controlQueuedTorrents**](TorrentsApi.md#controlqueuedtorrents) | **POST** /v1/api/torrents/controlqueued | Control Queued Torrents |
| [**controlTorrent**](TorrentsApi.md#controltorrent) | **POST** /v1/api/torrents/controltorrent | Control Torrent |
| [**createTorrent**](TorrentsApi.md#createtorrent) | **POST** /v1/api/torrents/createtorrent | Create Torrent |
| [**editTorrentItem**](TorrentsApi.md#edittorrentitem) | **PUT** /v1/api/torrents/edittorrent | Edit Torrent Item |
| [**exportTorrentData**](TorrentsApi.md#exporttorrentdata) | **GET** /v1/api/torrents/exportdata | Export Torrent Data |
| [**getQueuedTorrents**](TorrentsApi.md#getqueuedtorrents) | **GET** /v1/api/torrents/getqueued | Get Queued Torrents |
| [**getTorrentCachedAvailability**](TorrentsApi.md#gettorrentcachedavailability) | **GET** /v1/api/torrents/checkcached | Get Torrent Cached Availability |
| [**getTorrentCachedAvailabilityBatch**](TorrentsApi.md#gettorrentcachedavailabilitybatch) | **POST** /v1/api/torrents/checkcached | Get Torrent Cached Availability Batch |
| [**getTorrentInfo**](TorrentsApi.md#gettorrentinfo) | **GET** /v1/api/torrents/torrentinfo | Get Torrent Info |
| [**getTorrentInfoFromFile**](TorrentsApi.md#gettorrentinfofromfile) | **POST** /v1/api/torrents/torrentinfo | Get Torrent Info |
| [**getTorrentList**](TorrentsApi.md#gettorrentlist) | **GET** /v1/api/torrents/mylist | Get Torrent List |
| [**magnetToFile**](TorrentsApi.md#magnettofile) | **POST** /v1/api/torrents/magnettofile | Magnet To File |
| [**requestTorrentDownloadLink**](TorrentsApi.md#requesttorrentdownloadlink) | **GET** /v1/api/torrents/requestdl | Request Download Link |
| [**requestTorrentDownloadLinksGet**](TorrentsApi.md#requesttorrentdownloadlinksget) | **GET** /v1/api/torrents/requestdl/batch | Request Download Links - GET |
| [**requestTorrentDownloadLinksPost**](TorrentsApi.md#requesttorrentdownloadlinkspost) | **POST** /v1/api/torrents/requestdl/batch | Request Download Links - POST |



## asyncCreateTorrent

> AsyncCreateTorrentResponse asyncCreateTorrent(file, magnet, seed, allow_zip, name, as_queued, add_only_if_cached)

Async Create Torrent

### Overview  Creates a torrent asynchrously under your account. Simply send **either** a magnet link, or a torrent file. Once they have been checked, they will begin downloading assuming your account has available active download slots, and they aren\&#39;t too large.  The request will return instantly, not returning any data other than a success message. This is the same for failures, as they will return the error in the background, rather than immediately.  ### Rate Limits  This endpoint has the same limits as the Create Torrent endpoint: **300 requests per minute**, and **60 uncached torrents per hour**. The hourly limit is shared between the two endpoints, so an uncached torrent added through either one counts against the same 60. As on that endpoint, a request sent with &#x60;add_only_if_cached&#x60; and without &#x60;as_queued&#x60; is not counted against the hourly limit.  ### Authorization  Requires an API key using the Authorization Bearer Header. 

### Example

```ts
import {
  Configuration,
  TorrentsApi,
} from '@torbox/torbox-api';
import type { AsyncCreateTorrentRequest } from '@torbox/torbox-api';

async function example() {
  console.log("🚀 Testing @torbox/torbox-api SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: ApiKey
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TorrentsApi(config);

  const body = {
    // Blob | The torrent\\\'s torrent file. Optional. (optional)
    file: BINARY_DATA_HERE,
    // string | The torrent\\\'s magnet link. Optional. (optional)
    magnet: magnet_example,
    // number | Tells TorBox your preference for seeding this torrent. 1 is auto. 2 is seed. 3 is don\\\'t seed. Optional. Default is 1, or whatever the user has in their settings. Overwrites option in settings. (optional)
    seed: 789,
    // boolean | Tells TorBox if you want to allow this torrent to be zipped or not. TorBox only zips if the torrent is 100 files or larger. (optional)
    allow_zip: true,
    // string | The name you want the torrent to be. Optional. (optional)
    name: name_example,
    // boolean | Tells TorBox you want this torrent instantly queued. This is bypassed if user is on free plan, and will process the request as normal in this case. Optional. (optional)
    as_queued: true,
    // boolean | Only adds the download if it is cached on TorBox. If not cached, it won\\\'t be added. (optional)
    add_only_if_cached: true,
  } satisfies AsyncCreateTorrentRequest;

  try {
    const data = await api.asyncCreateTorrent(body);
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
| **file** | `Blob` | The torrent\\\&#39;s torrent file. Optional. | [Optional] [Defaults to `undefined`] |
| **magnet** | `string` | The torrent\\\&#39;s magnet link. Optional. | [Optional] [Defaults to `undefined`] |
| **seed** | `number` | Tells TorBox your preference for seeding this torrent. 1 is auto. 2 is seed. 3 is don\\\&#39;t seed. Optional. Default is 1, or whatever the user has in their settings. Overwrites option in settings. | [Optional] [Defaults to `undefined`] |
| **allow_zip** | `boolean` | Tells TorBox if you want to allow this torrent to be zipped or not. TorBox only zips if the torrent is 100 files or larger. | [Optional] [Defaults to `true`] |
| **name** | `string` | The name you want the torrent to be. Optional. | [Optional] [Defaults to `undefined`] |
| **as_queued** | `boolean` | Tells TorBox you want this torrent instantly queued. This is bypassed if user is on free plan, and will process the request as normal in this case. Optional. | [Optional] [Defaults to `false`] |
| **add_only_if_cached** | `boolean` | Only adds the download if it is cached on TorBox. If not cached, it won\\\&#39;t be added. | [Optional] [Defaults to `false`] |

### Return type

[**AsyncCreateTorrentResponse**](AsyncCreateTorrentResponse.md)

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


## controlQueuedTorrents

> controlQueuedTorrents()

Control Queued Torrents

### Overview  This endpoint is deprecated and always answers with a &#x60;DEPRECATED&#x60; error. Use the Control Queued Downloads endpoint (&#x60;/v1/api/queued/controlqueued&#x60;) instead.  ### Authorization  Requires an API key using the Authorization Bearer Header. 

### Example

```ts
import {
  Configuration,
  TorrentsApi,
} from '@torbox/torbox-api';
import type { ControlQueuedTorrentsRequest } from '@torbox/torbox-api';

async function example() {
  console.log("🚀 Testing @torbox/torbox-api SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: ApiKey
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TorrentsApi(config);

  try {
    const data = await api.controlQueuedTorrents();
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

`void` (Empty response body)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **404** | Not Found |  -  |
| **410** | Gone |  -  |
| **429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## controlTorrent

> ControlTorrentResponse controlTorrent(ControlTorrent)

Control Torrent

### Overview  Controls a torrent. By sending the torrent\&#39;s ID and the type of operation you want to perform, it will send that request to the torrent client.  Operations are either:  - **Reannounce** &#x60;reannounces the torrent to get new peers&#x60;  - **Delete** &#x60;deletes the torrent from the client and your account permanently&#x60;  - **Resume** &#x60;resumes a paused torrent&#x60;   ### Authorization  Requires an API key using the Authorization Bearer Header. 

### Example

```ts
import {
  Configuration,
  TorrentsApi,
} from '@torbox/torbox-api';
import type { ControlTorrentRequest } from '@torbox/torbox-api';

async function example() {
  console.log("🚀 Testing @torbox/torbox-api SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: ApiKey
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TorrentsApi(config);

  const body = {
    // ControlTorrent
    ControlTorrent: {"torrent_id":1,"operation":"delete","all":false},
  } satisfies ControlTorrentRequest;

  try {
    const data = await api.controlTorrent(body);
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
| **ControlTorrent** | [ControlTorrent](ControlTorrent.md) |  | |

### Return type

[**ControlTorrentResponse**](ControlTorrentResponse.md)

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


## createTorrent

> CreateTorrentResponse createTorrent(file, magnet, seed, allow_zip, name, as_queued, add_only_if_cached)

Create Torrent

### Overview  Creates a torrent under your account. Simply send **either** a magnet link, or a torrent file. Once they have been checked, they will begin downloading assuming your account has available active download slots, and they aren\&#39;t too large.  ### Rate Limits  This endpoint has two limits that apply at the same time:  - **300 requests per minute:** a shared ceiling that _every_ request counts against, whether the torrent is cached or uncached.  - **60 uncached torrents per hour:** an additional, stricter limit that only uncached torrents count against. A request sent with &#x60;add_only_if_cached&#x60; is not counted, because it adds nothing when the torrent is not cached. It is counted when it is also sent with &#x60;as_queued&#x60;, because a queued torrent is added whether it is cached or not.   The important thing is that cached and uncached requests both draw from the same 300/min pool, but uncached requests _also_ draw from their own separate 60/hour pool. An uncached request therefore counts twice: once against the per-minute limit, and once against the per-hour uncached limit.  **Example:** In a single minute you add 250 cached + 50 uncached torrents. That\&#39;s 300 total, so you\&#39;ve hit the per-minute limit for that minute. But those 50 uncached torrents also came out of your 60/hour uncached budget, leaving only **10 uncached torrents** for the remaining 59 minutes of that hour. (You could still add plenty more _cached_ torrents during that hour, since cached requests aren\&#39;t capped hourly: only by the 300/min ceiling.)  ### Authorization  Requires an API key using the Authorization Bearer Header. 

### Example

```ts
import {
  Configuration,
  TorrentsApi,
} from '@torbox/torbox-api';
import type { CreateTorrentRequest } from '@torbox/torbox-api';

async function example() {
  console.log("🚀 Testing @torbox/torbox-api SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: ApiKey
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TorrentsApi(config);

  const body = {
    // Blob | The torrent\\\'s torrent file. Optional. (optional)
    file: BINARY_DATA_HERE,
    // string | The torrent\\\'s magnet link. Optional. (optional)
    magnet: magnet_example,
    // number | Tells TorBox your preference for seeding this torrent. 1 is auto. 2 is seed. 3 is don\\\'t seed. Optional. Default is 1, or whatever the user has in their settings. Overwrites option in settings. (optional)
    seed: 789,
    // boolean | Tells TorBox if you want to allow this torrent to be zipped or not. TorBox only zips if the torrent is 100 files or larger. (optional)
    allow_zip: true,
    // string | The name you want the torrent to be. Optional. (optional)
    name: name_example,
    // boolean | Tells TorBox you want this torrent instantly queued. This is bypassed if user is on free plan, and will process the request as normal in this case. Optional. (optional)
    as_queued: true,
    // boolean | Only adds the download if it is cached on TorBox. If not cached, it won\\\'t be added. (optional)
    add_only_if_cached: true,
  } satisfies CreateTorrentRequest;

  try {
    const data = await api.createTorrent(body);
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
| **file** | `Blob` | The torrent\\\&#39;s torrent file. Optional. | [Optional] [Defaults to `undefined`] |
| **magnet** | `string` | The torrent\\\&#39;s magnet link. Optional. | [Optional] [Defaults to `undefined`] |
| **seed** | `number` | Tells TorBox your preference for seeding this torrent. 1 is auto. 2 is seed. 3 is don\\\&#39;t seed. Optional. Default is 1, or whatever the user has in their settings. Overwrites option in settings. | [Optional] [Defaults to `undefined`] |
| **allow_zip** | `boolean` | Tells TorBox if you want to allow this torrent to be zipped or not. TorBox only zips if the torrent is 100 files or larger. | [Optional] [Defaults to `true`] |
| **name** | `string` | The name you want the torrent to be. Optional. | [Optional] [Defaults to `undefined`] |
| **as_queued** | `boolean` | Tells TorBox you want this torrent instantly queued. This is bypassed if user is on free plan, and will process the request as normal in this case. Optional. | [Optional] [Defaults to `false`] |
| **add_only_if_cached** | `boolean` | Only adds the download if it is cached on TorBox. If not cached, it won\\\&#39;t be added. | [Optional] [Defaults to `false`] |

### Return type

[**CreateTorrentResponse**](CreateTorrentResponse.md)

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


## editTorrentItem

> EditTorrentItemResponse editTorrentItem(EditTorrent)

Edit Torrent Item

### Overview  Updates a download item based on the item\&#39;s ID. Sending a PUT request with valid items overwrites the previous items entirely, so use this endpoint with caution. Please make sure to read the restrictions below as they are important.  ### Restrictions  - Does not affect the cached database (or any other user\&#39;s item).  - Name must pass validation:      - Above 1 character long.      - Below 200 characters long.      - Cannot contain any non-url or non filesystem safe characters. (This is removed automatically).      - Cannot contain any leading or trailing whitespace. You can have spaces in the middle. (This is removed automatically).  - Tags follow the same rules as the name.  - Alternative hashes must be of MD5, SHA1, or SHA256.   ### Authorization  Requires an API key using the Authorization Bearer Header. 

### Example

```ts
import {
  Configuration,
  TorrentsApi,
} from '@torbox/torbox-api';
import type { EditTorrentItemRequest } from '@torbox/torbox-api';

async function example() {
  console.log("🚀 Testing @torbox/torbox-api SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: ApiKey
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TorrentsApi(config);

  const body = {
    // EditTorrent
    EditTorrent: {"torrent_id":0,"name":"string","tags":["string"],"alternative_hashes":["0123456789abcdef0123456789abcdef01234567"],"airlocked":false},
  } satisfies EditTorrentItemRequest;

  try {
    const data = await api.editTorrentItem(body);
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
| **EditTorrent** | [EditTorrent](EditTorrent.md) |  | |

### Return type

[**EditTorrentItemResponse**](EditTorrentItemResponse.md)

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


## exportTorrentData

> ExportTorrentDataResponse exportTorrentData(torrent_id, type)

Export Torrent Data

### Overview  Exports the magnet or torrent file. Requires a type to be passed. If type is **magnet**, it will return a JSON response with the magnet as a string in the _data_ key. If type is **file**, it will return a bittorrent file as a download. Not compatible with cached downloads.  ### Authorization  Requires an API key using the Authorization Bearer Header. 

### Example

```ts
import {
  Configuration,
  TorrentsApi,
} from '@torbox/torbox-api';
import type { ExportTorrentDataRequest } from '@torbox/torbox-api';

async function example() {
  console.log("🚀 Testing @torbox/torbox-api SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: ApiKey
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TorrentsApi(config);

  const body = {
    // number | The torrent\'s ID.
    torrent_id: 789,
    // string | Either \"magnet\" or \"file\". Tells how the API what to get, and what to respond as. If magnet, it returns a JSON response with the magnet as a string in the data key. If file, it responds with a torrent file download.
    type: type_example,
  } satisfies ExportTorrentDataRequest;

  try {
    const data = await api.exportTorrentData(body);
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
| **torrent_id** | `number` | The torrent\&#39;s ID. | [Defaults to `undefined`] |
| **type** | `string` | Either \&quot;magnet\&quot; or \&quot;file\&quot;. Tells how the API what to get, and what to respond as. If magnet, it returns a JSON response with the magnet as a string in the data key. If file, it responds with a torrent file download. | [Defaults to `undefined`] |

### Return type

[**ExportTorrentDataResponse**](ExportTorrentDataResponse.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/x-bittorrent`


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


## getQueuedTorrents

> getQueuedTorrents()

Get Queued Torrents

### Overview  This endpoint is deprecated and always answers with a &#x60;DEPRECATED&#x60; error. Use the Get Queued Downloads endpoint (&#x60;/v1/api/queued/getqueued&#x60;) instead.  ### Authorization  Requires an API key using the Authorization Bearer Header. 

### Example

```ts
import {
  Configuration,
  TorrentsApi,
} from '@torbox/torbox-api';
import type { GetQueuedTorrentsRequest } from '@torbox/torbox-api';

async function example() {
  console.log("🚀 Testing @torbox/torbox-api SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: ApiKey
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TorrentsApi(config);

  try {
    const data = await api.getQueuedTorrents();
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

`void` (Empty response body)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **404** | Not Found |  -  |
| **410** | Gone |  -  |
| **429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getTorrentCachedAvailability

> GetTorrentCachedAvailabilityResponse getTorrentCachedAvailability(hash, format, list_files, CheckCached)

Get Torrent Cached Availability

### Overview  Takes in a list of comma separated torrent hashes and checks if the torrent is cached. This endpoint only gets a max of around 100 at a time, due to http limits in queries. If you want to do more, you can simply do more hash queries. Such as: &#x60;?hash&#x3D;XXXX&amp;hash&#x3D;XXXX&amp;hash&#x3D;XXXX&#x60;  or &#x60;?hash&#x3D;XXXX,XXXX&amp;hash&#x3D;XXXX&amp;hash&#x3D;XXXX,XXXX&#x60; and this will work too. Performance is very fast. Less than 1 second per 100. Time is approximately O(log n) time for those interested in taking it to its max. That is without caching as well. This endpoint stores a cache for an hour.  You may also pass a &#x60;format&#x60; parameter with the format you want the data in. Options are either &#x60;object&#x60; or &#x60;list&#x60;. You can view examples of both below.  ### Authorization  Requires an API key using the Authorization Bearer Header. 

### Example

```ts
import {
  Configuration,
  TorrentsApi,
} from '@torbox/torbox-api';
import type { GetTorrentCachedAvailabilityRequest } from '@torbox/torbox-api';

async function example() {
  console.log("🚀 Testing @torbox/torbox-api SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: ApiKey
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TorrentsApi(config);

  const body = {
    // Array<string> | The list of torrent hashes you want to check. Comma seperated. (optional)
    hash: ...,
    // string | Format you want the data in. Acceptable is either \"object\" or \"list\". List is the most performant option as it doesn\'t require modification of the list. (optional)
    format: format_example,
    // boolean | Allows you to list the files found inside the cached data. (optional)
    list_files: true,
    // CheckCached (optional)
    CheckCached: ...,
  } satisfies GetTorrentCachedAvailabilityRequest;

  try {
    const data = await api.getTorrentCachedAvailability(body);
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
| **hash** | `Array<string>` | The list of torrent hashes you want to check. Comma seperated. | [Optional] |
| **format** | `string` | Format you want the data in. Acceptable is either \&quot;object\&quot; or \&quot;list\&quot;. List is the most performant option as it doesn\&#39;t require modification of the list. | [Optional] [Defaults to `&#39;object&#39;`] |
| **list_files** | `boolean` | Allows you to list the files found inside the cached data. | [Optional] [Defaults to `false`] |
| **CheckCached** | [CheckCached](CheckCached.md) |  | [Optional] |

### Return type

[**GetTorrentCachedAvailabilityResponse**](GetTorrentCachedAvailabilityResponse.md)

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


## getTorrentCachedAvailabilityBatch

> GetTorrentCachedAvailabilityBatchResponse getTorrentCachedAvailabilityBatch(hash, format, list_files, CheckCached)

Get Torrent Cached Availability Batch

### Overview  Takes in a list of comma separated torrent hashes and checks if the torrent is cached. With the POST endpoint you can submit a nearly unlimited hashes compared to the GET endpoint which is limited by url parameters.   Performance is very fast. Less than 1 second per 100. Time is approximately O(log n) time for those interested in taking it to its max. That is without caching as well. This endpoint stores a cache for an hour.  You may also pass a &#x60;format&#x60; parameter with the format you want the data in. Options are either &#x60;object&#x60; or &#x60;list&#x60;. You can view examples of both below.  ### Authorization  Requires an API key using the Authorization Bearer Header. 

### Example

```ts
import {
  Configuration,
  TorrentsApi,
} from '@torbox/torbox-api';
import type { GetTorrentCachedAvailabilityBatchRequest } from '@torbox/torbox-api';

async function example() {
  console.log("🚀 Testing @torbox/torbox-api SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: ApiKey
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TorrentsApi(config);

  const body = {
    // Array<string> (optional)
    hash: ...,
    // string (optional)
    format: format_example,
    // boolean (optional)
    list_files: true,
    // CheckCached (optional)
    CheckCached: {"hashes":["string","string"]},
  } satisfies GetTorrentCachedAvailabilityBatchRequest;

  try {
    const data = await api.getTorrentCachedAvailabilityBatch(body);
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

[**GetTorrentCachedAvailabilityBatchResponse**](GetTorrentCachedAvailabilityBatchResponse.md)

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


## getTorrentInfo

> GetTorrentInfoResponse getTorrentInfo(hash, timeout, use_cache_lookup)

Get Torrent Info

### Overview  A general route that allows you to give a hash, and TorBox will return data about the torrent. This data is retrieved from the Bittorrent network, so expect it to take some time. If the request goes longer than 10 seconds, TorBox will cancel it. You can adjust this if you like, but the default is 10 seconds. This route is cached as well, so subsequent requests will be instant.  **It is not recommended to use this for checking TorBox\&#39;s cache. Please use the GET /checkcache endpoint instead.**  ### Authorization  None required. 

### Example

```ts
import {
  Configuration,
  TorrentsApi,
} from '@torbox/torbox-api';
import type { GetTorrentInfoRequest } from '@torbox/torbox-api';

async function example() {
  console.log("🚀 Testing @torbox/torbox-api SDK...");
  const api = new TorrentsApi();

  const body = {
    // string | Hash of the torrent you want to get info for. This is required.
    hash: hash_example,
    // number | The amount of time you want TorBox to search for the torrent on the Bittorrent network. If the number of seeders is low or even zero, this value may be helpful to move up. Default is 10. Optional. (optional)
    timeout: 789,
    // boolean | If you want to use a pre-cached request if sent before. This can save a lot of time. Default false. (optional)
    use_cache_lookup: true,
  } satisfies GetTorrentInfoRequest;

  try {
    const data = await api.getTorrentInfo(body);
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
| **hash** | `string` | Hash of the torrent you want to get info for. This is required. | [Defaults to `undefined`] |
| **timeout** | `number` | The amount of time you want TorBox to search for the torrent on the Bittorrent network. If the number of seeders is low or even zero, this value may be helpful to move up. Default is 10. Optional. | [Optional] [Defaults to `30`] |
| **use_cache_lookup** | `boolean` | If you want to use a pre-cached request if sent before. This can save a lot of time. Default false. | [Optional] [Defaults to `false`] |

### Return type

[**GetTorrentInfoResponse**](GetTorrentInfoResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **400** | Bad Request |  -  |
| **404** | Not Found |  -  |
| **422** | Validation Error |  -  |
| **429** | Too Many Requests |  -  |
| **500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getTorrentInfoFromFile

> GetTorrentInfoFromFileResponse getTorrentInfoFromFile(timeout, hash, magnet, file, use_cache_lookup, peers_only)

Get Torrent Info

### Overview  Same as the GET route, but allows posting data such as magnet, and torrent files.  Hashes will have precedence over magnets, and magnets will have precedence over torrent files.  Only proper torrent files are accepted.  At least one of hash, magnet, or torrent file is required.  A general route that allows you to give a hash, and TorBox will return data about the torrent. This data is retrieved from the Bittorrent network, so expect it to take some time. If the request goes longer than 10 seconds, TorBox will cancel it. You can adjust this if you like, but the default is 10 seconds. This route is cached as well, so subsequent requests will be instant.  **It is not recommended to use this for checking TorBox\&#39;s cache. Please use the GET /checkcache endpoint instead.**  ### Authorization  None required. 

### Example

```ts
import {
  Configuration,
  TorrentsApi,
} from '@torbox/torbox-api';
import type { GetTorrentInfoFromFileRequest } from '@torbox/torbox-api';

async function example() {
  console.log("🚀 Testing @torbox/torbox-api SDK...");
  const api = new TorrentsApi();

  const body = {
    // number | The amount of time you want TorBox to search for the torrent on the Bittorrent network. If the number of seeders is low or even zero, this value may be helpful to move up. Default is 10. Optional. (optional)
    timeout: 789,
    // string | A torrent hash for requesting information about the torrent. Optional. (optional)
    hash: hash_example,
    // string | A magnet link for requesting information abouit the torrent. Optional. (optional)
    magnet: magnet_example,
    // Blob | A torrent file for requesting information about the torrent. Optional. (optional)
    file: BINARY_DATA_HERE,
    // boolean | If you want to use a pre-cached request if sent before. This can save a lot of time. Default false. (optional)
    use_cache_lookup: true,
    // boolean | Uses a quick lookup method using the trackers contained within the magnet or file. Requires the submitted magnet or torrent file to contain trackers of UDP or HTTP(S) to work. This will not get metadata such as name, size, or files. Best used for simply and quickly gathering the current seeds and peers according to the trackers. Uses the highest number of all the trackers as the final value. Default off. (optional)
    peers_only: true,
  } satisfies GetTorrentInfoFromFileRequest;

  try {
    const data = await api.getTorrentInfoFromFile(body);
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
| **timeout** | `number` | The amount of time you want TorBox to search for the torrent on the Bittorrent network. If the number of seeders is low or even zero, this value may be helpful to move up. Default is 10. Optional. | [Optional] [Defaults to `10`] |
| **hash** | `string` | A torrent hash for requesting information about the torrent. Optional. | [Optional] [Defaults to `undefined`] |
| **magnet** | `string` | A magnet link for requesting information abouit the torrent. Optional. | [Optional] [Defaults to `undefined`] |
| **file** | `Blob` | A torrent file for requesting information about the torrent. Optional. | [Optional] [Defaults to `undefined`] |
| **use_cache_lookup** | `boolean` | If you want to use a pre-cached request if sent before. This can save a lot of time. Default false. | [Optional] [Defaults to `false`] |
| **peers_only** | `boolean` | Uses a quick lookup method using the trackers contained within the magnet or file. Requires the submitted magnet or torrent file to contain trackers of UDP or HTTP(S) to work. This will not get metadata such as name, size, or files. Best used for simply and quickly gathering the current seeds and peers according to the trackers. Uses the highest number of all the trackers as the final value. Default off. | [Optional] [Defaults to `false`] |

### Return type

[**GetTorrentInfoFromFileResponse**](GetTorrentInfoFromFileResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `multipart/form-data`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **400** | Bad Request |  -  |
| **404** | Not Found |  -  |
| **422** | Validation Error |  -  |
| **429** | Too Many Requests |  -  |
| **500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getTorrentList

> GetTorrentListResponse getTorrentList(id, bypass_cache, offset, limit, files, active)

Get Torrent List

### Overview  Gets the user\&#39;s torrent list. This gives you the needed information to perform other torrent actions. This information only gets updated every 600 seconds, or when the _Request Update On Torrent_ request is sent to the _relay API_.  #### Download States:  - \&quot;downloading\&quot; -&gt; The torrent is currently downloading.  - \&quot;uploading\&quot; -&gt; The torrent is currently seeding.  - \&quot;stalled (no seeds)\&quot; -&gt; The torrent is trying to download, but there are no seeds connected to download from.  - \&quot;paused\&quot; -&gt; The torrent is paused.  - \&quot;completed\&quot; -&gt; The torrent is completely downloaded. Do not use this for download completion status.  - \&quot;cached\&quot; -&gt; The torrent is cached from the server.  - \&quot;metaDL\&quot; -&gt; The torrent is downloading metadata from the hoard.  - \&quot;checkingResumeData\&quot; -&gt; The torrent is checking resumable data.   All other statuses are basic qBittorrent states. [Check out here for the full list](https://github.com/qbittorrent/qBittorrent/wiki/WebUI-API-(qBittorrent-4.1)#torrent-management).  ### Authorization  Requires an API key using the Authorization Bearer Header. 

### Example

```ts
import {
  Configuration,
  TorrentsApi,
} from '@torbox/torbox-api';
import type { GetTorrentListRequest } from '@torbox/torbox-api';

async function example() {
  console.log("🚀 Testing @torbox/torbox-api SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: ApiKey
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TorrentsApi(config);

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
  } satisfies GetTorrentListRequest;

  try {
    const data = await api.getTorrentList(body);
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

[**GetTorrentListResponse**](GetTorrentListResponse.md)

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


## magnetToFile

> string magnetToFile(MagnetToTorrent)

Magnet To File

### Overview  Converts any magnet to a torrent file. Does not require the magnet to be on your TorBox account or in the TorBox cache. Free endpoint for public use.  ### Authorization  None required. 

### Example

```ts
import {
  Configuration,
  TorrentsApi,
} from '@torbox/torbox-api';
import type { MagnetToFileRequest } from '@torbox/torbox-api';

async function example() {
  console.log("🚀 Testing @torbox/torbox-api SDK...");
  const api = new TorrentsApi();

  const body = {
    // MagnetToTorrent
    MagnetToTorrent: {"magnet":"string"},
  } satisfies MagnetToFileRequest;

  try {
    const data = await api.magnetToFile(body);
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
| **MagnetToTorrent** | [MagnetToTorrent](MagnetToTorrent.md) |  | |

### Return type

**string**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/x-bittorrent`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **404** | Not Found |  -  |
| **422** | Validation Error |  -  |
| **429** | Too Many Requests |  -  |
| **500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## requestTorrentDownloadLink

> RequestTorrentDownloadLinkResponse requestTorrentDownloadLink(token, torrent_id, file_id, zip_link, user_ip, redirect, append_name)

Request Download Link

### Overview  Requests the download link from the server. Because downloads are metered, TorBox cannot afford to allow free access to the links directly. This endpoint opens the link for 3 hours for downloads. Once a download is started, the user has nearly unlilimited time to download the file. The 1 hour time limit is simply for starting downloads. This prevents long term link sharing.  ### Permalinks  Instead of generating many CDN urls by requesting this endpoint, you can instead create a permalink such as: &#x60;https://api.torbox.app/v1/api/torrents/requestdl?token&#x3D;APIKEY&amp;torrent_id&#x3D;NUMBER&amp;file_id&#x3D;NUMBER&amp;redirect&#x3D;true&#x60; and when a user clicks on it, it will automatically redirect them to the CDN link. This saves requests and doesn\&#39;t abuse the API. Use this method rather than saving CDN links as they are not permanent. To invalidate these permalinks, simply reset your API token or delete the item from your dashboard.  ### Authorization  Requires an API key as a parameter for the &#x60;token&#x60; parameter. 

### Example

```ts
import {
  Configuration,
  TorrentsApi,
} from '@torbox/torbox-api';
import type { RequestTorrentDownloadLinkRequest } from '@torbox/torbox-api';

async function example() {
  console.log("🚀 Testing @torbox/torbox-api SDK...");
  const api = new TorrentsApi();

  const body = {
    // string | Your API Key
    token: token_example,
    // number | The torrent\'s ID that you want to download
    torrent_id: 789,
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
  } satisfies RequestTorrentDownloadLinkRequest;

  try {
    const data = await api.requestTorrentDownloadLink(body);
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
| **torrent_id** | `number` | The torrent\&#39;s ID that you want to download | [Defaults to `undefined`] |
| **file_id** | `number` | The files\&#39;s ID that you want to download | [Optional] [Defaults to `0`] |
| **zip_link** | `boolean` | If you want a zip link. Required if no file_id. Takes precedence over file_id if both are given. | [Optional] [Defaults to `false`] |
| **user_ip** | `string` | The user\&#39;s IP to determine the closest CDN. Optional. | [Optional] [Defaults to `undefined`] |
| **redirect** | `boolean` | If you want to redirect the user to the CDN link. This is useful for creating permalinks so that you can just make this request URL the link. | [Optional] [Defaults to `false`] |
| **append_name** | `boolean` | If you want to add the \&quot;filename\&quot; parameter to the returned CDN link. Optional. Default false. | [Optional] [Defaults to `false`] |

### Return type

[**RequestTorrentDownloadLinkResponse**](RequestTorrentDownloadLinkResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **307** | Temporary Redirect |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **422** | Validation Error |  -  |
| **429** | Too Many Requests |  -  |
| **500** | Internal Server Error |  -  |
| **503** | Service Unavailable |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## requestTorrentDownloadLinksGet

> RequestTorrentDownloadLinksGetResponse requestTorrentDownloadLinksGet(token, torrent_id, file_ids, user_ip, append_name, RequestDownloadBatch)

Request Download Links - GET

### Overview  Requests multiple download links from the server. Because downloads are metered, TorBox cannot afford to allow free access to the links directly. This endpoint opens the link for 3 hours for downloads. Once a download is started, the user has nearly unlilimited time to download the file. The 1 hour time limit is simply for starting downloads. This prevents long term link sharing.  ### Authorization  Requires an API key as a parameter for the &#x60;token&#x60; parameter. 

### Example

```ts
import {
  Configuration,
  TorrentsApi,
} from '@torbox/torbox-api';
import type { RequestTorrentDownloadLinksGetRequest } from '@torbox/torbox-api';

async function example() {
  console.log("🚀 Testing @torbox/torbox-api SDK...");
  const api = new TorrentsApi();

  const body = {
    // string | Your API Key
    token: token_example,
    // number | The torrent\'s ID that you want to download
    torrent_id: 789,
    // Array<number> | The files\'s ID that you want to download (optional)
    file_ids: ...,
    // string | The user\'s IP to determine the closest CDN. Optional. (optional)
    user_ip: user_ip_example,
    // boolean | If you want to add the \"filename\" parameter to the returned CDN link. Optional. Default false. (optional)
    append_name: true,
    // RequestDownloadBatch (optional)
    RequestDownloadBatch: ...,
  } satisfies RequestTorrentDownloadLinksGetRequest;

  try {
    const data = await api.requestTorrentDownloadLinksGet(body);
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
| **torrent_id** | `number` | The torrent\&#39;s ID that you want to download | [Defaults to `undefined`] |
| **file_ids** | `Array<number>` | The files\&#39;s ID that you want to download | [Optional] |
| **user_ip** | `string` | The user\&#39;s IP to determine the closest CDN. Optional. | [Optional] [Defaults to `undefined`] |
| **append_name** | `boolean` | If you want to add the \&quot;filename\&quot; parameter to the returned CDN link. Optional. Default false. | [Optional] [Defaults to `false`] |
| **RequestDownloadBatch** | [RequestDownloadBatch](RequestDownloadBatch.md) |  | [Optional] |

### Return type

[**RequestTorrentDownloadLinksGetResponse**](RequestTorrentDownloadLinksGetResponse.md)

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
| **503** | Service Unavailable |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## requestTorrentDownloadLinksPost

> RequestTorrentDownloadLinksPostResponse requestTorrentDownloadLinksPost(token, torrent_id, file_ids, user_ip, append_name, RequestDownloadBatch)

Request Download Links - POST

### Overview  Requests multiple download links from the server. Because downloads are metered, TorBox cannot afford to allow free access to the links directly. This endpoint opens the link for 3 hours for downloads. Once a download is started, the user has nearly unlilimited time to download the file. The 1 hour time limit is simply for starting downloads. This prevents long term link sharing.  ### Authorization  Requires an API key as a parameter for the &#x60;token&#x60; parameter. 

### Example

```ts
import {
  Configuration,
  TorrentsApi,
} from '@torbox/torbox-api';
import type { RequestTorrentDownloadLinksPostRequest } from '@torbox/torbox-api';

async function example() {
  console.log("🚀 Testing @torbox/torbox-api SDK...");
  const api = new TorrentsApi();

  const body = {
    // string | Your API Key
    token: token_example,
    // number | The torrent\'s ID that you want to download
    torrent_id: 789,
    // Array<number> (optional)
    file_ids: ...,
    // string | The user\'s IP to determine the closest CDN. Optional. (optional)
    user_ip: user_ip_example,
    // boolean | If you want to add the \"filename\" parameter to the returned CDN link. Optional. Default false. (optional)
    append_name: true,
    // RequestDownloadBatch (optional)
    RequestDownloadBatch: {"file_ids":[0,1,2]},
  } satisfies RequestTorrentDownloadLinksPostRequest;

  try {
    const data = await api.requestTorrentDownloadLinksPost(body);
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
| **torrent_id** | `number` | The torrent\&#39;s ID that you want to download | [Defaults to `undefined`] |
| **file_ids** | `Array<number>` |  | [Optional] |
| **user_ip** | `string` | The user\&#39;s IP to determine the closest CDN. Optional. | [Optional] [Defaults to `undefined`] |
| **append_name** | `boolean` | If you want to add the \&quot;filename\&quot; parameter to the returned CDN link. Optional. Default false. | [Optional] [Defaults to `false`] |
| **RequestDownloadBatch** | [RequestDownloadBatch](RequestDownloadBatch.md) |  | [Optional] |

### Return type

[**RequestTorrentDownloadLinksPostResponse**](RequestTorrentDownloadLinksPostResponse.md)

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
| **503** | Service Unavailable |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

