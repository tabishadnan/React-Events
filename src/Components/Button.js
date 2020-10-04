import React, { Component } from 'react';

class Button extends Component {

    static defaultProps = {
        colors : ["#095209", "#9a6401", "#ab0303", "#03a0a0"]
    }

    state = {
        color : "cyan"
    }

    handleChange = (newColor) => {
        this.setState({
            color : newColor
        })
    }


    render() {
        return (
            <div className="button-wrapper" style={{backgroundColor : this.state.color}}>
                {this.props.colors.map(c => <button onClick={() => this.handleChange(c)} key={`${c}`} style={{backgroundColor : c}}>Click Me</button>)}
            </div>
        );
    }
}

export default Button;