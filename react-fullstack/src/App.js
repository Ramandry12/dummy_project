import Home from './components/home';
import Login from './components/login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
   <Router>
    <Routes>
      <Route path="/login" element={ <Login title="Login Page" description='Mini Absensi Apps' />} />
      <Route path="/" element={ <Home title="Login Page Nih" />} />
    </Routes>
   </Router>
  );
}

export default App;
