import React from 'react';
import ReactDom from 'react-dom';
import Clock from './clock';


ReactDom.render(
  <div>
    <Clock format="#hhmmss"/>
    <Clock format="hh:mm:ss"/>
  </div>,
  document.querySelector('.app')
);
