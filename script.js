// CSV-Felder trennen. Text in Anführungszeichen bleibt zusammen.
function readCSV(text) {
    const rows = [];
    let row = [];
    let field = "";
    let quoted = false;
    text = text.replace(/^\uFEFF/, "");

    for (let i = 0; i < text.length; i++) {
        const character = text[i];

        if (character === '"') {
            if (quoted && text[i + 1] === '"') {
                field += '"';
                i++;
            } else {
                quoted = !quoted;
            }
        } else if (character === ";" && !quoted) {
            row.push(field);
            field = "";
        } else if ((character === "\n" || character === "\r") && !quoted) {
            row.push(field);
            rows.push(row);
            row = [];
            field = "";
            if (character === "\r" && text[i + 1] === "\n") i++;
        } else {
            field += character;
        }
    }

    if (quoted) throw new Error("Unclosed quotation mark in CSV.");
    row.push(field);
    rows.push(row);
    return rows.filter(row => row.some(field => field.trim() !== ""));
}

// Aus den Zeilen werden Spiele mit benannten Eigenschaften.
function getGames(text) {
    const rows = readCSV(text);
    if (rows.length < 2) throw new Error("No games found.");
    const headers = rows.shift().map(header => header.trim());
    const required = ["rank", "title", "platform", "playtime_hours",
        "rating", "release_year", "genre", "cover_url"];

    if (!required.every(header => headers.includes(header))) {
        throw new Error("Required CSV columns are missing.");
    }

    const games = rows.map(row => {
        if (row.length !== headers.length) {
            throw new Error("A CSV row has the wrong number of fields.");
        }
        const game = {};
        headers.forEach((header, index) => game[header] = row[index].trim());

        for (const key of ["rank", "playtime_hours", "rating", "release_year"]) {
            if (game[key] === "") throw new Error("A number is missing.");
            game[key] = Number(game[key].replace(",", "."));
            if (!Number.isFinite(game[key])) throw new Error("Invalid number.");
        }
        if (!game.title || !game.platform || !game.genre ||
            !Number.isInteger(game.rank) || game.rank < 1 ||
            game.playtime_hours < 0 || game.rating < 0 || game.rating > 10) {
            throw new Error("Invalid game data.");
        }
        return game;
    });

    if (new Set(games.map(game => game.rank)).size !== games.length) {
        throw new Error("Duplicate ranks.");
    }
    return games.sort((a, b) => a.rank - b.rank);
}

function makeText(tag, text) {
    const element = document.createElement(tag);
    element.textContent = text;
    return element;
}

// Einfache SVG-Linien (KI-Generiert): Die Namen entsprechen den Genres aus meiner Spieleliste.
const genreIcons = {
    "adventure": "M20 12a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z M15 9l-2 4-4 2 2-4 4-2Z",
    "card & board game": "M4 3h12v16H4Z M8 19v2h12V7h-4 M10 7l3 4-3 4-3-4 3-4Z",
    "fighting": "M8 20v-4l-3-3V7a2 2 0 0 1 4 0V5a2 2 0 0 1 4 0v1a2 2 0 0 1 4 0v4l1-1a2 2 0 0 1 3 2l-3 5v4H8Z M8 16h10",
    "hack and slash": "M4 20l4-4 M5 13l6 6 M8 16 19 5V3h-2L6 14",
    "moba": "M3 3h3l11 11 M3 3v3l11 11 M13 18l5-5 M16 16l5 5 M21 3h-3L7 14 M21 3v3L10 17 M6 13l5 5 M8 16l-5 5",
    "music": "M9 17V5l11-2v12 M9 9l11-2 M9 17a3 2 0 1 1-6 0 3 2 0 0 1 6 0Z M20 15a3 2 0 1 1-6 0 3 2 0 0 1 6 0Z",
    "strategy": "M5 3h3v4h3V3h3v4h3V3h2v7H5V3Z M7 10l1 8h8l1-8 M6 18h12v3H6Z",
    "real time strategy (rts)": "M5 3h3v4h3V3h3v4h3V3h2v7H5V3Z M7 10l1 8h8l1-8 M6 18h12v3H6Z",
    "pinball": "M5 2h14l2 19H3L5 2Z M9 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z M17 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z M6 16l4 2 M18 16l-4 2",
    "platform": "M2 21h6v-4h6v-4h8 M10 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z M8 7v5l-3 3 M8 10l5-3 M8 12l4 3",
    "puzzle": "M3 3h6a3 3 0 1 0 6 0h6v6a3 3 0 1 0 0 6v6h-6a3 3 0 1 0-6 0H3v-6a3 3 0 1 0 0-6V3Z",
    "racing": "M5 10l2-6h10l2 6 M4 10h16v8H4Z M4 14h3 M17 14h3 M6 18v3 M18 18v3 M4 10 2 8 M20 10l2-2",
    "role-playing (rpg)": "M12 2l8 4v6c0 5-8 10-8 10S4 17 4 12V6l8-4Z M12 6v12 M8 10h8",
    "rpg": "M12 2l8 4v6c0 5-8 10-8 10S4 17 4 12V6l8-4Z M12 6v12 M8 10h8",
    "shooter": "M20 12a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z M12 1v6 M12 17v6 M1 12h6 M17 12h6 M13 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z",
    "sport": "M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z M3 12h18 M12 3v18 M6 5c6 3 6 11 0 14 M18 5c-6 3-6 11 0 14",
    "tactical": "M4 4h5v5H4Z M15 15h5v5h-5Z M6 9v9h6 M12 18l-2-2 M12 18l-2 2 M15 4l5 5 M20 4l-5 5",
    "other": "M3 3h7v7H3Z M14 3h7v7h-7Z M3 14h7v7H3Z M14 14h7v7h-7Z"
};

