
# RegisterVendorUserResponseData


## Properties

Name | Type
------------ | -------------
`auth_id` | string
`email` | string
`base_email` | string
`password` | string
`customer` | string
`vendor_id` | number

## Example

```typescript
import type { RegisterVendorUserResponseData } from '@torbox/torbox-api'

// TODO: Update the object below with actual values
const example = {
  "auth_id": null,
  "email": null,
  "base_email": null,
  "password": null,
  "customer": null,
  "vendor_id": null,
} satisfies RegisterVendorUserResponseData

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RegisterVendorUserResponseData
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


