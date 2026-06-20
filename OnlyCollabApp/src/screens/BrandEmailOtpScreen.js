import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function BrandEmailOtpScreen({ onNext, onBack }) {
  const [otp, setOtp] = useState('');
  const [isVerified, setIsVerified] = useState(false);

  const handleVerify = () => {
    // If the user enters a 4-digit code, instantly flag verified and push forward
    if (otp.length === 4) {
      setIsVerified(true);
      onNext(); // ⚡ Fires the 'onNext' route immediately into 'brand-requirements'
    }
  };

  return (
    <View style={styles.container}>
      {/* Top Navigation Bar */}
      <View style={styles.headerBar}>
        <TouchableOpacity onPress={onBack} style={styles.backButton}>
          <Text style={styles.backText}>← Back</Text>
        </TouchableOpacity>
        <Text style={styles.logoText}>OnlyCollab.</Text>
        <View style={styles.headerSpacer} />
      </View>

      {/* Main Form Area */}
      <View style={styles.content}>
        <Text style={styles.title}>Confirm Verification</Text>
        <Text style={styles.subtitle}>
          Enter the 4-digit security key deployed to your workspace domain.
        </Text>

        <View style={styles.otpContainer}>
          <TextInput
            style={styles.otpInput}
            placeholder="0000"
            placeholderTextColor="#444"
            keyboardType="numeric"
            maxLength={4}
            value={otp}
            onChangeText={(text) => {
              setOtp(text);
              // Pro-tip: If they finish typing 4 digits, trigger verification automatically
              if (text.length === 4) {
                setIsVerified(true);
                onNext();
              }
            }}
          />
        </View>

        {isVerified && (
          <View style={styles.alertBox}>
            <Text style={styles.alertText}>✓ Domain Verified</Text>
          </View>
        )}

        <TouchableOpacity style={styles.button} onPress={handleVerify}>
          <Text style={styles.buttonText}>Submit Passcode</Text>
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
    color: '#FFF', 
    marginBottom: 12,
  },
  subtitle: { 
    fontSize: 16, 
    color: '#8A8A93', 
    lineHeight: 22, 
    marginBottom: 40,
  },
  otpContainer: { 
    alignItems: 'center', 
    marginBottom: 32,
  },
  otpInput: { 
    backgroundColor: '#1C1C1E', 
    color: '#FFF', 
    fontSize: 24, 
    letterSpacing: 8, 
    textAlign: 'center', 
    padding: 16, 
    borderRadius: 12, 
    width: 160, 
    borderWidth: 1, 
    borderColor: '#2C2C2E',
  },
  alertBox: { 
    backgroundColor: '#1C3A27', 
    padding: 16, 
    borderRadius: 12, 
    marginBottom: 24, 
    borderWidth: 1, 
    borderColor: '#4CD964', 
    alignItems: 'center',
  },
  alertText: { 
    color: '#4CD964', 
    fontWeight: 'bold', 
    fontSize: 15,
  },
  button: { 
    backgroundColor: '#E5243F', 
    padding: 16, 
    borderRadius: 12, 
    alignItems: 'center',
  },
  buttonText: { 
    color: '#FFF', 
    fontWeight: 'bold', 
    fontSize: 16,
  },
});
