/**
 
 */

import React, {Component} from 'react';
import AddNote from './Screens/AddNote'
import{createStackNavigator} from 'react-navigation'
import Home_Screen from './Screens/Home_Screens'
import Detail_Screen from './Screens/Detail_Screen'


  const App = createStackNavigator({
      Home: Home_Screen,
      AddNote: AddNote,
      Details: Detail_Screen,

  })


  export default App 
