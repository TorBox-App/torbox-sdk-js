
# CreateStreamResponseDataMetadataAudiosInner


## Properties

Name | Type
------------ | -------------
`index` | number
`codec_type` | string
`codec` | string
`_default` | boolean
`sample_rate` | string
`channels` | number
`channel_layout` | string
`language` | string
`language_full` | string
`title` | string

## Example

```typescript
import type { CreateStreamResponseDataMetadataAudiosInner } from '@torbox/torbox-api'

// TODO: Update the object below with actual values
const example = {
  "index": null,
  "codec_type": null,
  "codec": null,
  "_default": null,
  "sample_rate": null,
  "channels": null,
  "channel_layout": null,
  "language": null,
  "language_full": null,
  "title": null,
} satisfies CreateStreamResponseDataMetadataAudiosInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateStreamResponseDataMetadataAudiosInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


