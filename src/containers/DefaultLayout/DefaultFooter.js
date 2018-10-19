import React, {Component} from 'react';
import {connect} from "react-redux";

class DefaultFooter extends Component {
  render() {
    return (
      <React.Fragment>
        <span>{this.props.copyright}</span>
        <span className="ml-auto">{this.props.poweredBy}</span>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    poweredBy: state.footer.poweredBy,
    copyright: state.footer.copyright,
  }
};

export default connect(mapStateToProps)(DefaultFooter);
