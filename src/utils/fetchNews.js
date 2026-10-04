import { API_KEYS } from '../config';
import { getMockNews } from '../data/mockNews';

const CACHE_TTL_MS = 30 * 60 * 1000; // 30 minutes cache duration

export const fetchNewsWithCache = async (category = 'general', lang = 'en') => {
  const cacheKey = `gnews_cache_${lang}_${category}`;

  // 1. Check local storage cache
  try {
    const cachedItemStr = localStorage.getItem(cacheKey);
    if (cachedItemStr) {
      const cachedItem = JSON.parse(cachedItemStr);
      const now = Date.now();
      if (cachedItem.timestamp && (now - cachedItem.timestamp < CACHE_TTL_MS)) {
        console.log(`[GNews Cache Hit] Using cached news for ${lang}/${category}`);
        return {
          articles: cachedItem.articles,
          isQuotaExceeded: false,
          isFromCache: true
        };
      }
    }
  } catch (err) {
    console.warn("LocalStorage cache error:", err);
  }

  // 2. Try fetching using available API keys
  for (let i = 0; i < API_KEYS.length; i++) {
    const key = API_KEYS[i];
    const url = `https://gnews.io/api/v4/top-headlines?category=${category}&lang=${lang}&apikey=${key}`;

    try {
      const response = await fetch(url);
      const json = await response.json();

      if (response.ok && Array.isArray(json.articles) && json.articles.length > 0) {
        // Save to cache
        try {
          localStorage.setItem(cacheKey, JSON.stringify({
            timestamp: Date.now(),
            articles: json.articles
          }));
        } catch (e) {
          console.warn("Failed to set localStorage item:", e);
        }

        return {
          articles: json.articles,
          isQuotaExceeded: false,
          isFromCache: false
        };
      } else {
        console.warn(`API key index ${i} returned response:`, json);
      }
    } catch (netErr) {
      console.error(`Network error with key index ${i}:`, netErr);
    }
  }

  // 3. Fallback if API keys fail or quota is exceeded
  console.warn(`[Quota/API Limit] Reached for ${lang}/${category}. Loading fallback cache or mock news.`);

  // Attempt using old cache if present
  try {
    const oldCacheStr = localStorage.getItem(cacheKey);
    if (oldCacheStr) {
      const oldCache = JSON.parse(oldCacheStr);
      if (oldCache.articles && oldCache.articles.length > 0) {
        return {
          articles: oldCache.articles,
          isQuotaExceeded: true,
          isFromCache: true
        };
      }
    }
  } catch (e) {
    // Ignore
  }

  // Return fallback mock news
  return {
    articles: getMockNews(category, lang),
    isQuotaExceeded: true,
    isFromCache: false
  };
};
