
# CreateStreamResponseDataSearchMetadata


## Properties

Name | Type
------------ | -------------
`title` | string
`titles` | Array&lt;string&gt;
`keywords` | Array&lt;string&gt;
`genres` | Array&lt;string&gt;
`actors` | Array&lt;string&gt;
`releaseYears` | string
`mediaType` | string
`characters` | Array&lt;string&gt;
`globalID` | string
`id` | string
`link` | string
`description` | string
`rating` | number
`languages` | Array&lt;string&gt;
`contentRating` | string
`trailer` | object
`image` | string
`isAdult` | boolean
`type` | string
`releasedDate` | string
`episodesNumber` | number
`runtime` | string
`titles_full` | [Array&lt;CreateStreamResponseDataSearchMetadataTitlesFullInner&gt;](CreateStreamResponseDataSearchMetadataTitlesFullInner.md)
`backdrop` | string

## Example

```typescript
import type { CreateStreamResponseDataSearchMetadata } from '@torbox/torbox-api'

// TODO: Update the object below with actual values
const example = {
  "title": null,
  "titles": null,
  "keywords": null,
  "genres": null,
  "actors": null,
  "releaseYears": null,
  "mediaType": null,
  "characters": null,
  "globalID": null,
  "id": null,
  "link": null,
  "description": null,
  "rating": null,
  "languages": null,
  "contentRating": null,
  "trailer": null,
  "image": null,
  "isAdult": null,
  "type": null,
  "releasedDate": null,
  "episodesNumber": null,
  "runtime": null,
  "titles_full": null,
  "backdrop": null,
} satisfies CreateStreamResponseDataSearchMetadata

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateStreamResponseDataSearchMetadata
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


