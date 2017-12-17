import React from 'react';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import {NavigationComponent} from './Navigation/Navigation';
import {ProductListContainer} from './ProductList/ProductListContainer';
import registerServiceWorker from './registerServiceWorker';
import ReactDom from "react";


ReactDom.render((
        <Route>
            <Route path="/" component={NavigationComponent} />
            <Route path="/" component={ProductListContainer} />
        </Route>
    </Router>
), document.getElementById('root'));
registerServiceWorker();
