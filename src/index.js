import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
// import { createStore } from 'redux';
import Routes from './router'
// import Reducers from './reducers';
// const store = createStore(Reducers)
import { store, persistor } from './store';


ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <PersistGate loading={null} persistor={persistor}>
        <Routes />
      </PersistGate>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
