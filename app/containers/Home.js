import React, { Component } from 'react';
import {withRouter} from "react-router-dom";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './Home.less'

import Grid from '../components/Grid.js';
import TabBar from '../navigation/TabBar.js';
import NavBar from '../navigation/NavBar.js';

import {updateTab,updateTop,updateFun} from '../actions/global.js'


class Home extends Component {
    static defaultProps={
        prefixCls: 'home',
    }
    
    constructor(props, context){
        super(props);
        this.state = {quickMenus:[
            {icon:'icon-hzl_code',clr:'#FFFFFF',title:'二维码收款',url:'/qrcode'},
            {icon:'icon-hzl_quick',clr:'#FFFFFF',title:'快捷收款',url:'/quick'},
            ],allMenus:[
            {icon:'icon-hzl_top',clr:'#eb4f38',title:'手机充值',url:'/quick'},
            {icon:'icon-hzl_flow',clr:'#eb4f38',title:'流量充值',url:''},
            {icon:'icon-hzl_living',clr:'#eb4f38',title:'生活缴费',url:''},
            {icon:'icon-hzl_approve',clr:'#00bb9c',title:'实名认证',url:''},
            {icon:'icon-payment_icon',clr:'#56abe4',title:'我的台签码',url:''},
            {icon:'icon-hzl_promation',clr:'#56abe4',title:'交易额度提升',url:''},
            {icon:'icon-hzl-pepayment',clr:'#eb4f38',title:'信用卡还款',url:''},
            {icon:'icon-hzl-application',clr:'#00bb9c',title:'信用卡申请',url:''}
            ],tabMenus:[
            {icon:'icon-hzl-home_selected',clr:'#33333',title:'首页',url:'/home'},
        {icon:'icon-hzl-mine',clr:'#eb4f38',title:'我的',url:'/mine'},
        ]
        };
    }
    
    componentWillMount() {
    	console.log("this.props:",this.props.store);
    	console.log("this.context:",this.context);
    	console.log("this.store:",this.store);
//        const { tabData} = this.props.store.getState();
//        console.log("tabData:",tabData);
    }
    
  
    
    
    toUrl=(item,idx)=>{
        this.props.history.push(item.url);
    }



    getQuick=()=>{
        const {prefixCls} = this.props;
        let {quickMenus} = this.state;
        let el =(<div className={`${prefixCls}-quick`}><Grid column={2} data={quickMenus} iconSize="2rem" style={{color:'#FFFFFF'}} onItemClick={this.toUrl}/></div>);
        return el;
    }

    
    getMenus=()=>{
        const {prefixCls} = this.props;
        let {allMenus} = this.state;

        let el =(<div className={`${prefixCls}-menus`}>
            <Grid column={4} data={allMenus} onItemClick={this.toUrl}/>
        </div>);
        return el;
    }

    getBanner=()=>{

    }
   
    
    render() {
        let quick = this.getQuick();
        let menus = this.getMenus();
        return (
            <div>
            <NavBar title="" backText="登陆" backIcon="icon-hzl_login"/>
            {quick}
            {menus}
            <TabBar data={this.state.tabMenus} onClick={this.toUrl}/>
            </div>
        );
    }
}
export default Home;
