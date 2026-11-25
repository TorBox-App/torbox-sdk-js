
# GetTorrentListResponseDataInner


## Properties

Name | Type
------------ | -------------
`id` | number
`auth_id` | string
`server` | number
`hash` | string
`name` | string
`magnet` | string
`size` | number
`active` | boolean
`created_at` | string
`updated_at` | string
`download_state` | string
`seeds` | number
`peers` | number
`ratio` | number
`progress` | number
`download_speed` | number
`upload_speed` | number
`eta` | number
`torrent_file` | boolean
`expires_at` | string
`download_present` | boolean
`files` | [Array&lt;GetTorrentListResponseDataInnerFilesInner&gt;](GetTorrentListResponseDataInnerFilesInner.md)
`download_path` | string
`availability` | number
`download_finished` | boolean
`tracker` | string
`total_uploaded` | number
`total_downloaded` | number
`cached` | boolean
`owner` | string
`seed_torrent` | boolean
`allow_zipped` | boolean
`long_term_seeding` | boolean
`tracker_message` | string
`cached_at` | string
`_private` | boolean
`alternative_hashes` | Array&lt;string&gt;
`tags` | Array&lt;string&gt;
`airlocked` | boolean

## Example

```typescript
import type { GetTorrentListResponseDataInner } from '@torbox/torbox-api'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "auth_id": null,
  "server": null,
  "hash": null,
  "name": null,
  "magnet": null,
  "size": null,
  "active": null,
  "created_at": null,
  "updated_at": null,
  "download_state": null,
  "seeds": null,
  "peers": null,
  "ratio": null,
  "progress": null,
  "download_speed": null,
  "upload_speed": null,
  "eta": null,
  "torrent_file": null,
  "expires_at": null,
  "download_present": null,
  "files": null,
  "download_path": null,
  "availability": null,
  "download_finished": null,
  "tracker": null,
  "total_uploaded": null,
  "total_downloaded": null,
  "cached": null,
  "owner": null,
  "seed_torrent": null,
  "allow_zipped": null,
  "long_term_seeding": null,
  "tracker_message": null,
  "cached_at": null,
  "_private": null,
  "alternative_hashes": null,
  "tags": null,
  "airlocked": null,
} satisfies GetTorrentListResponseDataInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetTorrentListResponseDataInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


