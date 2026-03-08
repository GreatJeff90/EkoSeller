import React, { useState, useRef } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, SafeAreaView, Platform } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

export default function VerifyCodeScreen() {
  const router = useRouter();
  const [code, setCode] = useState(['', '', '', '', '', '']);
  const inputs = useRef<Array<TextInput | null>>([]);

  // Handles moving to the next input automatically
  const handleInput = (text: string, index: number) => {
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);

    if (text !== '' && index < 5) {
      inputs.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (e: any, index: number) => {
    if (e.nativeEvent.key === 'Backspace' && code[index] === '' && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* 1. Header with Back Button and Final Progress Step */}
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
        <Text style={styles.title}>Please enter the code</Text>
        <Text style={styles.subtitle}>
          We sent email to tomashuk.dima.1992@gmail.com
        </Text>

        {/* 2. Visual Icon */}
        <View style={styles.iconContainer}>
          <MaterialCommunityIcons name="email-open" size={100} color="#A3D65C" />
        </View>

        {/* 3. 6-Digit Code Input Row */}
        <View style={styles.codeRow}>
          {code.map((digit, index) => (
            <TextInput
              key={index}
              ref={(ref) => { inputs.current[index] = ref; }}
              style={styles.codeInput}
              maxLength={1}
              keyboardType="number-pad"
              value={digit}
              onChangeText={(text) => handleInput(text, index)}
              onKeyPress={(e) => handleKeyPress(e, index)}
            />
          ))}
        </View>

        <TouchableOpacity style={styles.resendContainer}>
          <Text style={styles.resendText}>
            Didn't get a mail? <Text style={styles.resendLink}>Send again</Text>
          </Text>
        </TouchableOpacity>

        {/* 4. Continue Button */}
        <TouchableOpacity 
          style={styles.continueBtn}
          onPress={() => router.push('/(auth)/create-password')}
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
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#0D1B34',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: '#0D1B34',
    textAlign: 'center',
    marginBottom: 40,
  },
  iconContainer: {
    marginBottom: 40,
  },
  codeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 30,
  },
  codeInput: {
    width: 48,
    height: 55,
    borderWidth: 1,
    borderColor: '#A3D65C',
    borderRadius: 10,
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
  },
  resendContainer: {
    marginBottom: 'auto',
  },
  resendText: {
    fontSize: 14,
    color: '#0D1B34',
  },
  resendLink: {
    color: '#A3D65C',
    fontWeight: '600',
  },
  continueBtn: {
    backgroundColor: '#A3D65C',
    width: '100%',
    height: 55,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
  continueText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});