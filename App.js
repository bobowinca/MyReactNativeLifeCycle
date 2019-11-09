/*Example of Reac Native Life Cycle*/
import React from 'react';
import {View} from 'react-native';
import CustomComponent from './src/CustomComponent';

const App = () => (
  <View style={{flex: 1, justifyContent: 'center'}}>
    <CustomComponent name="C" />
  </View>
);

export default App;
