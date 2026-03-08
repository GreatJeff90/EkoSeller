import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const CONDITIONS = [
  { id: 'new', label: 'New' },
  { id: 'open_box', label: 'Open box' },
  { id: 'used', label: 'Used' },
  { id: 'parts', label: 'For parts or not working' },
];

export default function ConfirmDetailsScreen() {
  const router = useRouter();
  const [selectedCondition, setSelectedCondition] = useState('open_box');

  return (
    <SafeAreaView style={styles.safeArea}>
      <Stack.Screen options={{ headerShown: false }} />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#334155" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Confirm details</Text>
        <View style={{ width: 24 }} />
      </View>

      <View style={styles.content}>
        {/* Title Section */}
        <View style={styles.titleSection}>
          <Text style={styles.mainTitle}>Select the Condition of</Text>
          <Text style={styles.mainTitle}>your Product</Text>
          <Text style={styles.subtitle}>select one option</Text>
        </View>

        {/* Radio List */}
        <View style={styles.radioContainer}>
          {CONDITIONS.map((item) => {
            const isSelected = selectedCondition === item.id;
            return (
              <TouchableOpacity
                key={item.id}
                style={styles.radioRow}
                activeOpacity={0.7}
                onPress={() => setSelectedCondition(item.id)}
              >
                <View style={[styles.outerCircle, isSelected && styles.outerCircleSelected]}>
                  {isSelected && <View style={styles.innerCircle} />}
                </View>
                <Text style={styles.radioLabel}>{item.label}</Text>
              </TouchableOpacity>
            );
          })}
        </View>

        {/* Action Button */}
        <TouchableOpacity 
          style={styles.continueButton}
          onPress={() => router.push('/product/product-list')}
        >
          <Text style={styles.continueText}>Continues to product list</Text>
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
  content: {
    flex: 1,
    paddingHorizontal: 30,
    paddingTop: 20,
  },
  titleSection: {
    alignItems: 'center',
    marginBottom: 40,
  },
  mainTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
    textAlign: 'center',
    lineHeight: 28,
  },
  subtitle: {
    fontSize: 14,
    color: '#000',
    marginTop: 8,
  },
  radioContainer: {
    flex: 1,
  },
  radioRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 45,
  },
  outerCircle: {
    height: 22,
    width: 22,
    borderRadius: 11,
    borderWidth: 1,
    borderColor: '#64748B',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
  },
  outerCircleSelected: {
    borderColor: '#3B82F6',
  },
  innerCircle: {
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: '#3B82F6',
  },
  radioLabel: {
    fontSize: 18,
    color: '#334155',
    fontWeight: '500',
  },
  continueButton: {
    backgroundColor: '#BEE671', // Brand Lime Green
    borderRadius: 12,
    paddingVertical: 18,
    alignItems: 'center',
    marginBottom: 40,
  },
  continueText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});