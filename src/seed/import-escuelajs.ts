/*
  Importador de productos desde https://api.escuelajs.co/api/v1/products
  - Filtra productos de ropa por keywords
  - Mapea a SeedProduct del proyecto (type, sizes, gender, tags, slug)
  - Descarga 1-2 imágenes por producto en public/products/escuelajs/<type>/
  - Genera src/seed/escuelajs-products.ts con el array exportado
*/

import { mkdir, writeFile } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';

// Utilidades
const sleep = (ms: number) => new Promise(res => setTimeout(res, ms));
const kebab = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');

// Mapeo a types del seed
function inferType(title: string, categoryName?: string): 'shirts'|'pants'|'hoodies'|'hats'|null {
  const t = `${title} ${categoryName ?? ''}`.toLowerCase();
  if (/(hoodie|sweatshirt|jacket|bomber|pullover|zip)/.test(t)) return 'hoodies';
  if (/(pant|jean|jogger|trouser)/.test(t)) return 'pants';
  if (/(hat|beanie|cap)/.test(t)) return 'hats';
  if (/(shirt|t-shirt|tee|top|blouse|crew)/.test(t)) return 'shirts';
  return null;
}

function defaultSizes(type: 'shirts'|'pants'|'hoodies'|'hats') {
  if (type === 'hats') return ['S','M','L'];
  return ['S','M','L','XL'];
}

async function downloadImage(url: string, destAbs: string): Promise<boolean> {
  try {
    const res = await fetch(url);
    if (!res.ok) return false;
    const arrayBuffer = await res.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    await writeFile(destAbs, new Uint8Array(buffer));
    return true;
  } catch {
    return false;
  }
}

async function main() {
  const apiUrl = 'https://api.escuelajs.co/api/v1/products';
  const res = await fetch(apiUrl);
  if (!res.ok) throw new Error('No se pudo obtener productos de escuelajs');
  const products: any[] = await res.json();

  // Limitar y filtrar por ropa con inferencia de type
  const maxItems = 20; // puedes ajustar esta cantidad
  const selected = [] as any[];

  for (const p of products) {
    const type = inferType(p.title || '', p.category?.name);
    if (!type) continue;

    const title: string = p.title ?? 'Producto';
    const description: string = (p.description ?? '').toString().slice(0, 1000) || 'Descripción';
    const priceNum: number = Math.max(5, Math.round(Number(p.price) || 10));
    const inStock: number = Math.floor(Math.random() * 80) + 5;
    const gender: 'men'|'women'|'kid'|'unisex' = 'unisex';
    const sizes = defaultSizes(type);

    const imgUrls: string[] = Array.isArray(p.images) ? p.images.filter((u: string) => typeof u === 'string' && u.startsWith('http')) : [];
    if (imgUrls.length === 0) continue;

    // Preparar carpeta destino
    const collection = 'escuelajs';
    const uploadDir = path.join(process.cwd(), 'public', 'products', collection, type);
    if (!existsSync(uploadDir)) {
      await mkdir(uploadDir, { recursive: true });
    }

    const maxImages = Math.min(2, imgUrls.length);
    const imageNames: string[] = [];

    for (let i = 0; i < maxImages; i++) {
      const url = imgUrls[i];
      const ext = (new URL(url).pathname.split('.').pop() || 'jpg').split('?')[0];
      const base = kebab(`${title}-${p.id}-${i}`);
      const filename = `${base}.${ext}`.replace(/\.+/g, '.');
      const destAbs = path.join(uploadDir, filename);
      const ok = await downloadImage(url, destAbs);
      if (ok) imageNames.push(`${collection}/${type}/${filename}`);
      // Evitar rate limit
      await sleep(100);
    }

    if (imageNames.length === 0) continue;

    // Construir objeto SeedProduct-compatible
    const slug = kebab(`${title}-${p.id}`);
    const tags = Array.from(new Set([...(title.toLowerCase().split(/\s+/g)), type]))
      .map(s => s.replace(/[^a-z0-9-]/g, ''))
      .filter(Boolean)
      .slice(0, 6);

    selected.push({
      description,
      images: imageNames,
      inStock,
      price: priceNum,
      sizes,
      slug,
      tags,
      title,
      type,
      gender
    });

    if (selected.length >= maxItems) break;
  }

  // Generar archivo TS exportado
  const outPath = path.join(process.cwd(), 'src', 'seed', 'escuelajs-products.ts');
  const fileContent = `// Generado automáticamente por import-escuelajs.ts\nexport const escuelajsProducts = ${JSON.stringify(selected, null, 2)} as const;\n`;
  await writeFile(outPath, fileContent, 'utf8');

  console.log(`Generados ${selected.length} productos en src/seed/escuelajs-products.ts`);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
