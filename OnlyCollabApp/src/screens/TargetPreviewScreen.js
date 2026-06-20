import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

export default function TargetPreviewScreen() {
  const [activeTab, setActiveTab] = useState('Discover');

  return (
    <View style={styles.container}>
      {/* Content Stream Engine */}
      <View style={styles.mainStream}>
        {activeTab === 'Discover' && (
          <View style={styles.discoveryCard}>
            <Text style={styles.cardHeader}>Match Candidate Matrix</Text>
            <Text style={styles.cardBody}>Swipe Capability Active. Ready to assign programmatic smart escrow agreements.</Text>
          </View>
        )}

        {activeTab === 'Messages' && (
          <ScrollView style={styles.chatStream}>
            <View style={styles.chatBubbleSystem}>
              <Text style={styles.chatText}>System: Match generated successfully.</Text>
            </View>
            <View style={styles.chatBubbleUser}>
              <Text style={styles.chatText}>Let's start collaborating on the next content batch.</Text>
            </View>
          </ScrollView>
        )}

        {activeTab === 'Escrow' && (
          <View style={styles.escrowContainer}>
            <Text style={styles.escrowTitle}>Active Milestone Ledger</Text>
            <Text style={styles.escrowValue}>Secured: $2,500.00 USD</Text>
          </View>
        )}
      </View>

      {/* Footer Interactive Navigation Bar */}
      <View style={styles.footerTabs}>
        {['Discover', 'Messages', 'Escrow'].map((tab) => (
          <TouchableOpacity
            key={tab}
            style={[styles.tabButton, activeTab === tab && styles.tabButtonActive]}
            onPress={() => setActiveTab(tab)}
          >
            <Text style={[styles.tabLabel, activeTab === tab && styles.tabLabelActive]}>
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121212' },
  mainStream: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  discoveryCard: { backgroundColor: '#1E1E1E', width: '100%', padding: 30, borderRadius: 12, borderLeftWidth: 4, borderLeftColor: '#FF3B30' },
  cardHeader: { color: '#FFF', fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
  cardBody: { color: '#AAA', lineHeight: 20 },
  chatStream: { width: '100%', marginTop: 40 },
  chatBubbleSystem: { backgroundColor: '#1E1E1E', padding: 12, borderRadius: 8, marginBottom: 10, alignSelf: 'flex-start' },
  chatBubbleUser: { backgroundColor: '#FF3B30', padding: 12, borderRadius: 8, marginBottom: 10, alignSelf: 'flex-end' },
  chatText: { color: '#FFF' },
  escrowContainer: { backgroundColor: '#1E1E1E', padding: 25, borderRadius: 12, alignItems: 'center', width: '100%' },
  escrowTitle: { color: '#666', fontSize: 14, fontWeight: 'bold', marginBottom: 5 },
  escrowValue: { color: '#4CD964', fontSize: 24, fontWeight: 'bold' },
  footerTabs: { flexDirection: 'row', height: 70, backgroundColor: '#1E1E1E', borderTopWidth: 1, borderTopColor: '#2A2A2A' },
  tabButton: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  tabButtonActive: { borderTopWidth: 2, borderTopColor: '#FF3B30' },
  tabLabel: { color: '#666', fontSize: 12, fontWeight: '600' },
  tabLabelActive: { color: '#FFF' },
});