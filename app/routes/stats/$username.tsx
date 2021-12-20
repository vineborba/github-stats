import { LoaderFunction, useLoaderData, useParams } from 'remix';
import { getLanguagesUrl, getRepoUrl, getStatsUrl } from '../../utils';
import endpoints from '../../api/endpoints';
import { IRepo } from '../../interfaces/Repository';

export const loader: LoaderFunction = async ({ params }) => {
  const { username } = params;
  const query = `?per_page=4&q=${encodeURIComponent(`user:${username}`)}`;
  const completeUrl = endpoints.repos + query;
  const response = await fetch(completeUrl, {
    headers: {
      accept: ' application/vnd.github.v3+json',
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
    <div className="px-4 xl:px-0">
      <h1 className="text-white mb-4">
        Status de <strong>{params.username}</strong>
      </h1>
      <section className="w-full bg-paper grid md:grid-cols-2 grid-cols-1 sm:gap-4 gap-2 rounded-lg sm:p-4 p-2">
        <img
          src={getStatsUrl(params.username)}
          alt="user stats"
          className="w-full"
        />
        <img
          src={getLanguagesUrl(params.username)}
          alt="user top languages"
          className="w-full"
        />
      </section>
      <h1 className="text-white my-4">
        Principais repositórios de <strong>{params.username}</strong>
      </h1>
      <section className="w-full bg-paper grid md:grid-cols-2 grid-cols-1 sm:gap-4 gap-2 rounded-lg sm:p-4 p-2">
        {repos.map((repo) => {
          if (!params.username) {
            return null;
          }
          return (
            <img
              src={getRepoUrl(params.username, repo.name)}
              alt="repo pin"
              className="w-full"
            />
          );
        })}
      </section>
    </div>
  );
};

export default StatsIndex;
