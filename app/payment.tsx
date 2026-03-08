import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { Ionicons, AntDesign } from '@expo/vector-icons';

export default function PaymentScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
      <Stack.Screen options={{ headerShown: false }} />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#334155" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Payment Method</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Card Type Display */}
        <View style={styles.cardSelector}>
          <Text style={styles.labelBold}>Payment Method</Text>
          <View style={styles.cardIconsRow}>
             {/* Replace with local assets or icon components */}
            <Image source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png'}} style={styles.cardLogo} resizeMode="contain" />
            <Image source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png'}} style={styles.cardLogo} resizeMode="contain" />
            <Image source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/1200px-PayPal.svg.png'}} style={styles.cardLogo} resizeMode="contain" />
          </View>
        </View>

        {/* Form Fields */}
        <View style={styles.form}>
          <Text style={styles.inputLabel}>Name on card</Text>
          <TextInput style={styles.input} placeholder="John Doe" placeholderTextColor="#CBD5E1" />

          <Text style={styles.inputLabel}>Card number</Text>
          <TextInput style={styles.input} placeholder="0000 0000 0000 0000" keyboardType="numeric" placeholderTextColor="#CBD5E1" />

          <View style={styles.row}>
            <View style={{ flex: 1, marginRight: 10 }}>
              <Text style={styles.inputLabel}>Card expirstion</Text>
              <TextInput style={styles.input} placeholder="11/2024" placeholderTextColor="#CBD5E1" />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.inputLabel}>CV</Text>
              <TextInput style={styles.input} placeholder="75*" keyboardType="numeric" secureTextEntry placeholderTextColor="#CBD5E1" />
            </View>
          </View>

          <Text style={styles.inputLabel}>Card Security Code</Text>
          <View style={styles.inputWithIcon}>
            <TextInput style={{flex: 1}} placeholder="Code" placeholderTextColor="#CBD5E1" />
            <AntDesign name="question-circle" size={20} color="#CBD5E1" />
          </View>
        </View>

        {/* Price Summary */}
        <View style={styles.summaryContainer}>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Total:</Text>
            <Text style={styles.summaryValue}>₦120,000</Text>
          </View>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Total order:</Text>
            <Text style={styles.summaryValue}>₦130,000</Text>
          </View>
        </View>

        {/* Pay Button */}
        <TouchableOpacity style={styles.payButton}>
          <Text style={styles.payText}
          onPress={() => router.push('/payment-success' as any)} >Pay</Text>
        </TouchableOpacity>
        
        <View style={{ height: 40 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#FFF' },
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 20, paddingVertical: 15 },
  headerTitle: { fontSize: 18, fontWeight: 'bold', color: '#1E293B' },
  scrollContent: { paddingHorizontal: 20 },
  cardSelector: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    borderStyle: 'dashed',
    borderRadius: 8,
    marginVertical: 20,
  },
  labelBold: { fontSize: 14, fontWeight: '600', color: '#334155', width: '30%' },
  cardIconsRow: { flexDirection: 'row', gap: 10, alignItems: 'center' },
  cardLogo: { width: 40, height: 25 },
  form: { gap: 15 },
  inputLabel: { fontSize: 14, fontWeight: '600', color: '#1E293B', marginBottom: -5 },
  input: {
    borderWidth: 1,
    borderColor: '#E2E8F0',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    color: '#1E293B',
  },
  inputWithIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    borderRadius: 8,
    padding: 12,
  },
  row: { flexDirection: 'row' },
  summaryContainer: { marginTop: 30, paddingTop: 20, borderTopWidth: 1, borderTopColor: '#F1F5F9' },
  summaryRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15 },
  summaryLabel: { fontSize: 22, fontWeight: 'bold', color: '#000' },
  summaryValue: { fontSize: 18, fontWeight: 'bold', color: '#000' },
  payButton: {
    backgroundColor: '#BEE671',
    borderRadius: 12,
    paddingVertical: 18,
    alignItems: 'center',
    marginTop: 20,
  },
  payText: { color: '#FFF', fontSize: 18, fontWeight: 'bold' },
});