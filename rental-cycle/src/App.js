import Landing from './pages/Landing';
import Login from './pages/Login';
import Home from './pages/Home';
import NoPage from './pages/NoPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route index element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path='*' element={<NoPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
