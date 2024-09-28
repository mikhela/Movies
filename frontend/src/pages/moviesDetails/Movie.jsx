import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { MovieContext } from '../../Context/MovieContext';
import useFetch from '../../components/useFetch';
import './detailsStyle.css';

export default function MoviesDetails() {
  const { id } = useParams();
  const { movies, loading, error } = useContext(MovieContext);

  // Fetching trailer using useFetch
  const { data: trailerData, loading: loadingTrailer, error: trailerError } = useFetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=cd6592beb58e675d2cb6fdf038c87822`);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>{error.message}</h1>;

  const movie = movies.find((movie) => movie.id === parseInt(id));

  if (!movie) return <h1>Movie not found</h1>;

  // Find the trailer video from the fetched trailerData
  const trailer = trailerData.find(video => video.type === 'Trailer');

  return (
    <div className="MoviesDetails">
      <div 
        className="movieBanner" 
        style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})` }}>
      </div>
      <div className="information__Container">
        <div 
          className="content_left" >
              {loadingTrailer ? (
            <p>Loading trailer...</p>
          ) : trailerError ? (
            <p>{trailerError.message}</p>
          ) : trailer ? (
            <div className="trailer">
              <h3>Trailer:</h3>
              <iframe
                title="Movie Trailer"
                width="100%"
                height="400"
                src={`https://www.youtube.com/embed/${trailer.key}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ) : (
            <p>No trailer available</p>
          )}
        </div>
        <div className="content_right">
          <h2 id="title">{movie.title}</h2>
          <p id="overview">Overview: {movie.overview}</p>
          <div className="content_right_mininfo">
            <p id="date">Release date: {movie.release_date}</p>
            <p id="vote"><span id="imdb"> IMDb</span><span id="voteAv">{movie.vote_average}</span></p>
            <p id="popularity">Popularity: {movie.popularity}</p>
          </div>
          {/* Display trailer if it exists */}
        
        </div>
      </div>
    </div>
  );
}
