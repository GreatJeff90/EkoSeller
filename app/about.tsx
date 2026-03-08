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

export default function AboutScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
      <Stack.Screen options={{ headerShown: false }} />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
          <Ionicons name="arrow-back" size={24} color="#1E293B" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>About</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView 
        showsVerticalScrollIndicator={false} 
        contentContainerStyle={styles.scrollContent}
      >
        <Text style={styles.mainTitle}>About</Text>

        <Text style={styles.paragraph}>
          Ekoseller App is a cutting-edge mobile platform that connects markets in Lagos with customers who want to purchase products from them. With Ekoseller App, you can:
        </Text>

        <View style={styles.section}>
          <Text style={styles.bulletPoint}>- Browse and buy products from various markets in Lagos</Text>
          <Text style={styles.bulletPoint}>- Sell your products to a vast customer base</Text>
          <Text style={styles.bulletPoint}>- Save money in the app and withdraw it anytime</Text>
        </View>

        <Text style={styles.sectionTitle}>Features:</Text>
        <View style={styles.section}>
          <Text style={styles.bulletPoint}>- User-Friendly Interface: Easy navigation and simple product listing</Text>
          <Text style={styles.bulletPoint}>- Secure Payment Gateway: Safe and reliable transactions</Text>
          <Text style={styles.bulletPoint}>- Variety of Products: Fresh produce, groceries, clothing, and more!</Text>
          <Text style={styles.bulletPoint}>- Competitive Prices: Get the best deals from multiple sellers</Text>
          <Text style={styles.bulletPoint}>- In-App Wallet: Save money and withdraw it whenever you want</Text>
          <Text style={styles.bulletPoint}>- Push Notifications: Stay updated on new products, promotions, and orders</Text>
        </View>

        <Text style={styles.sectionTitle}>Benefits:</Text>
        <View style={styles.section}>
          <Text style={styles.bulletPoint}>- Convenience: Shop and sell from the comfort of your home</Text>
          <Text style={styles.bulletPoint}>- Accessibility: Reach a vast customer base in Lagos</Text>
          <Text style={styles.bulletPoint}>- Affordability: Competitive prices and savings opportunities</Text>
          <Text style={styles.bulletPoint}>- Security: Reliable transactions and secure payments</Text>
        </View>

        <View style={styles.bottomSpacer} />
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
    fontSize: 20,
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
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1E293B',
    marginTop: 25,
    marginBottom: 15,
  },
  paragraph: {
    fontSize: 15,
    color: '#334155',
    lineHeight: 24,
    marginBottom: 15,
  },
  section: {
    marginBottom: 10,
  },
  bulletPoint: {
    fontSize: 15,
    color: '#334155',
    lineHeight: 24,
    marginBottom: 10,
  },
  bottomSpacer: {
    height: 40,
  },
});