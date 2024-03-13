import { useEffect, useState } from 'react';
import { API } from '../api';
import {DeviceCard, DeviceCardProps} from "./DeviceCard";

export function Home() {

  return (
    <div className="flex justify-center">
      <div className="container">
        <header className="sticky top-0 z-10 bg-base-200">
          <h1 style={{ fontSize: '40px', fontWeight: 'bold' }}>Zozumi eBPF Firewall Managing Application</h1>
          <div className="divider" />
        </header>
        <main>

          <div>
            <button className="btn-primary btn">Show all rules</button>

          </div>
        </main>
      </div>
    </div>
  );
}
