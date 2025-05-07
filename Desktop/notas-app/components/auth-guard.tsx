'use client';

import { useEffect, ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/auth-context';

interface AuthGuardProps {
  children: ReactNode;
  fallbackUrl?: string;
}

export function AuthGuard({ children, fallbackUrl = '/login' }: AuthGuardProps) {
  const { user, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !user) {
      router.push(fallbackUrl);
    }
  }, [user, isLoading, router, fallbackUrl]);

  // Mostrar un estado de carga mientras se verifica la autenticación
  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-full min-h-[200px]">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  // Si no hay usuario y ya terminó de cargar, no mostramos nada
  // (el useEffect redirigirá)
  if (!user && !isLoading) {
    return null;
  }

  // Si hay usuario, mostramos el contenido protegido
  return <>{children}</>;
} 