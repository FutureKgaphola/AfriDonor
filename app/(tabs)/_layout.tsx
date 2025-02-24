import { Colors } from '@/constants/Colors';
import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';
import {Feather,MaterialCommunityIcons,Ionicons,FontAwesome5} from '@expo/vector-icons';

export default function TabLayout() {

  return (
      <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.light.tabIconSelected,
        headerShown: false,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            background:'transparent',
            borderTopWidth: 0,
            elevation: 0,
          },
          default: {},
        }),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <Feather name="home" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="history"
        options={{
          title: 'History',
          tabBarIcon: ({ color }) => <Ionicons name="timer" size={24} color={color}/>,
        }}
      />
      <Tabs.Screen
        name="maps"
        options={{
          title: 'Maps',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="google-maps" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <FontAwesome5 name="user-circle" size={24} color={color}/>,
        }}
      />
    </Tabs>

  );
}
