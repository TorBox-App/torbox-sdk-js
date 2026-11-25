# GeneralApi

All URIs are relative to *https://api.torbox.app*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**get30DayStats**](GeneralApi.md#get30daystats) | **GET** /v1/api/stats/30days | Get 30 Day Stats |
| [**getChangelogsJson**](GeneralApi.md#getchangelogsjson) | **GET** /v1/api/changelogs/json | Get Changelogs JSON |
| [**getChangelogsRssFeed**](GeneralApi.md#getchangelogsrssfeed) | **GET** /v1/api/changelogs/rss | Get Changelogs RSS Feed |
| [**getSpeedtestFiles**](GeneralApi.md#getspeedtestfiles) | **GET** /v1/api/speedtest | Get Speedtest Files |
| [**getStats**](GeneralApi.md#getstats) | **GET** /v1/api/stats | Get Stats |
| [**getUpStatus**](GeneralApi.md#getupstatus) | **GET** / | Get Up Status |



## get30DayStats

> Get30DayStatsResponse get30DayStats()

Get 30 Day Stats

### Overview  Gets the general stats of the TorBox service for the last 30 days, one entry per day. Each entry is a snapshot of the totals at that time.  ### Authorization  None needed. 

### Example

```ts
import {
  Configuration,
  GeneralApi,
} from '@torbox/torbox-api';
import type { Get30DayStatsRequest } from '@torbox/torbox-api';

async function example() {
  console.log("🚀 Testing @torbox/torbox-api SDK...");
  const api = new GeneralApi();

  try {
    const data = await api.get30DayStats();
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

[**Get30DayStatsResponse**](Get30DayStatsResponse.md)

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
| **500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getChangelogsJson

> GetChangelogsJsonResponse getChangelogsJson(offset, limit)

Get Changelogs JSON

### Overview  Gets most recent changelogs from [https://feedback.torbox.app/changelog](https://feedback.torbox.app/changelog). This is useful for developers who want to integrate the changelog into their apps for their users to see. Includes content in HTML for developers to easily render the text in a fancy yet simple way.  ### Authorization  None needed. 

### Example

```ts
import {
  Configuration,
  GeneralApi,
} from '@torbox/torbox-api';
import type { GetChangelogsJsonRequest } from '@torbox/torbox-api';

async function example() {
  console.log("🚀 Testing @torbox/torbox-api SDK...");
  const api = new GeneralApi();

  const body = {
    // number (optional)
    offset: 789,
    // number (optional)
    limit: 789,
  } satisfies GetChangelogsJsonRequest;

  try {
    const data = await api.getChangelogsJson(body);
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
| **offset** | `number` |  | [Optional] [Defaults to `0`] |
| **limit** | `number` |  | [Optional] [Defaults to `10`] |

### Return type

[**GetChangelogsJsonResponse**](GetChangelogsJsonResponse.md)

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
| **422** | Validation Error |  -  |
| **429** | Too Many Requests |  -  |
| **500** | Internal Server Error |  -  |
| **503** | Service Unavailable |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getChangelogsRssFeed

> string getChangelogsRssFeed(offset, limit)

Get Changelogs RSS Feed

### Overview  Gets most recent 100 changelogs from [https://feedback.torbox.app/changelog](https://feedback.torbox.app/changelog). This is useful for people who want updates on the TorBox changelog. Includes all the necessary items to make this compatible with RSS feed viewers for notifications, and proper HTML viewing.  ### Authorization  None needed. 

### Example

```ts
import {
  Configuration,
  GeneralApi,
} from '@torbox/torbox-api';
import type { GetChangelogsRssFeedRequest } from '@torbox/torbox-api';

async function example() {
  console.log("🚀 Testing @torbox/torbox-api SDK...");
  const api = new GeneralApi();

  const body = {
    // number (optional)
    offset: 789,
    // number (optional)
    limit: 789,
  } satisfies GetChangelogsRssFeedRequest;

  try {
    const data = await api.getChangelogsRssFeed(body);
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
| **offset** | `number` |  | [Optional] [Defaults to `0`] |
| **limit** | `number` |  | [Optional] [Defaults to `10`] |

### Return type

**string**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/xml`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **404** | Not Found |  -  |
| **422** | Validation Error |  -  |
| **429** | Too Many Requests |  -  |
| **500** | Internal Server Error |  -  |
| **503** | Service Unavailable |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getSpeedtestFiles

> GetSpeedtestFilesResponse getSpeedtestFiles(user_ip, region, test_length)

Get Speedtest Files

### Overview  Gets CDN speedtest files. This can be used for speedtesting TorBox for users or other usages, such as checking download speeds for verification. Provides all necessary data such as region, server name, and even coordinates. Uses the requesting IP to determine if the server is the closest to the user.  You also have the ability to choose between long tests or short tests via the \&quot;test_length\&quot; parameter. You may also force the region selection by passing the \&quot;region\&quot; as a specific region.  ### Authorization  None needed. 

### Example

```ts
import {
  Configuration,
  GeneralApi,
} from '@torbox/torbox-api';
import type { GetSpeedtestFilesRequest } from '@torbox/torbox-api';

async function example() {
  console.log("🚀 Testing @torbox/torbox-api SDK...");
  const api = new GeneralApi();

  const body = {
    // string | Pass a user\'s IP to get the closest server to them, otherwise will use the calling IP for location. (optional)
    user_ip: user_ip_example,
    // string | Determines what cdns are returned. May be any region that TorBox is located in. To get this value, send a request without this value to determine all of the available regions that are available. (optional)
    region: region_example,
    // string | Determines the size of the file used for the speedtest. May be \"long\" or \"short\". Optional. (optional)
    test_length: test_length_example,
  } satisfies GetSpeedtestFilesRequest;

  try {
    const data = await api.getSpeedtestFiles(body);
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
| **user_ip** | `string` | Pass a user\&#39;s IP to get the closest server to them, otherwise will use the calling IP for location. | [Optional] [Defaults to `undefined`] |
| **region** | `string` | Determines what cdns are returned. May be any region that TorBox is located in. To get this value, send a request without this value to determine all of the available regions that are available. | [Optional] [Defaults to `&#39;all&#39;`] |
| **test_length** | `string` | Determines the size of the file used for the speedtest. May be \&quot;long\&quot; or \&quot;short\&quot;. Optional. | [Optional] [Defaults to `&#39;short&#39;`] |

### Return type

[**GetSpeedtestFilesResponse**](GetSpeedtestFilesResponse.md)

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
| **422** | Validation Error |  -  |
| **429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getStats

> GetStatsResponse getStats()

Get Stats

### Overview  Simply gets general stats about the TorBox service.  ### Authorization  None needed. 

### Example

```ts
import {
  Configuration,
  GeneralApi,
} from '@torbox/torbox-api';
import type { GetStatsRequest } from '@torbox/torbox-api';

async function example() {
  console.log("🚀 Testing @torbox/torbox-api SDK...");
  const api = new GeneralApi();

  try {
    const data = await api.getStats();
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

[**GetStatsResponse**](GetStatsResponse.md)

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
| **500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getUpStatus

> GetUpStatusResponse getUpStatus()

Get Up Status

### Overview  Simply gets if the TorBox API is available for use or not. Also might include information about downtimes.  ### Authorization  None needed. 

### Example

```ts
import {
  Configuration,
  GeneralApi,
} from '@torbox/torbox-api';
import type { GetUpStatusRequest } from '@torbox/torbox-api';

async function example() {
  console.log("🚀 Testing @torbox/torbox-api SDK...");
  const api = new GeneralApi();

  try {
    const data = await api.getUpStatus();
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

[**GetUpStatusResponse**](GetUpStatusResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `text/html`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **404** | Not Found |  -  |
| **429** | Too Many Requests |  -  |
| **502** | Bad Gateway |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

