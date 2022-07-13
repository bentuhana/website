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
        <img class="album-cover" width="48" height="48" />
        <p class="song-info"></p>
      </div>
    </div>
  </div>
`;

lanyard({
  userId: '990330297377755138',
  presenceUpdate: (data) => {
    const spotifyDiv = document.querySelector<HTMLDivElement>('div.spotify')!,
      spotifyAlbumCoverEl = document.querySelector<HTMLImageElement>(
        'div.spotify > div.info > img'
      )!,
      spotifySongInfo = document.querySelector<HTMLLinkElement>(
        'div.spotify > div.info > p.song-info'
      )!;

    document.body.setAttribute('discord-status', data.discord_status);

    if (data.spotify) {
      spotifyDiv.setAttribute('listening', '');
      spotifyAlbumCoverEl.src = data.spotify.album_art_url;
      spotifySongInfo.innerHTML = `<a href="https://open.spotify.com/track/${
        data.spotify.track_id
      }" target="_blank">${data.spotify.song}</a> by <a>${data.spotify.artist
        .split('; ')
        .map(
          (artist) =>
            `<a href="https://open.spotify.com/search/${artist}" target="_blank">${artist}</a>`
        )
        .join(', ')}</a> on <a href="https://open.spotify.com/search/${
        data.spotify.album
      }">${data.spotify.album}</a> album`;
    } else {
      spotifyDiv.removeAttribute('listening');
      spotifyAlbumCoverEl.src = '/spotify-logo.svg';
      spotifySongInfo.textContent =
        "oh no, listening to nothing? how's that possible";
    }
  },
});
