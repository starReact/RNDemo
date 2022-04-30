import React from 'react';
import StackNavigator from './navigators';
import { Provider } from 'react-redux'
import { StatusBar } from 'react-native';
import store from './config/dva';
import "./config/http";

const App = () => {
  return (
    <Provider store={store}>
        <StackNavigator />
        <StatusBar
            barStyle="dark-content"
            translucent
            backgroundColor="transparent" />
    </Provider>
  );
};

export default App;