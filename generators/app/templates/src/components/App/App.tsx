import * as React from "react";
import { IAppProps } from "./App.Props";
import { IAppStates } from "./App.States";
import HelloDate from "./../utilities/helloDate";
import "./App.scss";



export class App extends React.Component<IAppProps,
    IAppStates> {

    constructor(props: any) {
        super(props);
        this.state = {
            visibleState: false
        };
    }

    public onClickShowText(e:Event) {
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
                <h1 className="helloWorld-title">
                    {this.props.title}
                </h1>
                <div><button onClick={buttonClick}>Show Me the Day!</button>
                </div>
                <div className="helloWorld-text">
                    <b>{showText}</b>
                </div>
            </div>
        );
    }
}