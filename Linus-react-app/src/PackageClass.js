import React, { Component } from 'react';
export default class PackageClass extends Component {


    render() {
        console.log(this.props.Data)
            return (
                <div>
                    <p onClick={this.props.CallbackReturn} style={{ cursor: 'pointer' }}>Back</p>
                    <p>{this.props.Data.packageName}</p>
                    <p>{this.props.Data.depends}</p>
                    <p>{this.props.Data.description}</p>
                </div>

            );
    }
}
