import React from 'react';
import {StyleSheet, TouchableOpacity, Image, Text, View} from 'react-native';

export const PhotoListItem = ({details, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image
        source={{uri: details?.urls?.thumb || ''}}
        resizeMode={'contain'}
        style={styles.thumb}
      />
      <View style={styles.details}>
        <Text style={styles.description}>
          {details?.description || details?.alt_description}
        </Text>
        <Text style={styles.userName}>{details?.user?.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderBottomColor: '#b0b0b0',
    borderBottomWidth: 0.4,
  },
  thumb: {
    width: 100,
    height: 100,
    borderRadius: 1,
  },
  details: {
    marginLeft: 10,
    flexShrink: 1,
  },
  description: {
    fontSize: 16,
    color: '#2e2e2e',
  },
  userName: {
    marginTop: 10,
    fontSize: 13,
    color: '#b0b0b0',
  },
});
