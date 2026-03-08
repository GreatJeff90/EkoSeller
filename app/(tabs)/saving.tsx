import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  Image, 
  Modal, 
  TextInput, 
  ScrollView, 
  Dimensions 
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { useRouter } from 'expo-router'; // Import useRouter instead

const { width } = Dimensions.get('window');

export default function SavingScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [formStep, setFormStep] = useState(1); 
  const router = useRouter(); // Initialize router

  const handleClose = () => {
    setModalVisible(false);
    setFormStep(1);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* --- Initial Empty State (image_d78d2c.png) --- */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Saving</Text>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Text style={styles.addHeaderText}>Add</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <View style={styles.illustrationContainer}>
          <Image 
            source={{ uri: 'https://img.freepik.com/free-vector/saving-money-concept-illustration_114360-1513.jpg' }} 
            style={styles.illustration}
            resizeMode="contain"
          />
        </View>

        <Text style={styles.emptyText}>
          Nothing here!! click add pocket to{"\n"}create a pocket
        </Text>

        <TouchableOpacity 
          style={styles.addPocketBtn} 
          onPress={() => setModalVisible(true)}
        >
          <Ionicons name="add-circle" size={28} color="#A3D65C" />
          <Text style={styles.addPocketText}>Add Pocket</Text>
        </TouchableOpacity>
      </View>

      {/* --- Full-Screen Multi-Step Modal --- */}
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={handleClose}
      >
        <SafeAreaView style={styles.modalContainer}>
          {formStep < 3 && (
            <View style={styles.modalHeader}>
              <TouchableOpacity onPress={formStep === 1 ? handleClose : () => setFormStep(formStep - 1)}>
                <Ionicons name="arrow-back" size={24} color="#0D1B34" />
              </TouchableOpacity>
              <Text style={styles.modalHeaderTitle}>
                {formStep === 1 ? 'Saving' : 'Payment Method'}
              </Text>
            </View>
          )}

          <ScrollView contentContainerStyle={styles.formContent} showsVerticalScrollIndicator={false}>
            {formStep === 1 ? (
              /* --- Step 1: Goal Setup (image_d78281.png) --- */
              <View>
                <Text style={styles.formHeadline}>Reach your finance goals with ease</Text>

                <View style={styles.inputGroup}>
                  <Text style={styles.label}>Name your pocket</Text>
                  <TextInput style={styles.input} />
                </View>

                <View style={styles.inputGroup}>
                  <Text style={styles.label}>Amount to Save</Text>
                  <TextInput style={styles.input} placeholder="NGN" keyboardType="numeric" />
                </View>

                <View style={styles.inputGroup}>
                  <Text style={styles.label}>Add Reason for this Saving? (option)</Text>
                  <TextInput style={[styles.input, styles.textArea]} multiline />
                </View>

                <View style={styles.inputGroup}>
                  <Text style={styles.label}>Start Date</Text>
                  <TouchableOpacity style={styles.datePicker}>
                    <Text style={styles.dateText}>03/24/2024</Text>
                    <Ionicons name="chevron-forward" size={18} color="#000" />
                  </TouchableOpacity>
                </View>

                <View style={styles.inputGroup}>
                  <Text style={styles.label}>End Date</Text>
                  <TouchableOpacity style={styles.datePicker}>
                    <Text style={styles.dateText}>03/24/2024</Text>
                    <Ionicons name="chevron-forward" size={18} color="#000" />
                  </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.primaryBtn} onPress={() => setFormStep(2)}>
                  <Text style={styles.primaryBtnText}>Next</Text>
                </TouchableOpacity>
              </View>
            ) : formStep === 2 ? (
              /* --- Step 2: Payment Method (image_d77a0b.png) --- */
              <View>
                <View style={styles.paymentMethodBox}>
                  <Text style={styles.label}>Payment Method</Text>
                  <View style={styles.cardIconRow}>
                    <FontAwesome name="cc-mastercard" size={22} color="#EB001B" style={styles.cardIcon} />
                    <FontAwesome name="cc-visa" size={22} color="#1A1F71" style={styles.cardIcon} />
                    <FontAwesome name="cc-amex" size={22} color="#007BC1" style={styles.cardIcon} />
                    <FontAwesome name="cc-discover" size={22} color="#F68121" style={styles.cardIcon} />
                  </View>
                </View>

                <View style={styles.inputGroup}>
                  <Text style={styles.label}>Name on card</Text>
                  <TextInput style={styles.input} placeholder="John Doe" />
                </View>

                <View style={styles.inputGroup}>
                  <Text style={styles.label}>Card number</Text>
                  <TextInput style={styles.input} placeholder="0000 0000 0000 0000" keyboardType="numeric" />
                </View>

                <View style={styles.row}>
                  <View style={[styles.inputGroup, { flex: 1, marginRight: 15 }]}>
                    <Text style={styles.label}>Card expiration</Text>
                    <TextInput style={styles.input} placeholder="11/2024" />
                  </View>
                  <View style={[styles.inputGroup, { flex: 1 }]}>
                    <Text style={styles.label}>CV</Text>
                    <TextInput style={styles.input} placeholder="75*" secureTextEntry keyboardType="numeric" />
                  </View>
                </View>

                <View style={styles.inputGroup}>
                  <Text style={styles.label}>Card Security Code</Text>
                  <View style={styles.inputWithIcon}>
                    <TextInput style={[styles.input, { flex: 1 }]} placeholder="Code" />
                    <Ionicons name="help-circle-outline" size={20} color="#ccc" style={styles.innerIcon} />
                  </View>
                </View>

                <TouchableOpacity>
                  <Text style={styles.changeMethodText}>Click here Change Payment Method</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.primaryBtn} onPress={() => setFormStep(3)}>
                  <Text style={styles.primaryBtnText}>Pay</Text>
                </TouchableOpacity>
              </View>
            ) : (
              /* --- Step 3: Success Screen (image_d76f05.png) --- */
              <View style={styles.successContainer}>
                <TouchableOpacity style={styles.backButtonSuccess} onPress={handleClose}>
                   <Ionicons name="arrow-back" size={24} color="#0D1B34" />
                </TouchableOpacity>
                
                <View style={styles.successIllustrationContainer}>
                   <Image 
                     source={{ uri: 'https://img.freepik.com/free-vector/check-mark-concept-illustration_114360-1481.jpg' }}
                     style={styles.successImage}
                     resizeMode="contain"
                   />
                </View>

                <Text style={styles.successTitle}>Payment Successful!</Text>
                <Text style={styles.successSubtitle}>
                  Your Savings account has been created. Begin growing your savings now!
                </Text>

                <TouchableOpacity 
                  style={styles.primaryBtn} 
                  onPress={() => {
                    handleClose();
                    router.push('/pocket'); // Navigate using expo-router path
                  }}
                >
                  <Text style={styles.primaryBtnText}>Go to pocket</Text>
                </TouchableOpacity>
              </View>
            )}
          </ScrollView>
        </SafeAreaView>
      </Modal>

      {/* Padding for CustomTabBar */}
      <View style={{ height: 100 }} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#fff' },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, paddingVertical: 15 },
  headerTitle: { fontSize: 22, fontWeight: '700', color: '#0D1B34' },
  addHeaderText: { fontSize: 18, fontWeight: '600', color: '#A3D65C' },
  content: { flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 40 },
  illustrationContainer: { width: width * 0.7, height: width * 0.7, marginBottom: 20 },
  illustration: { width: '100%', height: '100%' },
  emptyText: { fontSize: 16, color: '#000', textAlign: 'center', lineHeight: 24, fontWeight: '500', marginBottom: 30 },
  addPocketBtn: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  addPocketText: { fontSize: 18, color: '#A3D65C', fontWeight: '500' },

  // Modal Structure
  modalContainer: { flex: 1, backgroundColor: '#fff' },
  modalHeader: { flexDirection: 'row', alignItems: 'center', padding: 20, gap: 15 },
  modalHeaderTitle: { fontSize: 20, fontWeight: '700', color: '#0D1B34' },
  formContent: { paddingHorizontal: 20, paddingBottom: 40 },
  formHeadline: { fontSize: 20, fontWeight: '600', color: '#333', marginBottom: 25, marginTop: 10 },
  
  // Inputs
  inputGroup: { marginBottom: 20 },
  label: { fontSize: 15, color: '#333', marginBottom: 8, fontWeight: '500' },
  input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 10, padding: 15, fontSize: 16, color: '#000' },
  textArea: { height: 80, textAlignVertical: 'top' },
  datePicker: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderWidth: 1, borderColor: '#ccc', borderRadius: 10, padding: 15 },
  dateText: { fontSize: 16, color: '#000' },
  row: { flexDirection: 'row' },
  inputWithIcon: { flexDirection: 'row', alignItems: 'center' },
  innerIcon: { position: 'absolute', right: 15 },

  // Payment
  paymentMethodBox: { borderStyle: 'dashed', borderWidth: 1, borderColor: '#ccc', borderRadius: 10, padding: 15, marginBottom: 25, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  cardIconRow: { flexDirection: 'row', alignItems: 'center' },
  cardIcon: { marginLeft: 10 },
  changeMethodText: { color: '#E53935', textAlign: 'center', marginTop: 10, marginBottom: 20, fontSize: 14, fontWeight: '500' },

  // Success Screen
  successContainer: { alignItems: 'center', justifyContent: 'center', flex: 1, paddingTop: 20 },
  backButtonSuccess: { alignSelf: 'flex-start', marginBottom: 40, paddingLeft: 20 },
  successIllustrationContainer: { width: width * 0.8, height: width * 0.8, marginBottom: 30 },
  successImage: { width: '100%', height: '100%' },
  successTitle: { fontSize: 24, fontWeight: '700', color: '#000', marginBottom: 15 },
  successSubtitle: { fontSize: 16, color: '#333', textAlign: 'center', paddingHorizontal: 20, lineHeight: 24, marginBottom: 40 },

  // Button
  primaryBtn: { backgroundColor: '#A3D65C', padding: 18, borderRadius: 12, alignItems: 'center', width: '100%' },
  primaryBtnText: { color: '#fff', fontSize: 18, fontWeight: '700' },
});