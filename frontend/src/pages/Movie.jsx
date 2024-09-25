import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { MovieContext } from '../Context/MovieContext';

export default function MoviesDetails() {
  const { id } = useParams();
  const { movies, loading, error } = useContext(MovieContext);
  console.log(movies);
    
  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>{error.message}</h1>;

  const movie = movies.find((movie) => movie.id === parseInt(id));
  console.log(movie);
  
  if(!movie) return <h1>movie not found</h1>
  return (
    <div className=''>
      <h1 className="text-white">{movie.title}</h1>
    </div>
  );
}
