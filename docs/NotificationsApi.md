# NotificationsApi

All URIs are relative to *https://api.torbox.app*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**clearAllNotifications**](NotificationsApi.md#clearallnotifications) | **POST** /v1/api/notifications/clear | Clear All Notifications |
| [**clearSingleNotification**](NotificationsApi.md#clearsinglenotification) | **POST** /v1/api/notifications/clear/{id} | Clear Single Notification |
| [**getNotificationFeed**](NotificationsApi.md#getnotificationfeed) | **GET** /v1/api/notifications/mynotifications | Get Notification Feed |
| [**getRssNotificationFeed**](NotificationsApi.md#getrssnotificationfeed) | **GET** /v1/api/notifications/rss | Get RSS Notification Feed |
| [**sendTestNotification**](NotificationsApi.md#sendtestnotification) | **POST** /v1/api/notifications/test | Send Test Notification |



## clearAllNotifications

> ClearAllNotificationsResponse clearAllNotifications()

Clear All Notifications

### Overview  Marks all of your notifications as read and deletes them permanently.  ### Authorization  Requires an API key using the Authorization Bearer Header. 

### Example

```ts
import {
  Configuration,
  NotificationsApi,
} from '@torbox/torbox-api';
import type { ClearAllNotificationsRequest } from '@torbox/torbox-api';

async function example() {
  console.log("🚀 Testing @torbox/torbox-api SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: ApiKey
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new NotificationsApi(config);

  try {
    const data = await api.clearAllNotifications();
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

[**ClearAllNotificationsResponse**](ClearAllNotificationsResponse.md)

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


## clearSingleNotification

> ClearSingleNotificationResponse clearSingleNotification(id)

Clear Single Notification

### Overview  Marks a single notification as read and permanently deletes it from your notifications. Requires a &#x60;notification_id&#x60; which can be found by getting your notification feed.  ### Authorization  Requires an API key using the Authorization Bearer Header. 

### Example

```ts
import {
  Configuration,
  NotificationsApi,
} from '@torbox/torbox-api';
import type { ClearSingleNotificationRequest } from '@torbox/torbox-api';

async function example() {
  console.log("🚀 Testing @torbox/torbox-api SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: ApiKey
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new NotificationsApi(config);

  const body = {
    // string
    id: id_example,
  } satisfies ClearSingleNotificationRequest;

  try {
    const data = await api.clearSingleNotification(body);
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
| **id** | `string` |  | [Defaults to `undefined`] |

### Return type

[**ClearSingleNotificationResponse**](ClearSingleNotificationResponse.md)

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


## getNotificationFeed

> GetNotificationFeedResponse getNotificationFeed(bypass_cache)

Get Notification Feed

### Overview  Gets your notifications in a JSON object that is easily parsable compared to the RSS Feed. Gives all the same data as the RSS Feed.  ### Authorization  Requires an API key using the Authorization Bearer Header. 

### Example

```ts
import {
  Configuration,
  NotificationsApi,
} from '@torbox/torbox-api';
import type { GetNotificationFeedRequest } from '@torbox/torbox-api';

async function example() {
  console.log("🚀 Testing @torbox/torbox-api SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: ApiKey
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new NotificationsApi(config);

  const body = {
    // boolean (optional)
    bypass_cache: true,
  } satisfies GetNotificationFeedRequest;

  try {
    const data = await api.getNotificationFeed(body);
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
| **bypass_cache** | `boolean` |  | [Optional] [Defaults to `false`] |

### Return type

[**GetNotificationFeedResponse**](GetNotificationFeedResponse.md)

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


## getRssNotificationFeed

> string getRssNotificationFeed(token)

Get RSS Notification Feed

### Overview  Gets your notifications in an RSS Feed which allows you to use them with RSS Feed readers or notification services that can take RSS Feeds and listen to updates. As soon as a notification goes to your account, it will be added to your feed.  ### Authorization  Requires an API key using as a query parameter using the &#x60;token&#x60; key. 

### Example

```ts
import {
  Configuration,
  NotificationsApi,
} from '@torbox/torbox-api';
import type { GetRssNotificationFeedRequest } from '@torbox/torbox-api';

async function example() {
  console.log("🚀 Testing @torbox/torbox-api SDK...");
  const api = new NotificationsApi();

  const body = {
    // string | The user\'s API key.
    token: token_example,
  } satisfies GetRssNotificationFeedRequest;

  try {
    const data = await api.getRssNotificationFeed(body);
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
| **token** | `string` | The user\&#39;s API key. | [Defaults to `undefined`] |

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
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **422** | Validation Error |  -  |
| **429** | Too Many Requests |  -  |
| **500** | Internal Server Error |  -  |
| **503** | Service Unavailable |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## sendTestNotification

> SendTestNotificationResponse sendTestNotification()

Send Test Notification

### Overview  Sends a test notification to all enabled notification types. This can be useful for validating setups. No need for any body in this request.  ### Authorization  Requires an API key using the Authorization Bearer Header. 

### Example

```ts
import {
  Configuration,
  NotificationsApi,
} from '@torbox/torbox-api';
import type { SendTestNotificationRequest } from '@torbox/torbox-api';

async function example() {
  console.log("🚀 Testing @torbox/torbox-api SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: ApiKey
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new NotificationsApi(config);

  try {
    const data = await api.sendTestNotification();
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

[**SendTestNotificationResponse**](SendTestNotificationResponse.md)

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

