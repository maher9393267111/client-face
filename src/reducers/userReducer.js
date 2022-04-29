export function userReducer(state = null, action) {
    switch (action.type) {
      case "LOGIN":
        return action.payload;
case 'VERIFY':
  return {...state, verified: action.payload}   

      
      case "LOGOUT":
        return null;



      default:
        return state;
    }
  }
  