import React from 'react'
import Body from './components/Body'
import { Provider } from 'react-redux'
import Store from './utils/Store'

const App = () => {
  
 
  return (
    <Provider store={Store}><Body/></Provider>
  );
}

export default App