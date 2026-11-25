
# AddRss


## Properties

Name | Type
------------ | -------------
`url` | string
`name` | string
`do_regex` | string
`dont_regex` | string
`dont_older_than` | number
`pass_check` | boolean
`scan_interval` | number
`rss_type` | string
`torrent_seeding` | number

## Example

```typescript
import type { AddRss } from '@torbox/torbox-api'

// TODO: Update the object below with actual values
const example = {
  "url": null,
  "name": null,
  "do_regex": null,
  "dont_regex": null,
  "dont_older_than": null,
  "pass_check": null,
  "scan_interval": null,
  "rss_type": null,
  "torrent_seeding": null,
} satisfies AddRss

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AddRss
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


