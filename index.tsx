import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { legacy_createStore as createStore } from 'redux';

import App from './App';
import allReducers from './reducers';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
const store = createStore(
  allReducers,
);

root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
