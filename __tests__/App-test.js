/**
 * @format
 */

import 'react-native';
import React from 'react';
import {shallow} from 'enzyme';
import App from '../App';
// import CustomComponent from '../src/CustomComponent'

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

jest.mock('../src/CustomComponent'); // mock module
const CustomComponent = require('../src/CustomComponent');
// CustomComponent.mockImplementation(() => <React.Fragment />);
// const App = jest.fn(() => <React.Fragment />); //mock function

it('renders correctly', () => {
  shallow(<App />);
});
