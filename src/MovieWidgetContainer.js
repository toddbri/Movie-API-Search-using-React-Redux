import * as ReactRedux from 'react-redux';
import MovieWidget from './MovieWidget';
import $ from 'jquery';
// inputChanged: (newInput) => dispatch({type: 'typing',newInput: newInput}),

const MovieWidgetContainer = ReactRedux.connect(
  state => state,
  dispatch => ({
      inputChanged: (newInput) => dispatch({type: 'typing',newInput: newInput}),
      go: (query) => dispatch(getMovieData(query)),
      specific: (movieID, movieDBid) => dispatch(getMovieByID(movieID,movieDBid))
  })
)(MovieWidget);

function getMovieByID(movieID, movieDBid){

  return function(dispatch){
    $.ajax({
      url: 'https://api.themoviedb.org/3/movie/' + movieDBid + "/credits",
      data: {
        api_key: '4c4b3b5130ac777eddfdb210808ff541'
      }
    }) //data is returned as  JSON object
    .then( data => {
      console.log('data returned from single movie query: ' + data);
      console.log("----------DUMP CAST AND CREW QUERY RESULTS---------");
      Object.keys(data).forEach(item => console.log('[' + item + ']=' + data[item] ));
      dispatch({type: 'singleMovie', movieID: movieID, castAndCrew: data})
    })
    .catch(resp => console.log(resp));

  }

}

function getMovieData(query){
  // console.log('in getMovieData');
  return function(dispatch){
    dispatch({type: "loading"});
    $.ajax({
      url: 'https://api.themoviedb.org/3/search/movie',
      data: {
        language: 'en-US',
        query: query,
        include_adult: false,
        api_key: '4c4b3b5130ac777eddfdb210808ff541'
      }
    }) //data is returned as  JSON object
    .then( data => {

      dispatch({type: 'search', payload: data})})
    .catch(resp => console.log(resp));


  }
}

export default MovieWidgetContainer;
