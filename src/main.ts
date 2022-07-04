import '@unocss/reset/tailwind.css';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <p>Hello world!</p>
  <p>current build hash: ${GIT_COMMIT_HASH}</p>
`;
