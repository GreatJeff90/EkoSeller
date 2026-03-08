import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { Ionicons, Feather } from '@expo/vector-icons';

export default function EditAddressScreen() {
  const router = useRouter();
  const [label, setLabel] = useState('Home');

  return (
    <SafeAreaView style={styles.safeArea}>
      <Stack.Screen options={{ headerShown: false }} />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
          <Ionicons name="arrow-back" size={24} color="#1E293B" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>My Address</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Address Input */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>ADDRESS</Text>
          <View style={styles.inputWrapper}>
            <Ionicons name="location" size={20} color="#64748B" style={styles.inputIcon} />
            <TextInput 
              style={styles.input} 
              placeholder="3235 Royal Ln, Mesa, New Jersy 34567" 
              placeholderTextColor="#94A3B8"
            />
          </View>
        </View>

        {/* Phone Input */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>PHONE NUMBER</Text>
          <View style={styles.inputWrapper}>
            <Feather name="phone-call" size={18} color="#1E293B" style={styles.inputIcon} />
            <TextInput 
              style={styles.input} 
              placeholder="070....." 
              keyboardType="phone-pad"
              placeholderTextColor="#94A3B8"
            />
          </View>
        </View>

        {/* Row for Street and Post Code */}
        <View style={styles.row}>
          <View style={[styles.inputGroup, { flex: 1, marginRight: 10 }]}>
            <Text style={styles.label}>STREET</Text>
            <View style={styles.inputWrapper}>
              <TextInput style={styles.input} placeholder="Hason Nagar" placeholderTextColor="#94A3B8" />
            </View>
          </View>
          <View style={[styles.inputGroup, { flex: 1 }]}>
            <Text style={styles.label}>POST CODE</Text>
            <View style={styles.inputWrapper}>
              <TextInput style={styles.input} placeholder="34567" keyboardType="numeric" placeholderTextColor="#94A3B8" />
            </View>
          </View>
        </View>

        {/* Delivery Selection */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>SELECT THE DELIVERY</Text>
          <TouchableOpacity style={styles.dropdown}>
            <Text style={styles.dropdownText}>1 - 3 Days Deilvery</Text>
            <View style={styles.priceContainer}>
              <Text style={styles.deliveryPrice}>₦140,000</Text>
              <Feather name="chevron-down" size={20} color="#1E293B" />
            </View>
          </TouchableOpacity>
        </View>

        {/* Label Selector */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>LABEL AS</Text>
          <View style={styles.chipContainer}>
            {['Home', 'Work', 'Other'].map((item) => (
              <TouchableOpacity
                key={item}
                style={[styles.chip, label === item && styles.activeChip]}
                onPress={() => setLabel(item)}
              >
                <Text style={[styles.chipText, label === item && styles.activeChipText]}>{item}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Save Button */}
        <TouchableOpacity 
          style={styles.saveBtn}
          onPress={() => router.back()}
        >
          <Text style={styles.saveBtnText}>SAVE</Text>
        </TouchableOpacity>

        <View style={{ height: 40 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#FFF' },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  headerTitle: { fontSize: 18, fontWeight: 'bold', color: '#1E293B' },
  backBtn: { padding: 5 },
  scrollContent: { paddingHorizontal: 20 },
  inputGroup: { marginTop: 20 },
  label: { fontSize: 13, fontWeight: 'bold', color: '#334155', marginBottom: 8 },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F1F5F9', // Light background
    borderRadius: 12,
    paddingHorizontal: 15,
    height: 55,
  },
  inputIcon: { marginRight: 10 },
  input: { flex: 1, color: '#1E293B', fontSize: 14 },
  row: { flexDirection: 'row' },
  dropdown: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F1F5F9',
    borderRadius: 12,
    paddingHorizontal: 15,
    height: 55,
  },
  dropdownText: { color: '#64748B', fontSize: 14 },
  priceContainer: { flexDirection: 'row', alignItems: 'center' },
  deliveryPrice: { fontWeight: 'bold', color: '#64748B', marginRight: 10, fontSize: 13 },
  chipContainer: { flexDirection: 'row', gap: 10 },
  chip: {
    flex: 1,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#F1F5F9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeChip: { backgroundColor: '#BEE671' }, // Brand green for active label
  chipText: { color: '#334155', fontWeight: '500' },
  activeChipText: { color: '#FFF' },
  saveBtn: {
    backgroundColor: '#BEE671', // Brand green for SAVE button
    height: 55,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  saveBtnText: { color: '#FFF', fontSize: 16, fontWeight: 'bold' },
});