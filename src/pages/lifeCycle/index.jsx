import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test: 1,
    };
  }

  componentDidMount() {
    console.log('componentDidMount');
    this.setState({ test: 2 });
  }

  shouldComponentUpdate() {
    console.log('shouldComponentUpdate');
    return true;
  }

  getSnapshotBeforeUpdate() {
    console.log('getSnapshotBeforeUpdate');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  render() {
    console.log('render');
    return (
      <>
        <h1>你好</h1>
      </>
    );
  }
}