// Bei kombinierten Genres bekommt jeder Bestandteil ein eigenes Symbol.
function makeGenreLabel(genre) {
    const label = document.createElement("span");
    label.className = "genre-label";
    const names = genre.split("/").map(name => name.trim());

    names.forEach((name, index) => {
        if (index > 0) label.appendChild(document.createTextNode(" / "));
        const part = document.createElement("span");
        part.className = "genre-tag";

        const key = name.toLowerCase();
        const shape = Object.hasOwn(genreIcons, key) ? genreIcons[key] : genreIcons.other;
        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute("class", "genre-icon");
        svg.setAttribute("viewBox", "0 0 24 24");
        svg.setAttribute("fill", "none");
        svg.setAttribute("stroke", "currentColor");
        svg.setAttribute("stroke-width", "1.8");
        svg.setAttribute("stroke-linecap", "round");
        svg.setAttribute("stroke-linejoin", "round");
        // Der ausgeschriebene Name daneben erklärt das Symbol bereits.
        svg.setAttribute("aria-hidden", "true");
        svg.setAttribute("focusable", "false");
        const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
        path.setAttribute("d", shape);
        svg.appendChild(path);

        part.appendChild(svg);
        const text = makeText("span", name);
        text.className = "genre-name";
        part.appendChild(text);
        label.appendChild(part);
    });
    return label;
}

function showGames(list, games, details) {
    list.replaceChildren();

    for (const game of games) {
        const item = document.createElement("li");
        item.value = game.rank;
        item.appendChild(makeText("h3", game.title));

        const figure = document.createElement("figure");
        if (game.cover_url) {
            const image = document.createElement("img");
            image.src = game.cover_url;
            image.alt = "Artwork for " + game.title;
            image.width = 200;
            image.height = 300;
            image.loading = "lazy";
            image.addEventListener("error", () => {
                figure.replaceChildren(makeText("p", "Cover unavailable."));
            }, { once: true });
            figure.appendChild(image);
        } else {
            figure.appendChild(makeText("p", "Cover unavailable."));
        }
        item.appendChild(figure);
        item.appendChild(makeText("p", "Platform: " + game.platform));
        item.appendChild(makeText("p", "Playtime: about " +
            game.playtime_hours.toLocaleString("en-US") + " hours"));
        item.appendChild(makeText("p", "Rating: " + game.rating + "/10"));

        if (details) {
            item.appendChild(makeText("p", "Release year: " + game.release_year));
            const genre = makeText("p", "Genre: ");
            genre.appendChild(makeGenreLabel(game.genre));
            item.appendChild(genre);
            if (game.comment) {
                const review = makeText("p", game.comment);
                review.className = "game-review";
                item.appendChild(review);
            }
        }
        list.appendChild(item);
    }
}

// Jede Plattform bzw. vollständige Genre-Bezeichnung wird gezählt.
function countCategories(games, key) {
    const counts = new Map();
    for (const game of games) {
        const category = game[key];
        counts.set(category, (counts.get(category) || 0) + 1);
    }
    return [...counts.entries()].sort((a, b) => b[1] - a[1]);
}

