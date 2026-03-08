import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { Ionicons, Feather } from '@expo/vector-icons';

export default function ChangePasswordScreen() {
  const router = useRouter();
  
  // State for password visibility toggles
  const [showOld, setShowOld] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  // Reusable Password Input Component
  const PasswordInput = ({ 
    label, 
    value, 
    show, 
    setShow 
  }: { 
    label: string, 
    value: string, 
    show: boolean, 
    setShow: (v: boolean) => void 
  }) => (
    <View style={styles.inputGroup}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputWrapper}>
        <Feather name="lock" size={20} color="#BEE671" style={styles.lockIcon} />
        <TextInput
          style={styles.input}
          secureTextEntry={!show}
          defaultValue={value}
          placeholderTextColor="#94A3B8"
        />
        <TouchableOpacity onPress={() => setShow(!show)}>
          <Ionicons 
            name={show ? "eye-outline" : "eye-off-outline"} 
            size={22} 
            color="#1E293B" 
          />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <Stack.Screen options={{ headerShown: false }} />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
          <Ionicons name="arrow-back" size={24} color="#1E293B" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Change Login Password</Text>
        <View style={{ width: 24 }} />
      </View>

      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <ScrollView 
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* Form Fields */}
          <PasswordInput 
            label="Enter Old Password" 
            value="Stop!putinswar2022" 
            show={showOld} 
            setShow={setShowOld} 
          />
          
          <PasswordInput 
            label="Enter New Password" 
            value="Stop!putinswar2022" 
            show={showNew} 
            setShow={setShowNew} 
          />
          
          <PasswordInput 
            label="Confirm Password" 
            value="Stop!putinswar2022" 
            show={showConfirm} 
            setShow={setShowConfirm} 
          />

          {/* Forgot Password Link */}
          <TouchableOpacity style={styles.forgotContainer}>
            <Text style={styles.forgotText}>
              Forgot Old password? <Text style={styles.clickHere}>Click here</Text>
            </Text>
          </TouchableOpacity>

          {/* Action Button */}
          <TouchableOpacity 
            style={styles.doneBtn}
            onPress={() => router.back()}
          >
            <Text style={styles.doneText}>DONE</Text>
          </TouchableOpacity>

        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1E293B',
  },
  backBtn: {
    padding: 5,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  inputGroup: {
    marginBottom: 25,
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1E293B',
    marginBottom: 10,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#BEE671', // Brand green border
    borderRadius: 12,
    paddingHorizontal: 15,
    height: 55,
  },
  lockIcon: {
    marginRight: 12,
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: '#1E293B',
  },
  forgotContainer: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 40,
  },
  forgotText: {
    fontSize: 14,
    color: '#1E293B',
    fontWeight: 'bold',
  },
  clickHere: {
    color: '#BEE671', // Highlighted brand green
  },
  doneBtn: {
    backgroundColor: '#BEE671', // Brand lime green button
    height: 55,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 60,
  },
  doneText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
});