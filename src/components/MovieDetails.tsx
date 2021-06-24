import React from 'react';
import currencyFormatter from 'currency-formatter';

import {View, Text, FlatList} from 'react-native';
import {MovieFull} from '../interfaces/movieInterface';
import {Cast} from '../interfaces/creditsInterface';
import Icon from 'react-native-vector-icons/Ionicons';
import CastItem from './CastItem';

interface Props {
  movieFull: MovieFull;
  cast: Cast[];
}

const MovieDetails = ({movieFull, cast}: Props) => {
  return (
    <>
      {/* Details */}
      <View style={{marginHorizontal: 20}}>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <Icon name="star-outline" color="grey" size={16} />
          <Text> {movieFull.vote_average}</Text>
          <Text style={{marginLeft: 5}}>
            {' '}
            - {movieFull.genres.map(genre => genre.name).join(', ')}
          </Text>
        </View>

        {/* description of the movie */}
        <Text
          style={{
            fontSize: 20,
            marginTop: 10,
            fontWeight: 'bold',
            marginLeft: -15,
          }}>
          About the movie
        </Text>
        <Text
          style={{
            marginLeft: -15,
            marginTop: 10,
            marginBottom: 20,
            fontSize: 16,
          }}>
          {movieFull.overview}
        </Text>
        <Text
          style={{
            fontSize: 20,
            marginTop: 10,
            fontWeight: 'bold',
            marginLeft: -15,
          }}>
          Budget
        </Text>
        <Text style={{marginLeft: -15, marginBottom: 20, fontSize: 16}}>
          {currencyFormatter.format(movieFull.budget, {code: 'USD'})}
        </Text>
      </View>

      {/* Casting */}
      <View
        style={{
          marginTop: 10,
          marginBottom: 100,
        }}>
        <Text
          style={{
            fontSize: 23,
            marginTop: 10,
            fontWeight: 'bold',
          }}>
          Actors
        </Text>
        {/* <CastItem actor={cast[0]} /> */}
        <FlatList
          data={cast}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => <CastItem actor={item} />}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{
            marginTop: 10,
            height: 50,
          }}
        />
      </View>
    </>
  );
};

export default MovieDetails;
