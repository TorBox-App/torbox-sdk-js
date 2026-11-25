// Runs against a Prism mock of the spec: TORBOX_MOCK_URL=http://127.0.0.1:4011 npm test (after npm run build)
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { TorBox, TorBoxError } from '../dist/esm/index.js';

const MOCK = process.env.TORBOX_MOCK_URL ?? 'http://127.0.0.1:4011';
const client = new TorBox({ apiKey: '00000000-0000-4000-8000-000000000001', baseUrl: MOCK, maxRetries: 0, timeoutMs: 10_000 });

test('envelope is unwrapped', async () => {
  const me = await client.user.getUserData();
  assert.ok(me && !('success' in me));
  assert.ok(me.email);
});

test('multipart upload', async () => {
  const data = await client.torrents.createTorrent({ file: new Blob([new Uint8Array([100, 101])]), name: 'test' });
  assert.notEqual(data.torrent_id, undefined);
});

test('download links take the key as token', async () => {
  const link = await client.torrents.requestTorrentDownloadLink({ torrent_id: 1, file_id: 0 });
  assert.equal(typeof link, 'string');
});

test('errors are typed', async () => {
  await assert.rejects(client.user.getUserData({}, { headers: { Prefer: 'code=401' } }), (err) => {
    assert.ok(err instanceof TorBoxError);
    assert.equal(err.status, 401);
    assert.ok(['BAD_TOKEN', 'NO_AUTH'].includes(err.error));
    return true;
  });
});

test('paginate', async () => {
  const items = [];
  for await (const t of client.paginate((p) => client.torrents.getTorrentList(p))) items.push(t);
  assert.ok(Array.isArray(items));
});
