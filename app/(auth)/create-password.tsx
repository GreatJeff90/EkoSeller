import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, SafeAreaView, Platform, KeyboardAvoidingView } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function CreatePasswordScreen() {
  const router = useRouter();
  const [password, setPassword] = useState('Stop!putinswar2022');
  const [confirmPassword, setConfirmPassword] = useState('Stop!putinswar2022');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
        style={{ flex: 1 }}
      >
        {/* 1. Header with Back Button and Final Step Progress */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="chevron-back" size={24} color="#555" />
          </TouchableOpacity>
          
          <View style={styles.progressContainer}>
            <View style={[styles.stepCircle, styles.stepCompleted]}>
              <Ionicons name="checkmark" size={14} color="#fff" />
            </View>
            <View style={[styles.stepLine, styles.lineActive]} />
            <View style={[styles.stepCircle, styles.stepCompleted]}>
              <Ionicons name="checkmark" size={14} color="#fff" />
            </View>
            <View style={[styles.stepLine, styles.lineActive]} />
            <View style={[styles.stepCircle, styles.stepActive]}>
              <Text style={styles.activeStepText}>3</Text>
            </View>
          </View>
          <View style={{ width: 24 }} /> 
        </View>

        <View style={styles.content}>
          <Text style={styles.title}>Create a password</Text>
          <Text style={styles.subtitle}>
            The password must be 8 characters, including 1 uppercase letter, 1 number and 1 special character.
          </Text>

          {/* 2. Enter Password Input */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Enter password</Text>
            <View style={styles.passwordWrapper}>
              <Ionicons name="lock-closed-outline" size={20} color="#A3D65C" style={styles.inputIcon} />
              <TextInput 
                style={styles.input} 
                secureTextEntry={!showPassword}
                value={password}
                onChangeText={setPassword}
              />
              <Ionicons name="checkmark-circle-outline" size={20} color="#A3D65C" />
            </View>
          </View>

          {/* 3. Confirm Password Input */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Confirm password</Text>
            <View style={styles.passwordWrapper}>
              <Ionicons name="lock-closed-outline" size={20} color="#A3D65C" style={styles.inputIcon} />
              <TextInput 
                style={styles.input} 
                secureTextEntry={!showPassword}
                value={confirmPassword}
                onChangeText={setConfirmPassword}
              />
              <Ionicons name="checkmark-circle-outline" size={20} color="#A3D65C" />
            </View>
          </View>

          {/* 4. Final Continue Button */}
          <TouchableOpacity 
            style={styles.continueBtn}
            onPress={() => router.replace('/(tabs)')} // Replace ensures user can't go back to signup
          >
            <Text style={styles.continueText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
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
  stepCompleted: {
    backgroundColor: '#A3D65C',
    borderColor: '#A3D65C',
  },
  stepActive: {
    borderColor: '#A3D65C',
    borderWidth: 2,
  },
  activeStepText: {
    fontSize: 12,
    color: '#A3D65C',
    fontWeight: 'bold',
  },
  stepLine: {
    width: 40,
    height: 2,
    backgroundColor: '#A3D65C',
    marginHorizontal: 2,
  },
  lineActive: {
    backgroundColor: '#A3D65C',
  },
  content: {
    flex: 1,
    paddingHorizontal: 25,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#0D1B34',
    textAlign: 'center',
    marginBottom: 15,
  },
  subtitle: {
    fontSize: 14,
    color: '#0D1B34',
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: 40,
  },
  inputGroup: {
    marginBottom: 25,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#0D1B34',
    marginBottom: 8,
  },
  passwordWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 55,
    borderWidth: 1,
    borderColor: '#A3D65C', // Your theme green
    borderRadius: 12,
    paddingHorizontal: 15,
  },
  inputIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#0D1B34',
  },
  continueBtn: {
    backgroundColor: '#A3D65C',
    width: '100%',
    height: 55,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  continueText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});