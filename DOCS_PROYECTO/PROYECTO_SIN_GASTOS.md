# 🎯 PROYECTO 100% FUNCIONAL SIN GASTOS - TESLO SHOP

## 📋 Configuración para SENA - Proyecto de Demostración

Este proyecto está configurado para **funcionar al 100% SIN INVERSIÓN**, usando únicamente servicios gratuitos y almacenamiento local.

---

## ✅ Configuración Actual (TODO GRATIS)

### 1. Base de Datos - PostgreSQL en Docker (GRATIS)
✅ **Docker** - Contenedor PostgreSQL corriendo localmente
- Sin costos de servidores
- Sin límites de uso
- Datos seguros en tu máquina

```bash
# Ver base de datos corriendo
docker ps

# Acceder a Prisma Studio (interfaz visual)
npx prisma studio
```

### 2. Almacenamiento de Imágenes - LOCAL (GRATIS)
✅ **Sistema de archivos local** - Sin Cloudinary ni servicios de pago
- Las imágenes se guardan en `public/uploads/products/`
- Sin límites de almacenamiento
- Sin costos mensuales
- **Alternativa automática a Cloudinary**

**Funcionamiento:**
- Si NO configuras Cloudinary → Usa almacenamiento LOCAL (GRATIS)
- Si configuras Cloudinary → Usa Cloudinary (también tiene plan gratuito)

### 3. Procesamiento de Pagos - DOS OPCIONES (GRATIS)

#### Opción 1: Simulación Automática (RECOMENDADO - SIN CONFIGURACIÓN)
✅ **Sistema de simulación integrado** - Funciona sin configurar nada

**Funcionamiento:**
- El proyecto detecta que NO hay PayPal configurado
- Muestra botón "Simular Pago Exitoso"
- Al hacer clic, marca la orden como pagada
- Genera ID de transacción único: DEMO-[timestamp]-[random]
- **Sin configuración, sin cuentas, sin complicaciones**

**Ventajas:**
- ✅ Funciona inmediatamente
- ✅ 0 minutos de configuración
- ✅ Sin cuentas externas
- ✅ Perfecto para SENA

**📄 Ver guía completa:** `SIMULACION_PAGOS.md`

#### Opción 2: PayPal Sandbox (OPCIONAL - MÁS REALISTA)
✅ **PayPal Modo Sandbox** - Ambiente de pruebas SIN dinero real

**Cómo Configurar PayPal Sandbox (GRATIS):**

#### Paso 1: Crear Cuenta PayPal Developer (Gratis)
1. Ve a: https://developer.paypal.com/
2. Crea una cuenta (o usa tu cuenta de PayPal personal)
3. Accede al Dashboard

#### Paso 2: Obtener Credenciales de Sandbox
1. En el Dashboard de PayPal Developer
2. Ve a **"Apps & Credentials"**
3. Selecciona **"Sandbox"** (no "Live")
4. Haz clic en **"Create App"**
5. Dale un nombre: "Teslo Shop SENA"
6. Copia las credenciales:
   - **Client ID** → `NEXT_PUBLIC_PAYPAL_CLIENT_ID`
   - **Secret** → `PAYPAL_SECRET`

#### Paso 3: Actualizar .env
```env
# PayPal Sandbox (MODO PRUEBA - GRATIS)
NEXT_PUBLIC_PAYPAL_CLIENT_ID=tu_client_id_de_sandbox_aqui
PAYPAL_SECRET=tu_secret_de_sandbox_aqui

# URLs ya configuradas para SANDBOX (modo prueba)
PAYPAL_OAUTH_URL=https://api-m.sandbox.paypal.com/v1/oauth2/token
PAYPAL_ORDERS_URL=https://api.sandbox.paypal.com/v2/checkout/orders
```

#### Paso 4: Usar Cuentas de Prueba
PayPal Sandbox crea automáticamente cuentas de prueba:
- **Comprador de prueba**: Para simular compras
- **Vendedor de prueba**: Para recibir pagos

**Ver cuentas de prueba:**
1. Dashboard de PayPal Developer
2. **"Sandbox"** → **"Accounts"**
3. Verás usuarios de prueba con dinero ficticio

