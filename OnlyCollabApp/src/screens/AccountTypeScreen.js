import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function AccountTypeScreen({ onSelectMode }) {
  return (
    <View style={styles.screenPadding}>
      <Text style={styles.onboardingTitle}>What brings you to OnlyCollab?</Text>
      <Text style={styles.onboardingSubtitle}>Choose how you want to build value inside the ecosystem.</Text>
      
      <TouchableOpacity style={styles.selectionCard} onPress={() => onSelectMode('brand')}>
        <Text style={styles.cardIcon}>🏢</Text>
        <View style={{ flex: 1 }}>
          <Text style={styles.cardTitle}>I am a Brand</Text>
          <Text style={styles.cardDesc}>Looking for authentic creators to scale my campaigns.</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.selectionCard, { marginTop: 16 }]} onPress={() => onSelectMode('creator')}>
        <Text style={styles.cardIcon}>✨</Text>
        <View style={{ flex: 1 }}>
          <Text style={styles.cardTitle}>I am a Creator</Text>
          <Text style={styles.cardDesc}>Looking to partner with premium brands.</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  screenPadding: { padding: 20, paddingTop: 40, backgroundColor: '#09090b', flex: 1 },
  onboardingTitle: { fontSize: 24, fontWeight: '800', color: '#f4f4f5', marginBottom: 6 },
  onboardingSubtitle: { fontSize: 13, color: '#71717a', marginBottom: 24 },
  selectionCard: { width: '100%', backgroundColor: '#18181b', borderWidth: 1, borderColor: '#27272a', borderRadius: 16, padding: 16, flexDirection: 'row', gap: 16, alignItems: 'center' },
  cardIcon: { fontSize: 24 },
  cardTitle: { fontSize: 15, fontWeight: '700', color: 'white', marginBottom: 4 },
  cardDesc: { fontSize: 12, color: '#71717a', lineHeight: 16 },
});