if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/serviceworker.js').then(function(registration) {
            // Registration was successful
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }).catch(function(err) {
            // registration failed :(
            console.log('ServiceWorker registration failed: ', err);
        });
    });
}


$( document ).ready(function() {
    $('.speaker-grid').masonry({
        itemSelector: '.grid__item',
        columnWidth: '.grid__sizer',
        transitionDuration : 0
    })
});
