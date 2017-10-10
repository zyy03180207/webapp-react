import React from 'react';
import classNames from 'classnames';
import {Link} from 'react-router-dom'
import './TabBar.less';
export default class TabBar extends React.Component{
    static defaultProps={
        prefixCls: 'tabbar',
        type:'',
        data: [{icon:'icon-hzl_top',clr:'#eb4f38',title:'手机充值',url:'/grid'},
        {icon:'icon-hzl_flow',clr:'#eb4f38',title:'流量充值',url:'/home'},
        {icon:'icon-hzl_living',clr:'#eb4f38',title:'生活缴费',url:'/login'},
        {icon:'icon-hzl_approve',clr:'#00bb9c',title:'实名认证',url:''},
        ]
    }
    constructor(props, context){
        super(props);
        this.state = {};
    }
    getItems=()=>{
      let {data, onClick, prefixCls,} = this.props;
      const dataLen = data && data.length || 1;
      const rowWidth = `${100 / dataLen}%`;
      const colStyle = {
        width: rowWidth,
      };
      const itemCls = {
          [`${prefixCls}-item`]: true,
      }; 
      const itemArr = [];
      for (let idx = 0; idx < data.length; idx++) {
         let itemEl;
         let item = data[idx];
         itemEl =(<div key={`${prefixCls}-item-${idx}`} className={classNames(itemCls)} style={colStyle} onClick={() => onClick && onClick(item, idx)}>
                  <Link to={`${item.url}`}><div className={`${prefixCls}-icon`} ><i className={`icon iconfont ${item.icon}`}  style={{color:item.clr,fontSize:"1.2rem"}} ></i></div>
                  <div className={`${prefixCls}-title`}>{item.title}</div></Link>
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
