const mainReducer = (state,action) => {
    
    switch(action.type){
        case 'ADD_FOLDERS_TO_ARRAY':
            return {
                ...state,
                folderArray:[...state.folderArray,...action.folderArray],
                max:action.max,
                skips:action.skips
            }
        default:
            return undefined;
    }
}

export default mainReducer;