import useFetch from '../components/useFetch'

const Cards = () => {
    const { data: movie, isLoading, error } = useFetch('https://api.themoviedb.org/3/discover/movie?api_key=cd6592beb58e675d2cb6fdf038c87822');
    if(isLoading) return <h1>loading...</h1>
    if(error) return <h1>loading...</h1>
    return (
        <div className="relative w-[190px] max-w-full h-[290px] flex items-center rounded-[18px] overflow-hidden hover:rotate-y-5 transition-transform duration-300">
            <div className="w-full h-full">
                <img 
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} 
                    alt={movie.title} 
                    className="w-full h-full rounded-[18px] transition-transform duration-300 ease-[cubic-bezier(0.25, 0.1, 0.25, 1)] hover:scale-110" 
                />
                <div className="absolute bottom-0 left-0 w-full p-4 bg-black bg-opacity-80 transform rotate-x-90 translate-y-full origin-bottom transition-transform duration-1000 ease-[cubic-bezier(0.25, 0.1, 0.25, 1)] hover:rotate-x-0 hover:translate-y-0">
                    <h2 className="text-[#fbfaf7e7] font-medi text-[15px] uppercase transform translate-x-[-100%] opacity-0 transition-all duration-[1.6s] ease delay-300 hover:translate-x-[-10px] hover:opacity-100">{movie.title}</h2>
                    <p className="text-[#d0cfcbc4] font-medi text-[11px] transform translate-x-[-100%] opacity-0 transition-all duration-[1.6s] ease delay-300 hover:translate-x-[-10px] hover:opacity-100">Rating: {movie.vote_average}</p>
                </div>
            </div>
        </div>
    );
  }
  
  export default Cards;
  