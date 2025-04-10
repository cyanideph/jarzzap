import { View, Text, FlatList, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';

// Mock data for buddies
const mockBuddies = [
  {
    id: '1',
    name: 'John Doe',
    status: 'Online',
    lastSeen: 'Now',
  },
  {
    id: '2',
    name: 'Jane Smith',
    status: 'Offline',
    lastSeen: '2 hours ago',
  },
  {
    id: '3',
    name: 'Mike Johnson',
    status: 'Online',
    lastSeen: 'Now',
  },
  // Add more mock buddies as needed
];

export default function BuddiesScreen() {
  const [buddies, setBuddies] = useState(mockBuddies);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredBuddies = buddies.filter(buddy =>
    buddy.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderBuddy = ({ item }) => (
    <TouchableOpacity style={styles.buddyItem}>
      <View style={styles.avatarContainer}>
        <Ionicons name="person-circle-outline" size={40} color="#007AFF" />
      </View>
      <View style={styles.buddyInfo}>
        <Text style={styles.name}>{item.name}</Text>
        <View style={styles.statusContainer}>
          <View style={[
            styles.statusIndicator,
            { backgroundColor: item.status === 'Online' ? '#34C759' : '#8E8E93' }
          ]} />
          <Text style={styles.statusText}>
            {item.status} • {item.lastSeen}
          </Text>
        </View>
      </View>
      <TouchableOpacity style={styles.actionButton}>
        <Ionicons name="ellipsis-vertical" size={20} color="#8E8E93" />
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#8E8E93" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search buddies..."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>
      <FlatList
        data={filteredBuddies}
        renderItem={renderBuddy}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F7',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    margin: 16,
    paddingHorizontal: 12,
    borderRadius: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    height: 40,
    fontSize: 16,
  },
  listContainer: {
    padding: 16,
  },
  buddyItem: {
    flexDirection: 'row',
    padding: 12,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginBottom: 8,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
  },
  avatarContainer: {
    marginRight: 12,
  },
  buddyInfo: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
    marginBottom: 4,
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusIndicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 6,
  },
  statusText: {
    fontSize: 12,
    color: '#8E8E93',
  },
  actionButton: {
    padding: 8,
  },
}); 