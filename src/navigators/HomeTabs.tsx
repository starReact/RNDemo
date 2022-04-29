import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Home from '../pages/Home';

const Tab = createMaterialTopTabNavigator();

export default function HomeTabs() {
  return (
    <Tab.Navigator
        screenOptions={{
            tabBarScrollEnabled: true,
            tabBarItemStyle: {
                width: 80
            },
            tabBarIndicatorStyle: {
                height: 4,
                width: 20,
                marginLeft: 30,
                borderRadius: 2,
                backgroundColor: "#f86442"
            },
            tabBarActiveTintColor: "#f86442",
            tabBarInactiveTintColor: "#333",
            lazy: true
        }}
    >
        <Tab.Screen name="Home" options={{ tabBarLabel: "推荐" }} component={Home}></Tab.Screen>
    </Tab.Navigator>
  )
}
