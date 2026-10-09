# SilasDV's Video Game Ranking

Dieses Repository enthält mein Studienprojekt im IU-Kurs **Projekt: Web-Programmierung (DLBUXPWP01)**. Die englischsprachige Website zeigt mein persönliches Spiele-Ranking, Statistiken zu meiner Sammlung und Informationen zu meinen Bewertungskriterien.

## Seiten

- **Home:** Einführung und die drei bestplatzierten Spiele.
- **Ranking:** Die vollständige Spieleliste mit Cover, Plattform, geschätzter Spielzeit, Bewertung und weiteren Angaben. Titelsuche, Plattform- und Genre-Filter sowie verschiedene Sortierungen lassen sich miteinander kombinieren.
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
| `ranking.css` | Gestaltung der Suche, Filter und Sortierung auf der Ranking-Seite |
| `loader.js` | Gemeinsame HTML-Bestandteile laden |
| `components/header.html` | Gemeinsamer Kopfbereich mit Logo und Navigation |
| `components/footer.html` | Inhalt der gemeinsamen Fußzeile |
| `navigation.js` | Aktuelle Seite markieren, mobiles Menü und Tastaturbedienung |
| `back-to-top.js` | Schwebenden Zurück-nach-oben-Button auf der Ranking-Seite steuern |
| `script.js` | CSV einlesen, Spiele anzeigen, filtern und sortieren sowie Statistiken berechnen |
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

## Suche, Filter und Sortierung

Die Titelsuche aktualisiert die Liste während der Eingabe. Groß- und Kleinschreibung sowie Leerzeichen am Anfang und Ende werden dabei ignoriert. Plattform und Genre können zusätzlich ausgewählt werden; ein Spiel muss alle gewählten Bedingungen erfüllen. Die Auswahlmöglichkeiten stammen aus der CSV-Datei. Zusammengesetzte Genreangaben wie **Platform / Adventure** bleiben dabei eigene Einträge.

Die Auswahlleiste für Plattform, Genre und Sortierung ist rechtsbündig angeordnet. Auf kleinen Bildschirmen stehen drei kompakte Symbole nebeneinander; die aktuelle Auswahl erscheint als Textzeile darunter. Ab 900 Pixeln sind die Auswahltexte direkt in den Feldern sichtbar und werden durch die Symbole ergänzt. Die nativen Auswahlfelder behalten ihre zugeordneten Beschriftungen und eine sichtbare Fokusmarkierung.

Unter **Sort by** kann die Liste nach persönlichem Rang, Spielzeit, Erscheinungsjahr oder Titel sortiert werden, jeweils in beide Richtungen. Bei gleichen Werten entscheidet die ursprüngliche Rangfolge. Die angezeigten Rangnummern bezeichnen weiterhin meine persönliche Platzierung.

Für die vollständige Liste das Suchfeld leeren und **All platforms** sowie **All genres** auswählen. **Rank: best first** stellt die persönliche Reihenfolge wieder her. Eine Statusmeldung zeigt die Trefferzahl oder weist auf eine leere Ergebnisliste hin.

Auf der Ranking-Seite erscheint nach dem Herunterscrollen ein schwebender **Back to top**-Button. Er führt zum Seitenanfang zurück und setzt den Tastaturfokus auf den Hauptinhalt. Bei aktivierter Einstellung für reduzierte Bewegung erfolgt der Sprung ohne Scrollanimation.

## Projektstand

Die Git-Tags `abgabe-1` und `abgabe-2` markieren die jeweiligen Zwischenstände. Phase 3 ist in Bearbeitung. Das CSS für Kopfbereich und Navigation ist verschachtelt organisiert. Kopfbereich und Fußzeile werden auf allen vier Seiten aus gemeinsamen Dateien geladen. Das mobile Menü wird nach dem Laden des Headers initialisiert; die aktuelle Seite wird automatisch markiert. Titelsuche, Plattform- und Genre-Filter sowie Sortierung sind umgesetzt. Weiteres CSS-Nesting ist vorgesehen.

Die vollständige Ranking-Liste wird bereits geladen. Zusätzliche Spielinformationen stehen direkt im Eintrag; **Load more** und **View Details** sind deshalb entfallen.
