import React from 'react';
import Carousel from 'react-native-snap-carousel';

import {View, ActivityIndicator, Dimensions} from 'react-native';
import useMovies from '../hooks/useMovies';
import MoviePoster from '../components/MoviePoster';

const {width: windowWidth} = Dimensions.get('window');

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
    <View style={{marginTop: 30}}>
      <Carousel
        data={moviesNowPlaying}
        renderItem={({item}: any) => <MoviePoster movie={item} />}
        sliderWidth={windowWidth}
        itemWidth={300}
      />
    </View>
  );
};

export default HomeScreen;
