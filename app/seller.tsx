import React, { useState } from 'react';
import { ScrollView, StyleSheet, View, Text, FlatList, TouchableOpacity, Modal, Dimensions, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router, Stack } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

import HomeHeader from '@/components/HomeHeader';
import ProductCard from '@/components/ProductCard';
import DealOfTheDay from '@/components/DealOfTheDay';
import Sidebar from '@/components/Sidebar'; 
// Import the SellerTabBar component
import SellerTabBar from '@/components/SellerTabBar'; 

const { width } = Dimensions.get('window');

// --- Data Constants ---
const CATEGORIES = [
  { id: '1', name: 'Fashion', icon: 'tshirt-crew', color: '#E0F2F1' },
  { id: '2', name: 'Electronics', icon: 'laptop', color: '#FFF3E0' },
  { id: '3', name: 'Appliances', icon: 'fridge-outline', color: '#E8F5E9' },
  { id: '4', name: 'Beauty', icon: 'lotion-outline', color: '#FCE4EC' },
  { id: '5', name: 'Furniture', icon: 'sofa-outline', color: '#E3F2FD' },
];

const FOOTWEAR_DATA = [
  { id: '1', title: 'Adidas white sneakers for men', price: 6008, oldPrice: 8006, discount: '30%', rating: 4.8, reviews: 785, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff' },
  { id: '2', title: 'Nike black running shoes for men', price: 7005, oldPrice: 9000, discount: '20%', rating: 4.2, reviews: 422, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff' },
];

export default function HomeScreen() {
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={styles.safeArea}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={isSidebarVisible}
          onRequestClose={() => setSidebarVisible(false)}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.sidebarContainer}>
              <Sidebar onClose={() => setSidebarVisible(false)} />
            </View>
            <TouchableOpacity 
              style={styles.closeOverlay} 
              onPress={() => setSidebarVisible(false)} 
            />
          </View>
        </Modal>

        <Stack.Screen options={{ headerShown: false }} />
        <HomeHeader onMenuPress={() => setSidebarVisible(true)} />
        
        <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
          {/* Categories Section */}
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Categories</Text>
            <TouchableOpacity style={styles.viewAllBtn}>
              <Text style={styles.viewAllText}>View All -{'>'}</Text>
            </TouchableOpacity>
          </View>
          
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.categoryList}>
            {CATEGORIES.map((cat) => (
              <View key={cat.id} style={styles.categoryItem}>
                <View style={[styles.categoryIcon, { backgroundColor: cat.color }]}>
                  <MaterialCommunityIcons name={cat.icon as any} size={24} color="#333" />
                </View>
                <Text style={styles.categoryLabel}>{cat.name}</Text>
              </View>
            ))}
          </ScrollView>

          {/* Promo Banner Section */}
          <View style={styles.promoBanner}>
            <View style={styles.promoLeft}>
              <Text style={styles.promoDiscount}>MIN 15%{"\n"}OFF</Text>
              <TouchableOpacity style={styles.shopNowBtn}>
                <Text style={styles.shopNowText}>SHOP NOW</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.promoRight}>
              <Image 
                source={require('../assets/images/running-shoes.png')} 
                style={styles.promoImage}
                resizeMode="cover"
              />
            </View>
          </View>

          <View style={styles.bannerPagination}>
            <View style={[styles.bannerDot, styles.activeBannerDot]} />
            <View style={styles.bannerDot} />
            <View style={styles.bannerDot} />
            <View style={styles.bannerDot} />
          </View>

          <DealOfTheDay />

          {/* Footwear Section */}
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Hot Selling Footwear</Text>
            <TouchableOpacity style={styles.viewAllBtn}>
              <Text style={styles.viewAllText}>View All -{'>'}</Text>
            </TouchableOpacity>
          </View>

          <FlatList
            horizontal
            data={FOOTWEAR_DATA}
            renderItem={({ item }) => (
              <View style={styles.cardWrapper}>
                <ProductCard {...item} isTopSeller={true} />
              </View>
            )}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.sliderContainer}
            showsHorizontalScrollIndicator={false}
          />

          {/* Recommended Section */}
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Recommended for you</Text>
            <TouchableOpacity 
              style={styles.viewAllBtn} 
              onPress={() => router.push('/product/product-list')} 
            >
              <Text style={styles.viewAllText}>View All -{'>'}</Text>
            </TouchableOpacity>
          </View>

          <FlatList
            horizontal
            data={FOOTWEAR_DATA} 
            renderItem={({ item }) => (
              <View style={styles.cardWrapper}>
                <ProductCard {...item} />
              </View>
            )}
            keyExtractor={(item) => `rec-${item.id}`}
            contentContainerStyle={styles.sliderContainer}
            showsHorizontalScrollIndicator={false}
          />

          {/* Extra Bottom Padding to prevent content from being hidden behind the Tab Bar */}
          <View style={{ height: 100 }} />
        </ScrollView>
      </SafeAreaView>

      {/* Place the TabBar here, outside the ScrollView but inside the main View */}
      <SellerTabBar />
    </View>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#fff' },
  container: { flex: 1 },
  modalOverlay: { flex: 1, flexDirection: 'row', backgroundColor: 'rgba(0,0,0,0.5)' },
  sidebarContainer: { width: width * 0.8, height: '100%', backgroundColor: '#fff' },
  closeOverlay: { flex: 1, height: '100%' },
  sectionHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 15, marginTop: 25, marginBottom: 10 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', color: '#0D1B34' },
  viewAllBtn: { paddingVertical: 5 },
  viewAllText: { fontSize: 14, color: '#7A869A' },
  categoryList: { paddingLeft: 15, paddingBottom: 10 },
  categoryItem: { alignItems: 'center', marginRight: 20 },
  categoryIcon: { width: 60, height: 60, borderRadius: 30, justifyContent: 'center', alignItems: 'center', marginBottom: 5 },
  categoryLabel: { fontSize: 11, color: '#666' },
  promoBanner: { marginHorizontal: 15, marginTop: 15, backgroundColor: '#FFE4C4', height: 180, borderRadius: 12, flexDirection: 'row', overflow: 'hidden' },
  promoLeft: { flex: 1, padding: 20, justifyContent: 'center' },
  promoDiscount: { fontSize: 28, fontWeight: '900', color: '#3E2723', lineHeight: 32, marginBottom: 15 },
  shopNowBtn: { backgroundColor: '#D2691E', paddingHorizontal: 15, paddingVertical: 10, borderRadius: 6, alignSelf: 'flex-start' },
  shopNowText: { color: '#fff', fontSize: 11, fontWeight: 'bold' },
  promoRight: { flex: 1.2 },
  promoImage: { width: '100%', height: '100%' },
  bannerPagination: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 10, gap: 8 },
  bannerDot: { width: 8, height: 8, borderRadius: 4, backgroundColor: '#D1D1D1' },
  activeBannerDot: { backgroundColor: '#A3D65C' },
  sliderContainer: { paddingLeft: 15, paddingBottom: 20 },
  cardWrapper: { marginRight: 15, width: 220 },
});