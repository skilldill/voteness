import React from 'react';
import { Provider } from "react-redux";

import { store } from "store";

export function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <h1>VOTENESS</h1>
      </Provider>
    </div>
  );
}

