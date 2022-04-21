import React from 'react';
import {Input, Grid, Card, Button, Select, Spacer} from '@geist-ui/react';
import {ArrowRightCircle, ShoppingCart} from '@geist-ui/icons';
import './listing.css';
function ListingComponent() {
    
  
    return (
        <div className="wrapper">
        <h1>Restaurant List</h1>
        <Card>
        <form>
        
           <label>
             <p>Restaurant Name</p>
             <Input placeholder="Restaurant Name" />
           </label>
           <label>
           <p>Address</p>
            <Grid.Container gap={1} height="100px">
            <Grid xs={6}><Input placeholder="Street 1" /></Grid>
            <Grid xs={6}><Input placeholder="Street 2" /></Grid>
            </Grid.Container>
            <Grid.Container gap={1} height="100px">
            <Grid xs={6}><Input placeholder="city" /></Grid>
            <Grid xs={6}><Input placeholder="state" /></Grid>
            <Grid xs={6}><Input placeholder="zip" /></Grid>
            </Grid.Container>
           </label>
            <Select placeholder="Cuisine Type">
            <Select.Option value="1" disabled>Italian</Select.Option>
            <Select.Option value="2">Thai</Select.Option>
            </Select>
            <Spacer h={2}/>
            <Select placeholder="Price Range">
            <Select.Option value="1" disabled>$0-$20</Select.Option>
            <Select.Option value="2">$20-$60</Select.Option>
            <Select.Option value="3" disabled>$60-$120</Select.Option>
            <Select.Option value="4">$120+</Select.Option>
            </Select>
            <Spacer h={2}/>
            <Button type="success">Submit</Button>
        </form>
        </Card>
      </div>
  
    );
  }
  
  export default ListingComponent;