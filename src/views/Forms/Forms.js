import React, {Component} from 'react';
import {
  showFormDetailsModel,
  updateSearchList, updateSearchTextValue,
  UpdateSelectedListItem
} from "../../store/searchList/actions/searchList";
import connect from "react-redux/es/connect/connect";
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import _ from "lodash";

class Forms extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedLibraryDetails: {},
      selectedLibraryDetailsDate: {},
      selectedLibraryDetailsReps: {},
      showDetailsModel: false,
      isDetailsModelDataReceived: false
    };
    if (this.props.selectedLibrary) {
      fetch(this.props.selectedLibrary.url).then(response => response.json()).then(data => {
        this.props.updateSearchList(data['forms'], this.getNavItem.bind(this));
        this.setState({selectedLibraryDetails: data.details});
        this.setState({selectedLibraryDetailsDate: data.details.dayZero});
        this.setState({selectedLibraryDetailsReps: data.details.reps});
        this.setState({isDetailsModelDataReceived: true});
      });
    } else {
      window.location = './#/libraries';
    }
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.props.showFormDetailsModel(!this.props['showDetailsModel']);
  }

  getDetailsModel() {
    return this.state.isDetailsModelDataReceived ?
      <Modal isOpen={this.props['showDetailsModel']} toggle={this.toggle}>
        <ModalHeader toggle={this.toggle}>Library Details</ModalHeader>
        <ModalBody>
          <label>
            Day Zero: {this.state.selectedLibraryDetailsDate.dateZeroValue}
          </label>
          <table className="table table-bordered">
            <thead>
            <tr>
              <th>Role</th>
              <th>Name</th>
            </tr>
            </thead>
            <tbody>
            {
              this.state.selectedLibraryDetailsReps.map((data, _index1) => {
                return (
                  <tr key={_index1}>
                    <td>{data.role}</td>
                    <td>{data.name}</td>
                  </tr>
                )
              })
            }
            </tbody>
          </table>
        </ModalBody>
      </Modal> : '';
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
  onItemSelection(item) {
    this.props.UpdateSelectedListItem('UPDATE SELECTED FORM', item);
    this.props.updateSearchTextValue('');
  }
  getNavItemLink(item, onItemSelection) {
    return <span className="nav-link" onClick={event => {
      onItemSelection(item);
    }}>{item['name']}</span>
  }

  getNavItem(item, onItemSelection) {
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
        <h4>Forms</h4>
        {this.getDetailsModel()}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateSearchList: (list, searchResultNavItemRenderer) => {
    const data = {
      list: list,
      labelField: 'name',
      listName: 'form',
      isBackButton: true,
      backButtonLink: '#/libraries',
      isDetailsButton: true,
      isSearchInput: false,
      searchResultNavItemRenderer: searchResultNavItemRenderer,
      updateListActionType: 'UPDATE SELECTED FORM'
    }
    dispatch(updateSearchList(data));
  },
  showFormDetailsModel: isOpen => {
    dispatch(showFormDetailsModel(isOpen));
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
    selectedLibrary: state.model.selectedLibrary,
    showDetailsModel: state.model.showFormDetailsModel,
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Forms);
