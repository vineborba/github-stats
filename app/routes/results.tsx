import { useRef } from 'react';
import { Link, LoaderFunction, useLoaderData, useSearchParams } from 'remix';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import { IUserRequestData } from '../interfaces/User';
import endpoints from '../api/endpoints';
import Card from '../components/Card';

const PAGE_TOTAL = 8;

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const searchParam = url.searchParams.get('q');
  const page = url.searchParams.get('page');
  const query = `?per_page=${PAGE_TOTAL}&page=${page}&q=${encodeURIComponent(
    `${searchParam} in:login type:user`,
  )}`;
  const completeUrl = endpoints.users + query;
  const response = await fetch(completeUrl, {
    headers: {
      accept: ' application/vnd.github.v3+json',
    },
  });

  const responseJson = await response.json();

  return responseJson;
};

export default function Results() {
  const [params] = useSearchParams();
  const data = useLoaderData<IUserRequestData>();
  const page = useRef(Number(params.get('page'))).current;
  const query = useRef(params.get('q')).current;

  return (
    <main className="max-w-screen-lg h-full mx-auto px-2 mg:px-0">
      <h1 className="text-white">Resultados da busca:</h1>
      <section className="w-full bg-paper mt-4 grid lg:grid-cols-4 sm:grid-cols-2 gap-4 rounded-lg p-4">
        {data.items.map((item) => (
          <Card
            username={item.login}
            key={item.login}
            avatar={item.avatar_url}
            className="justify-self-center"
          />
        ))}
      </section>
      <div className="flex flex-row justify-center items-center my-4">
        {page > 1 && (
          <Link
            to={`/results?q=${query}&page=${page - 1}`}
            className="text-white pr-2 hover:text-secondary"
          >
            <FaChevronLeft />
          </Link>
        )}
        {Array.from(
          { length: Math.ceil(data.total_count / PAGE_TOTAL) },
          (_, i) => i + 1,
        )
          .slice(page > 2 ? page - 3 : 0, page > 2 ? page + 2 : 5)
          .map((el) => (
            <Link
              to={`/results?q=${query}&page=${el}`}
              className={`px-2 ${
                el === page ? 'text-primary' : 'text-white'
              } hover:text-secondary`}
            >
              {el}
            </Link>
          ))}
        {data.total_count > PAGE_TOTAL && (
          <Link
            to={`/results?q=${query}&page=${page + 1}`}
            className="text-white pl-2 hover:text-secondary"
          >
            <FaChevronRight />
          </Link>
        )}
      </div>
    </main>
  );
}
