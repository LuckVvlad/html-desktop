const CACHE_NAME = 'codex-viking-v1.6';
const ASSETS_TO_CACHE = [
    './',
    './index.html',
    './styles/main.css',
    './scripts/app.js',
    './scripts/viking_data.js',
    'https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=Inter:wght@300;400;600&display=swap',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'
];

// Installation du Service Worker et mise en cache des ressources initiales
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('Mise en cache des ressources globales');
                return cache.addAll(ASSETS_TO_CACHE);
            })
    );
});

// Activation et nettoyage des anciens caches
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== CACHE_NAME) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

// Interception des requêtes réseau (Offline mode)
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                // Si la ressource est dans le cache, on la retourne
                if (response) {
                    return response;
                }
                
                // Sinon on fait la requête réseau
                const fetchRequest = event.request.clone();
                return fetch(fetchRequest).then((response) => {
                    // Vérifier si la réponse est valide
                    if (!response || response.status !== 200 || response.type !== 'basic') {
                        return response;
                    }

                    // Mettre en cache les nouvelles ressources chargées (comme les images assets/*)
                    const responseToCache = response.clone();
                    caches.open(CACHE_NAME).then((cache) => {
                        // Ne mettre en cache que les requêtes GET locales
                        if (event.request.url.startsWith(self.location.origin) && event.request.method === 'GET') {
                             cache.put(event.request, responseToCache);
                        }
                    });

                    return response;
                });
            })
    );
});
