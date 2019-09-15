import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import tasteActive from '../assets/images/taste-active.png'
import tasteInactive from '../assets/images/taste-inactive.png'
import recommendationsActive from '../assets/images/recommendations-active.png'
import recommendationsInactive from '../assets/images/recommendations-inactive.png'

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'My taste',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} sourceActive={tasteActive} sourceInactive={tasteInactive}/>
  ),
};

HomeStack.path = '';

const LinksStack = createStackNavigator(
  {
    Links: LinksScreen,
  },
  config
);

LinksStack.navigationOptions = {
  tabBarLabel: 'Recommendations',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} sourceActive={recommendationsActive} sourceInactive={recommendationsInactive}/>
  ),
};

LinksStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  LinksStack,
}, {
  tabBarOptions:{
    activeTintColor: '#abecb1',
    inactiveTintColor: '#005b5d',
    style: {padding: 10, height:70}
  }
});

tabNavigator.path = '';

export default tabNavigator;
