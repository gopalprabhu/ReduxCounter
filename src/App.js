import logo from './logo.svg';
import './App.css';
import Counter from './Components/counter';
import React from 'react'
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from './Redux/counterReducer';


function App() {
  const store = configureStore({
    reducer: {
      counter:counterReducer
    }
  })


  return (
    <Provider store = {store}>
        <Counter/>
    </Provider>


 
  );
}


export default App;
