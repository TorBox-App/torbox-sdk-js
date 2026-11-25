
# ListAssistantConversationsResponseDataInner


## Properties

Name | Type
------------ | -------------
`id` | string
`title` | string
`created_at` | number
`updated_at` | number
`messages` | number
`support` | [ListAssistantConversationsResponseDataInnerSupport](ListAssistantConversationsResponseDataInnerSupport.md)

## Example

```typescript
import type { ListAssistantConversationsResponseDataInner } from '@torbox/torbox-api'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "title": null,
  "created_at": null,
  "updated_at": null,
  "messages": null,
  "support": null,
} satisfies ListAssistantConversationsResponseDataInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ListAssistantConversationsResponseDataInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


