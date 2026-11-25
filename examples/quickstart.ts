// TORBOX_API_KEY=... npx tsx examples/quickstart.ts
import { TorBox, TorBoxError } from '@torbox/torbox-api';

const client = new TorBox({ apiKey: process.env.TORBOX_API_KEY! });
const me = await client.user.getUserData();
console.log('signed in as', me.email);

for await (const t of client.paginate((p) => client.torrents.getTorrentList(p), 100)) {
  console.log(t.id, t.name, t.download_state);
}

try {
  await client.torrents.createTorrent({ magnet: 'magnet:?xt=urn:btih:0000000000000000000000000000000000000000' });
} catch (e) {
  if (e instanceof TorBoxError) console.log('could not add:', e.status, e.error, e.detail);
  else throw e;
}
