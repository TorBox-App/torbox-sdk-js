
# ModifyRss


## Properties

Name | Type
------------ | -------------
`rss_feed_id` | number
`name` | string
`do_regex` | string
`dont_regex` | string
`scan_interval` | number
`dont_older_than` | number
`rss_type` | string
`torrent_seeding` | number

## Example

```typescript
import type { ModifyRss } from '@torbox/torbox-api'

// TODO: Update the object below with actual values
const example = {
  "rss_feed_id": null,
  "name": null,
  "do_regex": null,
  "dont_regex": null,
  "scan_interval": null,
  "dont_older_than": null,
  "rss_type": null,
  "torrent_seeding": null,
} satisfies ModifyRss

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ModifyRss
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


