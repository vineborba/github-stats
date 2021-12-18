import { Link, Form } from "remix";
import SearchBar from "./Searchbar";

export default function AppBar() {
  return (
    <header className="px-12 py-4 min-h-[156px] flex flex-row">
      <Link to="/" className="flex flex-row">
        <h1 className="text-primary font-[Roboto]">GitHub&nbsp;</h1>
        <h1 className="text-secondary font-[Roboto]">Stats</h1>
      </Link>
      <Form
        action="/results"
        method="get"
        className={`p-0 flex items-center mx-auto mb-auto mt-4`}
      >
        <SearchBar />
      </Form>
    </header>
  );
}
