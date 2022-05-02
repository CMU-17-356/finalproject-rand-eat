import { Page, Spacer, Image, Card, Text, Grid, Divider, Button } from '@geist-ui/react';
import restaurant from '../../assets/restaurant.png';
import { Link } from "react-router-dom"

function FrontPageComponent() {
  return (
    <div>
      <div className='cover'>
        <div className="container">
          <Spacer h={2}/>
          <Image className='home-image' src={restaurant} />
          <h2 class='centered'>Let us find a restaurant for you based on your unique tastes.</h2>
        </div>
      </div>
      
      <div className='page'>
        <Page>
          <Page.Content>
            <Spacer h={3}/>
            <h1>Welcome to Rand.eat</h1>
            <h3>Where great decisions are made easily!</h3>
            <Spacer/>
            <Grid.Container gap={2} justify="center" height="100px">
              <Grid justify="center"xs={6}><Card justify="center"shadow width="100%">
                <Text>Add your preference details here and allow us to select a restaurant for you.</Text>
                <Divider/>
                <Link to="listing"><Button type="success"ghost auto scale >Go to Booking</Button></Link>
              </Card></Grid>
              <Grid justify="center"xs={6}><Card justify="center"shadow width="100%">
                <Text>Revisit your previous restaurant bookings to experience your favorite restaurants again.</Text>
                <Divider/>
                <Link to="listing"><Button type="success"ghost auto scale>Reservation History</Button></Link>
              </Card></Grid>
              <Grid justify="center"xs={6}><Card justify="center"shadow width="100%">
                <Text>Check your reservation confirmation details once you have selected your preferences. </Text>
                <Divider/>
                <Link to="confirmation"><Button type="success"ghost auto scale>Confirmation</Button></Link>
              </Card></Grid>
            </Grid.Container>
            <Spacer h={8}/>
            <Text blockquote>
              "The best and most excited avenue
                I have had for choosing a restaurant" - User
            </Text>
          </Page.Content>
        </Page>
      </div>
    </div>
  );
}

export default FrontPageComponent;