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
        <div className="bg-slate-500 rounded-t">
          {avatar && <img src={avatar} alt="avatar" className="rounded-t" />}
        </div>
        <h3 className="text-white py-2">{username}</h3>
      </Link>
    </article>
  );
};

Card.defaultProps = defaultProps;

export default Card;
