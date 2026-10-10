// Die Auswahl früh laden, bevor die Seite angezeigt wird.
const themeStorageKey = "silasdv-theme";
const systemDarkMode = window.matchMedia("(prefers-color-scheme: dark)");
let savedTheme = null;

try {
    const storedTheme = localStorage.getItem(themeStorageKey);
    if (storedTheme === "light" || storedTheme === "dark") {
        savedTheme = storedTheme;
    }
} catch {
    // Der Schalter funktioniert auch, wenn der Browser das Speichern blockiert.
}

function updateThemeButton() {
    const button = document.getElementById("theme-toggle");
    if (!button) return;

    const isDark = document.documentElement.dataset.theme === "dark";
    const nextMode = isDark ? "Light mode" : "Dark mode";
    button.querySelector("span").textContent = nextMode;
    button.setAttribute("aria-label", nextMode);
    button.title = "Switch to " + nextMode.toLowerCase();
}

function applyTheme() {
    document.documentElement.dataset.theme = savedTheme ||
        (systemDarkMode.matches ? "dark" : "light");
    updateThemeButton();
}

applyTheme();

// Der Button ist erst nach dem Laden des gemeinsamen Headers vorhanden.
function initializeThemeToggle() {
    const button = document.getElementById("theme-toggle");
    if (!button) return;

    button.hidden = false;
    updateThemeButton();
    button.addEventListener("click", () => {
        savedTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
        applyTheme();

        try {
            localStorage.setItem(themeStorageKey, savedTheme);
        } catch {
            // Ohne Speicher bleibt die Auswahl für die aktuelle Seite erhalten.
        }
    });
}

// Der Systemeinstellung nur folgen, solange noch keine eigene Auswahl vorliegt.
systemDarkMode.addEventListener("change", () => {
    if (!savedTheme) applyTheme();
});

// Offene Tabs derselben Website übernehmen die neue Auswahl ebenfalls.
window.addEventListener("storage", event => {
    if (event.key !== themeStorageKey && event.key !== null) return;
    savedTheme = event.newValue === "light" || event.newValue === "dark" ?
        event.newValue : null;
    applyTheme();
});
