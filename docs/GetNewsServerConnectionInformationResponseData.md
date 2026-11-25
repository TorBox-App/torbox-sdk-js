
# GetNewsServerConnectionInformationResponseData


## Properties

Name | Type
------------ | -------------
`host` | string
`port` | number
`ssl` | boolean
`username` | string
`password` | string
`connections` | number
`retention` | number
`limitations` | string

## Example

```typescript
import type { GetNewsServerConnectionInformationResponseData } from '@torbox/torbox-api'

// TODO: Update the object below with actual values
const example = {
  "host": null,
  "port": null,
  "ssl": null,
  "username": null,
  "password": null,
  "connections": null,
  "retention": null,
  "limitations": null,
} satisfies GetNewsServerConnectionInformationResponseData

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetNewsServerConnectionInformationResponseData
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


