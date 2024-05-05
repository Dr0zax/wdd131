const themeSelector = document.getElementById("theme-switcher")

function changeTheme() {
    if (themeSelector.getAttribute('value') == 'dark')
    {
        themeSelector.setAttribute('value', 'light')
        document.body.className = 'light';
        themeSelector.innerText = 'Light';
        document.querySelector('.logo').setAttribute('src', 'images/byui-logo_blue.webp')
    } else if (themeSelector.getAttribute('value') == 'light') {
        themeSelector.setAttribute('value', 'dark')
        document.body.className = 'dark';
        themeSelector.innerText = 'Dark';
        document.querySelector('.logo').setAttribute('src', 'images/byui-logo_white.png')
    }
}

themeSelector.addEventListener('click', changeTheme);