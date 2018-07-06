import { combineReducers } from 'redux';
import SearchFieldReducer from '../components/SearchField/searchFieldReducer';
import SearchHistoryReducer from '../components/SearchHistory/SearchHistoryReducer';
//format taken from budget tracker and update with current paths and changes.
const rootReducer = combineReducers({
  searchField: SearchFieldReducer,
  searchHistory: SearchHistoryReducer,
});

export default rootReducer;