// Lanyard interface
export interface LanyardData {
  /**
   * @description Spotify object if listening to
   */
  spotify: Spotify | null;
  /**
   * @description Is user listening to spotify?
   */
  listening_to_spotify: boolean;
  /**
   * @description Lanyard's key/value object
   */
  kv: Record<string, string>;
  /**
   * @description Discord user object
   */
  discord_user: DiscordUser;
  /**
   * @description User status
   */
  discord_status: 'online' | 'idle' | 'dnd' | 'offline';
  /**
   * @description Activities of user
   */
  activities: Activity[];
  /**
   * @description Is user active on Discord web?
   */
  active_on_discord_web: boolean;
  /**
   * @description Is user active on Discord mobile?
   */
  active_on_discord_mobile: boolean;
  /**
   * @description Is user active on Discord desktop?
   */
  active_on_discord_desktop: boolean;
}

export interface Spotify {
  /**
   * @description Playing song's track Id
   */
  track_id: string;
  /**
   * @description Playing song's start and end timestamp
   */
  timestamps: Timestamps;
  /**
   * @description Name of the song
   */
  song: string;
  /**
   * @description Artist of the song
   */
  artist: string;
  /**
   * @description Album art URL of the song
   */
  album_art_url: string;
  /**
   * @description Album of the song
   */
  album: string;
}

export interface DiscordUser {
  /**
   * @description Username of the user
   */
  username: string;
  /**
   * @description Public [user flags](https://discord.com/developers/docs/resources/user#user-object-user-flags) of the user
   */
  public_flags: number;
  /**
   * @description Id of the user
   */
  id: string;
  /**
   * @description Discriminator of the user
   */
  discriminator: string;
  /**
   * @description Is user bot?
   */
  bot: boolean;
  /**
   * @description Avatar of the user. Null if no avatar
   */
  avatar: string | null;
}

export interface Activity {
  /**
   * @description Type of the activity. Activity types:
   * - 0 = Playing
   * - 1 = Streaming
   * - 2 = Listening
   * - 3 = Watching
   * - 4 = Custom
   * - 5 = Competing
   */
  type: 0 | 1 | 2 | 3 | 4 | 5;
  /**
   * @description Activity's start and end timestamp
   */
  timestamps?: Timestamps;
  /**
   * @description State text of the activity
   */
  state?: string;
  /**
   * @description Name of the activity
   */
  name: string;
  /**
   * @description Id of the activity
   */
  id: string;
  /**
   * @description Details text of the activity
   */
  details?: string;
  /**
   * @description Emoji object of the custom activity
   */
  emoji?: Emoji;
  /**
   * @description Start time of the activity
   */
  created_at: number;
  /**
   * @description Buttons of the activity
   */
  buttons?: string[];
  /**
   * @description Session Id of the activity
   */
  session_id?: string;
  /**
   * @description Assets of the activity
   */
  assets?: Assets;
  /**
   * @description Application Id of the activity
   */
  application_id?: string;
}

export interface Timestamps {
  /**
   * @description Start timestamp
   */
  start: number;
  /**
   * @description End timestamp
   */
  end?: number;
}

export interface Assets {
  /**
   * @description Hover text of the small image
   */
  small_text?: string;
  /**
   * @description Small image URL
   */
  small_image?: string;
  /**
   * @description Hover text of the large image
   */
  large_text?: string;
  /**
   * @description Large image URL
   */
  large_image: string;
}

export interface Emoji {
  /**
   * @description Emoji or emoji name if custom
   */
  name: string;
  /**
   * @description Emoji Id if custom
   */
  id?: string;
  /**
   * @description Is custom emoji animated?
   */
  animated?: boolean;
}
