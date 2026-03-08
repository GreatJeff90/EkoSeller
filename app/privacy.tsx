import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function PrivacyPolicyScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
      <Stack.Screen options={{ headerShown: false }} />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
          <Ionicons name="arrow-back" size={24} color="#1E293B" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Privacy Policy</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView 
        showsVerticalScrollIndicator={false} 
        contentContainerStyle={styles.scrollContent}
      >
        <Text style={styles.mainTitle}>Privacy Policy</Text>

        <Text style={styles.paragraph}>
          Ekoseller App ("we", "us", "our") is committed to protecting the privacy of our users ("you", "your"). This Privacy Policy explains how we collect, use, and disclose personal information in connection with our mobile app (the "App").
        </Text>

        <Text style={styles.sectionTitle}>Information Collection</Text>
        <Text style={styles.bulletPoint}>
          • We collect personal information from you when you register on the App, including your name, email address, phone number, and password.
        </Text>
        <Text style={styles.bulletPoint}>
          • We also collect information about your location (city, state, and country) to connect you with markets in Lagos.
        </Text>
        <Text style={styles.bulletPoint}>
          • When you list a product for sale, we collect information about the product, including its description, price, and images.
        </Text>
        <Text style={styles.bulletPoint}>
          • When you place an order, we collect information about the order, including the product details, payment method, and delivery address.
        </Text>

        <Text style={styles.sectionTitle}>Use of Information</Text>
        <Text style={styles.paragraph}>
          - We use your personal information to:
        </Text>
        <Text style={styles.subBullet}>- Provide and improve our services</Text>
        <Text style={styles.subBullet}>- Connect buyers and sellers on the App</Text>
        <Text style={styles.subBullet}>- Process transactions and payments</Text>
        <Text style={styles.subBullet}>- Communicate with you about your account, orders, and products</Text>
        <Text style={styles.subBullet}>- Personalize your experience on the App</Text>

        <Text style={styles.sectionTitle}>Disclosure of Information</Text>
        <Text style={styles.paragraph}>
          - We may disclose your personal information to:
        </Text>
        <Text style={styles.subBullet}>- Our third-party service providers (e.g., payment processors, delivery services)</Text>
        <Text style={styles.subBullet}>- Law enforcement or government agencies (if required by law)</Text>
        <Text style={styles.subBullet}>- Our affiliates and partners (for marketing and promotional purposes)</Text>

        <Text style={styles.sectionTitle}>Security</Text>
        <Text style={styles.paragraph}>
          - We implement reasonable security measures to protect your personal information from unauthorized access, disclosure, or use.
        </Text>

        <Text style={styles.sectionTitle}>Data Retention</Text>
        <Text style={styles.paragraph}>
          - We retain your personal information for as long as necessary to provide our services and comply with legal obligations.
        </Text>

        <Text style={styles.sectionTitle}>Your Rights</Text>
        <Text style={styles.paragraph}>
          - You have the right to:
        </Text>
        <Text style={styles.subBullet}>- Access and correct your personal information</Text>
        <Text style={styles.subBullet}>- Object to processing of your personal information</Text>
        <Text style={styles.subBullet}>- Request deletion of your personal information</Text>

        <Text style={styles.sectionTitle}>Changes to this Privacy Policy</Text>
        <Text style={styles.paragraph}>
          - We may update this Privacy Policy from time to time. We will notify you of significant changes by email or through the App.
        </Text>

        <Text style={styles.sectionTitle}>Contact Us</Text>
        <Text style={styles.paragraph}>
          - If you have any questions or concerns about this Privacy Policy, please contact us at mailto:support@ekoseller.com
        </Text>

        <Text style={[styles.paragraph, { marginTop: 30, marginBottom: 40 }]}>
          By using the Ekoseller App, you consent to this Privacy Policy and our collection, use, and disclosure of your personal information.
        </Text>
      </ScrollView>
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
    paddingHorizontal: 25,
    paddingTop: 10,
  },
  mainTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1E293B',
    textAlign: 'center',
    marginVertical: 25,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1E293B',
    marginTop: 25,
    marginBottom: 15,
  },
  paragraph: {
    fontSize: 14,
    color: '#334155',
    lineHeight: 22,
    marginBottom: 10,
  },
  bulletPoint: {
    fontSize: 14,
    color: '#334155',
    lineHeight: 22,
    marginBottom: 12,
  },
  subBullet: {
    fontSize: 14,
    color: '#334155',
    lineHeight: 22,
    paddingLeft: 15,
    marginBottom: 8,
  },
});