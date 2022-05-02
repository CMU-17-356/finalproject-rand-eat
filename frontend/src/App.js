import { CssBaseline, Divider, Spacer } from "@geist-ui/react";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import NavComponent from "./components/common/nav";
import ConfirmationComponent from "./components/pages/confirmation";
import FrontPageComponent from "./components/pages/frontPage";
import ListingComponent from "./components/pages/listing";
import LoginComponent from "./components/pages/login";
import ReservationHistoryComponent from "./components/pages/reservationHistory";

function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <CssBaseline />
      <NavComponent user={user} />
      <Divider />
      <Spacer h={4} />

      <Routes>
        <Route path='/' element={<FrontPageComponent />} />
        <Route path='/login' element={<LoginComponent setUser={setUser} />} />
        <Route
          path='/reservations'
          element={<ReservationHistoryComponent user={user} />}
        />
        <Route path='/listing' element={<ListingComponent user={user} />} />
        <Route
          path='/confirmation'
          element={<ConfirmationComponent user={user} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
