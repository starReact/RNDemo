import React from 'react';
import StackNavigator from './navigators';
import { Provider } from 'react-redux'
import { StatusBar } from 'react-native';

const App = () => {
  return (
    <>
        <StackNavigator />
        <StatusBar
            barStyle="dark-content"
            translucent
            backgroundColor="transparent" />
    </>
  );
};

export default App;