// TailwindCSS' preflight
import '@unocss/reset/tailwind.css';
// Main styling
import './styles/style.scss';

// Lanyard script
import { lanyard } from './scripts/lanyard';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <nav class="navbar">
    <h1 class="prompt">
      <a
        class="folder-text"
        href="${
          GIT_BRANCH !== 'main' ? `${REPO_URL}/tree/${GIT_BRANCH}` : REPO_URL
        }"
        target="_blank"
        >website</a
      >
      <span class="git-suffix"
        >git:(<a
          class="content"
          href="${REPO_URL}/commit/${GIT_LAST_COMMIT_HASH}"
          target="_blank"
          >${GIT_BRANCH}#${GIT_LAST_COMMIT_HASH}</a
        >)</span
      >
    </h1>
  </nav>
  <hr />
  <div class="idk-what-to-call-this">
    <div class="basic-description">
      <h1>i am tuhana</h1>
      <p>
        18 years old front-end developer from Turkey. i do back-end too but mostly
        i play with front-end and its technologies.
      </p>
    </div>
    <div class="spotify">
      <h1>listening to</h1>
      <div class="info">
        <img class="album-cover" src="/spotify-logo.svg" width="80" height="80" />
        <p class="song-info">fetching spotify status...</p>
      </div>
    </div>
  </div>
`;

lanyard({
  userId: '990330297377755138',
  presenceUpdate: (data) => {
    const spotifyAlbumCoverEl = document.querySelector<HTMLImageElement>(
        'div.spotify > div.info > img.album-cover'
      )!,
      spotifySongInfo = document.querySelector<HTMLParagraphElement>(
        'div.spotify > div.info > p.song-info'
      )!;

    const discordAvatarEl = document.querySelector<HTMLImageElement>(
      'div.discord-status > div.info > img.avatar'
    )!;

    document.body.setAttribute('discord-status', data.discord_status);

    if (data.spotify) {
      spotifyAlbumCoverEl.setAttribute('listening', '');
      spotifyAlbumCoverEl.src = data.spotify.album_art_url;
      spotifySongInfo.innerHTML = `<a href="spotify://track/${
        data.spotify.track_id
      }">${data.spotify.song}</a> by<br />${data.spotify.artist
        .split('; ')
        .map((artist) => `<a href="spotify://search/${artist}">${artist}</a>`)
        .join(', ')} on ${
        data.spotify.song === data.spotify.album
          ? `<a href="spotify://track/${data.spotify.track_id}">${data.spotify.album}</a> single`
          : `<a href="spotify://search/${data.spotify.album}">${data.spotify.album}</a> album`
      }`;
    } else {
      spotifyAlbumCoverEl.removeAttribute('listening');
      spotifySongInfo.innerHTML =
        "oh no, listening to.. nothing?<br />how's that even possible???";
    }

    if (data.discord_status !== 'offline') {
      discordAvatarEl.src = `https://cdn.discordapp.com/avatars/${data.discord_user.id}/${data.discord_user.avatar}.webp?size=128`;
    } else {
    }
  },
});
