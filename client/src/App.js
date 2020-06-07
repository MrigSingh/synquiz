import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import routes from './routesConfig';
import { Provider } from "react-redux";
import store from "./store";

function App() {

  return (
    <Provider store={store}>
      <div className="App">
        <Switch>
          {routes.map((route,index) => 
            <Route 
              key={index} 
              path={route.route}
              component={route.component}
              exact={route.exact} 
            />)}
        </Switch>
      </div>
    </Provider>
  );
}

export default App;
