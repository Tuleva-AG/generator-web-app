import T from 'i18n-react';
import { PrimaryButton } from 'office-ui-fabric-react/lib/Button';
import { CommandBar } from 'office-ui-fabric-react/lib/CommandBar';
import { IContextualMenuItem } from 'office-ui-fabric-react/lib/ContextualMenu';
import { loadTheme } from 'office-ui-fabric-react/lib/Styling';
import * as React from 'react';

import { FooterComponent } from '../footer/footerComponent';
import { HeaderComponent } from '../header/headerComponent';
import GetDate from './../../utilities/getDate';
import { IMainComponentProps } from './mainComponent.Props';
import { IMainComponentStates } from './mainComponent.States';

export class MainComponent extends React.Component<IMainComponentProps,
    IMainComponentStates> {

    constructor(props: any) {
        super(props);

        this.state = {
            language: 'de',
            languageName: 'Deutsch',
            visibleState: false,
            showApiDate: '',
            showMomentDate: ''
        };
    }

    private translationsDe = require('json-loader!yaml-loader!./../../i18n/de.yml');
    private translationsEn = require('json-loader!yaml-loader!./../../i18n/en.yml');

    public render() {

        this._setLanguage();
        let buttonClick = this._onClickShowText.bind(this);

        return (
            <div>
                <HeaderComponent />
                <div>
                    <CommandBar items={this._getCommandItems()} farItems={this._getCommandBarFarItems()} />
                </div>
                <div className='ms-Grid'>
                    <div className='ms-Grid-row'>
                        <div className='ms-Grid-col ms-sm12 ms-md12 ms-lg12'>
                            <PrimaryButton onClick={buttonClick} text={T.translate('button.text').toString()} />
                        </div>
                    </div>
                    {this.state.visibleState && <div className='ms-Grid-row'>
                        <div className='ms-Grid-col ms-sm12 ms-md12 ms-lg12'>
                            <div>
                                <b>{this.state.showMomentDate}</b>
                            </div>
                        </div>
                    </div>}
                    {this.state.visibleState && <div className='ms-Grid-row'>
                        <div className='ms-Grid-col ms-sm12 ms-md12 ms-lg12'>
                            <div>
                                <b>{this.state.showApiDate}</b>
                            </div>
                        </div>
                    </div>}
                </div>
                <FooterComponent />
            </div>
        );
    }

    componentWillMount() {
        loadTheme({
            palette: {
                'themeDarker': '#003e66',
                'themeDark': '#003e66',
                'themeDarkAlt': '#003e66',
                'themePrimary': '#003e66',
                'themeSecondary': '#ff041a',
                'themeTertiary': '#ff5765'
            }
        });
    }

    private _onClickShowText(e: Event) {
        e.preventDefault();
        e.stopPropagation();
        GetDate.GetCurrentDateFromApi().then((date: string) => {
            this.setState({
                showApiDate: T.translate('app.currentDateFromApiString').toString() + ' ' + date,
                showMomentDate: T.translate('app.currentDateString').toString() + ' ' + GetDate.GetCurrentDateByType('date'),
                visibleState: true
            });
        }, (error) => {
            console.log(error);
        });
    }

    private _getCommandItems = (): IContextualMenuItem[] => {
        return [

        ];
    }

    private _getCommandBarFarItems = (): IContextualMenuItem[] => {
        return [
            {
                key: this.state.language,
                name: this.state.languageName,
                subMenuProps: {
                    items: [
                        {
                            key: 'de',
                            name: 'Deutsch',
                            onClick: this._setLanguageState.bind(this)
                        },
                        {
                            key: 'en',
                            name: 'English',
                            onClick: this._setLanguageState.bind(this)
                        }
                    ],
                },
            },
        ];
    }

    private _setLanguageState(ev?: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>, item?: IContextualMenuItem) {
        this.setState({ language: item.key, languageName: item.name, visibleState: false });
        this._setLanguage();
    }

    private _setLanguage = () => {
        {
            switch (this.state.language) {
                case 'de':
                    T.setTexts(this.translationsDe);
                    break;
                case 'en':
                    T.setTexts(this.translationsEn);
                    break;
            }
        }
    }
}