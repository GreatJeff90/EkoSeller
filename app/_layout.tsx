import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      {/* This "name" must match your folder name exactly */}
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      
      {/* If you have other screens like modals, they go here */}
      <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
    </Stack>
  );
}