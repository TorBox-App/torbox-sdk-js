
# EditWebDownload


## Properties

Name | Type
------------ | -------------
`webdl_id` | number
`name` | string
`tags` | Array&lt;string&gt;
`alternative_hashes` | Array&lt;string&gt;
`airlocked` | boolean

## Example

```typescript
import type { EditWebDownload } from '@torbox/torbox-api'

// TODO: Update the object below with actual values
const example = {
  "webdl_id": null,
  "name": null,
  "tags": null,
  "alternative_hashes": null,
  "airlocked": null,
} satisfies EditWebDownload

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as EditWebDownload
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


