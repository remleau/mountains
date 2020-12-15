const initialState = {
  userInfo: [],
  isLoggedIn: true,
}

export const reducerUsers = (state = initialState, action) => {
  switch (action.type) {
    case 'get/user':
      return {
        ...state,
        isLoggedIn: true
      }

    case 'logout/user':
      return {
        ...state,
        isLoggedIn: false
      }

    case 'test/user':
      return {
        ...state,
        userInfo: [
          {
            'email': 'allo@gmail.com'
          }
        ]
      }

    default:
      return state

  }
}

export const isLogged = () => async (dispatch, getState) => {

  console.log('check user on refresh')

  // dispatch({
  //   type: 'get/user'
  // })

  const user = getState().users;

  return user.isLoggedIn;
}

export const logMeIn = () => async (dispatch, getState) => {
  
  dispatch({
    type: 'get/user'
  })
  
  const user = getState().users;

  return user.isLoggedIn;
}

export const logMeOut = () => async (dispatch, getState) => {

  dispatch({
    type: 'logout/user'
  })

  const user = getState().users;

  return user.isLoggedIn;
}