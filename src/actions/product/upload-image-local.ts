'use server';

import { writeFile, mkdir } from 'fs/promises';
import path from 'path';
import { existsSync } from 'fs';

/**
 * Subir imagen al sistema de archivos local (GRATIS - Sin servicios externos)
 * Alternativa a Cloudinary para proyectos sin presupuesto
 */
export const uploadImageLocal = async (file: File): Promise<string | null> => {
  try {
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Generar nombre único para la imagen
    const timestamp = Date.now();
    const randomSuffix = Math.round(Math.random() * 1E9);
    const ext = file.name.split('.').pop();
    const filename = `${timestamp}-${randomSuffix}.${ext}`;

    // Ruta donde se guardará la imagen
    const uploadDir = path.join(process.cwd(), 'public', 'uploads', 'products');
    const filePath = path.join(uploadDir, filename);

    // Crear directorio si no existe
    if (!existsSync(uploadDir)) {
      await mkdir(uploadDir, { recursive: true });
    }

    // Guardar archivo
    await writeFile(filePath, new Uint8Array(buffer));

    // Retornar la URL relativa para usar en la aplicación
    return `/uploads/products/${filename}`;

  } catch (error) {
    console.error('Error al subir imagen local:', error);
    return null;
  }
};

/**
 * Subir múltiples imágenes localmente
 */
export const uploadImagesLocal = async (images: File[]): Promise<(string | null)[]> => {
  try {
    const uploadPromises = images.map(image => uploadImageLocal(image));
    return await Promise.all(uploadPromises);
  } catch (error) {
    console.error('Error al subir imágenes locales:', error);
    return [];
  }
};
