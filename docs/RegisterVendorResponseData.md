
# RegisterVendorResponseData


## Properties

Name | Type
------------ | -------------
`vendor_id` | number
`vendor_token` | string
`vendor_name` | string
`vendor_url` | string
`vendor_status` | string

## Example

```typescript
import type { RegisterVendorResponseData } from '@torbox/torbox-api'

// TODO: Update the object below with actual values
const example = {
  "vendor_id": null,
  "vendor_token": null,
  "vendor_name": null,
  "vendor_url": null,
  "vendor_status": null,
} satisfies RegisterVendorResponseData

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RegisterVendorResponseData
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


