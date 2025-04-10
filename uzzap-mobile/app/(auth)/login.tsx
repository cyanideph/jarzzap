import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  Alert,
} from 'react-native';
import { useRouter } from 'expo-router';
import { useAuth } from '@/contexts/AuthContext';
import { useColorScheme } from 'react-native';

export default function LoginScreen() {
  const router = useRouter();
  const { signIn, loading } = useAuth();
  const colorScheme = useColorScheme();
  const [mobileNumber, setMobileNumber] = useState('');

  const handleLogin = async () => {
    try {
      if (!mobileNumber) {
        Alert.alert('Error', 'Please enter your mobile number');
        return;
      }

      await signIn(mobileNumber);
      router.push('/verify');
    } catch (error) {
      Alert.alert('Error', 'Failed to send verification code');
    }
  };

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: colorScheme === 'dark' ? '#000' : '#fff' },
      ]}
    >
      <Text
        style={[
          styles.title,
          { color: colorScheme === 'dark' ? '#fff' : '#000' },
        ]}
      >
        Welcome to Uzzap
      </Text>
      <Text
        style={[
          styles.subtitle,
          { color: colorScheme === 'dark' ? '#8e8e93' : '#6c6c70' },
        ]}
      >
        Enter your mobile number to continue
      </Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={[
            styles.input,
            {
              backgroundColor: colorScheme === 'dark' ? '#1c1c1e' : '#f2f2f7',
              color: colorScheme === 'dark' ? '#fff' : '#000',
            },
          ]}
          placeholder="Mobile Number"
          placeholderTextColor={colorScheme === 'dark' ? '#8e8e93' : '#6c6c70'}
          keyboardType="phone-pad"
          value={mobileNumber}
          onChangeText={setMobileNumber}
        />
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={handleLogin}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={styles.buttonText}>Continue</Text>
        )}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 32,
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: 24,
  },
  input: {
    height: 50,
    borderRadius: 12,
    paddingHorizontal: 16,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#007AFF',
    height: 50,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
}); 