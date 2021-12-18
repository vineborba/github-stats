import { Link } from "remix";

interface Props {
  username: string;
  name?: string;
  description?: string;
  avatar?: string;
}

export default function Card({ username, name, description, avatar }: Props) {
  return (
    <Link to={`/stats/${username}`}>
      <article className="bg-paper p-2 rounded-2xl">
        <div className="bg-slate-500 rounded">
          {avatar && <img src={avatar} alt="avatar" />}
        </div>
        <p className="text-white py-2">{username}</p>
      </article>
    </Link>
  );
}
