# ⚡ Comandos Rápidos - Nova Shop

## 🚀 Iniciar el Proyecto

```bash
# 1. Iniciar Docker (si no está corriendo)
docker compose up -d

# 2. Iniciar aplicación
npm run dev

# 3. Acceder
http://localhost:3000
```

---

## 🔑 Credenciales de Acceso

### Admin
```
Email: fernando@google.com
Password: 123456
```

### Usuario
```
Email: melissa@google.com
Password: 123456
```

---

## 📁 URLs Principales

```
Homepage:        http://localhost:3000
Admin Panel:     http://localhost:3000/admin
Login:           http://localhost:3000/auth/login
Carrito:         http://localhost:3000/cart
Productos Admin: http://localhost:3000/admin/products
Usuarios Admin:  http://localhost:3000/admin/users
Órdenes Admin:   http://localhost:3000/admin/orders
```

---

## 🐳 Docker (Base de Datos)

```bash
# Iniciar PostgreSQL
docker compose up -d

# Detener PostgreSQL
docker compose down

# Ver contenedores corriendo
docker ps

# Ver logs de PostgreSQL
docker logs [container_name]

# Reiniciar contenedor
docker compose restart
```

---

## 🗄️ Base de Datos

```bash
# Ver base de datos en navegador (Prisma Studio)
npx prisma studio
# Abre: http://localhost:5555

# Regenerar cliente Prisma
npx prisma generate

# Aplicar migraciones
npx prisma migrate deploy

# Crear nueva migración (si modificas schema.prisma)
npx prisma migrate dev --name nombre_migracion

# Resetear base de datos (⚠️ borra todo)
npx prisma migrate reset

# Recargar datos de prueba (⚠️ borra datos)
npm run seed
```

---

## 📦 Desarrollo

```bash
# Servidor desarrollo (normal)
npm run dev

# Servidor desarrollo (con Turbopack - más rápido)
npm run dev:turbo

# Build para producción
npm run build

# Iniciar en modo producción
npm start

# Verificar código (ESLint)
npm run lint
```

---

## 🧹 Limpieza

```bash
# Limpiar caché de Next.js
rm -rf .next

# Limpiar node_modules
rm -rf node_modules package-lock.json
npm install

# Limpiar todo
docker compose down
rm -rf node_modules .next postgres
npm install
docker compose up -d
npm run seed
```

---

## 🔧 Problemas Comunes

### No se conecta a la base de datos
```bash
docker compose up -d
npx prisma generate
npm run dev
```

### Error "Module not found"
```bash
rm -rf node_modules package-lock.json
npm install
```

### La página no carga
```bash
# Limpiar caché y reiniciar
rm -rf .next
npm run dev
```

### Resetear todo a estado inicial
```bash
# Detener todo
docker compose down

# Limpiar
rm -rf node_modules .next postgres package-lock.json

# Reinstalar
npm install

# Iniciar Docker
docker compose up -d

# Generar cliente Prisma
npx prisma generate

# Aplicar migraciones
npx prisma migrate deploy

# Cargar datos
npm run seed

# Iniciar proyecto
npm run dev
```

---

## 📊 Verificación

```bash
# Ver estado de Docker
docker ps

# Ver estado de base de datos
npx prisma studio

# Ver proyecto corriendo
http://localhost:3000

# Ver logs del proyecto
# (aparecen en la terminal donde ejecutaste npm run dev)
```

---

## 🎯 Para Demostración SENA

### Antes de Presentar (Checklist)
```bash
# 1. Verificar Docker
docker ps

# 2. Verificar BD tiene datos
npx prisma studio

# 3. Iniciar proyecto
npm run dev

# 4. Abrir navegador en:
http://localhost:3000

# 5. Preparar pestañas:
# - Homepage
# - /admin (login primero)
# - /admin/products
# - /admin/users
# - /admin/orders
```

### Durante la Demostración
```
1. Mostrar catálogo (homepage)
2. Filtrar productos
3. Agregar al carrito
4. Checkout
5. Login admin
6. Dashboard admin
7. Crear producto
8. Ver órdenes
9. Gestionar usuarios
10. Mostrar Prisma Studio
```

---

## 📝 Archivos de Configuración

### Variables de entorno
```bash
# Ver variables configuradas
cat .env

# Editar variables
notepad .env   # Windows
nano .env      # Linux/Mac
```

### Importante
- ✅ `.env` ya está configurado
- ✅ No necesitas modificar nada para empezar
- ⚠️ PayPal y Cloudinary son opcionales

---

## 🆘 Ayuda Rápida

| Problema | Comando |
|----------|---------|
| Proyecto no inicia | `npm run dev` |
| BD no conecta | `docker compose up -d` |
| Error de Prisma | `npx prisma generate` |
| Resetear datos | `npm run seed` |
| Ver datos | `npx prisma studio` |
| Limpiar todo | `rm -rf .next && npm run dev` |

---

## 📚 Documentación

- **README.md** - Guía principal
- **PROYECTO_SIN_GASTOS.md** - Configuración sin costos
- **GUIA_PAYPAL_SANDBOX.md** - PayPal modo prueba
- **PRESENTACION_SENA.md** - Guía para presentar
- **SETUP_COMPLETO.md** - Detalles técnicos
- **INICIO_RAPIDO.md** - Quick start

---

## 🎓 Para Aprender Más

```bash
# Explorar código
code .

# Ver estructura
tree src/

# Leer documentación de tecnologías:
# - Next.js: https://nextjs.org/docs
# - Prisma: https://www.prisma.io/docs
# - NextAuth: https://next-auth.js.org/
# - TailwindCSS: https://tailwindcss.com/docs
```

---

## ⚡ Atajos de Teclado (para Demostración)

### En el Navegador
```
Ctrl + Shift + R    Reload sin caché
F12                 DevTools
Ctrl + Shift + I    Abrir Inspector
```

### En la Terminal
```
Ctrl + C            Detener servidor
↑ ↓                 Navegar historial de comandos
Tab                 Autocompletar
```

---

## 🎯 Comandos de Un Solo Paso

### Reset completo del proyecto
```bash
docker compose down && rm -rf node_modules .next postgres && npm install && docker compose up -d && npx prisma generate && npx prisma migrate deploy && npm run seed && npm run dev
```

### Verificación rápida
```bash
docker ps && npx prisma studio & npm run dev
```

---

**💡 Tip**: Guarda este archivo como referencia rápida durante el desarrollo y presentación.
