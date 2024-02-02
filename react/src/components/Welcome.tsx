import { Link } from 'react-router-dom';
import Background from '../assets/img/Rim_welcome.jpeg';

export function Welcome() {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${Background})`,
      }}
    >
      {/* eslint-disable-next-line tailwindcss/migration-from-tailwind-2 */}
      <div className="hero-overlay bg-opacity-60" />
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Integrated Motorization Platform</h1>
          <p className="mb-5">
            <strong>
              Do you have petrol instead of blood? Or maybe do you just search information about your car? <br />
            </strong>
            In both cases this application in for you!!!!!
          </p>
          <Link to="/home" className="link-hover label-text-alt link">
            {/* eslint-disable-next-line react/button-has-type */}
            <button className="btn-primary btn">Get Started</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
