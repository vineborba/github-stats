export default {
  users: `${process.env.GH_BASE_URL}/users`,
  repos: `${process.env.GH_BASE_URL}/repositories`,
  stats: process.env.STATS_BASE_URL,
  langs: `${process.env.STATS_BASE_URL}/top-langs`,
  repoPins: `${process.env.STATS_BASE_URL}/pin`,
};
