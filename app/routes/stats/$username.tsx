import { LoaderFunction, useLoaderData } from "remix";
import { useParams } from "remix";

const GH_BASE_URL = "https://api.github.com/search/repositories";

const getLanguagesUrl = (username: string) =>
  `https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=midnight-purple`;

const getStatusUrl = (username: string) =>
  `https://github-readme-stats.vercel.app/api/?username=${username}&theme=midnight-purple`;

const getRepoUrl = (username: string, repo: string) =>
  `https://github-readme-stats.vercel.app/api/pin/?username=${username}&repo=${repo}&theme=midnight-purple`

export let loader: LoaderFunction = async ({ params }) => {
  const { username } = params;
  const query = "?per_page=4&q=" + encodeURIComponent(`user:${username}`);
  const completeUrl = GH_BASE_URL + query;
  const response = await fetch(completeUrl, {
    headers: {
      accept: " application/vnd.github.v3+json",
    },
  });
  const responseJson = await response.json();
  console.log(responseJson);

  return responseJson.items;
};

export default function StatsIndex() {
  const params = useParams();
  const repos = useLoaderData();

  return (
    <>
      <h1 className="text-white mb-4">{`Status de ${params.username}`}</h1>
      <section className="w-full bg-paper grid grid-cols-2 gap-4 rounded-lg p-4">
        <img src={getStatusUrl(params.username!)} />
        <img src={getLanguagesUrl(params.username!)} />
      </section>
      <h1 className="text-white my-4">{`Status de ${params.username}`}</h1>
      <section className="w-full bg-paper grid grid-cols-2 gap-4 rounded-lg p-4">
        {repos.map(repo => (
          <img src={getRepoUrl(params.username!, repo.name)} />
        ))}
      </section>
    </>
  );
}
