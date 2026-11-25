
# GetTorrentInfoFromFileResponseData


## Properties

Name | Type
------------ | -------------
`name` | string
`hash` | string
`size` | number
`trackers` | Array&lt;string&gt;
`seeds` | number
`peers` | number
`files` | [Array&lt;GetTorrentInfoResponseDataFilesInner&gt;](GetTorrentInfoResponseDataFilesInner.md)

## Example

```typescript
import type { GetTorrentInfoFromFileResponseData } from '@torbox/torbox-api'

// TODO: Update the object below with actual values
const example = {
  "name": null,
  "hash": null,
  "size": null,
  "trackers": null,
  "seeds": null,
  "peers": null,
  "files": null,
} satisfies GetTorrentInfoFromFileResponseData

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetTorrentInfoFromFileResponseData
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


