import movieDB from '../api/movieDB';
import {MovieDBNowPlaying, Movie} from '../interfaces/movieInterface';
import {useEffect, useState} from 'react';
const useMovies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [moviesNowPlaying, setmoviesNowPlaying] = useState<Movie[]>([]);

  const allMoviesAPIcall = async () => {
    try {
      const url = '/now_playing';
      const response = await movieDB.get<MovieDBNowPlaying>(url);
      setmoviesNowPlaying(response.data.results);

      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    allMoviesAPIcall();
  }, []);

  return {
    moviesNowPlaying,
    isLoading,
  };
};

export default useMovies;
