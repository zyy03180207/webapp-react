import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import NavBar from '../navigation/NavBar.js'
export default class Quick extends Component {
    static defaultProps={
        prefixCls: 'quick',
    }
    constructor(props, context){
        super(props);
        this.state = {};
    }
    
    
    render() {
        return (
            <div>
                <NavBar title='快捷收款' backText='' />
            </div>
        );
    }
}
