import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons, MaterialCommunityIcons, Feather, FontAwesome5 } from '@expo/vector-icons';
import { useRouter, usePathname } from 'expo-router';

const CustomTabBar = () => {
  const router = useRouter();
  const pathname = usePathname();

  const tabs = [
    { name: 'Home', icon: 'home', type: 'Ionicons', route: '/' },
    // Swapped 'loading' for 'university' and set type to FontAwesome5
    { name: 'Saving', icon: 'university', type: 'FontAwesome5', route: '/saving' },
    { name: 'Cart', icon: 'shopping-cart', type: 'Feather', route: '/cart', badge: 2 },
    { name: 'Profile', icon: 'person-outline', type: 'Ionicons', route: '/profile' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.tabBar}>
        {tabs.map((tab) => {
          const isActive = pathname === tab.route;
          const iconColor = isActive ? '#fff' : '#7A869A';
          
          return (
            <TouchableOpacity 
              key={tab.name} 
              onPress={() => router.push(tab.route as any)}
              style={styles.tabItem}
              activeOpacity={0.7}
            >
              <View style={[styles.iconWrapper, isActive && styles.activeIconBg]}>
                {tab.type === 'Ionicons' && (
                  <Ionicons name={tab.icon as any} size={22} color={iconColor} />
                )}
                {tab.type === 'MaterialCommunityIcons' && (
                  <MaterialCommunityIcons name={tab.icon as any} size={22} color={iconColor} />
                )}
                {tab.type === 'Feather' && (
                  <Feather name={tab.icon as any} size={22} color={iconColor} />
                )}
                {/* Added support for FontAwesome5 bank icon */}
                {tab.type === 'FontAwesome5' && (
                  <FontAwesome5 name={tab.icon as any} size={18} color={iconColor} />
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
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 25,
    left: 20,
    right: 20,
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  tabBar: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 35,
    height: 75,
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 8,
  },
  tabItem: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  iconWrapper: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    marginBottom: 4,
  },
  activeIconBg: {
    backgroundColor: '#A3D65C', 
  },
  tabLabel: {
    fontSize: 11,
    color: '#7A869A',
    fontWeight: '600',
  },
  activeLabel: {
    color: '#A3D65C',
    fontWeight: '700',
  },
  badge: {
    position: 'absolute',
    top: -2,
    right: -2,
    backgroundColor: '#E57373',
    borderRadius: 9,
    width: 18,
    height: 18,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#fff',
  },
  badgeText: {
    color: '#fff',
    fontSize: 9,
    fontWeight: 'bold',
  },
});

export default CustomTabBar;