import { StyleSheet, TouchableOpacity, View, Image } from 'react-native';
import { Link, router } from 'expo-router';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function ModalScreen() {
  return (
    <ThemedView style={styles.container}>
      {/* Close Button for Modal */}
      <TouchableOpacity 
        style={styles.closeButton} 
        onPress={() => router.back()}
      >
        <Ionicons name="close" size={28} color="#333" />
      </TouchableOpacity>

      <View style={styles.content}>
        <View style={styles.iconCircle}>
          <MaterialIcons name="shopping-basket" size={50} color="#A3D65C" />
        </View>

        <ThemedText type="title" style={styles.title}>EkoSeller Pro</ThemedText>
        
        <ThemedText style={styles.description}>
          You are currently viewing the preview mode. Sign in to start managing your inventory and tracking your sales.
        </ThemedText>

        <TouchableOpacity style={styles.primaryButton}>
          <ThemedText style={styles.buttonText}>Sign In to Sell</ThemedText>
        </TouchableOpacity>

        <Link href="/" dismissTo style={styles.link}>
          <ThemedText type="link" style={styles.linkText}>Continue Browsing</ThemedText>
        </Link>
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  closeButton: {
    alignSelf: 'flex-end',
    padding: 8,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -40, // Adjust for the header
  },
  iconCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#F0F9E8',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
  },
  description: {
    textAlign: 'center',
    color: '#666',
    lineHeight: 22,
    marginBottom: 32,
    paddingHorizontal: 20,
  },
  primaryButton: {
    backgroundColor: '#A3D65C', // Your theme green
    width: '100%',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 16,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  link: {
    paddingVertical: 10,
  },
  linkText: {
    color: '#666',
    fontSize: 14,
  }
});