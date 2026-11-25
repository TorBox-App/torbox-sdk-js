# StreamApi

All URIs are relative to *https://api.torbox.app*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createStream**](StreamApi.md#createstream) | **GET** /v1/api/stream/createstream | Create Stream |
| [**getStreamData**](StreamApi.md#getstreamdata) | **GET** /v1/api/stream/getstreamdata | Get Stream Data |



## createStream

> CreateStreamResponse createStream(id, file_id, type, chosen_subtitle_index, chosen_audio_index, chosen_resolution_index, scrobbling_enabled)

Create Stream

### Overview  Creates a new stream based off of the data provided.  #### Selecting Subtitles and Audios  We use indexes to determine which audio and subtitle you would like to select. To view all available indexes, you must request this endpoint intially with \&quot;null\&quot; or 0, for the chosen indexes. This will return a metadata dictionary in the response, which will contain the list of audios and subtitles available for this stream. When choosing a subtitle or audio stream, use the **relative index**, starting from 0, rather than the \&quot;index\&quot; value. This is important for selecting the correct index. Once your user gets a selection of audios and subtitles available, you can submit this to the endpoint again to get the chosen stream.  - **null** - Selecting no subtitle. Not available for audio as one must always be selected.  - **0** - Selecting first subtitle or audio   #### Selecting Resolution  Similar to the subtitles and audios, we use indexes to determine the resolution chosen. Unlike the above, these are predetermined. We do not upscale video, so if for example, you pass a 1080p video, and request it with resolution, 7, it will stay at 1080p. Please see the below for options.  - **null** - Original video resolution. No downscaling will take place.  - **0** - 144p  - **1** - 240p  - **2** - 360p  - **3** - 480p  - **4** - 720p  - **5** - 1080p  - **6** - 1440p  - **7** - 2160p   #### Types  This endpoint allows you to handle torrents, usenet and web downloads all in one. This is why the \&quot;type\&quot; parameter is available. It defaults to \&quot;torrent\&quot;.  - **torrent** - Torrents  - **usenet** - Usenet downloads  - **webdownload** - Web Downloads   #### Important Notes  - Only text based subtitles are supported. If a non-text based subtitle is selected, it will be ignored.  - If a subtitle or audio index does not exist on the stream, it will be ignored.  - There are a lot of edge-case videos, if something doesn\&#39;t work, don\&#39;t hesitate to report the download hash and file_id of the failing video file.  - This is a **Pro** only feature.   ### Authorization  Requires an API key using the Authorization Bearer Header. 

### Example

```ts
import {
  Configuration,
  StreamApi,
} from '@torbox/torbox-api';
import type { CreateStreamRequest } from '@torbox/torbox-api';

async function example() {
  console.log("🚀 Testing @torbox/torbox-api SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: ApiKey
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new StreamApi(config);

  const body = {
    // number | The ID of the type of download.
    id: 789,
    // number | The file ID inside of the download you would like to stream. (optional)
    file_id: 789,
    // string | The type of download that this is. If choosing the incorrect one, the ID will be incorrect. (optional)
    type: type_example,
    // string | The relative index of the subtitle you would like to stream. This is default null for none. 0 is the first subtitle found. (optional)
    chosen_subtitle_index: chosen_subtitle_index_example,
    // number | The relative index of the subtitle you would like to stream. Defaults to 0 for the first audio stream found inside the file. Cannot be null. (optional)
    chosen_audio_index: 789,
    // string | The index of the resolution you would like to stream. This is default null for original. (optional)
    chosen_resolution_index: chosen_resolution_index_example,
    // boolean (optional)
    scrobbling_enabled: true,
  } satisfies CreateStreamRequest;

  try {
    const data = await api.createStream(body);
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
| **id** | `number` | The ID of the type of download. | [Defaults to `undefined`] |
| **file_id** | `number` | The file ID inside of the download you would like to stream. | [Optional] [Defaults to `0`] |
| **type** | `string` | The type of download that this is. If choosing the incorrect one, the ID will be incorrect. | [Optional] [Defaults to `&#39;torrent&#39;`] |
| **chosen_subtitle_index** | `string` | The relative index of the subtitle you would like to stream. This is default null for none. 0 is the first subtitle found. | [Optional] [Defaults to `undefined`] |
| **chosen_audio_index** | `number` | The relative index of the subtitle you would like to stream. Defaults to 0 for the first audio stream found inside the file. Cannot be null. | [Optional] [Defaults to `0`] |
| **chosen_resolution_index** | `string` | The index of the resolution you would like to stream. This is default null for original. | [Optional] [Defaults to `undefined`] |
| **scrobbling_enabled** | `boolean` |  | [Optional] [Defaults to `true`] |

### Return type

[**CreateStreamResponse**](CreateStreamResponse.md)

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


## getStreamData

> GetStreamDataResponse getStreamData(token, presigned_token, chosen_subtitle_index, chosen_audio_index, chosen_resolution_index)

Get Stream Data

### Overview  Gets stream data from an already created stream. Requires the presigned token and user API token from the original request.  ### Authorization  Requires an API key using the Authorization Bearer Header. 

### Example

```ts
import {
  Configuration,
  StreamApi,
} from '@torbox/torbox-api';
import type { GetStreamDataRequest } from '@torbox/torbox-api';

async function example() {
  console.log("🚀 Testing @torbox/torbox-api SDK...");
  const api = new StreamApi();

  const body = {
    // string | The user\'s API token, can also be used from the original, /createstream request.
    token: token_example,
    // string | The presigned token given from the original, /createstream request.
    presigned_token: presigned_token_example,
    // string | The chosen subtitle index that you are requesting information about. (optional)
    chosen_subtitle_index: chosen_subtitle_index_example,
    // number | The chosen audio index that you are requesting information about. (optional)
    chosen_audio_index: 789,
    // string | The index of the resolution you would like to stream. This is default null for original. (optional)
    chosen_resolution_index: chosen_resolution_index_example,
  } satisfies GetStreamDataRequest;

  try {
    const data = await api.getStreamData(body);
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
| **token** | `string` | The user\&#39;s API token, can also be used from the original, /createstream request. | [Defaults to `undefined`] |
| **presigned_token** | `string` | The presigned token given from the original, /createstream request. | [Defaults to `undefined`] |
| **chosen_subtitle_index** | `string` | The chosen subtitle index that you are requesting information about. | [Optional] [Defaults to `undefined`] |
| **chosen_audio_index** | `number` | The chosen audio index that you are requesting information about. | [Optional] [Defaults to `0`] |
| **chosen_resolution_index** | `string` | The index of the resolution you would like to stream. This is default null for original. | [Optional] [Defaults to `undefined`] |

### Return type

[**GetStreamDataResponse**](GetStreamDataResponse.md)

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

