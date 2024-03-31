import Home from './pages/Home';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Booking from './pages/Bookingpage';
import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <div>
      <Home />
      <Landing />
      <Login />
      <Booking />
    </div>
  );
}

export default App;
