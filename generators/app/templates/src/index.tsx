import './style.scss';

import { initializeIcons } from 'office-ui-fabric-react/lib/Icons';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { App } from './app/components/App';

initializeIcons(undefined, { disableWarnings: true });

ReactDOM.render(<App title="Hello World!" />, document.getElementById("app"));

