
# GetSubscriptionsResponseDataInner


## Properties

Name | Type
------------ | -------------
`created_at` | string
`updated_at` | string
`subscription_code` | string
`email_token` | string
`auth_id` | string
`plan_code` | string
`status` | string
`gateway` | string
`plan_name` | string

## Example

```typescript
import type { GetSubscriptionsResponseDataInner } from '@torbox/torbox-api'

// TODO: Update the object below with actual values
const example = {
  "created_at": null,
  "updated_at": null,
  "subscription_code": null,
  "email_token": null,
  "auth_id": null,
  "plan_code": null,
  "status": null,
  "gateway": null,
  "plan_name": null,
} satisfies GetSubscriptionsResponseDataInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetSubscriptionsResponseDataInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


