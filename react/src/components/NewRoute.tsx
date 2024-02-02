import { useState } from 'react';
import { Maybe } from 'typescript-functional-extensions';
import { AxiosError } from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { API } from '../api';
import { useAuth } from '../useAuth.hooks';

export function NewRoute() {
  const navigateTo = useNavigate();
  const { getToken } = useAuth();
  const [name, setName] = useState('');
  const [grade, setGrade] = useState('');

  const addRoute = async () => {
    try {
      const { data } = await API.post(
        '/route',
        {
          name,
          grade,
        },
        { headers: { authorization: `Bearer ${getToken()}` } },
      );
      console.log(data);
      window.history.back();
    } catch (e) {
      const message: string = Maybe.from((e as AxiosError)?.response?.data)
        .map((data) => (data as { statusCode: number; message: string; error: string }).message)
        .getValueOrDefault((e as Error).message);
      console.error(message);
    }
  };

  return (
    <div
      className="hero min-h-screen bg-base-200 "
      style={{
        backgroundImage:
          'url(https://images.squarespace-cdn.com/content/v1/5be63c9ed274cb9805e09974/1659050375787-4OZL9927A0ZZF5R8UPFX/Routesetting-at-The-Spot-Climbing-Gym_Light.jpg)',
      }}
    >
      <div className="hero-overlay bg-opacity-60" />

      <div className="hero-content flex-col ">
        <div className="text-center text-base-200 lg:text-left">
          <h1 className="text-5xl font-bold">Create a New Route!</h1>
          {/* <p className="py-6">Log in and get access to full content of this application.</p> */}
        </div>

        <div className="card w-full max-w-sm shrink-0 bg-base-100 shadow-2xl">
          <form
            className="card-body"
            onSubmit={async (e) => {
              e.preventDefault();
              await addRoute();
            }}
          >
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name your route</span>
              </label>
              <input
                type="text"
                placeholder="Route Name"
                className="input-bordered input"
                required
                onChange={(event) => {
                  setName(event.target.value);
                }}
                value={name}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Set a tentative grade</span>
              </label>
              <input
                type="text"
                placeholder="Approx. Grade"
                className="input-bordered input"
                required
                onChange={(event) => {
                  setGrade(event.target.value);
                }}
                value={grade}
              />
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn-primary btn">
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}
