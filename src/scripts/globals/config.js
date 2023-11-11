const CONFIG = {
  BASE_URL: 'https://restaurant-api.dicoding.dev/',
  BASE_IMAGE_SMALL: 'https://restaurant-api.dicoding.dev/images/small/',
  BASE_IMAGE_MEDIUM: 'https://restaurant-api.dicoding.dev/images/medium/',
  BASE_IMAGE_LARGE: 'https://restaurant-api.dicoding.dev/images/large/',
  DEFAULT_LANGUAGE: 'en-us',
  CACHE_NAME: 'RestaurantCatalogue-V1',
  // CACHE_NAME: new Date().toISOString(),
  DATABASE_NAME: 'restaurants-catalogue-database',
  DATABASE_VERSION: 1,
  OBJECT_STORE_NAME: 'restaurants',
  WEB_SOCKET_SERVER: 'wss://restaurants-feed.dicoding,dev',
};

export default CONFIG;
