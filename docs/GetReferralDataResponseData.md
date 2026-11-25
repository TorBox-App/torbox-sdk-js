
# GetReferralDataResponseData


## Properties

Name | Type
------------ | -------------
`referred_accounts` | number
`referral_code` | string
`purchases_referred` | number

## Example

```typescript
import type { GetReferralDataResponseData } from '@torbox/torbox-api'

// TODO: Update the object below with actual values
const example = {
  "referred_accounts": null,
  "referral_code": null,
  "purchases_referred": null,
} satisfies GetReferralDataResponseData

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetReferralDataResponseData
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


