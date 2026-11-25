
# GetUserRssFeedsResponseDataInner


## Properties

Name | Type
------------ | -------------
`id` | number
`created_at` | string
`last_checked` | string
`auth_id` | string
`name` | string
`url` | string
`source` | string
`source_name` | string
`do_regex` | string
`dont_regex` | string
`status` | string
`scan_interval` | number
`dont_older_than` | number
`status_message` | string
`type` | string
`state` | string
`torrent_seeding` | number

## Example

```typescript
import type { GetUserRssFeedsResponseDataInner } from '@torbox/torbox-api'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "created_at": null,
  "last_checked": null,
  "auth_id": null,
  "name": null,
  "url": null,
  "source": null,
  "source_name": null,
  "do_regex": null,
  "dont_regex": null,
  "status": null,
  "scan_interval": null,
  "dont_older_than": null,
  "status_message": null,
  "type": null,
  "state": null,
  "torrent_seeding": null,
} satisfies GetUserRssFeedsResponseDataInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetUserRssFeedsResponseDataInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


