import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import CustomModal from '../components/CustomModal';

export default function BrandPromptsDirectoryScreen({ onUpdateSlot, onBack, slotIndex }) {
  const [activeTab, setActiveTab] = useState('style');
  const [modalVisible, setModalVisible] = useState(false);
  const [modalTitle, setModalTitle] = useState('');

  const briefsData = {
    style: [
      { id: 0, text: '"My content niche in plain English is..."' },
      { id: 1, text: '"What I actually major in vs. what my content says..."' }
    ],
    philosophy: [
      { id: 2, text: '"Dear dream brand, if we collaborated right now we would..."' }
    ]
  };

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

      <View style={styles.tabContainer}>
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'style' && styles.activeTab]} 
          onPress={() => setActiveTab('style')}
        >
          <Text style={[styles.tabText, activeTab === 'style' && styles.activeTabText]}>Content Style</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'philosophy' && styles.activeTab]} 
          onPress={() => setActiveTab('philosophy')}
        >
          <Text style={[styles.tabText, activeTab === 'philosophy' && styles.activeTabText]}>collaboration philosophy</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.listContainer}>
        {briefsData[activeTab].map((item, index) => (
          <TouchableOpacity 
            key={index} 
            style={styles.card} 
            activeOpacity={0.7}
            onPress={() => openConfigModal(item.text)}
          >
            <Text style={styles.cardText}>{item.text}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <CustomModal
        visible={modalVisible}
        title={modalTitle}
        onClose={() => setModalVisible(false)}
        onSave={(text) => {
          // Packs both fields and delivers them directly back up sequence-wise
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
  tabContainer: { flexDirection: 'row', backgroundColor: '#A032E6', padding: 6, height: 64, alignItems: 'center' },
  tab: { flex: 1, height: '100%', justifyContent: 'center', alignItems: 'center', borderRadius: 12 },
  activeTab: { backgroundColor: 'rgba(255, 255, 255, 0.2)' },
  tabText: { color: 'rgba(255, 255, 255, 0.7)', fontWeight: '600', fontSize: 15 },
  activeTabText: { color: '#FFFFFF' },
  listContainer: { flex: 1, paddingHorizontal: 24, paddingTop: 32, gap: 16 },
  card: { backgroundColor: '#1C1C1E', padding: 24, borderRadius: 16, borderWidth: 1, borderColor: '#2C2C2E' },
  cardText: { color: '#FFFFFF', fontSize: 15, fontWeight: 'bold', fontStyle: 'italic' },
});