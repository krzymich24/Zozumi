import { useState } from 'react';
import { API } from '../../api';

export function SignIn() {
  const [username, setUsername] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [email, setEmail] = useState<string>();

  const sign = async () => {
    try {
      console.log('Mail:', email);
      console.log('Username:', username);
      console.log('Password:', password);
      const { data } = await API.post('/person/register', { username, email, password });
      console.log(data);
    } catch (e) {
      console.error((e as Error).message);
    }
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card w-full max-w-sm shrink-0 bg-base-100 shadow-2xl">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input-bordered input"
                required
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Username</span>
              </label>
              <input
                type="text"
                placeholder="username"
                className="input-bordered input"
                required
                onChange={(event) => {
                  setUsername(event.target.value);
                }}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input-bordered input"
                required
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn-primary btn" onClick={sign}>
                Register Now!
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
