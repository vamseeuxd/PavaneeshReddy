import React, {Component} from 'react';
import {Bar, Line} from 'react-chartjs-2';
import {
  ButtonDropdown,
  ButtonGroup,
  Card,
  CardBody,
  Col,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Row,
} from 'reactstrap';
import {CustomTooltips} from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import {getStyle} from '@coreui/coreui/dist/js/coreui-utilities'
import {
  updateSearchList,
  updateSearchTextValue,
  UpdateSelectedListItem
} from "../../store/searchList/actions/searchList";
import connect from "react-redux/es/connect/connect";
import _ from "lodash";

class Tiles extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    if (this.props.selectedForm) {
      console.log(this.props.selectedForm.url);
      fetch(this.props.selectedForm.url).then(response => response.json()).then(data => {
        this.props.updateSearchList(data.grid[1]['tiles'], this.getNavItem.bind(this));
      });
    } else {
      window.location = './#/libraries';
    }
  }

  deleteItem() {
    alert('Item Deleted');
  }

  editItem() {
    alert('Item Edited');
  }

  getDeleteButton() {
    return <button type="button" className="btn btn-brand btn-danger" onClick={this.deleteItem.bind(this)}>
      <i className="fa fa-trash-o"></i>
    </button>
  }

  getEditButton() {
    return <button type="button" className="btn btn-brand btn-primary ml-1" onClick={this.editItem.bind(this)}>
      <i className="fa fa-pencil-square-o"></i>
    </button>
  }

  getNavItemLink(item, onItemSelection) {
    return <span className="nav-link" onClick={event => {
      onItemSelection(item);
    }}>{item['name']}
      <p className="text-danger">Description</p>
    </span>
  }

  onItemSelection(item) {
    this.props.UpdateSelectedListItem('UPDATE SELECTED Title', item);
    this.props.updateSearchTextValue('');
  }

  getNavItem(item, onItemSelection) {
    const uniqueKey = _.uniqueId('contact_');
    return <li draggable className="nav-item" key={uniqueKey}>
      {this.getNavItemLink(item, this.onItemSelection.bind(this))}
      <div className="action-bar">
        {this.getDeleteButton()}
        {this.getEditButton()}
      </div>
    </li>
  }

  render() {

    return (
      <div className="animated fadeIn">
        <h4>Tiles</h4>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateSearchList: (list, searchResultNavItemRenderer) => {
    const data = {
      list: list,
      labelField: 'name',
      listName: 'tile',
      isBackButton: true,
      backButtonLink: '#/forms',
      isDetailsButton: false,
      isSearchInput: false,
      searchResultNavItemRenderer: searchResultNavItemRenderer,
      updateListActionType: 'UPDATE SELECTED Title'
    }
    dispatch(updateSearchList(data));
  },
  UpdateSelectedListItem: (type, payload) => {
    dispatch(UpdateSelectedListItem(type, payload));
  },
  updateSearchTextValue: value => {
    dispatch(updateSearchTextValue(value));
  }
});

const mapStateToProps = (state) => {
  return {
    selectedForm: state.model.selectedForm
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Tiles);
