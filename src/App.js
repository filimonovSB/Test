import React from 'react'
import logo from './logo.svg';
import Contacts  from './componets/Contacts'
import Menu  from './componets/Menu'
import ShowCase  from './componets/ShowCase'
import Service  from './componets/Service'
import Designers  from './componets/Designers'
import Packages  from './componets/Packages'

import './App.css';

function App() {
    return (
     
      <div>
         <Menu/>
        <div id="content">
          <h1>Interior Design</h1>

          <ShowCase/>
         <Service/>
        <Designers/>
         <Packages/>
          
        </div>
        <Contacts/>
       
      </div>
 

  
  );
}


export default App;