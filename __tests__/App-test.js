/**
 * @format
 */

import 'react-native';
import React from 'react';
// import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

// jest.mock('../App.js'); // mock module
const App = jest.fn(() => <React.Fragment />); //mock function

it('renders correctly', () => {
  renderer.create(<App />);
});
