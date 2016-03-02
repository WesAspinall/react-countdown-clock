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

  getInitialState(){
    return{
      countDown: this.getCountdownString()
    };
  },

  getCountdownString(){

    let end = moment().month(2).date(17).hours(7).minutes(10).seconds(0).milliseconds(0);
    let endUnix = moment(end).valueOf();
    let beginUnix = moment().valueOf();

    let d = endUnix-beginUnix;

    let days    =      moment.duration(d).get('days');
    let hours   =      moment.duration(d).get('hours');
    let minutes =      moment.duration(d).get('minutes');
    let seconds =      moment.duration(d).get('seconds');
    let milliseconds = moment.duration(d).get('milliseconds');
    let space = " ";
    let countDownString = days+" days, "+hours+" hours, "+minutes+" minutes, and "+seconds+" seconds";

    return countDownString;
  

  },


  startTimer(){
    if(this.timer){
      clearInterval(this.timer);
    }
    this.timer = setInterval(() => {
      this.setState(this.getInitialState());
    }, 1000);
  },

  render() {

    return(
        <div className="countdownClock">
        <h5>Attn: Mr. Andronis,</h5>
          You board your airplane to New York in approximately: 
          <p id="state">{this.state.countDown}.</p> 
          <p>...just in case you were wondering.</p>
        </div>
     

    );
    
  }
}); 