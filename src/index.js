import React, {Fragment} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';

import Navigation from './Navigation';

export default function App() {
  return (
    <Fragment>
      <StatusBar animated barStyle="light-content" backgroundColor="#000" />
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </Fragment>
  );
}
