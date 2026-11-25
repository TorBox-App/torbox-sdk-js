
# GetWebDownloadListResponseDataInner


## Properties

Name | Type
------------ | -------------
`id` | number
`created_at` | string
`updated_at` | string
`auth_id` | string
`name` | string
`hash` | string
`download_state` | string
`download_speed` | number
`original_url` | string
`eta` | number
`progress` | number
`size` | number
`download_id` | string
`files` | [Array&lt;GetTorrentListResponseDataInnerFilesInner&gt;](GetTorrentListResponseDataInnerFilesInner.md)
`active` | boolean
`cached` | boolean
`download_present` | boolean
`download_finished` | boolean
`expires_at` | string
`error` | string
`cached_at` | string
`server` | number
`alternative_hashes` | Array&lt;string&gt;
`tags` | Array&lt;string&gt;
`airlocked` | boolean

## Example

```typescript
import type { GetWebDownloadListResponseDataInner } from '@torbox/torbox-api'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "created_at": null,
  "updated_at": null,
  "auth_id": null,
  "name": null,
  "hash": null,
  "download_state": null,
  "download_speed": null,
  "original_url": null,
  "eta": null,
  "progress": null,
  "size": null,
  "download_id": null,
  "files": null,
  "active": null,
  "cached": null,
  "download_present": null,
  "download_finished": null,
  "expires_at": null,
  "error": null,
  "cached_at": null,
  "server": null,
  "alternative_hashes": null,
  "tags": null,
  "airlocked": null,
} satisfies GetWebDownloadListResponseDataInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetWebDownloadListResponseDataInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


