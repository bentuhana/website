// TailwindCSS' preflight
import '@unocss/reset/tailwind.css';
// Main styling
import './styles/style.scss';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <p>Hello world!</p>
  <p>current build hash: ${GIT_COMMIT_HASH}</p>
`;
