import { connect } from 'react-redux';
import SearchHistory from './SearchHistory';
//File taken from budget tracker as foundation to update for this new project.
function mapStoreToProps(store) {
    return {
        searchItems: store.searchHistory.searchItems
    };
}

export default connect(mapStoreToProps)(SearchHistory);
