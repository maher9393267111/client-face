
// create reducer

const different = (state = {createPostModal:false,text1:'tr'}, action) => {


    switch (action.type) {
        case "SET_EMAIL":
        return {
            ...state,
            emailRedux: action.payload
        };
        case "SET_USERINFO":
        return {
            ...state,
            userinfo: action.payload
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

        case "OPEN_CREATE_POST_MODAL":

        return {

            ...state,

            createPostModal: action.payload

        };

        case "CLOSE_CREATE_POST_MODAL":

        return {

            ...state,

            createPostModal: action.payload

        };

        case "SET_TEXT":

        return {

            ...state,

            text1: action.payload

        };

        
        default:
        return state;
    }
    }


export default different;