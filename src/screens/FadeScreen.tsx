import React from 'react';
import {View, Button} from 'react-native';
import {Animated} from 'react-native';
import useFade from '../hooks/useFade';

const FadeScreen = () => {
  const {opacity, fadeIn, fadeOut} = useFade();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'grey',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Animated.View
        style={{
          backgroundColor: '#084f6a',
          width: 150,
          height: 150,
          borderColor: 'white',
          borderWidth: 10,
          marginBottom: 10,
          opacity,
        }}
      />

      <Button title="fadeIn" onPress={fadeIn} />

      <Button title="fadeOut" onPress={fadeOut} />
    </View>
  );
};

export default FadeScreen;
