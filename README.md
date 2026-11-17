# SilasDV's Video Game Ranking

Mein Hochschulprojekt im IU-Kurs **Projekt: Web-Programmierung (DLBUXPWP01)** ist eine englischsprachige Website mit persönlicher Spiele-Rangliste, Statistiken und Hintergrundinformationen. Entwicklungs- und Zielbrowser ist **Mozilla Firefox**. Die Website besteht aus vier verlinkten Seiten und nutzt eine erweiterbare Spieleliste aus einer CSV-Datei.

## Seiten und Funktionen

- **Home:** Einführung und die drei bestplatzierten Spiele aus der CSV-Datei.
- **Ranking:** Spieleliste mit Suche, Plattform- und Genre-Filtern, Sortierung in beide Richtungen, Zurücksetzen, Kompaktansicht und Back-to-top-Button.
- **Statistics:** Kennzahlen sowie Balkendiagramme zu Plattformen, Genres, Spielzeiten und Verkaufszahlen.
- **About:** Persönlicher Hintergrund, Foto, Zitat und Bewertungskriterien mit steuerbaren Animationen.
- **Gemeinsame Bedienung:** Responsive Navigation, Social-Media-Links und gespeicherter Hell-/Dunkelmodus.

## Lokal öffnen

1. Den Projektordner in Visual Studio Code öffnen.
2. `index.html` über einen lokalen Webserver starten, beispielsweise mit **Open with Live Server**.
3. Die lokale Adresse in Firefox öffnen.

Das Projekt benötigt keinen Build-Schritt. JavaScript und ein lokaler Webserver sind erforderlich, da CSV-Daten und gemeinsame HTML-Komponenten mit `fetch()` geladen werden. Für externe Cover ist eine Internetverbindung nötig.

## Technik und Dateistruktur

- Semantisches HTML mit `header`, `nav`, `main`, `section`, `footer`, Überschriften, Listen, Formularfeldern und nativen Buttons.
- Eigenes CSS ohne Framework: Flexbox, Grid, Media Queries, CSS-Variablen, Pseudoklassen und natives CSS-Nesting.
- JavaScript ohne externe Laufzeitbibliotheken: CSV-Parser, DOM-Erzeugung, Suche, Filter, Sortierung, Statistikberechnung und Bedienzustände.
- `loader.js` lädt `components/header.html` und `components/footer.html` auf allen Seiten. `navigation.js` initialisiert danach das Menü und die Markierung der aktuellen Seite. Dadurch werden wiederkehrende Inhalte nur an einer Stelle gepflegt.
- `style.css` enthält die gemeinsame Gestaltung; `ranking.css` ergänzt die Ranking-Bedienelemente und Kompaktansicht. Verschachtelte Regeln halten Unterelemente, Zustände und responsive Anpassungen beim zugehörigen Bereich.
- `script.js` verarbeitet `data/games.csv`. `theme.js` setzt den Farbmodus vor dem Laden der Stylesheets. `back-to-top.js` steuert den Zurück-nach-oben-Button; `about-factors.js` erzeugt mit Canvas Standbilder für die Kriterien-GIFs.
- Die vier Einstiegsdateien sind `index.html`, `ranking.html`, `statistics.html` und `about.html`.
- Das selbst in **Affinity** gestaltete Logo `data/SDVVGR.svg` dient auch als Favicon. `data/picture.jpg` ist das persönliche Foto; die Kriterien-GIFs liegen ebenfalls unter `data/`. Genre- und Bedienungssymbole sind als SVG direkt im Code enthalten.

## Responsive Gestaltung

Die Hauptbereiche sind auf 1200 Pixel begrenzt; auf kleineren Bildschirmen bleibt seitlicher Abstand erhalten. Die Regeln orientieren sich an den benötigten Inhaltsbreiten:

| Breite | Wesentliche Anpassung |
| --- | --- |
| Unter 600 px | Zwei Kriterienboxen pro Reihe auf About. |
| Ab 600 px | Vier Kriterienboxen pro Reihe. |
| Ab 768 px | Drei Home-Karten nebeneinander; breite Ranking-Einträge; About-Foto neben dem Text. Die Kompaktansicht zeigt zwei Spalten. |
| Ab 900 px | Plattform- und Genre-Diagramme nebeneinander; beschriftete Filterfelder statt der mobilen Symbolleiste. |
| Ab 1024 px | Vollständige Desktop-Navigation, vier Statistik-Kennzahlen nebeneinander und sieben Kriterienboxen in einer Reihe. |
| Ab 1200 px | Drei Spalten in der kompakten Ranking-Ansicht. |

