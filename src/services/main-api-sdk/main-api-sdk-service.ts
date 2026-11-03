import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse, SdkConfig } from '../../http/types';
import { RequestBuilder } from '../../http/transport/request-builder';
import { SerializationStyle } from '../../http/serialization/base-serializer';
import { ThrowableError } from '../../http/errors/throwable-error';
import { Environment } from '../../http/environment';
import { CreateTorrentRequest, createTorrentRequestRequest } from './models/create-torrent-request';
import {
  AsyncCreateTorrentRequest,
  asyncCreateTorrentRequestRequest,
} from './models/async-create-torrent-request';
import {
  AddReferralToAccountParams,
  CreateStreamParams,
  ExportTorrentDataParams,
  GetChangelogsJsonParams,
  GetChangelogsRssFeedParams,
  GetQueuedDownloadsParams,
  GetRssFeedItemsParams,
  GetRssNotificationFeedParams,
  GetSpeedtestFilesParams,
  GetStreamDataParams,
  GetTorrentCachedAvailabilityParams,
  GetTorrentInfoParams,
  GetTorrentListParams,
  GetTransactionPdfParams,
  GetUsenetCachedAvailabilityParams,
  GetUsenetListParams,
  GetUserDataParams,
  GetUserRssFeedsParams,
  GetUserStatsParams,
  GetWebDownloadCachedAvailabilityBatchParams,
  GetWebDownloadCachedAvailabilityParams,
  GetWebDownloadListParams,
  RequestDownloadLinkParams,
  RequestDownloadLinksGetParams,
  RequestDownloadLinksPostParams,
  StartDeviceCodeAuthorizationProcessParams,
} from './request-params';
import {
  MainApiSdkRequestDownloadLinksPostRequest1,
  mainApiSdkRequestDownloadLinksPostRequest1Request,
} from './models/main-api-sdk-request-download-links-post-request-1';
import {
  GetTorrentCachedAvailabilityBatchRequest,
  getTorrentCachedAvailabilityBatchRequestRequest,
} from './models/get-torrent-cached-availability-batch-request';
import {
  GetTorrentInfoRequest,
  getTorrentInfoRequestRequest,
} from './models/get-torrent-info-request';
import {
  EditTorrentItemRequest,
  editTorrentItemRequestRequest,
} from './models/edit-torrent-item-request';
import { MagnetToFileRequest, magnetToFileRequestRequest } from './models/magnet-to-file-request';
import {
  CreateUsenetDownloadRequest,
  createUsenetDownloadRequestRequest,
} from './models/create-usenet-download-request';
import {
  MainApiSdkRequestDownloadLinksPostRequest2,
  mainApiSdkRequestDownloadLinksPostRequest2Request,
} from './models/main-api-sdk-request-download-links-post-request-2';
import {
  GetUsenetCachedAvailabilityBatchRequest,
  getUsenetCachedAvailabilityBatchRequestRequest,
} from './models/get-usenet-cached-availability-batch-request';
import {
  EditUsenetItemRequest,
  editUsenetItemRequestRequest,
} from './models/edit-usenet-item-request';
import {
  CreateWebDownloadRequest,
  createWebDownloadRequestRequest,
} from './models/create-web-download-request';
import {
  MainApiSdkRequestDownloadLinksPostRequest3,
  mainApiSdkRequestDownloadLinksPostRequest3Request,
} from './models/main-api-sdk-request-download-links-post-request-3';
import {
  GetWebDownloadCachedAvailabilityBatchRequest,
  getWebDownloadCachedAvailabilityBatchRequestRequest,
} from './models/get-web-download-cached-availability-batch-request';
import {
  EditWebDownloadItemRequest,
  editWebDownloadItemRequestRequest,
} from './models/edit-web-download-item-request';
import {
  GetTokenFromDeviceCodeProcessRequest,
  getTokenFromDeviceCodeProcessRequestRequest,
} from './models/get-token-from-device-code-process-request';

/**
 * Service class for MainApiSdkService operations.
 * Provides methods to interact with MainApiSdkService-related API endpoints.
 * All methods return promises and handle request/response serialization automatically.
 */
export class MainApiSdkService extends BaseService {
  protected createTorrentConfig: Partial<SdkConfig> = { environment: Environment.API_BASE };

  protected asyncCreateTorrentConfig: Partial<SdkConfig> = { environment: Environment.API_BASE };

  protected controlTorrentConfig: Partial<SdkConfig> = { environment: Environment.API_BASE };

  protected requestDownloadLinkConfig: Partial<SdkConfig> = { environment: Environment.API_BASE };

  protected requestDownloadLinksGetConfig: Partial<SdkConfig> = {
    environment: Environment.API_BASE,
  };

  protected requestDownloadLinksPostConfig: Partial<SdkConfig> = {
    environment: Environment.API_BASE,
  };

  protected getTorrentListConfig: Partial<SdkConfig> = { environment: Environment.API_BASE };

  protected getTorrentCachedAvailabilityConfig: Partial<SdkConfig> = {
    environment: Environment.API_BASE,
  };

  protected getTorrentCachedAvailabilityBatchConfig: Partial<SdkConfig> = {
    environment: Environment.API_BASE,
  };

  protected exportTorrentDataConfig: Partial<SdkConfig> = { environment: Environment.API_BASE };

  protected getTorrentInfoConfig: Partial<SdkConfig> = { environment: Environment.API_BASE };

  protected getTorrentInfo1Config: Partial<SdkConfig> = { environment: Environment.API_BASE };

  protected editTorrentItemConfig: Partial<SdkConfig> = { environment: Environment.API_BASE };

  protected magnetToFileConfig: Partial<SdkConfig> = { environment: Environment.API_BASE };

  protected createUsenetDownloadConfig: Partial<SdkConfig> = { environment: Environment.API_BASE };

  protected controlUsenetDownloadConfig: Partial<SdkConfig> = { environment: Environment.API_BASE };

  protected requestDownloadLink1Config: Partial<SdkConfig> = { environment: Environment.API_BASE };

  protected requestDownloadLinksGet1Config: Partial<SdkConfig> = {
    environment: Environment.API_BASE,
  };

  protected requestDownloadLinksPost1Config: Partial<SdkConfig> = {
    environment: Environment.API_BASE,
  };

  protected getUsenetListConfig: Partial<SdkConfig> = { environment: Environment.API_BASE };

  protected getUsenetCachedAvailabilityConfig: Partial<SdkConfig> = {
    environment: Environment.API_BASE,
  };

  protected getUsenetCachedAvailabilityBatchConfig: Partial<SdkConfig> = {
    environment: Environment.API_BASE,
  };

  protected editUsenetItemConfig: Partial<SdkConfig> = { environment: Environment.API_BASE };

  protected getNewsServerConnectionInformationConfig: Partial<SdkConfig> = {
    environment: Environment.API_BASE,
  };

  protected getNewsServerAccountConfig: Partial<SdkConfig> = { environment: Environment.API_BASE };

  protected resetNewsServerAccountPasswordConfig: Partial<SdkConfig> = {
    environment: Environment.API_BASE,
  };

  protected createWebDownloadConfig: Partial<SdkConfig> = { environment: Environment.API_BASE };

  protected controlWebDownloadConfig: Partial<SdkConfig> = { environment: Environment.API_BASE };

  protected requestDownloadLink2Config: Partial<SdkConfig> = { environment: Environment.API_BASE };

  protected requestDownloadLinksGet2Config: Partial<SdkConfig> = {
    environment: Environment.API_BASE,
  };

  protected requestDownloadLinksPost2Config: Partial<SdkConfig> = {
    environment: Environment.API_BASE,
  };

  protected getWebDownloadListConfig: Partial<SdkConfig> = { environment: Environment.API_BASE };

  protected getWebDownloadCachedAvailabilityConfig: Partial<SdkConfig> = {
    environment: Environment.API_BASE,
  };

  protected getWebDownloadCachedAvailabilityBatchConfig: Partial<SdkConfig> = {
    environment: Environment.API_BASE,
  };

  protected getHosterListConfig: Partial<SdkConfig> = { environment: Environment.API_BASE };

  protected editWebDownloadItemConfig: Partial<SdkConfig> = { environment: Environment.API_BASE };

  protected getUpStatusConfig: Partial<SdkConfig> = { environment: Environment.API_BASE };

  protected getStatsConfig: Partial<SdkConfig> = { environment: Environment.API_BASE };

  protected getChangelogsRssFeedConfig: Partial<SdkConfig> = { environment: Environment.API_BASE };

  protected getChangelogsJsonConfig: Partial<SdkConfig> = { environment: Environment.API_BASE };

  protected getSpeedtestFilesConfig: Partial<SdkConfig> = { environment: Environment.API_BASE };

  protected getRssNotificationFeedConfig: Partial<SdkConfig> = {
    environment: Environment.API_BASE,
  };

  protected getNotificationFeedConfig: Partial<SdkConfig> = { environment: Environment.API_BASE };

  protected clearAllNotificationsConfig: Partial<SdkConfig> = { environment: Environment.API_BASE };

  protected clearSingleNotificationConfig: Partial<SdkConfig> = {
    environment: Environment.API_BASE,
  };

  protected sendTestNotificationConfig: Partial<SdkConfig> = { environment: Environment.API_BASE };

  protected refreshApiTokenConfig: Partial<SdkConfig> = { environment: Environment.API_BASE };

  protected getUserDataConfig: Partial<SdkConfig> = { environment: Environment.API_BASE };

  protected addReferralToAccountConfig: Partial<SdkConfig> = { environment: Environment.API_BASE };

  protected getConfirmationCodeConfig: Partial<SdkConfig> = { environment: Environment.API_BASE };

  protected startDeviceCodeAuthorizationProcessConfig: Partial<SdkConfig> = {
    environment: Environment.API_BASE,
  };

  protected getTokenFromDeviceCodeProcessConfig: Partial<SdkConfig> = {
    environment: Environment.API_BASE,
  };

  protected getReferralDataConfig: Partial<SdkConfig> = { environment: Environment.API_BASE };

  protected getSubscriptionsConfig: Partial<SdkConfig> = { environment: Environment.API_BASE };

  protected getTransactionsConfig: Partial<SdkConfig> = { environment: Environment.API_BASE };

  protected getTransactionPdfConfig: Partial<SdkConfig> = { environment: Environment.API_BASE };

  protected editUserSettingsConfig: Partial<SdkConfig> = { environment: Environment.API_BASE };

  protected getUserStatsConfig: Partial<SdkConfig> = { environment: Environment.API_BASE };

  protected addRssFeedConfig: Partial<SdkConfig> = { environment: Environment.API_BASE };

  protected controlRssFeedConfig: Partial<SdkConfig> = { environment: Environment.API_BASE };

  protected editRssFeedConfig: Partial<SdkConfig> = { environment: Environment.API_BASE };

  protected getUserRssFeedsConfig: Partial<SdkConfig> = { environment: Environment.API_BASE };

  protected getRssFeedItemsConfig: Partial<SdkConfig> = { environment: Environment.API_BASE };

  protected getAllJobsConfig: Partial<SdkConfig> = { environment: Environment.API_BASE };

  protected getSpecificJobConfig: Partial<SdkConfig> = { environment: Environment.API_BASE };

  protected getAllJobsByHashConfig: Partial<SdkConfig> = { environment: Environment.API_BASE };

  protected cancelSpecificJobConfig: Partial<SdkConfig> = { environment: Environment.API_BASE };

  protected getQueuedDownloadsConfig: Partial<SdkConfig> = { environment: Environment.API_BASE };

  protected controlQueuedDownloadsConfig: Partial<SdkConfig> = {
    environment: Environment.API_BASE,
  };

  protected createStreamConfig: Partial<SdkConfig> = { environment: Environment.API_BASE };

  protected getStreamDataConfig: Partial<SdkConfig> = { environment: Environment.API_BASE };

