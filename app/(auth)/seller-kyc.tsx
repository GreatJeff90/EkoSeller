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
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Stack, useRouter } from 'expo-router';

export default function SellerKYCScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* 1. Header with Back Button and Progress Indicator */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="chevron-back" size={28} color="#7A869A" />
        </TouchableOpacity>
        <Stack.Screen options={{ headerShown: false }} />
        <View style={styles.progressContainer}>
          <View style={[styles.progressStep, styles.stepCompleted]}>
            <Text style={styles.stepTextCompleted}>1</Text>
          </View>
          <View style={[styles.progressLine, styles.lineActive]} />
          <View style={[styles.progressStep, styles.stepCompleted]}>
            <Text style={styles.stepTextCompleted}>2</Text>
          </View>
          <View style={[styles.progressLine, styles.lineActive]} />
          <View style={[styles.progressStep, styles.stepActive]}>
            <Text style={styles.stepTextActive}>3</Text>
          </View>
        </View>
      </View>

      <ScrollView 
        contentContainerStyle={styles.scrollContent} 
        showsVerticalScrollIndicator={false}
      >
        {/* 2. KYC Security Illustration */}
        <View style={styles.illustrationContainer}>
          <MaterialCommunityIcons name="fingerprint" size={100} color="#A3D65C" />
          <View style={styles.lockBadge}>
             <Ionicons name="lock-closed" size={14} color="#fff" />
          </View>
        </View>

        {/* 3. Headline and Description */}
        <Text style={styles.title}>KYC Verification</Text>
        <Text style={styles.subtitle}>
          Verify your identity! Upload a government-issued ID (Passport, driver's license, national ID card) to complete KYC verification, secure your account and unlock full platform features.
        </Text>

        {/* 4. Document Selection */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Document Type</Text>
          <TouchableOpacity style={styles.dropdown}>
            <Text style={styles.dropdownText}>NIN</Text>
            <Ionicons name="chevron-down" size={20} color="#000" />
          </TouchableOpacity>
        </View>

        {/* 5. NIN Number Input */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>NIN Number:</Text>
          <TextInput 
            style={styles.input} 
            placeholder="Enter nin number" 
            placeholderTextColor="#ccc"
            keyboardType="numeric"
          />
        </View>

        {/* 6. Upload Link */}
        <TouchableOpacity style={styles.uploadLinkContainer}>
          <Text style={styles.uploadTextNormal}>
            <Text style={styles.uploadTextLink}>Click Here</Text> to Uploadload NIN Slip
          </Text>
        </TouchableOpacity>

        {/* 7. Continue Button */}
        <TouchableOpacity 
          style={styles.continueBtn}
          onPress={() => router.push('/(auth)/seller-password' as any)}
        >
          <Text style={styles.continueBtnText}>Continue</Text>
        </TouchableOpacity>

        {/* Bottom Spacer to prevent overlap with TabBar */}
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
    paddingRight: 40,
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
  stepCompleted: {
    backgroundColor: '#A3D65C',
    borderColor: '#A3D65C',
  },
  stepActive: {
    borderColor: '#A3D65C',
    borderWidth: 2,
  },
  stepTextCompleted: { color: '#fff', fontSize: 12, fontWeight: '700' },
  stepTextActive: { color: '#A3D65C', fontSize: 12, fontWeight: '700' },
  progressLine: {
    width: 30,
    height: 1,
    backgroundColor: '#D3D3D3',
    marginHorizontal: 5,
  },
  lineActive: {
    backgroundColor: '#A3D65C',
  },
  scrollContent: { paddingHorizontal: 25, alignItems: 'center' },
  illustrationContainer: {
    marginTop: 30,
    marginBottom: 20,
    position: 'relative',
  },
  lockBadge: {
    position: 'absolute',
    bottom: 5,
    right: 5,
    backgroundColor: '#A3D65C',
    padding: 4,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#0D1B34',
    marginBottom: 15,
  },
  subtitle: {
    fontSize: 14,
    color: '#7A869A',
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: 35,
  },
  inputGroup: { width: '100%', marginBottom: 20 },
  label: {
    fontSize: 15,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
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
  input: {
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    padding: 15,
    fontSize: 14,
    color: '#000',
  },
  uploadLinkContainer: { marginVertical: 10 },
  uploadTextNormal: { fontSize: 14, color: '#333', fontWeight: '500' },
  uploadTextLink: { color: '#A3D65C', fontWeight: '700' },
  continueBtn: {
    backgroundColor: '#A3D65C',
    width: '100%',
    paddingVertical: 18,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 30,
  },
  continueBtnText: { color: '#fff', fontSize: 16, fontWeight: '700' },
  footerSpacer: { height: 100 },
});