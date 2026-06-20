import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export default function SplashScreen({ onNavigate, appMode }) {
  const [showLoginForm, setShowLoginForm] = useState(false);

  return (
    <View style={styles.centeredContent}>
      <Text style={styles.brandLogoLarge}>OnlyCollab.</Text>
      <Text style={styles.splashTagline}>Designed to be deleted. Match with your perfect brand partnership.</Text>
      
      {!showLoginForm ? (
        <View style={styles.fullWidth}>
          <TouchableOpacity style={styles.primaryBtn} onPress={() => onNavigate('account-type')}>
            <Text style={styles.primaryBtnText}>Create New Account (Sign Up)</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.primaryBtn, { backgroundColor: '#27272a', marginTop: 12 }]} onPress={() => setShowLoginForm(true)}>
            <Text style={[styles.primaryBtnText, { color: '#e4e4e7' }]}>Existing Member (Log In)</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.fullWidth}>
          <View style={styles.formGroup}>
            <Text style={styles.label}>Username / Client Email</Text>
            <TextInput style={styles.styledInput} defaultValue={appMode === 'creator' ? 'sarah_fit' : 'marketing@nike.com'} />
          </View>
          <View style={styles.formGroup}>
            <Text style={styles.label}>Password Vault Code</Text>
            <TextInput style={styles.styledInput} defaultValue="123" secureTextEntry />
          </View>
          <TouchableOpacity style={styles.primaryBtn} onPress={() => onNavigate('target-preview')}>
            <Text style={styles.primaryBtnText}>Verify & Enter</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  centeredContent: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 24, backgroundColor: '#09090b' },
  fullWidth: { width: '100%' },
  brandLogoLarge: { fontSize: 32, fontWeight: '900', color: '#f4f4f5', marginBottom: 8 },
  splashTagline: { fontSize: 14, color: '#71717a', textAlign: 'center', marginBottom: 32 },
  label: { fontSize: 11, color: '#a1a1aa', fontWeight: '700', marginBottom: 6 },
  formGroup: { marginBottom: 16, width: '100%' },
  styledInput: { backgroundColor: '#18181b', borderWidth: 1, borderColor: '#27272a', borderRadius: 10, padding: 12, color: 'white', fontSize: 14 },
  primaryBtn: { backgroundColor: '#f43f5e', height: 48, borderRadius: 10, justifyContent: 'center', alignItems: 'center', width: '100%' },
  primaryBtnText: { color: 'white', fontWeight: '700', fontSize: 14 },
});