import React, {Component} from 'react';
import {AppSidebarToggler} from '@coreui/react';
import connect from "react-redux/es/connect/connect";

class DefaultHeader extends Component {
  render() {
    return (
      <React.Fragment>
        <AppSidebarToggler className="d-lg-none" display="md" mobile/>
        <h3 className="ml-5 mt-2 text-primary font-weight-bold d-inline-block">
          {this.props.brand}
          <AppSidebarToggler className="ml-5 d-md-down-none" display="lg"/>
        </h3>
        <p className="text-danger font-weight-bold mr-5 mt-3 d-inline-block">
          {this.props.selectedLibrary ? this.props.selectedLibrary['name'] : ''}
        </p>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    brand: state.header.brand,
    selectedLibrary: state.model.selectedLibrary,
  }
};

export default connect(mapStateToProps)(DefaultHeader);
