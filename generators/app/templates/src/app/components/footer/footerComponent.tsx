import * as React from 'react';

import T from 'i18n-react';
import { IFooterComponentProps } from './footerComponent.props';
import { IFooterComponentState } from './footerComponent.state';

export class FooterComponent extends React.Component<IFooterComponentProps, IFooterComponentState> {
    render() {
        return (
            <footer id='footer'>
                {T.translate('app.credits').toString()}
            </footer>
        );
    }
}
