import { bindActionCreators } from 'redux';

const actions = {
    setSearchResult : (result) => ({type: 'searchResult', items: result})
};

const mapStateToProp = (state) => {
    return {
        searchResult : state.searchResult
    }
}

const mapDispatchToProps = (dispatch) => {
    return (
        bindActionCreators(actions, dispatch)
    )
}

export const mapElement = {mapStateToProp, mapDispatchToProps};