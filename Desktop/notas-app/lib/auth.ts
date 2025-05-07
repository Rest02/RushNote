import supabase from './supabase';
import { Database } from './database.types';

export type Profile = Database['public']['Tables']['profiles']['Row'];

export async function signUp(email: string, password: string, fullName: string) {
  try {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      throw error;
    }

    if (data.user) {
      // Crear un perfil para el usuario
      await supabase.from('profiles').insert({
        id: data.user.id,
        full_name: fullName,
        created_at: new Date().toISOString(),
      });
    }

    return { success: true, data };
  } catch (error) {
    console.error('Error al registrar el usuario:', error);
    return { success: false, error };
  }
}

export async function signIn(email: string, password: string) {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      throw error;
    }

    return { success: true, data };
  } catch (error) {
    console.error('Error al iniciar sesión:', error);
    return { success: false, error };
  }
}

export async function signOut() {
  try {
    const { error } = await supabase.auth.signOut();
    
    if (error) {
      throw error;
    }

    return { success: true };
  } catch (error) {
    console.error('Error al cerrar sesión:', error);
    return { success: false, error };
  }
}

export async function getProfile(userId: string) {
  try {
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', userId)
      .single();

    if (error) {
      throw error;
    }

    return { success: true, data };
  } catch (error) {
    console.error('Error al obtener el perfil:', error);
    return { success: false, error };
  }
}

export async function updateProfile(userId: string, updates: Partial<Profile>) {
  try {
    const { data, error } = await supabase
      .from('profiles')
      .update({
        ...updates,
        updated_at: new Date().toISOString(),
      })
      .eq('id', userId);

    if (error) {
      throw error;
    }

    return { success: true, data };
  } catch (error) {
    console.error('Error al actualizar el perfil:', error);
    return { success: false, error };
  }
} 