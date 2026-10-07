# SilasDV's Video Game Ranking

Dieses Repository enthält mein Studienprojekt im IU-Kurs **Projekt: Web-Programmierung (DLBUXPWP01)**. Die englischsprachige Website zeigt mein persönliches Spiele-Ranking, Statistiken zu meiner Sammlung und Informationen zu meinen Bewertungskriterien.

## Seiten

- **Home:** Einführung und die drei bestplatzierten Spiele.
- **Ranking:** Die vollständige Spieleliste mit Cover, Plattform, geschätzter Spielzeit, Bewertung und weiteren Angaben.
- **Statistics:** Kennzahlen, Plattform- und Genreverteilungen sowie Ranglisten nach Spielzeit und Verkaufszahlen.
- **About:** Hintergrund zum Projekt und meine subjektiven Bewertungskriterien.

## Technik und Dateien

Die Website verwendet HTML, CSS und JavaScript ohne Framework. Entwicklungs- und Zielbrowser ist **Mozilla Firefox**.

| Datei | Aufgabe |
| --- | --- |
| `index.html` | Startseite |
| `ranking.html` | Ranking-Seite |
| `statistics.html` | Statistikseite |
| `about.html` | Informationen zum Projekt |
| `style.css` | Gemeinsame Gestaltung und responsive Anordnung |
| `loader.js` | Gemeinsame HTML-Bestandteile laden |
| `components/header.html` | Gemeinsamer Kopfbereich mit Logo und Navigation |
| `components/footer.html` | Inhalt der gemeinsamen Fußzeile |
| `navigation.js` | Aktuelle Seite markieren, mobiles Menü und Tastaturbedienung |
| `script.js` | CSV einlesen, Spiele anzeigen und Statistiken berechnen |
| `data/games.csv` | Spieledaten und Cover-URLs |
| `data/SDVVGR.svg` | Eigenes, mit Affinity gestaltetes Logo |

## Lokal öffnen

1. Den Projektordner in VS Code öffnen.
2. Die Website über einen lokalen Webserver starten, zum Beispiel mit **Open with Live Server** bei `index.html`.
3. Die lokale Adresse in Firefox öffnen.

Ein direktes Öffnen der HTML-Datei per Doppelklick reicht für das Laden der CSV-Datei nicht aus. JavaScript muss aktiviert sein, damit Spieledaten, die vollständige Navigation und die gemeinsame Fußzeile geladen werden. Bei deaktiviertem JavaScript oder einem Ladefehler des Headers bleibt ein Link zur Startseite verfügbar. Die extern verlinkten Cover benötigen eine Internetverbindung.

## Daten

Die Spieleliste wird aus `data/games.csv` geladen. Die Datei verwendet Semikolons als Feldtrenner und Kommas als Dezimaltrennzeichen. Spielzeiten sind Schätzwerte; Bewertungen und Kommentare geben meine persönliche Einschätzung wieder. Die Kommentare stehen derzeit in `script.js`.

Die Verkaufszahlen wurden recherchiert und manuell in `statistics.html` eingetragen. Sie werden nicht automatisch aktualisiert. Genres, die nur einmal vorkommen, werden im Diagramm unter **Other** zusammengefasst.

## Projektstand

Die Git-Tags `abgabe-1` und `abgabe-2` markieren die jeweiligen Zwischenstände. Phase 3 ist in Bearbeitung. Das CSS für Kopfbereich und Navigation ist verschachtelt organisiert. Kopfbereich und Fußzeile werden auf allen vier Seiten aus gemeinsamen Dateien geladen. Das mobile Menü wird nach dem Laden des Headers initialisiert; die aktuelle Seite wird automatisch markiert. Als nächste Schritte sind weiteres CSS-Nesting sowie Suche, Filter und Sortierung vorgesehen.

Die vollständige Ranking-Liste wird bereits geladen. Zusätzliche Spielinformationen stehen direkt im Eintrag; **Load more** und **View Details** sind deshalb entfallen.
