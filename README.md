# 🛍️ TESLO SHOP - Proyecto Final SENA

E-commerce completo desarrollado con Next.js 14, Prisma, PostgreSQL y NextAuth.

## ✨ Características Principales

- 🔐 **Autenticación completa** con NextAuth v5
- 🔑 **Recuperación de contraseña** ("Olvidé mi contraseña")
- 👤 **Perfil de usuario** con estadísticas y datos completos
- 👥 **Sistema de roles** (Admin/User)
- 🛒 **Carrito de compras** con persistencia
- 💳 **Pagos inteligentes** (Simulación automática o PayPal Sandbox)
- 📦 **Panel de administración** completo
- 🖼️ **Gestión de imágenes** (almacenamiento local GRATIS)
- 📊 **Base de datos** PostgreSQL con Docker
- 🎨 **UI moderna** con TailwindCSS

---

## 🚀 Inicio Rápido

### 1️⃣ Clonar el repositorio
```bash
git clone <repository-url>
cd next-teslo-shop-fin-seccion-24
```

### 2️⃣ Instalar dependencias
```bash
npm install
```

### 3️⃣ Configurar variables de entorno
El archivo `.env` ya está creado con la configuración básica.
**No necesitas modificar nada para empezar.**

### 4️⃣ Levantar base de datos
```bash
docker compose up -d
```

### 5️⃣ Ejecutar migraciones (Ya ejecutadas)
```bash
# Solo si necesitas resetear la BD
npx prisma migrate dev
```

### 6️⃣ Cargar datos de prueba (Ya ejecutado)
```bash
# Solo si necesitas resetear los datos
npm run seed
```

### 7️⃣ Iniciar el proyecto
```bash
npm run dev
```

### 8️⃣ Acceder a la aplicación
```
http://localhost:3000
```

---

## 👤 Credenciales de Acceso

### Administrador (Control Total)
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

## 🎯 Proyecto 100% Funcional SIN GASTOS

Este proyecto está configurado para funcionar **COMPLETAMENTE GRATIS**:

✅ **Base de Datos**: PostgreSQL en Docker (local, sin costos)  
✅ **Imágenes**: Almacenamiento local (sin Cloudinary)  
✅ **Pagos**: PayPal Sandbox (modo prueba, dinero ficticio)  
✅ **Hosting**: Desarrollo local (sin servidores)

**📄 Ver guía completa**: [PROYECTO_SIN_GASTOS.md](./PROYECTO_SIN_GASTOS.md)

---

## 💳 Sistema de Pagos (100% Funcional)

### ✅ Modo Simulación (AUTOMÁTICO - Sin configuración)

**El proyecto incluye simulación de pagos que funciona SIN configurar nada:**

- ✅ **Completamente funcional** desde el primer momento
- ✅ **Sin PayPal ni servicios externos** necesarios
- ✅ **Interfaz profesional** con feedback visual
- ✅ **Genera IDs de transacción** únicos
- ✅ **Ideal para SENA** y proyectos educativos

**Uso:**
1. Crea una orden
2. Click en "Simular Pago Exitoso"
3. ¡Listo! Orden marcada como pagada ✅

**📄 Guía completa**: [SIMULACION_PAGOS.md](./SIMULACION_PAGOS.md)

---

### 🔧 PayPal Sandbox (OPCIONAL - Más Realista)

Si quieres experiencia de PayPal real en modo prueba:

1. **Crear cuenta en PayPal Developer**: https://developer.paypal.com
2. **Ir a Apps & Credentials** → Sandbox
3. **Crear App** → Copiar Client ID y Secret
4. **Actualizar .env**:
```env
NEXT_PUBLIC_PAYPAL_CLIENT_ID=tu_client_id_de_sandbox
PAYPAL_SECRET=tu_secret_de_sandbox
```

El sistema **detecta automáticamente** y cambia a PayPal real.

**📄 Guía paso a paso**: [GUIA_PAYPAL_SANDBOX.md](./GUIA_PAYPAL_SANDBOX.md)

---

## 📊 Panel de Administración

Accede a `/admin` con la cuenta de administrador:

### Funcionalidades:
- ✅ **Dashboard** con resumen
- ✅ **Productos**: Crear, editar, eliminar
- ✅ **Órdenes**: Ver y gestionar todas las compras
- ✅ **Usuarios**: Administrar y cambiar roles
- ✅ **Imágenes**: Subir imágenes (almacenamiento local)

---

## 🛠️ Tecnologías Utilizadas

