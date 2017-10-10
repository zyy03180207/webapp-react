import React from 'react';
import styles from './HeaderText.css';

class HeaderText extends React.Component{
    static defaultProps={
      fixed:false,
      leftCont:"返回",
      leftClick:()=>{},
      rightCont:"",
    }
    constructor(props, context){
        super(props);
        this.state = {};
    }
    render() {
      const {children,fixed,leftCont,leftClick,rightCont,...restProps} = this.props;
        return(
            <div {...restProps} className={fixed?styles.headerFixed:styles.headerText}>
            <div className={styles.headerLeft}>
                <span className={styles.headerLeftIcon}></span>
                <span className={styles.headerLeftCont}>{leftCont}</span>
            </div>
            <div className={styles.headerTitle}>{children}</div>
            <div className={styles.headerRight}>
              {rightCont}
            </div>
          </div>
        );
    }



}
export default HeaderText;
