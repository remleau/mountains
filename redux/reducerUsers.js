const initialState = {
  userInfo: [],
  isLoggedIn: false,
}

export const reducerUsers = (state = initialState, action) => {
  switch (action.type) {
    case 'get/user':
      return {
        ...state,
        isLoggedIn: true
      }

    default:
      return state

  }
}

export const isLogged = () => async (dispatch, getState) => {
  const user = getState().users;

  console.log(user);

  return user.isLoggedIn;
}

export const logMeIn = () => async (dispatch, getState) => {
  
  dispatch({
    type: 'get/user'
  })
  
  const user = getState().users;

  return user.isLoggedIn;
}