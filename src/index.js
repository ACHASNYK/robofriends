import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './Card';
import reportWebVitals from './reportWebVitals';
import "tachyons";
import { robots } from "./robots";

ReactDOM.render(
  <div>
      <Card id={robots[0].id} name={robots[0].name} slogan={robots[0].slogan} />
      <Card id={robots[1].id} name={robots[1].name} slogan={robots[1].slogan}/>
      <Card id={robots[2].id} name={robots[2].name} slogan={robots[2].slogan}/>
      <Card id={robots[3].id} name={robots[3].name} slogan={robots[3].slogan} />
  </div>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
