import { LoaderFunction, useLoaderData, useSearchParams } from "remix";
import Card from "../components/Card";

const GH_BASE_URL = "https://api.github.com/search/users";

interface UserData {
  login: string;
  avatar_url: string;
}

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const searchParam = url.searchParams.get("q");
  const query =
    `?per_page=8&q=${encodeURIComponent(`${searchParam} in:login type:user`)}`;
  const completeUrl = GH_BASE_URL + query;
  const response = await fetch(completeUrl, {
    headers: {
      accept: " application/vnd.github.v3+json",
    },
  });
  const responseJson = await response.json();

  return responseJson.items;
};

export default function Results() {
  const [params] = useSearchParams();
  const data = useLoaderData<UserData[]>();

  return (
    <main className="max-w-screen-lg mx-auto">
      <h1 className="text-white">{`Resultados da busca por ${params.get(
        "q"
      )}:`}</h1>
      <section className="w-full bg-paper grid grid-cols-4 gap-4 rounded-lg p-4">
        {data.map((item) => (
          <Card
            username={item.login}
            key={item.login}
            avatar={item.avatar_url}
          />
        ))}
      </section>
    </main>
  );
}
