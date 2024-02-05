import { Link, useNavigate, useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { BoulderCard } from '../BoulderCard';
import { GymCardProps } from '../GymCard';
import { API } from '../../api';
import { useAuth } from '../../useAuth.hooks';
import { Boulder } from '../../types/boulder';

export function Settings() {
  return (
    <div className="flex justify-center">
      <div className="container">
        <main style={{ display: 'flex' }}>
          <div style={{ width: 150 }}>
            <ul className="menu bg-base-200 w-40 rounded-box">
              <Link to="/profile">
                <li>
                  <a className="rounded-box">
                    Profile
                  </a>
                </li>
              </Link>
              <Link to="/profile/settings">
                <li>
                  <a className="bg-primary opacity-80 rounded-box">
                    Settings
                  </a>
                </li>
              </Link>
              <Link to="/profile/changePassword">
                <li>
                  <a className="rounded-box">
                    Change Password
                  </a>
                </li>
              </Link>
            </ul>
          </div>
          <div className="hero-content flex-col lg:flex-row-reverse">
            Hi,
          </div>
        </main>
      </div>
    </div>
  );
}
