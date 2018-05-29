import React, { Component } from 'react';

class Result extends Component {
    setStyle = () => {
        return {
            color: this.props.color,
            borderColor: this.props.color,
            fontSize : this.props.fontSize
        }
    }
    render() {
        let { fontSize } = this.props;
        console.log(fontSize);
        
        return (
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <p>Color : red - FontSize : {this.props.fontSize}</p>
                <div id="content" style={this.setStyle()}>
                    Noi dung setting
                </div>
            </div>
        );
    }
}
export default Result;

