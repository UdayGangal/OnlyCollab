import React, { useState, useEffect } from 'react';
import { Modal, View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function CustomModal({ visible, onClose, onSave, title }) {
  const [text, setText] = useState('');

  // Reset the text input whenever a new modal card opens
  useEffect(() => {
    if (visible) setText('');
  }, [visible]);

  const handleSave = () => {
    if (text.trim()) {
      onSave(text);
    }
    onClose();
  };

  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          {/* Prompt Header Bold Text */}
          <Text style={styles.modalTitle}>{title}</Text>
          
          <TextInput
            style={styles.input}
            placeholder="Type your sassy answer here... Don't hold back."
            placeholderTextColor="#666"
            value={text}
            onChangeText={setText}
            multiline
          />
          
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.cancelButton} onPress={onClose}>
              <Text style={styles.cancelButtonText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
              <Text style={styles.saveButtonText}>Save Prompt</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.6)', // Dims the background out like image_b1d5a2.png
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  modalContent: {
    width: '100%',
    backgroundColor: '#1C1C1E',
    borderRadius: 24,
    padding: 24,
    borderWidth: 1,
    borderColor: '#2C2C2E',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: '#FFF',
    marginBottom: 16,
    lineHeight: 24,
  },
  input: {
    backgroundColor: '#121214',
    color: '#FFF',
    borderRadius: 12,
    padding: 16,
    height: 125,
    textAlignVertical: 'top',
    fontSize: 14,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: '#2C2C2E',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 12,
  },
  cancelButton: {
    backgroundColor: '#2C2C2E',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 12,
  },
  cancelButtonText: {
    color: '#A0A0A5',
    fontWeight: '600',
    fontSize: 14,
  },
  saveButton: {
    backgroundColor: '#E5243F', // Hot pink-red match
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 12,
  },
  saveButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 14,
  },
});