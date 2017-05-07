function MovieWidgetReducer (state, action){

  if (action.type === 'typing'){

    return Object.assign({},state,{movieName: action.newInput,loading: false});
  }

  if (action.type === 'loading'){
    return Object.assign({},state, {loading: true, movieDetails: {}, singleMovie: false, castAndCrew: {} })
  }

  if (action.type === 'singleMovie'){
    return Object.assign({},state, {movieID: action.movieID, singleMovie: true, castAndCrew: action.castAndCrew, loading: false})
  }

  if (action.type === 'search'){
    return Object.assign({},state, {movieDetails: action.payload, loading: false, singleMovie: false});

  }
  return state;
}

export default MovieWidgetReducer;
