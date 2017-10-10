import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route,Link,Switch } from 'react-router-dom';
//import createHistory from 'history/createBrowserHistory';
import createHistory from 'history/createHashHistory';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';



import Home from '../containers/Home.js';
import Qrcode from '../containers/Qrcode.js';
import Quick from '../containers/Quick.js';
import Mine from '../containers/Mine.js';
import TabBar from '../navigation/TabBar.js';

const history = createHistory();
const middleware = routerMiddleware(history);
const store = createStore(
		  combineReducers({
		    router: routerReducer
		  }),
		  applyMiddleware(middleware)
		);
 
class IndexController extends React.Component{

    constructor(props, context){
        super(props);
        this.state = {tabMenus:[
            {icon:'icon-hzl-home',clr:'#33333',title:'首页',url:'/home'},
        {icon:'icon-hzl-mine',clr:'#eb4f38',title:'我的',url:'/mine'},
        ],};
    }
     render() {
         let tabbar;
         tabbar = (<TabBar data={this.state.tabMenus} />);
         return (
        <Provider store={store}>
         <ConnectedRouter history={history}><Switch>
             <Route exact path="/" component={Home}/>
             <Route exact path="/home" component={Home}/>
             <Route exact path="/quick" component={Quick}/>
             <Route exact path="/qrcode" component={Qrcode}/>
             <Route exact path="/mine" component={Mine}/>
             </Switch></ConnectedRouter>
             </Provider>);
     }
    
}
ReactDOM.render(<IndexController/>, document.getElementById('root'))

