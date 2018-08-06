import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

//.map over the imported movieData and render MovieCards for each element
//each movie will have it's own MovieCard
  generateMovieCards = () => {
    return movieData.map(movie =>
    <MovieCard
      title={movie.title}
      IMDBRating={movie.IMDBRating}
      poster={movie.poster}
      genres={movie.genres}
    /> )
  }
    //  <Article title={a.title} text={a.text} />    //component

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }

}
