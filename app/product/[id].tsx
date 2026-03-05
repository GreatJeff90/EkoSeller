import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Dimensions, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';
import ProductCard from '@/components/ProductCard'; 

const { width } = Dimensions.get('window');
const SIZES = ['S', 'M', 'L', 'XL', 'XXL'];

// Mock Data for Recommendations
const RECOMMENDED_PRODUCTS = [
  { id: '101', title: 'Calvin Clein regular fit cotton shirt', price: 62000, oldPrice: 71003, discount: '15%', rating: 4.4, reviews: 412, image: 'https://images.unsplash.com/photo-1596755094514-f87034a26cc1' },
  { id: '102', title: 'US Polo slim fit denim shirt', price: 49000, oldPrice: 51000, discount: '10%', rating: 4.0, reviews: 43, image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a' },
];

export default function ProductDetails() {
  const { id } = useLocalSearchParams(); 
  const [selectedSize, setSelectedSize] = useState('L');
  const [addedToCart, setAddedToCart] = useState(false);

  const handleAddToCart = () => {
    setAddedToCart(true);
    // Success toast auto-hides after 3 seconds
    setTimeout(() => setAddedToCart(false), 3000); 
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header Icons Overlay */}
        <View style={styles.headerOverlay}>
          <TouchableOpacity onPress={() => router.back()} style={styles.iconCircle}>
            <Ionicons name="arrow-back" size={24} color="#333" />
          </TouchableOpacity>
          <View style={styles.rightHeaderIcons}>
            <TouchableOpacity style={styles.iconCircle}><Ionicons name="heart-outline" size={24} color="#333" /></TouchableOpacity>
            <TouchableOpacity style={styles.iconCircle}><Ionicons name="share-social-outline" size={24} color="#333" /></TouchableOpacity>
            <TouchableOpacity style={styles.iconCircle}><Ionicons name="bag-outline" size={24} color="#333" /></TouchableOpacity>
          </View>
        </View>

        {/* Main Product Image */}
        <Image 
          source={{ uri: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=600' }} 
          style={styles.mainImage} 
        />

        <View style={styles.detailsContainer}>
          <Text style={styles.brandName}>Calvin Klein</Text>
          <Text style={styles.productTitle}>Calvin Klein Regular fit slim fit shirt</Text>
          
          <View style={styles.ratingRow}>
            <View style={styles.ratingBadge}>
              <Text style={styles.ratingText}>4.8 ★</Text>
            </View>
            <Text style={styles.reviewCount}>(1730 reviews)</Text>
          </View>

          <View style={styles.priceRow}>
            <Text style={styles.price}>₦35,000</Text>
            <Text style={styles.oldPrice}>₦40,025</Text>
            <Text style={styles.discount}>15% OFF</Text>
            <View style={styles.conditionBadge}>
              <Text style={styles.conditionText}>Used</Text>
              <Ionicons name="shield-checkmark" size={12} color="#A3D65C" />
            </View>
          </View>

          {/* Size Selector */}
          <Text style={styles.sectionLabel}>Size</Text>
          <View style={styles.sizeRow}>
            {SIZES.map(size => (
              <TouchableOpacity 
                key={size} 
                onPress={() => setSelectedSize(size)}
                style={[styles.sizeBox, selectedSize === size && styles.selectedSizeBox]}
              >
                <Text style={[styles.sizeText, selectedSize === size && styles.selectedSizeText]}>{size}</Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Seller Details */}
          <View style={styles.sellerCard}>
            <Image source={{ uri: 'https://i.pravatar.cc/100' }} style={styles.sellerAvatar} />
            <View style={styles.sellerInfo}>
              <Text style={styles.sellerName}>Alexander Banana <Ionicons name="checkmark-circle" size={16} color="#A3D65C" /></Text>
              <Text style={styles.sellerStatus}>Online 12 mins ago</Text>
            </View>
            <TouchableOpacity style={styles.connectBtn}><Text style={styles.connectText}>Connect</Text></TouchableOpacity>
          </View>

          {/* Merchant Stats Section */}
          <View style={styles.merchantStats}>
             <View style={styles.statRow}>
                <Text style={styles.statLabel}>Number of Sales:</Text>
                <Text style={styles.statValue}>10,000 sales</Text>
             </View>
             <View style={styles.statRow}>
                <Text style={styles.statLabel}>Product Quality:</Text>
                <View style={styles.progressBar}><View style={[styles.progress, {width: '85%'}]} /></View>
             </View>
             <View style={styles.statRow}>
                <Text style={styles.statLabel}>Delivery Rate:</Text>
                <View style={styles.progressBar}><View style={[styles.progress, {width: '90%'}]} /></View>
             </View>
             <TouchableOpacity onPress={() => router.push('/merchant-store')}>
                <Text style={styles.viewMerchantLink}>View merchant store {'>'}</Text>
             </TouchableOpacity>
          </View>

          {/* Ratings & Reviews Snippet */}
          <View style={styles.reviewSnippet}>
            <Text style={styles.sectionLabel}>Ratings & Reviews</Text>
            <View style={styles.overallRatingRow}>
              <Text style={styles.bigRating}>4.8<Text style={styles.smallRating}>/5</Text></Text>
              <View>
                <Text style={styles.overallRatingLabel}>Overall Rating</Text>
                <Text style={styles.totalRatingCount}>2,154 Ratings</Text>
              </View>
            </View>

            {/* Featured Individual Review */}
            <View style={styles.individualReview}>
              <View style={styles.starRow}>
                {[1, 2, 3, 4, 5].map((s) => <Ionicons key={s} name="star" size={16} color="#FFB800" />)}
              </View>
              <Text style={styles.reviewHeadline}>Amazing!</Text>
              <Text style={styles.reviewBody}>An amazing fit. I am somewhere around 6ft and ordered 40 size, It's a perfect fit and quality is worth the price...</Text>
              <View style={styles.reviewImages}>
                <Image source={{ uri: 'https://images.unsplash.com/photo-1596755094514-f87034a26cc1' }} style={styles.reviewThumb} />
                <Image source={{ uri: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a' }} style={styles.reviewThumb} />
              </View>
              <Text style={styles.reviewerInfo}>David Johnson, 1st Jan 2024</Text>
            </View>

            <TouchableOpacity style={styles.viewAllReviews}>
              <Text style={styles.viewAllText}>View All 76 Reviews</Text>
              <Ionicons name="chevron-forward" size={18} color="#A3D65C" />
            </TouchableOpacity>
          </View>

          {/* Recommendations Section */}
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>You may like</Text>
            <TouchableOpacity><Text style={styles.viewAllLink}>View All -{'>'}</Text></TouchableOpacity>
          </View>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={RECOMMENDED_PRODUCTS}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <ProductCard {...item} />}
            contentContainerStyle={styles.horizontalList}
          />
        </View>
        <View style={{ height: 120 }} />
      </ScrollView>

      {/* Success Toast */}
      {addedToCart && (
        <View style={styles.toast}>
           <Ionicons name="checkmark-circle" size={18} color="#fff" />
           <Text style={styles.toastText}>Item Added to Cart</Text>
        </View>
      )}

      {/* Sticky Bottom Bar */}
      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.addToCartBtn} onPress={handleAddToCart}>
          <Text style={styles.addToCartText}>Add to cart</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buyNowBtn}>
          <Text style={styles.buyNowText}>Buy Now</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  headerOverlay: { position: 'absolute', top: 20, left: 15, right: 15, zIndex: 10, flexDirection: 'row', justifyContent: 'space-between' },
  rightHeaderIcons: { flexDirection: 'row', gap: 10 },
  iconCircle: { backgroundColor: '#fff', padding: 8, borderRadius: 20, elevation: 2 },
  mainImage: { width: width, height: 450 },
  detailsContainer: { padding: 15 },
  brandName: { color: '#7A869A', fontSize: 14 },
  productTitle: { fontSize: 20, fontWeight: '600', marginVertical: 5 },
  ratingRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 15 },
  ratingBadge: { backgroundColor: '#FFB800', paddingHorizontal: 8, paddingVertical: 2, borderRadius: 4, marginRight: 8 },
  ratingText: { color: '#fff', fontWeight: 'bold' },
  reviewCount: { color: '#7A869A' },
  priceRow: { flexDirection: 'row', alignItems: 'center', gap: 10, marginBottom: 20 },
  price: { fontSize: 22, fontWeight: 'bold' },
  oldPrice: { textDecorationLine: 'line-through', color: '#7A869A' },
  discount: { color: '#E65C5C', fontWeight: 'bold' },
  conditionBadge: { flexDirection: 'row', alignItems: 'center', gap: 4, backgroundColor: '#F0F9EB', padding: 4, borderRadius: 4 },
  conditionText: { color: '#A3D65C', fontWeight: 'bold', fontSize: 12 },
  sectionLabel: { fontSize: 16, fontWeight: 'bold', marginTop: 15, marginBottom: 10 },
  sizeRow: { flexDirection: 'row', gap: 10 },
  sizeBox: { width: 45, height: 45, borderWidth: 1, borderColor: '#eee', justifyContent: 'center', alignItems: 'center', borderRadius: 4 },
  selectedSizeBox: { backgroundColor: '#A3D65C', borderColor: '#A3D65C' },
  sizeText: { fontWeight: '600' },
  selectedSizeText: { color: '#fff' },
  sellerCard: { flexDirection: 'row', alignItems: 'center', padding: 15, backgroundColor: '#F9FAFB', borderRadius: 12, marginTop: 20 },
  sellerAvatar: { width: 50, height: 50, borderRadius: 25 },
  sellerInfo: { flex: 1, marginLeft: 15 },
  sellerName: { fontWeight: 'bold', fontSize: 16 },
  sellerStatus: { color: '#7A869A', fontSize: 12 },
  connectBtn: { borderWidth: 1, borderColor: '#eee', paddingHorizontal: 15, paddingVertical: 8, borderRadius: 8, backgroundColor: '#fff' },
  connectText: { fontWeight: 'bold' },
  
  // Merchant Stats
  merchantStats: { padding: 15, borderTopWidth: 1, borderTopColor: '#f0f0f0' },
  statRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 },
  statLabel: { color: '#333', fontSize: 13 },
  statValue: { fontWeight: 'bold', fontSize: 13 },
  progressBar: { height: 8, width: 100, backgroundColor: '#eee', borderRadius: 4 },
  progress: { height: '100%', backgroundColor: '#A3D65C', borderRadius: 4 },
  viewMerchantLink: { color: '#A3D65C', fontSize: 12, marginTop: 5 },

  // Reviews
  reviewSnippet: { marginTop: 10, borderTopWidth: 1, borderTopColor: '#f0f0f0', paddingTop: 10 },
  overallRatingRow: { flexDirection: 'row', alignItems: 'center', gap: 15, marginVertical: 10 },
  bigRating: { fontSize: 32, fontWeight: 'bold', color: '#333' },
  smallRating: { fontSize: 16, color: '#7A869A' },
  overallRatingLabel: { fontSize: 14, fontWeight: '600', color: '#333' },
  totalRatingCount: { fontSize: 12, color: '#7A869A' },
  individualReview: { paddingVertical: 10 },
  starRow: { flexDirection: 'row', gap: 2, marginBottom: 5 },
  reviewHeadline: { fontWeight: 'bold', fontSize: 15, marginBottom: 5 },
  reviewBody: { color: '#666', fontSize: 13, lineHeight: 18 },
  reviewImages: { flexDirection: 'row', gap: 10, marginVertical: 10 },
  reviewThumb: { width: 60, height: 60, borderRadius: 8 },
  reviewerInfo: { fontSize: 12, color: '#999' },
  viewAllReviews: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10, paddingTop: 15, borderTopWidth: 1, borderTopColor: '#f0f0f0' },
  viewAllText: { color: '#A3D65C', fontWeight: 'bold' },

  // Recommendations
  sectionHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 25, marginBottom: 15 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold' },
  viewAllLink: { color: '#7A869A', fontSize: 12 },
  horizontalList: { paddingRight: 20 },

  // Toast & Bottom Bar
  toast: { position: 'absolute', bottom: 100, alignSelf: 'center', backgroundColor: '#000', flexDirection: 'row', alignItems: 'center', paddingHorizontal: 20, paddingVertical: 12, borderRadius: 8, gap: 10, width: '90%' },
  toastText: { color: '#fff', fontWeight: '600' },
  bottomBar: { position: 'absolute', bottom: 0, flexDirection: 'row', padding: 15, borderTopWidth: 1, borderColor: '#eee', gap: 15, backgroundColor: '#fff', width: '100%' },
  addToCartBtn: { flex: 1, borderWidth: 1, borderColor: '#A3D65C', padding: 15, borderRadius: 8, alignItems: 'center' },
  addToCartText: { color: '#A3D65C', fontWeight: 'bold' },
  buyNowBtn: { flex: 1, backgroundColor: '#A3D65C', padding: 15, borderRadius: 8, alignItems: 'center' },
  buyNowText: { color: '#fff', fontWeight: 'bold' },
});