import { execSync } from 'child_process';

export default {
  GIT_BRANCH: JSON.stringify(
    execSync('git rev-parse --abbrev-ref HEAD').toString().trim()
  ),
  GIT_LAST_COMMIT_HASH: JSON.stringify(
    execSync('git rev-parse HEAD').toString().trim().slice(0, 7)
  ),
  REPO_URL: JSON.stringify('https://github.com/bentuhana/website'),
};
