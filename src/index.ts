import { Environment } from './http/environment';
import { SdkConfig } from './http/types';
import { MainApiSdkService } from './services/main-api-sdk';

export * from './services/main-api-sdk';

export * from './http';
export { Environment } from './http/environment';

export class MainApiSdk {
  public readonly mainApiSdk: MainApiSdkService;

  constructor(public config: SdkConfig = {}) {
    this.mainApiSdk = new MainApiSdkService(this.config);
  }

  set baseUrl(baseUrl: string) {
    this.mainApiSdk.baseUrl = baseUrl;
  }

  set environment(environment: Environment) {
    this.mainApiSdk.baseUrl = environment;
  }

  set timeoutMs(timeoutMs: number) {
    this.mainApiSdk.timeoutMs = timeoutMs;
  }

  set token(token: string) {
    this.mainApiSdk.token = token;
  }
}
