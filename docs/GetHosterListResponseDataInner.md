
# GetHosterListResponseDataInner


## Properties

Name | Type
------------ | -------------
`id` | number
`name` | string
`domains` | Array&lt;string&gt;
`url` | string
`icon` | string
`status` | boolean
`type` | string
`note` | any
`nsfw` | boolean
`daily_link_limit` | number
`daily_link_used` | number
`daily_bandwidth_limit` | number
`daily_bandwidth_used` | number
`per_link_size_limit` | number
`regex` | string

## Example

```typescript
import type { GetHosterListResponseDataInner } from '@torbox/torbox-api'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "name": null,
  "domains": null,
  "url": null,
  "icon": null,
  "status": null,
  "type": null,
  "note": null,
  "nsfw": null,
  "daily_link_limit": null,
  "daily_link_used": null,
  "daily_bandwidth_limit": null,
  "daily_bandwidth_used": null,
  "per_link_size_limit": null,
  "regex": null,
} satisfies GetHosterListResponseDataInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetHosterListResponseDataInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


