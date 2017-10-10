import React from 'react';
import classNames from 'classnames';
import './Grid.less';
export default class Grid extends React.Component{
    //data,ic,icc,ics,ti,tic,tis,url
    //data列表  ic:图标,icc:图标颜色,ics:图标大小,ti:标题,tic:标题颜色,tis:标题大小
    static defaultProps={
        prefixCls: 'grid',
        column:4,
        iconSize:"1.4rem",
        titleSize:"0.8rem",
        itemGap:"0.2rem",
        itemTop:"1rem",
        itemBottom:"1rem",
        data: [{icon:'icon-hzl_top',clr:'#eb4f38',title:'手机充值',url:''},
        {icon:'icon-hzl_flow',clr:'#eb4f38',title:'流量充值',url:''},
        {icon:'icon-hzl_living',clr:'#eb4f38',title:'生活缴费',url:''},
        {icon:'icon-hzl_approve',clr:'#00bb9c',title:'实名认证',url:''},
        {icon:'icon-payment_icon',clr:'#56abe4',title:'我的台签码',url:''},
        {icon:'icon-hzl_promation',clr:'#56abe4',title:'交易额度提升',url:''},
        {icon:'icon-hzl-pepayment',clr:'#eb4f38',title:'信用卡还款',url:''},
        {icon:'icon-hzl-application',clr:'#00bb9c',title:'信用卡申请',url:''},
        ],
    }
    constructor(props, context){
        super(props);
        this.state = {};
    }

    getItems=()=>{
      let {column, data, onItemClick, prefixCls,iconSize,titleSize,itemGap,itemTop,itemBottom} = this.props;
      const dataLen = data && data.length || 0;
      const rowCount = Math.ceil(dataLen / column);
      const rowWidth = `${100 / column}%`;
      const itemStyle = {
        width: rowWidth,
        paddingTop:itemTop,
        paddingBottom:itemBottom,
      };
      const itemArr = [];
      for (let idx = 0; idx < data.length; idx++) {
         let itemEl;
         let item = data[idx];
         itemEl =(<div key={`${prefixCls}-it-${idx}`} className={`${prefixCls}-item`} style={itemStyle} onClick={() => onItemClick && onItemClick(item, idx)}>
                  <div className={`${prefixCls}-icon`} ><i className={`icon iconfont ${item.icon}`}  style={{color:item.clr,fontSize:iconSize,}} ></i></div>
                  <div className={`${prefixCls}-title`} style={{fontSize:titleSize,paddingTop:itemGap}}>{item.title}</div>
                  </div>);
         itemArr.push(itemEl);
      }
      return itemArr;
    }

    render() {
      let {prefixCls,style} = this.props;
      let itemArr = this.getItems();
      return(
        <div className={`${prefixCls}`} style={style}>{itemArr}</div>
      );
    }
}