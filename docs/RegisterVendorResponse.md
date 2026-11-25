
# RegisterVendorResponse


## Properties

Name | Type
------------ | -------------
`success` | boolean
`error` | string
`detail` | string
`data` | [RegisterVendorResponseData](RegisterVendorResponseData.md)

## Example

```typescript
import type { RegisterVendorResponse } from '@torbox/torbox-api'

// TODO: Update the object below with actual values
const example = {
  "success": null,
  "error": null,
  "detail": null,
  "data": null,
} satisfies RegisterVendorResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RegisterVendorResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


