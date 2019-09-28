import React, { Component } from 'react';

class Reset extends Component {

    onResetDefault=() =>{
        this.props.onSettingDefault(true);
    }

    render() {
        return (
            <div>
                <button type="button" className="btn btn-primary" onClick={this.onResetDefault}>Resset</button>
            </div>
        );
    }
}

export default Reset;