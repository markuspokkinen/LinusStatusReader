import React, { Component } from 'react';
import Packageclass from './PackageClass';
export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: ""
        }
    }

    componentDidMount() {
        fetch("/file")
            .then(response => response.json())
            .then(res => {
                this.setState({
                    data: res
                }, () => {
                    console.log(this.state);
                })
            })
    }

    render() {
        if (this.state.data !== "") {
            return (
                <div>
                    {
                        this.state.data.map((element) => <p>Package name: {element[0]}</p>)

                    }
                </div>
            );
        } else {
            return (
                <p>Waiting for data</p>
            );
        }
    }
}