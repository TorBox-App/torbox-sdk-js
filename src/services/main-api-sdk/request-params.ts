export interface RequestDownloadLinkParams {
  token?: string | null;
  torrentId?: string | null;
  fileId?: string | null;
  zipLink?: string | null;
  userIp?: string | null;
  redirect?: string | null;
  appendName?: string | null;
}

export interface RequestDownloadLinksGetParams {
  token?: string | null;
  torrentId?: string | null;
  fileIds?: string | null;
  userIp?: string | null;
  appendName?: string | null;
}

export interface RequestDownloadLinksPostParams {
  token?: string | null;
  torrentId?: string | null;
  userIp?: string | null;
  appendName?: string | null;
}

export interface GetTorrentListParams {
  bypassCache?: string | null;
  id?: string | null;
  offset?: string | null;
  limit?: string | null;
}

export interface GetTorrentCachedAvailabilityParams {
  hash?: string | null;
  format?: string | null;
  listFiles?: string | null;
}

export interface ExportTorrentDataParams {
  torrentId?: string | null;
  type?: string | null;
}

export interface GetTorrentInfoParams {
  hash?: string | null;
  timeout?: string | null;
  useCacheLookup?: string | null;
}

export interface RequestDownloadLinkParams {
  token?: string | null;
  usenetId?: string | null;
  fileId?: string | null;
  zipLink?: string | null;
  userIp?: string | null;
  redirect?: string | null;
  appendName?: string | null;
}

export interface RequestDownloadLinksGetParams {
  token?: string | null;
  usenetId?: string | null;
  fileIds?: string | null;
  userIp?: string | null;
  appendName?: string | null;
}

export interface RequestDownloadLinksPostParams {
  token?: string | null;
  usenetId?: string | null;
  userIp?: string | null;
  appendName?: string | null;
}

export interface GetUsenetListParams {
  bypassCache?: string | null;
  id?: string | null;
  offset?: string | null;
  limit?: string | null;
}

export interface GetUsenetCachedAvailabilityParams {
  hash?: string | null;
  format?: string | null;
  listFiles?: string | null;
}

export interface RequestDownloadLinkParams {
  token?: string | null;
  webId?: string | null;
  fileId?: string | null;
  zipLink?: string | null;
  userIp?: string | null;
  redirect?: string | null;
  appendName?: string | null;
}

export interface RequestDownloadLinksGetParams {
  token?: string | null;
  webId?: string | null;
  fileIds?: string | null;
  userIp?: string | null;
  appendName?: string | null;
}

export interface RequestDownloadLinksPostParams {
  token?: string | null;
  webId?: string | null;
  userIp?: string | null;
  appendName?: string | null;
}

export interface GetWebDownloadListParams {
  bypassCache?: string | null;
  id?: string | null;
  offset?: string | null;
  limit?: string | null;
}

export interface GetWebDownloadCachedAvailabilityParams {
  hash?: string | null;
  format?: string | null;
  listFiles?: string | null;
}

export interface GetWebDownloadCachedAvailabilityBatchParams {
  format?: string | null;
  listFiles?: string | null;
}

export interface GetChangelogsRssFeedParams {
  offset?: string | null;
  limit?: string | null;
}

export interface GetChangelogsJsonParams {
  offset?: string | null;
  limit?: string | null;
}

export interface GetSpeedtestFilesParams {
  testLength?: string | null;
  region?: string | null;
  userIp?: string | null;
}

export interface GetRssNotificationFeedParams {
  token?: string | null;
}

export interface GetUserDataParams {
  settings?: string | null;
}

export interface AddReferralToAccountParams {
  referral?: string | null;
}

export interface StartDeviceCodeAuthorizationProcessParams {
  app?: string | null;
}

export interface GetTransactionPdfParams {
  transactionId?: string | null;
}

export interface GetUserStatsParams {
  general?: string | null;
  bandwidth?: string | null;
  bandwidthGrouping?: string | null;
}

export interface GetUserRssFeedsParams {
  id?: string | null;
}

export interface GetRssFeedItemsParams {
  rssFeedId?: string | null;
}

export interface GetQueuedDownloadsParams {
  bypassCache?: string | null;
  id?: string | null;
  offset?: string | null;
  limit?: string | null;
  type?: string | null;
}

export interface CreateStreamParams {
  id?: string | null;
  fileId?: string | null;
  type?: string | null;
  chosenSubtitleIndex?: string | null;
  chosenAudioIndex?: string | null;
  chosenResolutionIndex?: string | null;
}

export interface GetStreamDataParams {
  presignedToken?: string | null;
  token?: string | null;
  chosenSubtitleIndex?: string | null;
  chosenAudioIndex?: string | null;
  chosenResolutionIndex?: string | null;
}
