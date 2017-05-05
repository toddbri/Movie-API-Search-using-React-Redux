import React from 'react';

import './MovieWidget.css';

class MovieWidget extends React.Component {

  render() {
    // console.log('loading: ' + this.props.loading);
    console.log("singleMovie: "+ this.props.singleMovie);
    let movies =[];
    let arrMovies = [];
    let singleMovie = null;
    let mainCast = [];
    if (this.props.singleMovie){ //this is for a single movie
      // console.log("singleMovieprops: " + this.props.movieDetails.results[this.props.movieDetails.movieID]);
      let movieDetails = this.props.movieDetails.results[this.props.movieID]; //movieDetails is an object of the information
      console.log("looking for details on movie with index: " + this.props.movieID);
      console.log("singleMovieResults: " + movieDetails);
      let cast = this.props.castAndCrew.cast;
      console.log("cast: " + cast);

      console.log("---------- CAST ----------");
      cast.map( cast => Object.keys(cast).forEach(key => console.log('[' + key + ']=' + cast[key])));
      // cast.map( cast => Object.keys(cast).forEach(key => <p>cast))
    cast = cast.map(cast => <p>{cast.name} as {cast.character}</p> );
      console.log("----------CONTENTS OF MOVIEDETAILS----------");
      Object.keys(movieDetails).forEach(item => console.log('[' + item + ']=' + movieDetails[item] ));
      singleMovie = <div id="singleMovie">
                        <div id="movieTitle">{movieDetails.title}</div>
                        <div id="moviePosterContainer">
                          <img alt="" id="moviePoster" src={movieDetails.poster_path === null ? "./images/comingsoon.png":"https://image.tmdb.org/t/p/w185_and_h278_bestv2" + movieDetails.poster_path}/>
                        </div>
                        <div id="movieDetailsPane">
                          <p>{movieDetails.overview}</p>
                          <p>Released: {movieDetails.release_date}</p>
                          {cast}
                        </div>
                    </div>;
      // console.log('singleMovie: ' + singleMovie);

    } else {  //this is for display query results
      console.log("searchResultsProps: " + this.props.movieDetails);
      Object.keys(this.props.movieDetails).forEach(movie => console.log('key: ' + movie));
      if (this.props.movieDetails.results) {
        arrMovies = this.props.movieDetails.results;
        // console.log('arrMovies: ' + arrMovies);
        // console.log('number of moviesA: ' + arrMovies.length);
        // Object.keys(this.props.movieDetails.results).forEach( movie => movies.push(this.props.movieDetails.results[movie]));
        movies = arrMovies.map((item, idx) =>  (<div key={item.id} className="movieBox" onClick={() => this.props.specific(idx,item.id)}>
          <p>{item.title}</p><img alt="poster" src={item.poster_path === null ? "./images/comingsoon.png":"https://image.tmdb.org/t/p/w185_and_h278_bestv2" + item.poster_path}/>
        </div>));
        // console.log('number of moviesB: ' + arrMovies.length);
      }


    }

    return (

      <div className="Movie">
        <div className="App-header">

          <h2>Welcome to MoviePhone</h2>
          <div className="input">Why don't you just tell me the name of the movie you are looking for?
            <input onChange={event => this.props.inputChanged(event.target.value)} value={this.props.movieName}/>
            <button onClick={() => this.props.go(this.props.movieName)}>Search</button>
          </div>
        </div>
        <div className="movieBoxes">
        {movies}
        {singleMovie}
        </div>
      </div>
    );
  }
}

export default MovieWidget;
