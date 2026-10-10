// Ein gemeinsam genutztes HTML-Stück in die Seite laden.
async function loadComponent(selector, file) {
    const element = document.querySelector(selector);
    if (!element) return false;

    try {
        const response = await fetch(file);
        if (!response.ok) {
            throw new Error("Component could not be loaded: " + file);
        }

        const html = await response.text();
        const hadFocus = element.contains(document.activeElement);
        element.innerHTML = html;
        element.hidden = false;

        // Den Tastaturfokus auf dem Startseiten-Link erhalten.
        if (hadFocus) {
            element.querySelector("a")?.focus();
        }

        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
}

async function loadHeader() {
    const loaded = await loadComponent("header", "components/header.html");
    if (loaded) {
        initializeNavigation();
        initializeThemeToggle();
    }
}

loadHeader();
loadComponent("footer", "components/footer.html");