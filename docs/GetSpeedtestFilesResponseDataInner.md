
# GetSpeedtestFilesResponseDataInner


## Properties

Name | Type
------------ | -------------
`region` | string
`name` | string
`domain` | string
`path` | string
`url` | string
`closest` | boolean
`coordinates` | [GetSpeedtestFilesResponseDataInnerCoordinates](GetSpeedtestFilesResponseDataInnerCoordinates.md)

## Example

```typescript
import type { GetSpeedtestFilesResponseDataInner } from '@torbox/torbox-api'

// TODO: Update the object below with actual values
const example = {
  "region": null,
  "name": null,
  "domain": null,
  "path": null,
  "url": null,
  "closest": null,
  "coordinates": null,
} satisfies GetSpeedtestFilesResponseDataInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetSpeedtestFilesResponseDataInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


