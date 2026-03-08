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
import { Ionicons, Feather, MaterialCommunityIcons } from '@expo/vector-icons';

export default function HelpScreen() {
  const router = useRouter();

  // Form states
  const [title, setTitle] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  return (
    <SafeAreaView style={styles.safeArea}>
      <Stack.Screen options={{ headerShown: false }} />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
          <Ionicons name="arrow-back" size={24} color="#1E293B" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Help</Text>
        <View style={{ width: 24 }} />
      </View>

      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <ScrollView 
          showsVerticalScrollIndicator={false} 
          contentContainerStyle={styles.scrollContent}
        >
          {/* Contact Information Section */}
          <View style={styles.contactSection}>
            <Text style={styles.mainHeading}>Contact us Today</Text>
            
            <View style={styles.infoBlock}>
              <Text style={styles.infoLabel}>Address</Text>
              <Text style={styles.infoValue}>
                House# 72, Road# 21, Banani, Dhaka-1213 (near Banani Bidyaniketon School & College, beside University of South Asia)
              </Text>
            </View>

            <View style={styles.contactRow}>
              <Ionicons name="call" size={18} color="#BEE671" />
              <Text style={styles.contactText}>Call : 07056584464 (24/7)</Text>
            </View>

            <View style={styles.contactRow}>
              <MaterialCommunityIcons name="email-outline" size={18} color="#BEE671" />
              <Text style={styles.contactText}>Email : support@bozsupermarket.com</Text>
            </View>
          </View>

          {/* Message Form Section */}
          <View style={styles.formSection}>
            <Text style={styles.formHeading}>Send Message</Text>

            <TextInput
              style={styles.input}
              placeholder="Title"
              placeholderTextColor="#CBD5E1"
              value={title}
              onChangeText={setTitle}
            />

            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="#CBD5E1"
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
            />

            <TextInput
              style={styles.input}
              placeholder="Name"
              placeholderTextColor="#CBD5E1"
              value={name}
              onChangeText={setName}
            />

            <TextInput
              style={[styles.input, styles.textArea]}
              placeholder="Write your text"
              placeholderTextColor="#CBD5E1"
              multiline={true}
              numberOfLines={6}
              value={message}
              onChangeText={setMessage}
              textAlignVertical="top"
            />

            {/* Send Button */}
            <TouchableOpacity 
              style={styles.sendBtn}
              onPress={() => {/* Handle send logic */}}
            >
              <Text style={styles.sendBtnText}>Send</Text>
            </TouchableOpacity>
          </View>
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
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1E293B',
  },
  backBtn: {
    padding: 5,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  contactSection: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 30,
  },
  mainHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1E293B',
    marginBottom: 20,
  },
  infoBlock: {
    alignItems: 'center',
    marginBottom: 20,
  },
  infoLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#334155',
    marginBottom: 8,
  },
  infoValue: {
    fontSize: 13,
    color: '#334155',
    textAlign: 'center',
    lineHeight: 20,
    paddingHorizontal: 10,
  },
  contactRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  contactText: {
    fontSize: 13,
    color: '#334155',
    fontWeight: '500',
    marginLeft: 10,
  },
  formSection: {
    marginTop: 10,
  },
  formHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#334155',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    borderRadius: 12,
    height: 55,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 14,
    color: '#1E293B',
  },
  textArea: {
    height: 150,
    paddingTop: 15,
  },
  sendBtn: {
    backgroundColor: '#BEE671', // Brand lime green
    height: 55,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  sendBtnText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});