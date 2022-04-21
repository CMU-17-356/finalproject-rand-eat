import React from 'react';
import {Avatar, Button, Drawer, Spacer} from '@geist-ui/react';
import {ArrowRightCircle, ShoppingCart} from '@geist-ui/icons';
import './nav.css';

function NavComponent() {
    
  
    return (
      <div className="navbar">
        <div className='left-content'>
          <div>
            <a href='/'>
              Rand.eat
            </a>
          </div>
          <div>
            {/* <a href='/explore'><Button>Explore</Button></a> */}
          </div>
        </div>
        <div className='right-content'>
          <div>
           
          </div>
          <Spacer w={ 5 } />
        </div>
      </div>
    );
  }
  
  export default NavComponent;