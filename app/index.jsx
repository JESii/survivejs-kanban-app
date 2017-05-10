import React from 'react';
import ReactDOM from 'react-dom';
import Notes from './components/notes';

if(process.env.NODE_ENV !== 'production') {
  React.Perf = require('react-addons-perf');
}

ReactDOM.render(
  <div>
  <h1>Hello incredible mystical world</h1>
  <Notes />
  </div>,
  document.getElementById('app')
);
