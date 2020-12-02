const initialState = {
  mountains: {
    0: {
      id: 1,
      title: 'mountain 1',
      excerpt: 'Petite description de la montagne tite description lorem ipsum dolar sit amet',
      image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80',
      link: '/mountain/1'
    },
    1: {
      id: 2,
      title: 'mountain 2',
      excerpt: 'Petite description de la montagne',
      image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80',
      link: '/mountain/2'
    },
    2: {
      id: 3,
      title: 'mountain 3',
      excerpt: 'Petite description de la montagne',
      image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80',
      link: '/mountain/3'
    },
    3: {
      id: 4,
      title: 'mountain 4',
      excerpt: 'Petite description de la montagne',
      image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80',
      link: '/mountain/4'
    },
    4: {
      id: 5,
      title: 'mountain 5',
      excerpt: 'Petite description de la montagne',
      image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80',
      link: '/mountain/5'
    }
  },
  isFetching: true,
}

const reducerMountains = (state = initialState, action) => {
  switch (action.type) {
    case 'get/mountains':
      return state

    case 'get_by_id/mountains':
      const acceptedValues = [parseInt(action.payload.mid)];
      const single_mountain = Object.keys(state.mountains).reduce(function (r, e) {
        if (acceptedValues.includes(state.mountains[e].id)) r[e] = state.mountains[e]
        return r
      }, {});

      return {
        mountains: single_mountain,
        isFetching: !action.payload.isFetching
      } 

    default:
      return state

  }
}

export default reducerMountains;