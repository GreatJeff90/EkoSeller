import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  TextInput, 
  Dimensions,
  Platform,
  ScrollView
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { Stack, useRouter } from 'expo-router';

const { width } = Dimensions.get('window');

export default function VerifySellerScreen() {
  const router = useRouter();
  // Mock data based on provided UI
  const [code] = useState(['7', '6', '1', '8', '9', '8']);

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* 1. Header with Back Button and Progress Indicator */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="chevron-back" size={28} color="#7A869A" />
        </TouchableOpacity>
        <Stack.Screen options={{ headerShown: false }} />
        <View style={styles.progressContainer}>
          <View style={[styles.progressStep, styles.stepCompleted]}>
            <Text style={styles.stepTextCompleted}>1</Text>
          </View>
          <View style={[styles.progressLine, styles.lineActive]} />
          <View style={[styles.progressStep, styles.stepActive]}>
            <Text style={styles.stepTextActive}>2</Text>
          </View>
          <View style={styles.progressLine} />
          <View style={styles.progressStep}>
            <Text style={styles.stepText}>3</Text>
          </View>
        </View>
      </View>

      <ScrollView 
        contentContainerStyle={styles.scrollContent} 
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.mainContainer}>
          {/* 2. Headline and Subtitle */}
          <Text style={styles.title}>Please enter the code</Text>
          <Text style={styles.subtitle}>
            We sent email to tomashuk.dima.1992@gmail.com
          </Text>

          {/* 3. Envelope Icon */}
          <View style={styles.iconContainer}>
            <View style={styles.envelopeBody}>
              <View style={styles.envelopeFlap} />
            </View>
          </View>

          {/* 4. 6-Digit Code Input Row */}
          <View style={styles.codeRow}>
            {code.map((digit, index) => (
              <View key={index} style={styles.codeBox}>
                <Text style={styles.codeText}>{digit}</Text>
              </View>
            ))}
          </View>

          {/* 5. Resend Link */}
          <View style={styles.resendContainer}>
            <Text style={styles.resendText}>Didn't get a mail? </Text>
            <TouchableOpacity>
              <Text style={styles.resendLink}>Send again</Text>
            </TouchableOpacity>
          </View>

          {/* 6. Action Button */}
          <TouchableOpacity 
            style={styles.continueBtn}
            onPress={() => router.push('/(auth)/seller-kyc' as any)}
          >
            <Text style={styles.continueBtnText}>Continue</Text>
          </TouchableOpacity>
          
          {/* Bottom Spacer to prevent overlap with CustomTabBar */}
          <View style={styles.tabBarSpacer} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#fff' },
  scrollContent: { flexGrow: 1 },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  backButton: { marginRight: 20 },
  progressContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: 40,
  },
  progressStep: {
    width: 28,
    height: 28,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#D3D3D3',
    justifyContent: 'center',
    alignItems: 'center',
  },
  stepCompleted: {
    backgroundColor: '#A3D65C',
    borderColor: '#A3D65C',
  },
  stepActive: {
    borderColor: '#A3D65C',
    borderWidth: 2,
  },
  stepText: { color: '#D3D3D3', fontSize: 12, fontWeight: '700' },
  stepTextCompleted: { color: '#fff', fontSize: 12, fontWeight: '700' },
  stepTextActive: { color: '#A3D65C', fontSize: 12, fontWeight: '700' },
  progressLine: {
    width: 30,
    height: 1,
    backgroundColor: '#D3D3D3',
    marginHorizontal: 5,
  },
  lineActive: {
    backgroundColor: '#A3D65C',
  },
  mainContainer: { flex: 1, alignItems: 'center', paddingHorizontal: 25, marginTop: 30 },
  title: { 
    fontSize: 28, 
    fontWeight: '700', 
    color: '#0D1B34', 
    textAlign: 'center',
    marginBottom: 8 
  },
  subtitle: { 
    fontSize: 13, 
    color: '#7A869A', 
    textAlign: 'center', 
    marginBottom: 40 
  },
  iconContainer: { marginBottom: 40 },
  envelopeBody: {
    width: 70, height: 50, backgroundColor: '#A3D65C', 
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
    width: '85%', 
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: 'center',
  },
  continueBtnText: { color: '#fff', fontSize: 16, fontWeight: '700' },
  tabBarSpacer: { height: Platform.OS === 'ios' ? 150 : 130 } 
});