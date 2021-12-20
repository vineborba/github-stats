import { LoaderFunction, useLoaderData } from 'remix';
import octocat from '../assets/images/octocat.png';
import endpoints from '../api/endpoints';
import Card from '../components/Card';
import { getStatsUrl } from '../utils';
import { IUserData } from '../interfaces/User';

export const loader: LoaderFunction = async () => {
  const query = `?per_page=4&q=${encodeURIComponent('type:user')}`;
  const completeUrl = endpoints.users + query;
  const response = await fetch(completeUrl, {
    headers: {
      accept: ' application/vnd.github.v3+json',
    },
  });
  const responseJson = await response.json();
  return responseJson.items;
};

const IndexRoute = () => {
  const data = useLoaderData<IUserData[]>();

  return (
    <main className="pb-4">
      <section className="w-full bg-paper py-8 px-4 lg:px-0">
        <div className="max-w-screen-lg mx-auto grid grid-cols-1 sm:grid-cols-2">
          <div>
            <h1 className="text-white">Veja seus status no GitHub!</h1>
            <h3 className="text-tertiary mt-4">
              Pesquise pelo nome do usuário que deseja saber as estatísticas!
            </h3>
            {!!data.length && (
              <img
                className="mt-2"
                src={getStatsUrl(data[0].login)}
                alt="top user stats"
              />
            )}
          </div>
          <img
            src={octocat}
            alt="octocat"
            className="justify-self-end hidden sm:block"
          />
        </div>
      </section>
      <section className="mt-4">
        <div className="max-w-screen-lg mx-auto px-4 lg:px-0">
          <h1 className="text-white mb-2">Lista dos top usuários:</h1>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4">
            {data.map((user) => (
              <Card
                username={user.login}
                avatar={user.avatar_url}
                key={user.login}
                className="justify-self-center"
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default IndexRoute;
