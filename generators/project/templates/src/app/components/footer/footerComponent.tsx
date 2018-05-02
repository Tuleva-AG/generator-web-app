import T from 'i18n-react';
import * as React from 'react';

import { IFooterComponentProps } from './footerComponent.props';
import { IFooterComponentState } from './footerComponent.state';

export class FooterComponent extends React.Component<IFooterComponentProps, IFooterComponentState> {
    render() {
        return (
            <footer id='footer'>
                <i className='ms-Icon ms-Icon--POISolid' aria-hidden='true'></i> {T.translate('app.address').toString()}
                <i className='ms-Icon ms-Icon--Clock' aria-hidden='true'></i> {T.translate('app.time').toString()}
                <i className='ms-Icon ms-Icon--Phone' aria-hidden='true'></i> {T.translate('app.phone').toString()}
            </footer>
        );
    }
}