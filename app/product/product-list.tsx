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
import { Ionicons, FontAwesome } from '@expo/vector-icons';

const { width } = Dimensions.get('window');
const COLUMN_WIDTH = (width - 40) / 2;

// Mock data based on UI reference
const PRODUCTS = [
  {
    id: '1',
    name: 'Allen Solly Regular fit cotton shirt',
    price: 'N35,000',
    oldPrice: 'N40,025',
    discount: '15% OFF',
    rating: '4.8',
    reviews: '785',
    isTrending: true,
    image: 'https://images.unsplash.com/photo-1589310243389-96a5483213a8?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: '2',
    name: 'Calvin Clein Regular fit slim fit shirt',
    price: 'N52,00',
    oldPrice: 'N62,004',
    discount: '20% OFF',
    rating: '4.8',
    reviews: '785',
    isTrending: false,
    image: 'https://images.unsplash.com/photo-1589310243389-96a5483213a8?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: '3',
    name: 'H&M Regular fit cotton shirt',
    price: 'N59,000',
    oldPrice: 'N70,008',
    discount: '20% OFF',
    rating: '4.8',
    reviews: '785',
    isTrending: false,
    image: 'https://images.unsplash.com/photo-1589310243389-96a5483213a8?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: '4',
    name: 'Calvin Clein Regular fit casual shirt',
    price: 'N60,000',
    oldPrice: 'N75,000',
    discount: '25% OFF',
    rating: '4.8',
    reviews: '785',
    isTrending: true,
    image: 'https://images.unsplash.com/photo-1589310243389-96a5483213a8?q=80&w=400&auto=format&fit=crop',
  },
];

export default function ProductListScreen() {
  const router = useRouter();

  const renderHeader = () => (
    <View style={styles.profileSection}>
      <View style={styles.avatarContainer}>
        <Image
          source={{ uri: 'https://randomuser.me/api/portraits/men/32.jpg' }}
          style={styles.avatar}
        />
        <View style={styles.verifiedBadge}>
          <Ionicons name="checkmark-circle" size={18} color="#8BC34A" />
        </View>
      </View>
      
      <View style={styles.nameRow}>
        <Text style={styles.sellerName}>Alexander Ikemma</Text>
        <Ionicons name="checkmark-circle" size={16} color="#BEE671" />
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.statRow}>
          <Text style={styles.statLabel}>Number of Sales:</Text>
          <Text style={styles.statValue}>10,000 sales</Text>
        </View>

        <View style={styles.statRow}>
          <Text style={styles.statLabel}>Product Quality:</Text>
          <View style={styles.progressBarBg}>
            <View style={[styles.progressBarFill, { width: '88%' }]} />
            <Text style={styles.progressText}>88%</Text>
          </View>
        </View>

        <View style={styles.statRow}>
          <Text style={styles.statLabel}>Delivery Rate:</Text>
          <View style={styles.progressBarBg}>
            <View style={[styles.progressBarFill, { width: '86%' }]} />
            <Text style={styles.progressText}>86%</Text>
          </View>
        </View>
      </View>

      <Text style={styles.listTitle}>Product List:</Text>
    </View>
  );

  const renderProduct = ({ item }: { item: typeof PRODUCTS[0] }) => (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: item.image }} style={styles.productImage} />
        {item.isTrending && (
          <View style={styles.trendingBadge}>
            <Text style={styles.trendingText}>Trending</Text>
          </View>
        )}
      </View>
      
      <Text style={styles.productName} numberOfLines={2}>{item.name}</Text>
      
      <View style={styles.priceRow}>
        <Text style={styles.currentPrice}>{item.price}</Text>
        <Text style={styles.oldPrice}>{item.oldPrice}</Text>
        <Text style={styles.discountText}>{item.discount}</Text>
      </View>

      <View style={styles.footerRow}>
        <View style={styles.ratingRow}>
          <FontAwesome name="star" size={12} color="#FFA000" />
          <Text style={styles.ratingValue}>{item.rating} <Text style={styles.reviewCount}>({item.reviews})</Text></Text>
        </View>
        <TouchableOpacity style={styles.deleteButton}>
          <Ionicons name="close-circle" size={24} color="#E53935" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      
      {/* Header Bar */}
      <View style={styles.topHeader}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.topHeaderTitle}>My Product List</Text>
        <TouchableOpacity>
          <Ionicons name="search" size={24} color="#333" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={PRODUCTS}
        renderItem={renderProduct}
        keyExtractor={(item) => item.id}
        numColumns={2}
        ListHeaderComponent={renderHeader}
        contentContainerStyle={styles.listContent}
        columnWrapperStyle={styles.columnWrapper}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  verifiedBadge: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#FFF',
    borderRadius: 10,
  },
  topHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  topHeaderTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  listContent: {
    paddingHorizontal: 15,
    paddingBottom: 20,
  },
  profileSection: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  avatarContainer: {
    position: 'relative',
    marginBottom: 10,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  nameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    marginBottom: 15,
  },
  sellerName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  statsContainer: {
    width: '100%',
    gap: 12,
  },
  statRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  statLabel: {
    fontSize: 14,
    color: '#333',
    fontWeight: '500',
  },
  statValue: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
  },
  progressBarBg: {
    width: 100,
    height: 14,
    backgroundColor: '#E0E0E0',
    borderRadius: 7,
    position: 'relative',
    justifyContent: 'center',
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: '#BEE671', // Reference color
    borderRadius: 7,
  },
  progressText: {
    position: 'absolute',
    alignSelf: 'center',
    fontSize: 9,
    fontWeight: 'bold',
    color: '#FFF',
  },
  listTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    alignSelf: 'flex-start',
    marginTop: 25,
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
  card: {
    width: COLUMN_WIDTH,
    marginBottom: 20,
  },
  imageContainer: {
    width: '100%',
    aspectRatio: 1,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#F5F5F5',
    marginBottom: 8,
  },
  productImage: {
    width: '100%',
    height: '100%',
  },
  trendingBadge: {
    position: 'absolute',
    top: 8,
    left: 8,
    backgroundColor: '#26A69A',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  trendingText: {
    color: '#FFF',
    fontSize: 10,
    fontWeight: 'bold',
  },
  productName: {
    fontSize: 13,
    color: '#333',
    lineHeight: 18,
    marginBottom: 4,
  },
  priceRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    gap: 5,
    marginBottom: 4,
  },
  currentPrice: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
  },
  oldPrice: {
    fontSize: 11,
    color: '#9E9E9E',
    textDecorationLine: 'line-through',
  },
  discountText: {
    fontSize: 11,
    color: '#FF7043',
    fontWeight: 'bold',
  },
  footerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  ratingValue: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#333',
  },
  reviewCount: {
    color: '#9E9E9E',
    fontWeight: 'normal',
  },
  deleteButton: {
    padding: 2,
  },
});