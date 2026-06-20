import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';

export default function ActiveChatScreen() {
  const [messages, setMessages] = useState([
    { id: 1, sender: 'brand', text: 'Hey Sarah! Love your fitness profile rows. Are you open to a campaign launch exchange this month?' }
  ]);
  const [inputText, setInputText] = useState('');

  const sendMessage = () => {
    if (!inputText.trim()) return;
    setMessages([...messages, { id: Date.now(), sender: 'creator', text: inputText }]);
    setInputText('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Chat with Nike Marketing ✓</Text>
      </View>

      <ScrollView style={styles.stream} contentContainerStyle={{ gap: 10 }}>
        {messages.map(msg => (
          <View key={msg.id} style={[styles.bubble, msg.sender === 'creator' ? styles.creatorBubble : styles.brandBubble]}>
            <Text style={{ color: 'white', fontSize: 13 }}>{msg.text}</Text>
          </View>
        ))}
      </ScrollView>

      <View style={styles.inputRow}>
        <TextInput style={styles.input} placeholder="Type response guidelines..." placeholderTextColor="#71717a" value={inputText} onChangeText={setInputText} />
        <TouchableOpacity style={styles.sendBtn} onPress={sendMessage}>
          <Text style={{ color: 'white', fontWeight: '700' }}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#09090b' },
  header: { backgroundColor: '#27272a', padding: 16, paddingTop: 40 },
  headerText: { color: 'white', fontWeight: '700', fontSize: 14 },
  stream: { flex: 1, padding: 16 },
  bubble: { padding: 12, borderRadius: 14, maxWidth: '80%' },
  brandBubble: { backgroundColor: '#27272a', alignSelf: 'flex-start' },
  creatorBubble: { backgroundColor: '#b53cd4', alignSelf: 'flex-end' },
  inputRow: { flexDirection: 'row', padding: 12, backgroundColor: '#18181b', alignItems: 'center', gap: 10 },
  input: { flex: 1, color: 'white', fontSize: 13 },
  sendBtn: { backgroundColor: '#b53cd4', paddingVertical: 8, paddingHorizontal: 16, borderRadius: 8 }
});