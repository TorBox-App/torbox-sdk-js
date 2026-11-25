
# ControlTorrent


## Properties

Name | Type
------------ | -------------
`operation` | string
`torrent_id` | number
`all` | boolean

## Example

```typescript
import type { ControlTorrent } from '@torbox/torbox-api'

// TODO: Update the object below with actual values
const example = {
  "operation": null,
  "torrent_id": null,
  "all": null,
} satisfies ControlTorrent

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ControlTorrent
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


