import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Heart, Plus, Star } from 'lucide-react-native';

interface ProductProps {
  image: string;
  title: string;
  price: number;
  oldPrice: number;
  discount: string;
  rating: number;
  reviews: number;
  isTopSeller?: boolean;
}

const ProductCard = ({ image, title, price, oldPrice, discount, rating, reviews, isTopSeller }: ProductProps) => {
  return (
    <View style={styles.container}>
      {/* Image Section */}
      <View style={styles.imageContainer}>
        <Image source={{ uri: image }} style={styles.productImage} />
        {isTopSeller && (
          <View style={styles.topSellerBadge}>
            <Text style={styles.badgeText}>Top Seller</Text>
          </View>
        )}
        <TouchableOpacity style={styles.wishlistBtn}>
          <Heart size={18} color="#666" />
        </TouchableOpacity>
      </View>

      {/* Details Section */}
      <View style={styles.details}>
        <Text numberOfLines={2} style={styles.title}>{title}</Text>
        
        <View style={styles.priceRow}>
          <Text style={styles.currentPrice}>₦{price.toLocaleString()}</Text>
          <Text style={styles.oldPrice}>₦{oldPrice.toLocaleString()}</Text>
          <Text style={styles.discountText}>{discount} OFF</Text>
        </View>

        <View style={styles.footer}>
          <View style={styles.ratingBox}>
            <Star size={14} color="#FFA500" fill="#FFA500" />
            <Text style={styles.ratingText}>{rating} ({reviews})</Text>
          </View>
          <TouchableOpacity style={styles.addBtn}>
            <Plus size={20} color="#FFF" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 170,
    backgroundColor: '#fff',
    borderRadius: 12,
    marginRight: 15,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#f0f0f0',
  },
  imageContainer: {
    height: 150,
    backgroundColor: '#F9F9F9',
    position: 'relative',
  },
  productImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  topSellerBadge: {
    position: 'absolute',
    top: 10,
    left: 0,
    backgroundColor: '#FF6B00',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
  },
  badgeText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold',
  },
  wishlistBtn: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#fff',
    padding: 6,
    borderRadius: 20,
    elevation: 2,
  },
  details: {
    padding: 10,
  },
  title: {
    fontSize: 13,
    color: '#333',
    height: 36,
    marginBottom: 8,
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 4,
  },
  currentPrice: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
  },
  oldPrice: {
    fontSize: 11,
    color: '#999',
    textDecorationLine: 'line-through',
  },
  discountText: {
    fontSize: 10,
    color: '#FF6B00',
    fontWeight: '600',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  ratingBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  ratingText: {
    fontSize: 11,
    color: '#666',
  },
  addBtn: {
    backgroundColor: '#A3D65C',
    borderRadius: 20,
    padding: 4,
  },
});

export default ProductCard;