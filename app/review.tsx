import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { Ionicons, AntDesign, Entypo } from '@expo/vector-icons';

export default function ReviewScreen() {
  const router = useRouter();
  const [rating, setRating] = useState(4); // Default 4 stars as per design
  const [review, setReview] = useState('');

  return (
    <SafeAreaView style={styles.safeArea}>
      <Stack.Screen options={{ headerShown: false }} />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
          <Ionicons name="arrow-back" size={24} color="#1E293B" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Review app</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.content}>
        
        {/* Profile Summary */}
        <View style={styles.profileSummary}>
          <Image 
            source={{ uri: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop' }} 
            style={styles.avatar} 
          />
          <View style={styles.userTextContent}>
            <Text style={styles.userName}>Vishal Khadok</Text>
            <Text style={styles.joinedDate}>Joined 2024</Text>
          </View>
        </View>

        {/* Rating Section */}
        <View style={styles.section}>
          <Text style={styles.sectionLabel}>RATING</Text>
          <View style={styles.starsContainer}>
            {[1, 2, 3, 4, 5].map((star) => (
              <TouchableOpacity 
                key={star} 
                onPress={() => setRating(star)}
                style={styles.starCircle}
              >
                <AntDesign 
                  name="star" 
                  size={20} 
                  color={star <= rating ? "#BEE671" : "#E2E8F0"} 
                />
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Social Links */}
        <View style={styles.section}>
          <Text style={styles.sectionLabel}>FOLLOW US TODAY</Text>
          <View style={styles.socialContainer}>
            <TouchableOpacity style={styles.socialCircle}>
              <Entypo name="facebook-with-circle" size={32} color="#1E293B" />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.socialCircle, styles.socialBorder]}>
              <AntDesign name="instagram" size={24} color="#E1306C" />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.socialCircle, styles.socialBorder]}>
              <AntDesign name="youtube" size={24} color="#FF0000" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Review Input */}
        <View style={styles.section}>
          <Text style={styles.sectionLabel}>Write a Review</Text>
          <TextInput
            style={styles.textArea}
            placeholder=""
            multiline={true}
            numberOfLines={10}
            value={review}
            onChangeText={setReview}
            textAlignVertical="top"
          />
        </View>

        {/* Done Button */}
        <TouchableOpacity 
          style={styles.doneBtn}
          onPress={() => router.back()}
        >
          <Text style={styles.doneBtnText}>DONE</Text>
        </TouchableOpacity>

      </ScrollView>
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
  content: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  profileSummary: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 30,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#F1F5F9',
  },
  userTextContent: {
    marginLeft: 20,
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1E293B',
  },
  joinedDate: {
    fontSize: 14,
    color: '#94A3B8',
    marginTop: 4,
  },
  section: {
    marginBottom: 25,
  },
  sectionLabel: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#334155',
    marginBottom: 15,
  },
  starsContainer: {
    flexDirection: 'row',
    gap: 12,
  },
  starCircle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: '#F1F5F9',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  socialContainer: {
    flexDirection: 'row',
    gap: 20,
  },
  socialCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  socialBorder: {
    borderWidth: 2,
    borderColor: '#BEE671', // Brand green border
  },
  textArea: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    borderRadius: 12,
    padding: 15,
    height: 180,
    fontSize: 16,
    color: '#1E293B',
  },
  doneBtn: {
    backgroundColor: '#BEE671', // Brand lime green
    height: 55,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  doneBtnText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});