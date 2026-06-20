import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';

export default function FaceVerifyScreen({ onNext }) {
  const [status, setStatus] = useState('Initializing...');

  useEffect(() => {
    const steps = [
      { text: 'Face detected', delay: 1000 },
      { text: 'Look Left', delay: 2000 },
      { text: 'Look Right', delay: 3000 },
      { text: 'Look Straight', delay: 4000 },
      { text: 'Identity Verified', delay: 4500 },
    ];

    const timers = steps.map((step) => 
      setTimeout(() => setStatus(step.text), step.delay)
    );

    const autoAdvance = setTimeout(() => {
      onNext();
    }, 5500);

    return () => {
      timers.forEach(clearTimeout);
      clearTimeout(autoAdvance);
    };
  }, [onNext]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Biometric Liveness Verification</Text>
      <View style={styles.cameraCircle}>
        <ActivityIndicator size="large" color="#FF3B30" />
      </View>
      <Text style={styles.statusText}>{status}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121212', padding: 20, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 20, fontWeight: 'bold', color: '#FFF', marginBottom: 40, textAlign: 'center' },
  cameraCircle: { width: 200, height: 200, borderRadius: 100, borderWidth: 2, borderColor: '#FF3B30', justifyContent: 'center', alignItems: 'center', backgroundColor: '#1E1E1E', marginBottom: 30 },
  statusText: { color: '#FFF', fontSize: 18, fontWeight: '600', letterSpacing: 0.5 },
});