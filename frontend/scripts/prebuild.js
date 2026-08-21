const fs = require('fs');
const path = require('path');

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://relative-tyne-dus-23fc21cf.koyeb.app/api';

// Clean URL
let baseUrl = API_URL.endsWith('/') ? API_URL.slice(0, -1) : API_URL;
if (!baseUrl.endsWith('/api')) {
  baseUrl = `${baseUrl}/api`;
}

const CACHE_DIR = path.join(process.cwd(), 'api-cache');

async function fetchWithRetry(url, retries = 3) {
  for (let i = 0; i < retries; i++) {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      return await response.json();
    } catch (e) {
      console.warn(`[Prebuild] Attempt ${i + 1} failed for ${url}:`, e.message);
      if (i === retries - 1) throw e;
      // Wait 2 seconds before retry
      await new Promise(resolve => setTimeout(resolve, 2000));
    }
  }
}

async function main() {
  console.log('[Prebuild] Starting cache pre-population...');
  console.log('[Prebuild] Using API Base URL:', baseUrl);

  try {
    if (!fs.existsSync(CACHE_DIR)) {
      fs.mkdirSync(CACHE_DIR, { recursive: true });
    }

    // 1. Fetch categories
    console.log('[Prebuild] Fetching categories...');
    const categoriesData = await fetchWithRetry(`${baseUrl}/categories/`);
    const parsedCategories = categoriesData.map((cat) => ({
      id: Number(cat.id),
      name_ru: cat.name_ru,
      name_uz: cat.name_uz,
      slug: cat.slug || '',
      description_ru: cat.description_ru,
      description_uz: cat.description_uz,
    }));
    fs.writeFileSync(path.join(CACHE_DIR, 'categories-cache.json'), JSON.stringify(parsedCategories), 'utf8');
    console.log(`[Prebuild] Successfully cached ${parsedCategories.length} categories.`);

    // 2. Fetch products
    console.log('[Prebuild] Fetching products...');
    const productsData = await fetchWithRetry(`${baseUrl}/products/`);
    
    const BACKEND_MEDIA_ORIGIN = 'https://relative-tyne-dus-23fc21cf.koyeb.app';

    function getCategoryFallbackImage(categorySlug, productName) {
      const slug = (categorySlug || '').toLowerCase();
      const name = (productName || '').toLowerCase();

      if (slug.includes('korpusny') || name.includes('korpusny') || name.includes('fan') || name.includes('ventilyator') || name.includes('uni fan')) {
        return '/media/categories/korpusnye-ventilyatory.jpg';
      }
      if (slug.includes('korpus') || slug.includes('case') || name.includes('case') || name.includes('lian li o11') || name.includes('o11 vision') || name.includes('o11d') || name.includes('lancool') || name.includes('cougar airface') || name.includes('geometric future') || name.includes('jonsbo') || name.includes('hyte') || name.includes('nzxt')) {
        return '/media/categories/korpusa.jpg';
      }
      if (slug.includes('monitor') || name.includes('monitor') || name.includes('ultragear') || name.includes('zowie xl') || name.includes('27gx') || name.includes('benq zowie')) {
        return '/media/categories/monitory.jpg';
      }
      if (slug.includes('process') || name.includes('ryzen') || name.includes('intel') || name.includes('core i') || name.includes('processor')) {
        return '/media/categories/processory.jpg';
      }
      if (slug.includes('video') || name.includes('rtx') || name.includes('geforce') || name.includes('radeon') || name.includes('videocard')) {
        return '/media/categories/videokarty.jpg';
      }
      if (slug.includes('klaviat') || slug.includes('keyboard') || name.includes('keyboard') || name.includes('aula') || name.includes('akko') || name.includes('mechanical')) {
        return '/media/categories/klaviatury.jpg';
      }
      if (slug.includes('myshk') || slug.includes('mouse') || name.includes('mouse') || name.includes('atk blazing') || name.includes('superlight') || name.includes('zowie za')) {
        return '/media/categories/myshki.jpg';
      }
      if (slug.includes('naushn') || slug.includes('headset') || name.includes('headset') || name.includes('blackshark') || name.includes('hyperx') || name.includes('epos')) {
        return '/media/categories/naushniki.jpg';
      }
      if (slug.includes('plat') || name.includes('b850') || name.includes('b650') || name.includes('z790') || name.includes('x870') || name.includes('motherboard')) {
        return '/media/categories/platy.jpg';
      }
      if (slug.includes('bloki') || name.includes('power supply') || name.includes('1000w') || name.includes('850w') || name.includes('gold')) {
        return '/media/categories/bloki-pitanie.jpg';
      }
      if (slug.includes('ssd') || name.includes('nvme') || name.includes('990 pro') || name.includes('kingston')) {
        return '/media/categories/ssd.jpg';
      }
      if (slug.includes('ohlazhd') || name.includes('cooler') || name.includes('liquid') || name.includes('freezer') || name.includes('icue')) {
        return '/media/categories/ohlazhdenie.jpg';
      }
      if (slug.includes('noutbuk') || name.includes('laptop') || name.includes('vivobook') || name.includes('rog strix g16')) {
        return '/media/categories/noutbuki.jpg';
      }
      if (slug.includes('stol') || name.includes('desk') || name.includes('table')) {
        return '/media/categories/stoly.jpg';
      }
      if (slug.includes('kresl') || name.includes('chair') || name.includes('armor') || name.includes('kaiser')) {
        return '/media/categories/kresla.jpg';
      }
      return '/media/categories/ready-pc.jpg';
    }

    const getImageUrl = (url, categorySlug, productName) => {
      if (!url || url === 'null' || url === '' || url === 'undefined') {
        return getCategoryFallbackImage(categorySlug, productName);
      }
      if (url.startsWith('http://') || url.startsWith('https://')) {
        if (url.includes('/media/') && (url.includes('storepcshop.uz') || url.includes('pcshop.uz'))) {
          const mediaPath = url.substring(url.indexOf('/media/'));
          return `${BACKEND_MEDIA_ORIGIN}${mediaPath}`;
        }
        return url;
      }
      const cleanPath = url.startsWith('/') ? url : `/${url}`;
      return `${BACKEND_MEDIA_ORIGIN}${cleanPath}`;
    };

    // Parse products using same logic as api.ts
    const parsedProducts = productsData.map((p) => {
      const specs = {};
      if (p.characteristics && Array.isArray(p.characteristics)) {
        p.characteristics.forEach((char) => {
          specs[char.name_ru] = char.value_ru;
        });
      }

      const catSlug = typeof p.category === 'object' && p.category !== null ? p.category.slug : (p.category_slug || '');
      const catId = typeof p.category === 'object' && p.category !== null ? p.category.id : (typeof p.category === 'number' ? p.category : (p.category_id || 0));
      const nameRu = p.name_ru || p.name || '';
      const nameUz = p.name_uz || p.name || nameRu;

      let rawImages = p.images && Array.isArray(p.images) ? p.images : (p.image ? [p.image] : []);
      rawImages = rawImages.filter((img) => img && img !== 'null' && img !== 'undefined' && String(img).trim().length > 0);
      if (rawImages.length === 0) {
        rawImages = [getCategoryFallbackImage(catSlug, nameRu)];
      }
      const images = rawImages.map((img) => getImageUrl(img, catSlug, nameRu));
      
      const images_detail = (p.images_detail || []).map((img) => ({
        ...img,
        url: getImageUrl(img.url, catSlug, nameRu)
      }));

      const descRu = p.description_ru || p.description || p.details || '';
      const descUz = p.description_uz || p.description || p.details || descRu;

      return {
        id: p.id,
        category_id: catId,
        category_slug: catSlug,
        name_ru: nameRu,
        name_uz: nameUz,
        slug: p.slug || '',
        description_ru: descRu,
        description_uz: descUz,
        price: Number(p.price),
        price_usd: p.price_usd ? Number(p.price_usd) : null,
        old_price: p.old_price ? Number(p.old_price) : null,
        stock: p.stock || 0,
        specs,
        characteristics: p.characteristics || [],
        images,
        images_detail,
        is_featured: p.is_featured ?? false,
        is_new: p.is_new ?? false,
        warranty_months: p.warranty_months || 12,
        brand: p.brand || '',
        created_at: p.created_at || '',
      };
    });
    fs.writeFileSync(path.join(CACHE_DIR, 'products-cache.json'), JSON.stringify(parsedProducts), 'utf8');
    console.log(`[Prebuild] Successfully cached ${parsedProducts.length} products.`);
    
    console.log('[Prebuild] Cache pre-population completed successfully!');
  } catch (err) {
    console.error('[Prebuild] Error pre-populating cache:', err);
    // Do not crash the build, Next.js can fallback to runtime fetching if needed
  }
}

main();
