if(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  theme = 'dark'
} else {
  theme = 'light'
}

const html = document.querySelector('html');
var themeToggle = document.querySelector('#theme-toggle');

console.log(theme)

if (theme == 'dark') {
  themeToggle.checked = true
}

themeToggle.addEventListener('click', function() {
    if (themeToggle.checked) {
        html.style.setProperty("color-scheme", "dark")
    } else {
        html.style.setProperty("color-scheme", "light")
    }
});

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function openNav() {
  document.getElementById("nav-menu").classList.toggle("show");
}