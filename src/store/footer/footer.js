const defaultFooterState = {copyright: 'Venom © 2018 Venom.', poweredBy: 'Powered by Venom'}
const footer = (state = defaultFooterState, action) => {
  switch (action.type) {
    case 'FOOTER_COPYRIGHT':
      return {...state, copyright: action['payload']['copyright']}
    case 'FOOTER_POWEREDBY':
      return {...state, poweredBy: action['payload']['poweredBy']}
    default:
      return state
  }
}
export default footer;
