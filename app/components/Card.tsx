import { Link } from "remix";

interface Props {
  username: string;
  avatar?: string;
}

const defaultProps = {
  avatar: ''
}

const Card = ({ username, avatar }: Props) => (
    <Link to={`/stats/${username}`}>
      <article className="bg-paper p-2 rounded-2xl">
        <div className="bg-slate-500 rounded">
          {avatar && <img src={avatar} alt="avatar" />}
        </div>
        <p className="text-white py-2">{username}</p>
      </article>
    </Link>
  )

Card.defaultProps = defaultProps;

export default Card
