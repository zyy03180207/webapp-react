import React from 'react';
import ReactDOM from 'react-dom';
//router,redux
import {Router, Route,Link,Switch } from 'react-router-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import createHistory from 'history/createBrowserHistory';
import { Provider } from 'react-redux';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';
//reducers
import rootReducer from '../reducers/index.js';


//containers
import Home from '../containers/Home.js';
import Qrcode from '../containers/Qrcode.js';
import Quick from '../containers/Quick.js';
import Mine from '../containers/Mine.js';
const history = createHistory();
const middleware = routerMiddleware(history);
const store = createStore(
		  combineReducers({
		    router: routerReducer,
		    ...rootReducer,
		  }),
		  applyMiddleware(middleware)
		);
 


class HomeController extends React.Component{

    constructor(props, context){
        super(props);
    }
     render() {
         return (
        		 <Router history={history}><Switch>
        		 <Route exact path="/" component={Home}/>
        		 <Route exact path="/home" component={Home}/>
        		 <Route exact path="/quick" component={Quick}/>
        		 <Route exact path="/qrcode" component={Qrcode}/>
        		 <Route exact path="/mine" component={Mine}/>
        		 </Switch></Router>);
     }
}
ReactDOM.render(<HomeController/>, document.getElementById('root'))

