import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { Ionicons, AntDesign } from '@expo/vector-icons';

const { width } = Dimensions.get('window');
const COLUMN_WIDTH = (width - 40 - 15) / 2; // Subtracting padding and gap

const FAVORITES_DATA = [
  {
    id: '1',
    name: 'Allen Solly Regular fit cotton shirt',
    price: 35000,
    oldPrice: 40025,
    discount: '15% OFF',
    rating: 4.8,
    reviews: 785,
    isTrending: true,
    image: 'https://images.unsplash.com/photo-1589310243389-96a5483213a8?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: '2',
    name: 'Calvin Clein Regular fit slim fit shirt',
    price: 52000,
    oldPrice: 62004,
    discount: '20% OFF',
    rating: 4.8,
    reviews: 785,
    isTrending: false,
    image: 'https://images.unsplash.com/photo-1589310243389-96a5483213a8?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: '3',
    name: 'H&M Regular fit cotton shirt',
    price: 59000,
    oldPrice: 70008,
    discount: '20% OFF',
    rating: 4.8,
    reviews: 785,
    isTrending: false,
    image: 'https://images.unsplash.com/photo-1589310243389-96a5483213a8?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: '4',
    name: 'Calvin Clein Regular fit casual shirt',
    price: 60000,
    oldPrice: 75000,
    discount: '25% OFF',
    rating: 4.8,
    reviews: 785,
    isTrending: true,
    image: 'https://images.unsplash.com/photo-1589310243389-96a5483213a8?q=80&w=400&auto=format&fit=crop',
  },
];

export default function FavouritesScreen() {
  const router = useRouter();

  const renderProduct = ({ item }: { item: typeof FAVORITES_DATA[0] }) => (
    <View style={styles.productCard}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: item.image }} style={styles.productImage} />
        {item.isTrending && (
          <View style={styles.trendingBadge}>
            <Text style={styles.trendingText}>Trending</Text>
          </View>
        )}
        <TouchableOpacity style={styles.heartBtn}>
          <AntDesign name="heart" size={16} color="#EF4444" />
        </TouchableOpacity>
      </View>

      <View style={styles.detailsContainer}>
        <Text style={styles.productName} numberOfLines={2}>
          {item.name}
        </Text>
        
        <View style={styles.priceRow}>
          <Text style={styles.price}>₦{item.price.toLocaleString()}</Text>
          <Text style={styles.oldPrice}>₦{item.oldPrice.toLocaleString()}</Text>
          <Text style={styles.discountText}>{item.discount}</Text>
        </View>

        <View style={styles.footerRow}>
          <View style={styles.ratingBox}>
            <AntDesign name="star" size={12} color="#F59E0B" />
            <Text style={styles.ratingText}>
              {item.rating} <Text style={styles.reviewsText}>({item.reviews})</Text>
            </Text>
          </View>
          <TouchableOpacity style={styles.addBtn}>
            <Ionicons name="add-circle" size={24} color="#BEE671" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <Stack.Screen options={{ headerShown: false }} />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
          <Ionicons name="arrow-back" size={24} color="#334155" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Favourites</Text>
        <View style={{ width: 24 }} />
      </View>

      <FlatList
        data={FAVORITES_DATA}
        renderItem={renderProduct}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.listContent}
        columnWrapperStyle={styles.columnWrapper}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#FFF' },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  headerTitle: { fontSize: 20, fontWeight: 'bold', color: '#1E293B' },
  backBtn: { padding: 5 },
  listContent: { paddingHorizontal: 20, paddingBottom: 20 },
  columnWrapper: { justifyContent: 'space-between' },
  productCard: {
    width: COLUMN_WIDTH,
    marginBottom: 20,
  },
  imageContainer: {
    position: 'relative',
    width: '100%',
    height: 180,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#F8FAFC',
  },
  productImage: { width: '100%', height: '100%' },
  trendingBadge: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: '#10B981', // Emerald/Trending color
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  trendingText: { color: '#FFF', fontSize: 10, fontWeight: 'bold' },
  heartBtn: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#FFF',
    width: 28,
    height: 28,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 2,
    shadowOffset: { width: 0, height: 2 },
  },
  detailsContainer: { marginTop: 10 },
  productName: { fontSize: 13, color: '#334155', fontWeight: '500', height: 35 },
  priceRow: { flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap', marginVertical: 4 },
  price: { fontSize: 14, fontWeight: 'bold', color: '#000', marginRight: 5 },
  oldPrice: { fontSize: 10, color: '#94A3B8', textDecorationLine: 'line-through', marginRight: 5 },
  discountText: { fontSize: 10, color: '#FF7043', fontWeight: 'bold' },
  footerRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 5 },
  ratingBox: { flexDirection: 'row', alignItems: 'center' },
  ratingText: { fontSize: 12, fontWeight: 'bold', color: '#000', marginLeft: 4 },
  reviewsText: { color: '#94A3B8', fontWeight: 'normal' },
  addBtn: { padding: 2 },
});