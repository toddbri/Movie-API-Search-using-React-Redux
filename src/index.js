import React from 'react';
import ReactDOM from 'react-dom';
import * as Redux from 'redux';
import * as ReactRedux from 'react-redux';
import MovieWidgetContainer from './MovieWidgetContainer';
import MovieWidgetReducer from './MovieWidget.reducer';
import ReduxThunk from 'redux-thunk';
import './index.css';

const INITIAL_STATE = {movieDetails: {},movieName: '',loading: false, singleMovie: false, castAndCredits: {}};

function reducer (state = INITIAL_STATE, action){
  // console.log("Mondo state: " +  state);
  // Object.keys(state).forEach(item => console.log('reducer-[' + item +  ']=' + state[item]));
  return MovieWidgetReducer(state, action);

}

const store = Redux.createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  Redux.applyMiddleware(ReduxThunk)
);


ReactDOM.render(
  <ReactRedux.Provider store={store}>
    <MovieWidgetContainer />
  </ReactRedux.Provider>,
  document.getElementById('root')
);
