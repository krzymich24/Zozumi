import { Link } from 'react-router-dom';

export interface GymCardProps {
  id: string;
  name: string;
  location: string;
  image: string;
}

export function GymCard({ id, name, location, image }: GymCardProps) {
  return (
    <div key={`gym-${id}`} className="card card-side mb-5 bg-base-100 shadow-xl">
      <figure className="w-1/4">
        <img src={`src/assets/img/${image}`} width="100px" alt={`${name} Thumbnail Image`} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>
          {/* <span className="indicator-item badge mr-1">modified</span> */}
          {/* <span className="indicator-item badge badge-primary mr-1">new</span> */}
          {location}
        </p>
        <div className="card-actions justify-end">
          <Link to={`/gym/${id}`} className="link-hover label-text-alt link">
            <button className="btn">details</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
