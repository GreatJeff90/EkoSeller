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
import { Ionicons, Feather, MaterialCommunityIcons } from '@expo/vector-icons';

const INITIAL_CART = [
  { id: '1', name: 'Allen Solly Regular fit cotton shirt', price: 35000, oldPrice: 40025, discount: '15% OFF', quantity: 1, image: 'https://images.unsplash.com/photo-1589310243389-96a5483213a8?q=80&w=400&auto=format&fit=crop' },
  { id: '2', name: 'Allen Solly Regular fit cotton shirt', price: 35000, oldPrice: 40025, discount: '15% OFF', quantity: 1, image: 'https://images.unsplash.com/photo-1589310243389-96a5483213a8?q=80&w=400&auto=format&fit=crop' },
  { id: '3', name: 'Allen Solly Regular fit cotton shirt', price: 35000, oldPrice: 40025, discount: '15% OFF', quantity: 1, image: 'https://images.unsplash.com/photo-1589310243389-96a5483213a8?q=80&w=400&auto=format&fit=crop' },
  { id: '4', name: 'Allen Solly Regular fit cotton shirt', price: 35000, oldPrice: 40025, discount: '15% OFF', quantity: 1, image: 'https://images.unsplash.com/photo-1589310243389-96a5483213a8?q=80&w=400&auto=format&fit=crop' },
];

export default function CartScreen() {
  const router = useRouter();
  const [cart, setCart] = useState(INITIAL_CART);

  const renderCartItem = ({ item }: { item: typeof INITIAL_CART[0] }) => (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.image }} style={styles.itemImage} />
      <View style={styles.itemDetails}>
        <Text style={styles.itemName} numberOfLines={2}>{item.name}</Text>
        <View style={styles.priceRow}>
          <Text style={styles.price}>₦{item.price.toLocaleString()}</Text>
          <Text style={styles.oldPrice}>₦{item.oldPrice.toLocaleString()}</Text>
          <Text style={styles.discountText}>{item.discount}</Text>
        </View>
      </View>
      <View style={styles.actionColumn}>
        <View style={styles.quantityControls}>
          <TouchableOpacity style={styles.qtyBtn}><Feather name="minus-circle" size={22} color="#94A3B8" /></TouchableOpacity>
          <Text style={styles.qtyText}>{item.quantity}</Text>
          <TouchableOpacity style={styles.qtyBtn}><Feather name="plus-circle" size={22} color="#94A3B8" /></TouchableOpacity>
        </View>
        <TouchableOpacity><MaterialCommunityIcons name="delete-outline" size={24} color="#64748B" /></TouchableOpacity>
      </View>
    </View>
  );

  const ListFooter = () => (
    <View style={styles.footerScrollable}>
      <View style={styles.totalRow}>
        <Text style={styles.totalLabel}>Total:</Text>
        <Text style={styles.totalValue}>₦120,000</Text>
      </View>
      <TouchableOpacity 
        style={styles.nextButton} 
        onPress={() => router.push('/add-location')}
      >
        <Text style={styles.nextText}>Next</Text>
      </TouchableOpacity>
      {/* Space under the footer */}
      <View style={{ height: 100 }} />
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <Stack.Screen options={{ headerShown: false }} />

      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Cart</Text>
        <View style={styles.headerIcons}>
          <TouchableOpacity style={styles.iconBtn}><Ionicons name="search-outline" size={24} color="#334155" /></TouchableOpacity>
          <TouchableOpacity style={styles.iconBtn}><Ionicons name="bag-handle-outline" size={24} color="#334155" /></TouchableOpacity>
        </View>
      </View>

      <FlatList
        data={cart}
        renderItem={renderCartItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        ListFooterComponent={ListFooter}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#FFF' },
  header: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    paddingHorizontal: 20, 
    paddingVertical: 15 
  },
  headerTitle: { fontSize: 24, fontWeight: 'bold', color: '#1E293B' },
  headerIcons: { flexDirection: 'row' },
  iconBtn: { marginLeft: 20 },
  listContent: { paddingHorizontal: 20, paddingTop: 10 },
  itemContainer: { 
    flexDirection: 'row', 
    marginBottom: 25, 
    alignItems: 'center' 
  },
  itemImage: { 
    width: 80, 
    height: 80, 
    borderRadius: 8, 
    backgroundColor: '#F1F5F9' 
  },
  itemDetails: { flex: 1, paddingHorizontal: 15 },
  itemName: { fontSize: 14, fontWeight: '500', color: '#334155', marginBottom: 8 },
  priceRow: { flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap' },
  price: { fontSize: 16, fontWeight: 'bold', color: '#000', marginRight: 8 },
  oldPrice: { 
    fontSize: 12, 
    color: '#94A3B8', 
    textDecorationLine: 'line-through', 
    marginRight: 8 
  },
  discountText: { fontSize: 12, color: '#FF7043', fontWeight: 'bold' },
  actionColumn: { 
    alignItems: 'flex-end', 
    justifyContent: 'space-between', 
    height: 70 
  },
  quantityControls: { flexDirection: 'row', alignItems: 'center' },
  qtyBtn: { padding: 4 },
  qtyText: { marginHorizontal: 8, fontSize: 16, fontWeight: 'bold' },
  footerScrollable: {
    marginTop: 20,
    // No borderTopWidth or borderTopColor here as requested
  },
  totalRow: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    marginBottom: 15 
  },
  totalLabel: { fontSize: 22, fontWeight: 'bold', color: '#000' },
  totalValue: { fontSize: 22, fontWeight: 'bold', color: '#000' },
  nextButton: { 
    backgroundColor: '#BEE671', 
    borderRadius: 12, 
    paddingVertical: 18, 
    alignItems: 'center' 
  },
  nextText: { color: '#FFF', fontSize: 18, fontWeight: 'bold' },
});