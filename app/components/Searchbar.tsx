import { InputHTMLAttributes } from "react";
import { FaSearch } from "react-icons/fa";

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

const defaultProps = {};

function Searchbar({ className, ...rest }: Props) {
  return (
    <>
      <input
        type="text"
        name="q"
        className={`h-10 pl-3 text-white bg-secondary border-4 outline-none rounded-l-3xl border-primary`}
        {...rest}
      />
      <button type="submit" className="p-3 block rounded-r-3xl bg-primary">
        <FaSearch color="white" />
      </button>
    </>
  );
}

Searchbar.defaultProps = defaultProps;

export default Searchbar;
