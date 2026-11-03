import { MainApiSdk } from 'main-api-sdk';

(async () => {
  const mainApiSdk = new MainApiSdk({
    token: 'YOUR_TOKEN',
  });

  const data = await mainApiSdk.mainApiSdk.getUpStatus();

  console.log(data);
})();