---

## 🔐 Panel de Administración - Control Total

### Acceso Administrador

```
Email: fernando@google.com
Password: 123456
```

### Funcionalidades del Admin:

#### 1. **Dashboard Principal** (`/admin`)
- Vista general del sistema
- Acceso rápido a todas las secciones
- Control total de la plataforma

#### 2. **Gestión de Productos** (`/admin/products`)
- ✅ Crear nuevos productos
- ✅ Editar productos existentes
- ✅ Subir imágenes (almacenamiento local GRATIS)
- ✅ Cambiar precios, stock, tallas
- ✅ Gestionar categorías
- ✅ Control de inventario

#### 3. **Gestión de Órdenes** (`/admin/orders`)
- ✅ Ver todas las órdenes
- ✅ Estado de pagos (pagado/pendiente)
- ✅ Detalles de cada orden
- ✅ Información de clientes
- ✅ Productos ordenados
- ✅ Direcciones de envío

#### 4. **Gestión de Usuarios** (`/admin/users`)
- ✅ Ver todos los usuarios registrados
- ✅ Cambiar roles (user ↔ admin)
- ✅ Ver información de usuarios
- ✅ Control completo de permisos

#### 5. **Creación/Edición de Productos** (`/admin/product/[slug]`)
- ✅ Formulario completo
- ✅ Validación de datos
- ✅ Subida múltiple de imágenes
- ✅ Gestión de tallas
- ✅ Categorización

---

## 🚀 Iniciar el Proyecto

### Requisitos Previos
- ✅ Node.js instalado
- ✅ Docker Desktop corriendo
- ✅ Base de datos ya configurada

### Comandos

```bash
# 1. Iniciar Docker (si no está corriendo)
docker compose up -d

# 2. Iniciar aplicación
npm run dev

# 3. Acceder al proyecto
http://localhost:3000
```

---

## 📊 Flujo de Trabajo Completo (Sin Gastos)

### Para Usuarios:
1. **Navegar** → Catálogo de productos
2. **Agregar al carrito** → LocalStorage (gratis)
3. **Checkout** → Crear orden
4. **Pagar** → PayPal Sandbox (dinero ficticio)
5. **Confirmar** → Orden marcada como pagada

### Para Administradores:
1. **Login** como admin
2. **Dashboard** → `/admin`
3. **Gestionar productos** → Crear, editar, eliminar
4. **Subir imágenes** → Almacenamiento local (sin costos)
5. **Ver órdenes** → Todas las compras
6. **Gestionar usuarios** → Cambiar roles

---

## 🎓 Funcionalidades para Demostración SENA

### ✅ Todo Implementado y Funcional:

1. **Sistema de Autenticación**
   - Registro de usuarios
   - Login/Logout
   - Sesiones persistentes
   - Roles (admin/user)

2. **Catálogo de Productos**
   - ~50 productos pre-cargados
   - Filtrado por categoría
   - Filtrado por género
   - Paginación
   - Búsqueda

3. **Carrito de Compras**
   - Agregar/Eliminar productos
   - Cambiar cantidades
   - Persistencia en localStorage
   - Resumen de precios

4. **Sistema de Órdenes**
   - Crear órdenes
   - Direcciones de envío
   - Resumen de compra
   - Historial de órdenes

5. **Procesamiento de Pagos**
   - Integración PayPal Sandbox
   - Pagos de prueba
   - Verificación de transacciones
   - Actualización de estado

6. **Panel de Administración**
   - Dashboard completo
   - CRUD de productos
   - Gestión de órdenes
   - Gestión de usuarios
   - Subida de imágenes

7. **Base de Datos**
   - PostgreSQL en Docker
   - Migraciones con Prisma
   - Seed de datos de prueba
   - Relaciones entre tablas

---

## 🧪 Cómo Probar el Pago (Sin Gastar Dinero)

### Escenario de Prueba:

1. **Como Cliente:**
   - Login como `melissa@google.com` / `123456`
   - Agrega productos al carrito
   - Ve al checkout (`/checkout/address`)
   - Completa la dirección
   - Ve a confirmar orden (`/checkout`)
   - Haz clic en "PayPal"

