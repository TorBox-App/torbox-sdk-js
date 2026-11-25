
# CreateWebDownloadResponseData


## Properties

Name | Type
------------ | -------------
`hash` | string
`webdownload_id` | number
`auth_id` | string
`jdownloader_id` | any
`link_list` | Array&lt;string&gt;

## Example

```typescript
import type { CreateWebDownloadResponseData } from '@torbox/torbox-api'

// TODO: Update the object below with actual values
const example = {
  "hash": null,
  "webdownload_id": null,
  "auth_id": null,
  "jdownloader_id": null,
  "link_list": null,
} satisfies CreateWebDownloadResponseData

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateWebDownloadResponseData
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


