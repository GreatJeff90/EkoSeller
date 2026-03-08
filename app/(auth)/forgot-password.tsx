import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, SafeAreaView, Platform } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function ForgotPasswordScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('tomashuk.dima.1992@gmail.com');

  return (
    <SafeAreaView style={styles.container}>
      {/* 1. Header with Back Button and Progress Stepper */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={24} color="#555" />
        </TouchableOpacity>
        <Stack.Screen options={{ headerShown: false }} />
        <View style={styles.progressContainer}>
          <View style={[styles.stepCircle, styles.stepActive]}>
            <Text style={styles.activeStepText}>1</Text>
          </View>
          <View style={styles.stepLine} />
          <View style={styles.stepCircle}>
            <Text style={styles.stepText}>2</Text>
          </View>
          <View style={styles.stepLine} />
          <View style={styles.stepCircle}>
            <Text style={styles.stepText}>3</Text>
          </View>
        </View>
        <View style={{ width: 24 }} /> 
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Password reset</Text>
        <Text style={styles.subtitle}>
          Please enter your registered email address to reset your password
        </Text>

        {/* 2. Email Input with Icon and Validation */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Enter Email</Text>
          <View style={styles.inputWrapper}>
            <Ionicons name="mail-outline" size={20} color="#A3D65C" style={styles.inputIcon} />
            <TextInput 
              style={styles.input} 
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              placeholder="Enter your email"
            />
            {/* Validation checkmark matches design */}
            <Ionicons name="checkmark-circle-outline" size={20} color="#A3D65C" />
          </View>
        </View>

        {/* 3. Continue Button */}
        <TouchableOpacity 
          style={styles.continueBtn}
          onPress={() => router.push('/(auth)/verify-code')} // Redirects to OTP verification
        >
          <Text style={styles.continueText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: Platform.OS === 'android' ? 40 : 10,
    marginBottom: 40,
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  stepCircle: {
    width: 26,
    height: 26,
    borderRadius: 13,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  stepActive: {
    backgroundColor: '#A3D65C', // Step 1 is active
    borderColor: '#A3D65C',
  },
  activeStepText: {
    fontSize: 12,
    color: '#fff',
    fontWeight: 'bold',
  },
  stepText: {
    fontSize: 12,
    color: '#CCC',
  },
  stepLine: {
    width: 40,
    height: 1,
    backgroundColor: '#E0E0E0',
    marginHorizontal: 2,
  },
  content: {
    flex: 1,
    paddingHorizontal: 25,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#0D1B34',
    textAlign: 'center',
    marginBottom: 15,
  },
  subtitle: {
    fontSize: 14,
    color: '#4A5568',
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: 40,
  },
  inputGroup: {
    width: '100%',
    marginBottom: 40,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#0D1B34',
    marginBottom: 8,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 55,
    borderWidth: 1,
    borderColor: '#D8E2B2', // Soft green border per design
    borderRadius: 12,
    paddingHorizontal: 15,
  },
  inputIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: '#0D1B34',
  },
  continueBtn: {
    backgroundColor: '#A3D65C',
    width: '100%',
    height: 55,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  continueText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});