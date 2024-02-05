import { useState } from 'react';
import { API } from '../../api';

export function Recovery() {
  const [email, setEmail] = useState<string>();

  const sendResetLink = async () => {
    try {
      console.log({ email });
      const { data } = await API.post(`/person/forgotten?email=${email}`);
      console.log(data);
      return /* navigate */ '/home';
    } catch (e) {
      console.error((e as Error).message);
    }
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card w-full max-w-sm shrink-0 bg-base-100 shadow-2xl">
          <form
            className="card-body"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <div className="form-control">
              <label className="label">
                <span className="label-text">Type email address to send a reset code</span>
              </label>
              <input
                type="email"
                placeholder=""
                className="input-bordered input"
                required
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn-primary btn" type="submit" onClick={sendResetLink}>
                Send reset code
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
