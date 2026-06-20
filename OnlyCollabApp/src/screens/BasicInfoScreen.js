import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function BasicInfoScreen({ onNext }) {
  const [form, setForm] = useState({ name: '', age: '', location: '' });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Basic Info</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Name"
        placeholderTextColor="#666"
        value={form.name}
        onChangeText={(val) => setForm({ ...form, name: val })}
      />
      <TextInput
        style={styles.input}
        placeholder="Age"
        placeholderTextColor="#666"
        keyboardType="numeric"
        value={form.age}
        onChangeText={(val) => setForm({ ...form, age: val })}
      />
      <TextInput
        style={styles.input}
        placeholder="Location"
        placeholderTextColor="#666"
        value={form.location}
        onChangeText={(val) => setForm({ ...form, location: val })}
      />

      <TouchableOpacity style={styles.button} onPress={onNext}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0F0F11', padding: 24, justifyContent: 'center' },
  title: { fontSize: 32, fontWeight: 'bold', color: '#FFF', marginBottom: 24 },
  input: { backgroundColor: '#1C1C1E', color: '#FFF', padding: 16, borderRadius: 12, marginBottom: 16, borderWidth: 1, borderColor: '#2C2C2E' },
  button: { backgroundColor: '#FF3B30', padding: 16, borderRadius: 12, alignItems: 'center', marginTop: 8 },
  buttonText: { color: '#FFF', fontWeight: 'bold', fontSize: 16 },
});