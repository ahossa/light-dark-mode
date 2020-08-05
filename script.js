/*
 * Get the Initial building-blocks first
 */
const toggleSwitch = document.querySelector('input[type="checkbox"]'); /* Toggle switch for Light-Dark Mode */
const nav = document.getElementById('nav');                            /* Navigation Bar */
const toggleIcon = document.getElementById('toggle-icon');             /* Toggle Sun/Moon icon for LD mode */
const image1 = document.getElementById('image1');                      /* 1st Image */
const image2 = document.getElementById('image2');                      /* 2nd Image */
const image3 = document.getElementById('image3');                      /* 3rd Image */
const textBox = document.getElementById('text-box');                   /* Text box in Projects section */

/*
 * Switch the images for given light/dark color
 */
function switchImageMode(color) {
    image1.src = `img/undraw_mind_map_${color}.svg`
    image2.src = `img/undraw_setup_wizard_${color}.svg`
    image3.src = `img/undraw_progressive_app_${color}.svg`
}

/*
 * Switch to dark mode
 */
function switchToDarkMode() {
    nav.style.backgroundColor = 'rgb(0 0 0/50%)';              // black
    textBox.style.backgroundColor = 'rgb(255 255 255 / 50%)';  // white
    toggleIcon.children[0].textContent = 'Dark Mode'
    toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
    switchImageMode('dark');

}

/*
 * Switch to light mode
 */
function switchToLightMode() {
    nav.style.backgroundColor = 'rgb(255 255 255/50%)';  // white
    textBox.style.backgroundColor = 'rgb(0 0 0 / 50%)';  // black
    toggleIcon.children[0].textContent = 'Light Mode'
    toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
    switchImageMode('light');
}

/*
 * Switch Light-Dark theme dynamically
 */
function switchTheme(event) {
    if (event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        switchToDarkMode();
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        switchToLightMode();
    }
}

/*
 * Event-Listener
 * Change Theme on switch toggle
 */
toggleSwitch.addEventListener('change', switchTheme);

// Check local storage for theme
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
        switchToDarkMode();
    }
    else if (currentTheme === 'light') {
        toggleSwitch.checked = false;
        switchToLightMode();
    }

}