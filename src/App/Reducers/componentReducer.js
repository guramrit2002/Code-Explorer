const initialState = {
    ComponentId:null
}

function componentReducer(state = initialState,action){
    switch (action.type) {
        case 'SET_COMPONENT_ID':
        return {
            ...state,
            ComponentId: action.payload,
        };
        default:
            return state;
    }
}

export default  componentReducer