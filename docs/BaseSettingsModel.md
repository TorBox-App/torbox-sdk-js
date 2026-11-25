
# BaseSettingsModel


## Properties

Name | Type
------------ | -------------
`email_notifications` | boolean
`web_notifications` | boolean
`mobile_notifications` | boolean
`rss_notifications` | boolean
`download_speed_in_tab` | boolean
`show_tracker_in_torrent` | boolean
`stremio_quality` | Array&lt;number&gt;
`stremio_resolution` | Array&lt;number&gt;
`stremio_language` | Array&lt;number&gt;
`stremio_cache` | Array&lt;number&gt;
`stremio_size_lower` | number
`google_drive_folder_id` | string
`onedrive_save_path` | string
`discord_id` | string
`discord_notifications` | boolean
`stremio_allow_adult` | boolean
`stremio_seed_torrents` | number
`seed_torrents` | number
`allow_zipped` | boolean
`stremio_allow_zipped` | boolean
`onefichier_folder_id` | string
`gofile_folder_id` | string
`webhook_notifications` | boolean
`webhook_url` | string
`telegram_notifications` | boolean
`telegram_id` | string
`mega_email` | string
`mega_password` | string
`stremio_sort` | string
`cdn_selection` | string
`stremio_use_custom_search_engines` | boolean
`stremio_result_sort` | string
`webdav_use_local_files` | boolean
`stremio_legacy_your_media` | boolean
`stremio_only_your_media_streams` | boolean
`stremio_disable_your_media_streams` | boolean
`webdav_use_folder_view` | boolean
`webdav_flatten` | boolean
`stremio_limit_per_resolution_torrent` | number
`stremio_limit_per_resolution_usenet` | number
`stremio_size_upper` | number
`stremio_torrent_seeders_cutoff` | number
`pixeldrain_api_key` | string
`onefichier_api_key` | string
`gofile_api_key` | string
`patreon_id` | string
`stremio_wait_for_download_usenet` | boolean
`stremio_wait_for_download_torrent` | boolean
`stremio_disable_filtered_note` | boolean
`stremio_emoji_in_description` | boolean
`dashboard_filter` | { [key: string]: any; }
`web_player_always_transcode` | boolean
`web_player_always_skip_intro` | boolean
`web_player_audio_preferred_language` | string
`web_player_subtitle_preferred_language` | string
`web_player_disable_prestream_selector` | boolean
`dashboard_sort` | string
`web_player_disable_next_up_dialogue` | boolean
`web_player_enable_scrobbling` | boolean
`append_filename_to_links` | boolean
`subscribed_email_segments` | Array&lt;string&gt;
`disable_ai` | boolean

## Example

```typescript
import type { BaseSettingsModel } from '@torbox/torbox-api'

// TODO: Update the object below with actual values
const example = {
  "email_notifications": null,
  "web_notifications": null,
  "mobile_notifications": null,
  "rss_notifications": null,
  "download_speed_in_tab": null,
  "show_tracker_in_torrent": null,
  "stremio_quality": null,
  "stremio_resolution": null,
  "stremio_language": null,
  "stremio_cache": null,
  "stremio_size_lower": null,
  "google_drive_folder_id": null,
  "onedrive_save_path": null,
  "discord_id": null,
  "discord_notifications": null,
  "stremio_allow_adult": null,
  "stremio_seed_torrents": null,
  "seed_torrents": null,
  "allow_zipped": null,
  "stremio_allow_zipped": null,
  "onefichier_folder_id": null,
  "gofile_folder_id": null,
  "webhook_notifications": null,
  "webhook_url": null,
  "telegram_notifications": null,
  "telegram_id": null,
  "mega_email": null,
  "mega_password": null,
  "stremio_sort": null,
  "cdn_selection": null,
  "stremio_use_custom_search_engines": null,
  "stremio_result_sort": null,
  "webdav_use_local_files": null,
  "stremio_legacy_your_media": null,
  "stremio_only_your_media_streams": null,
  "stremio_disable_your_media_streams": null,
  "webdav_use_folder_view": null,
  "webdav_flatten": null,
  "stremio_limit_per_resolution_torrent": null,
  "stremio_limit_per_resolution_usenet": null,
  "stremio_size_upper": null,
  "stremio_torrent_seeders_cutoff": null,
  "pixeldrain_api_key": null,
  "onefichier_api_key": null,
  "gofile_api_key": null,
  "patreon_id": null,
  "stremio_wait_for_download_usenet": null,
  "stremio_wait_for_download_torrent": null,
  "stremio_disable_filtered_note": null,
  "stremio_emoji_in_description": null,
  "dashboard_filter": null,
  "web_player_always_transcode": null,
  "web_player_always_skip_intro": null,
  "web_player_audio_preferred_language": null,
  "web_player_subtitle_preferred_language": null,
  "web_player_disable_prestream_selector": null,
  "dashboard_sort": null,
  "web_player_disable_next_up_dialogue": null,
  "web_player_enable_scrobbling": null,
  "append_filename_to_links": null,
  "subscribed_email_segments": null,
  "disable_ai": null,
} satisfies BaseSettingsModel

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BaseSettingsModel
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


