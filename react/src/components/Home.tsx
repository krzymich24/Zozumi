import { useEffect, useState } from 'react';
import { GymCard, GymCardProps } from './GymCard';
import { API } from '../api';

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
        </main>
      </div>
    </div>
  );
}
