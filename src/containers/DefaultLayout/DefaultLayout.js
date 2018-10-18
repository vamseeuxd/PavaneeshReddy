import React, {Component} from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import {Container} from 'reactstrap';

import {
  AppBreadcrumb,
  AppFooter,
  AppHeader,
  AppSidebar,
} from '@coreui/react';
// sidebar nav config
// routes config
import routes from '../../routes';
import DefaultFooter from './DefaultFooter';
import DefaultHeader from './DefaultHeader';
import SearchList from "../SearchList/SearchList";

class DefaultLayout extends Component {
  render() {
    return (
      <div className="app">
        <AppHeader fixed>
          <DefaultHeader/>
        </AppHeader>
        <div className="app-body">
          <AppSidebar fixed display="lg">
            <SearchList/>
          </AppSidebar>
          <main className="main">
            <AppBreadcrumb appRoutes={routes}/>
            <Container fluid>
              <Switch>
                {routes.map((route, idx) => {
                    return route.component ? (
                        <Route key={idx} path={route.path} exact={route.exact} name={route.name} render={props => (
                          <route.component {...props} />
                        )}/>)
                      : (null);
                  },
                )}
                <Redirect from="/" to="/Libraries"/>
              </Switch>
            </Container>
          </main>
        </div>
        <AppFooter>
          <DefaultFooter/>
        </AppFooter>
      </div>
    );
  }
}

export default DefaultLayout;
