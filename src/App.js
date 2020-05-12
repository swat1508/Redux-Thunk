import React from 'react';
import {Provider} from 'react-redux';
import store from './redux/store';
import logo from './logo.svg';
import './App.css';
import CakeContainer from './components/CakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import HooksCakeContainer from './components/HooksCakeContainer';
import NewCakeContainer from './components/NewCakeContainer';
import ItemContainer from './components/ItemContainer';
import UserContainer from './components/UserContainer';

function App() {
    console.log('1 . App - container');
  return (
    <Provider store={store}>
    <div className="App">
      {/*
      <CakeContainer/>
      <HooksCakeContainer/>
      <IceCreamContainer/>
      <NewCakeContainer/>
      <ItemContainer itemDisplay="cake" />
      <ItemContainer/>
      */}
    
      <UserContainer/>
    </div>
    </Provider>
  );
}

export default App;
