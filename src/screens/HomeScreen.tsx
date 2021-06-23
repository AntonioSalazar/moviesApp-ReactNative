import React from 'react';
import Carousel from 'react-native-snap-carousel';

import {View, ActivityIndicator, Dimensions} from 'react-native';
import useMovies from '../hooks/useMovies';
import MoviePoster from '../components/MoviePoster';
import {ScrollView} from 'react-native-gesture-handler';
import HorizontalSlider from '../components/HorizontalSlider';

const {width: windowWidth} = Dimensions.get('window');

const HomeScreen = () => {
  const {nowPlaying, popular, topRated, upcoming, isLoading} = useMovies();

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
    <ScrollView>
      <View style={{marginTop: 30}}>
        {/* Main carousel */}
        <View style={{height: 440}}>
          <Carousel
            data={nowPlaying}
            renderItem={({item}: any) => <MoviePoster movie={item} />}
            sliderWidth={windowWidth}
            itemWidth={300}
            inactiveSlideOpacity={0.9}
          />
        </View>

        {/* Popular movies slider*/}
        <HorizontalSlider title="Popular Movies" movies={popular} />
        {/* top rated movies */}
        <HorizontalSlider title="Top Rated Movies" movies={topRated} />
        {/* upcoming movies */}
        <HorizontalSlider title="Upcoming Movies" movies={upcoming} />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
