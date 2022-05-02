import { Button, Card, Grid, Spacer, Text } from "@geist-ui/react";
import { default as React, useEffect, useState } from "react";
import "./confirmation.css";

function ConfirmationComponent(props) {
  const [reservation, setReservation] = useState("");

  async function fetchReservations() {
    try {
      const response = await fetch(
        "http://localhost:8080/api/v1/reservations"
      ).then((res) => res.json());

      for (let reservation of response.reverse()) {
        console.log(reservation);
        if (reservation.user == props.user._id) {
          setReservation(reservation);
          break;
        }
      }

      // const restaurant = {};
      // setRestaurant(restaurant);
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    fetchReservations();
  }, []);

  return (
    <div align='center' className='wrapper'>
      <Spacer />
      <Grid.Container gap={1} justify='center'>
        <Grid justify='center' xs={24}>
          <Card shadow width='80%'>
            <h3>Reservation Confirmation!</h3>
            <label>
              <Grid.Container gap={1} height='40px'>
                <Grid xs={6}>
                  <Text>Restaurant:</Text>
                </Grid>
                <Grid xs={6}>
                  <Text>
                    {reservation.restaurant && reservation.restaurant.name}
                  </Text>
                </Grid>
              </Grid.Container>
              <Grid.Container gap={1} height='40px'>
                <Grid xs={6}>
                  <Text>Address:</Text>
                </Grid>
                <Grid xs={6}>
                  <Text>
                    {reservation.restaurant &&
                      reservation.restaurant.location.street}
                    ,{" "}
                    {reservation.restaurant &&
                      reservation.restaurant.location.city}
                    ,{" "}
                    {reservation.restaurant &&
                      reservation.restaurant.location.state}
                    ,{" "}
                    {reservation.restaurant &&
                      reservation.restaurant.location.zipcode}
                  </Text>
                </Grid>
              </Grid.Container>
              <Spacer h={2} />

              <Grid.Container gap={1} height='40px'>
                <Grid xs={6}>
                  <Text>Time:</Text>
                </Grid>
                <Grid xs={6}>
                  <Text>{reservation.date}</Text>
                </Grid>
              </Grid.Container>
              <Grid.Container gap={1} height='40px'>
                <Grid xs={6}>
                  <Text>Cuisine Type:</Text>
                </Grid>
                <Grid xs={6}>
                  <Text>Italian</Text>
                </Grid>
              </Grid.Container>
              <Grid.Container gap={1} height='50px'>
                <Grid xs={6}>
                  <Text>Price Range:</Text>
                </Grid>
                <Grid xs={6}>
                  <Text>$20-$60</Text>
                </Grid>
              </Grid.Container>
            </label>
            <Button type='error'>Cancel Reservation</Button>
          </Card>
        </Grid>
        <Grid auto scale xs={8}>
          <Card shadow width='80%' height='50px' />
        </Grid>
        <Grid auto scale xs={16}>
          <Card shadow width='80%' height='50px' />
        </Grid>
      </Grid.Container>
    </div>
  );
}

export default ConfirmationComponent;
