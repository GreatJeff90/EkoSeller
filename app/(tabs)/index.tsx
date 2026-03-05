import React from 'react';
import { ScrollView, StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChevronRight } from 'lucide-react-native';

import HomeHeader from '@/components/HomeHeader';
import ProductCard from '@/components/ProductCard';

// Mock Data for Categories
const CATEGORIES = [
  { id: '1', name: 'Fashion', icon: '👕', color: '#E0F2F1' },
  { id: '2', name: 'Electronics', icon: '💻', color: '#FFF3E0' },
  { id: '3', name: 'Appliances', icon: '🔌', color: '#E8F5E9' },
  { id: '4', name: 'Beauty', icon: '🧴', color: '#FCE4EC' },
  { id: '5', name: 'Furniture', icon: '🛋️', color: '#E3F2FD' },
];

// Mock Data for Products
const FOOTWEAR_DATA = [
  {
    id: '1',
    title: 'Adidas white sneakers for men',
    price: 6003,
    oldPrice: 8004,
    discount: '15%',
    rating: 4.8,
    reviews: 735,
    image: 'https://images.unsplash.com/photo-1533681018184-68bd1d8f39fe?q=80&w=300&auto=format&fit=crop',
  },
  {
    id: '2',
    title: 'Nike black running shoes for men',
    price: 7005,
    oldPrice: 11002,
    discount: '25%',
    rating: 4.2,
    reviews: 422,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=300&auto=format&fit=crop',
  },
];

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <HomeHeader />
      
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        {/* Categories Section */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Categories</Text>
          <TouchableOpacity style={styles.viewAll}>
            <Text style={styles.viewAllText}>View All</Text>
            <ChevronRight size={14} color="#666" />
          </TouchableOpacity>
        </View>
        
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.categoryList}>
          {CATEGORIES.map((cat) => (
            <View key={cat.id} style={styles.categoryItem}>
              <View style={[styles.categoryIcon, { backgroundColor: cat.color }]}>
                <Text style={{ fontSize: 24 }}>{cat.icon}</Text>
              </View>
              <Text style={styles.categoryLabel}>{cat.name}</Text>
            </View>
          ))}
        </ScrollView>

        {/* Promo Banner Placeholder */}
        <View style={styles.promoBanner}>
          <View style={styles.promoTextContainer}>
            <Text style={styles.promoTitle}>MIN 15% OFF</Text>
            <TouchableOpacity style={styles.shopNowBtn}>
              <Text style={styles.shopNowText}>SHOP NOW</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.promoImagePlaceholder} />
        </View>

        {/* Hot Selling Footwear */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Hot Selling Footwear</Text>
          <TouchableOpacity style={styles.viewAll}>
            <Text style={styles.viewAllText}>View All</Text>
            <ChevronRight size={14} color="#666" />
          </TouchableOpacity>
        </View>

        <FlatList
          horizontal
          data={FOOTWEAR_DATA}
          renderItem={({ item }) => <ProductCard {...item} isTopSeller />}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.horizontalList}
          showsHorizontalScrollIndicator={false}
        />

        {/* Recommended Section */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Recommended for you</Text>
          <TouchableOpacity style={styles.viewAll}>
            <Text style={styles.viewAllText}>View All</Text>
            <ChevronRight size={14} color="#666" />
          </TouchableOpacity>
        </View>

        <FlatList
          horizontal
          data={FOOTWEAR_DATA} // Reusing data for demo
          renderItem={({ item }) => <ProductCard {...item} />}
          keyExtractor={(item) => `rec-${item.id}`}
          contentContainerStyle={styles.horizontalList}
          showsHorizontalScrollIndicator={false}
        />

        <View style={{ height: 40 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#fff' },
  container: { flex: 1 },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginTop: 20,
    marginBottom: 10,
  },
  sectionTitle: { fontSize: 16, fontWeight: 'bold', color: '#333' },
  viewAll: { flexDirection: 'row', alignItems: 'center' },
  viewAllText: { fontSize: 12, color: '#666', marginRight: 4 },
  categoryList: { paddingLeft: 15, paddingBottom: 10 },
  categoryItem: { alignItems: 'center', marginRight: 20 },
  categoryIcon: { width: 60, height: 60, borderRadius: 30, justifyContent: 'center', alignItems: 'center', marginBottom: 5 },
  categoryLabel: { fontSize: 11, color: '#666' },
  promoBanner: {
    margin: 15,
    backgroundColor: '#FFE0B2',
    height: 150,
    borderRadius: 12,
    flexDirection: 'row',
    overflow: 'hidden',
  },
  promoTextContainer: { flex: 1, padding: 20, justifyContent: 'center' },
  promoTitle: { fontSize: 24, fontWeight: '900', color: '#000', marginBottom: 15 },
  shopNowBtn: { backgroundColor: '#FF6B00', paddingHorizontal: 15, paddingVertical: 8, borderRadius: 4, alignSelf: 'flex-start' },
  shopNowText: { color: '#fff', fontSize: 10, fontWeight: 'bold' },
  promoImagePlaceholder: { flex: 1, backgroundColor: '#FFCC80' }, // Replace with Image
  horizontalList: { paddingLeft: 15, paddingBottom: 20 },
});