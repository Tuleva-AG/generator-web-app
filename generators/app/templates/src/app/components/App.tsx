import './App.scss';

import { PrimaryButton } from 'office-ui-fabric-react/lib/Button';
import * as React from 'react';

import HelloDate from './../utilities/helloDate';
import { IAppProps } from './App.Props';
import { IAppStates } from './App.States';

export class App extends React.Component<IAppProps,
    IAppStates> {

    constructor(props: any) {
        super(props);
        this.state = {
            visibleState: false
        };
    }

    public onClickShowText(e: Event) {
        e.preventDefault();
        e.stopPropagation();
        this.setState({
            visibleState: true
        });
    }


    public render() {

        var showText = "";
        if (this.state.visibleState) {
            showText = "The current day of month is " + HelloDate.GetCurrentDateByType("date");
        }

        var buttonClick = this.onClickShowText.bind(this);

        return (
            <div>
                <div className='ms-Grid'>
                    <div className='ms-Grid-row'>
                        <div className='ms-Grid-col ms-sm12 ms-md12 ms-lg12'>
                            <img src={'images/logo.png'} />
                        </div>
                    </div>
                    <div className='ms-Grid-row'>
                        <div className='ms-Grid-col ms-sm12 ms-md12 ms-lg12'>
                            <h1 className="helloWorld-title">
                                {this.props.title}
                            </h1>
                        </div>
                    </div>
                    <div className='ms-Grid-row'>
                        <div className='ms-Grid-col ms-sm12 ms-md12 ms-lg12'>
                            <PrimaryButton onClick={buttonClick} text='Show Me the Day!' />
                        </div>
                    </div>
                    <div className='ms-Grid-row'>
                        <div className='ms-Grid-col ms-sm12 ms-md12 ms-lg12'>
                            <div className="helloWorld-text">
                                <b>{showText}</b>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}