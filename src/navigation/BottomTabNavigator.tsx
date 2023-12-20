import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/postAuth/Home';

// Define a type for the BottomTabParamList
type BottomTabParamList = {
  Home: undefined;
  Home1: undefined;
};

const Tab = createBottomTabNavigator<BottomTabParamList>();

const BottomTabNavigator: React.FC = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Home1" component={Home} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
