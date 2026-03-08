import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  Dimensions,
  Platform,
  ScrollView
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const { width } = Dimensions.get('window');

export default function VerifyWithdrawScreen() {
  const router = useRouter();
  const [code] = useState(['7', '6', '1', '8', '9', '8']); // Mock code

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView 
        contentContainerStyle={styles.scrollContent} 
        showsVerticalScrollIndicator={false}
      >
        {/* Back Button */}
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="chevron-back" size={28} color="#7A869A" />
        </TouchableOpacity>

        <View style={styles.mainContainer}>
          <Text style={styles.title}>Please enter the code</Text>
          <Text style={styles.subtitle}>
            We sent email to tomashuk.dima.1992@gmail.com
          </Text>

          {/* Envelope Icon */}
          <View style={styles.iconContainer}>
            <View style={styles.envelopeBody}>
              <View style={styles.envelopeFlap} />
            </View>
          </View>

          {/* 6-Digit Code Input Row */}
          <View style={styles.codeRow}>
            {code.map((digit, index) => (
              <View key={index} style={styles.codeBox}>
                <Text style={styles.codeText}>{digit}</Text>
              </View>
            ))}
          </View>

          <View style={styles.resendContainer}>
            <Text style={styles.resendText}>Didn't get a mail? </Text>
            <TouchableOpacity>
              <Text style={styles.resendLink}>Send again</Text>
            </TouchableOpacity>
          </View>

          {/* Updated Navigation to Success Screen */}
          <TouchableOpacity 
            style={styles.continueBtn}
            
            onPress={() => router.push('/withdraw-success' as any)} 
          >
            <Text style={styles.continueBtnText}>Continue</Text>
          </TouchableOpacity>
          
          {/* Bottom Spacer for TabBar */}
          <View style={styles.tabBarSpacer} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#fff' },
  scrollContent: { flexGrow: 1 },
  backButton: { padding: 20 },
  mainContainer: { flex: 1, alignItems: 'center', paddingHorizontal: 25 },
  title: { fontSize: 28, fontWeight: '700', color: '#0D1B34', textAlign: 'center', marginBottom: 8 },
  subtitle: { fontSize: 13, color: '#7A869A', textAlign: 'center', marginBottom: 40 },
  iconContainer: { marginBottom: 40 },
  envelopeBody: {
    width: 70, height: 50, backgroundColor: '#A3D65C', // Theme Green
    borderRadius: 8, justifyContent: 'center', alignItems: 'center'
  },
  envelopeFlap: { width: 45, height: 35, backgroundColor: '#fff', transform: [{ rotate: '45deg' }], marginTop: -20 },
  codeRow: { flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginBottom: 25 },
  codeBox: {
    width: (width - 110) / 6, height: 50, borderWidth: 1,
    borderColor: '#A3D65C', borderRadius: 12, justifyContent: 'center', alignItems: 'center',
  },
  codeText: { fontSize: 18, fontWeight: '700', color: '#0D1B34' },
  resendContainer: { flexDirection: 'row', marginBottom: 50 },
  resendText: { color: '#7A869A', fontSize: 14 },
  resendLink: { color: '#A3D65C', fontSize: 14, fontWeight: '600' },
  continueBtn: {
    backgroundColor: '#A3D65C',
    width: '85%', // Reduced button width
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: 'center',
  },
  continueBtnText: { color: '#fff', fontSize: 16, fontWeight: '700' },
  tabBarSpacer: { height: Platform.OS === 'ios' ? 150 : 130 } // Avoid overlap
});