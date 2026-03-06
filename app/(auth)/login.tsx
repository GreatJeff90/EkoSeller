import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, SafeAreaView, Platform } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons, FontAwesome, AntDesign } from '@expo/vector-icons';

export default function LoginScreen() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      {/* 1. Header with Back Button */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={24} color="#555" />
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Welcome back</Text>

        {/* 2. Email/Phone Input */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Enter Email or Phone number</Text>
          <View style={styles.inputWrapper}>
            <Ionicons name="mail-outline" size={20} color="#A3D65C" style={styles.inputIcon} />
            <TextInput 
              style={styles.input} 
              placeholder="tomashuk.dima.1992@gmail.com"
              placeholderTextColor="#0D1B34"
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>
        </View>

        {/* 3. Password Input */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Enter Password</Text>
          <View style={styles.inputWrapper}>
            <Ionicons name="lock-closed-outline" size={20} color="#A3D65C" style={styles.inputIcon} />
            <TextInput 
              style={styles.input} 
              placeholder="Stop!putinswar2022"
              placeholderTextColor="#0D1B34"
              secureTextEntry={!showPassword}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Ionicons name={showPassword ? "eye-outline" : "eye-off-outline"} size={20} color="#000" />
            </TouchableOpacity>
          </View>
        </View>

        {/* 4. Forgot Password */}
        <TouchableOpacity 
  style={styles.forgotContainer}
  onPress={() => router.push('/(auth)/forgot-password')} // Navigates to the forgot password page
>
  <Text style={styles.forgotText}>
    Forgot your password? <Text style={styles.linkText}>Click here</Text>
  </Text>
</TouchableOpacity>

        {/* 5. Sign In Button */}
        <TouchableOpacity 
          style={styles.signInBtn}
          onPress={() => router.replace('/(auth)/signup')} // Example: Navigates to onboarding after login
        >
          <Text style={styles.signInText}>Sign in</Text>
        </TouchableOpacity>

        {/* 6. Sign Up Link */}
        <TouchableOpacity onPress={() => router.push('/(auth)/signup')}>
          <Text style={styles.footerText}>
            Don't have an account? <Text style={styles.linkText}>Sign up</Text>
          </Text>
        </TouchableOpacity>

        {/* 7. Social Login Footer */}
        <View style={styles.footer}>
          <View style={styles.dividerContainer}>
            <View style={styles.line} />
            <Text style={styles.dividerText}>or continue with</Text>
            <View style={styles.line} />
          </View>

          <View style={styles.socialRow}>
            <TouchableOpacity style={styles.socialIcon}>
              <FontAwesome name="facebook" size={24} color="#1877F2" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialIcon}>
              <AntDesign name="apple" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialIcon}>
              <AntDesign name="google" size={24} color="#EA4335" />
            </TouchableOpacity>
          </View>
        </View>
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
    paddingHorizontal: 20,
    paddingTop: Platform.OS === 'android' ? 40 : 10,
    marginBottom: 20,
  },
  content: {
    flex: 1,
    paddingHorizontal: 25,
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#0D1B34',
    textAlign: 'center',
    marginBottom: 50,
  },
  inputGroup: {
    width: '100%',
    marginBottom: 25,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
    marginBottom: 8,
  },
  inputWrapper: {
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
    fontSize: 14,
    color: '#0D1B34',
  },
  forgotContainer: {
    marginBottom: 40,
  },
  forgotText: {
    fontSize: 14,
    color: '#0D1B34',
    fontWeight: '500',
  },
  linkText: {
    color: '#A3D65C',
    fontWeight: 'bold',
  },
  signInBtn: {
    backgroundColor: '#A3D65C',
    width: '100%',
    height: 55,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  signInText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  footerText: {
    fontSize: 14,
    color: '#000',
    fontWeight: '500',
  },
  footer: {
    width: '100%',
    marginTop: 'auto',
    paddingBottom: 30,
    alignItems: 'center',
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#F0F0F0',
  },
  dividerText: {
    marginHorizontal: 10,
    fontSize: 12,
    color: '#999',
  },
  socialRow: {
    flexDirection: 'row',
    gap: 20,
  },
  socialIcon: {
    padding: 15,
    borderWidth: 1,
    borderColor: '#F0F0F0',
    borderRadius: 12,
    backgroundColor: '#fff',
  },
});