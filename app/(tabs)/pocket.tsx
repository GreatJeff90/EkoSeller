import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  ScrollView,
  Platform 
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function PocketScreen() {
  const router = useRouter();

  // Mock data based on image_d69564
  const transactions = [
    { id: '1', type: 'Withdraw', time: '10:30pm', amount: '- ₦1,800,400', color: '#FF5252', icon: 'arrow-down-left', bg: '#FFF1F1' },
    { id: '2', type: 'Added', time: '10:30pm', amount: '+ ₦1,800,400', color: '#A3D65C', icon: 'arrow-up-right', bg: '#F4F9EC' },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Saving</Text>
        <TouchableOpacity onPress={() => router.push('/saving')}>
          <Text style={styles.addHeaderText}>Add</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {/* Your Pockets Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Your Pockets</Text>
          
          <View style={styles.pocketCard}>
            <View style={styles.pocketRow}>
              <Text style={styles.pocketLabel}>Name</Text>
              <Text style={styles.pocketValue}>My plan pocket</Text>
            </View>
            <View style={styles.pocketRow}>
              <Text style={styles.pocketLabel}>Amount</Text>
              <Text style={styles.pocketValue}>₦35,000.00</Text>
            </View>
            
            {/* Link to view-pocket screen */}
            <TouchableOpacity 
              style={styles.viewPocketBtn} 
              onPress={() => router.push('/view-pocket')}
            >
              <Text style={styles.viewPocketText}>View pocket</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity 
            style={styles.inlineAddBtn} 
            onPress={() => router.push('/saving')}
          >
            <Ionicons name="add-circle" size={24} color="#A3D65C" />
            <Text style={styles.inlineAddText}>Add Pocket</Text>
          </TouchableOpacity>
        </View>

        {/* Recent Transactions Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recent Transactions</Text>
          <View style={styles.dateHeader}>
            <Ionicons name="time-outline" size={16} color="#7A869A" />
            <Text style={styles.dateText}>Today</Text>
          </View>

          {transactions.map((item) => (
            <View key={item.id} style={styles.transactionItem}>
              <View style={[styles.iconContainer, { backgroundColor: item.bg }]}>
                <Ionicons name={item.icon as any} size={20} color={item.color} />
              </View>
              <View style={styles.transactionInfo}>
                <Text style={styles.transactionType}>{item.type}</Text>
                <Text style={styles.transactionTime}>{item.time}</Text>
              </View>
              <Text style={[styles.transactionAmount, { color: item.color }]}>
                {item.amount}
              </Text>
            </View>
          ))}

          <Text style={styles.yesterdayText}>Yesterday</Text>
        </View>

        {/* Bottom Spacer to prevent overlap with CustomTabBar */}
        <View style={styles.tabBarSpacer} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#fff' },
  container: { flex: 1, paddingHorizontal: 20 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, paddingVertical: 15 },
  headerTitle: { fontSize: 22, fontWeight: '700', color: '#0D1B34' },
  addHeaderText: { fontSize: 18, fontWeight: '600', color: '#A3D65C' },
  section: { marginTop: 25 },
  sectionTitle: { fontSize: 18, fontWeight: '700', color: '#000', marginBottom: 15 },
  pocketCard: { backgroundColor: '#A3D65C', borderRadius: 15, padding: 20, elevation: 3 },
  pocketRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 },
  pocketLabel: { color: '#fff', fontSize: 16, fontWeight: '600' },
  pocketValue: { color: '#fff', fontSize: 16, fontWeight: '500' },
  viewPocketBtn: { alignSelf: 'center', marginTop: 5 },
  viewPocketText: { color: '#fff', textDecorationLine: 'underline', fontWeight: 'bold' },
  inlineAddBtn: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 25, gap: 8 },
  inlineAddText: { color: '#A3D65C', fontSize: 16, fontWeight: '600' },
  /* Transaction Styles */
  dateHeader: { flexDirection: 'row', alignItems: 'center', gap: 5, marginBottom: 15 },
  dateText: { color: '#7A869A', fontSize: 14 },
  transactionItem: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff', padding: 15, borderRadius: 12, marginBottom: 10, elevation: 1, shadowOpacity: 0.05 },
  iconContainer: { width: 40, height: 40, borderRadius: 8, justifyContent: 'center', alignItems: 'center' },
  transactionInfo: { flex: 1, marginLeft: 15 },
  transactionType: { fontSize: 16, fontWeight: '600', color: '#0D1B34' },
  transactionTime: { fontSize: 12, color: '#7A869A', marginTop: 2 },
  transactionAmount: { fontSize: 16, fontWeight: '700' },
  yesterdayText: { color: '#7A869A', fontSize: 14, marginTop: 10, marginBottom: 10 },
  
  /* Spacer for Floating Tab Bar */
  tabBarSpacer: {
    height: Platform.OS === 'ios' ? 140 : 120,
  },
});