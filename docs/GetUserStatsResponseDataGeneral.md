
# GetUserStatsResponseDataGeneral


## Properties

Name | Type
------------ | -------------
`total_downloaded` | number
`total_uploaded` | number
`ratio` | number
`total_items_downloaded` | number
`airlocked_downloads` | number
`airlock_storage_limit` | number

## Example

```typescript
import type { GetUserStatsResponseDataGeneral } from '@torbox/torbox-api'

// TODO: Update the object below with actual values
const example = {
  "total_downloaded": null,
  "total_uploaded": null,
  "ratio": null,
  "total_items_downloaded": null,
  "airlocked_downloads": null,
  "airlock_storage_limit": null,
} satisfies GetUserStatsResponseDataGeneral

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetUserStatsResponseDataGeneral
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


