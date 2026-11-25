
# GetSubscriptionsResponse


## Properties

Name | Type
------------ | -------------
`success` | boolean
`error` | string
`detail` | string
`data` | [Array&lt;GetSubscriptionsResponseDataInner&gt;](GetSubscriptionsResponseDataInner.md)

## Example

```typescript
import type { GetSubscriptionsResponse } from '@torbox/torbox-api'

// TODO: Update the object below with actual values
const example = {
  "success": null,
  "error": null,
  "detail": null,
  "data": null,
} satisfies GetSubscriptionsResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetSubscriptionsResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


