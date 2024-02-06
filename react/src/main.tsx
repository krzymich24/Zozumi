import './index.css';
import { createRoot } from 'react-dom/client';
import { HashRouter, Outlet, Route, Routes } from 'react-router-dom';
import React from 'react';
import { LogIn } from './components/authentication/LogIn';
import { Recovery } from './components/authentication/Recovery';
import { SignIn } from './components/authentication/SignIn';
import { ResetPassword } from './components/authentication/ResetPassword';
import { ChangePassword } from './components/authentication/ChangePassword';
import { ActivateProfile } from './components/authentication/ActivateProfile';
import { LogOut } from './components/general/LogOut';
import { Welcome } from './components/general/Welcome';
import { Header } from './components/general/Header';
import { Settings } from './components/general/Settings';
import { Profile } from './components/general/Profile';
import { Footer } from './components/general/Footer';
import { Error } from './components/general/Error';
import { Home } from './components/Home';
import { Logs } from './components/Logs';
import { AuthProvider } from './authProvider';

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
