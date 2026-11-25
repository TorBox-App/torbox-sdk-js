
# GetTagsResponseDataString


## Properties

Name | Type
------------ | -------------
`id` | number
`display_name` | string
`torrent_ids` | Array&lt;number&gt;
`usenet_ids` | Array&lt;number&gt;
`web_ids` | Array&lt;number&gt;
`num_downloads` | number
`total_size` | number

## Example

```typescript
import type { GetTagsResponseDataString } from '@torbox/torbox-api'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "display_name": null,
  "torrent_ids": null,
  "usenet_ids": null,
  "web_ids": null,
  "num_downloads": null,
  "total_size": null,
} satisfies GetTagsResponseDataString

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetTagsResponseDataString
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


