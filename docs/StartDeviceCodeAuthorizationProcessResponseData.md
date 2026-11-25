
# StartDeviceCodeAuthorizationProcessResponseData


## Properties

Name | Type
------------ | -------------
`device_code` | string
`code` | string
`interval` | number
`expires_in` | number
`expires_at` | string
`verification_url` | string
`verification_url_complete` | string
`friendly_verification_url` | string

## Example

```typescript
import type { StartDeviceCodeAuthorizationProcessResponseData } from '@torbox/torbox-api'

// TODO: Update the object below with actual values
const example = {
  "device_code": null,
  "code": null,
  "interval": null,
  "expires_in": null,
  "expires_at": null,
  "verification_url": null,
  "verification_url_complete": null,
  "friendly_verification_url": null,
} satisfies StartDeviceCodeAuthorizationProcessResponseData

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as StartDeviceCodeAuthorizationProcessResponseData
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


