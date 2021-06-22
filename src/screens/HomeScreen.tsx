import React from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import useMovies from '../hooks/useMovies';
import MoviePoster from '../components/MoviePoster';

const HomeScreen = () => {
  const {moviesNowPlaying, isLoading} = useMovies();

  if (isLoading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ActivityIndicator color="red" size={100} />
      </View>
    );
  }

  return (
    <View>
      <MoviePoster movie={moviesNowPlaying[0]} />
    </View>
  );
};

export default HomeScreen;
