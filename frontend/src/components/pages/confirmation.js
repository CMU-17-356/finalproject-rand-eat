import React from 'react';
import { Grid, Card, Button, Text } from '@geist-ui/react';
import './confirmation.css';

function ConfirmationComponent() {
  var restaurant_name = "Kholi's";
  var restaurant_address = "327 N Neville Street";
  var reservation_time = "9:30 PM";
  var cusine_type = "Indian";
  var price_range = "$20-$60";
  return (
    <div className="wrapper">
      <Card>
        <h1>Reservation Confirmation!</h1>
        <label>
          <Grid.Container gap={1} height="100px">
            <Grid xs={6}><Text>Restaurant:</Text></Grid>
            <Grid xs={6}><Text>{restaurant_name}</Text></Grid>
          </Grid.Container>
          <Grid.Container gap={1} height="100px">
            <Grid xs={6}><Text>Address:</Text></Grid>
            <Grid xs={6}><Text>{restaurant_address}</Text></Grid>
          </Grid.Container>
          <Grid.Container gap={1} height="100px">
            <Grid xs={6}><Text>Time:</Text></Grid>
            <Grid xs={6}><Text>{reservation_time}</Text></Grid>
          </Grid.Container>
          <Grid.Container gap={1} height="100px">
            <Grid xs={6}><Text>Cuisine Type:</Text></Grid>
            <Grid xs={6}><Text>{cusine_type}</Text></Grid>
          </Grid.Container>
          <Grid.Container gap={1} height="100px">
            <Grid xs={6}><Text>Price Range:</Text></Grid>
            <Grid xs={6}><Text>{price_range}</Text></Grid>
          </Grid.Container>
        </label>
        <Button type="error">Cancel Reservation</Button>
      </Card>
    </div>
  );
}

export default ConfirmationComponent;
