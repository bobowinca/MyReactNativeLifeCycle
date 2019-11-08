/*Example of Reac Native Life Cycle*/
import React, {Component} from 'react';
import {Text, View} from 'react-native';

class CustomComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFetching: false,
      users: [],
      counter: 0,
    };

    console.log('Constructor Called.');
  }

  UNSAFE_componentWillMount() {
    console.log('componentWillMount called.');
  }

  increase = () => {
    const current = this.state.counter;
    this.setState({coounter: current + 1});
  };

  // fetchSomethingAPI = () => {
  //   const current = this.state.counter;
  //   this.setState({coounter: current + 1});
  // };

  componentDidMount() {
    this.increase();
    this.timer = setInterval(() => this.increase(), 3000);
    console.log('componentDidMount called.');
  }

  UNSAFE_componentWillReceiveProps(nextProp) {
    console.log('componentWillReceiveProps called.', nextProp);
  }

  shouldComponentUpdate(nextProp, nextState) {
    console.log('shouldComponentUpdate called.');
    return true;
  }

  UNSAFE_componentWillUpdate(nextProp, nextState) {
    console.log('componentWillUpdate called.');
  }

  componentDidUpdate(prevProp, prevState) {
    console.log('componentDidUpdate called.');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount called.');
  }

  componentDidCatch(error, info) {
    console.log('componentDidCatch called.');
  }

  render() {
    return (
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text>Language is: {this.props.name}</Text>
      </View>
    );
  }
}

export default class App extends Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <CustomComponent name="C" />
      </View>
    );
  }
}
