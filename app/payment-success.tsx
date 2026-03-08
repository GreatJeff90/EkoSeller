import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

export default function PaymentSuccessScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
      <Stack.Screen options={{ headerShown: false }} />

      {/* Header with Back Arrow */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.replace('/')}>
          <Ionicons name="arrow-back" size={24} color="#334155" />
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        {/* Success Icon & Confetti Illustration */}
        <View style={styles.illustrationContainer}>
          {/* Confetti Background elements could be SVG or Image */}
          <View style={styles.successCircle}>
            <Ionicons name="checkmark" size={60} color="#FFF" />
          </View>
        </View>

        {/* Text Content */}
        <View style={styles.textSection}>
          <Text style={styles.title}>Payment Successful!</Text>
          <Text style={styles.subtitle}>
            Your payment has been received, and your order is now being processed. 
            You'll receive a confirmation email soon with more details.
          </Text>
          <Text style={styles.footerNote}>
            Thank you for choosing our app! If you have any questions or need assistance, 
            feel free to reach out to our support team
          </Text>
        </View>
      </View>

      {/* Track Order Button */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={styles.trackButton}
          onPress={() => router.push('/track-order' as any)}
        >
          <Text style={styles.trackText}>Track my order</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  illustrationContainer: {
    width: width * 0.7,
    height: width * 0.7,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
  successCircle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#BEE671', // Brand Lime Green
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
  },
  textSection: {
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 14,
    color: '#334155',
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 25,
  },
  footerNote: {
    fontSize: 13,
    color: '#334155',
    textAlign: 'center',
    lineHeight: 20,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  trackButton: {
    backgroundColor: '#BEE671',
    borderRadius: 12,
    paddingVertical: 18,
    alignItems: 'center',
  },
  trackText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});