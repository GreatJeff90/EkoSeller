import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ImageBackground,
  Dimensions,
  ScrollView,
} from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { Ionicons, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

// Status data for the timeline
const ORDER_STATUS = [
  { id: '1', title: 'Your order has been received', completed: true, active: false },
  { id: '2', title: 'The Supermarket is Preparing your Order', completed: false, active: true },
  { id: '3', title: 'Your order has been picked up for delivery', completed: false, active: false },
  { id: '4', title: 'Order arriving soon!', completed: false, active: false },
];

export default function TrackOrderScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />

      {/* Header Bar */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#334155" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Track my Order</Text>
        <View style={{ width: 40 }} />
      </View>

      {/* Map Content Area */}
      <View style={styles.mapContainer}>
        <ImageBackground
          source={{ uri: 'https://api.mapbox.com/styles/v1/mapbox/light-v10/static/-122.44,37.76,12/800x800?access_token=MAP_TOKEN' }}
          style={styles.mapImage}
          resizeMode="cover"
        >
          <View style={styles.routeOverlay}>
            <View style={styles.startPoint} />
            <View style={styles.pathLine} />
            <View style={styles.markerContainer}>
              <View style={styles.markerRedCircle}>
                <Ionicons name="location" size={26} color="#BEE671" />
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>

      {/* Expanded Bottom Sheet with Timeline */}
      <View style={styles.bottomSheet}>
        <View style={styles.handle} />
        
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.sheetContent}>
          <View style={styles.timeSection}>
            <Text style={styles.timeValue}>11 hours</Text>
            <Text style={styles.timeLabel}>ESTIMATED DELIVERY TIME</Text>
          </View>

          {/* Order Status Timeline */}
          <View style={styles.timelineContainer}>
            {ORDER_STATUS.map((status, index) => (
              <View key={status.id} style={styles.statusRow}>
                {/* Left Side: Timeline Line and Icons */}
                <View style={styles.indicatorColumn}>
                  <View style={[
                    styles.statusIcon, 
                    status.completed && styles.iconCompleted,
                    status.active && styles.iconActive,
                    !status.completed && !status.active && styles.iconPending
                  ]}>
                    {status.completed && <Ionicons name="checkmark" size={14} color="#FFF" />}
                    {status.active && <FontAwesome5 name="spinner" size={10} color="#BEE671" />}
                    {!status.completed && !status.active && <Ionicons name="checkmark" size={14} color="#FFF" />}
                  </View>
                  {index !== ORDER_STATUS.length - 1 && (
                    <View style={[styles.timelineLine, status.completed && styles.lineCompleted]} />
                  )}
                </View>

                {/* Right Side: Status Text */}
                <View style={styles.statusTextContainer}>
                  <Text style={[
                    styles.statusText, 
                    status.completed && styles.textCompleted,
                    status.active && styles.textActive,
                    !status.completed && !status.active && styles.textPending
                  ]}>
                    {status.title}
                  </Text>
                </View>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF' },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#FFF',
  },
  headerTitle: { fontSize: 18, fontWeight: 'bold', color: '#1E293B' },
  backButton: { padding: 5 },
  mapContainer: { flex: 1 },
  mapImage: { width: '100%', height: '100%', backgroundColor: '#E2E8F0' },
  routeOverlay: { flex: 1 },
  startPoint: {
    position: 'absolute',
    top: '30%',
    right: '25%',
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#FFF',
    borderWidth: 2,
    borderColor: '#FF8A00',
  },
  pathLine: {
    position: 'absolute',
    top: '32%',
    right: '28%',
    width: 150,
    height: 120,
    borderTopWidth: 4,
    borderLeftWidth: 4,
    borderColor: '#FF8A00',
    borderTopLeftRadius: 80,
    transform: [{ rotate: '-10deg' }],
  },
  markerContainer: { position: 'absolute', bottom: '30%', left: '25%' },
  markerRedCircle: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: '#EF4444',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomSheet: {
    backgroundColor: '#FFF',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 15,
    position: 'absolute',
    bottom: 0,
    width: width,
    height: '55%', // Increased height for timeline
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -5 },
    shadowOpacity: 0.1,
    elevation: 10,
  },
  handle: {
    width: 50,
    height: 5,
    borderRadius: 3,
    backgroundColor: '#E2E8F0',
    alignSelf: 'center',
    marginBottom: 15,
  },
  sheetContent: { paddingHorizontal: 25 },
  timeSection: { alignItems: 'center', marginBottom: 30 },
  timeValue: { fontSize: 32, fontWeight: 'bold', color: '#000' },
  timeLabel: { fontSize: 12, color: '#94A3B8', letterSpacing: 1 },
  
  // Timeline Styles
  timelineContainer: { marginTop: 10 },
  statusRow: { flexDirection: 'row', height: 60 },
  indicatorColumn: { alignItems: 'center', width: 30, marginRight: 15 },
  statusIcon: {
    width: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
  },
  iconCompleted: { backgroundColor: '#BEE671' },
  iconActive: { backgroundColor: '#FFF', borderWidth: 1, borderColor: '#BEE671' },
  iconPending: { backgroundColor: '#CBD5E1' },
  timelineLine: {
    width: 2,
    flex: 1,
    backgroundColor: '#E2E8F0',
    marginVertical: -2,
  },
  lineCompleted: { backgroundColor: '#BEE671' },
  statusTextContainer: { flex: 1, justifyContent: 'flex-start', paddingTop: 2 },
  statusText: { fontSize: 14, fontWeight: '500' },
  textCompleted: { color: '#BEE671' },
  textActive: { color: '#94A3B8' },
  textPending: { color: '#94A3B8' },
});