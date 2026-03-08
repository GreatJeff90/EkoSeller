import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, SafeAreaView, Dimensions } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

export default function SignupScreen() {
  const router = useRouter();
  const [selection, setSelection] = useState<'buyer' | 'seller' | null>(null);

  return (
    <SafeAreaView style={styles.container}>
      {/* 1. Header with Back Button and Progress */}
      <Stack.Screen options={{ headerShown: false }} />
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={24} color="#999" />
        </TouchableOpacity>
        <View style={styles.progressContainer}>
          <View style={[styles.stepCircle, styles.activeStep]}><Text style={styles.activeStepText}>1</Text></View>
          <View style={styles.stepLine} />
          <View style={styles.stepCircle}><Text style={styles.stepText}>2</Text></View>
          <View style={styles.stepLine} />
          <View style={styles.stepCircle}><Text style={styles.stepText}>3</Text></View>
        </View>
        <View style={{ width: 24 }} /> 
      </View>

      {/* 2. Main Illustration */}
      <View style={styles.imageContainer}>
        <Image 
          source={require('../../assets/images/signup-shop.png')} // Update to match your specific signup image asset
          style={styles.image} 
          resizeMode="contain" 
        />
      </View>

      {/* 3. Text and Selection */}
      <View style={styles.contentWrapper}>
        <Text style={styles.title}>Are you a buyer or seller</Text>
        <Text style={styles.subtitle}>please select one option</Text>

        <View style={styles.selectionRow}>
          <TouchableOpacity 
            style={styles.radioOption} 
            onPress={() => setSelection('buyer')}
          >
            <Ionicons 
              name={selection === 'buyer' ? "radio-button-on" : "radio-button-off"} 
              size={20} 
              color={selection === 'buyer' ? "#A3D65C" : "#999"} 
            />
            <Text style={styles.radioText}>I'm a buyer</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.radioOption} 
            onPress={() => setSelection('seller')}
          >
            <Ionicons 
              name={selection === 'seller' ? "radio-button-on" : "radio-button-off"} 
              size={20} 
              color={selection === 'seller' ? "#A3D65C" : "#999"} 
            />
            <Text style={styles.radioText}>I'm a Seller</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.termsText}>
          By registering you accept our <Text style={styles.linkText}>Terms & Conditions</Text> and <Text style={styles.linkText}>Privacy Policy</Text>. Your data will be securely encrypted with TLS
        </Text>

        {/* 4. Action Button */}
        <TouchableOpacity 
          style={[styles.continueBtn, !selection && styles.disabledBtn]}
          disabled={!selection}
          onPress={() => {
            if (selection === 'buyer') {
              router.push('/(auth)/personal-info');
            } else if (selection === 'seller') {
              router.push('/(auth)/seller-info');
            }
          }}
        >
          <Text style={styles.continueText}>Continue</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push('/(auth)/login')}>
          <Text style={styles.footerText}>
            Already have an account? <Text style={styles.linkText}>Sign in</Text>
          </Text>
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
    marginTop: 10,
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  stepCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeStep: {
    backgroundColor: '#fff',
    borderColor: '#A3D65C',
    borderWidth: 2,
  },
  stepText: {
    fontSize: 12,
    color: '#999',
  },
  activeStepText: {
    fontSize: 12,
    color: '#A3D65C',
    fontWeight: 'bold',
  },
  stepLine: {
    width: 30,
    height: 1,
    backgroundColor: '#E0E0E0',
  },
  imageContainer: {
    width: width,
    height: height * 0.4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '80%',
    height: '80%',
  },
  contentWrapper: {
    flex: 1,
    paddingHorizontal: 30,
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 25,
  },
  selectionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 30,
  },
  radioOption: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  radioText: {
    fontSize: 16,
    color: '#000',
  },
  termsText: {
    fontSize: 11,
    color: '#666',
    textAlign: 'center',
    lineHeight: 16,
    marginBottom: 30,
  },
  linkText: {
    color: '#A3D65C',
    fontWeight: '600',
  },
  continueBtn: {
    backgroundColor: '#A3D65C',
    width: '100%',
    height: 50,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  disabledBtn: {
    backgroundColor: '#E0E0E0',
  },
  continueText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footerText: {
    fontSize: 14,
    color: '#000',
  },
});