import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Platform, StatusBar, ScrollView } from 'react-native';

export default function CreatorDetailsScreen({ onNext, onBack }) {
  const [niche, setNiche] = useState('Fitness & Health Athletics');
  const [showNicheDropdown, setShowNicheDropdown] = useState(false);
  
  const [pref, setPref] = useState('Fixed Paid Commercial Payout');
  const [showPrefDropdown, setShowPrefDropdown] = useState(false);

  const [handles, setHandles] = useState(['@sarah_fit']);
  const [budget, setBudget] = useState('₹30,000');

  const nicheOptions = ['Fitness & Health Athletics', 'Fashion & Lookbooks', 'Tech & Gadgets Reviews', 'Lifestyle & Travel'];
  const prefOptions = ['Fixed Paid Commercial Payout', 'Barter / Product Exchange', 'Affiliate / Revenue Split'];

  const addHandleRow = () => {
    setHandles([...handles, '']);
  };

  const updateHandleText = (index, value) => {
    const updated = [...handles];
    updated[index] = value;
    setHandles(updated);
  };

  return (
    <View style={styles.container}>
      {/* Ratio & Notch Safe Header */}
      <View style={styles.headerBar}>
        <TouchableOpacity onPress={onBack} style={styles.backButton} hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}>
          <Text style={styles.backText}>← Back</Text>
        </TouchableOpacity>
        <Text style={styles.logoText}>OnlyCollab.</Text>
        <View style={styles.headerSpacer} />
      </View>

      <ScrollView contentContainerStyle={styles.scrollBody} keyboardShouldPersistTaps="handled">
        <Text style={styles.title}>What describes your creation best?</Text>
        <Text style={styles.subtitle}>
          This feeds our semantic NLP models to align your brand matchmaking profile.
        </Text>

        {/* Primary Content Niche Select Dropdown */}
        <Text style={styles.inputLabel}>PRIMARY CONTENT NICHE</Text>
        <TouchableOpacity style={styles.dropdownSelector} onPress={() => setShowNicheDropdown(!showNicheDropdown)}>
          <Text style={styles.dropdownValue}>{niche}</Text>
          <Text style={styles.dropdownArrow}>∨</Text>
        </TouchableOpacity>
        {showNicheDropdown && (
          <View style={styles.dropdownListBox}>
            {nicheOptions.map((opt) => (
              <TouchableOpacity key={opt} style={styles.dropdownItem} onPress={() => { setNiche(opt); setShowNicheDropdown(false); }}>
                <Text style={styles.dropdownItemText}>{opt}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}

        {/* Dynamic Multi-Input Social Media Handle Matrix */}
        <Text style={[styles.inputLabel, { marginTop: 24 }]}>SOCIAL MEDIA HANDLES</Text>
        {handles.map((value, idx) => (
          <TextInput
            key={idx}
            style={styles.textInput}
            value={value}
            onChangeText={(txt) => updateHandleText(idx, txt)}
            placeholder="@handle"
            placeholderTextColor="#444"
          />
        ))}

        <TouchableOpacity style={styles.addButton} onPress={addHandleRow}>
          <Text style={styles.addButtonText}>+ Add Another Social Handle</Text>
        </TouchableOpacity>

        {/* Collaboration Preference Select Dropdown */}
        <Text style={[styles.inputLabel, { marginTop: 24 }]}>COLLABORATION PREFERENCE</Text>
        <TouchableOpacity style={styles.dropdownSelector} onPress={() => setShowPrefDropdown(!showPrefDropdown)}>
          <Text style={styles.dropdownValue}>{pref}</Text>
          <Text style={styles.dropdownArrow}>∨</Text>
        </TouchableOpacity>
        {showPrefDropdown && (
          <View style={styles.dropdownListBox}>
            {prefOptions.map((opt) => (
              <TouchableOpacity key={opt} style={styles.dropdownItem} onPress={() => { setPref(opt); setShowPrefDropdown(false); }}>
                <Text style={styles.dropdownItemText}>{opt}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}

        {/* Ideal Budget Field */}
        <Text style={[styles.inputLabel, { marginTop: 24 }]}>IDEAL BUDGET TARGET PER CAMPAIGN (INR)</Text>
        <TextInput
          style={styles.textInput}
          value={budget}
          onChangeText={setBudget}
          keyboardType="numeric"
        />
      </ScrollView>

      <TouchableOpacity style={styles.submitButton} onPress={onNext}>
        <Text style={styles.submitButtonText}>Next: Configure Profile</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0F0F11' },
  headerBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: Platform.OS === 'ios' ? 10 : StatusBar.currentHeight + 10,
    height: Platform.OS === 'ios' ? 70 : 80,
  },
  backButton: { paddingVertical: 10, paddingHorizontal: 4 },
  backText: { color: '#E5243F', fontSize: 16, fontWeight: '500' },
  logoText: { color: '#E5243F', fontSize: 18, fontWeight: 'bold' },
  headerSpacer: { width: 50 },
  scrollBody: { paddingHorizontal: 24, paddingTop: 20, paddingBottom: 40 },
  title: { fontSize: 32, fontWeight: 'bold', color: '#FFFFFF', marginBottom: 12 },
  subtitle: { fontSize: 15, color: '#8A8A93', lineHeight: 22, marginBottom: 36 },
  inputLabel: { color: '#4E4E52', fontSize: 12, fontWeight: 'bold', marginBottom: 8, letterSpacing: 0.5 },
  dropdownSelector: { flexDirection: 'row', backgroundColor: '#1C1C1E', padding: 16, borderRadius: 12, borderWidth: 1, borderColor: '#2C2C2E', justifyContent: 'space-between', alignItems: 'center' },
  dropdownValue: { color: '#FFFFFF', fontSize: 16 },
  dropdownArrow: { color: '#FFFFFF', fontSize: 12, fontWeight: 'bold' },
  dropdownListBox: { backgroundColor: '#151517', borderRadius: 12, borderWidth: 1, borderColor: '#2C2C2E', marginTop: 4, paddingVertical: 4 },
  dropdownItem: { padding: 14, borderBottomWidth: 0.5, borderBottomColor: '#222' },
  dropdownItemText: { color: '#FFFFFF', fontSize: 15 },
  textInput: { backgroundColor: '#1C1C1E', color: '#FFFFFF', padding: 16, borderRadius: 12, fontSize: 16, borderWidth: 1, borderColor: '#2C2C2E', marginBottom: 12 },
  addButton: { width: '100%', height: 48, borderRadius: 12, borderWidth: 1.5, borderColor: '#3A3A3C', borderStyle: 'dashed', backgroundColor: '#151517', justifyContent: 'center', alignItems: 'center', marginTop: 4 },
  addButtonText: { color: '#A032E6', fontSize: 14, fontWeight: '600' },
  submitButton: { backgroundColor: '#E5243F', height: 56, borderRadius: 16, justifyContent: 'center', alignItems: 'center', marginHorizontal: 24, marginBottom: Platform.OS === 'ios' ? 34 : 24 },
  submitButtonText: { color: '#FFFFFF', fontSize: 16, fontWeight: 'bold' },
});