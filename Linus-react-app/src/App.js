import React, { Component } from 'react';
import Packageclass from './PackageClass';

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: "",
            index: "",
            show: false
        }
    }

    componentDidMount() {
        fetch("/file").then(response => response.json())
            .then(res => {
                let listOfpackageNames = res.map(val => val.packageName.trim())
                console.log(res);
                this.setState({
                    data: res,
                    packageNames: listOfpackageNames
                }, () => {
                    console.log(this.state)
                })
            })
    }
    hideorshow(event) {
        this.setState({
            index: parseInt(event.target.attributes.index.value),
            show: true
        });

    }
    callbackHome() {
        this.setState({
            show:false
        })
    }
    callbackNext(event) {
        console.log(parseInt(event.target.attributes.index.value))
        this.setState({
            index: parseInt(event.target.attributes.index.value)
        })
    }
    render() {
        if (this.state.data !== "" && this.state.show === false) {
            return (
                <div>
                    {
                        this.state.data.map((element, index) => {
                            return (
                                <p index={index} onClick={this.hideorshow.bind(this)} style={{ color: "blue", cursor: 'pointer', textAlign: "center"}}> {element.packageName}</p>
                            )
                        })
                    }
                </div>
            );
        } else if (this.state.data !== "" && this.state.show) {
            return (
                <Packageclass AllPackageNames={this.state.packageNames} CallbackHome={this.callbackHome.bind(this)} CallbackNext={this.callbackNext.bind(this)} Data={this.state.data[this.state.index]} />
                )
        } else {
            return (
                <p>Waiting for data</p>
            );
        }
    }
}