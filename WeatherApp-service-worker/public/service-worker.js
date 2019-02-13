importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.1/workbox-sw.js');

if (workbox) {
    console.log("Workbox successfully loaded");

    workbox.strategies.staleWhileRevalidate();
    workbox.strategies.cacheFirst({cacheableResponse:{statuses: [0,200]}});
    console.log("service worker was updated");

    workbox.precaching.precacheAndRoute([        
        { url: '/', revision: '2' },
        { url: '/index.html', revision: '2' },
    ]);

    workbox.routing.registerRoute(
        new RegExp('.*\.js'),
        workbox.strategies.networkFirst()
    );

    
    workbox.routing.registerRoute(
        new RegExp('^https://api.openweathermap.org/data/2.5/weather'),

        workbox.strategies.networkFirst({
            cacheName: 'weatherApi',
            plugins: [
                new workbox.expiration.Plugin({                    
                    maxAgeSeconds: 60 * 2, // 2 minutes
                }),
                new workbox.cacheableResponse.Plugin({
                    statuses: [0, 200],
                }),
            ],
        })
    );

    workbox.routing.registerRoute(
        new RegExp('^https://api.openweathermap.org/data/2.5/forecast'),

        workbox.strategies.networkFirst({
            cacheName: 'forecastApi',
            plugins: [
                new workbox.expiration.Plugin({                    
                    maxAgeSeconds: 60 * 2, // 2 minutes
                }),
                new workbox.cacheableResponse.Plugin({
                    statuses: [0, 200],
                }),
            ],
        })
    );
} 
else {
    console.log("Could not load workbox");
}