import { Link } from 'react-router-dom';
import * as _ from 'lodash';
import React from 'react';
import { useAuth } from '../../useAuth.hooks';

function AdminButton({ linksTo, text }: { linksTo: string; text: string }) {
  const { auth } = useAuth();
  // eslint-disable-next-line react/jsx-no-useless-fragment
  if (!auth?.isAdmin) return <></>;

  return (
    <Link to={linksTo} className="link-hover label-text-alt link">
      <button className="btn-primary btn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="mr-2 h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z"
          />
        </svg>
        {text}
      </button>
    </Link>
  );
}

export function Header() {
  const { auth, unauthorize } = useAuth();

  return (
    <header className="navbar bg-base-100">
      <div className="flex-1">
        <Link to="/home">
          <p className="btn-ghost btn text-xl normal-case">Zozumi</p>
        </Link>
      </div>
      {_.isNull(auth) ? (
        <button />
      ) : (
        <div className="flex-none gap-2">
          <button className="btn-ghost btn-circle btn">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              <span className="badge-primary badge badge-xs indicator-item" />
            </div>
          </button>
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn-ghost btn-circle btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu-sm dropdown-content menu rounded-box z-[1] mt-3 w-52 bg-base-100 p-2 shadow"
                style={{ marginLeft: '-105px' }}
              >
                <li>
                  <Link to="/home">Home</Link>
                </li>
                <li>
                  <Link to="/logs">Logs</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {_.isNull(auth) ? (
        <button />
      ) : (
        <div className="dropdown-end dropdown">
          <div tabIndex={0} role="button" className="btn-ghost btn-circle avatar btn">
            <div className="w-10 rounded-full">
              <img alt="Avatar unregistered user" src="src/assets/img/Avatar-reg.jpeg" />
            </div>
          </div>
          <ul tabIndex={0} className="menu-sm dropdown-content menu rounded-box z-[1] mt-3 w-52 bg-base-100 p-2 shadow">
            <li>
              <Link to="profile">
                <p>Profile</p>
              </Link>
            </li>
            <li>
              <Link to="/profile/settings">
                <p>Settings</p>
              </Link>
            </li>
            <li>
              <Link to="/logout">
                <p onClick={() => unauthorize()}>Log Out</p>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
