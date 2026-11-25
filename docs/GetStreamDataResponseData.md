
# GetStreamDataResponseData


## Properties

Name | Type
------------ | -------------
`hls_url` | string
`domain` | string
`presigned_token` | string
`subtitle_index` | number
`audio_index` | number
`resolution_index` | number
`file_token` | string
`token` | string
`is_transcoding` | boolean
`needs_transcoding` | boolean
`metadata` | [CreateStreamResponseDataMetadata](CreateStreamResponseDataMetadata.md)
`search_metadata` | [CreateStreamResponseDataSearchMetadata](CreateStreamResponseDataSearchMetadata.md)

## Example

```typescript
import type { GetStreamDataResponseData } from '@torbox/torbox-api'

// TODO: Update the object below with actual values
const example = {
  "hls_url": null,
  "domain": null,
  "presigned_token": null,
  "subtitle_index": null,
  "audio_index": null,
  "resolution_index": null,
  "file_token": null,
  "token": null,
  "is_transcoding": null,
  "needs_transcoding": null,
  "metadata": null,
  "search_metadata": null,
} satisfies GetStreamDataResponseData

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetStreamDataResponseData
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


