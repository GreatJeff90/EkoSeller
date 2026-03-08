import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { Ionicons, Feather, MaterialCommunityIcons } from '@expo/vector-icons';

export default function ProfileInfoScreen() {
  const router = useRouter();

  // Reusable component for the info rows
  const InfoRow = ({ icon, label, value }: { icon: React.ReactNode, label: string, value: string }) => (
    <View style={styles.infoRow}>
      <View style={styles.iconCircle}>
        {icon}
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.infoLabel}>{label}</Text>
        <Text style={styles.infoValue}>{value}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <Stack.Screen options={{ headerShown: false }} />
      
      {/* Header with Edit Action */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
          <Ionicons name="arrow-back" size={24} color="#1E293B" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Personal Info</Text>
        <TouchableOpacity>
          <Text style={styles.editBtnText}>EDIT</Text>
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.content}>
        
        {/* Profile Summary */}
        <View style={styles.profileSummary}>
          <Image 
            source={{ uri: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop' }} 
            style={styles.avatar} 
          />
          <Text style={styles.userName}>Vishal Khadok</Text>
          <Text style={styles.joinedDate}>Joined 2024</Text>
        </View>

        {/* Info Card Group */}
        <View style={styles.infoCard}>
          <InfoRow 
            icon={<Feather name="user" size={18} color="#FF7043" />} 
            label="FULL NAME" 
            value="Vishal Khadok" 
          />
          <InfoRow 
            icon={<MaterialCommunityIcons name="email-outline" size={18} color="#7C3AED" />} 
            label="EMAIL" 
            value="hello@halallab.co" 
          />
          <InfoRow 
            icon={<Feather name="phone" size={18} color="#06B6D4" />} 
            label="PHONE NUMBER" 
            value="408-841-0926" 
          />
        </View>

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
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1E293B',
  },
  backBtn: {
    padding: 5,
  },
  editBtnText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#BEE671', // Brand Lime Green
  },
  content: {
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  profileSummary: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 40,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#F1F5F9',
    marginBottom: 20,
  },
  userName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1E293B',
  },
  joinedDate: {
    fontSize: 14,
    color: '#94A3B8',
    marginTop: 5,
  },
  infoCard: {
    width: '100%',
    backgroundColor: '#F8FAFC', // Light background for group
    borderRadius: 24,
    padding: 20,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
  },
  iconCircle: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
  },
  infoLabel: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#94A3B8',
    marginBottom: 4,
    letterSpacing: 0.5,
  },
  infoValue: {
    fontSize: 15,
    fontWeight: '500',
    color: '#334155',
  },
});