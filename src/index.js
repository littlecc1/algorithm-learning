import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import  HanoiTest from './Hanoi';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<HanoiTest />, document.getElementById('root'));
registerServiceWorker();
