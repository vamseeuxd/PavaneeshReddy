export function updateSearchList(payload) {
  return {
    type: 'UPDATE SEARCH LIST',
    payload
  }
};

export function UpdateSelectedListItem(type, payload) {
  return {
    type,
    payload
  }
};

export function showFormDetailsModel(isOpen) {
  return {
    type: 'SHOW FORM DETAILS MODEL',
    payload: isOpen
  }
};

export function updateSearchTextValue(value) {
  return {
    type: 'UPDATE SEARCH TEXT VALUE',
    payload: value
  }
};
