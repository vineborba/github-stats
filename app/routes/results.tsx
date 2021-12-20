import { LoaderFunction, useLoaderData, useSearchParams } from 'remix';
import { IUserData } from '../interfaces/User';
import endpoints from '../api/endpoints';
import Card from '../components/Card';

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const searchParam = url.searchParams.get('q');
  const query = `?per_page=8&q=${encodeURIComponent(
    `${searchParam} in:login type:user`,
  )}`;
  const completeUrl = endpoints.users + query;
  const response = await fetch(completeUrl, {
    headers: {
      accept: ' application/vnd.github.v3+json',
    },
  });
  const responseJson = await response.json();

  return responseJson.items;
};

export default function Results() {
  const [params] = useSearchParams();
  const data = useLoaderData<IUserData[]>();

  return (
    <main className="max-w-screen-lg h-full mx-auto px-2 mg:px-0">
      <h1 className="text-white">
        Resultados da busca por <strong>{params.get('q')}</strong>:
      </h1>
      <section className="w-full bg-paper mt-4 grid lg:grid-cols-4 sm:grid-cols-2 gap-4 rounded-lg p-4">
        {data.map((item) => (
          <Card
            username={item.login}
            key={item.login}
            avatar={item.avatar_url}
            className="justify-self-center"
          />
        ))}
      </section>
    </main>
  );
}
