
# GetUserStatsResponseData


## Properties

Name | Type
------------ | -------------
`general` | [GetUserStatsResponseDataGeneral](GetUserStatsResponseDataGeneral.md)
`bandwidth` | [Array&lt;GetUserStatsResponseDataBandwidthInner&gt;](GetUserStatsResponseDataBandwidthInner.md)

## Example

```typescript
import type { GetUserStatsResponseData } from '@torbox/torbox-api'

// TODO: Update the object below with actual values
const example = {
  "general": null,
  "bandwidth": null,
} satisfies GetUserStatsResponseData

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetUserStatsResponseData
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


