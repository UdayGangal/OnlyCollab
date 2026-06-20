import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function BrandGstinScreen({ onNext, onBack }) {
  const [email, setEmail] = useState('');
  const [gstin, setGstin] = useState('');

  return (
    <View style={styles.container}>
      {/* Top Header Bar */}
      <View style={styles.headerBar}>
        <TouchableOpacity onPress={onBack} style={styles.backButton}>
          <Text style={styles.backText}>← Back</Text>
        </TouchableOpacity>
        <Text style={styles.logoText}>OnlyCollab.</Text>
        <View style={styles.headerSpacer} />
      </View>

      {/* Form Content */}
      <View style={styles.content}>
        <Text style={styles.title}>Corporate KYC</Text>
        <Text style={styles.subtitle}>
          Provide your corporate email and operational identifiers to link your workspace node.
        </Text>

        <Text style={styles.label}>Official Corporate Email</Text>
        <TextInput
          style={styles.input}
          placeholder="e.g., kyc@company.com"
          placeholderTextColor="#666"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
        />

        <Text style={styles.label}>15-Digit GSTIN Filter</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter 15-digit registration ID"
          placeholderTextColor="#666"
          maxLength={15}
          value={gstin}
          onChangeText={setGstin}
          autoCapitalize="characters"
        />

        {/* 
          Your vision: Hook up your Government API validation and domain matcher here.
          Currently passes verification variables directly to the next OTP sequence window.
        */}
        <TouchableOpacity style={styles.button} onPress={onNext}>
          <Text style={styles.buttonText}>Verify Corporate Identity</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#0F0F11',
  },
  headerBar: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between', 
    paddingHorizontal: 16, 
    paddingTop: 20, 
    height: 60,
  },
  backButton: { 
    paddingVertical: 4,
  },
  backText: { 
    color: '#A0A0A5', 
    fontSize: 16, 
    fontWeight: '500',
  },
  logoText: { 
    color: '#E5243F', 
    fontSize: 18, 
    fontWeight: 'bold',
  },
  headerSpacer: { 
    width: 50,
  },
  content: { 
    flex: 1, 
    paddingHorizontal: 24, 
    paddingTop: 40,
  },
  title: { 
    fontSize: 32, 
    fontWeight: 'bold', 
    color: '#FFF', 
    marginBottom: 12,
  },
  subtitle: { 
    fontSize: 16, 
    color: '#8A8A93', 
    lineHeight: 22, 
    marginBottom: 32,
  },
  label: {
    color: '#8A8A93',
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 8,
  },
  input: { 
    backgroundColor: '#1C1C1E', 
    color: '#FFF', 
    padding: 16, 
    borderRadius: 12, 
    marginBottom: 20, 
    borderWidth: 1, 
    borderColor: '#2C2C2E',
    fontSize: 15,
  },
  button: { 
    backgroundColor: '#E5243F', 
    padding: 16, 
    borderRadius: 12, 
    alignItems: 'center', 
    marginTop: 16,
  },
  buttonText: { 
    color: '#FFF', 
    fontWeight: 'bold', 
    fontSize: 16,
  },
});