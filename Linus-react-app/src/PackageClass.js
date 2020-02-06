import React, { Component } from 'react';
export default class PackageClass extends Component {


    render() {
        console.log(this.props.Data)
            return (
                <div>
                    <p onClick>Back</p>
                    <p>1</p>
                    <p>2</p>
                </div>

            );
    }
}
