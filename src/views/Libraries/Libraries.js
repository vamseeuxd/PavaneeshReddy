import React, {Component} from 'react';
import {
  updateSearchList,
  updateSearchTextValue,
  UpdateSelectedListItem
} from "../../store/searchList/actions/searchList";
import {connect} from "react-redux";
import _ from "lodash";

class Libraries extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    fetch('./data/libraryJson.json').then(response => response.json()).then(data => {
      this.props.updateSearchList(data['library'], this.getNavItem.bind(this));
    });
  }

  deleteItem() {
    alert('Item Deleted');
  }

  editItem() {
    alert('Item Edited');
  }

  onItemSelection(item) {
    this.props.UpdateSelectedListItem('UPDATE SELECTED LIBRARY', item);
    this.props.updateSearchTextValue('');
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
    }}>{item['name']}</span>
  }

  getNavItem(item) {
    const uniqueKey = _.uniqueId('contact_');
    return <li className="nav-item" key={uniqueKey}>
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
        <h4>Libraries</h4>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateSearchList: (list, searchResultNavItemRenderer) => {
    const data = {
      list: list,
      labelField: 'name',
      listName: 'library',
      isBackButton: false,
      isDetailsButton: false,
      isSearchInput: true,
      backButtonLink: '',
      searchResultNavItemRenderer: searchResultNavItemRenderer,
      updateListActionType: 'UPDATE SELECTED LIBRARY'
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

export default connect(null, mapDispatchToProps)(Libraries);
