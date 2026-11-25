
# GetTransactionsResponseDataInner


## Properties

Name | Type
------------ | -------------
`at` | string
`type` | string
`amount` | number
`transaction_id` | string

## Example

```typescript
import type { GetTransactionsResponseDataInner } from '@torbox/torbox-api'

// TODO: Update the object below with actual values
const example = {
  "at": null,
  "type": null,
  "amount": null,
  "transaction_id": null,
} satisfies GetTransactionsResponseDataInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetTransactionsResponseDataInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


