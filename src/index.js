import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import {Timer} from './timer/Timer';

import './index.css';

ReactDOM.render(<Timer />, document.getElementById('root'));

serviceWorker.unregister();
