import React, { Component } from 'react';
import Packageclass from './PackageClass';

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: "",
            indexs: [],
            show: false
        }
        this.renderPackagelist = this.renderPackagelist.bind(this);
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
        let index = parseInt(event.target.attributes.index.value);
        let indexes = this.state.indexs;
        indexes.push(index);
        this.setState({
            indexs: indexes,
            show: true
        }, () => {
                console.log(this.state)
        })

    }
    callbackHome() {
        this.setState({
            show: false,
            indexs:[]
        })
    }
    callbackNext(event) {
        let index = parseInt(event.target.attributes.index.value);
        let indexes = this.state.indexs;
        indexes.push(index);
        console.log(parseInt(event.target.attributes.index.value))
        this.setState({
            indexs: indexes
        })
    }
    callbackback() {
        let indexes = this.state.indexs;
        console.log(indexes);
        indexes.pop();
        console.log(indexes);
        if (indexes.length === 0) {
            this.setState({
                indexs: indexes,
                show:false
            })
        } else {
            this.setState({
                indexs: indexes
            })
        }

    }
    renderPackagelist(props) {
        return (
            <div>
                {
                    this.state.data.map((element, index) => {
                        return (
                            <p index={index} onClick={this.hideorshow.bind(this)} style={{ color: "blue", cursor: 'pointer', textAlign: "center" }}> {element.packageName}</p>
                        );
                    })
                }
            </div>
        );
    }

    render() {
        if (this.state.data !== "" && this.state.show === false) {
            return <this.renderPackagelist />
        } else if (this.state.data !== "" && this.state.show) {
            return <Packageclass AllPackageNames={this.state.packageNames} CallbackHome={this.callbackHome.bind(this)} CallbackBack={this.callbackback.bind(this)} CallbackNext={this.callbackNext.bind(this)} Data={this.state.data[this.state.indexs[this.state.indexs.length - 1]]} />
        } else {
            return <p>Waiting for data</p>
        }
    }
}