import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ClimbingBoxLoader } from 'react-spinners';
import { API } from '../../api';

export function ActivateProfile() {
  const { token } = useParams();
  const [isFinished, setIsFinished] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    API.put(`/person/activate?otp=${token}`)
      .then(() => {
        setTimeout(() => setIsFinished(true), 30_000);
      })
      .catch((e) => {
        setError(e.message);
      });
  }, []);

  return (
    <div
      className="hero min-h-screen bg-base-200"
      style={{
        backgroundImage:
          'url(https://assets.gqindia.com/photos/611e3b614a83577ac4e82354/16:9/w_2560%2Cc_limit/indoor%252520rock%252520climbing.jpg)',
      }}
    >
      <div className="hero-overlay bg-opacity-75" />

      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Creating your account</h1>
          <p className="py-6">Wait a sec while we set up yur account!</p>
        </div>

        <div className="card h-32 w-full max-w-sm items-center justify-center bg-base-100 p-3 shadow-2xl">
          {isFinished ? (
            <>
              {error.length > 0 ? (
                <div role="alert" className="alert alert-error">
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
                      d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>{error}</span>
                </div>
              ) : (
                <>
                  <span>All went well. Go ahead, hop in!</span>

                  <Link to="/auth/login">
                    <button className="btn-success btn my-3">Go to login</button>
                  </Link>
                </>
              )}
            </>
          ) : (
            <ClimbingBoxLoader />
          )}
        </div>
      </div>
    </div>
  );
}
