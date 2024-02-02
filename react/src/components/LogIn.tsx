import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AxiosError } from 'axios';
import { Maybe } from 'typescript-functional-extensions';
import { AuthService } from '../services/auth';
import { useAuth } from '../useAuth.hooks';
import Background from '../assets/img/Car_login.jpeg';

export function LogIn() {
  const [username, setUsername] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [error, setError] = useState<string>('');

  const { auth, saveAuth } = useAuth();
  const navigate = useNavigate();

  // eslint-disable-next-line consistent-return
  const login = async () => {
    try {
      setError('');
      console.log({ username, password });
      if (!username || !password) return alert('You need to provide both username and password.');
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      // const { data } = await API.put(`/person/login?username=${username}&password=${password}`);
      // console.log(data);
      const token = await AuthService.login(username, password);
      saveAuth(token);
      return navigate('/home');
    } catch (e) {
      const message: string = Maybe.from((e as AxiosError)?.response?.data)
        .map((data) => (data as { statusCode: number; message: string; error: string }).message)
        .getValueOrDefault((e as Error).message);
      console.error(message);
      setError(message);
    }
  };

  return (
    <div
      className="hero min-h-screen bg-base-200"
      style={{
        backgroundImage: `url(${Background})`,
      }}
    >
      <div className="hero-overlay bg-opacity-75" />

      <div className="hero-content flex-col ">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">Log in and get access to full content of this application.</p>
        </div>
        {/* <div> */}
        {error && (
          <div className="alert alert-error mb-3 max-w-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 shrink-0 stroke-current"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
            <span className="label-text-login">{error}</span>
          </div>
        )}

        <div className="card w-full max-w-sm shrink-0 bg-base-100 shadow-2xl">
          <form className="card-body" onSubmit={(e) => e.preventDefault()}>
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
              <label className="label">
                <Link to="../recovery" className="link-hover label-text-alt link">
                  I forgor my password?
                </Link>
                ·
                <Link to="../register" className="link-hover label-text-alt link">
                  I ain&rsquo;t got no account?
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn-primary btn" onClick={login}>
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}
