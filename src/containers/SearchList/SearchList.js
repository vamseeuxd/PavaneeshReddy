import React, {Component} from 'react';
import './SearchList.scss';
import _ from 'lodash';

class SearchList extends Component {

  /*
  * This option will mapped to redux store
  * */
  dataProvider = [
    'Sample Item 0',
    'Sample Item 1',
    'Sample Item 2',
    'Sample Item 3',
    'Sample Item 4',
    'Sample Item 5',
    'Sample Item 6',
    'Sample Item 7',
    'Sample Item 8',
    'Sample Item 9',
    'Sample Item 10',
    'Sample Item 11',
    'Sample Item 12',
    'Sample Item 13',
    'Sample Item 14',
    'Sample Item 15',
    'Sample Item 16',
    'Sample Item 17',
    'Sample Item 18',
    'Sample Item 19'
  ];

  constructor(props) {
    super(props);
    this.state = {searchTextValue: ''};
  }

  getFilteredList() {
    return (this.state.searchTextValue.trim() == '') ? [] : this.dataProvider.filter(item => item.toLowerCase().indexOf(this.state.searchTextValue.toLowerCase()) >= 0);
  }

  /*
  * This option will mapped to redux store
  * */
  deleteItem() {
    alert('Item Deleted');
  }

  /*
  * This option will mapped to redux store
  * */
  editItem() {
    alert('Item Edited');
  }

  /*
  * This option will mapped to redux store
  * */
  onItemSelection() {
    alert('Item Selected');
  }

  /*
  * This option will mapped to redux store
  * */
  searchTextChange(event) {
    this.setState({searchTextValue: event.target.value});
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


  getNavItemLink(text) {
    return <span className="nav-link" onClick={this.onItemSelection.bind(this)}>{text}</span>
  }

  getNavItem(text) {
    const uniqueKey = _.uniqueId('contact_');
    return <li className="nav-item" key={uniqueKey}>
      {this.getNavItemLink(text)}
      <div className="action-bar">
        {this.getDeleteButton()}
        {this.getEditButton()}
      </div>
    </li>
  }

  getSearchController() {
    return <li className="nav-title">
      <div className="form-group">
        <input type="text" onChange={(event) => {
          this.searchTextChange(event)
        }}
               className="form-control"
               placeholder="Search Libraries"
               value={this.state.searchTextValue}/>
      </div>
    </li>
  }

  getNavItemsList() {
    const filteredList = this.getFilteredList();
    return filteredList ? filteredList.map(item => this.getNavItem(item)) : [];
  }

  render() {
    return (
      <div className="sidebar search-list">
        <nav className="sidebar-nav">
          <ul className="nav">
            {this.getSearchController()}
            {this.getNavItemsList()}
          </ul>
        </nav>
      </div>
    );
  }
}

export default SearchList;
