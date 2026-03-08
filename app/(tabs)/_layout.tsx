import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Stack } from 'expo-router';
import CustomTabBar from '@/components/CustomTabBar';

export default function TabLayout() {
  return (
    <View style={styles.container}>
      {/* We use Stack here instead of Tabs because we are 
          providing our own custom navigation UI.
      */}
      <Stack
        screenOptions={{
          headerShown: false,
          animation: 'fade', // Smooth transition between tab screens
        }}
      >
        <Stack.Screen name="index" />
        <Stack.Screen name="saving" />
        <Stack.Screen name="cart" />
        <Stack.Screen name="profile" />
      </Stack>

      {/* This component sits on top of the Stack 
          because of its absolute positioning.
      */}
      <CustomTabBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});