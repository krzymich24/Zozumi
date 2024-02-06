import { Link } from 'react-router-dom';

export interface DeviceCardProps {
  id: string;
  name: string;
  ipAddress: string;
  image: string;
  deviceStatus: string;
}

export function DeviceCard({ id, name, ipAddress, image, deviceStatus }: DeviceCardProps) {
  return (
    <div key={`device-${id}`} className="card card-side mb-5 bg-base-100 shadow-xl">
      <figure className="w-1/4">
        {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
        <img src={`src/assets/img/${image}`} width="100px" alt={`${name} Thumbnail Image`} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>
          {/* <span className="indicator-item badge mr-1">modified</span> */}
          {/* <span className="indicator-item badge badge-primary mr-1">new</span> */}
          {ipAddress}
        </p>
        <p>
          {/* <span className="indicator-item badge mr-1">modified</span> */}
          {/* <span className="indicator-item badge badge-primary mr-1">new</span> */}
          {deviceStatus}
        </p>
        <div className="card-actions justify-end">
          <Link to={`/devices/${id}`} className="link-hover label-text-alt link">
            {/* eslint-disable-next-line react/button-has-type */}
            <button className="btn-primary btn">Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
