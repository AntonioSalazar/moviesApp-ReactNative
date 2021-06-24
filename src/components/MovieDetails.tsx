import React from 'react';
import {View, Text} from 'react-native';
import {MovieFull} from '../interfaces/movieInterface';
import {Cast} from '../interfaces/creditsInterface';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
  movieFull: MovieFull;
  cast: Cast[];
}

const MovieDetails = ({movieFull, cast}: Props) => {
  return (
    <>
      {/* Details */}
      <View style={{marginHorizontal: 20}}>
        <Icon name="star-outline" color="grey" size={16} />
      </View>
      <Text>{movieFull.vote_average}</Text>
      {/* Casting */}
    </>
  );
};

export default MovieDetails;
