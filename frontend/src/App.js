import {Page, Spacer, Text} from '@geist-ui/react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <div className='cover'>
          <div className="landing-info">
            <Spacer h={2}/>
            <h1 className='landing-text'>Find your Restaurant!</h1>
          </div>
        </div>
        
        <div className='page'>
          <Page>
            <Page.Content>
              <h1>Welcome to Rand.eat</h1>
              <h3>Where great decisions are made easily!</h3>
              <Text blockquote>
                "The best and easiest method
                  I have ever had for getting food" - User
              </Text>
              <Spacer h={3}/>
            </Page.Content>
          </Page>
        </div>
      </div>
    </div>
  );
}

export default App;
