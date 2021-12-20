import endpoints from '../api/endpoints';

export const getLanguagesUrl = (username: string) =>
  `${endpoints.langs}&username=${username}`;

export const getStatsUrl = (username: string) =>
  `${endpoints.stats}&username=${username}`;

export const getRepoUrl = (username: string, repo: string) =>
  `${endpoints.repoPins}&username=${username}&repo=${repo}`;
