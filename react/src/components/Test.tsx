import { useState } from 'react';

export function Test() {
  const [comment, setComment] = useState<string>();
  const [name, setName] = useState<string>();
  const [action, setAction] = useState<string>();
  const [protocol, setProtocol] = useState<string>();
  const [srcIP, setSourceIP] = useState<string>();
  const [destIP, setDestinationIP] = useState<string>();
  const [srcPort, setSourcePort] = useState<string>();
  const [destPort, setDestinationPort] = useState<string>();

  function AddRule() {
    console.log('Additional comment:', comment);
    console.log('Name:', name);
    console.log('Action:', action);
    console.log('Protocol:', protocol);
    console.log('Source IP:', srcIP);
    console.log('Destination IP:', destIP);
    console.log('Source Port:', srcPort);
    console.log('Destination Port:', destPort);
  }

  function TestConnection(elementID) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    const element = document.getElementById(elementID);
    if (element) {
      if (element.textContent === 'Connected') {
        element.textContent = 'Disconnected';
        element.className = 'indicator-end indicator-middle badge-primary badge indicator-item';
      } else {
        element.textContent = 'Connected';
        element.className = 'indicator-end indicator-middle badge-secondary badge indicator-item';
      }
    } else {
      console.error('Element with ID ConStat not found.');
    }
  }

  // @ts-ignore
  return (
    <div>
      <div
        className="card glass w-96"
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          border: '1px solid #333',
          boxShadow: '0 2px 4px rgba(0,0,0,0.25)',
          borderRadius: '5px',
        }}
      >
        <figure>
          {' '}
          <img src="../../src/assets/img/Device-Avatar.jpeg" alt="Device avatar" />
        </figure>
        <div className="card-body " style={{ width: '60%' }}>
          <h1 className="card-title" style={{ fontSize: '2em' }}>
            PC-A
          </h1>
          <br />
          <p>Device type: Computer</p>
          <p>IP Address: 192.168.1.13</p>
          <p>MAC: 12:23:24:24:13:AD:12</p>
          <div className="indicator">
            <p>Status:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
            <span id="ConStat" className="indicator-end indicator-middle badge-secondary badge indicator-item">
              {' '}
              Connected{' '}
            </span>
          </div>
          <br />
          <div style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
            {/* The button to open modal */}
            <label
              htmlFor="Show_rules_modal"
              className="btn-primary btn"
              style={{ flex: '1 0 0', marginRight: '10px' }}
            >
              Show set rules
            </label>
            <label htmlFor="Show_logs_modal" className="btn-primary btn" style={{ flex: '1 0 0', marginRight: '10px' }}>
              Show logs
            </label>
            {/* eslint-disable-next-line react/button-has-type */}
            <button
              className="btn-primary btn"
              style={{ flex: '1 0 0', marginRight: '10px' }}
              onClick={() => TestConnection('ConStat')}
            >
              Test connection
            </button>
            {/* The button to open modal */}
            <label htmlFor="Add_rule_modal" className="btn-primary btn" style={{ flex: '1 0 0', marginRight: '10px' }}>
              Add rule
            </label>
          </div>
        </div>
      </div>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="Show_rules_modal" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box" style={{ maxWidth: '100%' }}>
          <div className="overflow-x-auto">
            <table className="table " style={{ textAlign: 'center', width: '100%' }}>
              {/* head */}
              <thead>
                <tr>
                  {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
                  <th />
                  <th>Additional comment</th>
                  <th>Rule name</th>
                  <th>Action</th>
                  <th>Protocol</th>
                  <th>Source IP</th>
                  <th>Destination IP</th>
                  <th>Source Port</th>
                  <th>Destination Port</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                <tr className="bg-base-200">
                  <th>1</th>
                  <td> - </td>
                  <td>Block SSH</td>
                  <td>Block</td>
                  <td>TCP</td>
                  <td>192.168.1.15</td>
                  <td>192.168.5.21</td>
                  <td>22</td>
                  <td>45</td>
                </tr>
                {/* row 2 */}
                <tr>
                  <th>2</th>
                  <td> - </td>
                  <td>Allow Ping</td>
                  <td>Allow</td>
                  <td>ICMP</td>
                  <td>*</td>
                  <td>192.168.5.21</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
                {/* row 3 */}
                <tr>
                  <th>3</th>
                  <td> For torrents </td>
                  <td> Torrents </td>
                  <td>Allow</td>
                  <td>UDP</td>
                  <td>182.52.32.13</td>
                  <td>*</td>
                  <td>8000</td>
                  <td>8080</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="modal-action ">
            <label htmlFor="Show_rules_modal" className="btn">
              Close!
            </label>
          </div>
        </div>
      </div>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="Show_logs_modal" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box" style={{ maxWidth: '100%' }}>
          <div className="overflow-x-auto">
            <table className="table " style={{ textAlign: 'center', width: '100%' }}>
              {/* head */}
              <thead>
                <tr>
                  {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
                  <th />
                  <th>Time</th>
                  <th>Date</th>
                  <th>Protocol</th>
                  <th>Source</th>
                  <th>Destination</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                <tr className="bg-base-200">
                  {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
                  <th />
                  <td>14:24:25.592</td>
                  <td> 16-01-2024 </td>
                  <td>UDP</td>
                  <td>192.168.2.12</td>
                  <td>14.23.52.21</td>
                  <td>Blocked</td>
                </tr>
                {/* row 2 */}
                <tr className="bg-base-200">
                  {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
                  <th />
                  <td>14:24:26.592</td>
                  <td>16-01-2024</td>
                  <td>TCP</td>
                  <td>192.168.2.12:3000</td>
                  <td>14.23.52.21:5000</td>
                  <td>Passed</td>
                </tr>
                {/* row 3 */}
                <tr className="bg-base-200">
                  {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
                  <th />
                  <td>14:24:36.592</td>
                  <td>16-01-2024</td>
                  <td>ICMP</td>
                  <td>192.168.2.12</td>
                  <td>52.21.53.21</td>
                  <td>Blocked</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="modal-action ">
            <label htmlFor="Show_logs_modal" className="btn">
              Close!
            </label>
          </div>
        </div>
      </div>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="Add_rule_modal" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box">
          <form onSubmit={AddRule}>
            <div className="form-control">
              <h1 style={{ textAlign: 'center', fontSize: '40px', width: '100%' }}>New rule</h1>
              <label className="label">
                <span className="label-text">Addictional comment</span>
              </label>
              <input
                type="text"
                placeholder="addictional comment"
                className="input-bordered input"
                onChange={(event) => {
                  setComment(event.target.value);
                }}
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
                onChange={(event) => {
                  setName(event.target.value);
                }}
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
                onChange={(event) => {
                  setAction(event.target.value);
                }}
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
                onChange={(event) => {
                  setProtocol(event.target.value);
                }}
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
                onChange={(event) => {
                  setSourceIP(event.target.value);
                }}
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
                onChange={(event) => {
                  setDestinationIP(event.target.value);
                }}
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
                onChange={(event) => {
                  setSourcePort(event.target.value);
                }}
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
                onChange={(event) => {
                  setDestinationPort(event.target.value);
                }}
              />
            </div>
            <br />
            <div className="modal-action">
              <button className="btn-primary btn" type="submit">
                Submit
              </button>
              <label htmlFor="Add_rule_modal" className="btn">
                Close!
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
