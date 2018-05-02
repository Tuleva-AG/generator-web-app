import './style.scss';

import { initializeIcons } from 'office-ui-fabric-react/lib/Icons';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { MainComponent } from './app/components/main/mainComponent';

initializeIcons(undefined, { disableWarnings: true });

ReactDOM.render(<MainComponent title='' />, document.getElementById('app'));

