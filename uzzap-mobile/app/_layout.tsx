import { Stack } from 'expo-router';
import { useColorScheme } from 'react-native';
import { AuthProvider } from '@/contexts/AuthContext';
import { ChatroomProvider } from '@/contexts/ChatroomContext';
import { SettingsProvider } from '@/contexts/SettingsContext';

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <AuthProvider>
      <SettingsProvider>
        <ChatroomProvider>
          <Stack
            screenOptions={{
              headerStyle: {
                backgroundColor: colorScheme === 'dark' ? '#000' : '#fff',
              },
              headerTintColor: colorScheme === 'dark' ? '#fff' : '#000',
            }}
          >
            <Stack.Screen
              name="(auth)"
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="(tabs)"
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="chatroom/[id]"
              options={{
                title: 'Chatroom',
                headerBackTitle: 'Back',
              }}
            />
          </Stack>
        </ChatroomProvider>
      </SettingsProvider>
    </AuthProvider>
  );
}
