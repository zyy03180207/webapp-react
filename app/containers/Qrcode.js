import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import NavBar from '../navigation/NavBar.js';

export default class Qrcode extends Component {
    static defaultProps={
        prefixCls: 'qrcode',
    }
    constructor(props, context){
        super(props);
        this.state = {};
    }

    componentWillMount(){
        console.log("componentWillMount");
        // alert(123);
    }

    componentDidMount(){
        console.log("componentDidMount");

    }
    
    componentWillReceiveProps(nextProps){
        console.log("componentDidMount");        
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log("shouldComponentUpdate");    
        return true;    
    }
    
    componentWillUpdate(nextProps, nextState){
        console.log("componentWillUpdate");        
    }

    componentDidUpdate(){
        console.log("componentDidUpdate");    
    }
    
    
    render() {
        return (
            <div>
            <NavBar title='二维码收款' backText='' />
            
            </div>
        );
    }
}
