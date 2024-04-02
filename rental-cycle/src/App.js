import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Home from './pages/Home';
import NoPage from './pages/NoPage';
import SignUp from './pages/signUp';
import BookingPage from './pages/Bookingpage';
import { Fragment, } from 'react';
import { AppContextProvider, useAppContext } from './context/context';

function Content()
{

  const { user } = useAppContext();

  console.log('user in APP' , user);

  return user ? (
    <Router>
      <Routes>
        <Route index element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path='*' element={<NoPage />} />
      </Routes>
    </Router>
  ) : (
    <Router>
      <Routes>
        <Route index element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
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
