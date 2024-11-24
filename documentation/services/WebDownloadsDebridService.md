# WebDownloadsDebridService

A list of all methods in the `WebDownloadsDebridService` service. Click on the method name to view detailed information about that method.

| Methods                                                               | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| :-------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [createWebDownload](#createwebdownload)                               | ### Overview Creates a web download under your account. Simply send a link to any file on the internet. Once it has been checked, it will begin downloading assuming your account has available active download slots, and they aren't too large. ### Authorization Requires an API key using the Authorization Bearer Header.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| [controlWebDownload](#controlwebdownload)                             | ### Overview Controls a web download. By sending the web download's ID and the type of operation you want to perform, it will send that request to the debrid client. Operations are either: - **Delete** `deletes the download from the client and your account permanently` ### Authorization Requires an API key using the Authorization Bearer Header.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [requestDownloadLink2](#requestdownloadlink2)                         | ### Overview Requests the download link from the server. Because downloads are metered, TorBox cannot afford to allow free access to the links directly. This endpoint opens the link for 1 hour for downloads. Once a download is started, the user has nearly unlilimited time to download the file. The 1 hour time limit is simply for starting downloads. This prevents long term link sharing. ### Authorization Requires an API key as a parameter for the `token` parameter.                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| [getWebDownloadList](#getwebdownloadlist)                             | ### Overview Gets the user's web download list. This gives you the needed information to perform other usenet actions. Unlike Torrents, this information is updated on its own every 5 seconds for live web downloads. ### Authorization Requires an API key using the Authorization Bearer Header.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| [getWebDownloadCachedAvailability](#getwebdownloadcachedavailability) | ### Overview Takes in a list of comma separated usenet hashes and checks if the web download is cached. This endpoint only gets a max of around 100 at a time, due to http limits in queries. If you want to do more, you can simply do more hash queries. Such as: `?hash=XXXX&hash=XXXX&hash=XXXX` or `?hash=XXXX,XXXX&hash=XXXX&hash=XXXX,XXXX` and this will work too. Performance is very fast. Less than 1 second per 100. Time is approximately O(log n) time for those interested in taking it to its max. That is without caching as well. This endpoint stores a cache for an hour. You may also pass a `format` parameter with the format you want the data in. Options are either `object` or `list`. You can view examples of both below. To get the hash of a web download, pass the link through an md5 hash algo and it will return the proper hash for it. ### Authorization Requires an API key using the Authorization Bearer Header. |

## createWebDownload

### Overview Creates a web download under your account. Simply send a link to any file on the internet. Once it has been checked, it will begin downloading assuming your account has available active download slots, and they aren't too large. ### Authorization Requires an API key using the Authorization Bearer Header.

- HTTP Method: `POST`
- Endpoint: `/{api_version}/api/webdl/createwebdownload`

**Parameters**

| Name       | Type                                                              | Required | Description       |
| :--------- | :---------------------------------------------------------------- | :------- | :---------------- |
| body       | [CreateWebDownloadRequest](../models/CreateWebDownloadRequest.md) | ❌       | The request body. |
| apiVersion | string                                                            | ✅       |                   |

**Return Type**

`CreateWebDownloadOkResponse`

**Example Usage Code Snippet**

```typescript
import { CreateWebDownloadRequest, TorboxApi } from 'torbox-api';

(async () => {
  const torboxApi = new TorboxApi({
    token: 'YOUR_TOKEN',
  });

  const createWebDownloadRequest: CreateWebDownloadRequest = {
    link: 'link',
  };

  const { data } = await torboxApi.webDownloadsDebrid.createWebDownload('api_version', createWebDownloadRequest);

  console.log(data);
})();
```

## controlWebDownload

### Overview Controls a web download. By sending the web download's ID and the type of operation you want to perform, it will send that request to the debrid client. Operations are either: - **Delete** `deletes the download from the client and your account permanently` ### Authorization Requires an API key using the Authorization Bearer Header.

- HTTP Method: `POST`
- Endpoint: `/{api_version}/api/webdl/controlwebdownload`

**Parameters**

| Name        | Type   | Required | Description                                                                              |
| :---------- | :----- | :------- | :--------------------------------------------------------------------------------------- |
| body        | any    | ❌       | The request body.                                                                        |
| apiVersion  | string | ✅       |                                                                                          |
| bypassCache | string | ❌       |                                                                                          |
| id          | string | ❌       | Determines the web download requested, will return an object rather than list. Optional. |

**Example Usage Code Snippet**

```typescript
import { TorboxApi } from 'torbox-api';

(async () => {
  const torboxApi = new TorboxApi({
    token: 'YOUR_TOKEN',
  });

  const input = {};

  const { data } = await torboxApi.webDownloadsDebrid.controlWebDownload('api_version', {
    bypassCache: 'boolean',
    id: 'integer',
  });

  console.log(data);
})();
```

## requestDownloadLink2

### Overview Requests the download link from the server. Because downloads are metered, TorBox cannot afford to allow free access to the links directly. This endpoint opens the link for 1 hour for downloads. Once a download is started, the user has nearly unlilimited time to download the file. The 1 hour time limit is simply for starting downloads. This prevents long term link sharing. ### Authorization Requires an API key as a parameter for the `token` parameter.

- HTTP Method: `GET`
- Endpoint: `/{api_version}/api/webdl/requestdl`

**Parameters**

| Name        | Type   | Required | Description                                                                                      |
| :---------- | :----- | :------- | :----------------------------------------------------------------------------------------------- |
| apiVersion  | string | ✅       |                                                                                                  |
| token       | string | ❌       | Your API Key                                                                                     |
| webId       | string | ❌       | The web download's ID that you want to download                                                  |
| fileId      | string | ❌       | The files's ID that you want to download                                                         |
| zipLink     | string | ❌       | If you want a zip link. Required if no file_id. Takes precedence over file_id if both are given. |
| torrentFile | string | ❌       | If you want a .torrent file to be downloaded. Does not work with the zip_link option. Optional.  |

**Example Usage Code Snippet**

```typescript
import { TorboxApi } from 'torbox-api';

(async () => {
  const torboxApi = new TorboxApi({
    token: 'YOUR_TOKEN',
  });

  const { data } = await torboxApi.webDownloadsDebrid.requestDownloadLink2('api_version', {
    token: '{{api_key}}',
    webId: '{{webdl_id}}',
    fileId: '{{usenet_file_id}}',
    zipLink: 'boolean',
    torrentFile: 'boolean',
  });

  console.log(data);
})();
```

## getWebDownloadList

### Overview Gets the user's web download list. This gives you the needed information to perform other usenet actions. Unlike Torrents, this information is updated on its own every 5 seconds for live web downloads. ### Authorization Requires an API key using the Authorization Bearer Header.

- HTTP Method: `GET`
- Endpoint: `/{api_version}/api/webdl/mylist`

**Parameters**

| Name        | Type   | Required | Description                                                                                                                                                                                   |
| :---------- | :----- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| apiVersion  | string | ✅       |                                                                                                                                                                                               |
| bypassCache | string | ❌       | Allows you to bypass the cached data, and always get fresh information. Useful if constantly querying for fresh download stats. Otherwise, we request that you save our database a few calls. |
| id          | string | ❌       | Determines the torrent requested, will return an object rather than list. Optional.                                                                                                           |
| offset      | string | ❌       | Determines the offset of items to get from the database. Default is 0. Optional.                                                                                                              |
| limit       | string | ❌       | Determines the number of items to recieve per request. Default is 1000. Optional.                                                                                                             |

**Return Type**

`GetWebDownloadListOkResponse`

**Example Usage Code Snippet**

```typescript
import { TorboxApi } from 'torbox-api';

(async () => {
  const torboxApi = new TorboxApi({
    token: 'YOUR_TOKEN',
  });

  const { data } = await torboxApi.webDownloadsDebrid.getWebDownloadList('api_version', {
    bypassCache: 'boolean',
    id: 'integer',
    offset: 'integer',
    limit: 'integer',
  });

  console.log(data);
})();
```

## getWebDownloadCachedAvailability

### Overview Takes in a list of comma separated usenet hashes and checks if the web download is cached. This endpoint only gets a max of around 100 at a time, due to http limits in queries. If you want to do more, you can simply do more hash queries. Such as: `?hash=XXXX&hash=XXXX&hash=XXXX` or `?hash=XXXX,XXXX&hash=XXXX&hash=XXXX,XXXX` and this will work too. Performance is very fast. Less than 1 second per 100. Time is approximately O(log n) time for those interested in taking it to its max. That is without caching as well. This endpoint stores a cache for an hour. You may also pass a `format` parameter with the format you want the data in. Options are either `object` or `list`. You can view examples of both below. To get the hash of a web download, pass the link through an md5 hash algo and it will return the proper hash for it. ### Authorization Requires an API key using the Authorization Bearer Header.

- HTTP Method: `GET`
- Endpoint: `/{api_version}/api/webdl/checkcached`

**Parameters**

| Name       | Type   | Required | Description                                                                                                                                              |
| :--------- | :----- | :------- | :------------------------------------------------------------------------------------------------------------------------------------------------------- |
| apiVersion | string | ✅       |                                                                                                                                                          |
| hash       | string | ❌       | The list of web hashes you want to check. Comma seperated. To find the hash, md5 the link.                                                               |
| format     | string | ❌       | Format you want the data in. Acceptable is either "object" or "list". List is the most performant option as it doesn't require modification of the list. |

**Example Usage Code Snippet**

```typescript
import { TorboxApi } from 'torbox-api';

(async () => {
  const torboxApi = new TorboxApi({
    token: 'YOUR_TOKEN',
  });

  const { data } = await torboxApi.webDownloadsDebrid.getWebDownloadCachedAvailability('api_version', {
    hash: '{{webdl_hash}}',
    format: 'object',
  });

  console.log(data);
})();
```