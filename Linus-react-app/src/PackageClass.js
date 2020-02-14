import React, { Component } from 'react';
export default class PackageClass extends Component {

    constructor(props) {
        super(props);
        this.renderDependencies = this.renderDependencies.bind(this);
    }
    renderDependencies() {
        let matchStyleSettings = { display: "inline-block", padding: "5px", color: "blue", cursor: "pointer" }
        return (
            <div style={{ textAlign: "center" }}>
                <p style={{ display:"inline-block" }}>Dependencies: </p>
                {
                    this.props.Data.depends.map((element, index) => {
                        if (element.includes("|")) {
                            return element.split("|").map((value, index) => {
                                if (this.props.AllPackageNames.includes(value.trim())) {
                                    if (index % 2 === 0) {
                                        return (
                                            <div style={{ display: "inline-block" }}>
                                                <p Index={this.props.AllPackageNames.indexOf(value.trim())} style={matchStyleSettings} onClick={this.props.CallbackNext}> {value} </p>
                                                <p style={{ display: "inline-block" }}>|</p>
                                            </div>
                                        )
                                    } else {
                                        return <p Index={this.props.AllPackageNames.indexOf(value.trim())} style={matchStyleSettings} onClick={this.props.CallbackNext}> {value} </p>
                                    }
                                } else {
                                    if (index % 2 === 0) {
                                        return (
                                            <div style={{ display: "inline-block" }}>
                                                <p style={{ display: "inline-block", padding: "5px" }}> {value} </p>
                                                <p style={{ display: "inline-block" }}>|</p>
                                            </div>
                                        )
                                    } else {
                                        return <p style={{ display: "inline-block", padding: "5px" }}> {value} </p>
                                    }
                                }
                            })
                        } else {
                            if (this.props.AllPackageNames.includes(element)) {
                                return <p Index={this.props.AllPackageNames.indexOf(element)} style={matchStyleSettings} onClick={this.props.CallbackNext}>{element}</p>
                            } else {
                                return <p style={{ display: "inline-block", padding: "5px" }}> {element} </p>
                            }
                        }
                    })
                }
            </div>
        )
    }
    render() {
        console.log(this.props);
        return (
            <div>
                <p onClick={this.props.CallbackHome} style={{ cursor: 'pointer' }}>Home</p>
                <p onClick={this.props.CallbackBack} style={{ cursor: "pointer" }}>Back</p>
                <p style={{ textAlign: "center" }}>Package Name: {this.props.Data.packageName}</p>
                <this.renderDependencies />
                <p style={{ textAlign: "center" }}>{this.props.Data.description}</p>
            </div >
        );
    }
}
