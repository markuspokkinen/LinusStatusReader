import React, { Component } from 'react';
export default class PackageClass extends Component {

    render() {
        console.log(this.props.Data);
        return (
            <div>
                <p onClick={this.props.CallbackHome} style={{ cursor: 'pointer' }}>Home</p>
                <p style={{ textAlign: "center" }}>Package Name: {this.props.Data.packageName}</p>
                <div style={{ textAlign: "center" }} >
                    <p style={{ display: "inline-block" }}>Dependencies: </p>
                    {
                        this.props.Data.depends.map((element, index) => {
                            if (element.includes("|")) {
                                return element.split("|").map((value) => {
                                    console.log(this.props.AllPackageNames)
                                    console.log(value)
                                    if (this.props.AllPackageNames.includes(value.trim())) {
                                        return <p Index={this.props.AllPackageNames.indexOf(value.trim())} style={{ display: "inline-block", padding: "10px", color: "blue", cursor: "pointer" }} onClick={this.props.CallbackNext}> {value} </p>
                                    } else {
                                        return <p style={{ display: "inline-block", padding: "10px" }}> {value} </p>
                                    }
                                })
                            } else {
                                if (this.props.AllPackageNames.includes(element)) {
                                    return <p Index={this.props.AllPackageNames.indexOf(element)} style={{ display: "inline-block", padding: "10px", color: "blue", cursor: "pointer" }} onClick={this.props.CallbackNext}> {element} </p>
                                } else {
                                    return <p style={{ display: "inline-block", padding: "10px" }}> {element} </p>
                                }
                            }

                        })
                    }
                </div>
                <p style={{ textAlign: "center" }}>{this.props.Data.description}</p>
            </div>

        );
    }
}
