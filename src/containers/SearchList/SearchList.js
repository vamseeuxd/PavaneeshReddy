import React, {Component} from 'react';
import './SearchList.scss';
import connect from "react-redux/es/connect/connect";
import {
  showFormDetailsModel,
  updateSearchTextValue,
  UpdateSelectedListItem
} from "../../store/searchList/actions/searchList";

class SearchList extends Component {

  constructor(props) {
    super(props);
  }

  getFilteredList() {
    if (this.props['isSearchInput']) {
      return (this.props.searchTextValue.trim() === '') ? [] :
        this.props['list'].filter(item => item[this.props['labelField']].toLowerCase().indexOf(this.props.searchTextValue.toLowerCase()) >= 0);
    } else {
      return this.props['list'];
    }
  }

  searchTextChange(event) {
    this.props.updateSearchTextValue(event.target.value)
  }

  getNavItem(item) {
    if (this.props.searchResultNavItemRenderer) {
      return this.props.searchResultNavItemRenderer(item);
    } else {
      return '';
    }
  }

  getSearchController() {
    return this.props['isSearchInput'] ? <li className="nav-title">
      <div className="form-group">
        <input type="text" onChange={(event) => {
          this.searchTextChange(event)
        }}
               className="form-control"
               placeholder="Search Libraries"
               value={this.props.searchTextValue}/>
      </div>
    </li> : '';
  }

  getNavItemsList() {
    const filteredList = this.getFilteredList();
    return filteredList ? filteredList.map(item => this.getNavItem(item)) : [];
  }

  backButtonClick() {
    if (this.props['backButtonLink']) {
      window.location = this.props['backButtonLink'];
    }
  }

  detailsButtonClick() {
    this.props.showFormDetailsModel(true);
  }

  getBackButton() {
    return this.props['isBackButton'] ? <button onClick={this.backButtonClick.bind(this)}
                                                className="btn btn-secondary btn-sm back-button">Back</button> : '';
  }

  getDetailsButton() {
    return this.props['isDetailsButton'] ?
      <button onClick={this.detailsButtonClick.bind(this)}
              className="btn btn-primary btn-sm details-button">Details</button> : '';
  }

  getNavActionButtons() {
    if (this.props['isBackButton'] || this.props['isDetailsButton']) {
      return <div className="btn-group m-1 mt-2">
        {this.getBackButton()}
        {this.getDetailsButton()}
      </div>
    } else {
      return '';
    }
  }

  render() {
    return (
      <div className="sidebar search-list">
        {this.getNavActionButtons()}
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

const mapStateToProps = (state) => {
  return {
    list: state.searchList.list,
    labelField: state.searchList.labelField,
    isBackButton: state.searchList.isBackButton,
    backButtonLink: state.searchList.backButtonLink,
    isSearchInput: state.searchList.isSearchInput,
    isDetailsButton: state.searchList.isDetailsButton,
    updateListActionType: state.searchList.updateListActionType,
    searchTextValue: state.model.searchTextValue,
    searchResultNavItemRenderer: state.searchList.searchResultNavItemRenderer,
  }
};

const mapDispatchToProps = dispatch => ({
  c: (type, payload) => {
    dispatch(UpdateSelectedListItem(type, payload));
  },
  showFormDetailsModel: isOpen => {
    dispatch(showFormDetailsModel(isOpen));
  },
  updateSearchTextValue: value => {
    dispatch(updateSearchTextValue(value));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchList);
