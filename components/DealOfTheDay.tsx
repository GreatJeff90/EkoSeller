import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, ImageSourcePropType } from 'react-native';

// Updated interface to fix the TypeScript error and use correct image types
interface Product {
  id: string;
  title: string;
  discount: string;
  image: ImageSourcePropType; 
}

const DEALS: Product[] = [
  {
    id: '1',
    title: 'Running Shoes',
    discount: 'Upto 40% OFF',
    // Swapped to URI for instant fix
    image: { uri: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=300' }, 
  },
  {
    id: '2',
    title: 'Sneakers',
    discount: '40-60% OFF',
    image: { uri: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=300' },
  },
  {
    id: '3',
    title: 'Wrist Watches',
    discount: 'Upto 40% OFF',
    image: { uri: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=300' },
  },
  {
    id: '4',
    title: 'Bluetooth Speakers',
    discount: '40-60% OFF',
    image: { uri: 'https://images.unsplash.com/photo-1608156639585-b3a032ef9689?q=80&w=300' },
  },
];

const DealOfTheDay = () => {
  // Timer state for the countdown
  const [timeLeft, setTimeLeft] = useState({ hrs: 11, min: 15, sec: 4 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.sec > 0) return { ...prev, sec: prev.sec - 1 };
        if (prev.min > 0) return { ...prev, min: prev.min - 1, sec: 59 };
        if (prev.hrs > 0) return { hrs: prev.hrs - 1, min: 59, sec: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Corrected render function to fix "Property item does not exist"
  const renderProduct = ({ item }: { item: Product }) => (
    <View style={styles.card}>
      <View style={styles.imageWrapper}>
        <Image source={item.image} style={styles.productImage} resizeMode="contain" />
      </View>
      <Text style={styles.productTitle}>{item.title}</Text>
      <View style={styles.discountBadge}>
        <Text style={styles.discountText}>{item.discount}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.title}>Deal of the day</Text>
        <TouchableOpacity>
          <Text style={styles.viewAll}>View All →</Text>
        </TouchableOpacity>
      </View>

      {/* Countdown Timer Row */}
      <View style={styles.timerRow}>
        <View style={styles.timeBox}>
          <Text style={styles.timeNum}>{timeLeft.hrs}</Text>
          <Text style={styles.timeLabel}>HRS</Text>
        </View>
        <View style={styles.timeBox}>
          <Text style={styles.timeNum}>{timeLeft.min}</Text>
          <Text style={styles.timeLabel}>MIN</Text>
        </View>
        <View style={styles.timeBox}>
          <Text style={styles.timeNum}>{timeLeft.sec < 10 ? `0${timeLeft.sec}` : timeLeft.sec}</Text>
          <Text style={styles.timeLabel}>SEC</Text>
        </View>
      </View>

      {/* Grid of Products */}
      <FlatList
        data={DEALS}
        renderItem={renderProduct}
        keyExtractor={item => item.id}
        numColumns={2}
        scrollEnabled={false}
        columnWrapperStyle={styles.row}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginHorizontal: 15,
    marginVertical: 10,
    borderRadius: 12,
    padding: 15,
    // Add light shadow for elevation
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1A1C1E',
  },
  viewAll: {
    fontSize: 14,
    color: '#7A869A',
    fontWeight: '500',
  },
  timerRow: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  timeBox: {
    backgroundColor: '#E65C5C',
    borderRadius: 4,
    paddingHorizontal: 6,
    paddingVertical: 4,
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 8,
  },
  timeNum: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  timeLabel: {
    color: '#fff',
    fontSize: 9,
    marginLeft: 3,
    fontWeight: '600',
  },
  row: {
    justifyContent: 'space-between',
  },
  card: {
    width: '48%',
    alignItems: 'center',
    marginBottom: 15,
  },
  imageWrapper: {
    width: '100%',
    height: 150,
    backgroundColor: '#F9FAFB',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  productImage: {
    width: '80%',
    height: '80%',
  },
  productTitle: {
    fontSize: 13,
    color: '#444',
    marginTop: 8,
    marginBottom: 6,
    textAlign: 'center',
    fontWeight: '500',
  },
  discountBadge: {
    backgroundColor: '#FFEDED',
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#E65C5C',
  },
  discountText: {
    color: '#E65C5C',
    fontSize: 11,
    fontWeight: '700',
  },
});

export default DealOfTheDay;