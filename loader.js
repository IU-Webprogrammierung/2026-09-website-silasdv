// Ein gemeinsam genutztes HTML-Stück in die Seite laden.
async function loadComponent(selector, file) {
    const element = document.querySelector(selector);
    if (!element) return;

    try {
        const response = await fetch(file);
        if (!response.ok) {
            throw new Error("Component could not be loaded: " + file);
        }

        const html = await response.text();
        element.innerHTML = html;
        element.hidden = false;
    } catch (error) {
        console.error(error);
    }
}

loadComponent("footer", "components/footer.html");