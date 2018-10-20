const defaultSearchListState = {
  list: [],
  labelField: '',
  listName: '',
  backButtonLink: '',
  isBackButton: false,
  isSearchInput: false,
  isDetailsButton: false,
  updateListActionType: '',
  searchResultNavItemRenderer: null
}
const searchList = (state = defaultSearchListState, action) => {
  switch (action.type) {
    case 'UPDATE SEARCH LIST':
      return {
        list: action['payload']['list'],
        labelField: action['payload']['labelField'],
        listName: action['payload']['listName'],
        isBackButton: action['payload']['isBackButton'],
        backButtonLink: action['payload']['backButtonLink'],
        isDetailsButton: action['payload']['isDetailsButton'],
        isSearchInput: action['payload']['isSearchInput'],
        searchResultNavItemRenderer: action['payload']['searchResultNavItemRenderer'],
        updateListActionType: action['payload']['updateListActionType']
      }
    default:
      return state
  }
}
export default searchList;
