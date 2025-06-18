

import React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/store/store';
import { NetworkProvider } from './src/providers/NetworkProvider';
import RootNavigator from './src/navigation/RootNavigator';

function App() {
  return (
    <Provider store={store}>
      <NetworkProvider>
        <RootNavigator />
      </NetworkProvider>
    </Provider>
  );
}

export default App;
