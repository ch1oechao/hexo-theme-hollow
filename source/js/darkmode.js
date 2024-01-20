function enableDarkMode() {
    if (document.querySelector('link[href="/css/darkmode.css"]')) {
        return;
    }
    var css = document.createElement('link');
    css.rel = 'stylesheet';
    css.href = '/css/darkmode.css';
    
    document.head.appendChild(css);
}

function disableDarkMode() {
    var css = document.querySelector('link[href="/css/darkmode.css"]');
    css && document.head.removeChild(css);
}

function isDarkMode() {
    return !!document.querySelector('link[href="/css/darkmode.css"]');
}

function toggleDarkMode() {
    if (isDarkMode()) {
        disableDarkMode();
        localStorage.setItem('darkmode', '0');
    } else {
        enableDarkMode();
        localStorage.setItem('darkmode', '1');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    if (localStorage.getItem('darkmode') === '0') {
        disableDarkMode();
        document.querySelector('[data-toggle="darkmode"] .fa-moon-o').style.display = 'inline-block';
        document.querySelector('[data-toggle="darkmode"] .fa-sun-o').style.display = 'none';
    } else {
        enableDarkMode();
        document.querySelector('[data-toggle="darkmode"] .fa-moon-o').style.display = 'none';
        document.querySelector('[data-toggle="darkmode"] .fa-sun-o').style.display = 'inline-block';
    }
});

document.querySelector('[data-toggle="darkmode"]').addEventListener('click', function(e) {
    e.preventDefault();
    toggleDarkMode();

    if (isDarkMode()) {
        document.querySelector('[data-toggle="darkmode"] .fa-moon-o').style.display = 'none';
        document.querySelector('[data-toggle="darkmode"] .fa-sun-o').style.display = 'inline-block';
    }
    else {
        document.querySelector('[data-toggle="darkmode"] .fa-moon-o').style.display = 'inline-block';
        document.querySelector('[data-toggle="darkmode"] .fa-sun-o').style.display = 'none';
    }
    
});