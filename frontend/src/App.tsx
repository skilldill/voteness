import React from 'react';
import { Provider } from "react-redux";

import { store } from "store";
import { RouterRoullet } from "routing";

export function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <RouterRoullet />
      </Provider>
    </div>
  );
}

