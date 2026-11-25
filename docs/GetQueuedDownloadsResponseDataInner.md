
# GetQueuedDownloadsResponseDataInner


## Properties

Name | Type
------------ | -------------
`id` | number
`created_at` | string
`magnet` | string
`torrent_file` | string
`hash` | string
`name` | string
`type` | string
`name_override` | string
`seed_torrent_override` | number

## Example

```typescript
import type { GetQueuedDownloadsResponseDataInner } from '@torbox/torbox-api'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "created_at": null,
  "magnet": null,
  "torrent_file": null,
  "hash": null,
  "name": null,
  "type": null,
  "name_override": null,
  "seed_torrent_override": null,
} satisfies GetQueuedDownloadsResponseDataInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetQueuedDownloadsResponseDataInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


