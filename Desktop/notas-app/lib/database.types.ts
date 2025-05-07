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
          created_at: string
          updated_at: string | null
          full_name: string | null
          avatar_url: string | null
        }
        Insert: {
          id: string
          created_at?: string
          updated_at?: string | null
          full_name?: string | null
          avatar_url?: string | null
        }
        Update: {
          id?: string
          created_at?: string
          updated_at?: string | null
          full_name?: string | null
          avatar_url?: string | null
        }
      }
      notes: {
        Row: {
          id: string
          created_at: string
          updated_at: string | null
          title: string
          content: string | null
          user_id: string
        }
        Insert: {
          id?: string
          created_at?: string
          updated_at?: string | null
          title: string
          content?: string | null
          user_id: string
        }
        Update: {
          id?: string
          created_at?: string
          updated_at?: string | null
          title?: string
          content?: string | null
          user_id?: string
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