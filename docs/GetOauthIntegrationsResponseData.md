
# GetOauthIntegrationsResponseData


## Properties

Name | Type
------------ | -------------
`trakt` | boolean
`mal` | boolean
`anilist` | boolean
`simkl` | boolean

## Example

```typescript
import type { GetOauthIntegrationsResponseData } from '@torbox/torbox-api'

// TODO: Update the object below with actual values
const example = {
  "trakt": null,
  "mal": null,
  "anilist": null,
  "simkl": null,
} satisfies GetOauthIntegrationsResponseData

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetOauthIntegrationsResponseData
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


