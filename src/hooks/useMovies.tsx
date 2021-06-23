import movieDB from '../api/movieDB';
import {MoviesResponse, Movie} from '../interfaces/movieInterface';
import {useEffect, useState} from 'react';

interface MoviesState {
  nowPlaying: Movie[];
  popular: Movie[];
  topRated: Movie[];
  upcoming: Movie[];
}

const useMovies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [moviesState, setMoviesState] = useState<MoviesState>({
    nowPlaying: [],
    popular: [],
    topRated: [],
    upcoming: [],
  });

  const allMoviesAPIcall = async () => {
    const nowPlayingPromise = movieDB.get<MoviesResponse>('/now_playing');
    const popularMoviesPromise = movieDB.get<MoviesResponse>('/popular');
    const topRatedMoviesPromise = movieDB.get<MoviesResponse>('/top_rated');
    const upcomingMoviesPromise = movieDB.get<MoviesResponse>('/upcoming');

    const responses = await Promise.all([
      nowPlayingPromise,
      popularMoviesPromise,
      topRatedMoviesPromise,
      upcomingMoviesPromise,
    ]);

    setMoviesState({
      nowPlaying: responses[0].data.results,
      popular: responses[1].data.results,
      topRated: responses[2].data.results,
      upcoming: responses[3].data.results,
    });

    setIsLoading(false);
  };

  useEffect(() => {
    allMoviesAPIcall();
  }, []);

  return {
    ...moviesState,
    isLoading,
  };
};

export default useMovies;
