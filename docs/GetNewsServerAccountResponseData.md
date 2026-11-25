
# GetNewsServerAccountResponseData


## Properties

Name | Type
------------ | -------------
`host` | string
`port` | number
`ssl` | boolean
`connections` | number
`username` | string
`password` | string

## Example

```typescript
import type { GetNewsServerAccountResponseData } from '@torbox/torbox-api'

// TODO: Update the object below with actual values
const example = {
  "host": null,
  "port": null,
  "ssl": null,
  "connections": null,
  "username": null,
  "password": null,
} satisfies GetNewsServerAccountResponseData

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetNewsServerAccountResponseData
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


