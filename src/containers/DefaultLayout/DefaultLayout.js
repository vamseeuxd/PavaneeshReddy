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

  breadcrumb() {
    const currentPage = window.location.href.split('#')[1];
    switch (currentPage) {
      case '/libraries':
        return (
          <ol className="breadcrumb m-0">
            <li className="breadcrumb-item">venom</li>
            <li className="active breadcrumb-item">Libraries</li>
          </ol>
        );
        break
      case '/forms':
        return (
          <ol className="breadcrumb m-0">
            <li className="breadcrumb-item">venom</li>
            <li className="breadcrumb-item"><a href="./#/libraries">Libraries</a></li>
            <li className="breadcrumb-item">Forms</li>
          </ol>
        );
        break
      case '/tiles':
        return (
          <ol className="breadcrumb m-0">
            <li className="breadcrumb-item">venom</li>
            <li className="breadcrumb-item"><a href="./#/libraries">Libraries</a></li>
            <li className="breadcrumb-item"><a href="./#/forms">Forms</a></li>
            <li className="active breadcrumb-item">Tiles</li>
          </ol>
        );
        break
    }
  }

  render() {
    return (
      <div className="app">
        <AppHeader fixed>
          <DefaultHeader/>
          <div className="col-12 m-0 p-0">
            {this.breadcrumb()}
          </div>
        </AppHeader>
        <div className="app-body">
          <AppSidebar fixed display="lg">
            <SearchList/>
          </AppSidebar>
          <main className="main">
            {/*<AppBreadcrumb appRoutes={routes}/>*/}
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
