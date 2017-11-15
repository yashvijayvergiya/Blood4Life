import React from 'react';
import ReactDOM from 'react-dom';
import './App/styles/index.css';
import App from './App/components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
