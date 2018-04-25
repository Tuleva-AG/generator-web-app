import T from 'i18n-react';
import * as React from 'react';

import { IFooterComponentProps } from './footerComponent.props';
import { IFooterComponentState } from './footerComponent.state';

const styles = {
    icon: {
        padding: '0px 2px 0px 20px',
        color: '#ffcf2b'
    }
};

export class FooterComponent extends React.Component<IFooterComponentProps, IFooterComponentState> {
    render() {
        return (
            <footer id='footer'>
                <i className='ms-Icon ms-Icon--POISolid' aria-hidden='true' style={styles.icon}></i> {T.translate('app.address').toString()}
                <i className='ms-Icon ms-Icon--Clock' aria-hidden='true' style={styles.icon}></i> {T.translate('app.time').toString()}
                <i className='ms-Icon ms-Icon--Phone' aria-hidden='true' style={styles.icon}></i> {T.translate('app.phone').toString()}
            </footer>
        );
    }
}
