function MovieWidgetReducer (state, action){
  // Object.keys(state).forEach(item => console.log('MWreducer state-[' + item +  ']=' + state[item]));
  // Object.keys(action).forEach(item => console.log('MWreducer action-[' + item +  ']=' + action[item]));
  if (action.type === 'typing'){
    // console.log('latest value: '+ action.newInput);
    return Object.assign({},state,{movieName: action.newInput});
  }

  // if (action.type === 'search'){
  //   console.log("searching");
  //   return Object.assign({},state,{movieDetails: state.movieName});
  //
  // }

  if (action.type === 'loading'){
    return Object.assign({},state, {loading: true})
  }

  if (action.type === 'singleMovie'){
    return Object.assign({},state, {movieID: action.movieID, singleMovie: true, castAndCrew: action.castAndCrew})
  }

  if (action.type === 'search'){
    // console.log("query");
    // console.log('payload ' + action.payload);
    // console.log('payload length: ' + action.payload.length);
    return Object.assign({},state, {movieDetails: action.payload, loading: false, singleMovie: false});

  }
  return state;
}

export default MovieWidgetReducer;
