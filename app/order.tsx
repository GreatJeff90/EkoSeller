import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

// Define a common interface to resolve the TypeScript error
interface Order {
  id: string;
  name: string;
  price: string;
  items: string;
  image: string;
  // Optional properties that only exist in specific tabs
  oldPrice?: string;
  discount?: string;
  status?: 'Completed' | 'Canceled';
}

// Mock Data for Ongoing and History tabs
const ONGOING_ORDERS: Order[] = [
  { id: '1', name: 'Allen Solly Regular fit cotton shirt', price: '₦35,000', oldPrice: '₦40,025', discount: '15% OFF', items: '08 Items', image: 'https://images.unsplash.com/photo-1589310243389-96a5483213a8?q=80&w=400&auto=format&fit=crop' },
  { id: '2', name: 'Allen Solly Regular fit cotton shirt', price: '₦35,000', oldPrice: '₦40,025', discount: '15% OFF', items: '03 Items', image: 'https://images.unsplash.com/photo-1589310243389-96a5483213a8?q=80&w=400&auto=format&fit=crop' },
  { id: '3', name: 'Allen Solly Regular fit cotton shirt', price: '₦35,000', oldPrice: '₦40,025', discount: '15% OFF', items: '08 Items', image: 'https://images.unsplash.com/photo-1589310243389-96a5483213a8?q=80&w=400&auto=format&fit=crop' },
  { id: '4', name: 'Allen Solly Regular fit cotton shirt', price: '₦35,000', oldPrice: '₦40,025', discount: '15% OFF', items: '05 Items', image: 'https://images.unsplash.com/photo-1589310243389-96a5483213a8?q=80&w=400&auto=format&fit=crop' },
];

const HISTORY_ORDERS: Order[] = [
  { id: '1', name: 'Allen Solly Regular fit cotton shirt', price: '₦35,000', status: 'Completed', items: '08 Items', image: 'https://images.unsplash.com/photo-1589310243389-96a5483213a8?q=80&w=400&auto=format&fit=crop' },
  { id: '2', name: 'Allen Solly Regular fit cotton shirt', price: '₦35,000', status: 'Completed', items: '03 Items', image: 'https://images.unsplash.com/photo-1589310243389-96a5483213a8?q=80&w=400&auto=format&fit=crop' },
  { id: '3', name: 'Allen Solly Regular fit cotton shirt', price: '₦35,000', status: 'Completed', items: '08 Items', image: 'https://images.unsplash.com/photo-1589310243389-96a5483213a8?q=80&w=400&auto=format&fit=crop' },
  { id: '4', name: 'Allen Solly Regular fit cotton shirt', price: '₦35,000', status: 'Canceled', items: '05 Items', image: 'https://images.unsplash.com/photo-1589310243389-96a5483213a8?q=80&w=400&auto=format&fit=crop' },
];

export default function OrderScreen() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'ongoing' | 'history'>('ongoing');

  const renderItem = ({ item }: { item: Order }) => (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Image source={{ uri: item.image }} style={styles.productImage} />
        <View style={styles.infoContainer}>
          <Text style={styles.productName} numberOfLines={2}>{item.name}</Text>
          <View style={styles.priceRow}>
            <Text style={styles.price}>{item.price}</Text>
            {activeTab === 'ongoing' && (
              <>
                <Text style={styles.oldPrice}>{item.oldPrice}</Text>
                <Text style={styles.discount}>{item.discount}</Text>
              </>
            )}
          </View>
        </View>
        <Text style={styles.itemCount}>{item.items}</Text>
      </View>

      <View style={styles.cardActions}>
        {activeTab === 'ongoing' ? (
          <>
            <TouchableOpacity 
              style={styles.trackBtn} 
              onPress={() => router.push('/track-order')}
            >
              <Text style={styles.trackText}>Track Order</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cancelBtn}>
              <Text style={styles.cancelText}>Cancel</Text>
            </TouchableOpacity>
          </>
        ) : (
          <>
            <TouchableOpacity style={item.status === 'Completed' ? styles.trackBtn : styles.trackBtnInactive}>
              <Text style={styles.trackText}>{item.status === 'Completed' ? 'Rate' : 'Track Order'}</Text>
            </TouchableOpacity>
            <View style={styles.statusContainer}>
              <Text style={[styles.statusText, item.status === 'Canceled' && styles.statusTextCanceled]}>
                {item.status}
              </Text>
              <Ionicons 
                name={item.status === 'Completed' ? "checkmark-circle" : "close-circle"} 
                size={20} 
                color={item.status === 'Completed' ? "#BEE671" : "#EF4444"} 
              />
            </View>
          </>
        )}
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#334155" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>My Order</Text>
        <View style={{ width: 24 }} />
      </View>

      {/* Custom Tab Bar */}
      <View style={styles.tabContainer}>
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'ongoing' && styles.activeTab]} 
          onPress={() => setActiveTab('ongoing')}
        >
          <Text style={[styles.tabText, activeTab === 'ongoing' && styles.activeTabText]}>Ongoing</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'history' && styles.activeTabHistory]} 
          onPress={() => setActiveTab('history')}
        >
          <Text style={[styles.tabText, activeTab === 'history' && styles.activeTabTextHistory]}>History</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={activeTab === 'ongoing' ? ONGOING_ORDERS : HISTORY_ORDERS}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF' },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  headerTitle: { fontSize: 20, fontWeight: 'bold', color: '#1E293B' },
  tabContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#F1F5F9',
    marginBottom: 20,
  },
  tab: {
    flex: 1,
    paddingVertical: 15,
    alignItems: 'center',
  },
  activeTab: { borderBottomWidth: 3, borderBottomColor: '#BEE671' },
  activeTabHistory: { borderBottomWidth: 3, borderBottomColor: '#BEE671' },
  tabText: { fontSize: 16, color: '#94A3B8', fontWeight: '600' },
  activeTabText: { color: '#BEE671' },
  activeTabTextHistory: { color: '#FF8A00' }, 
  listContent: { paddingHorizontal: 15 },
  card: { marginBottom: 30 },
  cardHeader: { flexDirection: 'row', alignItems: 'center' },
  productImage: { width: 70, height: 70, borderRadius: 8, backgroundColor: '#F8FAFC' },
  infoContainer: { flex: 1, paddingHorizontal: 12 },
  productName: { fontSize: 13, color: '#334155', fontWeight: '500' },
  priceRow: { flexDirection: 'row', alignItems: 'center', marginTop: 5 },
  price: { fontSize: 15, fontWeight: 'bold', color: '#000' },
  oldPrice: { fontSize: 11, color: '#94A3B8', textDecorationLine: 'line-through', marginLeft: 5 },
  discount: { fontSize: 11, color: '#FF7043', fontWeight: 'bold', marginLeft: 5 },
  itemCount: { fontSize: 14, fontWeight: 'bold', color: '#000' },
  cardActions: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 15 },
  trackBtn: {
    flex: 1,
    backgroundColor: '#BEE671',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
    marginRight: 10,
  },
  trackBtnInactive: {
    flex: 1,
    backgroundColor: '#BEE671',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
    marginRight: 10,
  },
  cancelBtn: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#BEE671',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
    marginLeft: 10,
  },
  trackText: { color: '#FFF', fontWeight: 'bold', fontSize: 14 },
  cancelText: { color: '#BEE671', fontWeight: 'bold', fontSize: 14 },
  statusContainer: { flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end' },
  statusText: { fontSize: 16, color: '#BEE671', marginRight: 8 },
  statusTextCanceled: { color: '#EF4444' },
});