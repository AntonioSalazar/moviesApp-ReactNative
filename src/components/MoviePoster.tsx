import React from 'react';

import {View, Image, StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Movie} from '../interfaces/movieInterface';

interface Props {
  movie: Movie;
  height?: number;
  width?: number;
}

const MoviePoster = ({movie, width = 300, height = 420}: Props) => {
  const {top: marginTop} = useSafeAreaInsets();

  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  return (
    <View
      style={{
        marginTop,
        height,
        width,
        marginHorizontal: 5,
      }}>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri,
          }}
          style={styles.image}
        />
      </View>
    </View>
  );
};

export default MoviePoster;

const styles = StyleSheet.create({
  image: {
    flex: 1,
    borderRadius: 18,
  },

  imageContainer: {
    flex: 1,
    borderRadius: 18,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 15,
  },
});
