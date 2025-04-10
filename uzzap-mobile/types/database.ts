export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          user_id: string
          mobile_number: string
          status: 'online' | 'offline' | 'busy'
          status_message: string | null
          region_id: string | null
          province_id: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          mobile_number: string
          status?: 'online' | 'offline' | 'busy'
          status_message?: string | null
          region_id?: string | null
          province_id?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          mobile_number?: string
          status?: 'online' | 'offline' | 'busy'
          status_message?: string | null
          region_id?: string | null
          province_id?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      regions: {
        Row: {
          id: string
          name: string
          code: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          code: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          code?: string
          created_at?: string
          updated_at?: string
        }
      }
      provinces: {
        Row: {
          id: string
          name: string
          code: string
          region_id: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          code: string
          region_id: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          code?: string
          region_id?: string
          created_at?: string
          updated_at?: string
        }
      }
      chatrooms: {
        Row: {
          id: string
          name: string
          region_id: string | null
          province_id: string | null
          type: 'region' | 'province'
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          region_id?: string | null
          province_id?: string | null
          type: 'region' | 'province'
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          region_id?: string | null
          province_id?: string | null
          type?: 'region' | 'province'
          created_at?: string
          updated_at?: string
        }
      }
      messages: {
        Row: {
          id: string
          sender_id: string
          chatroom_id: string
          content: string
          status: 'sent' | 'delivered' | 'read'
          type: 'text' | 'image' | 'video' | 'audio'
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          sender_id: string
          chatroom_id: string
          content: string
          status?: 'sent' | 'delivered' | 'read'
          type?: 'text' | 'image' | 'video' | 'audio'
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          sender_id?: string
          chatroom_id?: string
          content?: string
          status?: 'sent' | 'delivered' | 'read'
          type?: 'text' | 'image' | 'video' | 'audio'
          created_at?: string
          updated_at?: string
        }
      }
      settings: {
        Row: {
          id: string
          user_id: string
          offline_delivery: 'sms' | 'email' | 'server'
          auto_message_display: boolean
          theme: 'light' | 'dark' | 'system'
          notifications: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          offline_delivery?: 'sms' | 'email' | 'server'
          auto_message_display?: boolean
          theme?: 'light' | 'dark' | 'system'
          notifications?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          offline_delivery?: 'sms' | 'email' | 'server'
          auto_message_display?: boolean
          theme?: 'light' | 'dark' | 'system'
          notifications?: boolean
          created_at?: string
          updated_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
} 