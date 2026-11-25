
# GetSpecificJobResponseData


## Properties

Name | Type
------------ | -------------
`id` | number
`created_at` | string
`updated_at` | string
`auth_id` | string
`hash` | string
`type` | string
`integration` | string
`file_id` | number
`zip` | boolean
`progress` | number
`detail` | string
`download_url` | string
`status` | string
`task_id` | string
`file_name` | string

## Example

```typescript
import type { GetSpecificJobResponseData } from '@torbox/torbox-api'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "created_at": null,
  "updated_at": null,
  "auth_id": null,
  "hash": null,
  "type": null,
  "integration": null,
  "file_id": null,
  "zip": null,
  "progress": null,
  "detail": null,
  "download_url": null,
  "status": null,
  "task_id": null,
  "file_name": null,
} satisfies GetSpecificJobResponseData

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetSpecificJobResponseData
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


