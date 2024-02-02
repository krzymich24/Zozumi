import React, { useState } from 'react';
import { Link, useParams } from "react-router-dom";
import { API } from "../api";

export function ChangePassword() {
  const { token } = useParams();
  const [password, setPassword] = useState<string>('');

  const setNewPassword = async () => {
    try {
      console.log('Password:', password);
      const { data } = await API.put(`/person/reset?password=${password}&otp=${token}`, { password });
      console.log(data);
    } catch (e) {
      console.error((e as Error).message);
    }
  };

  return (

    <div className="flex justify-center">
      <div className="container">
        <main>
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
                <a className="rounded-box">
                  Settings
                </a>
              </li>
            </Link>
            <Link to="/profile/changePassword">
              <li>
                <a className="bg-primary opacity-80 rounded-box">
                  Change Password
                </a>
              </li>
            </Link>

          </ul>
            <div className="hero-content flex-col lg:flex-row-reverse">
              <div className="card w-full max-w-sm shrink-0 bg-base-100 shadow-2xl">
                <form
                  className="card-body"
                  onSubmit={(e) => {
                    e.preventDefault();
                  }}
                >
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">New password</span>
                    </label>
                    <input
                      type="password"
                      placeholder=""
                      className="input-bordered input"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="form-control mt-6">
                    <button className="btn-primary btn" type="button" onClick={setNewPassword}>
                      Set new password
                    </button>
                  </div>
                </form>
              </div>
            </div>
        </main>
      </div>
    </div>
  );
}
