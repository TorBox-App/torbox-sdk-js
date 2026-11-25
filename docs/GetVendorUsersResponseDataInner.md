
# GetVendorUsersResponseDataInner


## Properties

Name | Type
------------ | -------------
`id` | number
`user_referral` | string
`created_at` | string
`updated_at` | string
`email` | string
`plan` | number
`total_downloaded` | number
`customer` | string
`is_subscribed` | boolean
`premium_expires_at` | string
`cooldown_until` | string
`auth_id` | string
`base_email` | string
`total_bytes_downloaded` | number
`total_bytes_uploaded` | number
`torrents_downloaded` | number
`web_downloads_downloaded` | number
`usenet_downloads_downloaded` | number
`additional_concurrent_slots` | number
`long_term_seeding` | boolean
`vendor_id` | number
`is_vendor` | boolean
`purchases_referred` | number
`long_term_storage` | boolean
`daily_bandwidth_usage` | number

## Example

```typescript
import type { GetVendorUsersResponseDataInner } from '@torbox/torbox-api'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "user_referral": null,
  "created_at": null,
  "updated_at": null,
  "email": null,
  "plan": null,
  "total_downloaded": null,
  "customer": null,
  "is_subscribed": null,
  "premium_expires_at": null,
  "cooldown_until": null,
  "auth_id": null,
  "base_email": null,
  "total_bytes_downloaded": null,
  "total_bytes_uploaded": null,
  "torrents_downloaded": null,
  "web_downloads_downloaded": null,
  "usenet_downloads_downloaded": null,
  "additional_concurrent_slots": null,
  "long_term_seeding": null,
  "vendor_id": null,
  "is_vendor": null,
  "purchases_referred": null,
  "long_term_storage": null,
  "daily_bandwidth_usage": null,
} satisfies GetVendorUsersResponseDataInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetVendorUsersResponseDataInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


