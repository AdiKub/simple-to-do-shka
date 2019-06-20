import React from 'react';
import { Provider } from 'react-redux';

import store from './store';

import ToDoList from './components/ToDoList'

const App = () => {
  return ( 
    <Provider store={store}>
      <ToDoList />
    </Provider>
  );
}

export default App;
