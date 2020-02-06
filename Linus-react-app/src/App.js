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
        fetch("/file")
            .then(response => response.json())
            .then(res => {
                console.log(res);
                this.setState({
                    data: res,
                })
            })
    }
    hideorshow(event) {
        console.log(event.target)
        this.setState({
            index: parseInt(event.target.attributes.index.value),
            show: true
        });

    }
    render() {
        if (this.state.data !== "" && this.state.show === false) {
            return (
                <div>
                    {
                        this.state.data.map((element, index) => {
                            return (
                                <p index={index} onClick={this.hideorshow.bind(this)} style={{ color: "blue", cursor: 'pointer', textAlign: "center" }}> {element.packageName.split(":")[1]}</p>
                            )
                        })
                    }
                </div>
            );
        } else if (this.state.data !== "" && this.state.show) {
            return (
                <Packageclass Data={this.state.data[this.state.index]} />
                )
        } else {
            return (
                <p>Waiting for data</p>
            );
        }
    }
}