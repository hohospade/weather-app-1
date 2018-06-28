import { combineReducers } from 'redux';
import SearchFieldReducer from '../components/SearchField/searchFieldReducer';
import SearchHistoryReducer from '../components/SearchHistory/searchHistoryReducer';

const rootReducer = combineReducers({
  searchField: SearchFieldReducer,
  searchHistory: SearchHistoryReducer,
});

export default rootReducer;