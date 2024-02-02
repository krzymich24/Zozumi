import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Maybe } from 'typescript-functional-extensions';
import { AxiosError } from 'axios';
import { API } from '../api';

export function NewGym() {
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [address, setAddress] = useState('');
  const navigate = useNavigate();

  const addGym = async () => {
    try {
      const location = address ? `${address}, ${city}` : city;
      const { data } = await API.post('/gym', {
        name,
        location,
      });
      console.log(data);
      navigate('/gym');
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
          <h1 className="text-5xl font-bold">Create a New Gym!</h1>
          {/* <p className="py-6">Log in and get access to full content of this application.</p> */}
        </div>

        <div className="card w-full max-w-sm shrink-0 bg-base-100 shadow-2xl">
          <form
            className="card-body"
            onSubmit={async (e) => {
              e.preventDefault();
              await addGym();
            }}
          >
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name of the Gym</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                className="input-bordered input-primary input w-full max-w-xs"
                onChange={(event) => {
                  setName(event.target.value);
                }}
                value={name}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">City</span>
              </label>
              <input
                type="text"
                placeholder="City"
                className="input-bordered input-primary input w-full max-w-xs"
                onChange={(event) => {
                  setCity(event.target.value);
                }}
                value={city}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">More Precise Address</span>
              </label>
              <input
                type="text"
                placeholder="Address"
                className="input-bordered input-primary input w-full max-w-xs"
                onChange={(event) => {
                  setAddress(event.target.value);
                }}
                value={address}
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
    </div>
  );
}
