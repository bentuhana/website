// TailwindCSS' preflight
import '@unocss/reset/tailwind.css';
// Main styling
import './styles/style.scss';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <nav class="navbar">
    <h1 class="prompt">
      <a class="folder" href="${
        GIT_BRANCH !== 'main' ? `${REPO_URL}/tree/${GIT_BRANCH}` : REPO_URL
      }" target="_blank">website</a>
      <span class="git-suffix">git:(<a class="content" href="${REPO_URL}/commit/${GIT_LAST_COMMIT_HASH}" target="_blank">${GIT_BRANCH}#${GIT_LAST_COMMIT_HASH}</a>)</span>
    </h1>
  </nav>
  <hr />
`;
