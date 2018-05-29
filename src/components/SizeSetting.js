import React, { Component } from 'react';

class SizeSetting extends Component {
    changeSize = (value) => {
        //console.log(value);
        this.props.onChangeSize(value);
    }
    render() {
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="panel panel-warning">
                    <div className="panel-heading">
                        <h3 className="panel-title">Size : {this.props.fontSize}</h3>
                    </div>
                    <div className="panel-body">
                        <button type="button" className="btn btn-success" onClick={()=>this.changeSize(-2)}>Giam</button>
                        <button type="button" className="btn btn-success" onClick={()=>this.changeSize(+2)}>Tang</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default SizeSetting;