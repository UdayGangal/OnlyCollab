import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const COLUMN_WIDTH = (width - 50) / 2;

// Fallback high-quality placeholder images
const LOOKBOOK_FALLBACKS = [
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500',
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500',
  'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=500',
  'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=500',
];

export default function UploadVisualsScreen({ onNext }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Visual Lookbook</Text>

      <View style={styles.grid}>
        {LOOKBOOK_FALLBACKS.map((url, index) => (
          <View key={index} style={styles.imageContainer}>
            <Image 
              source={{ uri: url }} 
              style={styles.image} 
              resizeMode="cover" 
            />
          </View>
        ))}
      </View>

      <TouchableOpacity style={styles.button} onPress={onNext}>
        <Text style={styles.buttonText}>Generate Target Preview</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121212', padding: 20, justifyContent: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', color: '#FFF', marginBottom: 20 },
  grid: { flexDirection: 'row', flexWrap: 'wrap', gap: 10, marginBottom: 30, justifyContent: 'center' },
  imageContainer: { width: COLUMN_WIDTH, height: COLUMN_WIDTH, backgroundColor: '#1E1E1E', borderRadius: 8, overflow: 'hidden' },
  image: { width: '100%', height: '100%' },
  button: { backgroundColor: '#FF3B30', padding: 15, borderRadius: 8, alignItems: 'center' },
  buttonText: { color: '#FFF', fontWeight: 'bold', fontSize: 16 },
});