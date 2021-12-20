export default {
  users: `${process.env.GH_BASE_URL}/users`,
  repos: `${process.env.GH_BASE_URL}/repositories`,
  stats: `${process.env.STATS_BASE_URL}?theme=midnight-purple`,
  langs: `${process.env.STATS_BASE_URL}/top-langs?layout=compact&theme=midnight-purple`,
  repoPins: `${process.env.STATS_BASE_URL}/pin?theme=midnight-purple`,
};
