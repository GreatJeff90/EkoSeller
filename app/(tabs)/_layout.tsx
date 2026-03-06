import { Tabs } from 'expo-router';
import { Ionicons, MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import { Platform, View, StyleSheet } from 'react-native';

export default function TabLayout() {
  return (
    <Tabs
    
      screenOptions={{
        tabBarActiveTintColor: '#A3D65C', 
        tabBarInactiveTintColor: '#7A869A', 
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 25,           
          left: 20,             
          right: 20,            
          backgroundColor: '#fff',
          borderRadius: 35, 
          height: 75, // Fix 3: Increased height for better vertical spacing
          paddingBottom: Platform.OS === 'ios' ? 25 : 15,
          paddingTop: 10,
          borderTopWidth: 0,
          elevation: 8,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.1,
          shadowRadius: 10,
        },
        tabBarLabelStyle: {
          fontSize: 9, // Fix 3: Smaller font to prevent horizontal crowding
          fontWeight: '600',
          marginTop: 2,
        },
      }}>
      
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) => (
            /* Fix 1: Fixed dimensions for the View wrapper */
            <View style={[styles.iconContainer, focused && styles.activeIconBg]}>
              <Ionicons name="home" size={18} color={focused ? '#fff' : '#7A869A'} />
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="saving"
        options={{
          title: 'Saving',
          tabBarIcon: ({ focused }) => (
            <View style={[styles.iconContainer, focused && styles.activeIconBg]}>
              {/* Fix 2: Changed "loading" to "brightness-percent" */}
              <MaterialCommunityIcons name="brightness-percent" size={20} color={focused ? '#fff' : '#7A869A'} />
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="cart"
        options={{
          title: 'Cart',
          tabBarBadge: 2,
          tabBarBadgeStyle: { backgroundColor: '#E65C5C', fontSize: 10 },
          tabBarIcon: ({ focused }) => (
            <View style={[styles.iconContainer, focused && styles.activeIconBg]}>
              <Feather name="shopping-cart" size={18} color={focused ? '#fff' : '#7A869A'} />
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ focused }) => (
            <View style={[styles.iconContainer, focused && styles.activeIconBg]}>
              <Feather name="user" size={20} color={focused ? '#fff' : '#7A869A'} />
            </View>
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    // Fix 1 & 3: Explicit constraints to keep the "pill" layout balanced
    width: 38, 
    height: 38, 
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12, 
  },
  activeIconBg: {
    backgroundColor: '#A3D65C', 
  },
});