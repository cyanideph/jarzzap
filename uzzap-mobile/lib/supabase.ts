import 'react-native-url-polyfill/auto';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';
import { Database } from '@/types/supabase';

const supabaseUrl = process.env.SUPABASE_URL!;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY!;

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
  realtime: {
    params: {
      eventsPerSecond: 10,
    },
  },
});

// Helper functions for common operations
export const getProfile = async (userId: string) => {
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', userId)
    .single();
  
  if (error) throw error;
  return data;
};

export const updateProfile = async (userId: string, updates: Partial<Database['public']['Tables']['profiles']['Update']>) => {
  const { data, error } = await supabase
    .from('profiles')
    .update(updates)
    .eq('id', userId)
    .select()
    .single();
  
  if (error) throw error;
  return data;
};

export const getSettings = async (userId: string) => {
  const { data, error } = await supabase
    .from('settings')
    .select('*')
    .eq('user_id', userId)
    .single();
  
  if (error) throw error;
  return data;
};

export const updateSettings = async (userId: string, updates: Partial<Database['public']['Tables']['settings']['Update']>) => {
  const { data, error } = await supabase
    .from('settings')
    .update(updates)
    .eq('user_id', userId)
    .select()
    .single();
  
  if (error) throw error;
  return data;
};

export const getChatrooms = async (userId: string) => {
  const { data, error } = await supabase
    .from('chatroom_members')
    .select(`
      chatroom_id,
      chatrooms (
        id,
        name,
        is_group,
        created_at,
        messages (
          id,
          content,
          type,
          created_at,
          sender_id
        )
      )
    `)
    .eq('user_id', userId)
    .order('chatrooms.created_at', { ascending: false });
  
  if (error) throw error;
  return data;
};

export const getMessages = async (chatroomId: string) => {
  const { data, error } = await supabase
    .from('messages')
    .select(`
      *,
      sender:profiles (
        id,
        display_name,
        avatar_url
      )
    `)
    .eq('chatroom_id', chatroomId)
    .order('created_at', { ascending: true });
  
  if (error) throw error;
  return data;
};

export const sendMessage = async (chatroomId: string, senderId: string, content: string, type: 'text' | 'image' | 'file' = 'text', mediaUrl?: string) => {
  const { data, error } = await supabase
    .from('messages')
    .insert({
      chatroom_id: chatroomId,
      sender_id: senderId,
      content,
      type,
      media_url: mediaUrl,
    })
    .select()
    .single();
  
  if (error) throw error;
  return data;
};

export const markMessageAsRead = async (messageId: string, userId: string) => {
  const { data, error } = await supabase
    .from('message_status')
    .upsert({
      message_id: messageId,
      user_id: userId,
      is_read: true,
      read_at: new Date().toISOString(),
    })
    .select()
    .single();
  
  if (error) throw error;
  return data;
};

export const getRegions = async () => {
  const { data, error } = await supabase
    .from('regions')
    .select('*')
    .order('name');
  
  if (error) throw error;
  return data;
};

export const getProvinces = async (regionId: string) => {
  const { data, error } = await supabase
    .from('provinces')
    .select('*')
    .eq('region_id', regionId)
    .order('name');
  
  if (error) throw error;
  return data;
}; 