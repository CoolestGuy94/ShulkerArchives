const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'old') {
        toggleSwitch.checked = true;
    }
}

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'old');
        document.getElementById("toggle-label").textContent="Disable Old theme";
        localStorage.setItem('theme', 'old');
    }
    else {        document.documentElement.setAttribute('data-theme', 'new');
        document.getElementById("toggle-label").textContent="Enable Old theme";
        localStorage.setItem('theme', 'new');
    }
}

toggleSwitch.addEventListener('change', switchTheme, false);