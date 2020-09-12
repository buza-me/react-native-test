import React, {useEffect} from 'react';
import {FlatList, View, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {getPhotosAsync} from '../store';
import {DETAIL_ROUTE, API_LIMIT} from '../constants';
import {PhotoListItem} from '../components';

const ImageListScreenBase = ({
  navigation,
  photos,
  isLoading,
  getPhotosAction,
}) => {
  const getPhotos = (isRefreshing = false) => {
    const page = isRefreshing ? 1 : photos.length / API_LIMIT + 1;
    getPhotosAction(page);
  };

  useEffect(() => {
    if (!photos?.length && !isLoading) {
      getPhotos(true);
    }
  });

  const onScrollToEnd = ({distanceFromEnd}) => {
    if (distanceFromEnd < 0 || isLoading) {
      return;
    }
    getPhotos();
  };

  const onRefresh = () => {
    getPhotos(true);
  };

  const keyExtractor = (details) => details.id;

  const navigateToDetails = (details) =>
    navigation.navigate(DETAIL_ROUTE, {details});

  const renderItem = ({item}) => (
    <PhotoListItem details={item} onPress={() => navigateToDetails(item)} />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={photos}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        refreshing={isLoading}
        onRefresh={onRefresh}
        onEndReached={onScrollToEnd}
        onEndReachedThreshold={0.2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const mapStateToProps = ({dataReducer, commonReducer}) => ({
  photos: dataReducer.photos,
  isLoading: commonReducer.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  getPhotosAction: (payload) => dispatch(getPhotosAsync(payload)),
});

export const ImageListScreen = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ImageListScreenBase);
