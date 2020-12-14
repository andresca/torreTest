const AppReducer = (state = {lastGenome: 'andresbadel'}, action) => {

    const newState = {...state};

    switch(action.type){
        case 'searchResult':
            newState.searchResult = action.items;
        break;
        default: ;
    }

    return newState;
}

export default AppReducer;