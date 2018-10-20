const defaultModelState = {
  selectedLibrary: null,
  selectedForm: null,
  searchTextValue: '',
  showFormDetailsModel: false,
}
const model = (state = defaultModelState, action) => {
  switch (action.type) {
    case 'UPDATE SELECTED LIBRARY':
      window.location = './#/forms';
      return {
        ...state,
        selectedLibrary: action['payload']
      }
    case 'UPDATE SELECTED FORM':
      window.location = './#/tiles';
      return {
        ...state,
        selectedForm: action['payload']
      }
    case 'SHOW FORM DETAILS MODEL':
      return {
        ...state,
        showFormDetailsModel: action['payload']
      }
    case 'UPDATE SEARCH TEXT VALUE':
      return {
        ...state,
        searchTextValue: action['payload']
      }
    default:
      return state
  }
}
export default model;
