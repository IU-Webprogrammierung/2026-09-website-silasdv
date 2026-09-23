const menuButton = document.getElementById("menu-toggle");
const navigation = document.getElementById("main-navigation");
const wideScreen = window.matchMedia("(min-width: 1024px)");

function setMenuOpen(isOpen) {
    navigation.hidden = !isOpen;
    menuButton.setAttribute("aria-expanded", String(isOpen));
}

// Beim Wechsel der Bildschirmgröße Sichtbarkeit und Tastaturfokus anpassen.
function updateMenu() {
    const focusInNavigation = navigation.contains(document.activeElement);
    const focusOnButton = document.activeElement === menuButton;

    menuButton.hidden = wideScreen.matches;
    setMenuOpen(wideScreen.matches);

    if (!wideScreen.matches && focusInNavigation) {
        menuButton.focus();
    } else if (wideScreen.matches && focusOnButton) {
        navigation.querySelector("a").focus();
    }
}

menuButton.addEventListener("click", () => {
    setMenuOpen(navigation.hidden);
});

// Escape schließt das mobile Menü und setzt den Fokus auf den Schalter.
document.addEventListener("keydown", event => {
    const focusInMenu = navigation.contains(document.activeElement) ||
        document.activeElement === menuButton;

    if (event.key === "Escape" && !wideScreen.matches &&
        !navigation.hidden && focusInMenu) {
        setMenuOpen(false);
        menuButton.focus();
    }
});

wideScreen.addEventListener("change", updateMenu);
updateMenu();