// Genres mit nur einem Spiel im Diagramm unter "Other" sammeln.
function groupSingleGenres(genres) {
    const groupedGenres = [];
    let otherCount = 0;

    for (const [name, count] of genres) {
        if (count === 1 || name === "Other") {
            otherCount += count;
        } else {
            groupedGenres.push([name, count]);
        }
    }

    if (otherCount > 0) {
        groupedGenres.push(["Other", otherCount]);
    }
    return groupedGenres;
}

function showCategoryChart(list, categories, totalGames, showPercentages) {
    list.replaceChildren();
    const largestCount = Math.max(...categories.map(category => category[1]));

    for (const [name, count] of categories) {
        const item = document.createElement("li");
        let text = name + ": " + count + (count === 1 ? " game" : " games");

        if (showPercentages) {
            const percentage = (count / totalGames * 100).toFixed(1);
            text += " (" + percentage + "%)";
        }

        const label = makeText("span", text);
        label.className = "chart-label";
        if (list.id === "genre-list") {
            label.replaceChildren(makeGenreLabel(name),
                document.createTextNode(text.slice(name.length)));
        }

        const bar = document.createElement("span");
        bar.className = "chart-bar";
        // Die häufigste Kategorie erhält den längsten Balken.
        bar.style.width = (count / largestCount * 100) + "%";
        bar.setAttribute("aria-hidden", "true");

        item.appendChild(label);
        item.appendChild(bar);
        list.appendChild(item);
    }
}

function showGameChartRow(item, game, position, value, largestValue) {
    const title = item.querySelector("h3");
    const valueLabel = item.querySelector(".chart-value");

    const rank = makeText("span", "#" + position);
    rank.className = "chart-rank";

    const cover = document.createElement("div");
    cover.className = "chart-cover";
    if (game && game.cover_url) {
        const image = document.createElement("img");
        image.src = game.cover_url;
        image.alt = "";
        image.width = 56;
        image.height = 84;
        image.loading = "lazy";
        image.addEventListener("error", () => {
            cover.replaceChildren(makeText("span", "No cover"));
        }, { once: true });
        cover.appendChild(image);
    } else {
        cover.appendChild(makeText("span", "No cover"));
    }

    const details = document.createElement("div");
    details.className = "chart-details";
    const bar = document.createElement("span");
    bar.className = "chart-bar";
    bar.style.width = (largestValue > 0 ? value / largestValue * 100 : 0) + "%";
    bar.setAttribute("aria-hidden", "true");

    details.appendChild(title);
    details.appendChild(valueLabel);
    details.appendChild(bar);
    item.value = position;
    item.classList.add("game-chart-row");
    item.replaceChildren(rank, cover, details);
}

function showSalesChart(games) {
    const list = document.getElementById("sales-list");
    if (!list) return;

    const items = [...list.children];
    const largestSales = Math.max(...items.map(item => Number(item.dataset.sales)));

    items.forEach((item, index) => {
        const game = games.find(game => game.title === item.dataset.title &&
            game.platform === item.dataset.platform);
        showGameChartRow(item, game, index + 1, Number(item.dataset.sales), largestSales);
    });
}

function showStatistics(games) {
    const platforms = countCategories(games, "platform");
    const genres = groupSingleGenres(countCategories(games, "genre"));
    let totalHours = 0;
    let totalRating = 0;

    for (const game of games) {
        totalHours += game.playtime_hours;
        totalRating += game.rating;
    }

    document.getElementById("game-count").textContent = games.length;
    document.getElementById("total-playtime").textContent =
        totalHours.toLocaleString("en-US");
    document.getElementById("average-rating").textContent =
        (totalRating / games.length).toFixed(1);
    document.getElementById("platform-count").textContent = platforms.length;

    showCategoryChart(document.getElementById("platform-list"), platforms, games.length, false);
    showCategoryChart(document.getElementById("genre-list"), genres, games.length, true);

    // Gleiche Spielzeiten teilen sich einen Rang, auch auf Platz 5.
    const byPlaytime = [...games].sort((a, b) => b.playtime_hours - a.playtime_hours);
    const playtimeList = document.getElementById("playtime-list");
    playtimeList.replaceChildren();
    let position = 1;

    for (let i = 0; i < byPlaytime.length; i++) {
        const game = byPlaytime[i];
        if (i > 0 && game.playtime_hours !== byPlaytime[i - 1].playtime_hours) {
            position = i + 1;
        }
        if (position > 5) break;
        const item = document.createElement("li");
        item.appendChild(makeText("h3", game.title));
        const valueLabel = makeText("p", "About " +
            game.playtime_hours.toLocaleString("en-US") + " hours");
        valueLabel.className = "chart-value";
        item.appendChild(valueLabel);
        showGameChartRow(item, game, position, game.playtime_hours, byPlaytime[0].playtime_hours);
        playtimeList.appendChild(item);
    }
    showSalesChart(games);
    document.getElementById("playtime-chart").hidden = false;
    document.getElementById("statistics-data").hidden = false;
}

