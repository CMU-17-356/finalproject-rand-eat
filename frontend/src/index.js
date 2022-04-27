import React from 'react';
import ReactDOM from 'react-dom';
import {CssBaseline} from '@geist-ui/react';
import './index.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import NavComponent from './components/common/nav';
import ListingComponent from './components/pages/listing';
import ReservationHistoryComponent from './components/pages/reservationHistory';
import ConfirmationComponent from './components/pages/confirmation';

ReactDOM.render(
  <Router>
      <CssBaseline />
      <NavComponent/>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="listing" element={<ListingComponent />} />
        <Route path="confirmation" element={<ConfirmationComponent/>}/>
      </Routes>
    </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
