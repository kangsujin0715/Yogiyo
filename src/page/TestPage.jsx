import React, { Component } from 'react';

class CounterApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 10000,
    };
    this.intervalVal = null;
  }

  clickEvent = (param) => {
    this.intervalVal = setInterval(() => {
      this.changeText(param);
    }, 500);
  };

  changeText = (param) => {
    const { count } = this.state;
    const afterNum = param;

    if (count < afterNum) {
      if (count % 10000 !== 0) {
        this.setState({ count: Math.ceil(count / 10000) * 10000 });
      } else {
        this.setState({ count: count + (afterNum - count === 5000 ? 5000 : 10000) });
      }
    } else if (count > afterNum) {
      if (count % 10000 !== 0) {
        this.setState({ count: Math.floor(count / 10000) * 10000 });
      } else {
        this.setState({ count: count - (count - afterNum === 5000 ? 5000 : 10000) });
      }
    } else {
      clearInterval(this.intervalVal);
    }
  };

  render() {
    const { count } = this.state;

    return (
      <div>
        <button onClick={() => this.clickEvent(10000)}>10000</button>
        <button onClick={() => this.clickEvent(15000)}>15000</button>
        <button onClick={() => this.clickEvent(20000)}>20000</button>
        <button onClick={() => this.clickEvent(30000)}>30000</button>
        <button onClick={() => this.clickEvent(50000)}>50000</button>
        <button onClick={() => this.clickEvent(100000)}>100000</button>

        <p>
          <span className="count">{count}</span>
        </p>
      </div>
    );
  }
}

export default CounterApp;