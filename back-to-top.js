// Der Button wird nur auf der Ranking-Seite eingebunden.
const backToTopButton = document.getElementById("back-to-top");
const rankingMain = document.getElementById("main-content");

if (backToTopButton && rankingMain) {
    function updateBackToTop() {
        const nearTop = window.scrollY <= 600;

        // Der Tastaturfokus soll nicht auf einem ausgeblendeten Button bleiben.
        if (nearTop && document.activeElement === backToTopButton) {
            rankingMain.focus({ preventScroll: true });
        }
        backToTopButton.hidden = nearTop;
    }

    backToTopButton.addEventListener("click", () => {
        rankingMain.focus({ preventScroll: true });
        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        window.scrollTo({ top: 0, behavior: reduceMotion ? "instant" : "smooth" });
    });

    window.addEventListener("scroll", updateBackToTop, { passive: true });
    updateBackToTop();
}
