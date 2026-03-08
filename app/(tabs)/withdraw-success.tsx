import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  Image, 
  Dimensions,
  Platform
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const { width } = Dimensions.get('window');

export default function WithdrawSuccessScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Back Arrow */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.push('/pocket')}>
          <Ionicons name="arrow-back" size={24} color="#0D1B34" />
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        {/* Success Illustration */}
        <View style={styles.illustrationContainer}>
          <Image 
            source={{ uri: 'https://img.freepik.com/free-vector/check-mark-concept-illustration_114360-1481.jpg' }}
            style={styles.image}
            resizeMode="contain"
          />
        </View>

        {/* Success Message */}
        <Text style={styles.title}>Withdraw Successful!</Text>
        <Text style={styles.subtitle}>
          You've successfully withdraw funds from you Savings Pocket On Ekosellers
        </Text>

        {/* Action Button */}
        <TouchableOpacity 
          style={styles.homeBtn} 
          onPress={() => router.push('/pocket')}
        >
          <Text style={styles.homeBtnText}>Go to home</Text>
        </TouchableOpacity>

        {/* Bottom Spacer to prevent overlap with CustomTabBar */}
        <View style={styles.tabBarSpacer} />
        
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#fff' },
  header: { padding: 20 },
  content: { flex: 1, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 30 },
  
  /* Illustration Scaling */
  illustrationContainer: { width: width * 0.7, height: width * 0.7, marginBottom: 30 },
  image: { width: '100%', height: '100%' },
  
  /* Text Styles */
  title: { fontSize: 24, fontWeight: '700', color: '#000', marginBottom: 15 },
  subtitle: { 
    fontSize: 14, 
    color: '#333', 
    textAlign: 'center', 
    lineHeight: 22, 
    marginBottom: 50 
  },
  
  /* Theme-consistent Button */
  homeBtn: {
    backgroundColor: '#A3D65C', // Lime green theme color
    width: '100%',
    paddingVertical: 18,
    borderRadius: 12,
    alignItems: 'center',
  },
  homeBtnText: { color: '#fff', fontSize: 18, fontWeight: '700' },

  /* Spacer for Floating Tab Bar */
  tabBarSpacer: {
    height: Platform.OS === 'ios' ? 140 : 120,
  },
});