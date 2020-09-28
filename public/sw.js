self.addEventListener('install', function(event){
    console.log('Service Worker Installed');
    event.waitUntil(
    caches.open('static')
        .then(function(cache) {
        // cache.add('/')
        // cache.add('/index.html')
        // cache.add('/src/js/app.js');
        cache.addAll([
            '/',
            '/index.html',
            '/src/js/index.js',
            'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css',
            'https://fonts.googleapis.com/css?family=Raleway:400,700',
            'src/css/bootstrap-4.3.1-dist/css/bootstrap.min.css',
            'src/css/index.css',
            'https://fonts.googleapis.com/css2?family=Open+Sans&family=Rubik&display=swap',
            'https://fonts.googleapis.com/css2?family=Grenze+Gotisch:wght@600&display=swap'
            ]);
        })
    );   
});

self.addEventListener('activate', function(){
    console.log('Service Worker Activated')
});

self.addEventListener('fetch', function(event){
    event.respondWith(
        caches.match(event.request)
        .then((res)=>{
            if(res) {
                return res;
            } else {
               return fetch(event.request);
            }
        })
    );
});