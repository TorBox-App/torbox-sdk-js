
# ResetNewsServerAccountPasswordResponse


## Properties

Name | Type
------------ | -------------
`success` | boolean
`error` | string
`detail` | string
`data` | [GetNewsServerAccountResponseData](GetNewsServerAccountResponseData.md)

## Example

```typescript
import type { ResetNewsServerAccountPasswordResponse } from '@torbox/torbox-api'

// TODO: Update the object below with actual values
const example = {
  "success": null,
  "error": null,
  "detail": null,
  "data": null,
} satisfies ResetNewsServerAccountPasswordResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ResetNewsServerAccountPasswordResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


