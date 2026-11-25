
# GetNotificationFeedResponseDataInner


## Properties

Name | Type
------------ | -------------
`id` | number
`created_at` | string
`title` | string
`message` | string
`auth_id` | string
`action` | string
`action_data` | string
`action_cta` | string

## Example

```typescript
import type { GetNotificationFeedResponseDataInner } from '@torbox/torbox-api'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "created_at": null,
  "title": null,
  "message": null,
  "auth_id": null,
  "action": null,
  "action_data": null,
  "action_cta": null,
} satisfies GetNotificationFeedResponseDataInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetNotificationFeedResponseDataInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


