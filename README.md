# 🛍️ Nova Shop - E-Commerce Full-Stack

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-15.3-blue?style=for-the-badge&logo=postgresql)
![Prisma](https://img.shields.io/badge/Prisma-ORM-2D3748?style=for-the-badge&logo=prisma)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.0-38B2AC?style=for-the-badge&logo=tailwind-css)

**E-Commerce completo y funcional desarrollado con Next.js 14 y TypeScript**

Proyecto de demostración para SENA - 100% funcional, $0 de costo.

---

## 🌟 Características Principales

### Para Usuarios
- ✅ **Catálogo de Productos** - Filtros por categoría y género
- ✅ **Sistema de Búsqueda** - Búsqueda en tiempo real
- ✅ **Carrito Persistente** - Mantiene productos entre sesiones
- ✅ **Checkout Completo** - Proceso de compra end-to-end
- ✅ **Pagos** - Simulación o PayPal Sandbox
- ✅ **Perfil de Usuario** - Dashboard con estadísticas
- ✅ **Recuperación de Contraseña** - Sistema con tokens seguros
- ✅ **Testimonios de Clientes** - Sistema inteligente con fallback

### Para Administradores
- ✅ **Panel de Control** - Dashboard completo
- ✅ **CRUD de Productos** - Gestión total de catálogo
- ✅ **Subida de Imágenes** - Almacenamiento local (gratis)
- ✅ **Gestión de Órdenes** - Ver y administrar todas las órdenes
- ✅ **Gestión de Usuarios** - Control de roles y permisos

---

## 🚀 Tech Stack

### Frontend
- **Next.js 14** - App Router, Server Components
- **React 18** - Biblioteca UI
- **TypeScript** - Tipado estático
- **TailwindCSS** - Estilos modernos
- **Zustand** - Gestión de estado

### Backend
- **Next.js Server Actions** - API serverless
- **NextAuth v5** - Autenticación
- **Prisma** - ORM
- **PostgreSQL** - Base de datos relacional
- **bcryptjs** - Encriptación de contraseñas

### Infraestructura
- **Docker** - Contenedores para PostgreSQL
- **PayPal SDK** - Integración de pagos (Sandbox)

---

## 📋 Requisitos Previos

- Node.js 18 o superior
- Docker Desktop
- Git (opcional)

---

## 🔧 Instalación

### 1. Clonar el repositorio

```bash
git clone https://github.com/cristianatehortuahz-lab/Teslo-Shop-SENA.git
cd Teslo-Shop-SENA
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Configurar variables de entorno

Crea un archivo `.env` en la raíz del proyecto:

```env
# Base de Datos (puerto 5434 - importante!)
DATABASE_URL="postgresql://postgres:123456@localhost:5434/teslo-shop?schema=public"

# NextAuth
NEXTAUTH_SECRET=tu_secreto_aleatorio_aqui
NEXTAUTH_URL=http://localhost:3000

# PayPal (Opcional - para modo Sandbox)
# NEXT_PUBLIC_PAYPAL_CLIENT_ID=tu_client_id
# PAYPAL_SECRET=tu_secret
PAYPAL_OAUTH_URL=https://api-m.sandbox.paypal.com/v1/oauth2/token
PAYPAL_ORDERS_URL=https://api.sandbox.paypal.com/v2/checkout/orders
```

### 4. Levantar base de datos

```bash
docker compose up -d
```

### 5. Ejecutar migraciones y seed

```bash
npx prisma migrate dev
npm run seed
```

### 6. Iniciar el proyecto

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

---

## 👤 Credenciales de Prueba

### Administrador
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

## 📁 Estructura del Proyecto

```
teslo-shop/
├── prisma/              # Esquema y migraciones de BD
├── public/              # Archivos estáticos
│   ├── products/        # Imágenes de productos (seed)
│   └── uploads/         # Imágenes subidas (local)
├── src/
│   ├── actions/         # Server Actions
│   ├── app/             # Páginas (App Router)
│   ├── components/      # Componentes React
│   ├── lib/             # Utilidades (Prisma)
│   ├── store/           # Estado global (Zustand)
│   └── middleware.ts    # Protección de rutas
├── DOCS_PROYECTO/       # Documentación completa
└── docker-compose.yml   # PostgreSQL local
```

---

## 📚 Documentación

La documentación completa está disponible:

- **GUIA_COMPLETA_NOVA_SHOP.md** - Guía completa de 732 líneas ⭐
- **docs/proyecto/** - Documentación técnica detallada
- **docs/guias/** - Guías rápidas de inicio
- **PRESENTACION/** - PowerPoint y documento Word para SENA

---

## 🎯 Características Destacadas

### Sistema de Recuperación de Contraseña
- Tokens únicos de 64 caracteres
- Expiración automática (1 hora)
- Uso único por seguridad
- Almacenamiento en base de datos
- Simulación de email sin servicios externos

### Sistema de Pagos Dual
- **Simulación**: Funciona sin configuración
- **PayPal Sandbox**: Integración real en modo prueba
- Sin costos, sin dinero real

### Perfil de Usuario Profesional
- Dashboard con estadísticas
- Historial completo de órdenes
- Dirección guardada
- Accesos rápidos

---

## 🛠️ Comandos Disponibles

```bash
# Desarrollo
npm run dev              # Iniciar servidor de desarrollo
npm run dev:turbo        # Con Turbopack
npm run build            # Build para producción
npm start                # Servidor de producción

# Base de Datos
npx prisma studio        # Interfaz visual de BD
npx prisma generate      # Regenerar cliente Prisma
npm run seed             # Recargar datos de prueba

# Docker
docker compose up -d     # Iniciar PostgreSQL
docker compose down      # Detener PostgreSQL
```

---

## 💰 Costo del Proyecto: $0.00 USD

Este proyecto demuestra cómo construir un e-commerce profesional **sin gastar dinero**:

- ✅ Base de datos local (Docker)
- ✅ Almacenamiento local de imágenes
- ✅ PayPal en modo Sandbox
- ✅ Sin servicios de pago externos

**Ahorro demostrado:** $480-1,320 USD/año vs soluciones comerciales

---

## 📊 Métricas

```
Archivos TypeScript: 110+
Líneas de código: 6,500+
Componentes React: 40+
Server Actions: 27
Productos de prueba: 50+
Tablas en BD: 10
Documentación: 732 líneas
```

---

## 🔐 Seguridad

- ✅ Contraseñas encriptadas (bcryptjs)
- ✅ Tokens de recuperación con expiración
- ✅ Sesiones persistentes (NextAuth)
- ✅ Middleware de protección de rutas
- ✅ Variables de entorno para credenciales
- ✅ Transacciones atómicas en BD

---

## 🚀 Deploy

### Vercel (Recomendado)

1. Sube tu código a GitHub
2. Importa el proyecto en [Vercel](https://vercel.com)
3. Configura las variables de entorno
4. Deploy automático

### Variables de Entorno en Producción

```env
DATABASE_URL=tu_database_url_produccion
NEXTAUTH_SECRET=secreto_produccion
NEXTAUTH_URL=https://tu-dominio.com
```

---

## 🤝 Contribuciones

Este es un proyecto educativo para SENA. Las contribuciones son bienvenidas:

1. Fork el proyecto
2. Crea tu rama (`git checkout -b feature/nueva-caracteristica`)
3. Commit tus cambios (`git commit -m 'Agregar nueva característica'`)
4. Push a la rama (`git push origin feature/nueva-caracteristica`)
5. Abre un Pull Request

---

## 📝 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

---

## 👨‍💻 Autor

**Proyecto SENA**  
Desarrollado como demostración de competencias en desarrollo web full-stack.

---

## 🙏 Agradecimientos

- Next.js team por el framework
- Vercel por el hosting
- Prisma por el ORM
- PayPal por la API de sandbox

---

## 📧 Contacto

Para preguntas o soporte, abre un issue en este repositorio.

---

**⭐ Si este proyecto te fue útil, considera darle una estrella ⭐**

---

**Estado:** ✅ 100% Funcional | **Costo:** $0.00 USD | **Listo para Producción**
