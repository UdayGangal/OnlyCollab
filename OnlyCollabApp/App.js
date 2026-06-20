import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, StatusBar, View, Text } from 'react-native';

// Entry Core Screens
import LandingScreen from './src/screens/LandingScreen';
import RoleSelectionScreen from './src/screens/RoleSelectionScreen';

// Workspace Track A: Content Creator Screens
import BasicInfoScreen from './src/screens/BasicInfoScreen';
import AuthScreen from './src/screens/AuthScreen';
import FaceVerifyScreen from './src/screens/FaceVerifyScreen';
import CreatorDetailsScreen from './src/screens/CreatorDetailsScreen';
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
  // Navigation State Machine Routing Track
  const [currentScreen, setCurrentScreen] = useState('landing');
  
  // Operational Role Context Mapping
  const [userRole, setUserRole] = useState(null);

  // Separate Active Index Trackers to protect runtime integrity
  const [activeCreatorSlotIndex, setActiveCreatorSlotIndex] = useState(0);
  const [activeBrandSlotIndex, setActiveBrandSlotIndex] = useState(0);

  // Synchronized Structure: Creator treats slots as sequence-wise Objects matching image_aff8c1.png
  const [creatorSlots, setCreatorSlots] = useState([
    { title: '', answer: '' },
    { title: '', answer: '' },
    { title: '', answer: '' }
  ]);
  
  // Synchronized Structure: Brand treats slots as sequence-wise Objects matching image_aff8c1.png
  const [brandSlots, setBrandSlots] = useState([
    { title: '', answer: '' },
    { title: '', answer: '' },
    { title: '', answer: '' }
  ]);

  // Handler for Track A (Creator Objects)
  const updateCreatorSlot = (index, dataObject) => {
    const updated = [...creatorSlots];
    updated[index] = dataObject; // Expects { title, answer }
    setCreatorSlots(updated);
  };

  // Handler for Track B (Brand Objects: Title + Answer)
  const updateBrandSlot = (index, dataObject) => {
    const updated = [...brandSlots];
    updated[index] = dataObject; // Expects { title, answer }
    setBrandSlots(updated);
  };

  // Safe State Navigator
  const navigateTo = (screenKey) => {
    console.log(`Navigate → ${screenKey}`);
    setCurrentScreen(screenKey);
  };

  // Central Switch Matrix Engine
  const renderScreen = () => {
    switch (currentScreen) {
      /* ==================== GATEWAY / PORTAL ROUTING ==================== */
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
              navigateTo('basic-info');
            }}
            onBack={() => navigateTo('landing')}
          />
        );

      /* ==================== WORKSPACE TRACK A: CREATOR FLOW ==================== */
      case 'basic-info':
        return <BasicInfoScreen onNext={() => navigateTo('auth')} />;
      case 'auth':
        return <AuthScreen onNext={() => navigateTo('face-verify')} />;
      case 'face-verify':
        return <FaceVerifyScreen onNext={() => navigateTo('creator-details')} />;
      case 'creator-details':
        return <CreatorDetailsScreen onNext={() => navigateTo('prompts-dashboard')} />;
      
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
              navigateTo('prompts-dashboard'); // Auto-redirect back instantly on save
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
        return (
          <BrandNameRegScreen
            onNext={() => navigateTo('brand-gstin')}
            onBack={() => navigateTo('role-selection')}
          />
        );

      case 'brand-gstin':
        return (
          <BrandGstinScreen
            onNext={() => navigateTo('brand-email-otp')}
            onBack={() => navigateTo('brand-name-reg')}
          />
        );

      case 'brand-email-otp':
        return (
          <BrandEmailOtpScreen
            onNext={() => navigateTo('brand-requirements')}
            onBack={() => navigateTo('brand-gstin')}
          />
        );

      case 'brand-requirements':
        return (
          <BrandRequirementsScreen
            onNext={() => navigateTo('brand-slots')}
            onBack={() => navigateTo('brand-email-otp')}
          />
        );

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
              navigateTo('brand-slots'); // Auto-redirect back instantly on save
            }}
            onBack={() => navigateTo('brand-slots')}
          />
        );

      case 'brand-photos':
        return (
          <BrandPhotosScreen
            onNext={() => navigateTo('brand-target-preview')}
            onBack={() => navigateTo('brand-slots')}
          />
        );

      case 'brand-target-preview':
        return <BrandTargetPreviewScreen />;

      /* ==================== FAILURE SAFEGUARD MATRIX ==================== */
      default:
        return (
          <View style={styles.errorContainer}>
            <Text style={styles.errorText}>
              System Error: View Node "{currentScreen}" Mismatch.
            </Text>
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