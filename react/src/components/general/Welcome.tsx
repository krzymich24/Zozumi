import { Link } from 'react-router-dom';
import Background from '../../assets/img/firewall-welcome.jpeg';
import React from "react";

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
          <h1 className="mb-5 text-5xl font-bold">Zozumi eBPF Firewall Manager</h1>
          <Link to="/auth/login" className="link-hover label-text-alt link">
            {/* eslint-disable-next-line react/button-has-type */}
            <button className="btn-primary btn">Log in</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
