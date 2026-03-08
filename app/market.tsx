import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { Ionicons, Feather } from '@expo/vector-icons';

export default function MarketScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Header hidden as requested */}
      <Stack.Screen options={{ headerShown: false }} />

      <View style={styles.container}>
        {/* Custom Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={24} color="#333" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Sell on Eko Market</Text>
          <View style={{ width: 24 }} /> 
        </View>

        <ScrollView 
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* Hero Section */}
          <View style={styles.heroSection}>
            <Text style={styles.heroTitle}>Sell on Eko Market: Reach Millions of Buyers Today</Text>
            <Text style={styles.heroSubtitle}>
              Take your business to the next level by listing your products on Eko Market. 
              Reach a vast customer base, increase your sales, and grow your business with our secure and reliable platform.
            </Text>
          </View>

          {/* Form Fields */}
          <View style={styles.form}>
            <Text style={styles.label}>Category</Text>
            <TouchableOpacity style={styles.dropdown}>
              <Text style={styles.placeholderText}>Select</Text>
              <Feather name="chevron-down" size={20} color="#666" />
            </TouchableOpacity>

            <Text style={styles.label}>Product Name</Text>
            <TextInput style={styles.input} placeholder="Iphone" placeholderTextColor="#CCC" />

            <Text style={styles.label}>Price (₦)</Text>
            <TextInput style={styles.input} keyboardType="numeric" />

            <Text style={styles.label}>Style (color)</Text>
            <TouchableOpacity style={styles.dropdown}>
              <Text style={styles.inputText}>White And Red</Text>
              <Feather name="chevron-down" size={20} color="#666" />
            </TouchableOpacity>

            <Text style={styles.label}>Market</Text>
            <TouchableOpacity style={styles.dropdown}>
              <Text style={styles.inputText}>Ajah Market</Text>
              <Feather name="chevron-down" size={20} color="#666" />
            </TouchableOpacity>

            <Text style={styles.label}>Description</Text>
            <TextInput 
              style={[styles.input, styles.textArea]} 
              multiline 
              numberOfLines={4} 
            />

            {/* Image Upload Area */}
            <TouchableOpacity style={styles.uploadButton}>
              <Feather name="upload" size={20} color="#BEE671" />
              <Text style={styles.uploadText}>Add Image</Text>
            </TouchableOpacity>

            {/* Thumbnails */}
            <View style={styles.thumbnailRow}>
              <Image source={{ uri: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff' }} style={styles.thumbnail} />
              <Image source={{ uri: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff' }} style={styles.thumbnail} />
            </View>

            {/* Submit Button */}
            <TouchableOpacity 
              style={styles.publishButton}
              onPress={() => router.push('/confirm-details')}>
              <Text style={styles.publishText}>Publish</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#FFF' },
  container: { flex: 1 },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  headerTitle: { fontSize: 16, fontWeight: '600', color: '#333' },
  scrollContent: { padding: 20, paddingBottom: 40 },
  heroSection: { alignItems: 'center', marginBottom: 20 },
  heroTitle: { fontSize: 14, fontWeight: 'bold', textAlign: 'center', color: '#333', marginBottom: 10 },
  heroSubtitle: { fontSize: 11, textAlign: 'center', color: '#666', lineHeight: 16 },
  form: { marginTop: 10 },
  label: { fontSize: 13, fontWeight: '600', color: '#333', marginBottom: 8, marginTop: 15 },
  input: {
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 8,
    padding: 12,
    fontSize: 14,
    color: '#333',
  },
  textArea: { height: 80, textAlignVertical: 'top' },
  dropdown: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 8,
    padding: 12,
  },
  placeholderText: { color: '#666', fontSize: 14 },
  inputText: { color: '#333', fontSize: 14 },
  uploadButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 8,
    padding: 12,
    marginTop: 20,
    borderStyle: 'dashed',
  },
  uploadText: { color: '#BEE671', marginLeft: 8, fontWeight: '600' },
  thumbnailRow: { flexDirection: 'row', marginTop: 15, gap: 10 },
  thumbnail: { width: 60, height: 60, borderRadius: 4 },
  publishButton: {
    backgroundColor: '#BEE671',
    borderRadius: 8,
    padding: 15,
    alignItems: 'center',
    marginTop: 30,
  },
  publishText: { color: '#FFF', fontWeight: 'bold', fontSize: 16 },
});