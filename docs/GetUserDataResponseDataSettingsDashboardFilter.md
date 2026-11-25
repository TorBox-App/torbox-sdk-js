
# GetUserDataResponseDataSettingsDashboardFilter


## Properties

Name | Type
------------ | -------------
`active` | boolean
`cached` | boolean
`queued` | boolean
`_private` | boolean
`borrowed` | boolean
`inactive` | boolean
`torrents` | boolean
`uncached` | boolean
`uploading` | boolean
`processing` | boolean
`downloading` | boolean
`web_downloads` | boolean
`download_ready` | boolean
`usenet_downloads` | boolean

## Example

```typescript
import type { GetUserDataResponseDataSettingsDashboardFilter } from '@torbox/torbox-api'

// TODO: Update the object below with actual values
const example = {
  "active": null,
  "cached": null,
  "queued": null,
  "_private": null,
  "borrowed": null,
  "inactive": null,
  "torrents": null,
  "uncached": null,
  "uploading": null,
  "processing": null,
  "downloading": null,
  "web_downloads": null,
  "download_ready": null,
  "usenet_downloads": null,
} satisfies GetUserDataResponseDataSettingsDashboardFilter

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetUserDataResponseDataSettingsDashboardFilter
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


