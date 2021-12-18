import octocat from "../assets/images/octocat.png";

const IndexRoute = () => (
  <main>
    <section className="w-full bg-paper py-8">
      <div className="max-w-screen-lg mx-auto flex flex-row justify-between">
        <h1 className="text-white">Veja seus status no GitHub!</h1>
        <img src={octocat} alt="octocat" />
      </div>
    </section>
  </main>
);

export default IndexRoute;
