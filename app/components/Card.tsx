import { Link } from 'remix';

interface Props {
  username: string;
  avatar?: string;
  className?: string;
}

const defaultProps = {
  avatar: '',
  className: '',
};

const Card = ({ username, avatar, className }: Props) => {
  return (
    <article className={`bg-paper p-2 rounded-2xl w-fit ${className}`}>
      <Link to={`/stats/${username}`}>
        <div className="bg-slate-500 rounded-t min-w-[216px] min-h-[216px] flex justify-center items-center">
          {avatar ? (
            <img src={avatar} alt="avatar" className="rounded-t" />
          ) : (
            <div className="rounded-full h-28 w-28 bg-secondary">
              <h1>{username[0].toUpperCase()}</h1>
            </div>
          )}
        </div>
        <h3 className="text-white py-2">{username}</h3>
      </Link>
    </article>
  );
};

Card.defaultProps = defaultProps;

export default Card;
