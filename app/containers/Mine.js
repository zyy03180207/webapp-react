import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import TabBar from '../navigation/TabBar.js';

export default class Mine extends Component {
    static defaultProps={
        prefixCls: 'mine',
    }
    constructor(props, context){
        super(props);
        this.state = {tabMenus:[
            {icon:'icon-hzl-home',clr:'#33333',title:'首页',url:'/home'},
        {icon:'icon-hzl-mine_selected',clr:'#eb4f38',title:'我的',url:'/mine'},
        ]
        };
    }
    
    
    render() {
        return (
            <div>
            我的<Link to="/home">返回</Link>
            <TabBar data={this.state.tabMenus} />
            </div>
        );
    }
}
