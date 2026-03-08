import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Switch,
} from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { Ionicons, Feather, MaterialCommunityIcons } from '@expo/vector-icons';

export default function SettingsScreen() {
  const router = useRouter();
  
  // State for the notification toggle
  const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(true);

  const toggleSwitch = () => setIsNotificationsEnabled(previousState => !previousState);

  return (
    <SafeAreaView style={styles.safeArea}>
      <Stack.Screen options={{ headerShown: false }} />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
          <Ionicons name="arrow-back" size={24} color="#1E293B" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Settings</Text>
        <View style={{ width: 24 }} />
      </View>

      <View style={styles.content}>
        {/* Change Password Option */}
        <TouchableOpacity 
          style={styles.settingCard}
          onPress={() => {/* Navigate to change password logic */}}
        >
          <View style={styles.settingLeft}>
            <MaterialCommunityIcons name="key-variant" size={24} color="#BEE671" />
            <Text style={styles.settingLabel}>Change Login Password</Text>
          </View>
          <Feather name="chevron-right" size={24} color="#1E293B" />
        </TouchableOpacity>

        {/* Notification Toggle Option */}
        <View style={styles.settingCard}>
          <View style={styles.settingLeft}>
            <Ionicons name="notifications-outline" size={24} color="#BEE671" />
            <Text style={styles.settingLabel}>Notification</Text>
          </View>
          <Switch
            trackColor={{ false: "#E2E8F0", true: "#BEE67133" }} // Transparent brand green for track
            thumbColor={isNotificationsEnabled ? "#BEE671" : "#F4F3F4"}
            onValueChange={toggleSwitch}
            value={isNotificationsEnabled}
            ios_backgroundColor="#E2E8F0"
          />
        </View>
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
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1E293B',
  },
  backBtn: {
    padding: 5,
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  settingCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#334155', // Darker border as per design
    borderRadius: 12,
    paddingHorizontal: 15,
    paddingVertical: 18,
    marginBottom: 20,
  },
  settingLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  settingLabel: {
    fontSize: 15,
    fontWeight: '500',
    color: '#1E293B',
    marginLeft: 15,
  },
});