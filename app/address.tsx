import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { Ionicons, Feather, MaterialCommunityIcons } from '@expo/vector-icons';

const ADDRESS_DATA = [
  {
    id: '1',
    label: 'HOME',
    address: '2464 Royal Ln. Ikeja, Lagos State 45463',
    icon: 'home-outline',
    iconColor: '#0EA5E9',
  },
  {
    id: '2',
    label: 'WORK',
    address: '3891 Ranchview Dr. Ikeja Lagos 62639',
    icon: 'briefcase-outline',
    iconColor: '#7C3AED',
  },
];

export default function MyAddressScreen() {
  const router = useRouter();

  const renderAddressItem = ({ item }: { item: typeof ADDRESS_DATA[0] }) => (
    <View style={styles.addressCard}>
      <View style={styles.iconContainer}>
        <View style={styles.iconCircle}>
          <MaterialCommunityIcons name={item.icon as any} size={24} color={item.iconColor} />
        </View>
      </View>
      
      <View style={styles.textContainer}>
        <View style={styles.cardHeader}>
          <Text style={styles.label}>{item.label}</Text>
          <View style={styles.actionIcons}>
            <TouchableOpacity style={styles.actionBtn}>
              <Feather name="edit-3" size={18} color="#BEE671" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionBtn}>
              <Feather name="trash-2" size={18} color="#BEE671" />
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.addressText}>{item.address}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <Stack.Screen options={{ headerShown: false }} />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
          <Ionicons name="arrow-back" size={24} color="#1E293B" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>My Address</Text>
        <View style={{ width: 24 }} />
      </View>

      <FlatList
        data={ADDRESS_DATA}
        renderItem={renderAddressItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />

      {/* Add New Address Button */}
      <View style={styles.footer}>
        <TouchableOpacity 
          style={styles.addBtn}
          onPress={() => router.push('/product/add-location')}
        >
          <Text style={styles.addBtnText}>ADD NEW ADDRESS</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1E293B',
  },
  backBtn: {
    padding: 5,
  },
  listContent: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  addressCard: {
    flexDirection: 'row',
    backgroundColor: '#F8FAFC', // Subtle blue-grey background
    borderRadius: 20,
    padding: 15,
    marginBottom: 15,
    alignItems: 'center',
  },
  iconContainer: {
    marginRight: 15,
  },
  iconCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#64748B',
    letterSpacing: 0.5,
  },
  actionIcons: {
    flexDirection: 'row',
  },
  actionBtn: {
    marginLeft: 15,
  },
  addressText: {
    fontSize: 13,
    color: '#94A3B8',
    lineHeight: 18,
    width: '90%',
  },
  footer: {
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  addBtn: {
    backgroundColor: '#BEE671', // Brand Lime Green
    height: 55,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addBtnText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});