import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  TextInput, 
  ScrollView,
  Platform
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function WithdrawScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#0D1B34" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Withdrawal Method</Text>
      </View>

      <ScrollView 
        style={styles.container} 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Method Selection */}
        <View style={styles.methodBox}>
          <Text style={styles.label}>Withdraw Method</Text>
          <View style={styles.cardIconRow}>
            <FontAwesome name="cc-mastercard" size={20} color="#EB001B" style={styles.cardIcon} />
            <FontAwesome name="cc-visa" size={20} color="#1A1F71" style={styles.cardIcon} />
            <FontAwesome name="cc-amex" size={20} color="#007BC1" style={styles.cardIcon} />
            <FontAwesome name="cc-discover" size={20} color="#F68121" style={styles.cardIcon} />
          </View>
        </View>

        {/* Form Inputs */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Select Bank</Text>
          <TouchableOpacity style={styles.dropdown}>
            <Text style={styles.dropdownText}>Union Bank</Text>
            <Ionicons name="chevron-down" size={20} color="#000" />
          </TouchableOpacity>
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Account Number</Text>
          <TextInput 
            style={styles.input} 
            placeholder="0000 0000 0000 0000" 
            keyboardType="numeric" 
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Account Name</Text>
          <TextInput style={styles.input} />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Enter Amount</Text>
          <View style={styles.amountInputWrapper}>
            <Text style={styles.currencySymbol}>₦</Text>
            <TextInput style={styles.amountInput} keyboardType="numeric" />
          </View>
        </View>

        {/* Fees */}
        <View style={styles.feesRow}>
          <Text style={styles.feesLabel}>Fess:</Text>
          <Text style={styles.feesValue}>₦ 00</Text>
        </View>

        {/* Action Button */}
        <TouchableOpacity 
  style={styles.withdrawBtn}
  onPress={() => router.push('/verify-withdraw')}
>
  <Text style={styles.withdrawBtnText}>Withdraw</Text>
</TouchableOpacity>

        {/* CRITICAL: Bottom Spacer to avoid TabBar overlap */}
        <View style={styles.tabBarSpacer} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#fff' },
  container: { flex: 1 },
  scrollContent: { paddingHorizontal: 20, paddingBottom: 20 },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    gap: 15,
  },
  backButton: { padding: 5 },
  headerTitle: { fontSize: 20, fontWeight: '700', color: '#0D1B34' },
  
  methodBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderStyle: 'dashed',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 15,
    marginVertical: 20,
  },
  cardIconRow: { flexDirection: 'row', alignItems: 'center' },
  cardIcon: { marginLeft: 8 },

  inputGroup: { marginBottom: 20 },
  label: { fontSize: 15, color: '#333', marginBottom: 8, fontWeight: '600' },
  dropdown: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 15,
  },
  dropdownText: { fontSize: 16, color: '#000' },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 15,
    fontSize: 16,
  },
  
  amountInputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 15,
  },
  currencySymbol: { fontSize: 22, fontWeight: '600', color: '#000', marginRight: 10 },
  amountInput: { flex: 1, height: 55, fontSize: 18 },
  
  feesRow: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 },
  feesLabel: { fontSize: 16, fontWeight: '700', color: '#0D1B34' },
  feesValue: { fontSize: 16, color: '#000' },
  
  withdrawBtn: {
    backgroundColor: '#A3D65C', // Theme Lime Green
    paddingVertical: 18,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 40,
  },
  withdrawBtnText: { color: '#fff', fontSize: 18, fontWeight: '700' },

  /* Added Spacer Height */
  tabBarSpacer: {
    height: Platform.OS === 'ios' ? 140 : 120, 
  },
});