import {combineReducers} from 'redux';
import footer from "./footer/footer";
import header from "./header/header";
import searchList from "./searchList/reducers/searchList";
import model from "./model/model";

export default combineReducers({
  footer,
  header,
  searchList,
  model
});
