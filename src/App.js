import React from 'react';
import Home from './components/Home';
import { Route} from 'react-router-dom'
import { Switch } from 'react-router-dom';
import Footer from './components/Footer/Footer';


const App = () => {
  
  return (
    <div>
       <Home />
       <Footer />
    </div>
  )
}


export default App
