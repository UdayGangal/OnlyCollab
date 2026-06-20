import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput, Modal } from 'react-native';

export default function BrandTargetPreviewScreen() {
  const [activeTab, setActiveTab] = useState('Discover');
  const [chatMessages, setChatMessages] = useState([
    { id: 1, type: 'system', text: 'System: Dynamic Match Formed via Prompt Matrix.' }
  ]);
  const [escrowModalVisible, setEscrowModalVisible] = useState(false);
  const [disputeModalVisible, setDisputeModalVisible] = useState(false);
  const [sampleMilestone, setSampleMilestone] = useState('Kit Dispatched');

  const [paymentInput, setPaymentInput] = useState('');
  const [disputeInput, setDisputeInput] = useState('');

  const submitEscrow = () => {
    if (paymentInput.trim()) {
      setChatMessages([
        ...chatMessages,
        { id: Date.now(), type: 'escrow-banner', text: `🔒 ESCROW SECURED: $${paymentInput} via Secured Node` }
      ]);
      setPaymentInput('');
      setEscrowModalVisible(false);
    }
  };

  const submitDispute = () => {
    if (disputeInput.trim()) {
      setChatMessages([
        ...chatMessages,
        { id: Date.now(), type: 'system', text: `⚠️ DISPUTE RAISED: "${disputeInput}" under review.` }
      ]);
      setDisputeInput('');
      setDisputeModalVisible(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.mainContent}>
        
        {activeTab === 'Discover' && (
          <View style={styles.discoveryBox}>
            <Text style={styles.cardHeader}>Tech Creator Candidate</Text>
            <Text style={styles.cardSub}>Matching: 98% Compatibility Score</Text>
            <View style={styles.actionRow}>
              <TouchableOpacity style={styles.passBtn}><Text style={styles.btnTxt}>❌ Pass</Text></TouchableOpacity>
              <TouchableOpacity style={styles.connectBtn}><Text style={styles.btnTxt}>❤️ Connect</Text></TouchableOpacity>
            </View>
          </View>
        )}

        {activeTab === 'Messages' && (
          <View style={{ flex: 1, width: '100%' }}>
            <View style={styles.chatHeader}>
              <Text style={styles.chatTitle}>Creator Room</Text>
              <TouchableOpacity onPress={() => setEscrowModalVisible(true)}>
                <Text style={styles.lockIcon}>🔒</Text>
              </TouchableOpacity>
            </View>
            <ScrollView style={styles.chatStream}>
              {chatMessages.map((msg) => (
                <View key={msg.id} style={[
                  msg.type === 'system' && styles.bubbleSys,
                  msg.type === 'escrow-banner' && styles.bubbleEscrow,
                ]}>
                  <Text style={styles.msgText}>{msg.text}</Text>
                </View>
              ))}
            </ScrollView>
            <TouchableOpacity style={styles.disputeTrigger} onPress={() => setDisputeModalVisible(true)}>
              <Text style={styles.disputeTriggerText}>Raise Issue / Flag Assets</Text>
            </TouchableOpacity>
          </View>
        )}

        {activeTab === 'Escrow' && (
          <View style={styles.escrowCard}>
            <Text style={styles.escrowHeader}>Live Shipment Matrix Tracker</Text>
            <View style={styles.milestoneBadge}>
              <Text style={styles.milestoneText}>Status: {sampleMilestone}</Text>
            </View>
            {sampleMilestone === 'Kit Dispatched' && (
              <TouchableOpacity style={styles.updateBtn} onPress={() => setSampleMilestone('Product Testing Active')}>
                <Text style={styles.btnTxt}>Confirm Sample Kit Arrival</Text>
              </TouchableOpacity>
            )}
          </View>
        )}
      </View>

      {/* Navigation Footer */}
      <View style={styles.footerTabs}>
        {['Discover', 'Messages', 'Escrow'].map((tab) => (
          <TouchableOpacity key={tab} style={[styles.tabButton, activeTab === tab && styles.tabActive]} onPress={() => setActiveTab(tab)}>
            <Text style={[styles.tabLabel, activeTab === tab && styles.tabLabelActive]}>{tab}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Escrow Modal Layout Card */}
      <Modal visible={escrowModalVisible} transparent animationType="slide">
        <View style={styles.modalBg}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Lock Escrow Payment</Text>
            <TextInput style={styles.modalInput} placeholder="Enter Budget or CC / UPI Handle" placeholderTextColor="#666" value={paymentInput} onChangeText={setPaymentInput} />
            <View style={styles.modalButtons}>
              <TouchableOpacity onPress={() => setEscrowModalVisible(false)} style={styles.cancelBtn}><Text style={styles.btnTxt}>Cancel</Text></TouchableOpacity>
              <TouchableOpacity onPress={submitEscrow} style={styles.confirmBtn}><Text style={styles.btnTxt}>Lock Funds</Text></TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {/* Dispute Modal Layout Card */}
      <Modal visible={disputeModalVisible} transparent animationType="slide">
        <View style={styles.modalBg}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Flag Campaign Creative Assets</Text>
            <TextInput style={styles.modalInput} placeholder="Reason for dispute flag..." placeholderTextColor="#666" value={disputeInput} onChangeText={setDisputeInput} multiline />
            <View style={styles.modalButtons}>
              <TouchableOpacity onPress={() => setDisputeModalVisible(false)} style={styles.cancelBtn}><Text style={styles.btnTxt}>Cancel</Text></TouchableOpacity>
              <TouchableOpacity onPress={submitDispute} style={styles.disputeConfirmBtn}><Text style={styles.btnTxt}>File Report</Text></TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0F0F11' },
  mainContent: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  discoveryBox: { backgroundColor: '#1C1C1E', width: '100%', padding: 24, borderRadius: 16, borderLeftWidth: 4, borderLeftColor: '#E5243F' },
  cardHeader: { color: '#FFF', fontSize: 20, fontWeight: 'bold', marginBottom: 4 },
  cardSub: { color: '#8A8A93', marginBottom: 24, fontSize: 14 },
  actionRow: { flexDirection: 'row', gap: 12 },
  passBtn: { flex: 1, backgroundColor: '#2C2C2E', padding: 14, borderRadius: 12, alignItems: 'center' },
  connectBtn: { flex: 1, backgroundColor: '#E5243F', padding: 14, borderRadius: 12, alignItems: 'center' },
  btnTxt: { color: '#FFF', fontWeight: 'bold' },
  chatHeader: { flexDirection: 'row', justifyContent: 'space-between', width: '100%', paddingBottom: 16, borderBottomWidth: 1, borderBottomColor: '#2C2C2E', alignItems: 'center', marginTop: 40 },
  chatTitle: { color: '#FFF', fontSize: 18, fontWeight: 'bold' },
  lockIcon: { fontSize: 22 },
  chatStream: { flex: 1, width: '100%', marginTop: 16 },
  bubbleSys: { backgroundColor: '#1C1C1E', padding: 12, borderRadius: 12, marginBottom: 12, alignSelf: 'flex-start', borderWidth: 1, borderColor: '#2C2C2E' },
  bubbleEscrow: { backgroundColor: '#A032E6', padding: 14, borderRadius: 12, marginBottom: 12, width: '100%', alignItems: 'center' },
  msgText: { color: '#FFF', fontSize: 14, fontWeight: '500' },
  disputeTrigger: { width: '100%', padding: 14, alignItems: 'center', marginBottom: 10 },
  disputeTriggerText: { color: '#FF3B30', fontWeight: 'bold', fontSize: 14 },
  escrowCard: { backgroundColor: '#1C1C1E', width: '100%', padding: 24, borderRadius: 16, alignItems: 'center', borderWidth: 1, borderColor: '#2C2C2E' },
  escrowHeader: { color: '#FFF', fontSize: 16, fontWeight: 'bold', marginBottom: 16 },
  milestoneBadge: { backgroundColor: '#221515', paddingVertical: 8, paddingHorizontal: 16, borderRadius: 20, borderWidth: 1, borderColor: '#E5243F', marginBottom: 24 },
  milestoneText: { color: '#E5243F', fontWeight: 'bold', fontSize: 13 },
  updateBtn: { backgroundColor: '#E5243F', paddingVertical: 14, paddingHorizontal: 24, borderRadius: 12, width: '100%', alignItems: 'center' },
  footerTabs: { flexDirection: 'row', height: 72, backgroundColor: '#1C1C1E', borderTopWidth: 1, borderTopColor: '#2C2C2E' },
  tabButton: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  tabActive: { borderTopWidth: 2, borderTopColor: '#E5243F' },
  tabLabel: { color: '#666', fontSize: 12, fontWeight: '600' },
  tabLabelActive: { color: '#FFF' },
  modalBg: { flex: 1, backgroundColor: 'rgba(0,0,0,0.7)', justifyContent: 'center', padding: 24 },
  modalContent: { backgroundColor: '#1C1C1E', borderRadius: 24, padding: 24, borderWidth: 1, borderColor: '#2C2C2E' },
  modalTitle: { color: '#FFF', fontSize: 18, fontWeight: 'bold', marginBottom: 16 },
  modalInput: { backgroundColor: '#0F0F11', color: '#FFF', padding: 14, borderRadius: 12, marginBottom: 20, borderWidth: 1, borderColor: '#2C2C2E' },
  modalButtons: { flexDirection: 'row', justifyContent: 'flex-end', gap: 10 },
  cancelBtn: { backgroundColor: '#2C2C2E', padding: 12, borderRadius: 10, paddingHorizontal: 16 },
  confirmBtn: { backgroundColor: '#A032E6', padding: 12, borderRadius: 10, paddingHorizontal: 16 },
  disputeConfirmBtn: { backgroundColor: '#FF3B30', padding: 12, borderRadius: 10, paddingHorizontal: 16 }
});