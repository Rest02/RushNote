-- Creación de la tabla de perfiles
CREATE TABLE profiles (
  id UUID REFERENCES auth.users ON DELETE CASCADE NOT NULL PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE,
  full_name TEXT,
  avatar_url TEXT
);

-- Asegurar que los nuevos usuarios tengan un perfil
CREATE OR REPLACE FUNCTION public.handle_new_user() 
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, full_name, created_at)
  VALUES (new.id, new.raw_user_meta_data->>'full_name', NOW());
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE PROCEDURE public.handle_new_user();

-- Creación de la tabla de notas
CREATE TABLE notes (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE,
  title TEXT NOT NULL,
  content TEXT,
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE NOT NULL
);

-- Política para que los usuarios solo puedan ver sus propios perfiles
CREATE POLICY "Users can view their own profile" 
  ON profiles FOR SELECT 
  USING (auth.uid() = id);

-- Política para que los usuarios puedan actualizar sus propios perfiles
CREATE POLICY "Users can update their own profile" 
  ON profiles FOR UPDATE 
  USING (auth.uid() = id);

-- Políticas para las notas
-- Usuario puede leer sus propias notas
CREATE POLICY "Users can view their own notes" 
  ON notes FOR SELECT 
  USING (auth.uid() = user_id);

-- Usuario puede crear sus propias notas
CREATE POLICY "Users can create their own notes" 
  ON notes FOR INSERT 
  WITH CHECK (auth.uid() = user_id);

-- Usuario puede actualizar sus propias notas
CREATE POLICY "Users can update their own notes" 
  ON notes FOR UPDATE 
  USING (auth.uid() = user_id);

-- Usuario puede eliminar sus propias notas
CREATE POLICY "Users can delete their own notes" 
  ON notes FOR DELETE 
  USING (auth.uid() = user_id);

-- Habilitar RLS en las tablas
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE notes ENABLE ROW LEVEL SECURITY; 