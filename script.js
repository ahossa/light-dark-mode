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

const DARK_THEME = 'dark';
const LIGHT_THEME = 'light';

const COLOR_BLACK = 'rgb(0 0 0/50%)';
const COLOR_WHITE = 'rgb(255 255 255/50%)';

const ICON_MOON = 'fa-moon';
const ICON_SUN = 'fa-sun';

/*
 * Switch the images for given light/dark color
 * @arg color : light or dark theme color 
 */
function switchImageMode(color) {
    image1.src = `img/undraw_mind_map_${color}.svg`
    image2.src = `img/undraw_setup_wizard_${color}.svg`
    image3.src = `img/undraw_progressive_app_${color}.svg`
}

/*
 * Toggle Light-Dark Mode theme color
 * @arg themeColor : light or dark theme color
 */
function toggleThemeColor(themeColor) {
    isLightMode = (themeColor === LIGHT_THEME) ? true : false;
    nav.style.backgroundColor = isLightMode ? COLOR_WHITE : COLOR_BLACK;
    textBox.style.backgroundColor = isLightMode ? COLOR_BLACK : COLOR_WHITE;
    toggleIcon.children[0].textContent = isLightMode ? 'Light Mode' : 'Dark Mode';

    if (isLightMode) {
        toggleIcon.children[1].classList.replace(ICON_MOON, ICON_SUN);
        switchImageMode(LIGHT_THEME);
    } else {
        toggleIcon.children[1].classList.replace(ICON_SUN, ICON_MOON);
        switchImageMode(DARK_THEME);
    }
}

/*
 * Switch Light-Dark theme dynamically based on the event
 */
function switchTheme(event) {
    if (event.target.checked) {
        document.documentElement.setAttribute('data-theme', DARK_THEME);
        localStorage.setItem('theme', DARK_THEME);
        toggleThemeColor(DARK_THEME);
    }
    else {
        document.documentElement.setAttribute('data-theme', LIGHT_THEME);
        localStorage.setItem('theme', LIGHT_THEME);
        toggleThemeColor(LIGHT_THEME);
    }
}

/*
 * Event-Listener
 * Change Theme on switch toggle
 */
toggleSwitch.addEventListener('change', switchTheme);

/*
 * Restore previously saved theme from the local storage
 */
function restorePrevTheme(currentTheme) {
    if (currentTheme === null)
        return;

    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === DARK_THEME) {
        toggleSwitch.checked = true;
        toggleThemeColor(DARK_THEME);
    }
    else if (currentTheme === LIGHT_THEME) {
        toggleSwitch.checked = false;
        toggleThemeColor(LIGHT_THEME);
    }
}
restorePrevTheme(localStorage.getItem('theme'));

