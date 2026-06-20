import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function PromptsDashboardScreen({ onNext, onBack, slots = [], onSelectSlot }) {
  // Check if at least one prompt has an answer to activate the next button step
  const hasFilledAnyPrompt = slots.some(slot => slot && slot.answer && slot.answer.trim().length > 0);

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

      {/* Main Content Body */}
      <View style={styles.content}>
        <Text style={styles.title}>Complete your story.</Text>
        <Text style={styles.subtitle}>
          Fill up these 3 profile slots with sassy prompts to stand out to premium brands.
        </Text>

        {/* 3 Programmatic Dashed Card Slots */}
        <View style={styles.slotContainer}>
          {[0, 1, 2].map((index) => {
            const currentSlot = slots[index];
            const hasData = currentSlot && currentSlot.answer && currentSlot.answer.trim().length > 0;
            
            return (
              <TouchableOpacity
                key={index}
                style={[styles.slotCard, hasData && styles.slotCardActive]}
                activeOpacity={0.7}
                onPress={() => onSelectSlot(index)} // ⚡ Routes smoothly to Selection Screen
              >
                {hasData ? (
                  // Replicates image_aff8c1.png filled layout rules exactly
                  <View style={styles.filledContentContainer}>
                    <Text style={styles.promptTitleText}>
                      {currentSlot.title.replace(/"/g, '').toUpperCase()}
                    </Text>
                    <Text style={styles.promptAnswerText}>
                      "{currentSlot.answer}"
                    </Text>
                  </View>
                ) : (
                  <Text style={styles.slotCardText}>
                    + Select Prompt {index + 1}
                  </Text>
                )}
              </TouchableOpacity>
            );
          })}
        </View>
      </View>

      {/* Bottom Floating Action CTA Button */}
      <TouchableOpacity 
        style={[styles.nextButton, !hasFilledAnyPrompt && styles.nextButtonDisabled]} 
        onPress={onNext}
        disabled={!hasFilledAnyPrompt}
      >
        <Text style={styles.nextButtonText}>Next: Upload Visuals</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0F0F11' },
  headerBar: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 16, paddingTop: 20, height: 60 },
  backButton: { paddingVertical: 4 },
  backText: { color: '#A0A0A5', fontSize: 16, fontWeight: '500' },
  logoText: { color: '#E5243F', fontSize: 18, fontWeight: 'bold' },
  headerSpacer: { width: 50 },
  content: { flex: 1, paddingHorizontal: 24, paddingTop: 40 },
  title: { fontSize: 32, fontWeight: 'bold', color: '#FFFFFF', marginBottom: 12 },
  subtitle: { fontSize: 15, color: '#8A8A93', lineHeight: 22, marginBottom: 36 },
  slotContainer: { gap: 16 },
  slotCard: {
    width: '100%',
    height: 110,
    borderRadius: 16,
    borderWidth: 1.5,
    borderColor: '#3A3A3C',
    borderStyle: 'dashed',
    backgroundColor: '#151517',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  slotCardActive: {
    borderColor: '#2C2C2E',
    borderStyle: 'solid',
    backgroundColor: '#1C1C1E',
    alignItems: 'flex-start',
  },
  slotCardText: { color: '#A032E6', fontSize: 16, fontWeight: '600' },
  filledContentContainer: { flex: 1, justifyContent: 'center', width: '100%' },
  promptTitleText: {
    color: '#E5243F',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 8,
    letterSpacing: 0.5,
  },
  promptAnswerText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  nextButton: { backgroundColor: '#E5243F', height: 56, borderRadius: 16, justifyIntent: 'center', alignItems: 'center', justifyContent: 'center', marginHorizontal: 24, marginBottom: 24 },
  nextButtonDisabled: { backgroundColor: '#2C2C2E', opacity: 0.6 },
  nextButtonText: { color: '#FFFFFF', fontSize: 16, fontWeight: 'bold' },
});