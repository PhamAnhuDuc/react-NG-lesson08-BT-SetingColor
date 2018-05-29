import React, { Component } from 'react';
import './App.css';
import ColorPicker from './components/ColorPicker';
import Reset from './components/Reset';
import Result from './components/Result';
import SizeSetting from './components/SizeSetting';
class App extends Component {
    constructor(props) {
        super(props);
        //lưu giá trị ban đầu
        this.state = {
            color: 'red',
            fontSize: 15,
        }
    }

    //hàm nhận từ con trả ra
    onSetColor = (params) => {
        //console.log(params);
        this.setState({
            color: params
        });
    }
    //hàm nhận size từ con ra thông qua 1 cái props onChangeSize
    onChangeSize = (value) => {
        //console.log(this.state.fontSize + value);
        this.setState({
            fontSize: this.state.fontSize + value
        });
    }

    onSettingDefault = (value) => {
        console.log(value);
        if (value) {
            this.setState({
                color: 'red',
                fontSize: 15,
            })
        }
    }
    render() {

        return (
            <div className="row">
                <ColorPicker color={this.state.color} onReceiveColor={this.onSetColor} />
                <SizeSetting
                    fontSize={this.state.fontSize}
                    onChangeSize={this.onChangeSize}
                />
                <Reset onSettingDefault={this.onSettingDefault} />
                <Result color={this.state.color} fontSize={this.state.fontSize} />
            </div>
        );
    }
}

export default App;
