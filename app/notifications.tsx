import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { Ionicons, MaterialCommunityIcons, Feather } from '@expo/vector-icons';

// Mock Data for Notifications
const NOTIFICATIONS_DATA = [
  {
    id: '1',
    title: 'Order Delivered',
    description: 'Your order #12345 has been successfully delivered to your home address.',
    time: 'Today, 10:30 AM',
    icon: 'package-variant-closed',
    iconColor: '#BEE671',
    category: 'Today'
  },
  {
    id: '2',
    title: 'Flash Sale Alert!',
    description: 'Get up to 50% off on all cotton shirts. Limited time only!',
    time: 'Today, 08:00 AM',
    icon: 'sale',
    iconColor: '#FF7043',
    category: 'Today'
  },
  {
    id: '3',
    title: 'Payment Confirmed',
    description: 'We have received your payment for order #12346.',
    time: 'Yesterday, 04:15 PM',
    icon: 'check-circle-outline',
    iconColor: '#0EA5E9',
    category: 'Yesterday'
  },
];

export default function NotificationsScreen() {
  const router = useRouter();

  const renderNotification = ({ item }: { item: typeof NOTIFICATIONS_DATA[0] }) => (
    <TouchableOpacity style={styles.notificationCard}>
      <View style={[styles.iconCircle, { backgroundColor: `${item.iconColor}15` }]}>
        <MaterialCommunityIcons name={item.icon as any} size={24} color={item.iconColor} />
      </View>
      <View style={styles.textContainer}>
        <View style={styles.cardHeader}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.timeText}>{item.time.split(', ')[1]}</Text>
        </View>
        <Text style={styles.description} numberOfLines={2}>
          {item.description}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <Stack.Screen options={{ headerShown: false }} />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
          <Ionicons name="arrow-back" size={24} color="#1E293B" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Notifications</Text>
        <TouchableOpacity>
          <Text style={styles.clearAllText}>Clear All</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={NOTIFICATIONS_DATA}
        renderItem={renderNotification}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => (
          <Text style={styles.sectionLabel}>TODAY</Text>
        )}
      />
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
  clearAllText: {
    fontSize: 14,
    color: '#BEE671', // Brand green
    fontWeight: '600',
  },
  listContent: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  sectionLabel: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#94A3B8',
    marginBottom: 15,
    letterSpacing: 1,
  },
  notificationCard: {
    flexDirection: 'row',
    backgroundColor: '#F8FAFC', // Subtle background
    borderRadius: 16,
    padding: 15,
    marginBottom: 15,
    alignItems: 'center',
  },
  iconCircle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#1E293B',
  },
  timeText: {
    fontSize: 11,
    color: '#94A3B8',
  },
  description: {
    fontSize: 13,
    color: '#64748B',
    lineHeight: 18,
  },
});