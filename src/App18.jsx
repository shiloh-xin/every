import React, { Component } from 'react';
// 引入axios
import axios from 'axios';

class App18 extends Component {
    state = {
        ipInfo: {},
    };

    render() {
        let { ip, country, area } = this.state.ipInfo;
        return (
            <div>
                当前的IP地址是：{ip} - {country} / {area}
            </div>
        );
    }

    // 类似于vue中的mounted
    async componentDidMount() {
        let ret = await axios.get('/api/currencyRate');
        // console.log(ret.data);
        this.setState(() => {
            return {
                ipInfo: ret.data,
            };
        });
    }
}

export default App18;
