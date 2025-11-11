# 💳 Guía Paso a Paso: PayPal Sandbox (GRATIS)

## 🎯 ¿Qué es PayPal Sandbox?

PayPal Sandbox es un **ambiente de pruebas GRATUITO** que simula transacciones reales sin usar dinero verdadero. Perfecto para proyectos educativos y demostraciones.

---

## ✅ Paso 1: Crear Cuenta en PayPal Developer

### 1.1 Acceder al sitio
```
https://developer.paypal.com/
```

### 1.2 Crear cuenta o iniciar sesión
- Puedes usar tu cuenta personal de PayPal
- O crear una nueva específica para desarrollo
- **ES COMPLETAMENTE GRATIS**

---

## ✅ Paso 2: Acceder al Dashboard

### 2.1 Ir al Dashboard
Una vez logueado, verás el **Developer Dashboard**

### 2.2 Verificar modo Sandbox
En la parte superior derecha, asegúrate de estar en modo **"Sandbox"** (no "Live")

---

## ✅ Paso 3: Crear una App

### 3.1 Ir a Apps & Credentials
1. En el menú lateral, haz clic en **"Apps & Credentials"**
2. Asegúrate de estar en la pestaña **"Sandbox"**

### 3.2 Crear nueva App
1. Haz clic en **"Create App"**
2. Nombre de la app: `Nova Shop SENA` (o el que prefieras)
3. Selecciona una cuenta de sandbox (se crea automáticamente)
4. Haz clic en **"Create App"**

---

## ✅ Paso 4: Obtener Credenciales

### 4.1 Copiar Client ID
En la página de tu app verás:
```
Client ID: AXxxxxxxxxxxxxxxxxxxxxxxxxxxx
```
**Copia este valor completo**

### 4.2 Mostrar y copiar Secret
1. Haz clic en **"Show"** debajo de "Secret"
2. **Copia el valor que aparece**
3. ⚠️ **Importante**: Guárdalo en un lugar seguro

---

## ✅ Paso 5: Configurar en el Proyecto

### 5.1 Abrir archivo .env
Abre el archivo `.env` en la raíz del proyecto

### 5.2 Actualizar credenciales
Reemplaza estas líneas:

```env
# ==== PayPal SANDBOX (MODO PRUEBA - GRATIS)
# Obtén tus credenciales en: https://developer.paypal.com/dashboard

NEXT_PUBLIC_PAYPAL_CLIENT_ID=TU_CLIENT_ID_AQUI
PAYPAL_SECRET=TU_SECRET_AQUI

# URLs de Sandbox (NO CAMBIAR - Ya configuradas)
PAYPAL_OAUTH_URL=https://api-m.sandbox.paypal.com/v1/oauth2/token
PAYPAL_ORDERS_URL=https://api.sandbox.paypal.com/v2/checkout/orders
```

### 5.3 Ejemplo completo:
```env
NEXT_PUBLIC_PAYPAL_CLIENT_ID=AXxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
PAYPAL_SECRET=ELxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

PAYPAL_OAUTH_URL=https://api-m.sandbox.paypal.com/v1/oauth2/token
PAYPAL_ORDERS_URL=https://api.sandbox.paypal.com/v2/checkout/orders
```

---

## ✅ Paso 6: Crear Cuentas de Prueba

### 6.1 Acceder a cuentas Sandbox
1. En PayPal Developer Dashboard
2. Ve a **"Sandbox"** → **"Accounts"**

### 6.2 Cuentas automáticas
PayPal crea automáticamente:
- **Personal Account** (Comprador) - Tiene dinero ficticio
- **Business Account** (Vendedor) - Recibe pagos

### 6.3 Ver detalles de cuenta
1. Haz clic en los **"..."** junto a una cuenta
2. Selecciona **"View/Edit Account"**
3. Verás:
   - Email de la cuenta
   - Password
   - Balance (dinero ficticio)

### 6.4 Crear cuenta adicional (opcional)
Si quieres más cuentas de prueba:
1. Haz clic en **"Create Account"**
2. Selecciona **"Personal"** para compradores
3. Elige país y configura datos
4. La cuenta se crea con dinero ficticio

---

## ✅ Paso 7: Probar el Sistema

### 7.1 Iniciar el proyecto
```bash
npm run dev
```

### 7.2 Crear una orden
1. Accede a `http://localhost:3000`
2. Agrega productos al carrito
3. Ve al checkout
4. Completa la dirección
5. Haz clic en **"Pagar con PayPal"**

### 7.3 Pagar con cuenta de prueba
1. Se abrirá ventana de PayPal Sandbox
2. **Usa las credenciales de tu cuenta de prueba Personal**
   - Email: De una cuenta Personal de Sandbox
   - Password: Contraseña de esa cuenta
3. Confirma el pago
4. Serás redirigido a la página de confirmación

