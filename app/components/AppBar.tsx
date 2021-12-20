import { Link, Form } from 'remix';
import SearchBar from './Searchbar';

const AppBar = () => (
  <header className="lg:px-12 px-8 py-4 min-h-[156px] grid sm:grid-cols-2 grid-cols-1">
    <Link to="/" className="flex flex-row">
      <h1 className="text-primary font-[Roboto]">GitHub&nbsp;</h1>
      <h1 className="text-secondary font-[Roboto]">Stats</h1>
    </Link>
    <Form action="/results" method="get" className="p-0">
      <SearchBar />
    </Form>
  </header>
);

export default AppBar;
