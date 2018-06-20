import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Splash from './Splash';
import registerServiceWorker from './registerServiceWorker';

// DOM stands for "Document Object Model"
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

ReactDOM.render(<Splash />, document.getElementById('splash-div'));
registerServiceWorker();