  /**
   * Sets method-level configuration for createTorrent.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setCreateTorrentConfig(config: Partial<SdkConfig>): this {
    this.createTorrentConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for asyncCreateTorrent.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setAsyncCreateTorrentConfig(config: Partial<SdkConfig>): this {
    this.asyncCreateTorrentConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for controlTorrent.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setControlTorrentConfig(config: Partial<SdkConfig>): this {
    this.controlTorrentConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for requestDownloadLink.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setRequestDownloadLinkConfig(config: Partial<SdkConfig>): this {
    this.requestDownloadLinkConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for requestDownloadLinksGet.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setRequestDownloadLinksGetConfig(config: Partial<SdkConfig>): this {
    this.requestDownloadLinksGetConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for requestDownloadLinksPost.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setRequestDownloadLinksPostConfig(config: Partial<SdkConfig>): this {
    this.requestDownloadLinksPostConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getTorrentList.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetTorrentListConfig(config: Partial<SdkConfig>): this {
    this.getTorrentListConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getTorrentCachedAvailability.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetTorrentCachedAvailabilityConfig(config: Partial<SdkConfig>): this {
    this.getTorrentCachedAvailabilityConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getTorrentCachedAvailabilityBatch.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetTorrentCachedAvailabilityBatchConfig(config: Partial<SdkConfig>): this {
    this.getTorrentCachedAvailabilityBatchConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for exportTorrentData.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setExportTorrentDataConfig(config: Partial<SdkConfig>): this {
    this.exportTorrentDataConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getTorrentInfo.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetTorrentInfoConfig(config: Partial<SdkConfig>): this {
    this.getTorrentInfoConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getTorrentInfo1.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetTorrentInfo1Config(config: Partial<SdkConfig>): this {
    this.getTorrentInfo1Config = config;
    return this;
  }

  /**
   * Sets method-level configuration for editTorrentItem.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setEditTorrentItemConfig(config: Partial<SdkConfig>): this {
    this.editTorrentItemConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for magnetToFile.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setMagnetToFileConfig(config: Partial<SdkConfig>): this {
    this.magnetToFileConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for createUsenetDownload.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setCreateUsenetDownloadConfig(config: Partial<SdkConfig>): this {
    this.createUsenetDownloadConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for controlUsenetDownload.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setControlUsenetDownloadConfig(config: Partial<SdkConfig>): this {
    this.controlUsenetDownloadConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for requestDownloadLink1.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setRequestDownloadLink1Config(config: Partial<SdkConfig>): this {
    this.requestDownloadLink1Config = config;
    return this;
  }

  /**
   * Sets method-level configuration for requestDownloadLinksGet1.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setRequestDownloadLinksGet1Config(config: Partial<SdkConfig>): this {
    this.requestDownloadLinksGet1Config = config;
    return this;
  }

  /**
   * Sets method-level configuration for requestDownloadLinksPost1.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setRequestDownloadLinksPost1Config(config: Partial<SdkConfig>): this {
    this.requestDownloadLinksPost1Config = config;
    return this;
  }

  /**
   * Sets method-level configuration for getUsenetList.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetUsenetListConfig(config: Partial<SdkConfig>): this {
    this.getUsenetListConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getUsenetCachedAvailability.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetUsenetCachedAvailabilityConfig(config: Partial<SdkConfig>): this {
    this.getUsenetCachedAvailabilityConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getUsenetCachedAvailabilityBatch.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetUsenetCachedAvailabilityBatchConfig(config: Partial<SdkConfig>): this {
    this.getUsenetCachedAvailabilityBatchConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for editUsenetItem.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setEditUsenetItemConfig(config: Partial<SdkConfig>): this {
    this.editUsenetItemConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getNewsServerConnectionInformation.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetNewsServerConnectionInformationConfig(config: Partial<SdkConfig>): this {
    this.getNewsServerConnectionInformationConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getNewsServerAccount.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetNewsServerAccountConfig(config: Partial<SdkConfig>): this {
    this.getNewsServerAccountConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for resetNewsServerAccountPassword.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setResetNewsServerAccountPasswordConfig(config: Partial<SdkConfig>): this {
    this.resetNewsServerAccountPasswordConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for createWebDownload.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setCreateWebDownloadConfig(config: Partial<SdkConfig>): this {
    this.createWebDownloadConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for controlWebDownload.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setControlWebDownloadConfig(config: Partial<SdkConfig>): this {
    this.controlWebDownloadConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for requestDownloadLink2.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setRequestDownloadLink2Config(config: Partial<SdkConfig>): this {
    this.requestDownloadLink2Config = config;
    return this;
  }

  /**
   * Sets method-level configuration for requestDownloadLinksGet2.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setRequestDownloadLinksGet2Config(config: Partial<SdkConfig>): this {
    this.requestDownloadLinksGet2Config = config;
    return this;
  }

  /**
   * Sets method-level configuration for requestDownloadLinksPost2.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setRequestDownloadLinksPost2Config(config: Partial<SdkConfig>): this {
    this.requestDownloadLinksPost2Config = config;
    return this;
  }

  /**
   * Sets method-level configuration for getWebDownloadList.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetWebDownloadListConfig(config: Partial<SdkConfig>): this {
    this.getWebDownloadListConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getWebDownloadCachedAvailability.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetWebDownloadCachedAvailabilityConfig(config: Partial<SdkConfig>): this {
    this.getWebDownloadCachedAvailabilityConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getWebDownloadCachedAvailabilityBatch.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetWebDownloadCachedAvailabilityBatchConfig(config: Partial<SdkConfig>): this {
    this.getWebDownloadCachedAvailabilityBatchConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getHosterList.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetHosterListConfig(config: Partial<SdkConfig>): this {
    this.getHosterListConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for editWebDownloadItem.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setEditWebDownloadItemConfig(config: Partial<SdkConfig>): this {
    this.editWebDownloadItemConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getUpStatus.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetUpStatusConfig(config: Partial<SdkConfig>): this {
    this.getUpStatusConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getStats.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetStatsConfig(config: Partial<SdkConfig>): this {
    this.getStatsConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getChangelogsRssFeed.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetChangelogsRssFeedConfig(config: Partial<SdkConfig>): this {
    this.getChangelogsRssFeedConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getChangelogsJson.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetChangelogsJsonConfig(config: Partial<SdkConfig>): this {
    this.getChangelogsJsonConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getSpeedtestFiles.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetSpeedtestFilesConfig(config: Partial<SdkConfig>): this {
    this.getSpeedtestFilesConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getRssNotificationFeed.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetRssNotificationFeedConfig(config: Partial<SdkConfig>): this {
    this.getRssNotificationFeedConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getNotificationFeed.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetNotificationFeedConfig(config: Partial<SdkConfig>): this {
    this.getNotificationFeedConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for clearAllNotifications.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setClearAllNotificationsConfig(config: Partial<SdkConfig>): this {
    this.clearAllNotificationsConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for clearSingleNotification.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setClearSingleNotificationConfig(config: Partial<SdkConfig>): this {
    this.clearSingleNotificationConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for sendTestNotification.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setSendTestNotificationConfig(config: Partial<SdkConfig>): this {
    this.sendTestNotificationConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for refreshApiToken.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setRefreshApiTokenConfig(config: Partial<SdkConfig>): this {
    this.refreshApiTokenConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getUserData.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetUserDataConfig(config: Partial<SdkConfig>): this {
    this.getUserDataConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for addReferralToAccount.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setAddReferralToAccountConfig(config: Partial<SdkConfig>): this {
    this.addReferralToAccountConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getConfirmationCode.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetConfirmationCodeConfig(config: Partial<SdkConfig>): this {
    this.getConfirmationCodeConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for startDeviceCodeAuthorizationProcess.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setStartDeviceCodeAuthorizationProcessConfig(config: Partial<SdkConfig>): this {
    this.startDeviceCodeAuthorizationProcessConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getTokenFromDeviceCodeProcess.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetTokenFromDeviceCodeProcessConfig(config: Partial<SdkConfig>): this {
    this.getTokenFromDeviceCodeProcessConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getReferralData.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetReferralDataConfig(config: Partial<SdkConfig>): this {
    this.getReferralDataConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getSubscriptions.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetSubscriptionsConfig(config: Partial<SdkConfig>): this {
    this.getSubscriptionsConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getTransactions.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetTransactionsConfig(config: Partial<SdkConfig>): this {
    this.getTransactionsConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getTransactionPdf.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetTransactionPdfConfig(config: Partial<SdkConfig>): this {
    this.getTransactionPdfConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for editUserSettings.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setEditUserSettingsConfig(config: Partial<SdkConfig>): this {
    this.editUserSettingsConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getUserStats.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetUserStatsConfig(config: Partial<SdkConfig>): this {
    this.getUserStatsConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for addRssFeed.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setAddRssFeedConfig(config: Partial<SdkConfig>): this {
    this.addRssFeedConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for controlRssFeed.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setControlRssFeedConfig(config: Partial<SdkConfig>): this {
    this.controlRssFeedConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for editRssFeed.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setEditRssFeedConfig(config: Partial<SdkConfig>): this {
    this.editRssFeedConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getUserRssFeeds.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetUserRssFeedsConfig(config: Partial<SdkConfig>): this {
    this.getUserRssFeedsConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getRssFeedItems.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetRssFeedItemsConfig(config: Partial<SdkConfig>): this {
    this.getRssFeedItemsConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getAllJobs.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetAllJobsConfig(config: Partial<SdkConfig>): this {
    this.getAllJobsConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getSpecificJob.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetSpecificJobConfig(config: Partial<SdkConfig>): this {
    this.getSpecificJobConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getAllJobsByHash.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetAllJobsByHashConfig(config: Partial<SdkConfig>): this {
    this.getAllJobsByHashConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for cancelSpecificJob.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setCancelSpecificJobConfig(config: Partial<SdkConfig>): this {
    this.cancelSpecificJobConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getQueuedDownloads.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetQueuedDownloadsConfig(config: Partial<SdkConfig>): this {
    this.getQueuedDownloadsConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for controlQueuedDownloads.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setControlQueuedDownloadsConfig(config: Partial<SdkConfig>): this {
    this.controlQueuedDownloadsConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for createStream.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setCreateStreamConfig(config: Partial<SdkConfig>): this {
    this.createStreamConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getStreamData.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetStreamDataConfig(config: Partial<SdkConfig>): this {
    this.getStreamDataConfig = config;
    return this;
  }

  /**
 * ### Overview
Creates a torrent under your account. Simply send **either** a magnet link, or a torrent file. Once they have been checked, they will begin downloading assuming your account has available active download slots, and they aren't too large.

### Rate Limits

This endpoint has two limits that apply at the same time:

- **300 requests per minute:** a shared ceiling that _every_ request counts against, whether the torrent is cached or uncached.
    
- **60 uncached torrents per hour:** an additional, stricter limit that only uncached torrents count against.
    

The important thing is that cached and uncached requests both draw from the same 300/min pool, but uncached requests _also_ draw from their own separate 60/hour pool. An uncached request therefore counts twice: once against the per-minute limit, and once against the per-hour uncached limit.

**Example:** In a single minute you add 250 cached + 50 uncached torrents. That's 300 total, so you've hit the per-minute limit for that minute. But those 50 uncached torrents also came out of your 60/hour uncached budget, leaving only **10 uncached torrents** for the remaining 59 minutes of that hour. (You could still add plenty more _cached_ torrents during that hour, since cached requests aren't capped hourly: only by the 300/min ceiling.)

### Authorization

Requires an API key using the Authorization Bearer Header.
 * @param {string} apiVersion - 
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<any>>} - OK
 */
  async createTorrent(
    apiVersion: string,
    body: CreateTorrentRequest,
    filename?: string,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.createTorrentConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/{api_version}/api/torrents/createtorrent')
      .setRequestSchema(createTorrentRequestRequest)
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.MultipartFormData)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addPathParam({
        key: 'api_version',
        value: apiVersion,
      })
      .setFilename(filename)
      .addBody(body)
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
 * ### Overview
Creates a torrent asynchrously under your account. Simply send **either** a magnet link, or a torrent file. Once they have been checked, they will begin downloading assuming your account has available active download slots, and they aren't too large.

The request will return instantly, not returning any data other than a success message. This is the same for failures, as they will return the error in the background, rather than immediately.

### Authorization

Requires an API key using the Authorization Bearer Header.
 * @param {string} apiVersion - 
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<any>>} - OK
 */
  async asyncCreateTorrent(
    apiVersion: string,
    body: AsyncCreateTorrentRequest,
    filename?: string,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.asyncCreateTorrentConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/{api_version}/api/torrents/asynccreatetorrent')
      .setRequestSchema(asyncCreateTorrentRequestRequest)
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.MultipartFormData)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addPathParam({
        key: 'api_version',
        value: apiVersion,
      })
      .setFilename(filename)
      .addBody(body)
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
 * ### Overview
Controls a torrent. By sending the torrent's ID and the type of operation you want to perform, it will send that request to the torrent client.

Operations are either:

- **Reannounce** `reannounces the torrent to get new peers`
    
- **Delete** `deletes the torrent from the client and your account permanently`
    
- **Resume** `resumes a paused torrent`
    

### Authorization

