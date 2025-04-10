import React, { createContext, useContext, useState, useEffect } from 'react';
import { getRegions, getProvinces } from '@/lib/supabase';
import { Database } from '@/types/supabase';

type Region = Database['public']['Tables']['regions']['Row'];
type Province = Database['public']['Tables']['provinces']['Row'];

interface RegionsContextType {
  regions: Region[] | null;
  provinces: { [key: string]: Province[] } | null;
  loading: boolean;
  fetchRegions: () => Promise<void>;
  fetchProvinces: (regionId: string) => Promise<void>;
}

const RegionsContext = createContext<RegionsContextType | undefined>(undefined);

export function RegionsProvider({ children }: { children: React.ReactNode }) {
  const [regions, setRegions] = useState<Region[] | null>(null);
  const [provinces, setProvinces] = useState<{ [key: string]: Province[] } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRegions();
  }, []);

  const fetchRegions = async () => {
    try {
      const data = await getRegions();
      setRegions(data);
    } catch (error) {
      console.error('Error fetching regions:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchProvinces = async (regionId: string) => {
    try {
      const data = await getProvinces(regionId);
      setProvinces(prev => ({
        ...prev,
        [regionId]: data,
      }));
    } catch (error) {
      console.error('Error fetching provinces:', error);
    }
  };

  const value = {
    regions,
    provinces,
    loading,
    fetchRegions,
    fetchProvinces,
  };

  return <RegionsContext.Provider value={value}>{children}</RegionsContext.Provider>;
}

export function useRegions() {
  const context = useContext(RegionsContext);
  if (context === undefined) {
    throw new Error('useRegions must be used within a RegionsProvider');
  }
  return context;
} 