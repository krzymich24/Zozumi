import { Link, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { BoulderCard } from './BoulderCard';
import { GymCardProps } from './GymCard';
import { API } from '../api';
import { useAuth } from '../useAuth.hooks';
import { Boulder } from '../types/boulder';

export function Gym() {
  const { gymId } = useParams();
  const { getToken } = useAuth();
  const [gym, setGym] = useState<GymCardProps>();
  const [boulders, setBoulders] = useState<Boulder[]>([]);
  const [isAllowedToRouteSet, setIsAllowedToRouteSet] = useState<boolean>(false);

  const navigate = useNavigate();

  const fetchGym = async () => {
    if (!gymId) return;

    const { data: props } = await API.get<GymCardProps>(`/gym/${gymId}`);
    setGym(props);

    if (!props) navigate('/home');
    const { data: bouldersRes } = await API.get<Boulder[]>(`/route/gym/${gymId}`);
    setBoulders(bouldersRes);

    const {
      data: { isAllowed },
    } = await API.get<{ isAllowed: boolean }>(`/gym/${gymId}/assign`, {
      headers: {
        authorization: `Bearer ${getToken()}`,
      },
    });
    console.log({ isAllowed });
    setIsAllowedToRouteSet(isAllowed);
  };

  useEffect(() => {
    fetchGym();
  }, [gymId]);

  if (!gym) return <></>;
  const { id, name, image, location } = gym;

  return (
    <div className="flex justify-center">
      <div className="container">
        <header className="sticky top-0 z-10 bg-base-200">
          <h1 style={{ fontSize: '40px', fontWeight: 'bold' }}>{name}</h1>

          {isAllowedToRouteSet && (
            <Link to="create-route">
              <button className="btn-outline btn">Add a new route</button>
            </Link>
          )}

          <div className="divider" />
        </header>

        <main>
          {boulders.map(({ name, grade, author }, index) => (
            <BoulderCard key={index} id={index} name={name} grade={grade} author={author} image={image} />
          ))}
        </main>
      </div>
    </div>
  );
}
