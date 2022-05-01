import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CssBaseline, Divider } from '@geist-ui/react';
import NavComponent from './components/common/nav';
import ListingComponent from './components/pages/listing';
import ReservationHistoryComponent from './components/pages/reservationHistory';
import ConfirmationComponent from './components/pages/confirmation';
import LoginComponent from './components/pages/login';
import FrontPageComponent from './components/pages/frontPage';

function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <CssBaseline />
      <NavComponent user={user} />
      <Divider />
      <Routes>
        <Route path="/" element={<FrontPageComponent />} />
        <Route path="/login" element={<LoginComponent setUser={setUser} />} />
        <Route path="/reservations" element={<ReservationHistoryComponent user={user} />} />
        <Route path="/listing" element={<ListingComponent user={user} />} />
        <Route path="/confirmation" element={<ConfirmationComponent user={user} />} />
      </Routes>
    </Router>
  );
}

export default App;
