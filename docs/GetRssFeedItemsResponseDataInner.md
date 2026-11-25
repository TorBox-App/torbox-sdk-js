
# GetRssFeedItemsResponseDataInner


## Properties

Name | Type
------------ | -------------
`id` | number
`created_at` | string
`rss_name` | string
`rss_url` | string
`ignored` | boolean
`downloaded` | boolean
`link` | string
`name` | string
`status` | string
`status_message` | string
`type` | string
`seed_torrents` | number

## Example

```typescript
import type { GetRssFeedItemsResponseDataInner } from '@torbox/torbox-api'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "created_at": null,
  "rss_name": null,
  "rss_url": null,
  "ignored": null,
  "downloaded": null,
  "link": null,
  "name": null,
  "status": null,
  "status_message": null,
  "type": null,
  "seed_torrents": null,
} satisfies GetRssFeedItemsResponseDataInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetRssFeedItemsResponseDataInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


