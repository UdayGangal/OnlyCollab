import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function RoleSelectionScreen({ onBrand, onCreator, onBack }) {
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

      {/* Main Content */}
      <View style={styles.content}>
        <Text style={styles.title}>What brings you to OnlyCollab?</Text>
        <Text style={styles.subtitle}>
          Choose how you want to build value inside the ecosystem.
        </Text>

        {/* Brand Option Card */}
        <TouchableOpacity style={styles.roleCard} activeOpacity={0.7} onPress={onBrand}>
          <View style={styles.iconContainer}>
            <Text style={styles.iconText}>🏢</Text>
          </View>
          <View style={styles.cardTextContainer}>
            <Text style={styles.cardTitle}>I am a Brand</Text>
            <Text style={styles.cardDescription}>
              Looking for authentic creators to scale my campaigns.
            </Text>
          </View>
        </TouchableOpacity>

        {/* Creator Option Card */}
        <TouchableOpacity style={styles.roleCard} activeOpacity={0.7} onPress={onCreator}>
          <View style={styles.iconContainer}>
            <Text style={styles.iconText}>✨</Text>
          </View>
          <View style={styles.cardTextContainer}>
            <Text style={styles.cardTitle}>I am a Creator</Text>
            <Text style={styles.cardDescription}>
              Looking to partner with premium brands.
            </Text>
          </View>
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
    color: '#FFFFFF',
    lineHeight: 40,
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    color: '#8A8A93',
    lineHeight: 22,
    marginBottom: 40,
  },
  roleCard: {
    flexDirection: 'row',
    backgroundColor: '#1C1C1E',
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#2C2C2E',
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: '#2C2C2E',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  iconText: {
    fontSize: 20,
  },
  cardTextContainer: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  cardDescription: {
    fontSize: 14,
    color: '#8A8A93',
    lineHeight: 18,
  },
});