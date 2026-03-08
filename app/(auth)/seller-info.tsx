import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { Stack, useRouter } from 'expo-router';

export default function SellerInfoScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Header with Back Button and Progress Indicator */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="chevron-back" size={28} color="#7A869A" />
        </TouchableOpacity>
        <Stack.Screen options={{ headerShown: false }} />
        <View style={styles.progressContainer}>
          <View style={[styles.progressStep, styles.stepActive]}>
            <Text style={styles.stepTextActive}>1</Text>
          </View>
          <View style={styles.progressLine} />
          <View style={styles.progressStep}>
            <Text style={styles.stepText}>2</Text>
          </View>
          <View style={styles.progressLine} />
          <View style={styles.progressStep}>
            <Text style={styles.stepText}>3</Text>
          </View>
        </View>
      </View>

      <ScrollView 
        contentContainerStyle={styles.scrollContent} 
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>Enter your personal information</Text>

        {/* Store Name Input */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Store Name</Text>
          <TextInput 
            style={styles.input} 
            placeholder="Store Name" 
            placeholderTextColor="#ccc"
          />
        </View>

        {/* State and L.G.A Selection Row */}
        <View style={styles.row}>
          <View style={[styles.inputGroup, { flex: 1, marginRight: 10 }]}>
            <Text style={styles.label}>Select State</Text>
            <TouchableOpacity style={styles.dropdown}>
              <Text style={styles.dropdownText}>Lagos</Text>
              <Ionicons name="chevron-down" size={20} color="#000" />
            </TouchableOpacity>
          </View>
          <View style={[styles.inputGroup, { flex: 1 }]}>
            <Text style={styles.label}>Select L.G.A</Text>
            <TouchableOpacity style={styles.dropdown}>
              <Text style={styles.dropdownText}>Apapa</Text>
              <Ionicons name="chevron-down" size={20} color="#000" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Description Input */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Description</Text>
          <TextInput 
            style={[styles.input, styles.textArea]} 
            placeholder="Tell us about your store" 
            placeholderTextColor="#ccc"
            multiline={true}
            numberOfLines={4}
          />
        </View>

        {/* Contact Input */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Email/Phone Number</Text>
          <TextInput 
            style={styles.input} 
            placeholder="enter your Email/Phone number" 
            placeholderTextColor="#ccc"
          />
        </View>

        {/* Market Selection */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Select market</Text>
          <TouchableOpacity style={styles.dropdown}>
            <Text style={styles.dropdownText}>Ajah market</Text>
            <Ionicons name="chevron-down" size={20} color="#000" />
          </TouchableOpacity>
        </View>

        {/* Continue Button */}
        <TouchableOpacity 
          style={styles.continueBtn}
          onPress={() => {router.push('/(auth)/verify-seller');}}
        >
          <Text style={styles.continueBtnText}>Continue</Text>
        </TouchableOpacity>

        {/* Bottom Spacer for TabBar or Keyboard avoidance */}
        <View style={styles.footerSpacer} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#fff' },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  backButton: { marginRight: 20 },
  progressContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: 40, // Balance the back button offset
  },
  progressStep: {
    width: 28,
    height: 28,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#D3D3D3',
    justifyContent: 'center',
    alignItems: 'center',
  },
  stepActive: {
    backgroundColor: '#A3D65C', // Theme Lime Green
    borderColor: '#A3D65C',
  },
  stepText: { color: '#D3D3D3', fontSize: 12, fontWeight: '700' },
  stepTextActive: { color: '#fff', fontSize: 12, fontWeight: '700' },
  progressLine: {
    width: 30,
    height: 1,
    backgroundColor: '#D3D3D3',
    marginHorizontal: 5,
  },
  scrollContent: { paddingHorizontal: 25, paddingBottom: 20 },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#333',
    marginVertical: 25,
  },
  inputGroup: { marginBottom: 20 },
  label: {
    fontSize: 15,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    padding: 15,
    fontSize: 14,
    color: '#000',
    backgroundColor: '#fff',
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  row: { flexDirection: 'row' },
  dropdown: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    padding: 15,
    backgroundColor: '#fff',
  },
  dropdownText: { fontSize: 14, color: '#333' },
  continueBtn: {
    backgroundColor: '#A3D65C', // Theme Lime Green
    paddingVertical: 18,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 20,
  },
  continueBtnText: { color: '#fff', fontSize: 16, fontWeight: '700' },
  footerSpacer: { height: 100 }, // Avoid overlap with bottom elements
});