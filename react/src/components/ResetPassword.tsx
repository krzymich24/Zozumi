import { useState } from 'react';
import { useParams } from "react-router-dom";
import { API } from "../api";

export function ResetPassword() {
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
    <div className="hero min-h-screen bg-base-200">
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
    </div>
  );
}
