import { InputHTMLAttributes } from 'react';
import { FaSearch } from 'react-icons/fa';

type Props = InputHTMLAttributes<HTMLInputElement>;

const defaultProps = {};

const Searchbar = ({ ...rest }: Props) => (
  <div className="flex items-center">
    <input
      type="text"
      name="q"
      className="h-10 pl-3 text-white bg-secondary border-4 outline-none rounded-l-3xl border-primary"
      {...rest}
    />
    <button type="submit" className="p-3 block rounded-r-3xl bg-primary">
      <FaSearch color="white" />
    </button>
  </div>
);

Searchbar.defaultProps = defaultProps;

export default Searchbar;
