import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform, Dimensions } from 'react-native';
import { Ionicons, FontAwesome5, Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter, usePathname } from 'expo-router';

const { width } = Dimensions.get('window');

const SellerTabBar = () => {
  const router = useRouter();
  const pathname = usePathname();

  // Define tabs with the specific icons seen in your reference image
  const leftTabs = [
    { name: 'Home', icon: 'home-variant', type: 'MaterialCommunityIcons', route: '/' },
    { name: 'Saving', icon: 'university', type: 'FontAwesome5', route: '/saving' },
  ];

  const rightTabs = [
    { name: 'Cart', icon: 'shopping-cart', type: 'Feather', route: '/cart', badge: 2 },
    { name: 'Profile', icon: 'user', type: 'Feather', route: '/profile' },
  ];

  const renderTab = (tab: any) => {
    const isActive = pathname === tab.route;
    const activeColor = '#7A869A'; // Reference image shows a slate/blue-grey for active text
    const inactiveColor = '#94A3B8';

    return (
      <TouchableOpacity
        key={tab.name}
        onPress={() => router.push(tab.route as any)}
        style={styles.tabItem}
        activeOpacity={0.7}
      >
        <View style={styles.iconContainer}>
          {tab.type === 'MaterialCommunityIcons' && (
            <MaterialCommunityIcons name={tab.icon} size={26} color={isActive ? activeColor : inactiveColor} />
          )}
          {tab.type === 'FontAwesome5' && (
            <FontAwesome5 name={tab.icon} size={20} color={isActive ? activeColor : inactiveColor} />
          )}
          {tab.type === 'Feather' && (
            <Feather name={tab.icon} size={22} color={isActive ? activeColor : inactiveColor} />
          )}
          
          {tab.badge && (
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{tab.badge}</Text>
            </View>
          )}
        </View>
        <Text style={[styles.tabLabel, isActive && styles.activeLabel]}>
          {tab.name}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.pillContainer}>
        {/* Left Section */}
        <View style={styles.section}>
          {leftTabs.map(renderTab)}
        </View>

        {/* Floating Center Action Button */}
        <View style={styles.fabWrapper}>
          <TouchableOpacity 
            style={styles.fab}
            activeOpacity={0.9}
            onPress={() => router.replace('/(tabs)/market' as any)}
          >
            <Ionicons name="add" size={38} color="#444" />
          </TouchableOpacity>
        </View>

        {/* Right Section */}
        <View style={styles.section}>
          {rightTabs.map(renderTab)}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    bottom: 30,
    width: width,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  pillContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    height: 70,
    borderRadius: 40,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.15,
        shadowRadius: 12,
      },
      android: {
        elevation: 10,
      },
    }),
  },
  section: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  tabItem: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 8,
  },
  iconContainer: {
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabLabel: {
    fontSize: 12,
    color: '#94A3B8',
    marginTop: 4,
    fontWeight: '500',
  },
  activeLabel: {
    color: '#7A869A',
    fontWeight: '600',
  },
  fabWrapper: {
    width: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fab: {
    backgroundColor: '#BEE671', // The exact lime green from your image
    width: 64,
    height: 64,
    borderRadius: 32,
    marginTop: -45, // Pulls the FAB up to sit halfway out of the pill
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 4,
    borderColor: '#FFFFFF', // Creates the clean gap between FAB and content
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  badge: {
    position: 'absolute',
    top: -4,
    right: -8,
    backgroundColor: '#EF4444',
    borderRadius: 10,
    minWidth: 18,
    height: 18,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 4,
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  badgeText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: 'bold',
  },
});

export default SellerTabBar;