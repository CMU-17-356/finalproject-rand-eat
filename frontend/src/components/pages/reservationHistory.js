import React from 'react';
import { Table } from '@geist-ui/react';
import './reservationHistory.css';

function ReservationHistoryComponent() {
  const data = [
    { restaurant: "Rose Tea Cafe", location: "414 S Craig St", date: "4/15/22", time: "7pm" },
    { restaurant: "Lucca Ristorante", location: "317 S Craig St", date: "4/9/22", time: "6:30pm" },
    { restaurant: "Noodlehead", location: "242 S Highland Ave", date: "4/1/22", time: "1pm" },
  ];

  return (
    <div>
      <h1 className='landing-text'>Reservation History</h1>
      <Table data={data}>
        <Table.Column prop="restaurant" label="restaurant" />
        <Table.Column prop="location" label="location" />
        <Table.Column prop="date" label="date" />
        <Table.Column prop="time" label="time" />
      </Table>
    </div>
  );
}
  
export default ReservationHistoryComponent;