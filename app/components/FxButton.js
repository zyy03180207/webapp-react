import React from 'react';
import classNames from 'classnames';
import './FxButton.less';
export default class FxButton extends React.Component{
    static defaultProps={
        prefixCls: 'fx-button',
        disabled: false,
        inline: false,
        type:'',
    }
    constructor(props, context){
        super(props);
        this.state = {};
    }
    render() {
        const {prefixCls,children,className,type,inline,disabled, ...restProps} = this.props;
        const wrapCls = {
          [prefixCls]: true,
          [`${prefixCls}-info`]: type === 'info',
          [`${prefixCls}-warn`]: type === 'warn',
          [`${prefixCls}-succ`]: type === 'succ',
          [`${prefixCls}-inline`]: inline,
          [`${prefixCls}-disabled`]: disabled,
        };
        return(
            <div className={classNames(wrapCls)}>{children}</div>
        );
    }
}
