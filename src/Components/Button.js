import React, { Component } from 'react';

class Button extends Component {

    static defaultProps = {
        colors : ["#095209", "#9a6401", "#ab0303", "#03a0a0"]
    }


    render() {
        return (
            <div>
                {this.props.colors.map(c => <button key={`${c}`} style={{backgroundColor : c}}>Click Me</button>)}
            </div>
        );
    }
}

export default Button;