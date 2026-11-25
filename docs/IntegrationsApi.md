# IntegrationsApi

All URIs are relative to *https://api.torbox.app*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**authenticateOauth**](IntegrationsApi.md#authenticateoauth) | **GET** /v1/api/integration/oauth/{provider} | Authenticate OAuth |
| [**cancelSpecificJob**](IntegrationsApi.md#cancelspecificjob) | **DELETE** /v1/api/integration/job/{job_id} | Cancel Specific Job |
| [**getAllJobs**](IntegrationsApi.md#getalljobs) | **GET** /v1/api/integration/jobs | Get All Jobs |
| [**getAllJobsByHash**](IntegrationsApi.md#getalljobsbyhash) | **GET** /v1/api/integration/jobs/{hash} | Get All Jobs By Hash |
| [**getOauthIntegrations**](IntegrationsApi.md#getoauthintegrations) | **GET** /v1/api/integration/oauth/me | Get OAuth Integrations |
| [**getSpecificJob**](IntegrationsApi.md#getspecificjob) | **GET** /v1/api/integration/job/{job_id} | Get Specific Job |
| [**linkDiscordRoles**](IntegrationsApi.md#linkdiscordroles) | **POST** /v1/api/integration/oauth/discord/linked_roles | Link Discord Roles |
| [**oauthCallbackGet**](IntegrationsApi.md#oauthcallbackget) | **GET** /v1/api/integration/oauth/{provider}/callback | OAuth Callback Get |
| [**oauthCallbackPost**](IntegrationsApi.md#oauthcallbackpost) | **POST** /v1/api/integration/oauth/{provider}/callback | OAuth Callback Post |
| [**oauthSuccess**](IntegrationsApi.md#oauthsuccess) | **GET** /v1/api/integration/oauth/{provider}/success | OAuth Success |
| [**registerOauthLink**](IntegrationsApi.md#registeroauthlink) | **POST** /v1/api/integration/oauth/{provider}/register | Register OAuth Link |
| [**unregisterOauthLink**](IntegrationsApi.md#unregisteroauthlink) | **DELETE** /v1/api/integration/oauth/{provider}/unregister | Unregister OAuth Link |
| [**uploadTo1fichier**](IntegrationsApi.md#uploadto1fichier) | **POST** /v1/api/integration/1fichier | Upload To 1Fichier |
| [**uploadToDropbox**](IntegrationsApi.md#uploadtodropbox) | **POST** /v1/api/integration/dropbox | Upload To Dropbox |
| [**uploadToGofile**](IntegrationsApi.md#uploadtogofile) | **POST** /v1/api/integration/gofile | Upload To Gofile |
| [**uploadToGoogleDrive**](IntegrationsApi.md#uploadtogoogledrive) | **POST** /v1/api/integration/googledrive | Upload To Google Drive |
| [**uploadToOnedrive**](IntegrationsApi.md#uploadtoonedrive) | **POST** /v1/api/integration/onedrive | Upload To OneDrive |
| [**uploadToPixeldrain**](IntegrationsApi.md#uploadtopixeldrain) | **POST** /v1/api/integration/pixeldrain | Upload To Pixeldrain |



## authenticateOauth

> authenticateOauth(provider)

Authenticate OAuth

### Overview  Starts the OAuth login with another service. This is a browser redirect, not a call for a script: open it in the user\&#39;s browser. It answers with a redirect to the login page of the service named in &#x60;provider&#x60;. When the user has approved, the service sends the browser back to the callback route of this API, &#x60;https://api.torbox.app/v1/api/integration/oauth/{provider}/callback&#x60;, which finishes the login.  The accepted providers and where the browser is sent:  - &#x60;google&#x60; -&gt; &#x60;https://accounts.google.com/o/oauth2/auth&#x60;, asking for the scopes &#x60;https://www.googleapis.com/auth/drive.file&#x60; and &#x60;https://www.googleapis.com/auth/userinfo.email&#x60; - &#x60;dropbox&#x60; -&gt; &#x60;https://www.dropbox.com/oauth2/authorize&#x60;, asking for &#x60;files.content.write sharing.write&#x60; - &#x60;discord&#x60; -&gt; &#x60;https://discord.com/api/oauth2/authorize&#x60;, asking for &#x60;identify role_connections.write&#x60; - &#x60;onedrive&#x60; -&gt; &#x60;https://login.microsoftonline.com/common/oauth2/v2.0/authorize&#x60;, asking for &#x60;files.readwrite.all&#x60; - &#x60;patreon&#x60; -&gt; &#x60;https://www.patreon.com/oauth2/authorize&#x60;, asking for &#x60;identity&#x60; - &#x60;apple&#x60; -&gt; the Apple sign-in page, asking for &#x60;openid email&#x60;. Apple is asked to send the result back as a form POST. - &#x60;anilist&#x60; -&gt; &#x60;https://anilist.co/api/v2/oauth/authorize&#x60; - &#x60;mal&#x60; -&gt; &#x60;https://myanimelist.net/v1/oauth2/authorize&#x60;, asking for &#x60;write:users&#x60; - &#x60;trakt&#x60; -&gt; &#x60;https://trakt.tv/oauth/authorize&#x60; - &#x60;simkl&#x60; -&gt; &#x60;https://simkl.com/oauth/authorize&#x60;  Any other provider is answered with a JSON error instead of a redirect.  ### Authorization  None required. 

### Example

```ts
import {
  Configuration,
  IntegrationsApi,
} from '@torbox/torbox-api';
import type { AuthenticateOauthRequest } from '@torbox/torbox-api';

async function example() {
  console.log("🚀 Testing @torbox/torbox-api SDK...");
  const api = new IntegrationsApi();

  const body = {
    // string | The service to log in with. One of `google`, `dropbox`, `discord`, `onedrive`, `patreon`, `apple`, `anilist`, `mal`, `trakt` or `simkl`.
    provider: provider_example,
  } satisfies AuthenticateOauthRequest;

  try {
    const data = await api.authenticateOauth(body);
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
| **provider** | `string` | The service to log in with. One of &#x60;google&#x60;, &#x60;dropbox&#x60;, &#x60;discord&#x60;, &#x60;onedrive&#x60;, &#x60;patreon&#x60;, &#x60;apple&#x60;, &#x60;anilist&#x60;, &#x60;mal&#x60;, &#x60;trakt&#x60; or &#x60;simkl&#x60;. | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **302** | Found |  -  |
| **400** | Bad Request |  -  |
| **404** | Not Found |  -  |
| **422** | Validation Error |  -  |
| **429** | Too Many Requests |  -  |
| **500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## cancelSpecificJob

> CancelSpecificJobResponse cancelSpecificJob(job_id)

Cancel Specific Job

### Overview  Cancels a job or deletes the job. Cancels while in progess (pending, uploading), or deletes the job any other time. It will delete it from the database completely.  ### Authorization  Requires an API key using the Authorization Bearer Header. 

### Example

```ts
import {
  Configuration,
  IntegrationsApi,
} from '@torbox/torbox-api';
import type { CancelSpecificJobRequest } from '@torbox/torbox-api';

async function example() {
  console.log("🚀 Testing @torbox/torbox-api SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: ApiKey
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new IntegrationsApi(config);

  const body = {
    // number
    job_id: 789,
  } satisfies CancelSpecificJobRequest;

  try {
    const data = await api.cancelSpecificJob(body);
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
| **job_id** | `number` |  | [Defaults to `undefined`] |

### Return type

[**CancelSpecificJobResponse**](CancelSpecificJobResponse.md)

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


## getAllJobs

> GetAllJobsResponse getAllJobs()

Get All Jobs

### Overview  Gets all the jobs attached to a user account. This is good for an overall view of the jobs, such as on a dashboard, or something similar.  ### Statuses  - \&quot;pending\&quot; -&gt; Upload is still waiting in the queue. Waiting for spot to upload. - \&quot;uploading\&quot; -&gt; Upload is uploading to the proper remote. Progress will be updated as upload continues. - \&quot;completed\&quot; -&gt; Upload has successfully been uploaded. Progress will be at 1, and the download URL will be populated.  - \&quot;failed\&quot; -&gt; The upload has failed. Check the Detail key for information.   ### Authorization  Requires an API key using the Authorization Bearer Header. 

### Example

```ts
import {
  Configuration,
  IntegrationsApi,
} from '@torbox/torbox-api';
import type { GetAllJobsRequest } from '@torbox/torbox-api';

async function example() {
  console.log("🚀 Testing @torbox/torbox-api SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: ApiKey
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new IntegrationsApi(config);

  try {
    const data = await api.getAllJobs();
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

[**GetAllJobsResponse**](GetAllJobsResponse.md)

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


## getAllJobsByHash

> GetAllJobsByHashResponse getAllJobsByHash(hash)

Get All Jobs By Hash

### Overview  Gets all jobs that match a specific hash. Good for checking on specific downloads such as a download page, that could contain a lot of jobs.  ### Statuses  - \&quot;pending\&quot; -&gt; Upload is still waiting in the queue. Waiting for spot to upload. - \&quot;uploading\&quot; -&gt; Upload is uploading to the proper remote. Progress will be updated as upload continues. - \&quot;completed\&quot; -&gt; Upload has successfully been uploaded. Progress will be at 1, and the download URL will be populated. - \&quot;failed\&quot; -&gt; The upload has failed. Check the Detail key for information.   ### Authorization  Requires an API key using the Authorization Bearer Header. 

### Example

```ts
import {
  Configuration,
  IntegrationsApi,
} from '@torbox/torbox-api';
import type { GetAllJobsByHashRequest } from '@torbox/torbox-api';

async function example() {
  console.log("🚀 Testing @torbox/torbox-api SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: ApiKey
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new IntegrationsApi(config);

  const body = {
    // string
    hash: hash_example,
  } satisfies GetAllJobsByHashRequest;

  try {
    const data = await api.getAllJobsByHash(body);
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
| **hash** | `string` |  | [Defaults to `undefined`] |

### Return type

[**GetAllJobsByHashResponse**](GetAllJobsByHashResponse.md)

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


## getOauthIntegrations

> GetOauthIntegrationsResponse getOauthIntegrations()

Get OAuth Integrations

### Overview  Shows which tracking services are linked to your account through an OAuth link. &#x60;data&#x60; has one boolean for each of &#x60;trakt&#x60;, &#x60;mal&#x60;, &#x60;anilist&#x60; and &#x60;simkl&#x60;, true when a link for that service is stored on your account. A link is stored with Register OAuth Link and removed with Unregister OAuth Link.  Only these four services are reported. A link for any other provider that Register OAuth Link accepts, such as &#x60;discord&#x60;, is not part of the answer. The answer also does not say whether a stored token still works. If the lookup itself fails, &#x60;data&#x60; is an empty object under the same success message.  ### Authorization  Requires an API key using the Authorization Bearer Header. 

### Example

```ts
import {
  Configuration,
  IntegrationsApi,
} from '@torbox/torbox-api';
import type { GetOauthIntegrationsRequest } from '@torbox/torbox-api';

async function example() {
  console.log("🚀 Testing @torbox/torbox-api SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: ApiKey
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new IntegrationsApi(config);

  try {
    const data = await api.getOauthIntegrations();
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

[**GetOauthIntegrationsResponse**](GetOauthIntegrationsResponse.md)

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


## getSpecificJob

> GetSpecificJobResponse getSpecificJob(job_id)

Get Specific Job

### Overview  Gets a specifc job using the Job\&#39;s ID. To get the ID, you will have to Get All Jobs, and get the ID you want.  ### Statuses  - \&quot;pending\&quot; -&gt; Upload is still waiting in the queue. Waiting for spot to upload. - \&quot;uploading\&quot; -&gt; Upload is uploading to the proper remote. Progress will be updated as upload continues. - \&quot;completed\&quot; -&gt; Upload has successfully been uploaded. Progress will be at 1, and the download URL will be populated. - \&quot;failed\&quot; -&gt; The upload has failed. Check the Detail key for information.   ### Authorization  Requires an API key using the Authorization Bearer Header. 

### Example

```ts
import {
  Configuration,
  IntegrationsApi,
} from '@torbox/torbox-api';
import type { GetSpecificJobRequest } from '@torbox/torbox-api';

async function example() {
  console.log("🚀 Testing @torbox/torbox-api SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: ApiKey
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new IntegrationsApi(config);

  const body = {
    // number
    job_id: 789,
  } satisfies GetSpecificJobRequest;

  try {
    const data = await api.getSpecificJob(body);
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
| **job_id** | `number` |  | [Defaults to `undefined`] |

### Return type

[**GetSpecificJobResponse**](GetSpecificJobResponse.md)

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


## linkDiscordRoles

> LinkDiscordRolesResponse linkDiscordRoles(LinkedRolesData)

Link Discord Roles

### Overview  Updates the Discord linked roles of a user from their TorBox account. Send a Discord OAuth access token of the user in &#x60;discord_token&#x60;. The token is issued by Discord, not by TorBox: it is the &#x60;token&#x60; handed over at the end of the login started by Authenticate OAuth with the provider &#x60;discord&#x60;, which asks Discord for the &#x60;identify&#x60; and &#x60;role_connections.write&#x60; scopes.  TorBox reads the Discord user behind the token and writes the TorBox role connection of that Discord user: the platform name \&quot;TorBox\&quot;, that the user has signed up, the date the TorBox account was created, and the key of the account\&#39;s plan: &#x60;essential_plan&#x60; for plan 1, &#x60;pro_plan&#x60; for plan 2 or &#x60;standard_plan&#x60; for plan 3.  Once Discord has accepted the update, the Discord user id is saved as the &#x60;discord_id&#x60; of your TorBox settings. The answer carries no data.  When Discord returns no user for the token, or does not accept the update, the answer is an error and the Discord user id is not saved.  ### Authorization  Requires an API key using the Authorization Bearer Header. 

### Example

```ts
import {
  Configuration,
  IntegrationsApi,
} from '@torbox/torbox-api';
import type { LinkDiscordRolesRequest } from '@torbox/torbox-api';

async function example() {
  console.log("🚀 Testing @torbox/torbox-api SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: ApiKey
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new IntegrationsApi(config);

  const body = {
    // LinkedRolesData
    LinkedRolesData: {"discord_token":"string"},
  } satisfies LinkDiscordRolesRequest;

  try {
    const data = await api.linkDiscordRoles(body);
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
| **LinkedRolesData** | [LinkedRolesData](LinkedRolesData.md) |  | |

### Return type

[**LinkDiscordRolesResponse**](LinkDiscordRolesResponse.md)

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


## oauthCallbackGet

> oauthCallbackGet(provider)

OAuth Callback Get

### Overview  The address a service sends the user\&#39;s browser back to after the login started by Authenticate OAuth. It is reached by the browser on its way back from the service, not called by you. The service adds its &#x60;code&#x60; and &#x60;state&#x60; to the query string.  TorBox exchanges the code for the service\&#39;s tokens, looks up who the user is at that service, and redirects the browser to the TorBox website with the result in the query string:  &#x60;https://torbox.app/oauth/{provider}/success?token&#x3D;...&amp;expires_in&#x3D;...&amp;expires_at&#x3D;...&amp;user_id&#x3D;...&amp;id_token&#x3D;...&amp;nonce&#x3D;...&amp;refresh_token&#x3D;...&#x60;  - &#x60;token&#x60; -&gt; the access token the service issued - &#x60;refresh_token&#x60; -&gt; the refresh token the service issued - &#x60;expires_in&#x60;, &#x60;expires_at&#x60; -&gt; as found in the service\&#39;s token answer - &#x60;user_id&#x60; -&gt; who the user is at the service. The email address for &#x60;google&#x60; and &#x60;apple&#x60;, the &#x60;email&#x60; field of the Discord user for &#x60;discord&#x60;, the user id for &#x60;patreon&#x60;, &#x60;anilist&#x60; and &#x60;mal&#x60;, the user name for &#x60;trakt&#x60; and &#x60;simkl&#x60;. Not set for &#x60;dropbox&#x60; and &#x60;onedrive&#x60;. - &#x60;id_token&#x60; -&gt; the ID token for &#x60;google&#x60; and &#x60;apple&#x60;, the Discord user id for &#x60;discord&#x60;. Not set for the other providers. - &#x60;nonce&#x60; -&gt; the name of the provider  A value the service did not give is sent as the text &#x60;None&#x60;.  This route stores nothing on a TorBox account. The tokens it hands over are the ones Register OAuth Link, Link Discord Roles and the upload routes take.  If the login was cancelled, has expired or fails, the route answers with a JSON error instead of a redirect.  ### Authorization  None required. 

### Example

```ts
import {
  Configuration,
  IntegrationsApi,
} from '@torbox/torbox-api';
import type { OauthCallbackGetRequest } from '@torbox/torbox-api';

async function example() {
  console.log("🚀 Testing @torbox/torbox-api SDK...");
  const api = new IntegrationsApi();

  const body = {
    // string | The service the login was started with. One of `google`, `dropbox`, `discord`, `onedrive`, `patreon`, `apple`, `anilist`, `mal`, `trakt` or `simkl`.
    provider: provider_example,
  } satisfies OauthCallbackGetRequest;

  try {
    const data = await api.oauthCallbackGet(body);
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
| **provider** | `string` | The service the login was started with. One of &#x60;google&#x60;, &#x60;dropbox&#x60;, &#x60;discord&#x60;, &#x60;onedrive&#x60;, &#x60;patreon&#x60;, &#x60;apple&#x60;, &#x60;anilist&#x60;, &#x60;mal&#x60;, &#x60;trakt&#x60; or &#x60;simkl&#x60;. | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **302** | Found |  -  |
| **400** | Bad Request |  -  |
| **404** | Not Found |  -  |
| **422** | Validation Error |  -  |
| **429** | Too Many Requests |  -  |
| **500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## oauthCallbackPost

> oauthCallbackPost(provider)

OAuth Callback Post

### Overview  The same callback as OAuth Callback Get, for a service that sends the browser back with a form POST instead of a GET. Apple does this: the login for &#x60;apple&#x60; asks for the result as a form POST, and this route reads the form fields &#x60;state&#x60; and &#x60;code&#x60; from it. It is reached by the browser on its way back from the service, not called by you.  TorBox exchanges the code for the service\&#39;s tokens, looks up who the user is at that service, and redirects the browser to the TorBox website with the result in the query string:  &#x60;https://torbox.app/oauth/{provider}/success?token&#x3D;...&amp;expires_in&#x3D;...&amp;expires_at&#x3D;...&amp;user_id&#x3D;...&amp;id_token&#x3D;...&amp;nonce&#x3D;...&amp;refresh_token&#x3D;...&#x60;  The query parameters are the ones described under OAuth Callback Get. For &#x60;apple&#x60;, &#x60;user_id&#x60; is the email address from Apple\&#39;s ID token and &#x60;id_token&#x60; is that ID token. A value the service did not give is sent as the text &#x60;None&#x60;.  This route stores nothing on a TorBox account. If the login was cancelled, has expired or fails, the route answers with a JSON error instead of a redirect.  ### Authorization  None required. 

### Example

```ts
import {
  Configuration,
  IntegrationsApi,
} from '@torbox/torbox-api';
import type { OauthCallbackPostRequest } from '@torbox/torbox-api';

async function example() {
  console.log("🚀 Testing @torbox/torbox-api SDK...");
  const api = new IntegrationsApi();

  const body = {
    // string | The service the login was started with. One of `google`, `dropbox`, `discord`, `onedrive`, `patreon`, `apple`, `anilist`, `mal`, `trakt` or `simkl`.
    provider: provider_example,
  } satisfies OauthCallbackPostRequest;

  try {
    const data = await api.oauthCallbackPost(body);
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
| **provider** | `string` | The service the login was started with. One of &#x60;google&#x60;, &#x60;dropbox&#x60;, &#x60;discord&#x60;, &#x60;onedrive&#x60;, &#x60;patreon&#x60;, &#x60;apple&#x60;, &#x60;anilist&#x60;, &#x60;mal&#x60;, &#x60;trakt&#x60; or &#x60;simkl&#x60;. | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **302** | Found |  -  |
| **400** | Bad Request |  -  |
| **404** | Not Found |  -  |
| **422** | Validation Error |  -  |
| **429** | Too Many Requests |  -  |
| **500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## oauthSuccess

> OauthSuccessResponse oauthSuccess(provider)

OAuth Success

### Overview  Answers with a fixed success message for the providers &#x60;google&#x60;, &#x60;dropbox&#x60;, &#x60;discord&#x60;, &#x60;onedrive&#x60; and &#x60;patreon&#x60;. It reads nothing but the provider name and hands over no token: &#x60;data&#x60; is always null. Any other provider is answered with a JSON error.  This is not where the OAuth callback redirects to. The callback sends the browser to the page with the same path on the TorBox website, &#x60;https://torbox.app/oauth/{provider}/success&#x60;, with the tokens in the query string. This route on the API takes no part in handing them over.  ### Authorization  None required. 

### Example

```ts
import {
  Configuration,
  IntegrationsApi,
} from '@torbox/torbox-api';
import type { OauthSuccessRequest } from '@torbox/torbox-api';

async function example() {
  console.log("🚀 Testing @torbox/torbox-api SDK...");
  const api = new IntegrationsApi();

  const body = {
    // string | The service. One of `google`, `dropbox`, `discord`, `onedrive` or `patreon`.
    provider: provider_example,
  } satisfies OauthSuccessRequest;

  try {
    const data = await api.oauthSuccess(body);
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
| **provider** | `string` | The service. One of &#x60;google&#x60;, &#x60;dropbox&#x60;, &#x60;discord&#x60;, &#x60;onedrive&#x60; or &#x60;patreon&#x60;. | [Defaults to `undefined`] |

### Return type

[**OauthSuccessResponse**](OauthSuccessResponse.md)

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


## registerOauthLink

> RegisterOauthLinkResponse registerOauthLink(provider, OAuthRegisterRequest)

Register OAuth Link

### Overview  Stores an OAuth link to another service on your TorBox account. Send the access token and the refresh token that the service issued for the user. TorBox does not issue these tokens: they are the &#x60;token&#x60; and &#x60;refresh_token&#x60; handed over at the end of the login started by Authenticate OAuth.  Both tokens are stored encrypted. If the account already has a link for that provider, its tokens are replaced and the link is marked active again. The tokens are not checked with the service when they are registered. The stored tokens of &#x60;mal&#x60;, &#x60;trakt&#x60;, &#x60;anilist&#x60; and &#x60;discord&#x60; links are refreshed once a day with the refresh token.  Get OAuth Integrations shows whether a &#x60;trakt&#x60;, &#x60;mal&#x60;, &#x60;anilist&#x60; or &#x60;simkl&#x60; link is stored.  ### Authorization  Requires an API key using the Authorization Bearer Header. 

### Example

```ts
import {
  Configuration,
  IntegrationsApi,
} from '@torbox/torbox-api';
import type { RegisterOauthLinkRequest } from '@torbox/torbox-api';

async function example() {
  console.log("🚀 Testing @torbox/torbox-api SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: ApiKey
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new IntegrationsApi(config);

  const body = {
    // string | The service to link. One of `google`, `dropbox`, `discord`, `onedrive`, `patreon`, `apple`, `anilist`, `mal`, `trakt` or `simkl`.
    provider: provider_example,
    // OAuthRegisterRequest
    OAuthRegisterRequest: {"token":"string","refresh_token":"string"},
  } satisfies RegisterOauthLinkRequest;

  try {
    const data = await api.registerOauthLink(body);
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
| **provider** | `string` | The service to link. One of &#x60;google&#x60;, &#x60;dropbox&#x60;, &#x60;discord&#x60;, &#x60;onedrive&#x60;, &#x60;patreon&#x60;, &#x60;apple&#x60;, &#x60;anilist&#x60;, &#x60;mal&#x60;, &#x60;trakt&#x60; or &#x60;simkl&#x60;. | [Defaults to `undefined`] |
| **OAuthRegisterRequest** | [OAuthRegisterRequest](OAuthRegisterRequest.md) |  | |

### Return type

[**RegisterOauthLinkResponse**](RegisterOauthLinkResponse.md)

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


## unregisterOauthLink

> UnregisterOauthLinkResponse unregisterOauthLink(provider)

Unregister OAuth Link

### Overview  Removes the OAuth link to a service from your TorBox account by deleting the stored tokens. The tokens are deleted from TorBox only, nothing is revoked at the service itself.  The route answers with success whether or not a link existed. It does not check the provider name either: a name that was never registered removes nothing and is still answered with success.  ### Authorization  Requires an API key using the Authorization Bearer Header. 

### Example

```ts
import {
  Configuration,
  IntegrationsApi,
} from '@torbox/torbox-api';
import type { UnregisterOauthLinkRequest } from '@torbox/torbox-api';

async function example() {
  console.log("🚀 Testing @torbox/torbox-api SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: ApiKey
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new IntegrationsApi(config);

  const body = {
    // string | The service to unlink, by the name it was registered with in Register OAuth Link (`google`, `dropbox`, `discord`, `onedrive`, `patreon`, `apple`, `anilist`, `mal`, `trakt` or `simkl`). The name is not checked by the route.
    provider: provider_example,
  } satisfies UnregisterOauthLinkRequest;

  try {
    const data = await api.unregisterOauthLink(body);
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
| **provider** | `string` | The service to unlink, by the name it was registered with in Register OAuth Link (&#x60;google&#x60;, &#x60;dropbox&#x60;, &#x60;discord&#x60;, &#x60;onedrive&#x60;, &#x60;patreon&#x60;, &#x60;apple&#x60;, &#x60;anilist&#x60;, &#x60;mal&#x60;, &#x60;trakt&#x60; or &#x60;simkl&#x60;). The name is not checked by the route. | [Defaults to `undefined`] |

### Return type

[**UnregisterOauthLinkResponse**](UnregisterOauthLinkResponse.md)

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


## uploadTo1fichier

> UploadTo1fichierResponse uploadTo1fichier(AddTo1Fichier)

Upload To 1Fichier

### Overview  Uploads a file, or a zip of a whole download, from your TorBox account to 1Fichier. Send the &#x60;id&#x60; of the torrent, usenet download or web download, its &#x60;type&#x60;, and either the &#x60;file_id&#x60; of one file or &#x60;zip&#x60; set to true. &#x60;onefichier_token&#x60; is optional: with it the upload is made with that 1Fichier account\&#39;s API token, without it the upload is sent without a 1Fichier login.  The route answers at once with a &#x60;job_id&#x60;. The upload itself runs in the background as a transfer job, and nothing is checked with 1Fichier before the answer, so a token 1Fichier does not accept only shows up as a failed job. Follow the job with Get Specific Job (&#x60;/v1/api/integration/job/{job_id}&#x60;), Get All Jobs (&#x60;/v1/api/integration/jobs&#x60;) or Get All Jobs By Hash (&#x60;/v1/api/integration/jobs/{hash}&#x60;), and stop it with Cancel Specific Job.  The job goes from \&quot;pending\&quot; through \&quot;preparing\&quot; and \&quot;uploading\&quot; to \&quot;completed\&quot; or \&quot;failed\&quot;. Its &#x60;detail&#x60; says what it is doing or why it failed, and its &#x60;progress&#x60; runs from 0 to 1. When it is completed, its &#x60;download_url&#x60; is the 1Fichier download link of the file and you get an \&quot;Upload Complete\&quot; notification. A failed job is deleted about an hour after it failed, a completed job about 7 days after it completed.  A file larger than 2 GB (2,147,483,647 bytes) is not uploaded: the request is queued and the job fails. The download has to be cached on TorBox, otherwise the job fails. If you send neither &#x60;file_id&#x60; nor &#x60;zip&#x60;, the request is still queued, but there is no file to upload and the job fails. If your settings have a &#x60;onefichier_folder_id&#x60;, the file is put in that folder, but only when a &#x60;onefichier_token&#x60; is sent.  ### Authorization  Requires an API key using the Authorization Bearer Header. 

### Example

```ts
import {
  Configuration,
  IntegrationsApi,
} from '@torbox/torbox-api';
import type { UploadTo1fichierRequest } from '@torbox/torbox-api';

async function example() {
  console.log("🚀 Testing @torbox/torbox-api SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: ApiKey
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new IntegrationsApi(config);

  const body = {
    // AddTo1Fichier
    AddTo1Fichier: {"id":0,"file_id":0,"zip":false,"type":"torrent","onefichier_token":"string"},
  } satisfies UploadTo1fichierRequest;

  try {
    const data = await api.uploadTo1fichier(body);
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
| **AddTo1Fichier** | [AddTo1Fichier](AddTo1Fichier.md) |  | |

### Return type

[**UploadTo1fichierResponse**](UploadTo1fichierResponse.md)

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


## uploadToDropbox

> uploadToDropbox(AddToDropbox)

Upload To Dropbox

### Overview  The Dropbox integration has been removed from TorBox. The route still exists, but it no longer uploads anything and never starts a transfer job. After the API key and the &#x60;type&#x60; are checked, every request is answered with status 400, the error &#x60;DIFF_ISSUE&#x60; and the detail \&quot;Dropbox integration has been removed from TorBox.\&quot;  The body fields are still read, so they are listed here, but none of them changes the answer. Use one of the other upload routes instead.  ### Authorization  Requires an API key using the Authorization Bearer Header. 

### Example

```ts
import {
  Configuration,
  IntegrationsApi,
} from '@torbox/torbox-api';
import type { UploadToDropboxRequest } from '@torbox/torbox-api';

async function example() {
  console.log("🚀 Testing @torbox/torbox-api SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: ApiKey
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new IntegrationsApi(config);

  const body = {
    // AddToDropbox
    AddToDropbox: {"id":0,"file_id":0,"zip":false,"type":"torrent","dropbox_token":"string"},
  } satisfies UploadToDropboxRequest;

  try {
    const data = await api.uploadToDropbox(body);
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
| **AddToDropbox** | [AddToDropbox](AddToDropbox.md) |  | |

### Return type

`void` (Empty response body)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **422** | Validation Error |  -  |
| **429** | Too Many Requests |  -  |
| **500** | Internal Server Error |  -  |
| **503** | Service Unavailable |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## uploadToGofile

> UploadToGofileResponse uploadToGofile(AddToGofile)

Upload To Gofile

### Overview  Uploads a file, or a zip of a whole download, from your TorBox account to Gofile. Send the &#x60;id&#x60; of the torrent, usenet download or web download, its &#x60;type&#x60;, and either the &#x60;file_id&#x60; of one file or &#x60;zip&#x60; set to true. &#x60;gofile_token&#x60; is optional: with it the upload is made with that Gofile account\&#39;s API token, without it the upload is sent without a Gofile login.  The route answers at once with a &#x60;job_id&#x60;. The upload itself runs in the background as a transfer job, and nothing is checked with Gofile before the answer, so a token Gofile does not accept only shows up as a failed job. Follow the job with Get Specific Job (&#x60;/v1/api/integration/job/{job_id}&#x60;), Get All Jobs (&#x60;/v1/api/integration/jobs&#x60;) or Get All Jobs By Hash (&#x60;/v1/api/integration/jobs/{hash}&#x60;), and stop it with Cancel Specific Job.  The job goes from \&quot;pending\&quot; through \&quot;preparing\&quot; and \&quot;uploading\&quot; to \&quot;completed\&quot; or \&quot;failed\&quot;. Its &#x60;detail&#x60; says what it is doing or why it failed, and its &#x60;progress&#x60; runs from 0 to 1. When it is completed, its &#x60;download_url&#x60; is the Gofile download page of the file and you get an \&quot;Upload Complete\&quot; notification. A failed job is deleted about an hour after it failed, a completed job about 7 days after it completed.  The download has to be cached on TorBox, otherwise the job fails. If you send neither &#x60;file_id&#x60; nor &#x60;zip&#x60;, the request is still queued, but there is no file to upload and the job fails. If your settings have a &#x60;gofile_folder_id&#x60;, the file is put in that folder, but only when a &#x60;gofile_token&#x60; is sent.  ### Authorization  Requires an API key using the Authorization Bearer Header. 

### Example

```ts
import {
  Configuration,
  IntegrationsApi,
} from '@torbox/torbox-api';
import type { UploadToGofileRequest } from '@torbox/torbox-api';

async function example() {
  console.log("🚀 Testing @torbox/torbox-api SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: ApiKey
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new IntegrationsApi(config);

  const body = {
    // AddToGofile
    AddToGofile: {"id":0,"file_id":0,"zip":false,"type":"torrent","gofile_token":"string"},
  } satisfies UploadToGofileRequest;

  try {
    const data = await api.uploadToGofile(body);
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
| **AddToGofile** | [AddToGofile](AddToGofile.md) |  | |

### Return type

[**UploadToGofileResponse**](UploadToGofileResponse.md)

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


## uploadToGoogleDrive

> UploadToGoogleDriveResponse uploadToGoogleDrive(AddToGoogleDrive)

Upload To Google Drive

### Overview  Uploads a file, or a zip of a whole download, from your TorBox account to a Google Drive. Send the &#x60;id&#x60; of the torrent, usenet download or web download, its &#x60;type&#x60;, and either the &#x60;file_id&#x60; of one file or &#x60;zip&#x60; set to true. In &#x60;google_token&#x60; you send a Google OAuth access token for the Drive to upload to. The login started by Authenticate OAuth with the provider &#x60;google&#x60; asks Google for the &#x60;drive.file&#x60; scope and ends with such a token.  The route answers at once with a &#x60;job_id&#x60;. The upload itself runs in the background as a transfer job, and nothing is checked with Google before the answer, so a token Google does not accept only shows up as a failed job. Follow the job with Get Specific Job (&#x60;/v1/api/integration/job/{job_id}&#x60;), Get All Jobs (&#x60;/v1/api/integration/jobs&#x60;) or Get All Jobs By Hash (&#x60;/v1/api/integration/jobs/{hash}&#x60;), and stop it with Cancel Specific Job.  The job goes from \&quot;pending\&quot; through \&quot;preparing\&quot; and \&quot;uploading\&quot; to \&quot;completed\&quot; or \&quot;failed\&quot;. Its &#x60;detail&#x60; says what it is doing or why it failed, and its &#x60;progress&#x60; runs from 0 to 1. When it is completed, its &#x60;download_url&#x60; is the link to the file on Google Drive and you get an \&quot;Upload Complete\&quot; notification. A failed job is deleted about an hour after it failed, a completed job about 7 days after it completed.  The download has to be cached on TorBox, otherwise the job fails. If you send neither &#x60;file_id&#x60; nor &#x60;zip&#x60;, the request is still queued, but there is no file to upload and the job fails. If your settings have a &#x60;google_drive_folder_id&#x60;, the file is put in that folder.  ### Authorization  Requires an API key using the Authorization Bearer Header. 

### Example

```ts
import {
  Configuration,
  IntegrationsApi,
} from '@torbox/torbox-api';
import type { UploadToGoogleDriveRequest } from '@torbox/torbox-api';

async function example() {
  console.log("🚀 Testing @torbox/torbox-api SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: ApiKey
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new IntegrationsApi(config);

  const body = {
    // AddToGoogleDrive
    AddToGoogleDrive: {"id":0,"file_id":0,"zip":false,"type":"torrent","google_token":"string"},
  } satisfies UploadToGoogleDriveRequest;

  try {
    const data = await api.uploadToGoogleDrive(body);
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
| **AddToGoogleDrive** | [AddToGoogleDrive](AddToGoogleDrive.md) |  | |

### Return type

[**UploadToGoogleDriveResponse**](UploadToGoogleDriveResponse.md)

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


## uploadToOnedrive

> UploadToOnedriveResponse uploadToOnedrive(AddToOnedrive)

Upload To OneDrive

### Overview  Uploads a file, or a zip of a whole download, from your TorBox account to a OneDrive. Send the &#x60;id&#x60; of the torrent, usenet download or web download, its &#x60;type&#x60;, and either the &#x60;file_id&#x60; of one file or &#x60;zip&#x60; set to true. In &#x60;onedrive_token&#x60; you send a OneDrive (Microsoft) OAuth access token for the drive to upload to. The login started by Authenticate OAuth with the provider &#x60;onedrive&#x60; asks Microsoft for the &#x60;files.readwrite.all&#x60; scope and ends with such a token.  The route answers at once with a &#x60;job_id&#x60;. The upload itself runs in the background as a transfer job, and nothing is checked with OneDrive before the answer, so a token OneDrive does not accept only shows up as a failed job. Follow the job with Get Specific Job (&#x60;/v1/api/integration/job/{job_id}&#x60;), Get All Jobs (&#x60;/v1/api/integration/jobs&#x60;) or Get All Jobs By Hash (&#x60;/v1/api/integration/jobs/{hash}&#x60;), and stop it with Cancel Specific Job.  The job goes from \&quot;pending\&quot; through \&quot;preparing\&quot; and \&quot;uploading\&quot; to \&quot;completed\&quot; or \&quot;failed\&quot;. Its &#x60;detail&#x60; says what it is doing or why it failed, and its &#x60;progress&#x60; runs from 0 to 1. When it is completed, its &#x60;download_url&#x60; is the link to the file on OneDrive and you get an \&quot;Upload Complete\&quot; notification. A failed job is deleted about an hour after it failed, a completed job about 7 days after it completed.  The download has to be cached on TorBox, otherwise the job fails. If you send neither &#x60;file_id&#x60; nor &#x60;zip&#x60;, the request is still queued, but there is no file to upload and the job fails. The file is saved under the &#x60;onedrive_save_path&#x60; of your settings, or in the root of the drive when that setting is empty. A file with the same name in that place is replaced.  ### Authorization  Requires an API key using the Authorization Bearer Header. 

### Example

```ts
import {
  Configuration,
  IntegrationsApi,
} from '@torbox/torbox-api';
import type { UploadToOnedriveRequest } from '@torbox/torbox-api';

async function example() {
  console.log("🚀 Testing @torbox/torbox-api SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: ApiKey
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new IntegrationsApi(config);

  const body = {
    // AddToOnedrive
    AddToOnedrive: {"id":0,"file_id":0,"zip":false,"type":"torrent","onedrive_token":"string"},
  } satisfies UploadToOnedriveRequest;

  try {
    const data = await api.uploadToOnedrive(body);
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
| **AddToOnedrive** | [AddToOnedrive](AddToOnedrive.md) |  | |

### Return type

[**UploadToOnedriveResponse**](UploadToOnedriveResponse.md)

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


## uploadToPixeldrain

> UploadToPixeldrainResponse uploadToPixeldrain(AddToPixeldrain)

Upload To Pixeldrain

### Overview  Uploads a file, or a zip of a whole download, from your TorBox account to Pixeldrain. Send the &#x60;id&#x60; of the torrent, usenet download or web download, its &#x60;type&#x60;, either the &#x60;file_id&#x60; of one file or &#x60;zip&#x60; set to true, and the API key of the Pixeldrain account to upload to in &#x60;pixeldrain_token&#x60;.  The route accepts a request without &#x60;pixeldrain_token&#x60;, but nothing can be uploaded without one: the job then fails with the detail \&quot;No API key provided. Please provide an API key to upload to Pixeldrain.\&quot; Only the key sent in the request is used.  The route answers at once with a &#x60;job_id&#x60;. The upload itself runs in the background as a transfer job, and nothing is checked with Pixeldrain before the answer, so a key Pixeldrain does not accept only shows up as a failed job. Follow the job with Get Specific Job (&#x60;/v1/api/integration/job/{job_id}&#x60;), Get All Jobs (&#x60;/v1/api/integration/jobs&#x60;) or Get All Jobs By Hash (&#x60;/v1/api/integration/jobs/{hash}&#x60;), and stop it with Cancel Specific Job.  The job goes from \&quot;pending\&quot; through \&quot;preparing\&quot; and \&quot;uploading\&quot; to \&quot;completed\&quot; or \&quot;failed\&quot;. Its &#x60;detail&#x60; says what it is doing or why it failed, and its &#x60;progress&#x60; runs from 0 to 1. When it is completed, its &#x60;download_url&#x60; is the Pixeldrain link of the file (&#x60;https://pixeldrain.com/u/...&#x60;) and you get an \&quot;Upload Complete\&quot; notification. A failed job is deleted about an hour after it failed, a completed job about 7 days after it completed.  A file of 100 GB (107,374,182,400 bytes) or more is not uploaded: the request is queued and the job fails. The download has to be cached on TorBox, otherwise the job fails. Send &#x60;file_id&#x60; or &#x60;zip&#x60;: with neither there is no file to upload and the job never completes.  ### Authorization  Requires an API key using the Authorization Bearer Header. 

### Example

```ts
import {
  Configuration,
  IntegrationsApi,
} from '@torbox/torbox-api';
import type { UploadToPixeldrainRequest } from '@torbox/torbox-api';

async function example() {
  console.log("🚀 Testing @torbox/torbox-api SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: ApiKey
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new IntegrationsApi(config);

  const body = {
    // AddToPixeldrain
    AddToPixeldrain: {"id":0,"file_id":0,"zip":false,"type":"torrent","pixeldrain_token":"string"},
  } satisfies UploadToPixeldrainRequest;

  try {
    const data = await api.uploadToPixeldrain(body);
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
| **AddToPixeldrain** | [AddToPixeldrain](AddToPixeldrain.md) |  | |

### Return type

[**UploadToPixeldrainResponse**](UploadToPixeldrainResponse.md)

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

