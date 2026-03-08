import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { router, Stack } from 'expo-router';
import ProductCard from '@/components/ProductCard';

const SELLER_PRODUCTS = [
  { id: '1', title: 'Allen Solly Regular fit cotton shirt', price: 35000, oldPrice: 40025, discount: '15%', rating: 4.8, reviews: 785, image: 'https://images.unsplash.com/photo-1596755094514-f87034a26cc1', trending: true },
  { id: '2', title: 'Calvin Klein Regular fit slim fit shirt', price: 52000, oldPrice: 62004, discount: '20%', rating: 4.8, reviews: 785, image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a' },
  // Add remaining products from seller list
];

export default function MerchantStore() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Merchant Store</Text>
        <Ionicons name="search-outline" size={24} color="#333" />
      </View>
<Stack.Screen options={{ headerShown: false }} />
      <FlatList
        ListHeaderComponent={
          <View style={styles.profileSection}>
            <Image source={{ uri: 'https://i.pravatar.cc/150?u=alex' }} style={styles.avatar} />
            <Text style={styles.sellerName}>Alexander Ilemma <Ionicons name="checkmark-circle" size={18} color="#A3D65C" /></Text>
            <Text style={styles.onlineStatus}>Online 12 mins ago</Text>
            <Text style={styles.connectedCount}>34k connected</Text>
            
            <TouchableOpacity style={styles.connectBtn}><Text style={styles.connectText}>Connect</Text></TouchableOpacity>

            <View style={styles.statsContainer}>
              <View style={styles.statLine}><Text>Address:</Text><Text style={styles.bold}>Ikego Lagos</Text></View>
              <View style={styles.statLine}><Text>Number of Sales:</Text><Text style={styles.bold}>10,000 sales</Text></View>
              <View style={styles.statLine}>
                <Text>Product Quality:</Text>
                <View style={styles.bar}><View style={[styles.progress, {width: '85%'}]} /></View>
              </View>
              <View style={styles.statLine}>
                <Text>Delivery Rate:</Text>
                <View style={styles.bar}><View style={[styles.progress, {width: '90%'}]} /></View>
              </View>
            </View>
            <Text style={styles.listTitle}>Seller Product List:</Text>
          </View>
        }
        data={SELLER_PRODUCTS}
        numColumns={2}
        renderItem={({ item }) => <View style={{flex: 0.5, padding: 5}}><ProductCard {...item} /></View>}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ padding: 10 }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: { flexDirection: 'row', justifyContent: 'space-between', padding: 15, alignItems: 'center' },
  headerTitle: { fontSize: 18, fontWeight: 'bold' },
  profileSection: { alignItems: 'center', padding: 20 },
  avatar: { width: 80, height: 80, borderRadius: 40, marginBottom: 10 },
  sellerName: { fontSize: 18, fontWeight: 'bold' },
  onlineStatus: { color: '#7A869A', fontSize: 12 },
  connectedCount: { color: '#A3D65C', fontSize: 12, marginVertical: 5 },
  connectBtn: { width: '100%', borderWidth: 1, borderColor: '#eee', padding: 12, borderRadius: 8, alignItems: 'center', marginVertical: 15 },
  connectText: { fontWeight: 'bold' },
  statsContainer: { width: '100%', gap: 10 },
  statLine: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  bold: { fontWeight: 'bold' },
  bar: { height: 8, width: 80, backgroundColor: '#eee', borderRadius: 4 },
  progress: { height: '100%', backgroundColor: '#A3D65C', borderRadius: 4 },
  listTitle: { alignSelf: 'flex-start', fontSize: 16, fontWeight: 'bold', marginTop: 25 }
});