// Die GIFs auf der About-Seite zunächst als Standbilder anzeigen.
const factorButtons = document.querySelectorAll(".ranking-factors button");

function setFactorPlaying(button, playing) {
    if (button.disabled) {
        return;
    }

    // Es wird immer nur eine Animation gleichzeitig angezeigt.
    if (playing) {
        factorButtons.forEach(other => {
            other.setAttribute("aria-pressed", "false");
        });
    }

    button.setAttribute("aria-pressed", String(playing));
}

factorButtons.forEach(button => {
    const image = button.querySelector("img");
    const media = button.querySelector(".factor-media");

    function createStillImage() {
        if (!image.naturalWidth || media.querySelector("canvas")) {
            return;
        }

        const canvas = document.createElement("canvas");
        canvas.width = image.naturalWidth;
        canvas.height = image.naturalHeight;
        canvas.setAttribute("aria-hidden", "true");

        const context = canvas.getContext("2d");
        if (!context) {
            return;
        }

        // Canvas übernimmt ein einzelnes Bild aus dem GIF, keine Animation.
        context.drawImage(image, 0, 0);
        media.appendChild(canvas);
        button.disabled = false;
    }

    image.addEventListener("load", createStillImage, { once: true });
    if (image.complete) {
        createStillImage();
    }

    // Touch-Eingaben lösen ebenfalls Pointer-Events aus, aber keinen Hover.
    button.addEventListener("pointerenter", event => {
        if (event.pointerType === "mouse") {
            setFactorPlaying(button, true);
        }
    });

    button.addEventListener("pointerleave", event => {
        if (event.pointerType === "mouse") {
            setFactorPlaying(button, false);
        }
    });

    // Antippen, Enter und Leertaste schalten die Animation um.
    button.addEventListener("click", () => {
        setFactorPlaying(button, button.getAttribute("aria-pressed") !== "true");
    });

    button.addEventListener("blur", () => {
        setFactorPlaying(button, false);
    });
});

document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
        factorButtons.forEach(button => setFactorPlaying(button, false));
    }
});
