# Configuración de Supabase

Este documento describe los pasos para configurar Supabase en tu proyecto de notas.

## 1. Crear una cuenta en Supabase

1. Ve a [Supabase](https://supabase.io/) y crea una cuenta.
2. Crea un nuevo proyecto.
3. Toma nota de la URL y la clave anónima del proyecto que necesitarás más adelante.

## 2. Configuración del archivo .env.local

Crea un archivo `.env.local` en la raíz de tu proyecto con las siguientes variables:

```
NEXT_PUBLIC_SUPABASE_URL=tu_url_de_supabase
NEXT_PUBLIC_SUPABASE_ANON_KEY=tu_clave_anonima_de_supabase
```

Reemplaza los valores con los que obtuviste de Supabase.

## 3. Ejecutar las migraciones SQL

1. Ve al editor SQL en el dashboard de Supabase.
2. Copia y pega el contenido de `supabase-schema.sql` en el editor.
3. Ejecuta el SQL para crear las tablas y políticas.

## 4. Actualizar los tipos de TypeScript (opcional)

Si necesitas actualizar los tipos de TypeScript después de modificar la estructura de la base de datos:

1. Instala la CLI de Supabase: `npm install -g supabase`
2. Genera los tipos: `supabase gen types typescript --project-id tu_project_id > lib/database.types.ts`

## 5. Habilitar el servicio de autenticación

1. En el dashboard de Supabase, ve a "Authentication" > "Providers".
2. Asegúrate de que el proveedor "Email" esté habilitado.
3. Configura las opciones según tus necesidades (confirmación de correo, etc.).

## 6. Probar la aplicación

1. Ejecuta tu aplicación: `npm run dev`
2. Prueba el registro de usuarios y el inicio de sesión.
3. Verifica que puedas crear, leer, actualizar y eliminar notas.

## Estructura de la base de datos

### Tabla `profiles`

Almacena la información del perfil de cada usuario.

- `id`: UUID del usuario (clave primaria, referencia a auth.users)
- `created_at`: Fecha de creación
- `updated_at`: Fecha de actualización
- `full_name`: Nombre completo del usuario
- `avatar_url`: URL del avatar del usuario

### Tabla `notes`

Almacena las notas de los usuarios.

- `id`: UUID de la nota (clave primaria)
- `created_at`: Fecha de creación
- `updated_at`: Fecha de actualización
- `title`: Título de la nota
- `content`: Contenido de la nota
- `user_id`: UUID del usuario propietario (clave foránea a profiles)

## Seguridad y RLS (Row Level Security)

Se han configurado políticas de seguridad para:

1. Los usuarios solo pueden ver y editar sus propios perfiles.
2. Los usuarios solo pueden ver, crear, editar y eliminar sus propias notas.