### 7.4 Verificar en admin
1. Login como admin (`fernando@google.com`)
2. Ve a `/admin/orders`
3. La orden debe aparecer como **"Pagada"** ✅

---

## 🧪 Escenarios de Prueba

### Escenario 1: Compra Exitosa
```
1. Usuario compra producto
2. Paga con cuenta Sandbox Personal
3. Pago se procesa correctamente
4. Orden marcada como pagada
```

### Escenario 2: Múltiples Usuarios
```
1. Crear varias órdenes con usuarios diferentes
2. Usar diferentes cuentas de prueba
3. Verificar en admin todas las órdenes
```

### Escenario 3: Verificación de Transacciones
```
1. En PayPal Developer Dashboard
2. Ve a "Sandbox" → "Accounts"
3. Revisa el balance de las cuentas
4. Verás las transacciones reflejadas
```

---

## 📊 Datos de Ejemplo para Pruebas

### Ejemplo de Cuenta Personal (Comprador)
```
Email: sb-xxxxx47@personal.example.com
Password: (generada automáticamente)
Balance: $5,000.00 USD (ficticio)
```

### Ejemplo de Cuenta Business (Vendedor - Tu tienda)
```
Email: sb-xxxxx47@business.example.com
Password: (generada automáticamente)
Balance: $0.00 USD
```

---

## ⚙️ Configuración Avanzada (Opcional)

### Webhooks (para notificaciones automáticas)
1. En tu App en PayPal Developer
2. Ve a **"Webhooks"**
3. Agrega URL de webhook (si la tienes)
4. Selecciona eventos a recibir

### Cambiar modo a Live (Producción)
⚠️ **NO NECESARIO PARA SENA**
Para recibir dinero real:
1. Cambiar a pestaña "Live"
2. Crear App en modo Live
3. Verificar cuenta de negocio
4. Actualizar credenciales en .env

---

## 🔍 Verificación

### ✅ Todo está bien si:
- [ ] Puedes ver el botón de PayPal en checkout
- [ ] Al hacer clic, se abre ventana de PayPal Sandbox
- [ ] Puedes iniciar sesión con cuenta de prueba
- [ ] El pago se procesa sin errores
- [ ] La orden se marca como pagada
- [ ] Aparece en el panel de admin

---

## 🐛 Problemas Comunes

### Error: "PayPal button doesn't appear"
**Solución:**
1. Verificar que `NEXT_PUBLIC_PAYPAL_CLIENT_ID` esté en .env
2. Reiniciar el servidor (`npm run dev`)
3. Limpiar caché del navegador

### Error: "Invalid credentials"
**Solución:**
1. Verificar que copiaste las credenciales correctamente
2. Asegurarte de usar credenciales de **Sandbox** (no Live)
3. No tener espacios extra al pegar

### Error: "Transaction could not be processed"
**Solución:**
1. Verificar que la cuenta de prueba tenga fondos
2. Usar cuenta **Personal** para pagar (no Business)
3. Verificar URLs de Sandbox en .env

### El pago se procesa pero no se actualiza la orden
**Solución:**
1. Verificar que `PAYPAL_SECRET` esté configurado
2. Revisar logs en la consola del servidor
3. Verificar conexión a base de datos

---

## 📚 Recursos Adicionales

- **PayPal Developer**: https://developer.paypal.com/
- **Documentación Sandbox**: https://developer.paypal.com/docs/api-basics/sandbox/
- **Cuentas de Prueba**: https://developer.paypal.com/docs/api-basics/sandbox/accounts/

---

## 💡 Consejos Pro

1. **Guarda tus credenciales**: Anota Client ID y Secret en lugar seguro
2. **Usa múltiples cuentas**: Crea varias cuentas de prueba para diferentes escenarios
3. **Monitorea transacciones**: Revisa el dashboard de PayPal regularmente
4. **Modo Sandbox siempre**: Nunca uses credenciales Live en desarrollo

---

## ✅ Resumen Rápido

```bash
1. Crear cuenta en https://developer.paypal.com/
2. Ir a Apps & Credentials → Sandbox
3. Create App → Nombre: "Nova Shop SENA"
4. Copiar Client ID y Secret
5. Pegar en archivo .env del proyecto
6. Reiniciar servidor: npm run dev
7. Probar checkout con cuenta de prueba Sandbox
8. ¡Listo! 🎉
```

---

## 🎓 Para Presentación SENA

**Menciona en tu presentación:**
- ✅ Uso de PayPal Sandbox (ambiente de pruebas profesional)
- ✅ Sin costos ni inversión
- ✅ Simula pagos reales de forma segura
- ✅ Mismo sistema que usan tiendas en producción
- ✅ Demuestra integración con APIs de terceros

**Esto demuestra:**
- Conocimiento de APIs externas
- Manejo de transacciones
- Seguridad en pagos
- Desarrollo profesional

---

¡Con esto tu proyecto tiene procesamiento de pagos completamente funcional SIN GASTAR DINERO! 🎉
