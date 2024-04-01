import Home from './pages/Home';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Home from './pages/Home';
import NoPage from './pages/NoPage';

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
