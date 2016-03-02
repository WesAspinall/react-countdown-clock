import React from 'react';
import moment from 'moment';

export default React.createClass({

  componentDidMount() {
    this.startTimer();
  },

  componentWillUnmount() {
    // clears timer 
    if (this.timer) {
      clearInterval(this.timer);
    }
  },

  getInitialState() {
    return {
      timeString: this.getTimeString()
    };
  },

  getTimeString(){
    let format = this.props.format;
    return moment().format(format);
  },

  startTimer() {
    if (this.timer) {
      clearInterval(this.timer);
    }
    this.timer = setInterval(() => {
      this.setState(this.getInitialState());
    }, 1000);
  },

  render() {
    return (
      <div className="clock">{this.state.timeString}</div>
    );
  }

}); 