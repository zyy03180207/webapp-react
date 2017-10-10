import React from 'react';
import  './NavBar.less';

export default class NavBar extends React.Component{
    static defaultProps={
      prefixCls:'navbar',
      onBack:()=>{},
      onMenu:()=>{},

      backIcon:'icon-return',
      backText:'返回',
      menuText:'',
      menuIcon:null,
      title:'',
    }
    constructor(props, context){
        super(props);
        this.state = {};
    }
    getBack=()=>{
      const {prefixCls,backIcon,backText,onBack} = this.props;
      let el1 = (<div className={`${prefixCls}-back`} onClick={(e)=>{onBack();e.preventDefault();}}>
                <i className={`icon iconfont ${backIcon}`}></i>{backText}
              </div>);
      return el1;
    }

    getMenu=()=>{
      const {prefixCls,menuIcon,onMenu} = this.props;
      let el;
      if(menuIcon!=null){
        el = (<div className={`${prefixCls}-menu`} onClick={()=>{onMenu();}}>
              <i className={`icon iconfont ${menuIcon}`} ></i>
          </div>);
      }
      return el;
    }

    render() {
      const {prefixCls,title,style} = this.props;
      let backEl = this.getBack();
      let menuEl = this.getMenu();
      return(
          <div className={`${prefixCls}`} style={style}>
            {backEl}
             <div className={`${prefixCls}-title`}>{title}</div>
            {menuEl}
          </div>
        );
    }
}
