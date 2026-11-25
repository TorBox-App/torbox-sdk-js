
# GetVendorAccountResponseData


## Properties

Name | Type
------------ | -------------
`vendor_id` | number
`vendor_token` | string
`vendor_name` | string
`vendor_email` | string
`vendor_url` | string
`vendor_status` | string
`users_allowed` | number
`current_users` | number
`can_register_new` | boolean
`account_type` | string
`plan` | number
`paid_until` | string
`created_at` | string
`updated_at` | string
`can_generate_vouchers` | boolean

## Example

```typescript
import type { GetVendorAccountResponseData } from '@torbox/torbox-api'

// TODO: Update the object below with actual values
const example = {
  "vendor_id": null,
  "vendor_token": null,
  "vendor_name": null,
  "vendor_email": null,
  "vendor_url": null,
  "vendor_status": null,
  "users_allowed": null,
  "current_users": null,
  "can_register_new": null,
  "account_type": null,
  "plan": null,
  "paid_until": null,
  "created_at": null,
  "updated_at": null,
  "can_generate_vouchers": null,
} satisfies GetVendorAccountResponseData

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetVendorAccountResponseData
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


