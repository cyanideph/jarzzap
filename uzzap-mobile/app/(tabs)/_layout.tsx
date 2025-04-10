import { Tabs } from 'expo-router';
import { Icon } from '@/components/Icon';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/constants/Colors';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        tabBarInactiveTintColor: Colors[colorScheme ?? 'light'].tabIconDefault,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Messages',
          tabBarIcon: ({ color, size }) => (
            <Icon name="message" size={size} tintColor={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="buddies"
        options={{
          title: 'Buddies',
          tabBarIcon: ({ color, size }) => (
            <Icon name="chatroom" size={size} tintColor={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color, size }) => (
            <Icon name="search" size={size} tintColor={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color, size }) => (
            <Icon name="settings" size={size} tintColor={color} />
          ),
        }}
      />
    </Tabs>
  );
}
