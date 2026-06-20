import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Platform, StatusBar } from 'react-native';

export default function BasicInfoScreen({ onNext, onBack }) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.headerBar}>
        <TouchableOpacity onPress={onBack} style={styles.backButton} hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}>
          <Text style={styles.backText}>← Back</Text>
        </TouchableOpacity>
        <Text style={styles.logoText}>OnlyCollab.</Text>
        <View style={styles.headerSpacer} />
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Basic Info</Text>
        <Text style={styles.subtitle}>Let premium brands know who you are and secure your portal.</Text>

        <Text style={styles.inputLabel}>FULL NAME</Text>
        <TextInput style={styles.textInput} value={name} onChangeText={setName} placeholder="Sarah Jenkins" placeholderTextColor="#444" />

        <Text style={styles.inputLabel}>AGE</Text>
        <TextInput style={styles.textInput} value={age} onChangeText={setAge} placeholder="24" placeholderTextColor="#444" keyboardType="numeric" />

        <Text style={styles.inputLabel}>CHOOSE USERNAME</Text>
        <TextInput style={styles.textInput} value={username} onChangeText={setUsername} placeholder="sarah_fit" placeholderTextColor="#444" autoCapitalize="none" />

        <Text style={styles.inputLabel}>ACCOUNT PASSWORD</Text>
        <TextInput style={styles.textInput} value={password} onChangeText={setPassword} placeholder="••••••••••••" placeholderTextColor="#444" secureTextEntry={true} autoCapitalize="none" />
      </View>

      <TouchableOpacity 
        style={[styles.submitButton, (!name.trim() || !age.trim() || !username.trim() || !password.trim()) && styles.submitButtonDisabled]} 
        onPress={onNext}
        disabled={!name.trim() || !age.trim() || !username.trim() || !password.trim()}
      >
        <Text style={styles.submitButtonText}>Next: Configure Profile</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0F0F11' },
  headerBar: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 16, paddingTop: Platform.OS === 'ios' ? 10 : StatusBar.currentHeight + 10, height: Platform.OS === 'ios' ? 70 : 80 },
  backButton: { paddingVertical: 10, paddingHorizontal: 4 },
  backText: { color: '#A0A0A5', fontSize: 16, fontWeight: '500' },
  logoText: { color: '#E5243F', fontSize: 18, fontWeight: 'bold' },
  headerSpacer: { width: 50 },
  content: { flex: 1, paddingHorizontal: 24, paddingTop: 10 },
  title: { fontSize: 32, fontWeight: 'bold', color: '#FFFFFF', marginBottom: 6 },
  subtitle: { fontSize: 15, color: '#8A8A93', lineHeight: 22, marginBottom: 24 },
  inputLabel: { color: '#4E4E52', fontSize: 12, fontWeight: 'bold', marginBottom: 6, letterSpacing: 0.5 },
  textInput: { backgroundColor: '#1C1C1E', color: '#FFFFFF', padding: 14, borderRadius: 12, fontSize: 16, borderWidth: 1, borderColor: '#2C2C2E', marginBottom: 14 },
  submitButton: { backgroundColor: '#E5243F', height: 56, borderRadius: 16, justifyContent: 'center', alignItems: 'center', marginHorizontal: 24, marginBottom: Platform.OS === 'ios' ? 34 : 24 },
  submitButtonDisabled: { backgroundColor: '#2C2C2E', opacity: 0.5 },
  submitButtonText: { color: '#FFFFFF', fontSize: 16, fontWeight: 'bold' },
});