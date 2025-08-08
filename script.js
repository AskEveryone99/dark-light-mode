const toggle = document.getElementById('themeToggle');
const icon = document.getElementById('themeIcon');
const label = document.querySelector('.toggle-label');
const body = document.body;

toggle.addEventListener('change', () => {
    const isLight = toggle.checked;

    body.classList.toggle('light-theme', isLight);
    icon.src = isLight ? 'icons/sun.png' : 'icons/moon.png';
    label.textContent = isLight ? 'Dark' : 'Light';
});