// Spiele filtern und sortieren. Die persönlichen Rangnummern bleiben erhalten.
function setupRankingSearch(list, games, status) {
    const form = document.querySelector(".ranking-search");
    const searchInput = document.getElementById("game-search");
    const platformFilter = document.getElementById("platform-filter");
    const genreFilter = document.getElementById("genre-filter");
    const sortSelect = document.getElementById("game-sort");
    const selectionSummary = document.getElementById("selection-summary");
    if (!form || !searchInput || !platformFilter || !genreFilter || !sortSelect) {
        showGames(list, games, true);
        return;
    }

    // Jede Plattform und jedes Genre nur einmal als Auswahl anbieten.
    function addOptions(select, key) {
        const values = [...new Set(games.map(game => game[key]))];
        values.sort((a, b) => a.localeCompare(b, "en"));

        for (const value of values) {
            const option = makeText("option", value);
            option.value = value;
            select.appendChild(option);
        }
    }

    addOptions(platformFilter, "platform");
    addOptions(genreFilter, "genre");

    function updateResults() {
        const searchText = searchInput.value.trim().toLowerCase();
        const matches = games.filter(game => {
            const titleMatches = game.title.toLowerCase().includes(searchText);
            const platformMatches = platformFilter.value === "" ||
                game.platform === platformFilter.value;
            const genreMatches = genreFilter.value === "" ||
                game.genre === genreFilter.value;

            return titleMatches && platformMatches && genreMatches;
        });

        // Nur die Treffer sortieren, damit die ursprüngliche Spieleliste erhalten bleibt.
        const [sortKey, sortDirection] = sortSelect.value.split(":");
        matches.sort((a, b) => {
            let difference;
            if (sortKey === "title") {
                difference = a.title.localeCompare(b.title, "en", { sensitivity: "base" });
            } else {
                difference = a[sortKey] - b[sortKey];
            }

            if (sortDirection === "desc") difference = -difference;

            // Bei gleichen Werten entscheidet die persönliche Rangfolge.
            return difference || a.rank - b.rank;
        });

        // Die Auswahl unter den Symbolen anzeigen und aktive Filter hervorheben.
        const selectedTexts = [];
        for (const select of [platformFilter, genreFilter, sortSelect]) {
            const selectedText = select.selectedOptions[0].textContent;
            selectedTexts.push(selectedText);
            select.title = select.labels[0].textContent.trim() + ": " + selectedText;
            select.parentElement.classList.toggle("is-active",
                select.value !== select.options[0].value);
        }
        if (selectionSummary) selectionSummary.textContent = selectedTexts.join(" · ");

        showGames(list, matches, true);
        if (matches.length === 0) {
            status.textContent = "No games found. Try a different search or filter.";
        } else {
            status.textContent = matches.length + " of " + games.length + " games shown.";
        }
    }

    // Enter soll die Seite nicht neu laden.
    form.addEventListener("submit", event => event.preventDefault());
    searchInput.addEventListener("input", updateResults);
    platformFilter.addEventListener("change", updateResults);
    genreFilter.addEventListener("change", updateResults);
    sortSelect.addEventListener("change", updateResults);

    // Suche, Filter und Sortierung gemeinsam auf den Anfangszustand zurücksetzen.
    const resetButton = document.getElementById("reset-filters");
    if (resetButton) {
        resetButton.addEventListener("click", () => {
            form.reset();
            updateResults();
            searchInput.focus();
        });
    }

    updateResults();
    form.hidden = false;
}

async function loadGames() {
    const status = document.getElementById("data-status");
    status.textContent = "Loading game data...";

    try {
        const response = await fetch("data/games.csv");
        if (!response.ok) throw new Error("CSV could not be loaded.");
        const games = getGames(await response.text());
        status.textContent = games.length + " games in my collection.";

        const topGames = document.getElementById("top-games");
        const ranking = document.getElementById("ranking-list");
        if (topGames) showGames(topGames, games.slice(0, 3), false);
        if (ranking) setupRankingSearch(ranking, games, status);
        if (document.getElementById("statistics-data")) showStatistics(games);
    } catch (error) {
        status.textContent = "The game data could not be loaded. Please try again later.";
        showSalesChart([]);
        console.error(error);
    }
}

loadGames();
