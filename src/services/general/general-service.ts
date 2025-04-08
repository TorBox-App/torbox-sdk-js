import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse, RequestConfig } from '../../http/types';
import { RequestBuilder } from '../../http/transport/request-builder';
import { SerializationStyle } from '../../http/serialization/base-serializer';
import { Environment } from '../../http/environment';
import { GetUpStatusOkResponse, getUpStatusOkResponseResponse } from './models/get-up-status-ok-response';
import { GetStatsOkResponse, getStatsOkResponseResponse } from './models/get-stats-ok-response';
import {
  GetChangelogsJsonOkResponse,
  getChangelogsJsonOkResponseResponse,
} from './models/get-changelogs-json-ok-response';

export class GeneralService extends BaseService {
  /**
 * ### Overview
Simply gets if the TorBox API is available for use or not. Also might include information about downtimes.

### Authorization

None needed.
 * @param {RequestConfig} requestConfig - (Optional) The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<GetUpStatusOkResponse>>} Get Up Status Success
 */
  async getUpStatus(requestConfig?: RequestConfig): Promise<HttpResponse<GetUpStatusOkResponse>> {
    const request = new RequestBuilder()
      .setBaseUrl(requestConfig?.baseUrl || this.config.baseUrl || this.config.environment || Environment.DEFAULT)
      .setConfig(this.config)
      .setMethod('GET')
      .setPath('/')
      .setRequestSchema(z.any())
      .addAccessTokenAuth(this.config.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: getUpStatusOkResponseResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addError({
        error: Error,
        contentType: ContentType.Text,
        status: 502,
      })
      .setRetryAttempts(this.config, requestConfig)
      .setRetryDelayMs(this.config, requestConfig)
      .setResponseValidation(this.config, requestConfig)
      .build();
    return this.client.call<GetUpStatusOkResponse>(request);
  }

  /**
 * ### Overview
Simply gets general stats about the TorBox service.

### Authorization

None needed.
 * @param {string} apiVersion - 
 * @param {RequestConfig} requestConfig - (Optional) The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<GetStatsOkResponse>>} Get Stats Success
 */
  async getStats(apiVersion: string, requestConfig?: RequestConfig): Promise<HttpResponse<GetStatsOkResponse>> {
    const request = new RequestBuilder()
      .setBaseUrl(requestConfig?.baseUrl || this.config.baseUrl || this.config.environment || Environment.DEFAULT)
      .setConfig(this.config)
      .setMethod('GET')
      .setPath('/{api_version}/api/stats')
      .setRequestSchema(z.any())
      .addAccessTokenAuth(this.config.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: getStatsOkResponseResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .setRetryAttempts(this.config, requestConfig)
      .setRetryDelayMs(this.config, requestConfig)
      .setResponseValidation(this.config, requestConfig)
      .addPathParam({
        key: 'api_version',
        value: apiVersion,
      })
      .build();
    return this.client.call<GetStatsOkResponse>(request);
  }

  /**
 * ### Overview
Gets most recent 100 changelogs from [https://feedback.torbox.app/changelog.](https://feedback.torbox.app/changelog.) This is useful for people who want updates on the TorBox changelog. Includes all the necessary items to make this compatible with RSS feed viewers for notifications, and proper HTML viewing.

### Authorization

None needed.
 * @param {string} apiVersion - 
 * @param {RequestConfig} requestConfig - (Optional) The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<any>>} Get Changelogs RSS Feed Success
 */
  async getChangelogsRssFeed(apiVersion: string, requestConfig?: RequestConfig): Promise<HttpResponse<string>> {
    const request = new RequestBuilder()
      .setBaseUrl(requestConfig?.baseUrl || this.config.baseUrl || this.config.environment || Environment.DEFAULT)
      .setConfig(this.config)
      .setMethod('GET')
      .setPath('/{api_version}/api/changelogs/rss')
      .setRequestSchema(z.any())
      .addAccessTokenAuth(this.config.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.string(),
        contentType: ContentType.Text,
        status: 200,
      })
      .setRetryAttempts(this.config, requestConfig)
      .setRetryDelayMs(this.config, requestConfig)
      .setResponseValidation(this.config, requestConfig)
      .addPathParam({
        key: 'api_version',
        value: apiVersion,
      })
      .build();
    return this.client.call<string>(request);
  }

  /**
 * ### Overview
Gets most recent 100 changelogs from [https://feedback.torbox.app/changelog.](https://feedback.torbox.app/changelog.) This is useful for developers who want to integrate the changelog into their apps for their users to see. Includes content in HTML and markdown for developers to easily render the text in a fancy yet simple way.

### Authorization

None needed.
 * @param {string} apiVersion - 
 * @param {RequestConfig} requestConfig - (Optional) The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<GetChangelogsJsonOkResponse>>} Get Changelogs JSON Success
 */
  async getChangelogsJson(
    apiVersion: string,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<GetChangelogsJsonOkResponse>> {
    const request = new RequestBuilder()
      .setBaseUrl(requestConfig?.baseUrl || this.config.baseUrl || this.config.environment || Environment.DEFAULT)
      .setConfig(this.config)
      .setMethod('GET')
      .setPath('/{api_version}/api/changelogs/json')
      .setRequestSchema(z.any())
      .addAccessTokenAuth(this.config.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: getChangelogsJsonOkResponseResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .setRetryAttempts(this.config, requestConfig)
      .setRetryDelayMs(this.config, requestConfig)
      .setResponseValidation(this.config, requestConfig)
      .addPathParam({
        key: 'api_version',
        value: apiVersion,
      })
      .build();
    return this.client.call<GetChangelogsJsonOkResponse>(request);
  }
}
