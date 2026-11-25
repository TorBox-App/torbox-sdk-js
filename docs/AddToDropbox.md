
# AddToDropbox


## Properties

Name | Type
------------ | -------------
`id` | number
`file_id` | number
`zip` | boolean
`type` | string
`dropbox_token` | string

## Example

```typescript
import type { AddToDropbox } from '@torbox/torbox-api'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "file_id": null,
  "zip": null,
  "type": null,
  "dropbox_token": null,
} satisfies AddToDropbox

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AddToDropbox
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


