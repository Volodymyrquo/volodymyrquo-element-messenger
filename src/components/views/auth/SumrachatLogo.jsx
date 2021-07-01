import React, { Component } from "react";
import logo from "../../../../res/images/sumra/logo.svg";

export default class SumrachatLogo extends Component {
    render() {
        return (
            <div className="sumra-auth-logo">
                <a href="/#/welcome">
                    <img src={logo} alt="logo" />
                </a>
            </div>
        );
    }
}
