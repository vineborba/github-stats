import { LoaderFunction, useLoaderData, useParams } from "remix";
import endpoints from "../../api/endpoints";

const getLanguagesUrl = (username: string) =>
  `${endpoints.langs}?username=${username}&layout=compact&theme=midnight-purple`;

const getStatsUrl = (username: string) =>
  `${endpoints.stats}?username=${username}&theme=midnight-purple`;

const getRepoUrl = (username: string, repo: string) =>
  `${endpoints.repoPins}?username=${username}&repo=${repo}&theme=midnight-purple`;

interface IRepo {
  name: string;
}

export const loader: LoaderFunction = async ({ params }) => {
  const { username } = params;
  const query = `?per_page=4&q=${encodeURIComponent(`user:${username}`)}`;
  const completeUrl = endpoints.repos + query;
  const response = await fetch(completeUrl, {
    headers: {
      accept: " application/vnd.github.v3+json",
    },
  });
  const responseJson = await response.json();

  return responseJson.items;
};

const StatsIndex = () => {
  const params = useParams();
  const repos = useLoaderData<IRepo[]>();

  if (!params.username) {
    return null;
  }

  return (
    <>
      <h1 className="text-white mb-4">{`Status de ${params.username}`}</h1>
      <section className="w-full bg-paper grid grid-cols-2 gap-4 rounded-lg p-4">
        <img src={getStatsUrl(params.username)} alt="user stats" />
        <img src={getLanguagesUrl(params.username)} alt="user top languages" />
      </section>
      <h1 className="text-white my-4">{`Status de ${params.username}`}</h1>
      <section className="w-full bg-paper grid grid-cols-2 gap-4 rounded-lg p-4">
        {repos.map((repo) => {
          if (!params.username) {
            return null;
          }
          return (
            <img src={getRepoUrl(params.username, repo.name)} alt="repo pin" />
          );
        })}
      </section>
    </>
  );
};

export default StatsIndex;
