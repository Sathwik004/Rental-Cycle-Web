import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Home from './pages/Home';
import NoPage from './pages/NoPage';
import SignUp from './pages/signUp';
import BookingPage from './pages/Booking';
import Profile from './pages/Profile';
import AboutUs from './pages/Aboutus';
import Help from './pages/Help';
import TandC from './pages/Terms';

import { Fragment, } from 'react';
import { AppContextProvider, useAppContext } from './context/context';

function Content()
{
  const { session } = useAppContext();
  return session ? (
    <Router>
      <Routes>
        <Route index element={<Home/>} />
        <Route path="/home" element={<Home />} />
        <Route path="/landing" element={<Landing  />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/help" element={<Help />} />
        <Route path="/terms" element={<TandC />} />
        <Route path='*' element={<NoPage />} />
      </Routes>
    </Router>
  ) : (
    <Router>
      <Routes>
        <Route index element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/help" element={<Help />} />
        <Route path="/terms" element={<TandC />} />
        <Route path='*' element={<NoPage />} />
      </Routes>
    </Router>
  );
}
function App() {
  return (
    <Fragment>
      <AppContextProvider>
        <Content />
      </AppContextProvider>
    </Fragment>
  );
}
export default App;
