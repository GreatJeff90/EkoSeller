import React, { useState } from 'react'; // Added useState
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

const MENU_ITEMS = [
  { icon: 'shopping-outline', label: 'My Order', library: MaterialCommunityIcons },
  { icon: 'videocam-outline', label: 'Live', library: Ionicons },
  { icon: 'heart-outline', label: 'Favourites', library: Ionicons },
  { icon: 'shield-outline', label: 'Addresses', library: Ionicons },
  { icon: 'storefront-outline', label: 'Become a seller', library: MaterialCommunityIcons },
  { icon: 'shield-check-outline', label: 'Privacy Policy', library: MaterialCommunityIcons },
  { icon: 'file-text-outline', label: 'Terms & Condition', library: MaterialCommunityIcons },
  { icon: 'help-circle-outline', label: 'Help', library: MaterialCommunityIcons },
  { icon: 'information-outline', label: 'About', library: MaterialCommunityIcons },
];

const MARKETS = [
  'Agbolota Market Badagry', 'Ajah Market', 'Aratumi Market', 'Bar Beach Market',
  'Epe Fish Market', 'Ita Faji Market', 'Isale Eko Market, Lagos Island', 
  'Lekki Market', 'Oalaba Market', 'Oshru New Market', 'Ojowoye Market'
];

export default function Sidebar({ onClose }: { onClose: () => void }) {
  // State to track if the market dropdown is open or closed
  const [isMarketOpen, setIsMarketOpen] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logoText}>Ekó<Text style={{color: '#95C11F'}}>sellers</Text></Text>
        <TouchableOpacity onPress={onClose}>
          <Ionicons name="close" size={24} color="#333" />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Market Selector Section */}
        <View style={styles.marketSection}>
          <TouchableOpacity 
            style={styles.marketHeader} 
            onPress={() => setIsMarketOpen(!isMarketOpen)} // Toggles state
          >
            <MaterialCommunityIcons name="cart-outline" size={24} color="#333" />
            <Text style={styles.marketTitle}>All Market</Text>
            {/* Icon changes based on state to match your images */}
            <Ionicons 
              name={isMarketOpen ? "chevron-up" : "chevron-down"} 
              size={20} 
              color="#333" 
            />
          </TouchableOpacity>
          
          {/* Only maps markets if isMarketOpen is true */}
          {isMarketOpen && MARKETS.map((market, index) => (
            <View key={index} style={styles.marketItem}>
              <View style={styles.dot} />
              <Text style={styles.marketLabel}>{market}</Text>
            </View>
          ))}
        </View>

        {/* Navigation Menu Section */}
        <View style={styles.menuSection}>
          {MENU_ITEMS.map((item, index) => (
            <TouchableOpacity key={index} style={styles.menuItem}>
              <item.library name={item.icon as any} size={22} color="#A3D65C" />
              <Text style={styles.menuLabel}>{item.label}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Log Out Button */}
        <TouchableOpacity style={styles.logoutButton}>
          <Text style={styles.logoutText}>Log Out</Text>
        </TouchableOpacity>
        
        <View style={{ height: 40 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  logoText: { fontSize: 24, fontWeight: '900', color: '#A3D65C' },
  marketSection: { paddingHorizontal: 20, marginTop: 10 },
  marketHeader: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    paddingVertical: 10,
    marginBottom: 5 
  },
  marketTitle: { 
    flex: 1, 
    fontSize: 16, 
    fontWeight: '600', 
    color: '#A3D65C', 
    marginLeft: 10 
  },
  marketItem: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    marginBottom: 12, 
    paddingLeft: 5 
  },
  dot: { 
    width: 12, 
    height: 12, 
    borderRadius: 6, 
    backgroundColor: '#A3D65C', 
    marginRight: 15 
  },
  marketLabel: { fontSize: 13, color: '#333', fontWeight: '500' },
  menuSection: { marginTop: 10, paddingHorizontal: 20 },
  menuItem: { flexDirection: 'row', alignItems: 'center', paddingVertical: 12 },
  menuLabel: { fontSize: 15, color: '#A3D65C', fontWeight: '500', marginLeft: 15 },
  logoutButton: {
    backgroundColor: '#E65C5C',
    margin: 20,
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  logoutText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
});