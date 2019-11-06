import React from 'react';
import Header from './header/Header'
import CssBaseline from '@material-ui/core/CssBaseline';
import {useRoutes} from 'hookrouter'
import Landing from './landing/Landing'
import Contact from './contact/Contact';




const routes = {
  '/' :() => <Landing/>,
  '/kontakt' :() => <Contact/>
 
  
}


function App() {

  const Routes = useRoutes(routes)
  return (
    <React.Fragment>
      <CssBaseline/>
      <Header/>
      {Routes}
      </React.Fragment>
    
  );
}

export default App;