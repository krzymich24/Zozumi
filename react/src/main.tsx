import './index.css';
import { createRoot } from 'react-dom/client';
import { HashRouter, Outlet, Route, Routes } from 'react-router-dom';
import React from 'react';
import { LogIn } from './components/LogIn';
import { LogOut } from './components/LogOut';
import { Home } from './components/Home';
import { Recovery } from './components/Recovery';
import { SignIn } from './components/SignIn';
import { Gym } from './components/Gym';
import { ResetPassword } from './components/ResetPassword';
import { Boulder } from './components/Boulder';
import { AdmView } from './components/AdmView';
import { Welcome } from './components/Welcome';
import { NewRoute } from './components/NewRoute';
import { NewGym } from './components/NewGym';
import { AuthProvider } from './authProvider';
import { Header } from './components/Header';
import { Settings } from './components/Settings';
import { ChangePassword } from './components/ChangePassword';
import { Profile } from './components/Profile';
import { Footer } from './components/Footer';
import { ActivateProfile } from './components/ActivateProfile';
import { Error } from './components/Error';
import { Logs } from './components/Logs';

const App = document.getElementById('root');

function Body() {
  // const { authorizeFromSession, auth } = useAuth();

  // useEffect(() => {
  //   authorizeFromSession();
  // });

  return (
    <>
      {/* <div className="h-32 bg-primary">aaa</div> */}
      <Header />
      <div style={{ flex: 1 }}>
        <Outlet />
      </div>
      <Footer />
      {/* <div className="h-32 bg-secondary">aaa</div> */}
    </>
  );
}

const Root = () => (
  <AuthProvider>
    <HashRouter>
      <Routes>
        <Route path="" element={<Body />}>
          <Route path="" element={<Welcome />} />

          <Route path="auth">
            <Route path="login" element={<LogIn />} />
            <Route path="register">
              <Route path=":token" element={<ActivateProfile />} />
              <Route path="" element={<SignIn />} />
            </Route>
            <Route path="recovery">
              <Route path=":token" element={<ResetPassword />} />
              <Route path="" element={<Recovery />} />
            </Route>
          </Route>

          <Route path="profile">
            <Route path="" element={<Profile />} />
            <Route path="settings" element={<Settings />} />
            <Route path="changepassword" element={<ChangePassword />} />
          </Route>

          <Route path="/logout" element={<LogOut />} />
          <Route path="/logs" element={<Logs />} />
          <Route path="/error" element={<Error />} />
          <Route path="/home" element={<Home />} />

        </Route>
      </Routes>
    </HashRouter>
  </AuthProvider>
);

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
createRoot(App!).render(<Root />);
