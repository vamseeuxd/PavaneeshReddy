import React, {Component} from 'react';
import {Nav, NavItem, NavLink} from 'reactstrap';
import {AppSidebarToggler} from '@coreui/react';
import connect from "react-redux/es/connect/connect";

class DefaultHeader extends Component {
  render() {
    return (
      <React.Fragment>
        <AppSidebarToggler className="d-lg-none" display="md" mobile/>
        <h3 className="ml-5 text-primary font-weight-bold d-inline-block">
          {this.props.brand}
          <AppSidebarToggler className="ml-5 d-md-down-none" display="lg"/>
        </h3>

        <Nav className="d-md-down-none" navbar>
          <NavItem className="px-3">
            <NavLink href="#/libraries">Libraries</NavLink>
          </NavItem>
          <NavItem className="px-3">
            <NavLink href="#/forms">Forms</NavLink>
          </NavItem>
          <NavItem className="px-3">
            <NavLink href="#/tiles">Tiles</NavLink>
          </NavItem>
        </Nav>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    brand: state.header.brand,
  }
};

export default connect(mapStateToProps)(DefaultHeader);
