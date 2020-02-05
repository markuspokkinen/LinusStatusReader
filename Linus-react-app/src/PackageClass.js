import React, { Component } from 'react';
export default class PackageClass extends Component {

    render() {
        return (
            <p>Package name:{this.props.Name.split(":")[1]}</p>

        );
    }


}
