import { useEffect, useState } from 'react';
import { GymCard, GymCardProps } from './GymCard';
import { API } from '../api';

export function Logs() {

  return (
    <div className="flex justify-center">
      <div className="container">
        <header className="sticky top-0 z-10 bg-base-200">
          <h1 style={{ fontSize: '40px', fontWeight: 'bold' }}>Logs</h1>
          <div className="divider" />
        </header>
        <div className="flex items-center">
          <label className="form-control w-full max-w-xs">
            <div className="flex items-center">
              <span className="label-text mr-2">Computer name</span>
              </div>
            <input type="text" placeholder="Ex. PC-A" className="input input-bordered input-primary w-full max-w-xs" />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="flex items-center">
              <span className="label-text mr-2" style={{minHeight: '1.25rem' }}></span>
            </div>
            <button className="btn-accent btn ml-4">Show logs</button>
          </label>
        </div>
        <div className="mt-4 border border-accent rounded-box flex justify-center">
          <div className="overflow-x-auto ">
            <table className="table ">
              {/* head */}
              <thead>
              <tr>
                <th>Computer Name</th>
                <th>Action</th>
                <th>Date</th>
                <th>Protocol</th>
                <th>Source IP</th>
                <th>Destination IP</th>
                <th>Source Port</th>
                <th>Destination Port</th>
              </tr>
              </thead>
              <tbody>
              {/* row 1 */}
              <tr className="hover">
                <td>PC-A</td>
                <td>Block</td>
                <td>05.02.2024 13:14:532</td>
                <td>TCP</td>
                <td>168.24.32.42</td>
                <td>192.168.1.52</td>
                <td>80</td>
                <td>443</td>
              </tr>
              {/* row 2 */}
              <tr className="hover">
                <td>PC-B</td>
                <td>Block</td>
                <td>05.02.2024 13:18:532</td>
                <td>UDP</td>
                <td>18.15.32.42</td>
                <td>192.168.12.55</td>
                <td>8000</td>
                <td>64</td>
              </tr>
              {/* row 3 */}
              <tr className="hover">
                <td>PC-A</td>
                <td>Pass</td>
                <td>05.02.2024 14:18:532</td>
                <td>ICMP</td>
                <td>192.168.1.55</td>
                <td>192.168.1.52</td>
                <td>-</td>
                <td>-</td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
