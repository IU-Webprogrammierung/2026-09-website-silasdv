const reviews = {
    "Celeste": "A breathtaking platformer that explores the topic of depression. With its mods and large modding community, this game is a timeless joy.",
    "Hollow Knight: Silksong": "If Hollow Knight left you wanting more, Silksong will not disappoint. A sequel that takes the best parts of the first game and turns them up a notch. Probably the best 20 euros I have ever spent on a game.",
    "Custom Robo Arena": "Robot battles? Robot battles! A game that sadly never received a sequel. Probably the best Nintendo DS game ever made."
};

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
            image.alt = "Cover artwork for " + game.title;
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
            item.appendChild(makeText("p", "Genre: " + game.genre));
            if (Object.hasOwn(reviews, game.title)) {
                item.appendChild(makeText("p", reviews[game.title]));
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

function showStatistics(games) {
    const platforms = countCategories(games, "platform");
    const genres = countCategories(games, "genre");
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

    const platformList = document.getElementById("platform-list");
    for (const [name, count] of platforms) {
        platformList.appendChild(makeText("li", name + ": " + count +
            (count === 1 ? " game" : " games")));
    }

    const genreList = document.getElementById("genre-list");
    for (const [name, count] of genres) {
        const percentage = (count / games.length * 100).toFixed(1);
        genreList.appendChild(makeText("li", name + ": " + count +
            (count === 1 ? " game" : " games") + " (" + percentage + "%)"));
    }

    // Gleiche Spielzeiten teilen sich einen Rang, auch auf Platz 5.
    const byPlaytime = [...games].sort((a, b) => b.playtime_hours - a.playtime_hours);
    const playtimeList = document.getElementById("playtime-list");
    let position = 1;

    for (let i = 0; i < byPlaytime.length; i++) {
        const game = byPlaytime[i];
        if (i > 0 && game.playtime_hours !== byPlaytime[i - 1].playtime_hours) {
            position = i + 1;
        }
        if (position > 5) break;
        const item = makeText("li", game.title + ": " +
            game.playtime_hours.toLocaleString("en-US") + " hours");
        item.value = position;
        playtimeList.appendChild(item);
    }
    document.getElementById("statistics-data").hidden = false;
}

async function loadGames() {
    const status = document.getElementById("data-status");
    status.textContent = "Loading game data...";

    try {
        const response = await fetch("data/games.csv");
        if (!response.ok) throw new Error("CSV could not be loaded.");
        const games = getGames(await response.text());

        const topGames = document.getElementById("top-games");
        const ranking = document.getElementById("ranking-list");
        if (topGames) showGames(topGames, games.slice(0, 3), false);
        if (ranking) showGames(ranking, games, true);
        if (document.getElementById("statistics-data")) showStatistics(games);

        status.textContent = games.length + " games in my collection.";
    } catch (error) {
        status.textContent = "The game data could not be loaded. Please try again later.";
        console.error(error);
    }
}

loadGames();