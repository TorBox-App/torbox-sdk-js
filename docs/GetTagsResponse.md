
# GetTagsResponse


## Properties

Name | Type
------------ | -------------
`success` | boolean
`error` | string
`detail` | string
`data` | [GetTagsResponseData](GetTagsResponseData.md)

## Example

```typescript
import type { GetTagsResponse } from '@torbox/torbox-api'

// TODO: Update the object below with actual values
const example = {
  "success": null,
  "error": null,
  "detail": null,
  "data": null,
} satisfies GetTagsResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetTagsResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


