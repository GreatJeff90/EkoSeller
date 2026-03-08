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

export default function TermsConditionScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
      <Stack.Screen options={{ headerShown: false }} />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
          <Ionicons name="arrow-back" size={24} color="#1E293B" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Terms & Condition</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView 
        showsVerticalScrollIndicator={false} 
        contentContainerStyle={styles.scrollContent}
      >
        <Text style={styles.mainTitle}>Terms & Condition</Text>

        <Text style={styles.paragraph}>
          Welcome to Ekoseller App (the "App")! These Terms & Conditions ("Terms") govern your use of the App and the services provided by Ekoseller ("we", "us", "our").
        </Text>

        <Text style={styles.sectionTitle}>1. Introduction</Text>
        <Text style={styles.paragraph}>
          Ekoseller App is a platform that connects markets in Lagos with customers who want to purchase products from them. By using the App, you agree to these Terms, which form a binding agreement between you and Ekoseller.
        </Text>

        <Text style={styles.sectionTitle}>1. Eligibility</Text>
        <Text style={styles.paragraph}>
          To use the App, you must be at least 18 years old and have a valid email address and phone number.
        </Text>

        <Text style={styles.sectionTitle}>2. User Accounts</Text>
        <Text style={styles.paragraph}>
          You are responsible for maintaining the confidentiality of your account information and password. You agree to notify us immediately of any unauthorized use of your account.
        </Text>

        <Text style={styles.sectionTitle}>3. Seller Terms</Text>
        <Text style={styles.paragraph}>
          If you are a market seller using the App to sell products, you agree to:
        </Text>
        <Text style={styles.bulletPoint}>• Provide accurate and up-to-date information about your products</Text>
        <Text style={styles.bulletPoint}>• Set prices for your products that are competitive and fair</Text>
        <Text style={styles.bulletPoint}>• Ship products promptly and in good condition</Text>
        <Text style={styles.bulletPoint}>• Comply with all applicable laws and regulations</Text>

        <Text style={styles.sectionTitle}>4. Buyer Terms</Text>
        <Text style={styles.paragraph}>
          If you are a customer using the App to purchase products, you agree to:
        </Text>
        <Text style={styles.bulletPoint}>• Pay for products in full at the time of order</Text>
        <Text style={styles.bulletPoint}>• Provide accurate and up-to-date delivery information</Text>
        <Text style={styles.bulletPoint}>• Inspect products upon delivery and report any issues promptly</Text>

        <Text style={styles.sectionTitle}>5. Payment Terms</Text>
        <Text style={styles.paragraph}>
          We use third-party payment processors to handle transactions. You agree to comply with the terms and conditions of our payment processors.
        </Text>

        <Text style={styles.sectionTitle}>6. Intellectual Property</Text>
        <Text style={styles.paragraph}>
          All intellectual property rights in the App and its contents are owned by Ekoseller. You may not reproduce, modify, or distribute any content without our prior written permission.
        </Text>

        <Text style={styles.sectionTitle}>7. Disclaimers</Text>
        <Text style={styles.paragraph}>
          The App is provided on an "as is" and "as available" basis. We disclaim all warranties and representations, express or implied.
        </Text>

        <Text style={styles.sectionTitle}>8. Limitation of Liability</Text>
        <Text style={styles.paragraph}>
          In no event shall Ekoseller be liable for any damages, losses, or expenses arising from your use of the App.
        </Text>

        <Text style={styles.sectionTitle}>9. Governing Law</Text>
        <Text style={styles.paragraph}>
          These Terms shall be governed by and construed in accordance with the laws of Nigeria.
        </Text>

        <Text style={styles.sectionTitle}>10. Changes to Terms</Text>
        <Text style={styles.paragraph}>
          We reserve the right to modify these Terms at any time. Your continued use of the App constitutes acceptance of the modified Terms.
        </Text>

        <Text style={styles.sectionTitle}>11. Contact Us</Text>
        <Text style={styles.paragraph}>
          If you have any questions or concerns about these Terms, please contact us at support@ekoseller.com
        </Text>

        <Text style={[styles.paragraph, { marginTop: 30, marginBottom: 40 }]}>
          By using the Ekoseller App, you agree to these Terms & Conditions and our Privacy Policy.
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
    marginBottom: 10,
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
    marginBottom: 8,
    paddingLeft: 10,
  },
});