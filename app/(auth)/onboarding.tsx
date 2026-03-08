import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, SafeAreaView, Platform, Dimensions } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { FontAwesome, AntDesign } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

export default function OnboardingScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      {/* 1. Large Main Illustration */}
      <View style={styles.imageContainer}>
        <Image 
          source={require('../../assets/images/shopper.png')} 
          style={styles.image} 
          resizeMode="contain" 
        />
      </View>
<Stack.Screen options={{ headerShown: false }} />
      {/* 2. Content Wrapper for side spacing */}
      <View style={styles.contentWrapper}>
        {/* Pagination Dots */}
        <View style={styles.pagination}>
          <View style={styles.dot} />
          <View style={[styles.dot, styles.activeDot]} />
          <View style={styles.dot} />
        </View>

        {/* Text Content */}
        <View style={styles.textSection}>
          <Text style={styles.title}>Start your online shopping journey with us</Text>
          <Text style={styles.description}>
            Discover the ultimate shopping experience on Ekoseller! Explore top brands, deals, and products. 
            Enjoy safe and fast delivery, easy returns, and personalized offers.
          </Text>
        </View>

        {/* Action Buttons */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity 
            style={styles.getStartedBtn} 
            onPress={() => router.push('/(auth)/signup')} // Navigates to Sign Up
          >
            <Text style={styles.getStartedText}>Get Started</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.loginBtn}
            onPress={() => router.push('/(auth)/login')} // Navigates to Login
          >
            <Text style={styles.loginText}>Login</Text>
          </TouchableOpacity>
        </View>

        {/* Social Login Footer */}
        <View style={styles.footer}>
          <View style={styles.dividerContainer}>
            <View style={styles.line} />
            <Text style={styles.dividerText}>or continue with</Text>
            <View style={styles.line} />
          </View>

          <View style={styles.socialRow}>
            <TouchableOpacity style={styles.socialIcon}>
              <FontAwesome name="facebook" size={20} color="#1877F2" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialIcon}>
              <AntDesign name="apple" size={20} color="black" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialIcon}>
              <AntDesign name="google" size={20} color="#EA4335" />
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
    paddingTop: Platform.OS === 'ios' ? 0 : 20,
  },
  imageContainer: {
    width: width, 
    height: height * 0.45, 
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  contentWrapper: {
    flex: 1,
    paddingHorizontal: 30, 
    alignItems: 'center',
  },
  pagination: {
    flexDirection: 'row',
    marginVertical: 15,
  },
  dot: {
    width: 20,
    height: 5,
    borderRadius: 3,
    backgroundColor: '#E0E0E0',
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: '#A3D65C',
    width: 30,
  },
  textSection: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#A3D65C',
    textAlign: 'center',
    marginBottom: 8,
  },
  description: {
    fontSize: 13,
    color: '#7A869A',
    textAlign: 'center',
    lineHeight: 18,
  },
  buttonContainer: {
    width: '100%',
    gap: 12,
  },
  getStartedBtn: {
    backgroundColor: '#A3D65C',
    width: '100%',
    height: 50,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  getStartedText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  loginBtn: {
    width: '100%',
    height: 50,
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: '#A3D65C',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginText: {
    color: '#000',
    fontSize: 16,
    fontWeight: '600',
  },
  footer: {
    width: '100%',
    marginTop: 'auto',
    paddingBottom: 20,
    alignItems: 'center',
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#F0F0F0',
  },
  dividerText: {
    marginHorizontal: 10,
    fontSize: 11,
    color: '#999',
  },
  socialRow: {
    flexDirection: 'row',
    gap: 15,
  },
  socialIcon: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#F0F0F0',
    borderRadius: 10,
  },
});