import { Link } from "react-router-dom";

export function Error() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="flex" style={{ justifyContent: 'center', alignItems: 'center' }}>
        <img
          src="src/assets/img/Caution-Tape-big.png"
          alt="Error 404"
          style={{ height: '500px' }}
        />
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <div>
            <h1 className={"mb-5 text-5xl font-bold"}>E R R O R 404</h1>
          </div>
        </div>
      </div>
    </div>

  );
}
