import React from 'react';
import {StyleSheet, Image, View} from 'react-native';

export const ImageDetailScreen = ({route}) => {
  return (
    <View style={styles.container}>
      <Image
        source={{uri: route?.params?.details?.urls?.full || ''}}
        resizeMode={'contain'}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
  },
  image: {
    flex: 1,
  },
});
