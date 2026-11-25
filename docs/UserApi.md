# UserApi

All URIs are relative to *https://api.torbox.app*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**addReferralToAccount**](UserApi.md#addreferraltoaccount) | **POST** /v1/api/user/addreferral | Add Referral To Account |
| [**deleteAccount**](UserApi.md#deleteaccount) | **DELETE** /v1/api/user/deleteme | Delete Account |
| [**editUserSettings**](UserApi.md#editusersettings) | **PUT** /v1/api/user/settings/editsettings | Edit User Settings |
| [**getConfirmationCode**](UserApi.md#getconfirmationcode) | **GET** /v1/api/user/getconfirmation | Get Confirmation Code |
| [**getReferralData**](UserApi.md#getreferraldata) | **GET** /v1/api/user/referraldata | Get Referral Data |
| [**getSubscriptions**](UserApi.md#getsubscriptions) | **GET** /v1/api/user/subscriptions | Get Subscriptions |
| [**getTokenFromDeviceCodeProcess**](UserApi.md#gettokenfromdevicecodeprocess) | **POST** /v1/api/user/auth/device/token | Get Token From Device Code Process |
| [**getTransactionPdf**](UserApi.md#gettransactionpdf) | **GET** /v1/api/user/transaction/pdf | Get Transaction PDF |
| [**getTransactions**](UserApi.md#gettransactions) | **GET** /v1/api/user/transactions | Get Transactions |
| [**getUserData**](UserApi.md#getuserdata) | **GET** /v1/api/user/me | Get User Data |
| [**getUserStats**](UserApi.md#getuserstats) | **GET** /v1/api/user/stats | Get User Stats |
| [**refreshApiToken**](UserApi.md#refreshapitoken) | **POST** /v1/api/user/refreshtoken | Refresh API Token |
| [**startDeviceCodeAuthorizationProcess**](UserApi.md#startdevicecodeauthorizationprocess) | **GET** /v1/api/user/auth/device/start | Start Device Code Authorization Process |



## addReferralToAccount

> AddReferralToAccountResponse addReferralToAccount(referral)

Add Referral To Account

### Overview  Automatically adds a referral code to the user\&#39;s account. This can be used for developers to automatically add their referral to user\&#39;s accounts who use their service.  This will not override any referral a user already has. If they already have one, then it cannot be changed using this endpoint. It can only be done by the user on the [website](https://torbox.app/subscription).  ### Authorization  Requires an API key using the Authorization Bearer Header. Use the user\&#39;s API key, not your own. 

### Example

```ts
import {
  Configuration,
  UserApi,
} from '@torbox/torbox-api';
import type { AddReferralToAccountRequest } from '@torbox/torbox-api';

async function example() {
  console.log("🚀 Testing @torbox/torbox-api SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: ApiKey
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new UserApi(config);

  const body = {
    // string | A referral code. Must be UUID.
    referral: referral_example,
  } satisfies AddReferralToAccountRequest;

  try {
    const data = await api.addReferralToAccount(body);
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
| **referral** | `string` | A referral code. Must be UUID. | [Defaults to `undefined`] |

### Return type

[**AddReferralToAccountResponse**](AddReferralToAccountResponse.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
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


## deleteAccount

> DeleteAccountResponse deleteAccount(DeleteAccountSchema)

Delete Account

### Overview  Permanently deletes the user\&#39;s TorBox account. This cannot be undone.  Because of how dangerous this action is, it needs two things on top of the API key: the user\&#39;s session token from the website, and a confirmation code, which is sent to the user\&#39;s email by the Get Confirmation Code endpoint.  ### Authorization  Requires an API key using the Authorization Bearer Header, as well as the session token and the confirmation code in the body. 

### Example

```ts
import {
  Configuration,
  UserApi,
} from '@torbox/torbox-api';
import type { DeleteAccountRequest } from '@torbox/torbox-api';

async function example() {
  console.log("🚀 Testing @torbox/torbox-api SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: ApiKey
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new UserApi(config);

  const body = {
    // DeleteAccountSchema
    DeleteAccountSchema: {"session_token":"string","confirmation_code":123456},
  } satisfies DeleteAccountRequest;

  try {
    const data = await api.deleteAccount(body);
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
| **DeleteAccountSchema** | [DeleteAccountSchema](DeleteAccountSchema.md) |  | |

### Return type

[**DeleteAccountResponse**](DeleteAccountResponse.md)

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
| **410** | Gone |  -  |
| **422** | Validation Error |  -  |
| **429** | Too Many Requests |  -  |
| **500** | Internal Server Error |  -  |
| **503** | Service Unavailable |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## editUserSettings

> EditUserSettingsResponse editUserSettings(BaseSettingsModel)

Edit User Settings

### Overview  Edits a user\&#39;s TorBox settings. These values take effect immediately. Please view the body to read about allowed options and parameters.  To get the user settings, simply use the \&quot;[Get User Data](https://api.torbox.app/docs#/User/get_user_data)\&quot; endpoint, while sending the \&quot;?settings&#x3D;true\&quot; parameter  ### Authorization  Requires an API key using the Authorization Bearer Header. 

### Example

```ts
import {
  Configuration,
  UserApi,
} from '@torbox/torbox-api';
import type { EditUserSettingsRequest } from '@torbox/torbox-api';

async function example() {
  console.log("🚀 Testing @torbox/torbox-api SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: ApiKey
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new UserApi(config);

  const body = {
    // BaseSettingsModel
    BaseSettingsModel: {"email_notifications":true,"web_notifications":true,"mobile_notifications":true,"rss_notifications":true,"download_speed_in_tab":true,"stremio_quality":[0,1,2,3,4,5,6,7,8,9,10,11],"stremio_resolution":[0,1,2,3],"stremio_language":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21],"stremio_cache":[1,2,3],"stremio_size_lower":0,"google_drive_folder_id":"string","onedrive_save_path":"string","discord_id":"string","discord_notifications":true,"stremio_allow_adult":true,"stremio_seed_torrents":1,"seed_torrents":1,"allow_zipped":true,"stremio_allow_zipped":true,"onefichier_folder_id":"string","gofile_folder_id":"string","webhook_notifications":true,"webhook_url":"https://example.com/webhook","telegram_notifications":true,"telegram_id":"string","mega_email":"string","mega_password":"string","stremio_sort":"seeders","cdn_selection":"string","stremio_use_custom_search_engines":true,"stremio_result_sort":"torrent","webdav_use_local_files":true,"stremio_legacy_your_media":true,"stremio_only_your_media_streams":true,"stremio_disable_your_media_streams":true,"webdav_use_folder_view":true,"webdav_flatten":true,"stremio_limit_per_resolution_torrent":0,"stremio_limit_per_resolution_usenet":0,"stremio_size_upper":0,"stremio_torrent_seeders_cutoff":0,"pixeldrain_api_key":"string","onefichier_api_key":"string","gofile_api_key":"string","patreon_id":"string","stremio_wait_for_download_usenet":true,"stremio_wait_for_download_torrent":true,"stremio_disable_filtered_note":true,"stremio_emoji_in_description":true,"dashboard_filter":{"torrents":false,"usenet_downloads":false,"web_downloads":false,"active":false,"inactive":false,"queued":false,"downloading":false,"uploading":false,"processing":false,"download_ready":false,"cached":false,"uncached":false,"private":false,"borrowed":false},"web_player_always_transcode":true,"web_player_always_skip_intro":true,"web_player_audio_preferred_language":"string","web_player_subtitle_preferred_language":"string","web_player_disable_prestream_selector":true,"dashboard_sort":"default","web_player_disable_next_up_dialogue":true,"web_player_enable_scrobbling":true,"append_filename_to_links":true},
  } satisfies EditUserSettingsRequest;

  try {
    const data = await api.editUserSettings(body);
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
| **BaseSettingsModel** | [BaseSettingsModel](BaseSettingsModel.md) |  | |

### Return type

[**EditUserSettingsResponse**](EditUserSettingsResponse.md)

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


## getConfirmationCode

> GetConfirmationCodeResponse getConfirmationCode()

Get Confirmation Code

### Overview  Requests a 6 digit code to be sent to the user\&#39;s email for verification. Used to verify a user actually wants to perform a potentially dangerous action.  ### Authorization  Requires an API key using the Authorization Bearer Header. 

### Example

```ts
import {
  Configuration,
  UserApi,
} from '@torbox/torbox-api';
import type { GetConfirmationCodeRequest } from '@torbox/torbox-api';

async function example() {
  console.log("🚀 Testing @torbox/torbox-api SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: ApiKey
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new UserApi(config);

  try {
    const data = await api.getConfirmationCode();
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

[**GetConfirmationCodeResponse**](GetConfirmationCodeResponse.md)

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


## getReferralData

> GetReferralDataResponse getReferralData()

Get Referral Data

### Overview  Use this endpoint to get the user\&#39;s referral data. This includes information such as how many referrals they have made, and their referral code.  ### Authorization  Requires an API key using the Authorization Bearer Header. 

### Example

```ts
import {
  Configuration,
  UserApi,
} from '@torbox/torbox-api';
import type { GetReferralDataRequest } from '@torbox/torbox-api';

async function example() {
  console.log("🚀 Testing @torbox/torbox-api SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: ApiKey
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new UserApi(config);

  try {
    const data = await api.getReferralData();
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

[**GetReferralDataResponse**](GetReferralDataResponse.md)

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


## getSubscriptions

> GetSubscriptionsResponse getSubscriptions()

Get Subscriptions

### Overview  Gets a users subscriptions. This includes active and inactive subscriptions for all payment processors.  It should be noted that \&quot;plan_code\&quot; is not normalized to the standard plan codes such as 1, 2, or 3. These \&quot;plan_code\&quot;s are payment processor specific and used internally. If you want to display these subscriptions, use the \&quot;plan_name\&quot;.  For displaying information to users, use the \&quot;status\&quot;, \&quot;gateway\&quot;, and \&quot;plan_name\&quot;. No other information is relevant to the user, and the rest is used for TorBox internally.  ### Authorization  Requires an API key using the Authorization Bearer Header. 

### Example

```ts
import {
  Configuration,
  UserApi,
} from '@torbox/torbox-api';
import type { GetSubscriptionsRequest } from '@torbox/torbox-api';

async function example() {
  console.log("🚀 Testing @torbox/torbox-api SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: ApiKey
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new UserApi(config);

  try {
    const data = await api.getSubscriptions();
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

[**GetSubscriptionsResponse**](GetSubscriptionsResponse.md)

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


## getTokenFromDeviceCodeProcess

> GetTokenFromDeviceCodeProcessResponse getTokenFromDeviceCodeProcess(DeviceTokenSchema)

Get Token From Device Code Process

### Overview  Gets the user\&#39;s API token from the device code authorization process. This endpoint is expected to be polled in interval until it returns success, or until the expiry has passed. All data you need for this request is in the [original request](https://api.torbox.app/docs#/User/start_device_code_authorization_process), which includes the interval to be polled by, the expiry time to stop at, and &#x60;device_code&#x60; to be sent to the API to get the correct data.  ### Authorization  None required. 

### Example

```ts
import {
  Configuration,
  UserApi,
} from '@torbox/torbox-api';
import type { GetTokenFromDeviceCodeProcessRequest } from '@torbox/torbox-api';

async function example() {
  console.log("🚀 Testing @torbox/torbox-api SDK...");
  const api = new UserApi();

  const body = {
    // DeviceTokenSchema
    DeviceTokenSchema: {"device_code":"XXXXXXXXXXXXXXXXXXXXXXXXX"},
  } satisfies GetTokenFromDeviceCodeProcessRequest;

  try {
    const data = await api.getTokenFromDeviceCodeProcess(body);
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
| **DeviceTokenSchema** | [DeviceTokenSchema](DeviceTokenSchema.md) |  | |

### Return type

[**GetTokenFromDeviceCodeProcessResponse**](GetTokenFromDeviceCodeProcessResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
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


## getTransactionPdf

> string getTransactionPdf(transaction_id)

Get Transaction PDF

### Overview  Generates a PDF of the transaction information. Requires the transaction ID from the \&quot;Get Transactions\&quot; request.  ### Authorization  Requires an API key using the Authorization Bearer Header. 

### Example

```ts
import {
  Configuration,
  UserApi,
} from '@torbox/torbox-api';
import type { GetTransactionPdfRequest } from '@torbox/torbox-api';

async function example() {
  console.log("🚀 Testing @torbox/torbox-api SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: ApiKey
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new UserApi(config);

  const body = {
    // string | The transaction ID that you want to generate the PDF for.
    transaction_id: transaction_id_example,
  } satisfies GetTransactionPdfRequest;

  try {
    const data = await api.getTransactionPdf(body);
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
| **transaction_id** | `string` | The transaction ID that you want to generate the PDF for. | [Defaults to `undefined`] |

### Return type

**string**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/pdf`, `application/json`


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


## getTransactions

> GetTransactionsResponse getTransactions()

Get Transactions

### Overview  Use this endpoint to get the user\&#39;s list of transactions. This data isn\&#39;t exactly relevant to a third party developer, unless you want to build full parity with TorBox\&#39;s dashboard, or simply want to show this information.  ### Authorization  Requires an API key using the Authorization Bearer Header. 

### Example

```ts
import {
  Configuration,
  UserApi,
} from '@torbox/torbox-api';
import type { GetTransactionsRequest } from '@torbox/torbox-api';

async function example() {
  console.log("🚀 Testing @torbox/torbox-api SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: ApiKey
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new UserApi(config);

  try {
    const data = await api.getTransactions();
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

[**GetTransactionsResponse**](GetTransactionsResponse.md)

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


## getUserData

> GetUserDataResponse getUserData(settings, download_stats, referral)

Get User Data

### Overview  Gets a users account data and information.  ### Plans  &#x60;0&#x60; is Free plan  &#x60;1&#x60; is Essential plan (_$3 plan_)  &#x60;2&#x60; is Pro plan (_$10 plan_)  &#x60;3&#x60; is Standard plan (_$5 plan_)  ### Authorization  Requires an API key using the Authorization Bearer Header. 

### Example

```ts
import {
  Configuration,
  UserApi,
} from '@torbox/torbox-api';
import type { GetUserDataRequest } from '@torbox/torbox-api';

async function example() {
  console.log("🚀 Testing @torbox/torbox-api SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: ApiKey
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new UserApi(config);

  const body = {
    // boolean | Allows you to retrieve user settings. (optional)
    settings: true,
    // boolean (optional)
    download_stats: true,
    // boolean (optional)
    referral: true,
  } satisfies GetUserDataRequest;

  try {
    const data = await api.getUserData(body);
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
| **settings** | `boolean` | Allows you to retrieve user settings. | [Optional] [Defaults to `false`] |
| **download_stats** | `boolean` |  | [Optional] [Defaults to `false`] |
| **referral** | `boolean` |  | [Optional] [Defaults to `false`] |

### Return type

[**GetUserDataResponse**](GetUserDataResponse.md)

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


## getUserStats

> GetUserStatsResponse getUserStats(general, bandwidth, bandwidth_grouping)

Get User Stats

### Overview  Gets a users stats. This data is currently split into two sections, \&quot;general\&quot; and \&quot;bandwidth\&quot;. General shows general data, such as \&quot;Total Data Downloaded\&quot;, \&quot;Total Data Egress\&quot;, \&quot;Overall Ratio\&quot;, and \&quot;Total Downloaded\&quot;. Bandwidth shows the amount of bandwidth a user has downloaded within the past 30 days. We don\&#39;t store this data for longer than 30 days, and it can be made more or less granular. Makes cool graphs!  ### Authorization  Requires an API key using the Authorization Bearer Header. 

### Example

```ts
import {
  Configuration,
  UserApi,
} from '@torbox/torbox-api';
import type { GetUserStatsRequest } from '@torbox/torbox-api';

async function example() {
  console.log("🚀 Testing @torbox/torbox-api SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: ApiKey
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new UserApi(config);

  const body = {
    // boolean | Retrieve general stats. (optional)
    general: true,
    // boolean | Retrieve bandwidth stats. (optional)
    bandwidth: true,
    // string | If the \"bandwidth\" query parameter is sent, this value is used. Allowed is \"hour\", \"day\", \"week\", and \"month\", this narrates how bandwidth is grouped. More granular shows more information. (optional)
    bandwidth_grouping: bandwidth_grouping_example,
  } satisfies GetUserStatsRequest;

  try {
    const data = await api.getUserStats(body);
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
| **general** | `boolean` | Retrieve general stats. | [Optional] [Defaults to `true`] |
| **bandwidth** | `boolean` | Retrieve bandwidth stats. | [Optional] [Defaults to `false`] |
| **bandwidth_grouping** | `string` | If the \&quot;bandwidth\&quot; query parameter is sent, this value is used. Allowed is \&quot;hour\&quot;, \&quot;day\&quot;, \&quot;week\&quot;, and \&quot;month\&quot;, this narrates how bandwidth is grouped. More granular shows more information. | [Optional] [Defaults to `&#39;day&#39;`] |

### Return type

[**GetUserStatsResponse**](GetUserStatsResponse.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
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


## refreshApiToken

> RefreshApiTokenResponse refreshApiToken(RefreshTokenSchema)

Refresh API Token

### Overview  If you want a new API token, or your old one has been compromised, you may request a new one. If you happen to forget the token, go the [TorBox settings page ](https://torbox.app/settings) and copy the current one. If this still doesn\&#39;t work, you may contact us at our support email for a new one.  ### Authorization  Requires an API key using the Authorization Bearer Header as well as passing the &#x60;session_token&#x60; from the website to be passed in the body. You can find the &#x60;session_token&#x60; in the localStorage of your browser on any TorBox.app page under the key &#x60;torbox_session_token&#x60;. This is a temporary token that only lasts for 1 hour, which is why it is used here to verify the identity of a user as well as their API token. 

### Example

```ts
import {
  Configuration,
  UserApi,
} from '@torbox/torbox-api';
import type { RefreshApiTokenRequest } from '@torbox/torbox-api';

async function example() {
  console.log("🚀 Testing @torbox/torbox-api SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: ApiKey
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new UserApi(config);

  const body = {
    // RefreshTokenSchema
    RefreshTokenSchema: {"session_token":"string"},
  } satisfies RefreshApiTokenRequest;

  try {
    const data = await api.refreshApiToken(body);
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
| **RefreshTokenSchema** | [RefreshTokenSchema](RefreshTokenSchema.md) |  | |

### Return type

[**RefreshApiTokenResponse**](RefreshApiTokenResponse.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: `application/json`
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


## startDeviceCodeAuthorizationProcess

> StartDeviceCodeAuthorizationProcessResponse startDeviceCodeAuthorizationProcess(app)

Start Device Code Authorization Process

### Overview  Starts the device code authorization process. Returns all the necessary information to complete the rest of the flow. This includes the following:  - &#x60;device_code&#x60; - The code your app will use for consecutive requests for getting the user token.  - &#x60;code&#x60; - This is the 6 digit code that you show to the user to be entered at the following verification_url.  - &#x60;verification_url&#x60; - This url which you will show as a QR code.  - &#x60;friendly_verification_url&#x60; - The friendly short url which you can show as plain text to user if they cannot use the QR code method.   You may also submit the &#x60;app&#x60; parameter to this request to show your app name on the &#x60;verification_url&#x60; page. This concretes user trust in authorizing your application to use their TorBox account. This is not required, but is a good idea. Default is \&quot;Third Party App\&quot;. This name is also only allowed to be alpha-numeric characters (_A-Z,0-9_). Anything else will be filtered our when being shown to the user. The &#x60;friendly_verification_url&#x60; will always show \&quot;Third Party App\&quot; to keep the URL short.  The device_code is only valid for 10 minutes. Make sure the user is aware of this time limit so they submit and login before this time limit is over.  ### Authorization  None required. 

### Example

```ts
import {
  Configuration,
  UserApi,
} from '@torbox/torbox-api';
import type { StartDeviceCodeAuthorizationProcessRequest } from '@torbox/torbox-api';

async function example() {
  console.log("🚀 Testing @torbox/torbox-api SDK...");
  const api = new UserApi();

  const body = {
    // string | The app name that the user will see when verifying the code. This should be the name of your app. (optional)
    app: app_example,
  } satisfies StartDeviceCodeAuthorizationProcessRequest;

  try {
    const data = await api.startDeviceCodeAuthorizationProcess(body);
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
| **app** | `string` | The app name that the user will see when verifying the code. This should be the name of your app. | [Optional] [Defaults to `&#39;Third Party App&#39;`] |

### Return type

[**StartDeviceCodeAuthorizationProcessResponse**](StartDeviceCodeAuthorizationProcessResponse.md)

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

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

