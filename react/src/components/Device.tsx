import { Link, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { DeviceCard, DeviceCardProps } from "./DeviceCard";
import { API } from '../api';
import { useAuth } from '../useAuth.hooks';
import { Boulder } from '../types/boulder';

export function Device() {

  const { deviceId } = useParams();
  const [ device, setDevice] = useState<DeviceCardProps>();

  const navigate = useNavigate();

  const fetchDevice = async () => {
    if (!deviceId) return;

    const { data: props } = await API.get<DeviceCardProps>(`/device/${deviceId}`);
    setDevice(props);

  };

  useEffect(() => {
    fetchDevice();
  }, [deviceId]);

  if (!device) return <></>;
  const { id, name, ipAddress, image, deviceStatus } = device;

  return (
    <div className="flex justify-center">
      <div className="container">
        <header className="sticky top-0 z-10 bg-base-200">
          <div className="divider" />
        </header>
        <main>
          <DeviceCard id={id} name={name} ipAddress={ipAddress} deviceStatus={deviceStatus} image={image} />
        </main>
      </div>
    </div>
  );
}
