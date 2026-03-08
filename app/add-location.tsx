import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  Modal,
  Pressable,
} from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { Ionicons, MaterialCommunityIcons, Feather } from '@expo/vector-icons';

const DELIVERY_OPTIONS = [
  { id: 'express', type: 'Express', duration: '1 - 3 days deilvery', price: '₦140,000' },
  { id: 'regular', type: 'Regular', duration: '2 - 4 days deilvery', price: '₦130,400' },
  { id: 'cargo', type: 'Cargo', duration: '7 -1 4 days deilvery', price: '₦125,000' },
];

export default function AddLocationScreen() {
  const router = useRouter();
  const [deliveryOption, setDeliveryOption] = useState<'me' | 'store'>('me');
  const [label, setLabel] = useState('Home');
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedDelivery, setSelectedDelivery] = useState(DELIVERY_OPTIONS[0]);

  // Logic to handle selection and navigation
  const handleDeliverySelect = (option: typeof DELIVERY_OPTIONS[0]) => {
    setSelectedDelivery(option);
    setModalVisible(false);
    
    // Navigate to payment after a brief delay to allow modal animation to finish
    setTimeout(() => {
      router.push('/payment');
    }, 300);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <Stack.Screen options={{ headerShown: false }} />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#334155" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Add Location</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <Text style={styles.sectionTitle}>Select Dlivery Option</Text>

        <TouchableOpacity style={styles.optionRow} onPress={() => setDeliveryOption('me')}>
          <MaterialCommunityIcons 
            name={deliveryOption === 'me' ? "checkbox-marked-outline" : "checkbox-blank-outline"} 
            size={24} color="#333" 
          />
          <Text style={styles.optionText}>DELIVERY TO ME</Text>
        </TouchableOpacity>

        {/* Form Inputs */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>ADDRESS</Text>
          <View style={styles.inputWrapper}>
            <Ionicons name="location" size={20} color="#64748B" style={styles.inputIcon} />
            <TextInput style={styles.input} placeholder="3235 Royal Ln, Mesa, New Jersy 34567" placeholderTextColor="#94A3B8" />
          </View>

          <Text style={styles.label}>PHONE NUMBER</Text>
          <View style={styles.inputWrapper}>
            <Feather name="phone-call" size={20} color="#1e293b" style={styles.inputIcon} />
            <TextInput style={styles.input} placeholder="070....." keyboardType="phone-pad" placeholderTextColor="#94A3B8" />
          </View>

          <View style={styles.row}>
            <View style={{ flex: 1, marginRight: 10 }}>
              <Text style={styles.label}>STREET</Text>
              <TextInput style={styles.smallInput} placeholder="Hason Nagar" />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.label}>POST CODE</Text>
              <TextInput style={styles.smallInput} placeholder="34567" keyboardType="numeric" />
            </View>
          </View>

          <Text style={styles.label}>SELECT THE DELIVERY</Text>
          <TouchableOpacity style={styles.dropdown} onPress={() => setModalVisible(true)}>
            <Text style={styles.dropdownText}>{selectedDelivery.duration}</Text>
            <View style={styles.priceContainer}>
                <Text style={styles.deliveryPrice}>{selectedDelivery.price}</Text>
                <Feather name="chevron-down" size={20} color="#000" />
            </View>
          </TouchableOpacity>

          <Text style={styles.label}>LABEL AS</Text>
          <View style={styles.chipContainer}>
            {['Home', 'Work', 'Other'].map((item) => (
              <TouchableOpacity
                key={item}
                style={[styles.chip, label === item && styles.activeChip]}
                onPress={() => setLabel(item)}
              >
                <Text style={[styles.chipText, label === item && styles.activeChipText]}>{item}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <TouchableOpacity style={[styles.optionRow, { marginTop: 30 }]} onPress={() => setDeliveryOption('store')}>
          <MaterialCommunityIcons 
            name={deliveryOption === 'store' ? "checkbox-marked-outline" : "checkbox-blank-outline"} 
            size={24} color="#333" 
          />
          <Text style={styles.optionText}>PICKUP FROM A STORE</Text>
        </TouchableOpacity>

        <View style={styles.pickupBox}>
            <Text style={styles.pickupDescription}>Select a Pickup location in your Area from our 3 locations offices</Text>
            <TouchableOpacity style={styles.pickupButton}>
                <Text style={styles.pickupButtonText}>Select Pickup Location</Text>
            </TouchableOpacity>
        </View>

        {/* TRIGGER MODAL HERE */}
        <TouchableOpacity style={styles.nextButton} onPress={() => setModalVisible(true)}>
          <Text style={styles.nextText}>Next</Text>
        </TouchableOpacity>
        
        <View style={{ height: 40 }} />
      </ScrollView>

      {/* DELIVERY MODAL */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <Pressable style={styles.modalOverlay} onPress={() => setModalVisible(false)}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Select the delivery</Text>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Ionicons name="close" size={24} color="black" />
              </TouchableOpacity>
            </View>

            {DELIVERY_OPTIONS.map((option) => (
              <TouchableOpacity 
                key={option.id} 
                style={styles.deliveryCard}
                onPress={() => handleDeliverySelect(option)}
              >
                <View>
                  <Text style={styles.deliveryType}>{option.type}</Text>
                  <Text style={styles.deliveryDuration}>{option.duration}</Text>
                </View>
                <Text style={styles.deliveryOptionPrice}>{option.price}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </Pressable>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#FFF' },
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 20, paddingVertical: 15 },
  headerTitle: { fontSize: 18, fontWeight: 'bold', color: '#1E293B' },
  scrollContent: { paddingHorizontal: 20 },
  sectionTitle: { fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginVertical: 20, color: '#000' },
  optionRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
  optionText: { fontSize: 16, fontWeight: 'bold', marginLeft: 15, color: '#000' },
  inputGroup: { paddingLeft: 5 },
  label: { fontSize: 12, fontWeight: 'bold', color: '#334155', marginBottom: 8, marginTop: 15 },
  inputWrapper: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#F1F5F9', borderRadius: 12, paddingHorizontal: 15, height: 55 },
  inputIcon: { marginRight: 10 },
  input: { flex: 1, color: '#1E293B', fontSize: 14 },
  row: { flexDirection: 'row', justifyContent: 'space-between' },
  smallInput: { backgroundColor: '#F1F5F9', borderRadius: 12, paddingHorizontal: 15, height: 55, fontSize: 14, color: '#1E293B' },
  dropdown: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#F1F5F9', borderRadius: 12, paddingHorizontal: 15, height: 55 },
  dropdownText: { color: '#64748B', fontSize: 14 },
  priceContainer: { flexDirection: 'row', alignItems: 'center' },
  deliveryPrice: { fontWeight: 'bold', marginRight: 10 },
  chipContainer: { flexDirection: 'row', gap: 10 },
  chip: { flex: 1, height: 45, borderRadius: 25, backgroundColor: '#F1F5F9', justifyContent: 'center', alignItems: 'center' },
  activeChip: { backgroundColor: '#BEE671' },
  chipText: { color: '#334155', fontWeight: '500' },
  activeChipText: { color: '#FFF' },
  pickupBox: { backgroundColor: '#F1F5F9', padding: 15, borderRadius: 12, marginTop: 10 },
  pickupDescription: { fontSize: 13, color: '#334155', marginBottom: 15, lineHeight: 18 },
  pickupButton: { backgroundColor: '#BEE671', height: 45, borderRadius: 8, justifyContent: 'center', alignItems: 'center' },
  pickupButtonText: { color: '#FFF', fontWeight: 'bold' },
  nextButton: { backgroundColor: '#BEE671', borderRadius: 12, paddingVertical: 18, alignItems: 'center', marginTop: 30 },
  nextText: { color: '#FFF', fontSize: 18, fontWeight: 'bold' },
  modalOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'flex-end' },
  modalContent: { backgroundColor: '#FFF', borderTopLeftRadius: 20, borderTopRightRadius: 20, padding: 20, paddingBottom: 40 },
  modalHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 },
  modalTitle: { fontSize: 20, fontWeight: 'bold', color: '#000' },
  deliveryCard: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#F1F5F9', padding: 18, borderRadius: 15, marginBottom: 12 },
  deliveryType: { fontSize: 18, fontWeight: 'bold', color: '#000' },
  deliveryDuration: { fontSize: 14, color: '#64748B', marginTop: 4 },
  deliveryOptionPrice: { fontSize: 16, fontWeight: 'bold', color: '#000' },
});