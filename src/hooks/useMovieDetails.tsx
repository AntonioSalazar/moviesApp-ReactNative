import {useState, useEffect} from 'react';
import movieDB from '../api/movieDB';
import {MovieFull} from '../interfaces/movieInterface';
import {CreditsResponse, Cast} from '../interfaces/creditsInterface';
interface MovieDetails {
  isLoading: boolean;
  movieFull?: MovieFull;
  cast: Cast[];
}

const useMovieDetails = (movieId: number) => {
  const [state, setstate] = useState<MovieDetails>({
    isLoading: true,
    movieFull: undefined,
    cast: [],
  });

  const getMovieDetails = async () => {
    try {
      const movieDetailsPromise = await movieDB.get<MovieFull>(`/${movieId}`);
      const castPromise = await movieDB.get<CreditsResponse>(
        `/${movieId}/credits`,
      );
      const [movieDetailsResponse, castPromiseResp] = await Promise.all([
        movieDetailsPromise,
        castPromise,
      ]);

      setstate({
        isLoading: false,
        movieFull: movieDetailsResponse.data,
        cast: castPromiseResp.data.cast,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovieDetails();
  }, []);

  return {
    ...state,
  };
};

export default useMovieDetails;
