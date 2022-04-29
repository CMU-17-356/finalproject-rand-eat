import React from 'react';
import { Grid, Card, Button, Text, Spacer } from '@geist-ui/react';
import './confirmation.css';

function ConfirmationComponent() {
  var restaurant_name = "Kholi's";
  var restaurant_address = "327 N Neville Street";
  var reservation_time = "9:30 PM";
  var cusine_type = "Indian";
  var price_range = "$20-$60";
  return (
    <div align= "center"className="wrapper">
      <Spacer/>
      <Grid.Container gap={1} justify="center">
      <Grid justify="center"xs={24}><Card shadow width="80%">
        <h3>Reservation Confirmation!</h3>
        <label>
          <Grid.Container gap={1} height="40px">
            <Grid xs={6}><Text>Restaurant:</Text></Grid>
            <Grid xs={6}><Text>{restaurant_name}</Text></Grid>
          </Grid.Container>
          <Grid.Container gap={1} height="40px">
            <Grid xs={6}><Text>Address:</Text></Grid>
            <Grid xs={6}><Text>{restaurant_address}</Text></Grid>
          </Grid.Container>
          <Grid.Container gap={1} height="40px">
            <Grid xs={6}><Text>Time:</Text></Grid>
            <Grid xs={6}><Text>{reservation_time}</Text></Grid>
          </Grid.Container>
          <Grid.Container gap={1} height="40px">
            <Grid xs={6}><Text>Cuisine Type:</Text></Grid>
            <Grid xs={6}><Text>{cusine_type}</Text></Grid>
          </Grid.Container>
          <Grid.Container gap={1} height="50px">
            <Grid xs={6}><Text>Price Range:</Text></Grid>
            <Grid xs={6}><Text>{price_range}</Text></Grid>
          </Grid.Container>
        </label>
        <Button type="error">Cancel Reservation</Button>
      </Card>
      </Grid>
      <Grid auto scale xs={8}><Card shadow width="80%" height="50px" /></Grid>
      <Grid auto scale xs={16}><Card shadow width="80%" height="50px" /></Grid>
      </Grid.Container>
    </div>
  );
}

export default ConfirmationComponent;
