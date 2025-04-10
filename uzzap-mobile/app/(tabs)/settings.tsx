import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Switch,
  ScrollView,
} from 'react-native';
import { useRouter } from 'expo-router';
import { useColorScheme } from 'react-native';
import { useAuth } from '@/contexts/AuthContext';
import { useSettings } from '@/contexts/SettingsContext';
import { Ionicons } from '@expo/vector-icons';

export default function SettingsScreen() {
  const router = useRouter();
  const colorScheme = useColorScheme();
  const { profile, signOut } = useAuth();
  const { settings, updateSettings } = useSettings();

  const handleThemeChange = (value: boolean) => {
    updateSettings({
      theme: value ? 'dark' : 'light',
    });
  };

  const handleNotificationsChange = (value: boolean) => {
    updateSettings({
      notifications: value,
    });
  };

  const handleAutoMessageDisplayChange = (value: boolean) => {
    updateSettings({
      auto_message_display: value,
    });
  };

  const handleOfflineDeliveryChange = (value: 'sms' | 'email' | 'server') => {
    updateSettings({
      offline_delivery: value,
    });
  };

  const handleSignOut = async () => {
    try {
      await signOut();
      router.replace('/(auth)');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <ScrollView
      style={[
        styles.container,
        { backgroundColor: colorScheme === 'dark' ? '#000' : '#f2f2f7' },
      ]}
    >
      <View
        style={[
          styles.section,
          { backgroundColor: colorScheme === 'dark' ? '#1c1c1e' : '#fff' },
        ]}
      >
        <Text
          style={[
            styles.sectionTitle,
            { color: colorScheme === 'dark' ? '#fff' : '#000' },
          ]}
        >
          Profile
        </Text>
        <TouchableOpacity
          style={styles.settingItem}
          onPress={() => router.push('/profile')}
        >
          <View style={styles.settingContent}>
            <Ionicons
              name="person"
              size={24}
              color={colorScheme === 'dark' ? '#fff' : '#000'}
            />
            <Text
              style={[
                styles.settingText,
                { color: colorScheme === 'dark' ? '#fff' : '#000' },
              ]}
            >
              Edit Profile
            </Text>
          </View>
          <Ionicons
            name="chevron-forward"
            size={24}
            color={colorScheme === 'dark' ? '#8e8e93' : '#6c6c70'}
          />
        </TouchableOpacity>
        <View style={styles.settingItem}>
          <View style={styles.settingContent}>
            <Ionicons
              name="phone-portrait"
              size={24}
              color={colorScheme === 'dark' ? '#fff' : '#000'}
            />
            <Text
              style={[
                styles.settingText,
                { color: colorScheme === 'dark' ? '#fff' : '#000' },
              ]}
            >
              Mobile Number
            </Text>
          </View>
          <Text
            style={[
              styles.settingValue,
              { color: colorScheme === 'dark' ? '#8e8e93' : '#6c6c70' },
            ]}
          >
            {profile?.mobile_number}
          </Text>
        </View>
      </View>

      <View
        style={[
          styles.section,
          { backgroundColor: colorScheme === 'dark' ? '#1c1c1e' : '#fff' },
        ]}
      >
        <Text
          style={[
            styles.sectionTitle,
            { color: colorScheme === 'dark' ? '#fff' : '#000' },
          ]}
        >
          Preferences
        </Text>
        <View style={styles.settingItem}>
          <View style={styles.settingContent}>
            <Ionicons
              name="moon"
              size={24}
              color={colorScheme === 'dark' ? '#fff' : '#000'}
            />
            <Text
              style={[
                styles.settingText,
                { color: colorScheme === 'dark' ? '#fff' : '#000' },
              ]}
            >
              Dark Mode
            </Text>
          </View>
          <Switch
            value={settings?.theme === 'dark'}
            onValueChange={handleThemeChange}
          />
        </View>
        <View style={styles.settingItem}>
          <View style={styles.settingContent}>
            <Ionicons
              name="notifications"
              size={24}
              color={colorScheme === 'dark' ? '#fff' : '#000'}
            />
            <Text
              style={[
                styles.settingText,
                { color: colorScheme === 'dark' ? '#fff' : '#000' },
              ]}
            >
              Notifications
            </Text>
          </View>
          <Switch
            value={settings?.notifications}
            onValueChange={handleNotificationsChange}
          />
        </View>
        <View style={styles.settingItem}>
          <View style={styles.settingContent}>
            <Ionicons
              name="chatbubble"
              size={24}
              color={colorScheme === 'dark' ? '#fff' : '#000'}
            />
            <Text
              style={[
                styles.settingText,
                { color: colorScheme === 'dark' ? '#fff' : '#000' },
              ]}
            >
              Auto Message Display
            </Text>
          </View>
          <Switch
            value={settings?.auto_message_display}
            onValueChange={handleAutoMessageDisplayChange}
          />
        </View>
      </View>

      <View
        style={[
          styles.section,
          { backgroundColor: colorScheme === 'dark' ? '#1c1c1e' : '#fff' },
        ]}
      >
        <Text
          style={[
            styles.sectionTitle,
            { color: colorScheme === 'dark' ? '#fff' : '#000' },
          ]}
        >
          Offline Delivery
        </Text>
        <TouchableOpacity
          style={styles.settingItem}
          onPress={() => handleOfflineDeliveryChange('sms')}
        >
          <View style={styles.settingContent}>
            <Ionicons
              name="text"
              size={24}
              color={colorScheme === 'dark' ? '#fff' : '#000'}
            />
            <Text
              style={[
                styles.settingText,
                { color: colorScheme === 'dark' ? '#fff' : '#000' },
              ]}
            >
              SMS
            </Text>
          </View>
          {settings?.offline_delivery === 'sms' && (
            <Ionicons
              name="checkmark"
              size={24}
              color="#007AFF"
            />
          )}
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.settingItem}
          onPress={() => handleOfflineDeliveryChange('email')}
        >
          <View style={styles.settingContent}>
            <Ionicons
              name="mail"
              size={24}
              color={colorScheme === 'dark' ? '#fff' : '#000'}
            />
            <Text
              style={[
                styles.settingText,
                { color: colorScheme === 'dark' ? '#fff' : '#000' },
              ]}
            >
              Email
            </Text>
          </View>
          {settings?.offline_delivery === 'email' && (
            <Ionicons
              name="checkmark"
              size={24}
              color="#007AFF"
            />
          )}
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.settingItem}
          onPress={() => handleOfflineDeliveryChange('server')}
        >
          <View style={styles.settingContent}>
            <Ionicons
              name="server"
              size={24}
              color={colorScheme === 'dark' ? '#fff' : '#000'}
            />
            <Text
              style={[
                styles.settingText,
                { color: colorScheme === 'dark' ? '#fff' : '#000' },
              ]}
            >
              Server
            </Text>
          </View>
          {settings?.offline_delivery === 'server' && (
            <Ionicons
              name="checkmark"
              size={24}
              color="#007AFF"
            />
          )}
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={[
          styles.signOutButton,
          { backgroundColor: colorScheme === 'dark' ? '#1c1c1e' : '#fff' },
        ]}
        onPress={handleSignOut}
      >
        <Text style={styles.signOutText}>Sign Out</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  section: {
    marginBottom: 16,
    borderRadius: 12,
    overflow: 'hidden',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 16,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'rgba(0, 0, 0, 0.1)',
  },
  settingContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  settingText: {
    fontSize: 16,
    marginLeft: 12,
  },
  settingValue: {
    fontSize: 16,
  },
  signOutButton: {
    margin: 16,
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  signOutText: {
    color: '#FF3B30',
    fontSize: 16,
    fontWeight: '600',
  },
}); 