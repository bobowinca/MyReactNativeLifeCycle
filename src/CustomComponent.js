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
    this.setState({counter: current + 1});
  };

  fetchSomethingAPI = () => {
    this.timer = setTimeout(() => this.increase(), 3000);
  };

  componentDidMount() {
    // this.increase();
    // this.timer = setInterval(() => this.increase(), 3000);

    this.fetchSomethingAPI();
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
    console.log(`counter is ${this.state.counter}`);
    console.log('componentDidUpdate called.');
  }

  componentWillUnmount() {
    this.timer && clearInterval(this.timer);
    this.timer && clearTimeout(this.timer);
    this.timer = null;
    console.log('componentWillUnmount called.');
  }

  componentDidCatch(error, info) {
    console.log('componentDidCatch called.');
  }

  render() {
    console.log('render() is rendering...');
    return (
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text>Language is: {this.props.name}</Text>
        <Text>Counter is at: {this.state.counter}</Text>
      </View>
    );
  }
}

export default CustomComponent;
