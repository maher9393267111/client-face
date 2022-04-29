
// create reducer

const different = (state = {}, action) => {


    switch (action.type) {
        case "SET_EMAIL":
        return {
            ...state,
            emailRedux: action.payload
        };
        case "SET_CODE":
        return {
            ...state,
            code: action.payload
        };
        case "SET_ERROR":
        return {
            ...state,
            error: action.payload
        };
        case "SET_USER_INFOS":
        return {
            ...state,
            userInfos: action.payload
        };
        case "SET_VISIBLE":
        return {
            ...state,
            visible: action.payload
        };
        case "SET_LOADING":
        return {
            ...state,
            loading: action.payload
        };
        default:
        return state;
    }
    }


export default different;