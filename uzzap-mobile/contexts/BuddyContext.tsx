import React, { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { Database } from '@/types/database';
import { useAuth } from './AuthContext';

type Buddy = Database['public']['Tables']['buddies']['Row'] & {
  profile: Database['public']['Tables']['profiles']['Row'];
};

interface BuddyContextType {
  buddies: Buddy[];
  loading: boolean;
  addBuddy: (mobileNumber: string) => Promise<void>;
  removeBuddy: (buddyId: string) => Promise<void>;
  blockBuddy: (buddyId: string) => Promise<void>;
  unblockBuddy: (buddyId: string) => Promise<void>;
  searchBuddies: (query: string) => Promise<Buddy[]>;
  inviteBuddy: (mobileNumber: string) => Promise<void>;
}

const BuddyContext = createContext<BuddyContextType | undefined>(undefined);

export function BuddyProvider({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();
  const [buddies, setBuddies] = useState<Buddy[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      fetchBuddies();
      subscribeToBuddyChanges();
    }
    return () => {
      // Cleanup subscription
    };
  }, [user]);

  const fetchBuddies = async () => {
    try {
      const { data, error } = await supabase
        .from('buddies')
        .select(`
          *,
          profile:profiles!buddies_buddy_id_fkey(*)
        `)
        .eq('user_id', user?.id)
        .eq('status', 'accepted');

      if (error) throw error;
      setBuddies(data || []);
    } catch (error) {
      console.error('Error fetching buddies:', error);
    } finally {
      setLoading(false);
    }
  };

  const subscribeToBuddyChanges = () => {
    const subscription = supabase
      .channel('buddies_changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'buddies',
          filter: `user_id=eq.${user?.id}`,
        },
        (payload) => {
          if (payload.eventType === 'INSERT') {
            fetchBuddies();
          } else if (payload.eventType === 'UPDATE') {
            fetchBuddies();
          } else if (payload.eventType === 'DELETE') {
            fetchBuddies();
          }
        }
      )
      .subscribe();

    return () => {
      subscription.unsubscribe();
    };
  };

  const addBuddy = async (mobileNumber: string) => {
    try {
      // First, find the user by mobile number
      const { data: profile, error: profileError } = await supabase
        .from('profiles')
        .select('*')
        .eq('mobile_number', mobileNumber)
        .single();

      if (profileError) throw profileError;
      if (!profile) throw new Error('User not found');

      // Then, add them as a buddy
      const { error: buddyError } = await supabase.from('buddies').insert({
        user_id: user?.id,
        buddy_id: profile.user_id,
        status: 'pending',
      });

      if (buddyError) throw buddyError;
    } catch (error) {
      console.error('Error adding buddy:', error);
      throw error;
    }
  };

  const removeBuddy = async (buddyId: string) => {
    try {
      const { error } = await supabase
        .from('buddies')
        .delete()
        .eq('user_id', user?.id)
        .eq('buddy_id', buddyId);

      if (error) throw error;
    } catch (error) {
      console.error('Error removing buddy:', error);
      throw error;
    }
  };

  const blockBuddy = async (buddyId: string) => {
    try {
      const { error } = await supabase
        .from('buddies')
        .update({ status: 'blocked' })
        .eq('user_id', user?.id)
        .eq('buddy_id', buddyId);

      if (error) throw error;
    } catch (error) {
      console.error('Error blocking buddy:', error);
      throw error;
    }
  };

  const unblockBuddy = async (buddyId: string) => {
    try {
      const { error } = await supabase
        .from('buddies')
        .update({ status: 'accepted' })
        .eq('user_id', user?.id)
        .eq('buddy_id', buddyId);

      if (error) throw error;
    } catch (error) {
      console.error('Error unblocking buddy:', error);
      throw error;
    }
  };

  const searchBuddies = async (query: string) => {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .ilike('mobile_number', `%${query}%`)
        .neq('user_id', user?.id);

      if (error) throw error;
      return data || [];
    } catch (error) {
      console.error('Error searching buddies:', error);
      throw error;
    }
  };

  const inviteBuddy = async (mobileNumber: string) => {
    try {
      // TODO: Implement SMS invitation
      console.log('Sending invitation to:', mobileNumber);
    } catch (error) {
      console.error('Error inviting buddy:', error);
      throw error;
    }
  };

  const value = {
    buddies,
    loading,
    addBuddy,
    removeBuddy,
    blockBuddy,
    unblockBuddy,
    searchBuddies,
    inviteBuddy,
  };

  return <BuddyContext.Provider value={value}>{children}</BuddyContext.Provider>;
}

export function useBuddy() {
  const context = useContext(BuddyContext);
  if (context === undefined) {
    throw new Error('useBuddy must be used within a BuddyProvider');
  }
  return context;
} 