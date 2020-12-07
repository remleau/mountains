const initialState = {
  mountains: [
    {
      id: 1,
      title: 'mountain 1',
      excerpt: 'Petite description de la montagne tite description lorem ipsum dolar sit amet',
      image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80',
      link: '/mountain/1'
    },
    {
      id: 2,
      title: 'mountain 2',
      excerpt: 'Petite description de la montagne',
      image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80',
      link: '/mountain/2'
    },
    {
      id: 3,
      title: 'mountain 3',
      excerpt: 'Petite description de la montagne',
      image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80',
      link: '/mountain/3'
    },
    {
      id: 4,
      title: 'mountain 4',
      excerpt: 'Petite description de la montagne',
      image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80',
      link: '/mountain/4'
    },
    {
      id: 5,
      title: 'mountain 5',
      excerpt: 'Petite description de la montagne',
      image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80',
      link: '/mountain/5'
    }
  ],
  isFetching: true,
  errors: {}
}

const reducerMountains = (state = initialState, action) => {
  switch (action.type) {
    case 'get/mountains':
      return state

    case 'get_by_id/mountains':
      const idMountain = [parseInt(action.payload.mid)];
      const single_mountain = Object.keys(state.mountains).reduce(function (r, e) {
        if (idMountain.includes(state.mountains[e].id)) r[e] = state.mountains[e]
        return r
      }, {});

      return {
        mountains: single_mountain,
        isFetching: !action.payload.isFetching
      } 
     
    case 'add/mountains':
      const newState = [
        ...state.mountains,
        ...action.payload.mountains
      ]

      return {
        ...state,
        mountains: newState,
        /* errors: {
          error: 'Can\'t publish shitty garbage mountain'
        } */
      }

    case 'search/mountains':
      if (action.payload.term){
        const filtered_mountains = Object.keys(initialState.mountains).reduce(function (r, e) {
          if (initialState.mountains[e].title.includes(action.payload.term)) r[e] = initialState.mountains[e]
          return r
        }, {});
        
        return {
          ...state,
          mountains: filtered_mountains
        }
      }else {
        return initialState;
      }

    default:
      return state

  }
}

export default reducerMountains;