import React from 'react';
import classNames from 'classnames';
import './FxInput.less';
export default class FxButton extends React.Component{
    static defaultProps={
        prefixCls: 'fx-input',
        disabled: false,
        type:"password",
        title:'标题',
        icon:null,
        
    }
    constructor(props, context){
        super(props);
        this.state = {showPass:false};
    }

    getTitle=()=>{
        const {prefixCls,title,icon} = this.props;
        let el;
        if(icon!=null){
            const wrapCls = {
              ['icon']: true,
              ['iconfont']: true,
              [`${icon}`]:true,
            };
            el =(<div className={`${prefixCls}-title`}><i className={classNames(wrapCls)}></i></div>);
        }else{
            el =(<div className={`${prefixCls}-title`}>{title}</div>);
        }
        return el;
    }
    
    getContent=()=>{
        let el;
        const {prefixCls,title,value,type,icon, ...restProps} = this.props;
        const {showPass} = this.state;
        const wrapCls = {
              ['icon']: true,
              ['iconfont']: true,
              ['icon-qingchu']:type==="text",
              ['icon-invisibie']:type==="password" && !showPass,
              ['icon-visible']: type==="password" && showPass,
              [`${prefixCls}-clear`]:type==="text",
              [`${prefixCls}-passwd`]:type==="password",
            };
        if(type==="text"){
            el=(<div className={`${prefixCls}-content`}>
                    <input ref="inputText" className={`${prefixCls}-input`} value={value}  required></input>
                    <i className={classNames(wrapCls)} onClick={this.clear}></i>
                </div>);
        }else{
            if(showPass){
                el=(<div className={`${prefixCls}-content`}>
                    <input ref="inputText" type="text" className={`${prefixCls}-input`} value={value}  required></input>
                    <i className={classNames(wrapCls)} onClick={this.changePassMode}></i>
                </div>);
            }else{
                el=(<div className={`${prefixCls}-content`}>
                    <input ref="inputText" type="password" className={`${prefixCls}-input`} value={value}  required></input>
                    <i className={classNames(wrapCls)} onClick={this.changePassMode}></i>
                </div>);
            }
        }
        return el;
    }

    changePassMode=()=>{
        const {showPass} = this.state;
        this.setState({showPass:!showPass});
        this.refs.inputText.focus();
    }

    clear =(e)=>{
        this.refs.inputText.value='';
        this.refs.inputText.focus();
    }
    render() {
        const {prefixCls} = this.props;
        let title = this.getTitle();
        let content = this.getContent();
        return(
            <div className={`${prefixCls}`}>
                {title}
                {content}
            </div>
        );
    }
}
