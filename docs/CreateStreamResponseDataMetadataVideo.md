
# CreateStreamResponseDataMetadataVideo


## Properties

Name | Type
------------ | -------------
`index` | number
`codec_type` | string
`codec` | string
`width` | number
`height` | number
`frame_rate` | string
`pixel_format` | string
`bitrate` | string
`duration` | string
`total_chunks` | number
`file_name` | string
`opensubtitles_hash` | string
`size` | number
`title` | string
`title_data` | object

## Example

```typescript
import type { CreateStreamResponseDataMetadataVideo } from '@torbox/torbox-api'

// TODO: Update the object below with actual values
const example = {
  "index": null,
  "codec_type": null,
  "codec": null,
  "width": null,
  "height": null,
  "frame_rate": null,
  "pixel_format": null,
  "bitrate": null,
  "duration": null,
  "total_chunks": null,
  "file_name": null,
  "opensubtitles_hash": null,
  "size": null,
  "title": null,
  "title_data": null,
} satisfies CreateStreamResponseDataMetadataVideo

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateStreamResponseDataMetadataVideo
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


