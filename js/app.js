// Navigation Logic
function switchScreen(screenId) {
    const screens = document.querySelectorAll('.screen');
    const navButtons = document.querySelectorAll('.nav-btn');

    for (let i = 0; i < screens.length; i++) {
        screens[i].classList.remove('active');
    }

    for (let i = 0; i < navButtons.length; i++) {
        navButtons[i].classList.remove('active');
    }

    document.getElementById(screenId).classList.add('active');
    event.currentTarget.classList.add('active');
}

// Service Worker Registration for PWA
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('sw.js').then(function(registration) {
            console.log('ServiceWorker registration successful');
        }, function(err) {
            console.log('ServiceWorker registration failed: ', err);
        });
    });
}

// You can paste your existing JavaScript logic for Shift tracking and Sales below this section.
