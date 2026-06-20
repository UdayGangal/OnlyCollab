import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, StatusBar, View, Text } from 'react-native';

// Entry Core Screens
import LandingScreen from './src/screens/LandingScreen';
import RoleSelectionScreen from './src/screens/RoleSelectionScreen';

// Workspace Track A: Content Creator Screens
import AuthScreen from './src/screens/AuthScreen';
import FaceVerifyScreen from './src/screens/FaceVerifyScreen';
import BasicInfoScreen from './src/screens/BasicInfoScreen'; // Username + Password Box
import CreatorDetailsScreen from './src/screens/CreatorDetailsScreen'; // Profile parameters + Location
import PromptsDashboardScreen from './src/screens/PromptsDashboardScreen';
import SelectPromptScreen from './src/screens/SelectPromptScreen';
import UploadVisualsScreen from './src/screens/UploadVisualsScreen';
import TargetPreviewScreen from './src/screens/TargetPreviewScreen';

// Workspace Track B: Brand / Agency Screens
import BrandNameRegScreen from './src/screens/BrandNameRegScreen';
import BrandGstinScreen from './src/screens/BrandGstinScreen';
import BrandEmailOtpScreen from './src/screens/BrandEmailOtpScreen';
import BrandRequirementsScreen from './src/screens/BrandRequirementsScreen';
import BrandSlotsScreen from './src/screens/BrandSlotsScreen';
import BrandPromptsDirectoryScreen from './src/screens/BrandPromptsDirectoryScreen';
import BrandPhotosScreen from './src/screens/BrandPhotosScreen';
import BrandTargetPreviewScreen from './src/screens/BrandTargetPreviewScreen';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('landing');
  const [userRole, setUserRole] = useState(null);
  const [activeCreatorSlotIndex, setActiveCreatorSlotIndex] = useState(0);
  const [activeBrandSlotIndex, setActiveBrandSlotIndex] = useState(0);

  const [creatorSlots, setCreatorSlots] = useState([
    { title: '', answer: '' },
    { title: '', answer: '' },
    { title: '', answer: '' }
  ]);
  
  const [brandSlots, setBrandSlots] = useState([
    { title: '', answer: '' },
    { title: '', answer: '' },
    { title: '', answer: '' }
  ]);

  const updateCreatorSlot = (index, dataObject) => {
    const updated = [...creatorSlots];
    updated[index] = dataObject; 
    setCreatorSlots(updated);
  };

  const updateBrandSlot = (index, dataObject) => {
    const updated = [...brandSlots];
    updated[index] = dataObject; 
    setBrandSlots(updated);
  };

  const navigateTo = (screenKey) => {
    console.log(`Maps → ${screenKey}`);
    setCurrentScreen(screenKey);
  };

  const renderScreen = () => {
    switch (currentScreen) {
      /* ==================== GATEWAY ROUTING ==================== */
      case 'landing':
        return (
          <LandingScreen
            onSignup={() => navigateTo('role-selection')}
            onLogin={() => navigateTo('auth')}
          />
        );

      case 'role-selection':
        return (
          <RoleSelectionScreen
            onBrand={() => {
              setUserRole('brand');
              navigateTo('brand-name-reg');
            }}
            onCreator={() => {
              setUserRole('creator');
              navigateTo('auth'); // ⚡ Goes straight to OTP screen first
            }}
            onBack={() => navigateTo('landing')}
          />
        );

      /* ==================== WORKSPACE TRACK A: REWIRED CREATOR FLOW ==================== */
      case 'auth':
        return <AuthScreen onNext={() => navigateTo('face-verify')} onBack={() => navigateTo('role-selection')} />;
      
      case 'face-verify':
        return <FaceVerifyScreen onNext={() => navigateTo('basic-info')} onBack={() => navigateTo('auth')} />;
      
      case 'basic-info':
        // ⚡ Collects Username + Password post-verification
        return <BasicInfoScreen onNext={() => navigateTo('creator-details')} onBack={() => navigateTo('face-verify')} />;
      
      case 'creator-details':
        // ⚡ Collects Profile Info + City/Location
        return <CreatorDetailsScreen onNext={() => navigateTo('prompts-dashboard')} onBack={() => navigateTo('basic-info')} />;
      
      case 'prompts-dashboard':
        return (
          <PromptsDashboardScreen
            slots={creatorSlots}
            onSelectSlot={(index) => {
              setActiveCreatorSlotIndex(index);
              navigateTo('select-prompt-screen');
            }}
            onNext={() => navigateTo('upload-visuals')}
            onBack={() => navigateTo('creator-details')}
          />
        );
        
      case 'select-prompt-screen':
        return (
          <SelectPromptScreen
            slotIndex={activeCreatorSlotIndex}
            onUpdateSlot={(index, data) => {
              updateCreatorSlot(index, data);
              navigateTo('prompts-dashboard');
            }}
            onBack={() => navigateTo('prompts-dashboard')}
          />
        );
        
      case 'upload-visuals':
        return <UploadVisualsScreen onNext={() => navigateTo('target-preview')} />;
      case 'target-preview':
        return <TargetPreviewScreen role={userRole} />;

      /* ==================== WORKSPACE TRACK B: BRAND FLOW ==================== */
      case 'brand-name-reg':
        return <BrandNameRegScreen onNext={() => navigateTo('brand-gstin')} onBack={() => navigateTo('role-selection')} />;
      case 'brand-gstin':
        return <BrandGstinScreen onNext={() => navigateTo('brand-email-otp')} onBack={() => navigateTo('brand-name-reg')} />;
      case 'brand-email-otp':
        return <BrandEmailOtpScreen onNext={() => navigateTo('brand-requirements')} onBack={() => navigateTo('brand-gstin')} />;
      case 'brand-requirements':
        return <BrandRequirementsScreen onNext={() => navigateTo('brand-slots')} onBack={() => navigateTo('brand-email-otp')} />;
      case 'brand-slots':
        return (
          <BrandSlotsScreen
            slots={brandSlots}
            onSelectSlot={(index) => {
              setActiveBrandSlotIndex(index);
              navigateTo('brand-prompts-directory');
            }}
            onNext={() => navigateTo('brand-photos')}
            onBack={() => navigateTo('brand-requirements')}
          />
        );
      case 'brand-prompts-directory':
        return (
          <BrandPromptsDirectoryScreen
            slotIndex={activeBrandSlotIndex}
            onUpdateSlot={(index, data) => {
              updateBrandSlot(index, data);
              navigateTo('brand-slots');
            }}
            onBack={() => navigateTo('brand-slots')}
          />
        );
      case 'brand-photos':
        return <BrandPhotosScreen onNext={() => navigateTo('brand-target-preview')} onBack={() => navigateTo('brand-slots')} />;
      case 'brand-target-preview':
        return <BrandTargetPreviewScreen />;

      default:
        return (
          <View style={styles.errorContainer}>
            <Text style={styles.errorText}>System Error: Node "{currentScreen}" Mismatch.</Text>
          </View>
        );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#0F0F11" barStyle="light-content" />
      {renderScreen()}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0F0F11' },
  errorContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#0F0F11' },
  errorText: { color: '#FF3B30', fontSize: 16, fontWeight: 'bold' },
});