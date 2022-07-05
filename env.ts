import { execSync } from 'child_process';

export const GIT_BRANCH = JSON.stringify(
  execSync('git branch --show-current').toString().trim()
);
export const GIT_COMMIT_HASH = JSON.stringify(
  execSync(`git rev-parse ${GIT_BRANCH !== 'main' ? GIT_BRANCH : 'HEAD'}`)
    .toString()
    .trim()
    .slice(0, 7)
);
export const REPO_URL = 'https://github.com/bentuhana/website';
