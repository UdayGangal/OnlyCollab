import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Platform, StatusBar } from 'react-native';

export default function AuthScreen({ onNext, onBack }) {
  const [phone, setPhone] = useState('+91 98765 43210');
  const [otp, setOtp] = useState('');

  return (
    <View style={styles.container}>
      {/* Dynamic Hit-Target Header */}
      <View style={styles.headerBar}>
        <TouchableOpacity onPress={onBack} style={styles.backButton} hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}>
          <Text style={styles.backText}>← Back</Text>
        </TouchableOpacity>
        <Text style={styles.logoText}>OnlyCollab.</Text>
        <View style={styles.headerSpacer} />
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Secure your account</Text>
        <Text style={styles.subtitle}>
          Enter your mobile number to instantly get a validation pass code.
        </Text>

        <Text style={styles.inputLabel}>MOBILE NUMBER</Text>
        <TextInput
          style={styles.textInput}
          value={phone}
          onChangeText={setPhone}
          placeholderTextColor="#444"
          keyboardType="phone-pad"
        />

        <Text style={styles.dividerText}>or securely lock with</Text>

        <TouchableOpacity style={styles.googleButton} activeOpacity={0.8}>
          <Text style={styles.googleIcon}>🌐</Text>
          <Text style={styles.googleButtonText}>Continue with Google</Text>
        </TouchableOpacity>

        <View style={styles.otpBoxContainer}>
          <Text style={styles.otpLabel}>ENTER 4-DIGIT OTP (ANY 4 NUMBERS WORK)</Text>
          <TextInput
            style={styles.otpInput}
            value={otp}
            onChangeText={(text) => {
              setOtp(text);
              if (text.length === 4) onNext();
            }}
            placeholder="• • • •"
            placeholderTextColor="#888"
            keyboardType="numeric"
            maxLength={4}
            textAlign="center"
          />
        </View>
      </View>

      <TouchableOpacity style={styles.submitButton} onPress={onNext}>
        <Text style={styles.submitButtonText}>Verify & Continue</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0F0F11' },
  headerBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: Platform.OS === 'ios' ? 10 : StatusBar.currentHeight + 10,
    height: Platform.OS === 'ios' ? 70 : 80,
  },
  backButton: { paddingVertical: 10, paddingHorizontal: 4 },
  backText: { color: '#A0A0A5', fontSize: 16, fontWeight: '500' },
  logoText: { color: '#E5243F', fontSize: 18, fontWeight: 'bold' },
  headerSpacer: { width: 50 },
  content: { flex: 1, paddingHorizontal: 24, paddingTop: 20 },
  title: { fontSize: 32, fontWeight: 'bold', color: '#FFFFFF', marginBottom: 12 },
  subtitle: { fontSize: 15, color: '#8A8A93', lineHeight: 22, marginBottom: 36 },
  inputLabel: { color: '#4E4E52', fontSize: 12, fontWeight: 'bold', marginBottom: 8, letterSpacing: 0.5 },
  textInput: { backgroundColor: '#1C1C1E', color: '#FFFFFF', padding: 16, borderRadius: 12, fontSize: 16, borderWidth: 1, borderColor: '#2C2C2E', marginBottom: 28 },
  dividerText: { color: '#4E4E52', fontSize: 14, textAlign: 'center', marginBottom: 16 },
  googleButton: { flexDirection: 'row', backgroundColor: '#FFFFFF', height: 52, borderRadius: 12, justifyContent: 'center', alignItems: 'center', marginBottom: 32 },
  googleIcon: { fontSize: 18, marginRight: 8 },
  googleButtonText: { color: '#000000', fontSize: 16, fontWeight: '600' },
  otpBoxContainer: { backgroundColor: '#151517', padding: 20, borderRadius: 16, borderWidth: 1, borderColor: '#222', borderStyle: 'dashed' },
  otpLabel: { color: '#8A8A93', fontSize: 11, fontWeight: 'bold', textAlign: 'center', marginBottom: 12, letterSpacing: 0.5 },
  otpInput: { backgroundColor: '#1C1C1E', color: '#FFFFFF', padding: 16, borderRadius: 12, fontSize: 22, letterSpacing: 4, borderWidth: 1, borderColor: '#2C2C2E' },
  submitButton: { backgroundColor: '#E5243F', height: 56, borderRadius: 16, justifyContent: 'center', alignItems: 'center', marginHorizontal: 24, marginBottom: Platform.OS === 'ios' ? 34 : 24 },
  submitButtonText: { color: '#FFFFFF', fontSize: 16, fontWeight: 'bold' },
});