2. **En PayPal Sandbox:**
   - Se abrirá ventana de PayPal
   - Usa cuenta de prueba de PayPal Sandbox
   - Confirma el pago (dinero ficticio)
   - Retorna a la aplicación

3. **Como Admin:**
   - Login como `fernando@google.com` / `123456`
   - Ve a `/admin/orders`
   - Verás la orden marcada como "Pagada" ✅

---

## 📁 Estructura del Proyecto

```
teslo-shop/
├── .env                          # Variables de entorno
├── docker-compose.yml            # PostgreSQL local
├── prisma/
│   ├── schema.prisma            # Esquema de base de datos
│   └── migrations/              # Migraciones aplicadas
├── public/
│   ├── products/                # Imágenes de productos del seed
│   └── uploads/                 # Imágenes subidas por admin (local)
│       └── products/            # Carpeta auto-creada
├── src/
│   ├── actions/                 # Server Actions
│   │   ├── product/
│   │   │   ├── upload-image-local.ts  # ⭐ Subida local GRATIS
│   │   │   └── create-update-product.ts
│   │   ├── payments/
│   │   │   └── paypal-check-payment.ts  # PayPal Sandbox
│   │   ├── order/
│   │   └── user/
│   ├── app/
│   │   ├── (shop)/
│   │   │   ├── admin/          # Panel de administración
│   │   │   ├── cart/           # Carrito
│   │   │   ├── checkout/       # Proceso de compra
│   │   │   ├── orders/         # Órdenes del usuario
│   │   │   └── product/        # Detalles de producto
│   │   └── auth/               # Login/Registro
│   ├── components/              # Componentes UI
│   └── store/                   # Estado global (Zustand)
└── package.json
```

---

## 🔧 Mantenimiento y Debugging

### Ver Base de Datos
```bash
# Interfaz visual
npx prisma studio

# Acceder a PostgreSQL directamente
docker exec -it [container_name] psql -U postgres -d teslo-shop
```

### Resetear Datos de Prueba
```bash
# Re-ejecutar seed (⚠️ borra todos los datos)
npm run seed
```

### Ver Logs
```bash
# Ver logs de Docker
docker logs [container_name]

# Ver logs de la aplicación
npm run dev  # Los logs aparecen en la consola
```

---

## ✅ Checklist de Demostración SENA

### Antes de la Presentación:

- [ ] Docker corriendo (`docker ps`)
- [ ] Base de datos con seed (`npx prisma studio`)
- [ ] Proyecto corriendo (`npm run dev`)
- [ ] Login admin funcional (`fernando@google.com`)
- [ ] PayPal Sandbox configurado (si necesitas mostrar pagos)

### Durante la Demostración:

1. [ ] Mostrar catálogo de productos
2. [ ] Filtrar por categorías
3. [ ] Agregar al carrito
4. [ ] Proceso de checkout
5. [ ] Pago con PayPal Sandbox
6. [ ] Login como admin
7. [ ] Dashboard de administración
8. [ ] Crear/Editar producto
9. [ ] Subir imagen (almacenamiento local)
10. [ ] Ver órdenes
11. [ ] Gestionar usuarios

---

## 💰 Resumen de Costos

| Servicio | Plan | Costo |
|----------|------|-------|
| Base de Datos (PostgreSQL en Docker) | Local | **GRATIS** |
| Almacenamiento de Imágenes | Local | **GRATIS** |
| PayPal | Sandbox | **GRATIS** |
| Hosting (desarrollo local) | Local | **GRATIS** |
| **TOTAL** | | **$0.00** |

---

## 🎯 Conclusión

Este proyecto es **100% funcional SIN GASTOS** para demostración SENA:
- ✅ Base de datos completa y funcional
- ✅ Sistema de autenticación robusto
- ✅ Panel de administración con control total
- ✅ Procesamiento de pagos en modo prueba
- ✅ Almacenamiento local de imágenes
- ✅ Todas las funcionalidades operativas

**No requiere ninguna inversión** y demuestra competencia completa en desarrollo web full-stack.
