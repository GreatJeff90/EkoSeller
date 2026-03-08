import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      {/* This hides the header for all screens inside the (auth) folder */}
      <Stack.Screen 
        name="(auth)" 
        options={{ 
          headerShown: false 
        }} 
      />
      
      {/* Ensure your tabs also have their headers managed */}
      <Stack.Screen 
        name="(tabs)" 
        options={{ 
          headerShown: false 
        }} 
      />
    </Stack>
  );
}