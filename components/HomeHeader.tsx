import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Menu, Search, Bell, ShoppingBag } from 'lucide-react-native';

export default function HomeHeader() {
  return (
    <View style={styles.headerContainer}>
      {/* Top Row */}
      <View style={styles.topRow}>
        <View style={styles.leftSection}>
          <Menu size={24} color="#333" />
          <Text style={styles.headerTitle}>Home</Text>
        </View>
        <View style={styles.rightIcons}>
          <Search size={22} color="#333" />
          <View>
            <Bell size={22} color="#333" />
            <View style={styles.badge}><Text style={styles.badgeText}>1</Text></View>
          </View>
          <View>
            <ShoppingBag size={22} color="#333" />
            <View style={styles.badge}><Text style={styles.badgeText}>0</Text></View>
          </View>
        </View>
      </View>

      {/* Search Input */}
      <View style={styles.searchSection}>
        <Search size={20} color="#999" style={styles.searchIcon} />
        <TextInput 
          style={styles.input}
          placeholder="Search Anything..."
          placeholderTextColor="#999"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: { padding: 15, backgroundColor: '#fff' },
  topRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 },
  leftSection: { flexDirection: 'row', alignItems: 'center', gap: 15 },
  headerTitle: { fontSize: 20, fontWeight: '600' },
  rightIcons: { flexDirection: 'row', gap: 18 },
  badge: { position: 'absolute', right: -5, top: -5, backgroundColor: '#FF6B00', borderRadius: 10, width: 14, height: 14, justifyContent: 'center', alignItems: 'center' },
  badgeText: { color: '#fff', fontSize: 8, fontWeight: 'bold' },
  searchSection: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#F5F5F5', borderRadius: 8, paddingHorizontal: 10, borderWidth: 1, borderColor: '#EEE' },
  searchIcon: { marginRight: 10 },
  input: { flex: 1, height: 45, fontSize: 14 }
});