- **Framework**: Next.js 14 (App Router)
- **Lenguaje**: TypeScript
- **Base de Datos**: PostgreSQL + Prisma ORM
- **Autenticación**: NextAuth v5
- **Estilos**: TailwindCSS
- **Estado Global**: Zustand
- **Formularios**: React Hook Form + Zod
- **Pagos**: PayPal SDK (Sandbox)
- **Contenedores**: Docker

---

## 📁 Estructura del Proyecto

```
src/
├── actions/           # Server Actions
│   ├── product/       # CRUD productos + subida imágenes
│   ├── order/         # Gestión de órdenes
│   ├── user/          # Gestión de usuarios
│   └── payments/      # PayPal integration
├── app/
│   ├── (shop)/        # Páginas públicas
│   │   ├── admin/     # Panel de administración
│   │   ├── cart/      # Carrito
│   │   ├── checkout/  # Proceso de compra
│   │   └── product/   # Detalle de producto
│   └── auth/          # Login/Registro
├── components/        # Componentes reutilizables
├── store/            # Estado global (Zustand)
└── lib/              # Utilidades (Prisma client)
```

---

## 🗄️ Base de Datos

### Ver datos en interfaz visual:
```bash
npx prisma studio
```
Abre: http://localhost:5555

### Modelos principales:
- **User**: Usuarios y roles
- **Product**: Catálogo de productos
- **Order**: Órdenes de compra
- **Category**: Categorías de productos
- **Country**: Países para direcciones

---

## 📝 Comandos Útiles

### Desarrollo
```bash
npm run dev              # Servidor desarrollo
npm run dev:turbo        # Servidor con Turbopack
npm run build            # Build para producción
npm start                # Servidor producción
```

### Base de Datos
```bash
docker compose up -d     # Iniciar PostgreSQL
docker compose down      # Detener PostgreSQL
npx prisma studio        # Interfaz visual BD
npx prisma generate      # Regenerar cliente Prisma
npm run seed             # Recargar datos de prueba
```

### Limpieza
```bash
docker compose down      # Detener contenedores
rm -rf node_modules .next
npm install             # Reinstalar dependencias
```

---

## 🎓 Para Presentación SENA

### Checklist de Demostración:

- [ ] Docker corriendo (`docker ps`)
- [ ] Proyecto iniciado (`npm run dev`)
- [ ] Login admin funcional
- [ ] Catálogo de productos visible
- [ ] Carrito funcional
- [ ] Panel admin accesible
- [ ] Órdenes creadas (si hay)

### Flujo de Demostración Sugerido:

1. **Mostrar catálogo** de productos
2. **Filtrar** por categorías y género
3. **Agregar productos** al carrito
4. **Checkout** y crear orden
5. **Login como admin** (fernando@google.com)
6. **Dashboard** de administración
7. **Crear/Editar** un producto
8. **Subir imagen** (almacenamiento local)
9. **Ver órdenes** generadas
10. **Gestionar usuarios** y roles

---

## 📚 Documentación Adicional

- [PROYECTO_SIN_GASTOS.md](./PROYECTO_SIN_GASTOS.md) - Guía completa sin costos
- [SETUP_COMPLETO.md](./SETUP_COMPLETO.md) - Detalles de configuración
- [CHECKLIST_VERIFICACION.md](./CHECKLIST_VERIFICACION.md) - Verificación de funcionalidades
- [INICIO_RAPIDO.md](./INICIO_RAPIDO.md) - Guía de inicio rápido

---

## 🐛 Solución de Problemas

### Error: "Cannot connect to database"
```bash
docker compose up -d
npx prisma generate
```

### Error: "Module not found"
```bash
rm -rf node_modules package-lock.json
npm install
```

### Resetear datos de prueba
```bash
npm run seed  # ⚠️ Borra todos los datos
```

---

## 💡 Estado del Proyecto

🟢 **COMPLETAMENTE FUNCIONAL**
- ✅ Base de datos configurada
- ✅ Autenticación operativa
- ✅ Panel admin completo
- ✅ Carrito y checkout funcionales
- ✅ Imágenes (almacenamiento local)
- ✅ ~50 productos de prueba
- ✅ Sistema de órdenes
- ✅ Gestión de usuarios

**Listo para desarrollo y demostración sin costos adicionales.**

---

## 📄 Licencia

Proyecto educativo para SENA - Uso académico

---

## 👨‍💻 Soporte

Para problemas o preguntas:
1. Verificar documentación en archivos `.md`
2. Revisar logs con `npm run dev`
3. Verificar base de datos con `npx prisma studio`