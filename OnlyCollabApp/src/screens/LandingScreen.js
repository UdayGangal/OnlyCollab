import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function LandingScreen({ onSignup, onLogin }) {
  return (
    <View style={styles.container}>
      <View style={styles.brandContainer}>
        <Text style={styles.logoText}>OnlyCollab.</Text>
        <Text style={styles.tagline}>The Programmatic Creator Engine</Text>
      </View>

      <View style={styles.actionContainer}>
        {/* Changed from onNext to onSignup to match App.js */}
        <TouchableOpacity style={styles.primaryButton} onPress={onSignup}>
          <Text style={styles.primaryButtonText}>Get Started</Text>
        </TouchableOpacity>
        
        <Text style={styles.footerNote}>
          By continuing, you agree to our Smart Escrow Terms.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F0F11',
    padding: 24,
    justifyContent: 'space-between',
  },
  brandContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoText: {
    fontSize: 42,
    fontWeight: '900',
    color: '#FFF',
    letterSpacing: -1,
  },
  tagline: {
    fontSize: 16,
    color: '#666',
    marginTop: 8,
    fontWeight: '500',
  },
  actionContainer: {
    marginBottom: 20,
    gap: 15,
  },
  primaryButton: {
    backgroundColor: '#FF3B30',
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  primaryButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footerNote: {
    color: '#444',
    fontSize: 12,
    textAlign: 'center',
    lineHeight: 16,
  },
});