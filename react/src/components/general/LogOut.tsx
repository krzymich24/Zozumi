import { Link, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { GymCard, GymCardProps } from '../GymCard';
import { API } from '../../api';
import Background from '../../assets/img/firewall-logout.jpeg';

export function LogOut() {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${Background})`,
      }}
    >
      <div className="hero-overlay bg-opacity-75" />
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Logged out!</h1>
          <p className="mb-5">Sad to see you go 😢 We hope to see you again soon!</p>
          <Link to="/">
            <button className="btn-primary btn">Back to Zozumi!</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
