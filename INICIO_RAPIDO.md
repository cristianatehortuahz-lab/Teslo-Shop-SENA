# 🚀 Inicio Rápido - Teslo Shop

## Estado: ✅ PROYECTO COMPLETAMENTE FUNCIONAL

---

## 🎯 Para Iniciar el Proyecto

### Opción 1: Modo Desarrollo (Recomendado)
```bash
npm run dev
```

### Opción 2: Modo Desarrollo con Turbopack (Más Rápido)
```bash
npm run dev:turbo
```

**Luego accede a:** http://localhost:3000

---

## 👤 Credenciales de Prueba

### Usuario Administrador
```
Email: fernando@google.com
Password: 123456
```

### Usuario Regular
```
Email: melissa@google.com
Password: 123456
```

---

## 📂 URLs Principales

- **Inicio**: http://localhost:3000
- **Login**: http://localhost:3000/auth/login
- **Registro**: http://localhost:3000/auth/new-account
- **Carrito**: http://localhost:3000/cart
- **Órdenes**: http://localhost:3000/orders
- **Admin Panel**: http://localhost:3000/admin
- **Productos Admin**: http://localhost:3000/admin/products
- **Usuarios Admin**: http://localhost:3000/admin/users
- **Órdenes Admin**: http://localhost:3000/admin/orders

---

## 🛠️ Comandos Útiles

### Desarrollo
```bash
npm run dev              # Servidor desarrollo
npm run dev:turbo        # Servidor con Turbopack
npm run build            # Build producción
npm start                # Servidor producción
```

### Base de Datos
```bash
npx prisma studio        # Ver BD en navegador (puerto 5555)
npx prisma generate      # Regenerar cliente Prisma
npm run seed             # Re-ejecutar seed (⚠️ borra datos)
npx prisma migrate dev   # Crear nueva migración
```

### Utilidades
```bash
npm run lint             # Verificar código
```

---

## 📦 Lo Que Ya Está Configurado

✅ **Variables de Entorno** - .env creado con AUTH_SECRET  
✅ **Base de Datos** - PostgreSQL con datos de prueba  
✅ **Autenticación** - NextAuth v5 configurado  
✅ **Middleware** - Protección de rutas activa  
✅ **Productos** - ~50 productos de ejemplo  
✅ **Usuarios** - 2 usuarios de prueba  
✅ **Categorías** - Shirts, Pants, Hoodies, Hats  
✅ **Países** - Lista completa de países  

---

## ⚠️ Configuraciones Opcionales

### PayPal (Para Pagos Reales)
**No es necesario para desarrollo** - El flujo funciona sin esto

1. Crear cuenta en: https://developer.paypal.com
2. Obtener credenciales
3. Agregar a `.env`:
```env
NEXT_PUBLIC_PAYPAL_CLIENT_ID=tu_client_id_aqui
PAYPAL_SECRET=tu_secret_aqui
```

### Cloudinary (Para Subir Imágenes Nuevas)
**No es necesario para desarrollo** - Las imágenes del seed ya funcionan

1. Crear cuenta en: https://cloudinary.com
2. Obtener API URL
3. Agregar a `.env`:
```env
CLOUDINARY_URL=cloudinary://API_KEY:API_SECRET@CLOUD_NAME
```

---

## 🔍 Verificar que Todo Funciona

### 1. Arrancar el Servidor
```bash
npm run dev
```
Deberías ver: `✓ Ready in Xms`

### 2. Probar Login
1. Ve a http://localhost:3000/auth/login
2. Usa: fernando@google.com / 123456
3. Deberías entrar al sistema

### 3. Ver Productos
1. Ve a http://localhost:3000
2. Deberías ver el catálogo de productos
3. Prueba la paginación

### 4. Probar Carrito
1. Haz clic en un producto
2. Selecciona talla
3. Agregar al carrito
4. Ve a /cart

### 5. Panel Admin
1. Login como fernando@google.com
2. Ve a http://localhost:3000/admin
3. Deberías ver el panel de administración

---

## 🐛 Solución de Problemas

### El servidor no arranca
```bash
# Limpiar y reinstalar
rm -rf node_modules .next
npm install
npm run dev
```

### Error de Prisma
```bash
# Regenerar cliente
npx prisma generate
npm run dev
```

### Error de base de datos
```bash
# Verificar que Docker esté corriendo
docker ps

# Si no está, arrancar:
docker compose up -d

# Verificar conexión
npx prisma studio
```

### Reiniciar datos de prueba
```bash
# Re-ejecutar seed (⚠️ borra todos los datos)
npm run seed
```

---

## 📚 Tecnologías Utilizadas

- **Framework**: Next.js 14 (App Router)
- **Lenguaje**: TypeScript
- **Base de Datos**: PostgreSQL + Prisma ORM
- **Autenticación**: NextAuth v5
- **Estilos**: TailwindCSS
- **Estado**: Zustand
- **Formularios**: React Hook Form + Zod
- **Pagos**: PayPal SDK
- **Imágenes**: Cloudinary
- **UI**: React Icons, Swiper

---

## 📝 Próximos Pasos

1. ✅ **Arrancar el proyecto**: `npm run dev`
2. ✅ **Explorar el código**: Revisa la estructura en `src/`
3. ✅ **Probar funcionalidades**: Login, productos, carrito, admin
4. ⚠️ **Configurar PayPal**: Si necesitas procesar pagos reales
5. ⚠️ **Configurar Cloudinary**: Si necesitas subir imágenes nuevas

---

## 🎉 ¡Listo para Desarrollar!

El proyecto está **100% funcional** para desarrollo local.  
Todas las características principales están operativas.

**Para comenzar ahora mismo:**
```bash
npm run dev
```

Luego visita: http://localhost:3000
