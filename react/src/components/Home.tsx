import { useEffect, useState } from 'react';
import { GymCard, GymCardProps } from './GymCard';
import { API } from '../api';
import {BoulderCard} from "./BoulderCard";
import {DeviceCard} from "./DeviceCard";

export function Home() {
  const [gyms, setGyms] = useState<GymCardProps[]>([]);

  const fetchGyms = async () => {
    const { data } = await API.get('/gym/');
    // console.warn(data);
    setGyms(data);
  };

  useEffect(() => {
    fetchGyms();
  }, []);

  // State to track whether the input form should be displayed
  const [showForm, setShowForm] = useState(false);

  // State to track the input value
  const [inputValue, setInputValue] = useState('');

  // Function to handle button click and toggle the display of the input form
  const addRule = () => {
    setShowForm(!showForm); // Toggle the state
  };

  // Function to handle input change and update the input value
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Do something with the input value, for example, log it to the console
    console.log('Input value:', inputValue);
    // Reset the input value
    setInputValue('');
    // Hide the form
    setShowForm(false);
  };


  return (
    <div className="flex justify-center">
      <div className="container">
        <header className="sticky top-0 z-10 bg-base-200">
          <h1 style={{ fontSize: '40px', fontWeight: 'bold' }}>Zozumi eBPF Firewall Managing Application</h1>
          <div className="divider" />
        </header>
        <main>
          {gyms.map(({ id, image, location, name }) => (
            <GymCard id={id} image={image} location={location} name={name} />
          ))}
          <div>
            <button className="btn-primary btn">Show all rules</button>
            <button className="btn-primary btn" onClick={addRule}>Add rule</button>
            {showForm && (
              <div className="card w-full max-w-sm shrink-0 bg-base-100 shadow-2xl">
              <form className="card-body" onSubmit={handleSubmit}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Addictional comment</span>
                  </label>
                  <input
                    type="text"
                    placeholder="addictional comment"
                    className="input-bordered input"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Rule name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="rule name"
                    className="input-bordered input"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Action</span>
                  </label>
                  <input
                    type="text"
                    placeholder="action"
                    className="input-bordered input"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Protocol</span>
                  </label>
                  <input
                    type="text"
                    placeholder="protocol"
                    className="input-bordered input"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Source IP</span>
                  </label>
                  <input
                    type="text"
                    placeholder="source ip"
                    className="input-bordered input"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Destination IP</span>
                  </label>
                  <input
                    type="text"
                    placeholder="destination ip"
                    className="input-bordered input"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Source Port</span>
                  </label>
                  <input
                    type="text"
                    placeholder="source port"
                    className="input-bordered input"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Destination Port</span>
                  </label>
                  <input
                    type="text"
                    placeholder="destination port"
                    className="input-bordered input"
                  />
                </div>
                <br/>
                <button className="btn-primary btn" type="submit">Submit</button>
              </form>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
