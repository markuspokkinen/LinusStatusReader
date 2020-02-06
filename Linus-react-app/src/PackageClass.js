import React, { Component } from 'react';
export default class PackageClass extends Component {


    render() {
        console.log(this.props.Data)
        return (
            <div>
                <p onClick={this.props.CallbackReturn} style={{ cursor: 'pointer' }}>Back</p>
                <p style={{ textAlign: "center" }}>Package Name: {this.props.Data.packageName}</p>
                <div style={{ textAlign: "center" }} >
                    <p style={{ display: "inline-block" }}>Dependencies: </p>
                    {
                        this.props.Data.depends.map((element, index) => {
                            if (index === 0) {
                                return (
                                    <p style={{ display: "inline-block", padding: "10px" }}> {element.split(":")[1]} </p>
                                    )
                            } else {
                                return (
                                    <p style={{ display: "inline-block", padding: "10px" }}> {element} </p>
                                )
                            }
                        })
                    }
                </div>
                <p style={{ textAlign: "center" }}>Description: {this.props.Data.description}</p>
            </div>

        );
    }
}
