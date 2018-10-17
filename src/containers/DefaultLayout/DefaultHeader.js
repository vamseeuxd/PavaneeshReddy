import React, {Component} from 'react';
import {Badge, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem, NavLink} from 'reactstrap';
import PropTypes from 'prop-types';

import {AppAsideToggler, AppHeaderDropdown, AppNavbarBrand, AppSidebarToggler} from '@coreui/react';
import logo from '../../assets/img/brand/logo.svg'
import sygnet from '../../assets/img/brand/sygnet.svg'

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultHeader extends Component {
  render() {

    // eslint-disable-next-line
    const {children, ...attributes} = this.props;

    return (
      <React.Fragment>
        <AppSidebarToggler className="d-lg-none" display="md" mobile/>
        <h3 className="ml-5 text-primary font-weight-bold d-inline-block">
          zoetis
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

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

export default DefaultHeader;
