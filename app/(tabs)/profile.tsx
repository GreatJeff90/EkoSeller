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

export default function ProfileScreen() {
  const router = useRouter();

  const ProfileOption = ({ icon, label, onPress, iconColor = "#64748B" }: any) => (
    <TouchableOpacity style={styles.optionItem} onPress={onPress}>
      <View style={styles.optionLeft}>
        <View style={styles.iconCircle}>
          {icon}
        </View>
        <Text style={styles.optionLabel}>{label}</Text>
      </View>
      <Feather name="chevron-right" size={20} color="#94A3B8" />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <Stack.Screen options={{ headerShown: false }} />
      
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        {/* Header Title */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Profile</Text>
        </View>

        {/* User Profile Info */}
        <View style={styles.userInfoContainer}>
          <Image 
            source={{ uri: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop' }} 
            style={styles.avatar} 
          />
          <View style={styles.userTextContent}>
            <Text style={styles.userName}>Vishal Khadok</Text>
            <Text style={styles.joinedDate}>Joined 2024</Text>
          </View>
        </View>

        {/* Grouped Options */}
        <View style={styles.optionsGroup}>
          <ProfileOption 
            icon={<Feather name="user" size={20} color="#FF7043" />} 
            label="Personal Info" 
          />
          <View style={styles.separator} />
          <ProfileOption 
            icon={<Ionicons name="map-outline" size={20} color="#7C3AED" />} 
            label="Addresses" 
          />
        </View>

        <View style={styles.optionsGroup}>
          <ProfileOption 
            icon={<MaterialCommunityIcons name="view-grid-plus-outline" size={20} color="#06B6D4" />} 
            label="User Reviews" 
          />
          <View style={styles.separator} />
          <ProfileOption 
            icon={<Ionicons name="settings-outline" size={20} color="#7C3AED" />} 
            label="Settings" 
          />
        </View>

        <View style={styles.optionsGroup}>
          <ProfileOption 
            icon={<MaterialCommunityIcons name="logout" size={20} color="#F43F5E" />} 
            label="Log Out" 
          />
        </View>

        {/* Space for the floating Tab Bar */}
        <View style={{ height: 100 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  header: {
    marginBottom: 30,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1E293B',
  },
  userInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#F1F5F9',
  },
  userTextContent: {
    marginLeft: 20,
  },
  userName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1E293B',
  },
  joinedDate: {
    fontSize: 14,
    color: '#94A3B8',
    marginTop: 4,
  },
  optionsGroup: {
    backgroundColor: '#F8FAFC', // Light bluish-grey background
    borderRadius: 20,
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  optionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 18,
  },
  optionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  optionLabel: {
    fontSize: 16,
    fontWeight: '500',
    color: '#334155',
  },
  separator: {
    height: 1,
    backgroundColor: '#E2E8F0',
    marginHorizontal: 10,
  },
});