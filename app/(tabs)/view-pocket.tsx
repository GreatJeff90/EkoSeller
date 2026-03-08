import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  ScrollView 
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function PocketDetailScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Header with Back Button (image_d691e8.png) */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#0D1B34" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Saving</Text>
      </View>

      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {/* Balance Card (image_d691e8.png) */}
        <View style={styles.balanceCard}>
          <Text style={styles.balanceLabel}>Pocket Balance</Text>
          <Text style={styles.balanceAmount}>₦35,000.00</Text>
        </View>

        {/* Action Buttons (image_d691e8.png) */}
        <View style={styles.actionRow}>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionButtonText}>Top Up</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.actionButton} 
            onPress={() => router.push('/withdraw')}
          >
            <Text style={styles.actionButtonText}>Withdraw</Text>
          </TouchableOpacity>
        </View>

        {/* Security Guarantee (image_d691e8.png) */}
        <View style={styles.guaranteeContainer}>
          <View style={styles.guaranteeIconWrapper}>
             <MaterialCommunityIcons name="check-decagram-outline" size={32} color="#A3D65C" />
          </View>
          <View style={styles.guaranteeTextContent}>
            <Text style={styles.guaranteeTitle}>Secured & Guaranteed</Text>
            <Text style={styles.guaranteeSubtitle}>
              Secured by the Ekoseller Guarantee that the return will be repaid.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#fff' },
  container: { flex: 1, paddingHorizontal: 20 },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    gap: 15,
  },
  backButton: { padding: 5 },
  headerTitle: { fontSize: 20, fontWeight: '700', color: '#0D1B34' },
  
  /* Balance Card Styles (image_d691e8.png) */
  balanceCard: {
    backgroundColor: '#A3D65C', // Theme lime green
    borderRadius: 15,
    paddingVertical: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    backgroundImage: 'radial-gradient(circle, #B2E16F 0%, #A3D65C 100%)', // Simulating pattern
  },
  balanceLabel: { color: '#fff', fontSize: 16, fontWeight: '500', marginBottom: 5 },
  balanceAmount: { color: '#fff', fontSize: 32, fontWeight: '700' },
  
  /* Action Button Styles (image_d691e8.png) */
  actionRow: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 20, gap: 15 },
  actionButton: {
    flex: 1,
    backgroundColor: '#A3D65C',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  actionButtonText: { color: '#fff', fontSize: 16, fontWeight: '600' },
  
  /* Guarantee Styles (image_d691e8.png) */
  guaranteeContainer: {
    flexDirection: 'row',
    marginTop: 60,
    paddingHorizontal: 5,
    alignItems: 'flex-start',
    gap: 15,
  },
  guaranteeIconWrapper: { marginTop: 2 },
  guaranteeTextContent: { flex: 1 },
  guaranteeTitle: { fontSize: 18, fontWeight: '600', color: '#A3D65C', marginBottom: 5 },
  guaranteeSubtitle: { fontSize: 14, color: '#333', lineHeight: 20 },
});