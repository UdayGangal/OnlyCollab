import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const COLUMN_WIDTH = (width - 58) / 2;

const BRAND_FALLBACKS = [
  'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500',
  'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500',
  'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500',
  'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500',
];

export default function BrandPhotosScreen({ onNext, onBack }) {
  return (
    <View style={styles.container}>
      <View style={styles.headerBar}>
        <TouchableOpacity onPress={onBack} style={styles.backButton}>
          <Text style={styles.backText}>← Back</Text>
        </TouchableOpacity>
        <Text style={styles.logoText}>OnlyCollab.</Text>
        <View style={styles.headerSpacer} />
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Product Lookbook</Text>
        <Text style={styles.subtitle}>Attach lookbook components to your programmatic campaign canvas.</Text>

        <View style={styles.grid}>
          {BRAND_FALLBACKS.map((url, index) => (
            <View key={index} style={styles.imageContainer}>
              <Image source={{ uri: url }} style={styles.image} resizeMode="cover" />
            </View>
          ))}
        </View>

        <TouchableOpacity style={styles.button} onPress={onNext}>
          <Text style={styles.buttonText}>Generate Discovery Preview</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0F0F11' },
  headerBar: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 16, paddingTop: 20, height: 60 },
  backButton: { paddingVertical: 4 },
  backText: { color: '#A0A0A5', fontSize: 16, fontWeight: '500' },
  logoText: { color: '#E5243F', fontSize: 18, fontWeight: 'bold' },
  headerSpacer: { width: 50 },
  content: { flex: 1, paddingHorizontal: 24, paddingTop: 40 },
  title: { fontSize: 32, fontWeight: 'bold', color: '#FFF', marginBottom: 12 },
  subtitle: { fontSize: 16, color: '#8A8A93', lineHeight: 22, marginBottom: 32 },
  grid: { flexDirection: 'row', flexWrap: 'wrap', gap: 10, marginBottom: 40 },
  imageContainer: { width: COLUMN_WIDTH, height: COLUMN_WIDTH, backgroundColor: '#1C1C1E', borderRadius: 16, overflow: 'hidden', borderWidth: 1, borderColor: '#2C2C2E' },
  image: { width: '100%', height: '100%' },
  button: { backgroundColor: '#E5243F', padding: 16, borderRadius: 12, alignItems: 'center' },
  buttonText: { color: '#FFF', fontWeight: 'bold', fontSize: 16 },
});