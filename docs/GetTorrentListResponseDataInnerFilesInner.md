
# GetTorrentListResponseDataInnerFilesInner


## Properties

Name | Type
------------ | -------------
`id` | number
`md5` | string
`hash` | string
`name` | string
`size` | number
`zipped` | boolean
`s3_path` | string
`infected` | boolean
`mimetype` | string
`short_name` | string
`absolute_path` | string
`opensubtitles_hash` | string

## Example

```typescript
import type { GetTorrentListResponseDataInnerFilesInner } from '@torbox/torbox-api'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "md5": null,
  "hash": null,
  "name": null,
  "size": null,
  "zipped": null,
  "s3_path": null,
  "infected": null,
  "mimetype": null,
  "short_name": null,
  "absolute_path": null,
  "opensubtitles_hash": null,
} satisfies GetTorrentListResponseDataInnerFilesInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetTorrentListResponseDataInnerFilesInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


