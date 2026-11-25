
# CreateStreamResponseData


## Properties

Name | Type
------------ | -------------
`id` | number
`file_id` | number
`auth_id` | string
`created_at` | number
`name` | string
`short_name` | string
`s3_path` | string
`size` | number
`mimetype` | string
`hash` | string
`open_subtitles_hash` | string
`type` | string
`region` | string
`domain` | string
`user_token` | string
`webdav_url` | string
`intro_information` | [CreateStreamResponseDataIntroInformation](CreateStreamResponseDataIntroInformation.md)
`scrobbling_enabled` | boolean
`hls_url` | string
`presigned_token` | string
`subtitle_index` | number
`audio_index` | number
`resolution_index` | number
`is_transcoding` | boolean
`needs_transcoding` | boolean
`metadata` | [CreateStreamResponseDataMetadata](CreateStreamResponseDataMetadata.md)
`search_metadata` | [CreateStreamResponseDataSearchMetadata](CreateStreamResponseDataSearchMetadata.md)

## Example

```typescript
import type { CreateStreamResponseData } from '@torbox/torbox-api'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "file_id": null,
  "auth_id": null,
  "created_at": null,
  "name": null,
  "short_name": null,
  "s3_path": null,
  "size": null,
  "mimetype": null,
  "hash": null,
  "open_subtitles_hash": null,
  "type": null,
  "region": null,
  "domain": null,
  "user_token": null,
  "webdav_url": null,
  "intro_information": null,
  "scrobbling_enabled": null,
  "hls_url": null,
  "presigned_token": null,
  "subtitle_index": null,
  "audio_index": null,
  "resolution_index": null,
  "is_transcoding": null,
  "needs_transcoding": null,
  "metadata": null,
  "search_metadata": null,
} satisfies CreateStreamResponseData

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateStreamResponseData
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


