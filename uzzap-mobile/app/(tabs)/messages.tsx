import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';
import { useRouter } from 'expo-router';
import { useColorScheme } from 'react-native';
import { useChatroom } from '@/contexts/ChatroomContext';
import { Ionicons } from '@expo/vector-icons';

export default function MessagesScreen() {
  const router = useRouter();
  const colorScheme = useColorScheme();
  const { chatrooms, loading, fetchChatrooms } = useChatroom();
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    fetchChatrooms();
  }, []);

  const handleRefresh = async () => {
    setRefreshing(true);
    await fetchChatrooms();
    setRefreshing(false);
  };

  const renderChatroom = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.chatroomItem,
        { backgroundColor: colorScheme === 'dark' ? '#1c1c1e' : '#fff' },
      ]}
      onPress={() => router.push(`/chatroom/${item.id}`)}
    >
      <View style={styles.chatroomContent}>
        <Text
          style={[
            styles.chatroomName,
            { color: colorScheme === 'dark' ? '#fff' : '#000' },
          ]}
        >
          {item.name}
        </Text>
        {item.last_message && (
          <Text
            style={[
              styles.lastMessage,
              { color: colorScheme === 'dark' ? '#8e8e93' : '#6c6c70' },
            ]}
            numberOfLines={1}
          >
            {item.last_message.content}
          </Text>
        )}
      </View>
      <View style={styles.chatroomInfo}>
        {item.last_message && (
          <Text
            style={[
              styles.timestamp,
              { color: colorScheme === 'dark' ? '#8e8e93' : '#6c6c70' },
            ]}
          >
            {new Date(item.last_message.created_at).toLocaleTimeString([], {
              hour: '2-digit',
              minute: '2-digit',
            })}
          </Text>
        )}
        {item.unread_count > 0 && (
          <View style={styles.unreadBadge}>
            <Text style={styles.unreadCount}>{item.unread_count}</Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );

  if (loading && !refreshing) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#007AFF" />
      </View>
    );
  }

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: colorScheme === 'dark' ? '#000' : '#f2f2f7' },
      ]}
    >
      <FlatList
        data={chatrooms}
        renderItem={renderChatroom}
        keyExtractor={(item) => item.id}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
        }
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Ionicons
              name="chatbubble-outline"
              size={64}
              color={colorScheme === 'dark' ? '#8e8e93' : '#6c6c70'}
            />
            <Text
              style={[
                styles.emptyText,
                { color: colorScheme === 'dark' ? '#8e8e93' : '#6c6c70' },
              ]}
            >
              No chatrooms yet
            </Text>
          </View>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listContent: {
    padding: 16,
  },
  chatroomItem: {
    flexDirection: 'row',
    padding: 16,
    borderRadius: 12,
    marginBottom: 8,
    alignItems: 'center',
  },
  chatroomContent: {
    flex: 1,
    marginRight: 16,
  },
  chatroomName: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  lastMessage: {
    fontSize: 14,
  },
  chatroomInfo: {
    alignItems: 'flex-end',
  },
  timestamp: {
    fontSize: 12,
    marginBottom: 4,
  },
  unreadBadge: {
    backgroundColor: '#007AFF',
    borderRadius: 12,
    minWidth: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 8,
  },
  unreadCount: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
  emptyText: {
    fontSize: 16,
    marginTop: 16,
  },
}); 