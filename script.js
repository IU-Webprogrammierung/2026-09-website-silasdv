const reviews = {
    "Celeste": "A breathtaking platformer that explores the topic of depression. With its mods and large modding community, this game is a timeless joy.",
    "Hollow Knight: Silksong": "If Hollow Knight left you wanting more, Silksong will not disappoint. A sequel that takes the best parts of the first game and turns them up a notch. Probably the best 20 euros I have ever spent on a game.",
    "Custom Robo Arena": "Robot battles? Robot battles! A game that sadly never received a sequel. Probably the best Nintendo DS game ever made.",
    "Call of Duty: Black Ops II": "A great mix of exciting missions, memorable characters and multiplayer chaos that still makes every match fun.",
    "Hollow Knight": "A beautiful and difficult journey through a mysterious kingdom that rewards every bit of patience.",
    "Overwatch": "Fast matches and colourful heroes make this one of those games that is easy to start and hard to put down.",
    "Need for Speed: Most Wanted": "The perfect combination of illegal street races, police chases and cars that made every night feel like a movie.",
    "Teamfight Tactics": "A surprisingly deep strategy game where a lucky idea can turn a messy team into an unstoppable one.",
    "The Legend of Zelda: Breath of the Wild": "Exploring this huge world and finding something unexpected around every corner is an unforgettable experience.",
    "Pokémon Platinum Version": "A classic Pokémon adventure with a great region, memorable rivals and a legendary Pokémon that still looks incredible.",
    "League of Legends": "Thousands of hours later I still find new ways to enjoy the strategy, frustration and ridiculous moments in this game.",
    "Mario Kart DS": "A small racing game with huge memories that made every local multiplayer session feel like a tournament.",
    "Mario Kart World": "A colourful new way to race through the Mushroom Kingdom with enough strange tracks and shortcuts to keep things fresh.",
    "Hearthstone": "Simple rules, great artwork and completely unpredictable turns make this card game dangerously easy to keep playing.",
    "Kingdom Hearts II": "An emotional adventure with an amazing soundtrack and some of the most satisfying combat in the series.",
    "Slay the Spire 2": "Building a strange deck and somehow surviving one more floor is already enough to make this sequel exciting.",
    "Ratchet & Clank: Size Matters": "A fun portable adventure full of creative weapons, funny characters and the kind of action that works perfectly on the PSP.",
    "Need for Speed: Underground": "Neon lights, loud music and custom cars made this feel like the coolest racing game in the world.",
    "Need for Speed: Underground 2": "The open city, endless tuning options and brilliant soundtrack make this the Need for Speed game I return to most.",
    "Dragon Quest IX: Sentinels of the Starry Skies": "A charming role-playing adventure with a lot of freedom, lovely characters and enough quests to disappear into for weeks.",
    "The Legend of Zelda: A Link Between Worlds": "A clever return to a familiar world that adds just enough new ideas to make the adventure feel special.",
    "Sonic Advance 3": "Fast levels, colourful zones and a great team mechanic make this one of my favourite Sonic games on a handheld.",
    "Patapon 2": "Marching, attacking and keeping the rhythm together creates a strange little strategy game that is impossible to forget.",
    "MotorStorm: Arctic Edge": "Racing across frozen tracks with heavy vehicles and constant crashes gives this game a rough charm that I really like.",
    "The Legend of Zelda: The Minish Cap": "A compact Zelda adventure with a wonderful art style and one of the most creative size-changing ideas in the series.",
    "The Legend of Zelda: Tears of the Kingdom": "Building ridiculous machines and exploring the sky, surface and depths makes this adventure feel almost limitless.",
    "Patapon": "The simple rhythm commands and unusual art style turn a tiny army into one of the most memorable game experiences on PSP.",
    "Pokémon Mystery Dungeon: Rescue Team DX": "A warm and emotional Pokémon story that makes even a simple rescue mission feel surprisingly important.",
    "Slay the Spire": "Every run feels different, and the moment a strange card combination suddenly works is incredibly satisfying.",
    "The Last of Us": "A powerful story about survival and human connection that stays in my head long after the credits finish.",
    "Pokémon FireRed Version": "A simple and polished return to Kanto that captures the feeling of discovering Pokémon for the first time.",
    "God of War": "A brutal mythological adventure with huge battles, dramatic music and a story that gives the violence real weight.",
    "Minesweeper": "A very simple game that somehow turns a few hidden squares into a surprisingly stressful puzzle.",
    "Killzone: Mercenary": "A surprisingly strong handheld shooter with satisfying weapons, impressive visuals and missions that feel much bigger than expected.",
    "Counter-Strike: Global Offensive": "Precise shooting, careful teamwork and one bad decision are enough to make every round feel important.",
    "Everybody's Golf": "Relaxed golfing, colourful courses and silly characters make this much more fun than a serious golf game has any right to be.",
    "Tetris": "The rules are simple, but fitting one more block into the right place never stops being satisfying.",
    "The Legend of Zelda: Link's Awakening": "A strange and charming island adventure with a dreamlike story that feels unlike any other Zelda game.",
    "The Legend of Zelda: A Link to the Past": "Classic dungeons, a memorable dark world and excellent exploration make this one of the strongest Zelda adventures.",
    "The Legend of Zelda: The Wind Waker": "The colourful ocean, expressive characters and beautiful soundtrack make sailing across this world feel wonderful.",
    "Rayman 2": "Creative levels, unusual worlds and smooth platforming make this a colourful adventure that still holds up very well.",
    "Mario Kart 8": "Beautiful tracks, great music and chaotic items make this one of the easiest multiplayer games to enjoy with friends.",
    "Sonic Rivals 2": "Racing through short levels while attacking another character gives Sonic a fun competitive twist.",
    "Cyberpunk 2077": "A huge futuristic city, memorable characters and a brilliant atmosphere make this game easy to get lost in.",
    "Far Cry Primal": "Surviving in a prehistoric world with animals, traps and a simple spear gives the Far Cry formula a surprisingly fresh feeling.",
    "Kingdom Hearts III": "The Disney worlds look fantastic, the music is beautiful and the huge finale feels like a celebration of the whole series.",
    "Crashday": "Fast cars, destructive tracks and strange game modes make this an underrated racing game with a lot of personality.",
    "BioShock": "The underwater city, unsettling atmosphere and strong story make every corridor feel like it has something important to reveal.",
    "Mario Kart Wii": "The controls are chaotic, the tracks are memorable and a single blue shell can completely change the result of a race.",
    "Sonic Rivals": "A fast handheld race through Sonic levels that turns familiar platforming into a fun competition.",
    "MotorStorm: Apocalypse": "Racing through a collapsing city while everything explodes around you makes every lap feel completely out of control.",
    "The Binding of Isaac": "Dark humour, strange items and endless combinations make every run feel like a terrible idea that somehow works.",
    "Getting Over It": "Climbing with a hammer sounds simple until one mistake sends hours of progress straight back to the beginning.",
    "Skate 3": "The relaxed skating, creative challenges and ridiculous crashes make this one of the most enjoyable sports games ever made.",
    "Super Mario Bros. 3": "Perfect platforming, creative power-ups and memorable worlds make this an absolute classic for a reason.",
    "The Legend of Zelda: Ocarina of Time": "A legendary adventure with unforgettable dungeons, music and moments that shaped how I see video games.",
    "Sonic Chronicles: The Dark Brotherhood": "A strange but charming role-playing experiment that gives Sonic and his friends a surprisingly different kind of adventure.",
    "Wildfrost": "Building a small team of adorable creatures while trying to survive a frozen world makes every decision feel meaningful.",
    "Balatro": "Poker hands, strange jokers and completely broken combinations turn a simple card game into one more run I cannot stop playing.",
    "Pogostuck": "Jumping up a mountain on a pogo stick is frustrating, funny and somehow convincing enough to make me try again.",
    "Gunfire Reborn": "Fast shooting, random upgrades and colourful characters make every run feel like a small action movie.",
    "Donkey Kong Country": "Great music, clever levels and satisfying movement make this platformer much more than just a difficult classic.",
    "Dead Cells": "The combat feels fantastic, and every failed run still teaches me something useful for the next attempt.",
    "Yoshi's Island": "Soft colours, creative transformations and brilliant level design make this one of the most charming Mario adventures.",
    "Mario Kart 64": "The simple tracks, memorable battle arenas and chaotic multiplayer are responsible for a lot of great memories.",
    "Zeus Pinball": "A small pinball game with a surprisingly satisfying rhythm that makes chasing a higher score feel worthwhile.",
    "The Legend of Zelda: Majora's Mask": "The strange world, repeating days and emotional side stories create an adventure that feels completely unique.",
    "Stronghold": "Building a castle, managing an economy and defending against attacks makes every map feel like its own little story.",
    "Kirby": "Simple controls, cheerful worlds and copy abilities make this an easy game to enjoy whenever I want something relaxing.",
    "Unit 13": "Short tactical missions and satisfying shooting make this a great game for playing one operation at a time.",
    "SOCOM": "Careful planning, tense firefights and team commands make every mission feel more serious than a normal shooter."
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
        showSalesChart([]);
        console.error(error);
    }
}

loadGames();
