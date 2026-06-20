import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function BrandRequirementsScreen({ onNext, onBack }) {
  const [niche, setNiche] = useState('Tech & Gadgets');
  const [budget, setBudget] = useState('');

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
        <Text style={styles.title}>Campaign Engine</Text>
        <Text style={styles.subtitle}>Map your target creator specifications and financial allocation blocks.</Text>

        <Text style={styles.label}>Target Creator Niche Keyword</Text>
        <View style={styles.dropdownMock}>
          <Text style={styles.dropdownText}>{niche}</Text>
        </View>

        <Text style={styles.label}>Total Campaign Budget ($)</Text>
        <TextInput
          style={styles.input}
          placeholder="e.g., 5000"
          placeholderTextColor="#666"
          keyboardType="numeric"
          value={budget}
          onChangeText={setBudget}
        />

        <TouchableOpacity style={styles.button} onPress={onNext}>
          <Text style={styles.buttonText}>Lock Specifications</Text>
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
  label: { color: '#8A8A93', fontSize: 14, fontWeight: '600', marginBottom: 8 },
  dropdownMock: { backgroundColor: '#1C1C1E', padding: 16, borderRadius: 12, marginBottom: 20, borderWidth: 1, borderColor: '#2C2C2E' },
  dropdownText: { color: '#FFF', fontSize: 15 },
  input: { backgroundColor: '#1C1C1E', color: '#FFF', padding: 16, borderRadius: 12, marginBottom: 32, borderWidth: 1, borderColor: '#2C2C2E' },
  button: { backgroundColor: '#E5243F', padding: 16, borderRadius: 12, alignItems: 'center' },
  buttonText: { color: '#FFF', fontWeight: 'bold', fontSize: 16 },
});