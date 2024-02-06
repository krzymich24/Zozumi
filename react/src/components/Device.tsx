import { Link, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { DeviceCardProps } from './DeviceCard';
import { API } from '../api';
import { useAuth } from '../useAuth.hooks';
import { Boulder } from '../types/boulder';

export function Device() {
  return (
    <div className="flex justify-center">
      <div className="container">
        <header className="sticky top-0 z-10 bg-base-200">
          <div className="divider" />
        </header>
        <main>
        </main>
      </div>
    </div>
  );
}
