const cache_container = "static_v2  ";


const files = [
    "./",
    "./index.html",
    "./styles.css",
    "./script.js",
    "./logo.png",
     "./apple_logo.png",
    "./images/a/", 
    "./images/a/china.png", "./images/a/russia.png", "./images/a/usa.png", 
    "./images/b/", 
    "./images/b/egypt.png", "./images/b/germany.png", "./images/b/turkey.png",
    "./images/c/france.png", "./images/c/italy.png", "./images/c/spain.png",
    "./images/d/", 
    "./images/d/czech.png", "./images/d/slovakia.png", "./images/d/ukraine.png", 
    "./images/e/", 
    "./images/e/australia.png", "./images/e/canada.png", "./images/e/mexico.png", 
    "./images/f/", 
    "./images/f/colombia.png", "./images/f/ghana.png", "./images/f/sri_lanka.png", 
    "./images/g/", 
    "./images/g/greece.png", "./images/g/guinea.png", "./images/g/israel.png", 
    "./images/h/", 
    "./images/h/bulgaria.png", "./images/h/finland.png", "./images/h/new_zealand.png", 
    "./images/i/", 
    "./images/i/albania.png", "./images/i/estonia.png", "./images/i/mongolia.png",
    "./images/j/", 
    "./images/j/dominican_republic.png", "./images/j/luxemburg.png", "./images/j/maldives.png", 
    "./images.json",

    "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css",
    "https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js",
    "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js",
    "https://cdn.jsdelivr.net/npm/sortablejs@latest/Sortable.min.js"
]

self.addEventListener('install', function(event){
    event.waitUntil(
        caches.open(cache_container)
        .then(cache => {
            return cache.addAll(files)
        })
    )
})

self.addEventListener('fetch', (event) => {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
});