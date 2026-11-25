
# CreateTorrentResponseData


## Properties

Name | Type
------------ | -------------
`hash` | string
`torrent_id` | number
`auth_id` | string
`name` | string
`queued_id` | number

## Example

```typescript
import type { CreateTorrentResponseData } from '@torbox/torbox-api'

// TODO: Update the object below with actual values
const example = {
  "hash": null,
  "torrent_id": null,
  "auth_id": null,
  "name": null,
  "queued_id": null,
} satisfies CreateTorrentResponseData

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateTorrentResponseData
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


