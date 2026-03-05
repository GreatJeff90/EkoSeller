import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Modal } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import ProductCard from '@/components/ProductCard';

const PRODUCTS = [
  { id: '1', title: 'Allen Solly Regular fit cotton shirt', price: 35000, oldPrice: 40025, discount: '15%', rating: 4.8, reviews: 785, image: 'https://images.unsplash.com/photo-1596755094514-f87034a26cc1?q=80&w=300', trending: true },
  { id: '2', title: 'Calvin Klein Regular fit slim fit shirt', price: 52000, oldPrice: 62004, discount: '20%', rating: 4.8, reviews: 785, image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=300' },
  { id: '3', title: 'Polo Ralph Lauren Classic Shirt', price: 45000, oldPrice: 50000, discount: '10%', rating: 4.5, reviews: 320, image: 'https://images.unsplash.com/photo-1624371414361-e6e9ea30215c?q=80&w=300', trending: false },
  { id: '4', title: 'Gucci Formal Button Down', price: 120000, oldPrice: 150000, discount: '20%', rating: 4.9, reviews: 112, image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=300', trending: true },
  { id: '5', title: 'Levis Denim Jacket Blue', price: 28000, oldPrice: 35000, discount: '20%', rating: 4.6, reviews: 540, image: 'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?q=80&w=300' },
  { id: '6', title: 'Zara Oversized White Tee', price: 12000, oldPrice: 18000, discount: '33%', rating: 4.3, reviews: 900, image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=300' },
  { id: '7', title: 'H&M Linen Blend Shirt', price: 15500, oldPrice: 20000, discount: '22%', rating: 4.4, reviews: 410, image: 'https://images.unsplash.com/photo-1598033129183-c4f50c717658?q=80&w=300' },
  { id: '8', title: 'Tommy Hilfiger Slim Fit', price: 39000, oldPrice: 45000, discount: '13%', rating: 4.7, reviews: 280, image: 'https://images.unsplash.com/photo-1563630423918-b58f07336ac9?q=80&w=300' },
];

export default function ProductListScreen() {
  const [isSortVisible, setSortVisible] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Men's T-Shirt</Text>
        <View style={styles.headerIcons}>
          <Ionicons name="search-outline" size={24} color="#333" style={{ marginRight: 15 }} />
          <Ionicons name="bag-outline" size={24} color="#333" />
        </View>
      </View>

      <Text style={styles.itemCount}>{PRODUCTS.length} Items</Text>

      <FlatList
        data={PRODUCTS}
        numColumns={2}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity 
  style={{ flex: 0.5, padding: 5 }}
  activeOpacity={0.9}
  onPress={() => 
    router.push({
      pathname: '/product/[id]',
      params: { id: item.id }
    })
  }
>
  <ProductCard {...item} />
</TouchableOpacity>
        )}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />

      {/* Bottom Filter/Sort Bar */}
      <View style={styles.bottomActions}>
        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="options-outline" size={20} color="#333" />
          <Text style={styles.actionText}>Filter</Text>
        </TouchableOpacity>
        <View style={styles.divider} />
        <TouchableOpacity style={styles.actionButton} onPress={() => setSortVisible(true)}>
          <Ionicons name="swap-vertical-outline" size={20} color="#333" />
          <Text style={styles.actionText}>Sort By</Text>
        </TouchableOpacity>
      </View>

      {/* Sort Bottom Sheet Modal */}
      <Modal visible={isSortVisible} transparent animationType="slide">
        <View style={styles.modalOverlay}>
          <View style={styles.sortSheet}>
            <View style={styles.sheetHeader}>
              <Text style={styles.sheetTitle}>Sort By</Text>
              <TouchableOpacity onPress={() => setSortVisible(false)}>
                <Ionicons name="close" size={24} color="#333" />
              </TouchableOpacity>
            </View>
            {['Price - High to Low', 'Price - Low to High', 'Popularity', 'Discount', 'Customer Rating', 'Best Seller'].map((option) => (
              <TouchableOpacity 
                key={option} 
                style={styles.sortOption}
                onPress={() => setSortVisible(false)}
              >
                <Text style={styles.sortOptionText}>{option}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between', 
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f5f5f5'
  },
  headerTitle: { fontSize: 18, fontWeight: '600' },
  headerIcons: { flexDirection: 'row' },
  itemCount: { textAlign: 'center', color: '#7A869A', fontSize: 12, marginVertical: 10 },
  listContent: { paddingHorizontal: 10, paddingBottom: 80 },
  bottomActions: { 
    flexDirection: 'row', 
    height: 60, 
    borderTopWidth: 1, 
    borderColor: '#eee', 
    alignItems: 'center',
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 0,
    width: '100%'
  },
  actionButton: { flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' },
  actionText: { marginLeft: 8, fontWeight: '500' },
  divider: { width: 1, height: '60%', backgroundColor: '#eee' },
  modalOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'flex-end' },
  sortSheet: { backgroundColor: '#fff', borderTopLeftRadius: 20, borderTopRightRadius: 20, padding: 20 },
  sheetHeader: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 },
  sheetTitle: { fontSize: 18, fontWeight: 'bold' },
  sortOption: { paddingVertical: 15, borderBottomWidth: 0.5, borderBottomColor: '#f0f0f0' },
  sortOptionText: { fontSize: 15, color: '#333' }
});