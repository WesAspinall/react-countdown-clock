import React from 'react';
import ReactDom from 'react-dom';
import Clock from './clock';
import CountdownClock from './countdownClock';

ReactDom.render(
  <div>
    <CountdownClock />
  </div>,
  document.querySelector('.app')
);
