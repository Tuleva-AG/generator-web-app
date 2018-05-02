import T from 'i18n-react';
import * as React from 'react';

import { IHeaderComponentProps } from './headerComponent.props';
import { IHeaderComponentState } from './headerComponent.state';

export class HeaderComponent extends React.Component<IHeaderComponentProps, IHeaderComponentState> {
    constructor(props: any) {
        super(props);

        this.state = {
        };
    }

    render() {
        return (
            <header >
                <div className='ms-Grid' id='header'>
                    <div className='ms-Grid-row'>
                        <div className='ms-Grid-col ms-sm7 ms-md8 ms-lg9'>
                            <p id='header' className='ms-font-xxl'>
                                {T.translate('app.title').toString()}
                            </p>
                        </div>
                        <div className='ms-Grid-col ms-sm5 ms-md4 ms-lg3'>
                            <img src={'images/logo.png'} />
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}
