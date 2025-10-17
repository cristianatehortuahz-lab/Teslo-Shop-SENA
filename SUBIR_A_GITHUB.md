# 🚀 GUÍA: Subir Proyecto a GitHub

## ✅ Pasos Completados

1. ✅ Repositorio Git inicializado
2. ✅ Archivos agregados al staging
3. ✅ README profesional creado (`README_GITHUB.md`)
4. ✅ `.gitignore` configurado correctamente

---

## 📋 PASOS PARA SUBIR A GITHUB

### Paso 1: Configurar Git (Primera vez)

Abre una terminal y ejecuta estos comandos con TU información:

```bash
git config --global user.name "Tu Nombre"
git config --global user.email "tu-email@ejemplo.com"
```

**Ejemplo:**
```bash
git config --global user.name "Juan Pérez"
git config --global user.email "juan.perez@gmail.com"
```

### Paso 2: Hacer el Commit Inicial

```bash
cd "c:\Users\Aprendiz\NO BORRAR\next-teslo-shop-fin-seccion-24"

git commit -m "Initial commit: Teslo Shop E-Commerce completo para SENA"
```

### Paso 3: Crear Repositorio en GitHub

1. Ve a [GitHub](https://github.com)
2. Click en el botón **"+"** (arriba derecha) → **"New repository"**
3. Configura el repositorio:
   ```
   Repository name: teslo-shop-sena
   Description: E-Commerce Full-Stack con Next.js 14 - Proyecto SENA
   Visibility: ✅ Public (o Private si prefieres)
   ❌ NO marcar "Initialize with README" (ya lo tienes)
   ```
4. Click en **"Create repository"**

### Paso 4: Renombrar README

Primero renombra el README de GitHub para que sea el principal:

```bash
# En la carpeta del proyecto
move README.md README_ORIGINAL.md
move README_GITHUB.md README.md
```

Luego agregar el cambio:

```bash
git add .
git commit -m "Actualizar README para GitHub"
```

### Paso 5: Conectar con GitHub

GitHub te mostrará comandos. Usa estos (reemplaza TU_USUARIO):

```bash
git branch -M main
git remote add origin https://github.com/TU_USUARIO/teslo-shop-sena.git
git push -u origin main
```

**Ejemplo:**
```bash
git branch -M main
git remote add origin https://github.com/juanperez/teslo-shop-sena.git
git push -u origin main
```

### Paso 6: Autenticación

GitHub te pedirá autenticación. Opciones:

**Opción A: Personal Access Token (Recomendado)**
1. Ve a GitHub → Settings → Developer settings → Personal access tokens
2. Generate new token (classic)
3. Selecciona: `repo` (full control)
4. Copia el token
5. Úsalo como contraseña cuando te lo pida

**Opción B: GitHub CLI**
```bash
# Instalar GitHub CLI: https://cli.github.com/
gh auth login
```

---

## 📝 COMANDOS COMPLETOS (Copy-Paste)

Copia estos comandos y ajusta TU_NOMBRE, TU_EMAIL y TU_USUARIO:

```bash
# 1. Configurar Git (solo primera vez)
git config --global user.name "TU_NOMBRE"
git config --global user.email "TU_EMAIL"

# 2. Ir a la carpeta del proyecto
cd "c:\Users\Aprendiz\NO BORRAR\next-teslo-shop-fin-seccion-24"

# 3. Verificar estado
git status

# 4. Hacer commit
git commit -m "Initial commit: Teslo Shop E-Commerce completo para SENA"

# 5. Renombrar README
move README.md README_ORIGINAL.md
move README_GITHUB.md README.md
git add .
git commit -m "Actualizar README para GitHub"

# 6. Cambiar a branch main
git branch -M main

# 7. Conectar con GitHub (reemplaza TU_USUARIO)
git remote add origin https://github.com/TU_USUARIO/teslo-shop-sena.git

# 8. Subir código
git push -u origin main
```

---

## 🎯 Verificación

Después de subir, verifica en GitHub:

1. ✅ Todos los archivos están
2. ✅ README.md se ve correctamente
3. ✅ Carpeta `DOCS_PROYECTO` con documentación
4. ✅ `.env` NO está (por seguridad)
5. ✅ `node_modules` NO está
6. ✅ `/public/uploads/` NO está

---

## 📁 Lo Que SE SUBE

```
✅ Código fuente completo
✅ Documentación (DOCS_PROYECTO/)
✅ README profesional
✅ docker-compose.yml
✅ prisma/schema.prisma
✅ Imágenes de productos (seed)
✅ Configuración del proyecto
```

## 🚫 Lo Que NO SE SUBE

```
❌ .env (credenciales)
❌ node_modules (dependencias)
❌ .next (build)
❌ /postgres/ (datos de BD)
❌ /public/uploads/ (imágenes subidas)
```

---

## 🔄 Actualizar el Repositorio (Futuros cambios)

```bash
# 1. Agregar cambios
git add .

# 2. Commit con mensaje descriptivo
git commit -m "Descripción de los cambios"

# 3. Subir a GitHub
git push
```

---

## 🌟 Mejoras del README

El README creado (`README_GITHUB.md` → `README.md`) incluye:

✅ **Badges profesionales** (Next.js, TypeScript, etc.)  
✅ **Características destacadas**  
✅ **Stack tecnológico completo**  
✅ **Instrucciones de instalación**  
✅ **Credenciales de prueba**  
✅ **Estructura del proyecto**  
✅ **Comandos útiles**  
✅ **Métricas del proyecto**  
✅ **Información de deploy**  
✅ **Sección de contribuciones**  

---

## 🎓 Para Tu Presentación SENA

Puedes mencionar:

✅ **"Código alojado en GitHub"**
- Demuestra buenas prácticas de versionamiento
- Control de versiones profesional
- Colaboración y respaldo del código

✅ **"Repositorio público"**
- Disponible para revisión
- Portafolio personal
- Evidencia de trabajo

---

## 🐛 Solución de Problemas

### Error: "failed to push"

**Causa:** El repositorio remoto tiene archivos que no tienes local

**Solución:**
```bash
git pull origin main --allow-unrelated-histories
git push -u origin main
```

### Error: "Authentication failed"

**Causa:** Credenciales incorrectas

**Solución:**
1. Usa Personal Access Token en lugar de contraseña
2. O instala GitHub CLI: `gh auth login`

### Error: "Permission denied"

**Causa:** No tienes permisos en el repositorio

**Solución:**
1. Verifica que creaste el repo en TU cuenta
2. Verifica la URL remota: `git remote -v`

---

## 📧 Link del Repositorio

Una vez subido, tu repositorio estará en:

```
https://github.com/TU_USUARIO/teslo-shop-sena
```

Comparte este link en tu presentación SENA! 🎉

---

## ✅ Checklist Final

- [ ] Git configurado con tu nombre y email
- [ ] Repositorio creado en GitHub
- [ ] README.md actualizado (de README_GITHUB.md)
- [ ] Commit realizado exitosamente
- [ ] Push completado sin errores
- [ ] Verificación en GitHub OK
- [ ] Link del repo anotado para presentación

---

**¡Tu proyecto ya está listo para compartir con el mundo! 🚀**

---

**Fecha:** Octubre 2025  
**Proyecto:** Teslo Shop E-Commerce  
**Para:** Presentación SENA
