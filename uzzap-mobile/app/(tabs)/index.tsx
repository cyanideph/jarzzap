import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from '@/components/Icon';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/constants/Colors';

// Mock data for conversations
const mockConversations = [
  {
    id: '1',
    name: 'John Doe',
    lastMessage: 'Hey, how are you?',
    time: '10:30 AM',
    unread: true,
    status: 'online',
  },
  {
    id: '2',
    name: 'Jane Smith',
    lastMessage: 'See you tomorrow!',
    time: 'Yesterday',
    unread: false,
    status: 'offline',
  },
  // Add more mock conversations as needed
];

export default function MessagesScreen() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];

  const renderConversation = ({ item }) => (
    <TouchableOpacity 
      style={[
        styles.conversationItem,
        { backgroundColor: colors.background }
      ]}
    >
      <View style={styles.avatarContainer}>
        <Icon name="head-buntis" size={40} />
        <View style={styles.statusContainer}>
          <Icon 
            name={item.status} 
            size={12} 
            style={styles.statusIcon} 
          />
        </View>
      </View>
      <View style={styles.messageInfo}>
        <View style={styles.nameTimeContainer}>
          <Text style={[styles.name, { color: colors.text }]}>{item.name}</Text>
          <Text style={[styles.time, { color: colors.icon }]}>{item.time}</Text>
        </View>
        <View style={styles.messageContainer}>
          <Text 
            style={[styles.lastMessage, { color: colors.icon }]} 
            numberOfLines={1}
          >
            {item.lastMessage}
          </Text>
          {item.unread && (
            <View style={styles.unreadContainer}>
              <Icon name="unread" size={12} />
            </View>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <FlatList
        data={mockConversations}
        renderItem={renderConversation}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContainer: {
    padding: 16,
  },
  conversationItem: {
    flexDirection: 'row',
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
  },
  avatarContainer: {
    marginRight: 12,
    position: 'relative',
  },
  statusContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#FFFFFF',
    borderRadius: 6,
    padding: 2,
  },
  statusIcon: {
    width: 12,
    height: 12,
  },
  messageInfo: {
    flex: 1,
  },
  nameTimeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
  },
  time: {
    fontSize: 12,
  },
  messageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  lastMessage: {
    flex: 1,
    fontSize: 14,
  },
  unreadContainer: {
    marginLeft: 8,
  },
});
