const defaultHeaderState = {brand: 'VENOM'}
const header = (state = defaultHeaderState, action) => {
  switch (action.type) {
    case 'HEADER_BRAND':
      return {...state, brand: action['payload']['brand']}
    default:
      return state
  }
}
export default header;