Requires an API key using the Authorization Bearer Header.
 * @param {string} apiVersion - 
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<any>>} - OK
 */
  async controlTorrent(
    apiVersion: string,
    body: any,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.controlTorrentConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/{api_version}/api/torrents/controltorrent')
      .setRequestSchema(z.any())
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addPathParam({
        key: 'api_version',
        value: apiVersion,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
 * ### Overview
Requests the download link from the server. Because downloads are metered, TorBox cannot afford to allow free access to the links directly. This endpoint opens the link for 3 hours for downloads. Once a download is started, the user has nearly unlilimited time to download the file. The 1 hour time limit is simply for starting downloads. This prevents long term link sharing.

### Permalinks

Instead of generating many CDN urls by requesting this endpoint, you can instead create a permalink such as: `https://api.torbox.app/v1/api/torrents/requestdl?token=APIKEY&torrent_id=NUMBER&file_id=NUMBER&redirect=true` and when a user clicks on it, it will automatically redirect them to the CDN link. This saves requests and doesn't abuse the API. Use this method rather than saving CDN links as they are not permanent. To invalidate these permalinks, simply reset your API token or delete the item from your dashboard.

### Authorization

Requires an API key as a parameter for the `token` parameter.
 * @param {string} apiVersion - 
 * @param {string} [params.token] - Your API Key
 * @param {string} [params.torrentId] - The torrent's ID that you want to download
 * @param {string} [params.fileId] - The files's ID that you want to download
 * @param {string} [params.zipLink] - If you want a zip link. Required if no file_id. Takes precedence over file_id if both are given.
 * @param {string} [params.userIp] - The user's IP to determine the closest CDN. Optional.
 * @param {string} [params.redirect] - If you want to redirect the user to the CDN link. This is useful for creating permalinks so that you can just make this request URL the link.
 * @param {string} [params.appendName] - If you want to add the "filename" parameter to the returned CDN link. Optional. Default false.
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<any>>} - OK
 */
  async requestDownloadLink(
    apiVersion: string,
    params?: RequestDownloadLinkParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.requestDownloadLinkConfig, requestConfig);
    z.object({
      token: z.string().optional().nullable(),
      torrentId: z.string().optional().nullable(),
      fileId: z.string().optional().nullable(),
      zipLink: z.string().optional().nullable(),
      userIp: z.string().optional().nullable(),
      redirect: z.string().optional().nullable(),
      appendName: z.string().optional().nullable(),
    }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/{api_version}/api/torrents/requestdl')
      .setRequestSchema(z.any())
      .addAccessTokenAuth(resolvedConfig?.token)
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addPathParam({
        key: 'api_version',
        value: apiVersion,
      })
      .addQueryParam({
        key: 'token',
        value: params?.token,
      })
      .addQueryParam({
        key: 'torrent_id',
        value: params?.torrentId,
      })
      .addQueryParam({
        key: 'file_id',
        value: params?.fileId,
      })
      .addQueryParam({
        key: 'zip_link',
        value: params?.zipLink,
      })
      .addQueryParam({
        key: 'user_ip',
        value: params?.userIp,
      })
      .addQueryParam({
        key: 'redirect',
        value: params?.redirect,
      })
      .addQueryParam({
        key: 'append_name',
        value: params?.appendName,
      })
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
 * ### Overview
Requests multiple download links from the server. Because downloads are metered, TorBox cannot afford to allow free access to the links directly. This endpoint opens the link for 3 hours for downloads. Once a download is started, the user has nearly unlilimited time to download the file. The 1 hour time limit is simply for starting downloads. This prevents long term link sharing.

### Authorization

Requires an API key as a parameter for the `token` parameter.
 * @param {string} apiVersion - 
 * @param {string} [params.token] - Your API Key
 * @param {string} [params.torrentId] - The torrent's ID that you want to download
 * @param {string} [params.fileIds] - The files's ID that you want to download
 * @param {string} [params.userIp] - The user's IP to determine the closest CDN. Optional.
 * @param {string} [params.appendName] - If you want to add the "filename" parameter to the returned CDN link. Optional. Default false.
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<any>>} - OK
 */
  async requestDownloadLinksGet(
    apiVersion: string,
    params?: RequestDownloadLinksGetParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(
      this.requestDownloadLinksGetConfig,
      requestConfig,
    );
    z.object({
      token: z.string().optional().nullable(),
      torrentId: z.string().optional().nullable(),
      fileIds: z.string().optional().nullable(),
      userIp: z.string().optional().nullable(),
      appendName: z.string().optional().nullable(),
    }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/{api_version}/api/torrents/requestdl/batch')
      .setRequestSchema(z.any())
      .addAccessTokenAuth(resolvedConfig?.token)
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addPathParam({
        key: 'api_version',
        value: apiVersion,
      })
      .addQueryParam({
        key: 'token',
        value: params?.token,
      })
      .addQueryParam({
        key: 'torrent_id',
        value: params?.torrentId,
      })
      .addQueryParam({
        key: 'file_ids',
        value: params?.fileIds,
      })
      .addQueryParam({
        key: 'user_ip',
        value: params?.userIp,
      })
      .addQueryParam({
        key: 'append_name',
        value: params?.appendName,
      })
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
 * ### Overview
Requests multiple download links from the server. Because downloads are metered, TorBox cannot afford to allow free access to the links directly. This endpoint opens the link for 3 hours for downloads. Once a download is started, the user has nearly unlilimited time to download the file. The 1 hour time limit is simply for starting downloads. This prevents long term link sharing.

### Authorization

Requires an API key as a parameter for the `token` parameter.
 * @param {string} apiVersion - 
 * @param {string} [params.token] - Your API Key
 * @param {string} [params.torrentId] - The torrent's ID that you want to download
 * @param {string} [params.userIp] - The user's IP to determine the closest CDN. Optional.
 * @param {string} [params.appendName] - If you want to add the "filename" parameter to the returned CDN link. Optional. Default false.
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<any>>} - OK
 */
  async requestDownloadLinksPost(
    apiVersion: string,
    body: MainApiSdkRequestDownloadLinksPostRequest1,
    params?: RequestDownloadLinksPostParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(
      this.requestDownloadLinksPostConfig,
      requestConfig,
    );
    z.object({
      token: z.string().optional().nullable(),
      torrentId: z.string().optional().nullable(),
      userIp: z.string().optional().nullable(),
      appendName: z.string().optional().nullable(),
    }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/{api_version}/api/torrents/requestdl/batch')
      .setRequestSchema(mainApiSdkRequestDownloadLinksPostRequest1Request)
      .addAccessTokenAuth(resolvedConfig?.token)
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addPathParam({
        key: 'api_version',
        value: apiVersion,
      })
      .addQueryParam({
        key: 'token',
        value: params?.token,
      })
      .addQueryParam({
        key: 'torrent_id',
        value: params?.torrentId,
      })
      .addQueryParam({
        key: 'user_ip',
        value: params?.userIp,
      })
      .addQueryParam({
        key: 'append_name',
        value: params?.appendName,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
 * ### Overview
Gets the user's torrent list. This gives you the needed information to perform other torrent actions. This information only gets updated every 600 seconds, or when the _Request Update On Torrent_ request is sent to the _relay API_.

#### Download States:

- "downloading" -> The torrent is currently downloading.
    
- "uploading" -> The torrent is currently seeding.
    
- "stalled (no seeds)" -> The torrent is trying to download, but there are no seeds connected to download from.
    
- "paused" -> The torrent is paused.
    
- "completed" -> The torrent is completely downloaded. Do not use this for download completion status.
    
- "cached" -> The torrent is cached from the server.
    
- "metaDL" -> The torrent is downloading metadata from the hoard.
    
- "checkingResumeData" -> The torrent is checking resumable data.
    

All other statuses are basic qBittorrent states. [Check out here for the full list](https://github.com/qbittorrent/qBittorrent/wiki/WebUI-API-(qBittorrent-4.1)#torrent-management).

### Authorization

Requires an API key using the Authorization Bearer Header.
 * @param {string} apiVersion - 
 * @param {string} [params.bypassCache] - Allows you to bypass the cached data, and always get fresh information. Useful if constantly querying for fresh download stats. Otherwise, we request that you save our database a few calls.
 * @param {string} [params.id] - Determines the torrent requested, will return an object rather than list. Optional.
 * @param {string} [params.offset] - Determines the offset of items to get from the database. Default is 0. Optional.
 * @param {string} [params.limit] - Determines the number of items to recieve per request. Default is 1000. Optional.
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<any>>} - OK
 */
  async getTorrentList(
    apiVersion: string,
    params?: GetTorrentListParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.getTorrentListConfig, requestConfig);
    z.object({
      bypassCache: z.string().optional().nullable(),
      id: z.string().optional().nullable(),
      offset: z.string().optional().nullable(),
      limit: z.string().optional().nullable(),
    }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/{api_version}/api/torrents/mylist')
      .setRequestSchema(z.any())
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addPathParam({
        key: 'api_version',
        value: apiVersion,
      })
      .addQueryParam({
        key: 'bypass_cache',
        value: params?.bypassCache,
      })
      .addQueryParam({
        key: 'id',
        value: params?.id,
      })
      .addQueryParam({
        key: 'offset',
        value: params?.offset,
      })
      .addQueryParam({
        key: 'limit',
        value: params?.limit,
      })
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
 * ### Overview
Takes in a list of comma separated torrent hashes and checks if the torrent is cached. This endpoint only gets a max of around 100 at a time, due to http limits in queries. If you want to do more, you can simply do more hash queries. Such as:  
`?hash=XXXX&hash=XXXX&hash=XXXX`

or `?hash=XXXX,XXXX&hash=XXXX&hash=XXXX,XXXX`  
and this will work too. Performance is very fast. Less than 1 second per 100. Time is approximately O(log n) time for those interested in taking it to its max. That is without caching as well. This endpoint stores a cache for an hour.

You may also pass a `format` parameter with the format you want the data in. Options are either `object` or `list`. You can view examples of both below.

### Authorization

Requires an API key using the Authorization Bearer Header.
 * @param {string} apiVersion - 
 * @param {string} [params.hash] - The list of torrent hashes you want to check. Comma seperated.
 * @param {string} [params.format] - Format you want the data in. Acceptable is either "object" or "list". List is the most performant option as it doesn't require modification of the list.
 * @param {string} [params.listFiles] - Allows you to list the files found inside the cached data.
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<any>>} - OK
 */
  async getTorrentCachedAvailability(
    apiVersion: string,
    params?: GetTorrentCachedAvailabilityParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(
      this.getTorrentCachedAvailabilityConfig,
      requestConfig,
    );
    z.object({
      hash: z.string().optional().nullable(),
      format: z.string().optional().nullable(),
      listFiles: z.string().optional().nullable(),
    }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/{api_version}/api/torrents/checkcached')
      .setRequestSchema(z.any())
      .addAccessTokenAuth(resolvedConfig?.token)
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addPathParam({
        key: 'api_version',
        value: apiVersion,
      })
      .addQueryParam({
        key: 'hash',
        value: params?.hash,
      })
      .addQueryParam({
        key: 'format',
        value: params?.format,
      })
      .addQueryParam({
        key: 'list_files',
        value: params?.listFiles,
      })
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
 * ### Overview
Takes in a list of comma separated torrent hashes and checks if the torrent is cached. With the POST endpoint you can submit a nearly unlimited hashes compared to the GET endpoint which is limited by url parameters.

  
Performance is very fast. Less than 1 second per 100. Time is approximately O(log n) time for those interested in taking it to its max. That is without caching as well. This endpoint stores a cache for an hour.

You may also pass a `format` parameter with the format you want the data in. Options are either `object` or `list`. You can view examples of both below.

### Authorization

Requires an API key using the Authorization Bearer Header.
 * @param {string} apiVersion - 
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<any>>} - OK
 */
  async getTorrentCachedAvailabilityBatch(
    apiVersion: string,
    body: GetTorrentCachedAvailabilityBatchRequest,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(
      this.getTorrentCachedAvailabilityBatchConfig,
      requestConfig,
    );
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/{api_version}/api/torrents/checkcached')
      .setRequestSchema(getTorrentCachedAvailabilityBatchRequestRequest)
      .addAccessTokenAuth(resolvedConfig?.token)
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addPathParam({
        key: 'api_version',
        value: apiVersion,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
 * ### Overview
Exports the magnet or torrent file. Requires a type to be passed. If type is **magnet**, it will return a JSON response with the magnet as a string in the _data_ key. If type is **file**, it will return a bittorrent file as a download. Not compatible with cached downloads.

### Authorization

Requires an API key using the Authorization Bearer Header.
 * @param {string} apiVersion - 
 * @param {string} [params.torrentId] - The torrent's ID.
 * @param {string} [params.type] - Either "magnet" or "file". Tells how the API what to get, and what to respond as. If magnet, it returns a JSON response with the magnet as a string in the data key. If file, it responds with a torrent file download.
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<any>>} - OK
 */
  async exportTorrentData(
    apiVersion: string,
    params?: ExportTorrentDataParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.exportTorrentDataConfig, requestConfig);
    z.object({
      torrentId: z.string().optional().nullable(),
      type: z.string().optional().nullable(),
    }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/{api_version}/api/torrents/exportdata')
      .setRequestSchema(z.any())
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addPathParam({
        key: 'api_version',
        value: apiVersion,
      })
      .addQueryParam({
        key: 'torrent_id',
        value: params?.torrentId,
      })
      .addQueryParam({
        key: 'type',
        value: params?.type,
      })
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
 * ### Overview
A general route that allows you to give a hash, and TorBox will return data about the torrent. This data is retrieved from the Bittorrent network, so expect it to take some time. If the request goes longer than 10 seconds, TorBox will cancel it. You can adjust this if you like, but the default is 10 seconds. This route is cached as well, so subsequent requests will be instant.

**It is not recommended to use this for checking TorBox's cache. Please use the GET /checkcache endpoint instead.**

### Authorization

None required.
 * @param {string} apiVersion - 
 * @param {string} [params.hash] - Hash of the torrent you want to get info for. This is required.
 * @param {string} [params.timeout] - The amount of time you want TorBox to search for the torrent on the Bittorrent network. If the number of seeders is low or even zero, this value may be helpful to move up. Default is 10. Optional.
 * @param {string} [params.useCacheLookup] - If you want to use a pre-cached request if sent before. This can save a lot of time. Default false.
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<any>>} - OK
 */
  async getTorrentInfo(
    apiVersion: string,
    params?: GetTorrentInfoParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.getTorrentInfoConfig, requestConfig);
    z.object({
      hash: z.string().optional().nullable(),
      timeout: z.string().optional().nullable(),
      useCacheLookup: z.string().optional().nullable(),
    }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/{api_version}/api/torrents/torrentinfo')
      .setRequestSchema(z.any())
      .addAccessTokenAuth(resolvedConfig?.token)
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addPathParam({
        key: 'api_version',
        value: apiVersion,
      })
      .addQueryParam({
        key: 'hash',
        value: params?.hash,
      })
      .addQueryParam({
        key: 'timeout',
        value: params?.timeout,
      })
      .addQueryParam({
        key: 'use_cache_lookup',
        value: params?.useCacheLookup,
      })
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
 * ### Overview
Same as the GET route, but allows posting data such as magnet, and torrent files.

Hashes will have precedence over magnets, and magnets will have precedence over torrent files.

Only proper torrent files are accepted.

At least one of hash, magnet, or torrent file is required.

A general route that allows you to give a hash, and TorBox will return data about the torrent. This data is retrieved from the Bittorrent network, so expect it to take some time. If the request goes longer than 10 seconds, TorBox will cancel it. You can adjust this if you like, but the default is 10 seconds. This route is cached as well, so subsequent requests will be instant.

**It is not recommended to use this for checking TorBox's cache. Please use the GET /checkcache endpoint instead.**

### Authorization

None required.
 * @param {string} apiVersion - 
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<any>>} - OK
 */
  async getTorrentInfo1(
    apiVersion: string,
    body: GetTorrentInfoRequest,
    filename?: string,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.getTorrentInfo1Config, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/{api_version}/api/torrents/torrentinfo')
      .setRequestSchema(getTorrentInfoRequestRequest)
      .addAccessTokenAuth(resolvedConfig?.token)
      .setRequestContentType(ContentType.MultipartFormData)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addPathParam({
        key: 'api_version',
        value: apiVersion,
      })
      .setFilename(filename)
      .addBody(body)
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
 * ### Overview
Updates a download item based on the item's ID.  
Sending a PUT request with valid items overwrites the previous items entirely, so use this endpoint with caution. Please make sure to read the restrictions below as they are important.

### Restrictions

- Does not affect the cached database (or any other user's item).
    
- Name must pass validation:
    
    - Above 1 character long.
        
    - Below 200 characters long.
        
    - Cannot contain any non-url or non filesystem safe characters. (This is removed automatically).
        
    - Cannot contain any leading or trailing whitespace. You can have spaces in the middle. (This is removed automatically).
        
- Tags follow the same rules as the name.
    
- Alternative hashes must be of MD5, SHA1, or SHA256.
    

### Authorization

Requires an API key using the Authorization Bearer Header.
 * @param {string} apiVersion - 
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<any>>} - OK
 */
  async editTorrentItem(
    apiVersion: string,
    body: EditTorrentItemRequest,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.editTorrentItemConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('PUT')
      .setPath('/{api_version}/api/torrents/edittorrent')
      .setRequestSchema(editTorrentItemRequestRequest)
      .addAccessTokenAuth(resolvedConfig?.token)
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addPathParam({
        key: 'api_version',
        value: apiVersion,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
 * ### Overview
Converts any magnet to a torrent file. Does not require the magnet to be on your TorBox account or in the TorBox cache. Free endpoint for public use.

### Authorization

None required.
 * @param {string} apiVersion - 
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<any>>} - OK
 */
  async magnetToFile(
    apiVersion: string,
    body: MagnetToFileRequest,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.magnetToFileConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/{api_version}/api/torrents/magnettofile')
      .setRequestSchema(magnetToFileRequestRequest)
      .addAccessTokenAuth(resolvedConfig?.token)
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addPathParam({
        key: 'api_version',
        value: apiVersion,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
 * ### Overview
Creates a usenet download under your account. Simply send **either** a link, or an nzb file. Once they have been checked, they will begin downloading assuming your account has available active download slots, and they aren't too large.

#### Post Processing Options:

All post processing options that the Usenet client will perform before TorBox's own processing to make the files available. It is recommended you either don't send this parameter, or keep it at `-1` for default, which will give only the wanted files.

- `-1`, Default. This runs repairs, and extractions as well as deletes the source files leaving only the wanted downloaded files.
    
- `0`, None. No post-processing at all. Just download all the files (including all PAR2). TorBox will still do its normal processing to make the download available, but no repairs, or extraction will take place.
    
- `1`, Repair. Download files and do a PAR2 verification. If the verification fails, download more PAR2 files and attempt to repair the files.
    
- `2`, Repair and Unpack. Download all files, do a PAR2 verification and unpack the files. The final folder will also include the RAR and ZIP files.
    
- `3`, Repair, Unpack and Delete. Download all files, do a PAR2 verification, unpack the files to the final folder and delete the source files.
    

### Authorization

Requires an API key using the Authorization Bearer Header.
 * @param {string} apiVersion - 
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<any>>} - OK
 */
  async createUsenetDownload(
    apiVersion: string,
    body: CreateUsenetDownloadRequest,
    filename?: string,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.createUsenetDownloadConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/{api_version}/api/usenet/createusenetdownload')
      .setRequestSchema(createUsenetDownloadRequestRequest)
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.MultipartFormData)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addPathParam({
        key: 'api_version',
        value: apiVersion,
      })
      .setFilename(filename)
      .addBody(body)
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
 * ### Overview
Controls a usenet download. By sending the usenet download's ID and the type of operation you want to perform, it will send that request to the usenet client.

Operations are either:

- **Delete** `deletes the nzb from the client and your account permanently`
    

### Authorization

Requires an API key using the Authorization Bearer Header.
 * @param {string} apiVersion - 
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<any>>} - OK
 */
  async controlUsenetDownload(
    apiVersion: string,
    body: any,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.controlUsenetDownloadConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/{api_version}/api/usenet/controlusenetdownload')
      .setRequestSchema(z.any())
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addPathParam({
        key: 'api_version',
        value: apiVersion,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
 * ### Overview
Requests the download link from the server. Because downloads are metered, TorBox cannot afford to allow free access to the links directly. This endpoint opens the link for 3 hours for downloads. Once a download is started, the user has nearly unlilimited time to download the file. The 1 hour time limit is simply for starting downloads. This prevents long term link sharing.

### Permalinks

Instead of generating many CDN urls by requesting this endpoint, you can instead create a permalink such as: `https://api.torbox.app/v1/api/torrents/requestdl?token=APIKEY&torrent_id=NUMBER&file_id=NUMBER&redirect=true` and when a user clicks on it, it will automatically redirect them to the CDN link. This saves requests and doesn't abuse the API. Use this method rather than saving CDN links as they are not permanent. To invalidate these permalinks, simply reset your API token or delete the item from your dashboard.

### Authorization

Requires an API key as a parameter for the `token` parameter.
 * @param {string} apiVersion - 
 * @param {string} [params.token] - Your API Key
 * @param {string} [params.usenetId] - The usenet download's ID that you want to download
 * @param {string} [params.fileId] - The files's ID that you want to download. Optional if using "zip_link".
 * @param {string} [params.zipLink] - If you want a zip link. Required if no file_id. Takes precedence over file_id if both are given.
 * @param {string} [params.userIp] - The user's IPv4 to determine the closest CDN. Optional.
 * @param {string} [params.redirect] - If you want to redirect the user to the CDN link. This is useful for creating permalinks so that you can just make this request URL the link.
 * @param {string} [params.appendName] - If you want to add the "filename" parameter to the returned CDN link. Optional. Default false.
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<any>>} - OK
 */
  async requestDownloadLink1(
    apiVersion: string,
    params?: RequestDownloadLinkParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.requestDownloadLink1Config, requestConfig);
    z.object({
      token: z.string().optional().nullable(),
      usenetId: z.string().optional().nullable(),
      fileId: z.string().optional().nullable(),
      zipLink: z.string().optional().nullable(),
      userIp: z.string().optional().nullable(),
      redirect: z.string().optional().nullable(),
      appendName: z.string().optional().nullable(),
    }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/{api_version}/api/usenet/requestdl')
      .setRequestSchema(z.any())
      .addAccessTokenAuth(resolvedConfig?.token)
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addPathParam({
        key: 'api_version',
        value: apiVersion,
      })
      .addQueryParam({
        key: 'token',
        value: params?.token,
      })
      .addQueryParam({
        key: 'usenet_id',
        value: params?.usenetId,
      })
      .addQueryParam({
        key: 'file_id',
        value: params?.fileId,
      })
      .addQueryParam({
        key: 'zip_link',
        value: params?.zipLink,
      })
      .addQueryParam({
        key: 'user_ip',
        value: params?.userIp,
      })
      .addQueryParam({
        key: 'redirect',
        value: params?.redirect,
      })
      .addQueryParam({
        key: 'append_name',
        value: params?.appendName,
      })
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
 * ### Overview
Requests multiple download links from the server. Because downloads are metered, TorBox cannot afford to allow free access to the links directly. This endpoint opens the link for 3 hours for downloads. Once a download is started, the user has nearly unlilimited time to download the file. The 1 hour time limit is simply for starting downloads. This prevents long term link sharing.

### Authorization

Requires an API key as a parameter for the `token` parameter.
 * @param {string} apiVersion - 
 * @param {string} [params.token] - Your API Key
 * @param {string} [params.usenetId] - The usenet download's ID that you want to download
 * @param {string} [params.fileIds] - The files's ID that you want to download
 * @param {string} [params.userIp] - The user's IP to determine the closest CDN. Optional.
 * @param {string} [params.appendName] - If you want to add the "filename" parameter to the returned CDN link. Optional. Default false.
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<any>>} - OK
 */
  async requestDownloadLinksGet1(
    apiVersion: string,
    params?: RequestDownloadLinksGetParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(
      this.requestDownloadLinksGet1Config,
      requestConfig,
    );
    z.object({
      token: z.string().optional().nullable(),
      usenetId: z.string().optional().nullable(),
      fileIds: z.string().optional().nullable(),
      userIp: z.string().optional().nullable(),
      appendName: z.string().optional().nullable(),
    }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/{api_version}/api/usenet/requestdl/batch')
      .setRequestSchema(z.any())
      .addAccessTokenAuth(resolvedConfig?.token)
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addPathParam({
        key: 'api_version',
        value: apiVersion,
      })
      .addQueryParam({
        key: 'token',
        value: params?.token,
      })
      .addQueryParam({
        key: 'usenet_id',
        value: params?.usenetId,
      })
      .addQueryParam({
        key: 'file_ids',
        value: params?.fileIds,
      })
      .addQueryParam({
        key: 'user_ip',
        value: params?.userIp,
      })
      .addQueryParam({
        key: 'append_name',
        value: params?.appendName,
      })
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
 * ### Overview
Requests multiple download links from the server. Because downloads are metered, TorBox cannot afford to allow free access to the links directly. This endpoint opens the link for 3 hours for downloads. Once a download is started, the user has nearly unlilimited time to download the file. The 1 hour time limit is simply for starting downloads. This prevents long term link sharing.

### Authorization

Requires an API key as a parameter for the `token` parameter.
 * @param {string} apiVersion - 
 * @param {string} [params.token] - Your API Key
 * @param {string} [params.usenetId] - The usenet downloads' ID that you want to download
 * @param {string} [params.userIp] - The user's IP to determine the closest CDN. Optional.
 * @param {string} [params.appendName] - If you want to add the "filename" parameter to the returned CDN link. Optional. Default false.
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<any>>} - OK
 */
  async requestDownloadLinksPost1(
    apiVersion: string,
    body: MainApiSdkRequestDownloadLinksPostRequest2,
    params?: RequestDownloadLinksPostParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(
      this.requestDownloadLinksPost1Config,
      requestConfig,
    );
    z.object({
      token: z.string().optional().nullable(),
      usenetId: z.string().optional().nullable(),
      userIp: z.string().optional().nullable(),
      appendName: z.string().optional().nullable(),
    }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/{api_version}/api/usenet/requestdl/batch')
      .setRequestSchema(mainApiSdkRequestDownloadLinksPostRequest2Request)
      .addAccessTokenAuth(resolvedConfig?.token)
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addPathParam({
        key: 'api_version',
        value: apiVersion,
      })
      .addQueryParam({
        key: 'token',
        value: params?.token,
      })
      .addQueryParam({
        key: 'usenet_id',
        value: params?.usenetId,
      })
      .addQueryParam({
        key: 'user_ip',
        value: params?.userIp,
      })
      .addQueryParam({
        key: 'append_name',
        value: params?.appendName,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
 * ### Overview
Gets the user's usenet download list. This gives you the needed information to perform other usenet actions. Unlike Torrents, this information is updated on its own every 5 seconds for live usenet downloads.

### Authorization

Requires an API key using the Authorization Bearer Header.
 * @param {string} apiVersion - 
 * @param {string} [params.bypassCache] - Allows you to bypass the cached data, and always get fresh information. Useful if constantly querying for fresh download stats. Otherwise, we request that you save our database a few calls.
 * @param {string} [params.id] - Determines the usenet download requested, will return an object rather than list. Optional.
 * @param {string} [params.offset] - Determines the offset of items to get from the database. Default is 0. Optional.
 * @param {string} [params.limit] - Determines the number of items to recieve per request. Default is 1000. Optional.
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<any>>} - OK
 */
  async getUsenetList(
    apiVersion: string,
    params?: GetUsenetListParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.getUsenetListConfig, requestConfig);
    z.object({
      bypassCache: z.string().optional().nullable(),
      id: z.string().optional().nullable(),
      offset: z.string().optional().nullable(),
      limit: z.string().optional().nullable(),
    }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/{api_version}/api/usenet/mylist')
      .setRequestSchema(z.any())
      .addAccessTokenAuth(resolvedConfig?.token)
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addPathParam({
        key: 'api_version',
        value: apiVersion,
      })
      .addQueryParam({
        key: 'bypass_cache',
        value: params?.bypassCache,
      })
      .addQueryParam({
        key: 'id',
        value: params?.id,
      })
      .addQueryParam({
        key: 'offset',
        value: params?.offset,
      })
      .addQueryParam({
        key: 'limit',
        value: params?.limit,
      })
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
 * ### Overview
Takes in a list of comma separated usenet hashes and checks if the usenet download is cached. This endpoint only gets a max of around 100 at a time, due to http limits in queries. If you want to do more, you can simply do more hash queries. Such as:  
`?hash=XXXX&hash=XXXX&hash=XXXX`

or `?hash=XXXX,XXXX&hash=XXXX&hash=XXXX,XXXX`  
and this will work too. Performance is very fast. Less than 1 second per 100. Time is approximately O(log n) time for those interested in taking it to its max. That is without caching as well. This endpoint stores a cache for an hour.

You may also pass a `format` parameter with the format you want the data in. Options are either `object` or `list`. You can view examples of both below.

To get the hash of a usenet download, you can read [this document](https://support.torbox.app/en/articles/13681109-technical-getting-hashes-for-searches) for all of the strategies.

### Authorization

Requires an API key using the Authorization Bearer Header.
 * @param {string} apiVersion - 
 * @param {string} [params.hash] - The list of usenet hashes you want to check. Comma seperated. To find the hash, md5 the link of the usenet link or file.
 * @param {string} [params.format] - Format you want the data in. Acceptable is either "object" or "list". List is the most performant option as it doesn't require modification of the list.
 * @param {string} [params.listFiles] - Allows you to list the files found inside the cached data. Optional.
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<any>>} - OK
 */
  async getUsenetCachedAvailability(
    apiVersion: string,
    params?: GetUsenetCachedAvailabilityParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(
      this.getUsenetCachedAvailabilityConfig,
      requestConfig,
    );
    z.object({
      hash: z.string().optional().nullable(),
      format: z.string().optional().nullable(),
      listFiles: z.string().optional().nullable(),
    }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/{api_version}/api/usenet/checkcached')
      .setRequestSchema(z.any())
      .addAccessTokenAuth(resolvedConfig?.token)
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addPathParam({
        key: 'api_version',
        value: apiVersion,
      })
      .addQueryParam({
        key: 'hash',
        value: params?.hash,
      })
      .addQueryParam({
        key: 'format',
        value: params?.format,
      })
      .addQueryParam({
        key: 'list_files',
        value: params?.listFiles,
      })
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
 * ### Overview
Takes in a list of comma separated hashes and checks if the torrent is cached. With the POST endpoint you can submit a nearly unlimited hashes compared to the GET endpoint which is limited by url parameters.

Performance is very fast. Less than 1 second per 100. Time is approximately O(log n) time for those interested in taking it to its max. That is without caching as well. This endpoint stores a cache for an hour.

You may also pass a `format` parameter with the format you want the data in. Options are either `object` or `list`. You can view examples of both below.

### Authorization

Requires an API key using the Authorization Bearer Header.
 * @param {string} apiVersion - 
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<any>>} - OK
 */
  async getUsenetCachedAvailabilityBatch(
    apiVersion: string,
    body: GetUsenetCachedAvailabilityBatchRequest,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(
      this.getUsenetCachedAvailabilityBatchConfig,
      requestConfig,
    );
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/{api_version}/api/usenet/checkcached')
      .setRequestSchema(getUsenetCachedAvailabilityBatchRequestRequest)
      .addAccessTokenAuth(resolvedConfig?.token)
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addPathParam({
        key: 'api_version',
        value: apiVersion,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
 * ### Overview
Updates a download item based on the item's ID.  
Sending a PUT request with valid items overwrites the previous items entirely, so use this endpoint with caution. Please make sure to read the restrictions below as they are important.

### Restrictions

- Does not affect the cached database (or any other user's item).
    
- Name must pass validation:
    
    - Above 1 character long.
        
    - Below 200 characters long.
        
    - Cannot contain any non-url or non filesystem safe characters. (This is removed automatically).
        
    - Cannot contain any leading or trailing whitespace. You can have spaces in the middle. (This is removed automatically).
        
- Tags follow the same rules as the name.
    
- Alternative hashes must be of MD5, SHA1, or SHA256.
    

### Authorization

Requires an API key using the Authorization Bearer Header.
 * @param {string} apiVersion - 
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<any>>} - OK
 */
  async editUsenetItem(
    apiVersion: string,
    body: EditUsenetItemRequest,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.editUsenetItemConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('PUT')
      .setPath('/{api_version}/api/usenet/editusenetdownload')
      .setRequestSchema(editUsenetItemRequestRequest)
      .addAccessTokenAuth(resolvedConfig?.token)
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addPathParam({
        key: 'api_version',
        value: apiVersion,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
 * ### Overview
Gets the TorBox News Server Connection information. This is a static path, and is not dynamic.

### Authorization

No authentication required.
 * @param {string} apiVersion - 
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<any>>} - OK
 */
  async getNewsServerConnectionInformation(
    apiVersion: string,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(
      this.getNewsServerConnectionInformationConfig,
      requestConfig,
    );
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/{api_version}/api/usenet/provider/connection')
      .setRequestSchema(z.any())
      .addAccessTokenAuth(resolvedConfig?.token)
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addPathParam({
        key: 'api_version',
        value: apiVersion,
      })
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
 * ### Overview
Gets the user's TorBox News Server Account with authentication details. Does not show password if not creating the account. Account creation happens on the first request. If you need to get the password, or reset the password, use the `/usenet/provider/account/resetpw` `POST` endpoint.

### Authorization

Requires an API key using the Authorization Bearer Header.
 * @param {string} apiVersion - 
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<any>>} - OK
 */
  async getNewsServerAccount(apiVersion: string, requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.getNewsServerAccountConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/{api_version}/api/usenet/provider/account')
      .setRequestSchema(z.any())
      .addAccessTokenAuth(resolvedConfig?.token)
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addPathParam({
        key: 'api_version',
        value: apiVersion,
      })
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
 * ### Overview
Resets the user's TorBox News Server account password. This password is automatically generated, and is not saved, it is only shown once.

### Authorization

Requires an API key using the Authorization Bearer Header.
 * @param {string} apiVersion - 
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<any>>} - OK
 */
  async resetNewsServerAccountPassword(
    apiVersion: string,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(
      this.resetNewsServerAccountPasswordConfig,
      requestConfig,
    );
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/{api_version}/api/usenet/provider/account/resetpw')
      .setRequestSchema(z.any())
      .addAccessTokenAuth(resolvedConfig?.token)
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addPathParam({
        key: 'api_version',
        value: apiVersion,
      })
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
 * ### Overview
Creates a web download under your account. Simply send a link to any file on the internet. Once it has been checked, it will begin downloading assuming your account has available active download slots, and they aren't too large.

### Authorization

Requires an API key using the Authorization Bearer Header.
 * @param {string} apiVersion - 
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<any>>} - OK
 */
  async createWebDownload(
    apiVersion: string,
    body: CreateWebDownloadRequest,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.createWebDownloadConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/{api_version}/api/webdl/createwebdownload')
      .setRequestSchema(createWebDownloadRequestRequest)
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.MultipartFormData)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addPathParam({
        key: 'api_version',
        value: apiVersion,
      })
      .addBody(body)
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
 * ### Overview
Controls a web download. By sending the web download's ID and the type of operation you want to perform, it will send that request to the debrid client.

Operations are either:

- **Delete** `deletes the download from the client and your account permanently`
    

### Authorization

Requires an API key using the Authorization Bearer Header.
 * @param {string} apiVersion - 
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<any>>} - OK
 */
  async controlWebDownload(
    apiVersion: string,
    body: any,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.controlWebDownloadConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/{api_version}/api/webdl/controlwebdownload')
      .setRequestSchema(z.any())
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addPathParam({
        key: 'api_version',
        value: apiVersion,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
 * ### Overview
Requests the download link from the server. Because downloads are metered, TorBox cannot afford to allow free access to the links directly. This endpoint opens the link for 3 hours for downloads. Once a download is started, the user has nearly unlilimited time to download the file. The 1 hour time limit is simply for starting downloads. This prevents long term link sharing.

### Permalinks

Instead of generating many CDN urls by requesting this endpoint, you can instead create a permalink such as: `https://api.torbox.app/v1/api/torrents/requestdl?token=APIKEY&torrent_id=NUMBER&file_id=NUMBER&redirect=true` and when a user clicks on it, it will automatically redirect them to the CDN link. This saves requests and doesn't abuse the API. Use this method rather than saving CDN links as they are not permanent. To invalidate these permalinks, simply reset your API token or delete the item from your dashboard.

### Authorization

Requires an API key as a parameter for the `token` parameter.
 * @param {string} apiVersion - 
 * @param {string} [params.token] - Your API Key
 * @param {string} [params.webId] - The web download's ID that you want to download
 * @param {string} [params.fileId] - The files's ID that you want to download
 * @param {string} [params.zipLink] - If you want a zip link. Required if no file_id. Takes precedence over file_id if both are given.
 * @param {string} [params.userIp] - The user's IP to determine the closest CDN. Optional.
 * @param {string} [params.redirect] - If you want to redirect the user to the CDN link. This is useful for creating permalinks so that you can just make this request URL the link.
 * @param {string} [params.appendName] - If you want to add the "filename" parameter to the returned CDN link. Optional. Default false.
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<any>>} - OK
 */
  async requestDownloadLink2(
    apiVersion: string,
    params?: RequestDownloadLinkParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.requestDownloadLink2Config, requestConfig);
    z.object({
      token: z.string().optional().nullable(),
      webId: z.string().optional().nullable(),
      fileId: z.string().optional().nullable(),
      zipLink: z.string().optional().nullable(),
      userIp: z.string().optional().nullable(),
      redirect: z.string().optional().nullable(),
      appendName: z.string().optional().nullable(),
    }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/{api_version}/api/webdl/requestdl')
      .setRequestSchema(z.any())
      .addAccessTokenAuth(resolvedConfig?.token)
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addPathParam({
        key: 'api_version',
        value: apiVersion,
      })
      .addQueryParam({
        key: 'token',
        value: params?.token,
      })
      .addQueryParam({
        key: 'web_id',
        value: params?.webId,
      })
      .addQueryParam({
        key: 'file_id',
        value: params?.fileId,
      })
      .addQueryParam({
        key: 'zip_link',
        value: params?.zipLink,
      })
      .addQueryParam({
        key: 'user_ip',
        value: params?.userIp,
      })
      .addQueryParam({
        key: 'redirect',
        value: params?.redirect,
      })
      .addQueryParam({
        key: 'append_name',
        value: params?.appendName,
      })
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
 * ### Overview
Requests multiple download links from the server. Because downloads are metered, TorBox cannot afford to allow free access to the links directly. This endpoint opens the link for 3 hours for downloads. Once a download is started, the user has nearly unlilimited time to download the file. The 1 hour time limit is simply for starting downloads. This prevents long term link sharing.

### Authorization

Requires an API key as a parameter for the `token` parameter.
 * @param {string} apiVersion - 
 * @param {string} [params.token] - Your API Key
 * @param {string} [params.webId] - The web download's ID that you want to download
 * @param {string} [params.fileIds] - The files's ID that you want to download
 * @param {string} [params.userIp] - The user's IP to determine the closest CDN. Optional.
 * @param {string} [params.appendName] - If you want to add the "filename" parameter to the returned CDN link. Optional. Default false.
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<any>>} - OK
 */
  async requestDownloadLinksGet2(
    apiVersion: string,
    params?: RequestDownloadLinksGetParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(
      this.requestDownloadLinksGet2Config,
      requestConfig,
    );
    z.object({
      token: z.string().optional().nullable(),
      webId: z.string().optional().nullable(),
      fileIds: z.string().optional().nullable(),
      userIp: z.string().optional().nullable(),
      appendName: z.string().optional().nullable(),
    }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/{api_version}/api/webdl/requestdl/batch')
      .setRequestSchema(z.any())
      .addAccessTokenAuth(resolvedConfig?.token)
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addPathParam({
        key: 'api_version',
        value: apiVersion,
      })
      .addQueryParam({
        key: 'token',
        value: params?.token,
      })
      .addQueryParam({
        key: 'web_id',
        value: params?.webId,
      })
      .addQueryParam({
        key: 'file_ids',
        value: params?.fileIds,
      })
      .addQueryParam({
        key: 'user_ip',
        value: params?.userIp,
      })
      .addQueryParam({
        key: 'append_name',
        value: params?.appendName,
      })
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
 * ### Overview
Requests multiple download links from the server. Because downloads are metered, TorBox cannot afford to allow free access to the links directly. This endpoint opens the link for 3 hours for downloads. Once a download is started, the user has nearly unlilimited time to download the file. The 1 hour time limit is simply for starting downloads. This prevents long term link sharing.

### Authorization

Requires an API key as a parameter for the `token` parameter.
 * @param {string} apiVersion - 
 * @param {string} [params.token] - Your API Key
 * @param {string} [params.webId] - The web downloads' ID that you want to download
 * @param {string} [params.userIp] - The user's IP to determine the closest CDN. Optional.
 * @param {string} [params.appendName] - If you want to add the "filename" parameter to the returned CDN link. Optional. Default false.
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<any>>} - OK
 */
  async requestDownloadLinksPost2(
    apiVersion: string,
    body: MainApiSdkRequestDownloadLinksPostRequest3,
    params?: RequestDownloadLinksPostParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(
      this.requestDownloadLinksPost2Config,
      requestConfig,
    );
    z.object({
      token: z.string().optional().nullable(),
      webId: z.string().optional().nullable(),
      userIp: z.string().optional().nullable(),
      appendName: z.string().optional().nullable(),
    }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/{api_version}/api/webdl/requestdl/batch')
      .setRequestSchema(mainApiSdkRequestDownloadLinksPostRequest3Request)
      .addAccessTokenAuth(resolvedConfig?.token)
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addPathParam({
        key: 'api_version',
        value: apiVersion,
      })
      .addQueryParam({
        key: 'token',
        value: params?.token,
      })
      .addQueryParam({
        key: 'web_id',
        value: params?.webId,
      })
      .addQueryParam({
        key: 'user_ip',
        value: params?.userIp,
      })
      .addQueryParam({
        key: 'append_name',
        value: params?.appendName,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
 * ### Overview
Gets the user's web download list. This gives you the needed information to perform other usenet actions. Unlike Torrents, this information is updated on its own every 5 seconds for live web downloads.

### Authorization

Requires an API key using the Authorization Bearer Header.
 * @param {string} apiVersion - 
 * @param {string} [params.bypassCache] - Allows you to bypass the cached data, and always get fresh information. Useful if constantly querying for fresh download stats. Otherwise, we request that you save our database a few calls.
 * @param {string} [params.id] - Determines the torrent requested, will return an object rather than list. Optional.
 * @param {string} [params.offset] - Determines the offset of items to get from the database. Default is 0. Optional.
 * @param {string} [params.limit] - Determines the number of items to recieve per request. Default is 1000. Optional.
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<any>>} - OK
 */
  async getWebDownloadList(
    apiVersion: string,
    params?: GetWebDownloadListParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.getWebDownloadListConfig, requestConfig);
    z.object({
      bypassCache: z.string().optional().nullable(),
      id: z.string().optional().nullable(),
      offset: z.string().optional().nullable(),
      limit: z.string().optional().nullable(),
    }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/{api_version}/api/webdl/mylist')
      .setRequestSchema(z.any())
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addPathParam({
        key: 'api_version',
        value: apiVersion,
      })
      .addQueryParam({
        key: 'bypass_cache',
        value: params?.bypassCache,
      })
      .addQueryParam({
        key: 'id',
        value: params?.id,
      })
      .addQueryParam({
        key: 'offset',
        value: params?.offset,
      })
      .addQueryParam({
        key: 'limit',
        value: params?.limit,
      })
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
 * ### Overview
Takes in a list of comma separated usenet hashes and checks if the web download is cached. This endpoint only gets a max of around 100 at a time, due to http limits in queries. If you want to do more, you can simply do more hash queries. Such as:  
`?hash=XXXX&hash=XXXX&hash=XXXX`

or `?hash=XXXX,XXXX&hash=XXXX&hash=XXXX,XXXX`  
and this will work too. Performance is very fast. Less than 1 second per 100. Time is approximately O(log n) time for those interested in taking it to its max. That is without caching as well. This endpoint stores a cache for an hour.

You may also pass a `format` parameter with the format you want the data in. Options are either `object` or `list`. You can view examples of both below.

To get the hash of a web download you can read [this document](https://support.torbox.app/en/articles/13681109-technical-getting-hashes-for-searches) for all of the strategies.

### Authorization

Requires an API key using the Authorization Bearer Header.
 * @param {string} apiVersion - 
 * @param {string} [params.hash] - The list of web hashes you want to check. Comma seperated. To find the hash, md5 the link.

 * @param {string} [params.format] - Format you want the data in. Acceptable is either "object" or "list". List is the most performant option as it doesn't require modification of the list.
 * @param {string} [params.listFiles] - Allows you to list the files found inside the cached data.
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<any>>} - OK
 */
  async getWebDownloadCachedAvailability(
    apiVersion: string,
    params?: GetWebDownloadCachedAvailabilityParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(
      this.getWebDownloadCachedAvailabilityConfig,
      requestConfig,
    );
    z.object({
      hash: z.string().optional().nullable(),
      format: z.string().optional().nullable(),
      listFiles: z.string().optional().nullable(),
    }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/{api_version}/api/webdl/checkcached')
      .setRequestSchema(z.any())
      .addAccessTokenAuth(resolvedConfig?.token)
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addPathParam({
        key: 'api_version',
        value: apiVersion,
      })
      .addQueryParam({
        key: 'hash',
        value: params?.hash,
      })
      .addQueryParam({
        key: 'format',
        value: params?.format,
      })
      .addQueryParam({
        key: 'list_files',
        value: params?.listFiles,
      })
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
 * ### Overview
Takes in a list of comma separated hashes and checks if the torrent is cached. With the POST endpoint you can submit a nearly unlimited hashes compared to the GET endpoint which is limited by url parameters.

Performance is very fast. Less than 1 second per 100. Time is approximately O(log n) time for those interested in taking it to its max. That is without caching as well. This endpoint stores a cache for an hour.

You may also pass a `format` parameter with the format you want the data in. Options are either `object` or `list`. You can view examples of both below.

### Authorization

Requires an API key using the Authorization Bearer Header.
 * @param {string} apiVersion - 
 * @param {string} [params.format] - Format you want the data in. Acceptable is either "object" or "list". List is the most performant option as it doesn't require modification of the list.
 * @param {string} [params.listFiles] - Allows you to list the files found inside the cached data.
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<any>>} - OK
 */
  async getWebDownloadCachedAvailabilityBatch(
    apiVersion: string,
    body: GetWebDownloadCachedAvailabilityBatchRequest,
    params?: GetWebDownloadCachedAvailabilityBatchParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(
      this.getWebDownloadCachedAvailabilityBatchConfig,
      requestConfig,
    );
    z.object({
      format: z.string().optional().nullable(),
      listFiles: z.string().optional().nullable(),
    }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/{api_version}/api/webdl/checkcached')
      .setRequestSchema(getWebDownloadCachedAvailabilityBatchRequestRequest)
      .addAccessTokenAuth(resolvedConfig?.token)
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addPathParam({
        key: 'api_version',
        value: apiVersion,
      })
      .addQueryParam({
        key: 'format',
        value: params?.format,
      })
      .addQueryParam({
        key: 'list_files',
        value: params?.listFiles,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
 * ### Overview
A dynamic list of hosters that TorBox is capable of downloading through its paid service.

- **Name** - a clean name for display use, the well known name of the service, should be recognizable to users.
    
- **Domains** - an array of known domains that the hoster uses. While each may serve a different purpose it is still included.
    
- **URL** - the main url of the service. This should take you to the home page or a service page of the hoster.
    
- **Icon** - a square image, usually a favicon or logo, that represents the service, should be recognizable as the hoster's icon.
    
- **Status** - whether this hoster can be used on TorBox or not at the current time. It is usually a good idea to check this value before submitting a download to TorBox's servers for download.
    
- **Type** - values are either "hoster" or "stream". Both do the same thing, but is good to differentiate services used for different things.
    
- **Note** - a string value (or null) that may give helpful information about the current status or state of a hoster. This can and should be shown to end users.
    
- **Daily Link Limit** - the number of downloads a user can use per day. As a user submits links, once they hit this number, the API will deny them from adding anymore of this type of link. A zero value means that it is unlimited.
    
- **Daily Link Used** - the number of downloads a user has already used. Usually zero unless you send authentication to the endpoint. This will return accurate values.
    
- **Daily Bandwidth Limit** - the value in bytes that a user is allowed to download from this hoster. A zero value means that it is unlimited. It is recommended to use the Daily Link Limit instead.
    
- **Daily Bandwidth Used** - the value in bytes that a user has already used to download from this hoster. Usually zero unless you send authentication to the endpoint. This will return accurate values.
    

### Authorization

Optional authorization. Authorization is not required in this endpoint unless you want to get the user's live data. Requires an API key using the Authorization Bearer Header to get the live and accurate data for **Daily Link Used** and **Daily Bandwidth Used**.
 * @param {string} apiVersion - 
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<any>>} - OK
 */
  async getHosterList(apiVersion: string, requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.getHosterListConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/{api_version}/api/webdl/hosters')
      .setRequestSchema(z.any())
      .addAccessTokenAuth(resolvedConfig?.token)
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addPathParam({
        key: 'api_version',
        value: apiVersion,
      })
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
 * ### Overview
Updates a download item based on the item's ID.  
Sending a PUT request with valid items overwrites the previous items entirely, so use this endpoint with caution. Please make sure to read the restrictions below as they are important.

### Restrictions

- Does not affect the cached database (or any other user's item).
    
- Name must pass validation:
    
    - Above 1 character long.
        
    - Below 200 characters long.
        
    - Cannot contain any non-url or non filesystem safe characters. (This is removed automatically).
        
    - Cannot contain any leading or trailing whitespace. You can have spaces in the middle. (This is removed automatically).
        
- Tags follow the same rules as the name.
    
- Alternative hashes must be of MD5, SHA1, or SHA256.
    

### Authorization

Requires an API key using the Authorization Bearer Header.
 * @param {string} apiVersion - 
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<any>>} - OK
 */
  async editWebDownloadItem(
    apiVersion: string,
    body: EditWebDownloadItemRequest,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.editWebDownloadItemConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('PUT')
      .setPath('/{api_version}/api/webdl/editwebdownload')
      .setRequestSchema(editWebDownloadItemRequestRequest)
      .addAccessTokenAuth(resolvedConfig?.token)
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addPathParam({
        key: 'api_version',
        value: apiVersion,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
 * ### Overview
Simply gets if the TorBox API is available for use or not. Also might include information about downtimes.

### Authorization

None needed.
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<any>>} - OK
 */
  async getUpStatus(requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.getUpStatusConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/')
      .setRequestSchema(z.any())
      .addAccessTokenAuth(resolvedConfig?.token)
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
 * ### Overview
Simply gets general stats about the TorBox service.

### Authorization

None needed.
 * @param {string} apiVersion - 
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<any>>} - OK
 */
  async getStats(apiVersion: string, requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.getStatsConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/{api_version}/api/stats')
      .setRequestSchema(z.any())
      .addAccessTokenAuth(resolvedConfig?.token)
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addPathParam({
        key: 'api_version',
        value: apiVersion,
      })
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
 * ### Overview
Gets most recent 100 changelogs from [https://feedback.torbox.app/changelog.](https://feedback.torbox.app/changelog.) This is useful for people who want updates on the TorBox changelog. Includes all the necessary items to make this compatible with RSS feed viewers for notifications, and proper HTML viewing.

### Authorization

None needed.
 * @param {string} apiVersion - 
 * @param {string} [params.offset] - 
 * @param {string} [params.limit] - 
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<any>>} - OK
 */
  async getChangelogsRssFeed(
    apiVersion: string,
    params?: GetChangelogsRssFeedParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<string> {
    const resolvedConfig = this.getResolvedConfig(this.getChangelogsRssFeedConfig, requestConfig);
    z.object({
      offset: z.string().optional().nullable(),
      limit: z.string().optional().nullable(),
    }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/{api_version}/api/changelogs/rss')
      .setRequestSchema(z.any())
      .addAccessTokenAuth(resolvedConfig?.token)
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.string(),
        contentType: ContentType.Text,
        status: 200,
      })
      .addPathParam({
        key: 'api_version',
        value: apiVersion,
      })
      .addQueryParam({
        key: 'offset',
        value: params?.offset,
      })
      .addQueryParam({
        key: 'limit',
        value: params?.limit,
      })
      .build();
    return this.client.callDirect<string>(request);
  }

  /**
 * ### Overview
Gets most recent changelogs from [https://feedback.torbox.app/changelog.](https://feedback.torbox.app/changelog.) This is useful for developers who want to integrate the changelog into their apps for their users to see. Includes content in HTML for developers to easily render the text in a fancy yet simple way.

### Authorization

None needed.
 * @param {string} apiVersion - 
 * @param {string} [params.offset] - 
 * @param {string} [params.limit] - 
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<any>>} - OK
 */
  async getChangelogsJson(
    apiVersion: string,
    params?: GetChangelogsJsonParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.getChangelogsJsonConfig, requestConfig);
    z.object({
      offset: z.string().optional().nullable(),
      limit: z.string().optional().nullable(),
    }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/{api_version}/api/changelogs/json')
      .setRequestSchema(z.any())
      .addAccessTokenAuth(resolvedConfig?.token)
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addPathParam({
        key: 'api_version',
        value: apiVersion,
      })
      .addQueryParam({
        key: 'offset',
        value: params?.offset,
      })
      .addQueryParam({
        key: 'limit',
        value: params?.limit,
      })
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
 * ### Overview
Gets CDN speedtest files. This can be used for speedtesting TorBox for users or other usages, such as checking download speeds for verification. Provides all necessary data such as region, server name, and even coordinates. Uses the requesting IP to determine if the server is the closest to the user.  
  
You also have the ability to choose between long tests or short tests via the "test_length" parameter. You may also force the region selection by passing the "region" as a specific region.

### Authorization

None needed.
 * @param {string} apiVersion - 
 * @param {string} [params.testLength] - Determines the size of the file used for the speedtest. May be "long" or "short". Optional.
 * @param {string} [params.region] - Determines what cdns are returned. May be any region that TorBox is located in. To get this value, send a request without this value to determine all of the available regions that are available.
 * @param {string} [params.userIp] - Pass a user's IP to get the closest server to them, otherwise will use the calling IP for location.
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<any>>} - OK
 */
  async getSpeedtestFiles(
    apiVersion: string,
    params?: GetSpeedtestFilesParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.getSpeedtestFilesConfig, requestConfig);
    z.object({
      testLength: z.string().optional().nullable(),
      region: z.string().optional().nullable(),
      userIp: z.string().optional().nullable(),
    }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/{api_version}/api/speedtest')
      .setRequestSchema(z.any())
      .addAccessTokenAuth(resolvedConfig?.token)
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addPathParam({
        key: 'api_version',
        value: apiVersion,
      })
      .addQueryParam({
        key: 'test_length',
        value: params?.testLength,
      })
      .addQueryParam({
        key: 'region',
        value: params?.region,
      })
      .addQueryParam({
        key: 'user_ip',
        value: params?.userIp,
      })
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
 * ### Overview
Gets your notifications in an RSS Feed which allows you to use them with RSS Feed readers or notification services that can take RSS Feeds and listen to updates. As soon as a notification goes to your account, it will be added to your feed.

### Authorization

Requires an API key using as a query parameter using the `token` key.
 * @param {string} apiVersion - 
 * @param {string} [params.token] - The user's API key.
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<any>>} - OK
 */
  async getRssNotificationFeed(
    apiVersion: string,
    params?: GetRssNotificationFeedParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<string> {
    const resolvedConfig = this.getResolvedConfig(this.getRssNotificationFeedConfig, requestConfig);
    z.object({ token: z.string().optional().nullable() }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/{api_version}/api/notifications/rss')
      .setRequestSchema(z.any())
      .addAccessTokenAuth(resolvedConfig?.token)
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.string(),
        contentType: ContentType.Text,
        status: 200,
      })
      .addPathParam({
        key: 'api_version',
        value: apiVersion,
      })
      .addQueryParam({
        key: 'token',
        value: params?.token,
      })
      .build();
    return this.client.callDirect<string>(request);
  }

  /**
 * ### Overview
Gets your notifications in a JSON object that is easily parsable compared to the RSS Feed. Gives all the same data as the RSS Feed.

### Authorization

Requires an API key using the Authorization Bearer Header.
 * @param {string} apiVersion - 
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<any>>} - OK
 */
  async getNotificationFeed(apiVersion: string, requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.getNotificationFeedConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/{api_version}/api/notifications/mynotifications')
      .setRequestSchema(z.any())
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addPathParam({
        key: 'api_version',
        value: apiVersion,
      })
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
 * ### Overview
Marks all of your notifications as read and deletes them permanently.

### Authorization

Requires an API key using the Authorization Bearer Header.
 * @param {string} apiVersion - 
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<any>>} - OK
 */
  async clearAllNotifications(
    apiVersion: string,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.clearAllNotificationsConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/{api_version}/api/notifications/clear')
      .setRequestSchema(z.any())
      .addAccessTokenAuth(resolvedConfig?.token)
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addPathParam({
        key: 'api_version',
        value: apiVersion,
      })
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
 * ### Overview
Marks a single notification as read and permanently deletes it from your notifications. Requires a `notification_id` which can be found by getting your notification feed.

### Authorization

Requires an API key using the Authorization Bearer Header.
 * @param {string} apiVersion - 
 * @param {string} notificationId - 
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<any>>} - OK
 */
  async clearSingleNotification(
    apiVersion: string,
    notificationId: string,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(
      this.clearSingleNotificationConfig,
      requestConfig,
    );
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/{api_version}/api/notifications/clear/{notification_id}')
      .setRequestSchema(z.any())
      .addAccessTokenAuth(resolvedConfig?.token)
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addPathParam({
        key: 'api_version',
        value: apiVersion,
      })
      .addPathParam({
        key: 'notification_id',
        value: notificationId,
      })
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
 * ### Overview
Sends a test notification to all enabled notification types. This can be useful for validating setups. No need for any body in this request.

### Authorization

Requires an API key using the Authorization Bearer Header.
 * @param {string} apiVersion - 
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<any>>} - OK
 */
  async sendTestNotification(apiVersion: string, requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.sendTestNotificationConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/{api_version}/api/notifications/test')
      .setRequestSchema(z.any())
      .addAccessTokenAuth(resolvedConfig?.token)
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addPathParam({
        key: 'api_version',
        value: apiVersion,
      })
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
 * ### Overview
If you want a new API token, or your old one has been compromised, you may request a new one. If you happen to forget the token, go the [TorBox settings page ](https://torbox.app/settings) and copy the current one. If this still doesn't work, you may contact us at our support email for a new one.

### Authorization

Requires an API key using the Authorization Bearer Header as well as passing the `session_token` from the website to be passed in the body. You can find the `session_token` in the localStorage of your browser on any TorBox.app page under the key `torbox_session_token`. This is a temporary token that only lasts for 1 hour, which is why it is used here to verify the identity of a user as well as their API token.
 * @param {string} apiVersion - 
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<any>>} - OK
 */
  async refreshApiToken(
    apiVersion: string,
    body: any,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.refreshApiTokenConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/{api_version}/api/user/refreshtoken')
      .setRequestSchema(z.any())
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addPathParam({
        key: 'api_version',
        value: apiVersion,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
 * ### Overview
Gets a users account data and information.

### Plans

`0` is Free plan

`1` is Essential plan (_$3 plan_)

`2` is Pro plan (_$10 plan_)

`3` is Standard plan (_$5 plan_)

### Authorization

Requires an API key using the Authorization Bearer Header.
 * @param {string} apiVersion - 
 * @param {string} [params.settings] - Allows you to retrieve user settings.
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<any>>} - OK
 */
  async getUserData(
    apiVersion: string,
    params?: GetUserDataParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.getUserDataConfig, requestConfig);
    z.object({ settings: z.string().optional().nullable() }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/{api_version}/api/user/me')
      .setRequestSchema(z.any())
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addPathParam({
        key: 'api_version',
        value: apiVersion,
      })
      .addQueryParam({
        key: 'settings',
        value: params?.settings,
      })
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
 * ### Overview
Automatically adds a referral code to the user's account. This can be used for developers to automatically add their referral to user's accounts who use their service.

This will not override any referral a user already has. If they already have one, then it cannot be changed using this endpoint. It can only be done by the user on the [website](https://torbox.app/subscription).

### Authorization

Requires an API key using the Authorization Bearer Header. Use the user's API key, not your own.
 * @param {string} apiVersion - 
 * @param {string} [params.referral] - A referral code. Must be UUID.
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<any>>} - OK
 */
  async addReferralToAccount(
    apiVersion: string,
    params?: AddReferralToAccountParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.addReferralToAccountConfig, requestConfig);
    z.object({ referral: z.string().optional().nullable() }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/{api_version}/api/user/addreferral')
      .setRequestSchema(z.any())
      .addAccessTokenAuth(resolvedConfig?.token)
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addPathParam({
        key: 'api_version',
        value: apiVersion,
      })
      .addQueryParam({
        key: 'referral',
        value: params?.referral,
      })
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
 * ### Overview
Requests a 6 digit code to be sent to the user's email for verification. Used to verify a user actually wants to perform a potentially dangerous action.

### Authorization

Requires an API key using the Authorization Bearer Header.
 * @param {string} apiVersion - 
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<any>>} - OK
 */
  async getConfirmationCode(apiVersion: string, requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.getConfirmationCodeConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/{api_version}/api/user/getconfirmation')
      .setRequestSchema(z.any())
      .addAccessTokenAuth(resolvedConfig?.token)
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addPathParam({
        key: 'api_version',
        value: apiVersion,
      })
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
 * ### Overview
Starts the device code authorization process. Returns all the necessary information to complete the rest of the flow. This includes the following:

- `device_code` - The code your app will use for consecutive requests for getting the user token.
    
- `code` - This is the 6 digit code that you show to the user to be entered at the following verification_url.
    
- `verification_url` - This url which you will show as a QR code.
    
- `friendly_verification_url` - The friendly short url which you can show as plain text to user if they cannot use the QR code method.
    

You may also submit the `app` parameter to this request to show your app name on the `verification_url` page. This concretes user trust in authorizing your application to use their TorBox account. This is not required, but is a good idea. Default is "Third Party App". This name is also only allowed to be alpha-numeric characters (_A-Z,0-9_). Anything else will be filtered our when being shown to the user. The `friendly_verification_url` will always show "Third Party App" to keep the URL short.

The device_code is only valid for 10 minutes. Make sure the user is aware of this time limit so they submit and login before this time limit is over.

### Authorization

None required.
 * @param {string} apiVersion - 
 * @param {string} [params.app] - The app name that the user will see when verifying the code. This should be the name of your app.
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<any>>} - OK
 */
  async startDeviceCodeAuthorizationProcess(
    apiVersion: string,
    params?: StartDeviceCodeAuthorizationProcessParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(
      this.startDeviceCodeAuthorizationProcessConfig,
      requestConfig,
    );
    z.object({ app: z.string().optional().nullable() }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/{api_version}/api/user/auth/device/start')
      .setRequestSchema(z.any())
      .addAccessTokenAuth(resolvedConfig?.token)
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addPathParam({
        key: 'api_version',
        value: apiVersion,
      })
      .addQueryParam({
        key: 'app',
        value: params?.app,
      })
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
 * ### Overview
Gets the user's API token from the device code authorization process. This endpoint is expected to be polled in interval until it returns success, or until the expiry has passed. All data you need for this request is in the [original request](https://www.postman.com/wamy-dev/workspace/torbox/request/29572726-744bc274-88b7-4faf-a833-e30573c8c1e0?action=share&creator=29572726&ctx=documentation), which includes the interval to be polled by, the expiry time to stop at, and `device_code` to be sent to the API to get the correct data.

### Authorization

None required.
 * @param {string} apiVersion - 
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<any>>} - OK
 */
  async getTokenFromDeviceCodeProcess(
    apiVersion: string,
    body: GetTokenFromDeviceCodeProcessRequest,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(
      this.getTokenFromDeviceCodeProcessConfig,
      requestConfig,
    );
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/{api_version}/api/user/auth/device/token')
      .setRequestSchema(getTokenFromDeviceCodeProcessRequestRequest)
      .addAccessTokenAuth(resolvedConfig?.token)
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addPathParam({
        key: 'api_version',
        value: apiVersion,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
 * ### Overview
Use this endpoint to get the user's referral data. This includes information such as how many referrals they have made, and their referral code.

### Authorization

Requires an API key using the Authorization Bearer Header.
 * @param {string} apiVersion - 
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<any>>} - OK
 */
  async getReferralData(apiVersion: string, requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.getReferralDataConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/{api_version}/api/user/referraldata')
      .setRequestSchema(z.any())
      .addAccessTokenAuth(resolvedConfig?.token)
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addPathParam({
        key: 'api_version',
        value: apiVersion,
      })
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
 * ### Overview
Gets a users subscriptions. This includes active and inactive subscriptions for all payment processors.

It should be noted that "plan_code" is not normalized to the standard plan codes such as 1, 2, or 3. These "plan_code"s are payment processor specific and used internally. If you want to display these subscriptions, use the "plan_name".  
  
For displaying information to users, use the "status", "gateway", and "plan_name". No other information is relevant to the user, and the rest is used for TorBox internally.

### Authorization

Requires an API key using the Authorization Bearer Header.
 * @param {string} apiVersion - 
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<any>>} - OK
 */
  async getSubscriptions(apiVersion: string, requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.getSubscriptionsConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/{api_version}/api/user/subscriptions')
      .setRequestSchema(z.any())
      .addAccessTokenAuth(resolvedConfig?.token)
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addPathParam({
        key: 'api_version',
        value: apiVersion,
      })
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
 * ### Overview
Use this endpoint to get the user's list of transactions. This data isn't exactly relevant to a third party developer, unless you want to build full parity with TorBox's dashboard, or simply want to show this information.

### Authorization

Requires an API key using the Authorization Bearer Header.
 * @param {string} apiVersion - 
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<any>>} - OK
 */
  async getTransactions(apiVersion: string, requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.getTransactionsConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/{api_version}/api/user/transactions')
      .setRequestSchema(z.any())
      .addAccessTokenAuth(resolvedConfig?.token)
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addPathParam({
        key: 'api_version',
        value: apiVersion,
      })
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
 * ### Overview
Generates a PDF of the transaction information. Requires the transaction ID from the "Get Transactions" request.

### Authorization

Requires an API key using the Authorization Bearer Header.
 * @param {string} apiVersion - 
 * @param {string} [params.transactionId] - The transaction ID that you want to generate the PDF for.
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<any>>} - OK
 */
  async getTransactionPdf(
    apiVersion: string,
    params?: GetTransactionPdfParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<ArrayBuffer> {
    const resolvedConfig = this.getResolvedConfig(this.getTransactionPdfConfig, requestConfig);
    z.object({ transactionId: z.string().optional().nullable() }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/{api_version}/api/user/transaction/pdf')
      .setRequestSchema(z.any())
      .addAccessTokenAuth(resolvedConfig?.token)
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Binary,
        status: 200,
      })
      .addPathParam({
        key: 'api_version',
        value: apiVersion,
      })
      .addQueryParam({
        key: 'transaction_id',
        value: params?.transactionId,
      })
      .build();
    return this.client.callDirect<ArrayBuffer>(request);
  }

  /**
 * ### Overview
Edits a user's TorBox settings. These values take effect immediately. Please view the body to read about allowed options and parameters.

To get the user settings, simply use the "[Get User Data](https://www.postman.com/torbox/workspace/torbox-api/request/29572726-a3775d9b-f3ee-49cd-98a4-fc909ed2923b?action=share&source=copy-link&creator=29572726)" endpoint, while sending the "?settings=true" parameter

### Authorization

Requires an API key using the Authorization Bearer Header.
 * @param {string} apiVersion - 
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<any>>} - OK
 */
  async editUserSettings(
    apiVersion: string,
    body: any,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.editUserSettingsConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('PUT')
      .setPath('/{api_version}/api/user/settings/editsettings')
      .setRequestSchema(z.any())
      .addAccessTokenAuth(resolvedConfig?.token)
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addPathParam({
        key: 'api_version',
        value: apiVersion,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
 * ### Overview
Gets a users stats. This data is currently split into two sections, "general" and "bandwidth". General shows general data, such as "Total Data Downloaded", "Total Data Egress", "Overall Ratio", and "Total Downloaded". Bandwidth shows the amount of bandwidth a user has downloaded within the past 30 days. We don't store this data for longer than 30 days, and it can be made more or less granular. Makes cool graphs!

### Authorization

Requires an API key using the Authorization Bearer Header.
 * @param {string} apiVersion - 
 * @param {string} [params.general] - Retrieve general stats.
 * @param {string} [params.bandwidth] - Retrieve bandwidth stats.
 * @param {string} [params.bandwidthGrouping] - If the "bandwidth" query parameter is sent, this value is used. Allowed is "hour", "day", "week", and "month", this narrates how bandwidth is grouped. More granular shows more information.
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<any>>} - OK
 */
  async getUserStats(
    apiVersion: string,
    params?: GetUserStatsParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.getUserStatsConfig, requestConfig);
    z.object({
      general: z.string().optional().nullable(),
      bandwidth: z.string().optional().nullable(),
      bandwidthGrouping: z.string().optional().nullable(),
    }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/{api_version}/api/user/stats')
      .setRequestSchema(z.any())
      .addAccessTokenAuth(resolvedConfig?.token)
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addPathParam({
        key: 'api_version',
        value: apiVersion,
      })
      .addQueryParam({
        key: 'general',
        value: params?.general,
      })
      .addQueryParam({
        key: 'bandwidth',
        value: params?.bandwidth,
      })
      .addQueryParam({
        key: 'bandwidth_grouping',
        value: params?.bandwidthGrouping,
      })
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
 * ### Overview
Allows adding an RSS feed to your account. This API gives you a lot of customization options, but is best used with the UI on the website. This endpoint only works for Pro users (plan: 2).

### Authorization

Requires an API key using the Authorization Bearer Header.
 * @param {string} apiVersion - 
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<any>>} - OK
 */
  async addRssFeed(
    apiVersion: string,
    body: any,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.addRssFeedConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/{api_version}/api/rss/addrss')
      .setRequestSchema(z.any())
      .addAccessTokenAuth(resolvedConfig?.token)
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addPathParam({
        key: 'api_version',
        value: apiVersion,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
 * ### Overview
Controls an RSS Feed. By sending the RSS feed's ID and the type of operation you want to perform, it will perform said action on the RSS feed checker.

Operations are either:

- **Update** `forces an update on the rss feed`
- **Delete** `deletes the rss feed from your account permanently. This also deletes all associated RSS feed items. This does not remove queued items spawned from the RSS feed.`
- **Pause** `pauses checking the rss feed on the scan interval`
- **Resume** `resumes a paused rss feed`
    

### Authorization

Requires an API key using the Authorization Bearer Header.
 * @param {string} apiVersion - 
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<any>>} - OK
 */
  async controlRssFeed(
    apiVersion: string,
    body: any,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.controlRssFeedConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/{api_version}/api/rss/controlrss')
      .setRequestSchema(z.any())
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addPathParam({
        key: 'api_version',
        value: apiVersion,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
 * ### Overview
Allows you to edit the RSS feed based on the RSS feed ID passed. Allows you to change everything about an RSS feed, except for the URL.

When updating the "rss_type" or the "torrent_seeding" options, it will update all of the RSS items associated with the RSS feed, including all previous items.

### Authorization

Requires an API key using the Authorization Bearer Header.
 * @param {string} apiVersion - 
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<any>>} - OK
 */
  async editRssFeed(
    apiVersion: string,
    body: any,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.editRssFeedConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/{api_version}/api/rss/modifyrss')
      .setRequestSchema(z.any())
      .addAccessTokenAuth(resolvedConfig?.token)
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addPathParam({
        key: 'api_version',
        value: apiVersion,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
 * ### Overview
Gets all of a user's RSS feeds located on their account. Can only be accessed on a Pro (plan: 2) account. Also allows you to get a specific by passing an "id" in the parameters.

##### Type Key

The "type" key in the response is used for showing what type of downloads are spawned from this RSS feed. This affects how the item is downloaded, as well as what is scraped, so make sure it is correct.

- **"**torrent**"** `uses .torrent files and magnet links and adds as torrent when downloaded.`
- "usenet" `uses .nzb files and nzb links and adds as a usenet download when downloaded.`
- "webdl" `uses generic links and adds as a web download when downloaded.`
    

##### Status Key

The "status" key tells the user selected status of the RSS feed. These statuses are **not** the same as the status key for the RSS items associated with the RSS feed. Each feed also includes a "status_message" key which gives a user friendly message about anything about the RSS feed, such as errors and explainations.

- "active" `the RSS feed is set to be scraped.`
- "paused" `the RSS feed will not be scraped as it is paused by the user.`
    
- "error" `the RSS feed had an error while scraping, and cannot continue.`
    

##### State Key

The "state" key tells you exactly in real time, what the RSS feed is doing. This is useful for realtime status updates.

- "idle" `the RSS feed is idle, and is currently not doing anything in the current moment.`
- "scraping" `the RSS feed is currently scraping new RSS items.`
- "downloading" `the RSS feed is currently downloading the newly scraped RSS items.`
    

##### Torrent Seeding Key

The "torrent_seeding" key is returned with every response, regardless of the type of the RSS feed. This controls what seeding setting the RSS feed is using when it adds new torrents. These are the same options as when adding a torrent using the /torrent/createtorrent endpoint.

> Tells TorBox your preference for seeding this torrent. 1 is auto. 2 is seed. 3 is don't seed. Optional. Default is 1, or whatever the user has in their settings. Overwrites option in settings. 
  

- 1 `auto, the torrent will seed based on what the user has in their settings.`
- 2 `always, TorBox will be instructed to seed this torrent regardless of any other settings.`
- 3 `never, TorBox will not seed this torrent.`
    

### Authorization

Requires an API key using the Authorization Bearer Header.
 * @param {string} apiVersion - 
 * @param {string} [params.id] - A specific RSS feed ID that you want to retrieve. Optional.
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<any>>} - OK
 */
  async getUserRssFeeds(
    apiVersion: string,
    params?: GetUserRssFeedsParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.getUserRssFeedsConfig, requestConfig);
    z.object({ id: z.string().optional().nullable() }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/{api_version}/api/rss/getfeeds')
      .setRequestSchema(z.any())
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addPathParam({
        key: 'api_version',
        value: apiVersion,
      })
      .addQueryParam({
        key: 'id',
        value: params?.id,
      })
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
 * ### Overview
Gets the first 10,000 RSS feed items associated with an RSS feed. RSS feed items are scraped items from the RSS feed. They contain a direct download link as well as the content name, and additional information.

##### Type Key

The "type" key in the response is used for showing what type of downloads this RSS feed item is. This affects how the item is downloaded, as well as what is scraped, so make sure it is correct. When the parent RSS feed's type is changed, it changes all of the items types as well.

- **"**torrent**"** `uses .torrent files and magnet links and adds as torrent when downloaded.`
- "usenet" `uses .nzb files and nzb links and adds as a usenet download when downloaded.`
- "webdl" `uses generic links and adds as a web download when downloaded.`
    

##### Status Key

The "status" key tells the status of the RSS feed item. This is useful for seeing what the item is doing, and what it will do next. Each item also includes a "status_message" key which gives a user friendly message about anything about the RSS feed item, such as errors and explainations.

- "new" `the RSS feed item is set to be downloaded.`
- "ignored" `the RSS feed item has been ignored due to the parents RSS feed settings, as it doesn't match the chosen settings. The item will not be downloaded.`
- "error" `the RSS feed item had an error while attempting to download. The item will be retried on the next scrape.`
- "downloaded" `the RSS feed item has already been downloaded to the user's account. It will not be downloaded again.`
    

### Authorization

Requires an API key using the Authorization Bearer Header.
 * @param {string} apiVersion - 
 * @param {string} [params.rssFeedId] - The RSS Feed ID of the RSS Feed you want to retrieve the scraped items of.
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<any>>} - OK
 */
  async getRssFeedItems(
    apiVersion: string,
    params?: GetRssFeedItemsParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.getRssFeedItemsConfig, requestConfig);
    z.object({ rssFeedId: z.string().optional().nullable() }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/{api_version}/api/rss/getfeeditems')
      .setRequestSchema(z.any())
      .addAccessTokenAuth(resolvedConfig?.token)
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addPathParam({
        key: 'api_version',
        value: apiVersion,
      })
      .addQueryParam({
        key: 'rss_feed_id',
        value: params?.rssFeedId,
      })
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
 * ### Overview
Gets all the jobs attached to a user account. This is good for an overall view of the jobs, such as on a dashboard, or something similar.

### Statuses

- "pending" -> Upload is still waiting in the queue. Waiting for spot to upload.
- "uploading" -> Upload is uploading to the proper remote. Progress will be updated as upload continues.
- "completed" -> Upload has successfully been uploaded. Progress will be at 1, and the download URL will be populated.
    
- "failed" -> The upload has failed. Check the Detail key for information.
    

### Authorization

Requires an API key using the Authorization Bearer Header.
 * @param {string} apiVersion - 
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<any>>} - OK
 */
  async getAllJobs(apiVersion: string, requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.getAllJobsConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/{api_version}/api/integration/jobs')
      .setRequestSchema(z.any())
      .addAccessTokenAuth(resolvedConfig?.token)
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addPathParam({
        key: 'api_version',
        value: apiVersion,
      })
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
 * ### Overview
Gets a specifc job using the Job's ID. To get the ID, you will have to Get All Jobs, and get the ID you want.

### Statuses

- "pending" -> Upload is still waiting in the queue. Waiting for spot to upload.
- "uploading" -> Upload is uploading to the proper remote. Progress will be updated as upload continues.
- "completed" -> Upload has successfully been uploaded. Progress will be at 1, and the download URL will be populated.
- "failed" -> The upload has failed. Check the Detail key for information.
    

### Authorization

Requires an API key using the Authorization Bearer Header.
 * @param {string} apiVersion - 
 * @param {string} jobId - 
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<any>>} - OK
 */
  async getSpecificJob(
    apiVersion: string,
    jobId: string,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.getSpecificJobConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/{api_version}/api/integration/job/{job_id}')
      .setRequestSchema(z.any())
      .addAccessTokenAuth(resolvedConfig?.token)
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addPathParam({
        key: 'api_version',
        value: apiVersion,
      })
      .addPathParam({
        key: 'job_id',
        value: jobId,
      })
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
 * ### Overview
Gets all jobs that match a specific hash. Good for checking on specific downloads such as a download page, that could contain a lot of jobs.

### Statuses

- "pending" -> Upload is still waiting in the queue. Waiting for spot to upload.
- "uploading" -> Upload is uploading to the proper remote. Progress will be updated as upload continues.
- "completed" -> Upload has successfully been uploaded. Progress will be at 1, and the download URL will be populated.
- "failed" -> The upload has failed. Check the Detail key for information.
    

### Authorization

Requires an API key using the Authorization Bearer Header.
 * @param {string} apiVersion - 
 * @param {string} hash - 
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<any>>} - OK
 */
  async getAllJobsByHash(
    apiVersion: string,
    hash: string,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.getAllJobsByHashConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/{api_version}/api/integration/jobs/{hash}')
      .setRequestSchema(z.any())
      .addAccessTokenAuth(resolvedConfig?.token)
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addPathParam({
        key: 'api_version',
        value: apiVersion,
      })
      .addPathParam({
        key: 'hash',
        value: hash,
      })
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
 * ### Overview
Cancels a job or deletes the job. Cancels while in progess (pending, uploading), or deletes the job any other time. It will delete it from the database completely.

### Authorization

Requires an API key using the Authorization Bearer Header.
 * @param {string} apiVersion - 
 * @param {string} jobId - 
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<any>>} - OK
 */
  async cancelSpecificJob(
    apiVersion: string,
    jobId: string,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.cancelSpecificJobConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('DELETE')
      .setPath('/{api_version}/api/integration/job/{job_id}')
      .setRequestSchema(z.any())
      .addAccessTokenAuth(resolvedConfig?.token)
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addPathParam({
        key: 'api_version',
        value: apiVersion,
      })
      .addPathParam({
        key: 'job_id',
        value: jobId,
      })
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
 * ### Overview
Retrieves all of a user's queued downloads by type. If you want to get all 3 types, "torrent", "usenet" and "webdl" then you will need to run this request 3 times, each with the different type.

### Authorization

Requires an API key using the Authorization Bearer Header.
 * @param {string} apiVersion - 
 * @param {string} [params.bypassCache] - Allows you to bypass the cached data, and always get fresh information. Useful if constantly querying for fresh download stats. Otherwise, we request that you save our database a few calls.
 * @param {string} [params.id] - Determines the queued download requested, will return an object rather than list. Optional.
 * @param {string} [params.offset] - Determines the offset of items to get from the database. Default is 0. Optional.
 * @param {string} [params.limit] - Determines the number of items to recieve per request. Default is 1000. Optional.
 * @param {string} [params.type] - The type of the queued download you want to retrieve. Can be "torrent", "usenet" or "webdl". Optional. Default is "torrent".
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<any>>} - OK
 */
  async getQueuedDownloads(
    apiVersion: string,
    params?: GetQueuedDownloadsParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.getQueuedDownloadsConfig, requestConfig);
    z.object({
      bypassCache: z.string().optional().nullable(),
      id: z.string().optional().nullable(),
      offset: z.string().optional().nullable(),
      limit: z.string().optional().nullable(),
      type: z.string().optional().nullable(),
    }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/{api_version}/api/queued/getqueued')
      .setRequestSchema(z.any())
      .addAccessTokenAuth(resolvedConfig?.token)
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addPathParam({
        key: 'api_version',
        value: apiVersion,
      })
      .addQueryParam({
        key: 'bypass_cache',
        value: params?.bypassCache,
      })
      .addQueryParam({
        key: 'id',
        value: params?.id,
      })
      .addQueryParam({
        key: 'offset',
        value: params?.offset,
      })
      .addQueryParam({
        key: 'limit',
        value: params?.limit,
      })
      .addQueryParam({
        key: 'type',
        value: params?.type,
      })
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
 * ### Overview
Controls a queued torrent. By sending the queued torrent's ID and the type of operation you want to perform, it will perform that action on the queued torrent.

Operations are either:

- **Delete** `deletes the queued download from your account`
    
- **Start** `starts a queued download, cannot be used with the "all" parameter`
    

### Authorization

Requires an API key using the Authorization Bearer Header.
 * @param {string} apiVersion - 
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<any>>} - OK
 */
  async controlQueuedDownloads(
    apiVersion: string,
    body: any,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.controlQueuedDownloadsConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/{api_version}/api/queued/controlqueued')
      .setRequestSchema(z.any())
      .addAccessTokenAuth(resolvedConfig?.token)
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addPathParam({
        key: 'api_version',
        value: apiVersion,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
 * ### Overview
Creates a new stream based off of the data provided.

#### Selecting Subtitles and Audios

We use indexes to determine which audio and subtitle you would like to select. To view all available indexes, you must request this endpoint intially with "null" or 0, for the chosen indexes. This will return a metadata dictionary in the response, which will contain the list of audios and subtitles available for this stream. When choosing a subtitle or audio stream, use the **relative index**, starting from 0, rather than the "index" value. This is important for selecting the correct index. Once your user gets a selection of audios and subtitles available, you can submit this to the endpoint again to get the chosen stream.

- **null** - Selecting no subtitle. Not available for audio as one must always be selected.
    
- **0** - Selecting first subtitle or audio
    

#### Selecting Resolution

Similar to the subtitles and audios, we use indexes to determine the resolution chosen. Unlike the above, these are predetermined. We do not upscale video, so if for example, you pass a 1080p video, and request it with resolution, 7, it will stay at 1080p. Please see the below for options.

- **null** - Original video resolution. No downscaling will take place.
    
- **0** - 144p
    
- **1** - 240p
    
- **2** - 360p
    
- **3** - 480p
    
- **4** - 720p
    
- **5** - 1080p
    
- **6** - 1440p
    
- **7** - 2160p
    

#### Types

This endpoint allows you to handle torrents, usenet and web downloads all in one. This is why the "type" parameter is available. It defaults to "torrent".

- **torrent** - Torrents
    
- **usenet** - Usenet downloads
    
- **webdownload** - Web Downloads
    

#### Important Notes

- Only text based subtitles are supported. If a non-text based subtitle is selected, it will be ignored.
    
- If a subtitle or audio index does not exist on the stream, it will be ignored.
    
- There are a lot of edge-case videos, if something doesn't work, don't hesitate to report the download hash and file_id of the failing video file.
    
- This is a **Pro** only feature.
    

### Authorization

Requires an API key using the Authorization Bearer Header.
 * @param {string} apiVersion - 
 * @param {string} [params.id] - The ID of the type of download.
 * @param {string} [params.fileId] - The file ID inside of the download you would like to stream.
 * @param {string} [params.type] - The type of download that this is. If choosing the incorrect one, the ID will be incorrect.
 * @param {string} [params.chosenSubtitleIndex] - The relative index of the subtitle you would like to stream. This is default null for none. 0 is the first subtitle found.
 * @param {string} [params.chosenAudioIndex] - The relative index of the subtitle you would like to stream. Defaults to 0 for the first audio stream found inside the file. Cannot be null.
 * @param {string} [params.chosenResolutionIndex] - The index of the resolution you would like to stream. This is default null for original.
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<any>>} - OK
 */
  async createStream(
    apiVersion: string,
    params?: CreateStreamParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.createStreamConfig, requestConfig);
    z.object({
      id: z.string().optional().nullable(),
      fileId: z.string().optional().nullable(),
      type: z.string().optional().nullable(),
      chosenSubtitleIndex: z.string().optional().nullable(),
      chosenAudioIndex: z.string().optional().nullable(),
      chosenResolutionIndex: z.string().optional().nullable(),
    }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/{api_version}/api/stream/createstream')
      .setRequestSchema(z.any())
      .addAccessTokenAuth(resolvedConfig?.token)
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addPathParam({
        key: 'api_version',
        value: apiVersion,
      })
      .addQueryParam({
        key: 'id',
        value: params?.id,
      })
      .addQueryParam({
        key: 'file_id',
        value: params?.fileId,
      })
      .addQueryParam({
        key: 'type',
        value: params?.type,
      })
      .addQueryParam({
        key: 'chosen_subtitle_index',
        value: params?.chosenSubtitleIndex,
      })
      .addQueryParam({
        key: 'chosen_audio_index',
        value: params?.chosenAudioIndex,
      })
      .addQueryParam({
        key: 'chosen_resolution_index',
        value: params?.chosenResolutionIndex,
      })
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
 * ### Overview
Gets stream data from an already created stream. Requires the presigned token and user API token from the original request.

### Authorization

Requires an API key using the Authorization Bearer Header.
 * @param {string} apiVersion - 
 * @param {string} [params.presignedToken] - The presigned token given from the original, /createstream request.
 * @param {string} [params.token] - The user's API token, can also be used from the original, /createstream request.
 * @param {string} [params.chosenSubtitleIndex] - The chosen subtitle index that you are requesting information about.
 * @param {string} [params.chosenAudioIndex] - The chosen audio index that you are requesting information about.
 * @param {string} [params.chosenResolutionIndex] - The index of the resolution you would like to stream. This is default null for original.
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<any>>} - OK
 */
  async getStreamData(
    apiVersion: string,
    params?: GetStreamDataParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.getStreamDataConfig, requestConfig);
    z.object({
      presignedToken: z.string().optional().nullable(),
      token: z.string().optional().nullable(),
      chosenSubtitleIndex: z.string().optional().nullable(),
      chosenAudioIndex: z.string().optional().nullable(),
      chosenResolutionIndex: z.string().optional().nullable(),
    }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/{api_version}/api/stream/getstreamdata')
      .setRequestSchema(z.any())
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addPathParam({
        key: 'api_version',
        value: apiVersion,
      })
      .addQueryParam({
        key: 'presigned_token',
        value: params?.presignedToken,
      })
      .addQueryParam({
        key: 'token',
        value: params?.token,
      })
      .addQueryParam({
        key: 'chosen_subtitle_index',
        value: params?.chosenSubtitleIndex,
      })
      .addQueryParam({
        key: 'chosen_audio_index',
        value: params?.chosenAudioIndex,
      })
      .addQueryParam({
        key: 'chosen_resolution_index',
        value: params?.chosenResolutionIndex,
      })
      .build();
    return this.client.callDirect<any>(request);
  }
}
