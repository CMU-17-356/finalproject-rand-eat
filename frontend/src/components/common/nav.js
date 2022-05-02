import React from 'react';
import { Button, Spacer } from '@geist-ui/react';
import './nav.css';
import { Link } from 'react-router-dom';

function NavComponent(props) {
  const loginComponent = (props.user == null) ? 
    (<Link to="login"><Button type="success" ghost auto scale>Log in</Button></Link>) :
    (<div>{props.user == null || props.user == [] ? '' : `${props.user.first_name} ${props.user.last_name}`}</div>);

  return (
    <div className="navbar">
      <div className='left-content'>
        <div>
          <a href='/'>
            Rand.eat
          </a>
        </div>
      </div>
      <div className='right-content'>
        {loginComponent}
        <Spacer w={ 5 } />
      </div>
    </div>
  );
}
  
  export default NavComponent;