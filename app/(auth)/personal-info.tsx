import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, SafeAreaView, ScrollView, Platform } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function PersonalInfoScreen() {
  const router = useRouter();
  
  // State for simple form tracking
  const [form, setForm] = useState({
    fullName: '',
    country: 'Nigeria',
    email: '',
    phone: '',
    market: 'Ajah market'
  });

  return (
    <SafeAreaView style={styles.container}>
      {/* 1. Header with Back Button and Progress */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={24} color="#555" />
        </TouchableOpacity>
        <Stack.Screen options={{ headerShown: false }} />
        <View style={styles.progressContainer}>
          <View style={[styles.stepCircle, styles.stepCompleted]}>
            <Ionicons name="checkmark" size={14} color="#fff" />
          </View>
          <View style={[styles.stepLine, styles.lineActive]} />
          <View style={[styles.stepCircle, styles.stepActive]}>
            <Text style={styles.activeStepText}>2</Text>
          </View>
          <View style={styles.stepLine} />
          <View style={styles.stepCircle}>
            <Text style={styles.stepText}>3</Text>
          </View>
        </View>
        <View style={{ width: 24 }} /> 
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Enter your personal information</Text>

        {/* 2. Form Inputs */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Full Name or Business name</Text>
          <TextInput 
            style={styles.input} 
            placeholder="Legal full name"
            placeholderTextColor="#C7C7CD"
            value={form.fullName}
            onChangeText={(text) => setForm({...form, fullName: text})}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Select Country</Text>
          <TouchableOpacity style={styles.dropdown}>
            <Text style={styles.dropdownText}>{form.country}</Text>
            <Ionicons name="chevron-down" size={20} color="#000" />
          </TouchableOpacity>
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Email Address</Text>
          <TextInput 
            style={styles.input} 
            placeholder="enter your email address"
            placeholderTextColor="#C7C7CD"
            keyboardType="email-address"
            autoCapitalize="none"
            value={form.email}
            onChangeText={(text) => setForm({...form, email: text})}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Phone Number</Text>
          <TextInput 
            style={styles.input} 
            placeholder="enter your phone number"
            placeholderTextColor="#C7C7CD"
            keyboardType="phone-pad"
            value={form.phone}
            onChangeText={(text) => setForm({...form, phone: text})}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Select market</Text>
          <TouchableOpacity style={styles.dropdown}>
            <Text style={styles.dropdownText}>{form.market}</Text>
            <Ionicons name="chevron-down" size={20} color="#000" />
          </TouchableOpacity>
        </View>

        {/* 3. Continue Button */}
        <TouchableOpacity 
          style={styles.continueBtn}
          onPress={() => router.push('/(auth)/verify-code')}
        >
          <Text style={styles.continueText}>Continue</Text>
        </TouchableOpacity>
      </ScrollView>
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
    backgroundColor: '#A3D65C', // Your theme green
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
  stepText: {
    fontSize: 12,
    color: '#CCC',
  },
  stepLine: {
    width: 40,
    height: 2,
    backgroundColor: '#F0F0F0',
    marginHorizontal: 2,
  },
  lineActive: {
    backgroundColor: '#A3D65C',
  },
  scrollContent: {
    paddingHorizontal: 25,
    paddingBottom: 40,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    marginBottom: 35,
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
    marginBottom: 8,
  },
  input: {
    height: 55,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    color: '#000',
  },
  dropdown: {
    height: 55,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 10,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  dropdownText: {
    fontSize: 16,
    color: '#000',
  },
  continueBtn: {
    backgroundColor: '#A3D65C',
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