Karten, Bilder und Navigation passen sich an die Bildschirmbreite an. Bilder behalten ihre Proportionen und längere Texte können umbrechen.

## Datenpflege

- `data/games.csv` verwendet UTF-8, Semikolons als Feldtrenner und Dezimalkommas. Kommentare stehen in der Spalte `comment`; ein leeres Feld blendet den Kommentar aus.
- Neue Spiele benötigen einen eindeutigen positiven Rang und gültige Pflichtfelder. Nach Speichern und Neuladen aktualisieren sich Ranking, Top 3, Filteroptionen und berechnete Statistiken. Die ursprüngliche Excel-Datei wird nicht automatisch synchronisiert.
- Jedes Spiel erhält genau ein projektbezogenes Genre. Einheitliche Schreibweisen verhindern doppelte Kategorien. Neue Genrebezeichnungen erhalten zunächst ein neutrales Symbol.
- Spielzeiten sind persönliche Schätzungen; Bewertungen und Kommentare sind subjektiv. Der Rang wird ausdrücklich festgelegt und nicht aus der Bewertung berechnet.
- Verkaufszahlen sind recherchiert und manuell in `statistics.html` hinterlegt. Sie werden nicht aus der CSV berechnet und nicht automatisch aktualisiert.

## Gestaltung und Barrierefreiheit

- Rote Akzentfarben und getrennte Farbvariablen für Hell- und Dunkelmodus sorgen für ein einheitliches Erscheinungsbild. Die Desktop-Navigation ist als eigene Leiste abgesetzt.
- Kurze Übergänge unterstützen Navigation und Back-to-top. Die Systemeinstellung für reduzierte Bewegung unterbindet diese CSS-Übergänge und das weiche Zurückscrollen.
- Ein bei Tastaturfokus sichtbarer Skip-Link führt zum Hauptinhalt. Fokusmarkierungen, zugeordnete Formularlabels und native Bedienelemente unterstützen die Tastaturbedienung.
- Das mobile Menü meldet seinen Zustand mit `aria-expanded`; Escape schließt es und setzt den Fokus zurück. Zustände der Kompaktansicht und Kriterienanimationen werden mit `aria-pressed` beschrieben.
- Cover und Foto besitzen Alternativtexte. Rein dekorative Bilder und SVG-Symbole werden für Screenreader ausgeblendet. Zahlen und Kategorien der Diagramme sind auch als Text vorhanden.
- Die automatisch animierten Cover können derzeit nicht pausiert werden.

## Tests

Die Website wurde ausgiebig getestet. Dazu gehören automatisierte Funktions- und Layoutprüfungen in Firefox, die Prüfung der Tastaturbedienung sowie visuelle Kontrollen verschiedener Bildschirmgrößen im Hell- und Dunkelmodus. Ergänzend wurde Lighthouse zur Prüfung von Barrierefreiheit und Best Practices eingesetzt.

## Entwicklung und Erkenntnisse

Ausgehend von Konzept und Wireframes entstand zunächst die HTML-Struktur. Darauf aufbauend wurden die responsive Gestaltung, die CSV-Anbindung und die interaktiven Funktionen schrittweise umgesetzt und überarbeitet.

- Die vollständige Liste ersetzt die geplante Funktion Load more. Zusätzliche Spieldetails stehen direkt im Eintrag; View Details entfiel. Kompakte Balken blieben gegenüber dem zeitweise erprobten Kuchendiagramm die verständlichere Darstellung.
- Die Umsetzung zeigt den Nutzen einer gemeinsamen Datenquelle: Änderungen müssen nicht auf mehreren Seiten nachgetragen werden. Gemeinsame HTML-Komponenten und CSS-Variablen reduzieren doppelte Pflege. Layouts wurden schrittweise an realen Bildschirmbreiten angepasst.
- Die Entwicklung ist in kleinen, thematisch zusammengehörigen Git-Commits nachvollziehbar. Die Tags `abgabe-1`, `abgabe-2` und `abgabe-3` markieren die Abgabestände; der finale Stand liegt auf `main`.
- KI wurde für Erklärungen, Codeerstellung, Überarbeitungen, SVG-Symbole, Textentwürfe und Prüfungen eingesetzt. Gestaltung, Inhalte und Funktionsumfang wurden im Verlauf ausgewählt, überprüft und angepasst.
