import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import parkings from './parkings';
ReactDOM.render(<App data={parkings}/>, document.getElementById('root'));