import { Button, Card, Grid, Input, Select, Spacer } from "@geist-ui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./listing.css";
import { useNavigate } from "react-router-dom";

function ListingComponent(props) {
  let navigate = useNavigate();

  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [type, setType] = useState("");
  const [price, setPrice] = useState("");
  const [numGuests, setNumGuests] = useState("");

  function handlerFactory(setValFn) {
    return (e) => setValFn(e.target.value);
  }

  function handleFormSubmit() {
    console.log(props);
    fetch("http://localhost:8080/api/v1/reservationRequests", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: props.user._id,
        location: {
          street: street,
          city: city,
          state: state,
          zipcode: zip,
        },
        date: new Date(),
        numGuests: numGuests,
        cost: 1,
        cusinePrefence: [type],
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Success" + data);
        navigate("/confirmation");
      })
      .catch((err) => {
        console.error("Login error: ", err);
      });
  }

  return (
    <div className='wrapper'>
      <h1>Reservation Request</h1>
      <Card>
        <h4>
          Please provide us with some details about your reservation! Then click
          submit and the rest will be handled by us!
        </h4>
        <form>
          <label>
            <p>Address</p>
            <Grid.Container gap={1} height='100px'>
              <Grid xs={6}>
                <Input
                  value={street}
                  onChange={handlerFactory(setStreet)}
                  placeholder='Street 1'
                />
              </Grid>
              <Grid xs={6}>
                <Input placeholder='Street 2' />
              </Grid>
            </Grid.Container>
            <Grid.Container gap={1} height='100px'>
              <Grid xs={6}>
                <Input
                  value={city}
                  onChange={handlerFactory(setCity)}
                  placeholder='city'
                />
              </Grid>
              <Grid xs={6}>
                <Input
                  value={state}
                  onChange={handlerFactory(setState)}
                  placeholder='state'
                />
              </Grid>
              <Grid xs={6}>
                <Input
                  value={zip}
                  onChange={handlerFactory(setZip)}
                  placeholder='zip'
                />
              </Grid>
            </Grid.Container>
          </label>

          <Select
            value={type}
            onChange={handlerFactory(setType)}
            placeholder='Cuisine Type'
          >
            <Select.Option value='1'>Italian</Select.Option>
            <Select.Option value='2'>Chinese</Select.Option>
            <Select.Option value='3'>Japanese</Select.Option>
            <Select.Option value='4'>American</Select.Option>
            <Select.Option value='5'>French</Select.Option>
            <Select.Option value='6'>Thai</Select.Option>
          </Select>
          <Spacer h={2} />
          <Select
            value={price}
            onChange={handlerFactory(setPrice)}
            placeholder='Price Range'
          >
            <Select.Option value='1'>$0-$20</Select.Option>
            <Select.Option value='2'>$20-$60</Select.Option>
            <Select.Option value='3'>$60-$120</Select.Option>
            <Select.Option value='4'>$120+</Select.Option>
          </Select>
          <Spacer h={2} />
          <Input
            value={numGuests}
            onChange={handlerFactory(setNumGuests)}
            placeholder='number of guests'
          />
          <Spacer h={2} />
          <Button type='success' onClick={handleFormSubmit}>
            Submit
          </Button>
        </form>
      </Card>
    </div>
  );
}

export default ListingComponent;
