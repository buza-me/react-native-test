import React from 'react';
import 'react-native-gesture-handler';
import {SafeAreaView, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider} from 'react-redux';
import {store} from '../store';
import {
  LIST_ROUTE,
  DETAIL_ROUTE,
  LIST_ROUTE_TITLE,
  DETAIL_ROUTE_TITLE,
} from '../constants';
import {ImageListScreen, ImageDetailScreen} from '../screens';

const Stack = createStackNavigator();

export const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName={LIST_ROUTE}>
            <Stack.Screen
              name={LIST_ROUTE}
              component={ImageListScreen}
              options={{title: LIST_ROUTE_TITLE}}
            />
            <Stack.Screen
              name={DETAIL_ROUTE}
              component={ImageDetailScreen}
              options={{title: DETAIL_ROUTE_TITLE}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
