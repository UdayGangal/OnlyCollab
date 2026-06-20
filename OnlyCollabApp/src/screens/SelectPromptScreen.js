import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import CustomModal from '../components/CustomModal';

export default function SelectPromptScreen({ onUpdateSlot, onBack, slotIndex }) {
  // Infinite prompt scaling grid dictionary configuration 
  const creatorBriefsData = {
    style: [
      { text: '"My content niche in plain English is..."' },
      { text: '"What I actually major in vs. what my content says..."' },
      { text: '"My creative editing signature relies on..."' }
    ],
    philosophy: [
      { text: '"Dear dream brand, if we collaborated right now we would..."' },
      { text: '"I prioritize authenticity over structured brand scripts because..."' }
    ]
  };

  const tabs = Object.keys(creatorBriefsData); 
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalTitle, setModalTitle] = useState('');

  const openConfigModal = (briefText) => {
    setModalTitle(briefText);
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      {/* Header Bar */}
      <View style={styles.headerBar}>
        <TouchableOpacity onPress={onBack} style={styles.backButton}>
          <Text style={styles.backText}>← Back</Text>
        </TouchableOpacity>
        <Text style={styles.logoText}>OnlyCollab.</Text>
        <View style={styles.headerSpacer} />
      </View>

      {/* Dynamic Tab Selector Engine */}
      <View style={styles.tabContainer}>
        {tabs.map((tab) => (
          <TouchableOpacity 
            key={tab}
            style={[styles.tab, activeTab === tab && styles.activeTab]} 
            onPress={() => setActiveTab(tab)}
          >
            <Text style={[styles.tabText, activeTab === tab && styles.activeTabText]}>
              {tab === 'style' ? 'Content Style' : 'collaboration philosophy'}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Scrollable Prompts Stream */}
      <ScrollView contentContainerStyle={styles.listContainer}>
        {creatorBriefsData[activeTab].map((item, index) => (
          <TouchableOpacity 
            key={index} 
            style={styles.card} 
            activeOpacity={0.7}
            onPress={() => openConfigModal(item.text)}
          >
            <Text style={styles.cardText}>{item.text}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Sassy Answer Input Popover */}
      <CustomModal
        visible={modalVisible}
        title={modalTitle}
        onClose={() => setModalVisible(false)}
        onSave={(text) => {
          onUpdateSlot(slotIndex, { title: modalTitle, answer: text });
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0F0F11' },
  headerBar: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16, paddingTop: 20, height: 60, justifyContent: 'space-between' },
  backButton: { paddingVertical: 4 },
  backText: { color: '#A0A0A5', fontSize: 16, fontWeight: '500' },
  logoText: { color: '#E5243F', fontSize: 18, fontWeight: 'bold' },
  headerSpacer: { width: 50 },
  tabContainer: { flexDirection: 'row', backgroundColor: '#A032E6', padding: 6, height: 64, alignItems: 'center', gap: 4 },
  tab: { flex: 1, height: '100%', justifyContent: 'center', alignItems: 'center', borderRadius: 12 },
  activeTab: { backgroundColor: 'rgba(255, 255, 255, 0.2)' },
  tabText: { color: 'rgba(255, 255, 255, 0.7)', fontWeight: '600', fontSize: 14 },
  activeTabText: { color: '#FFFFFF' },
  listContainer: { paddingHorizontal: 24, paddingTop: 32, gap: 16, paddingBottom: 40 },
  card: { backgroundColor: '#1C1C1E', padding: 24, borderRadius: 16, borderWidth: 1, borderColor: '#2C2C2E' },
  cardText: { color: '#FFFFFF', fontSize: 15, fontWeight: 'bold', fontStyle: 'italic' },
});