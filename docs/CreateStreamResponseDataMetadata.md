
# CreateStreamResponseDataMetadata


## Properties

Name | Type
------------ | -------------
`video` | [CreateStreamResponseDataMetadataVideo](CreateStreamResponseDataMetadataVideo.md)
`audios` | [Array&lt;CreateStreamResponseDataMetadataAudiosInner&gt;](CreateStreamResponseDataMetadataAudiosInner.md)
`subtitles` | Array&lt;any&gt;
`thumbnail` | string
`chapters` | string

## Example

```typescript
import type { CreateStreamResponseDataMetadata } from '@torbox/torbox-api'

// TODO: Update the object below with actual values
const example = {
  "video": null,
  "audios": null,
  "subtitles": null,
  "thumbnail": null,
  "chapters": null,
} satisfies CreateStreamResponseDataMetadata

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateStreamResponseDataMetadata
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


