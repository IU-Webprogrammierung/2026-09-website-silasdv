# SilasDV's Video Game Ranking

Mein Hochschulprojekt im IU-Kurs **Projekt: Web-Programmierung (DLBUXPWP01)** ist eine englischsprachige Website mit persönlicher Spiele-Rangliste, Statistiken und Hintergrundinformationen. Entwicklungs- und Zielbrowser ist **Mozilla Firefox**. Der Stand für Phase 3 enthält vier verlinkte Seiten und 71 Spiele. Die Spielezahl kann durch Änderungen an der CSV wachsen.

## Seiten und Funktionen

- **Home:** Einführung und die drei bestplatzierten Spiele. Titel, Cover, Plattform, Spielzeit, Bewertung, Erscheinungsjahr, Genre und Kommentar stammen aus derselben Datenquelle wie das Ranking.
- **Ranking:** Vollständige Liste mit kombinierbarer Titelsuche, Plattform- und Genre-Filter, Reset-Button und Trefferanzeige. Sortierung nach persönlichem Rang, Spielzeit, Erscheinungsjahr oder Titel, jeweils in beide Richtungen. Bei Gleichständen entscheidet der persönliche Rang. Eine optionale Kompaktansicht und ein schwebender Back-to-top-Button erleichtern das Durchsehen.
- **Statistics:** Spielezahl, geschätzte Gesamtspielzeit, durchschnittliche Bewertung und Plattformanzahl. Beschriftete Balkendiagramme zeigen Plattformen und Genres. Genres mit nur einem Spiel werden unter Other zusammengefasst. Top 5 Playtime und Top 5 Game Sales ergänzen die Auswertung mit Covern und proportionalen Balken.
- **About:** Persönlicher Hintergrund, Foto, Zitat und sieben Bewertungskriterien als Bildboxen. Die Kriterien zeigen zunächst Schwarz-Weiß-Standbilder; Hover, Antippen, Enter oder Leertaste aktivieren die farbige Animation. Es ist höchstens eine Kriterienanimation gleichzeitig sichtbar.
- **Gemeinsame Bedienung:** Mobiles Menü, Kennzeichnung der aktuellen Seite, Social-Media-Links und Hell-/Dunkelmodus. Die Farbauswahl wird in localStorage gespeichert und über Seitenwechsel und Neuladen hinweg übernommen. Ohne eigene Auswahl gilt die Systemeinstellung.

## Lokal öffnen

1. Den Projektordner in Visual Studio Code öffnen.
2. `index.html` über einen lokalen Webserver starten, beispielsweise mit **Open with Live Server**.
3. Die lokale Adresse in Firefox öffnen.

Es gibt keinen Build-Schritt und keine zu installierenden Projektpakete. Ein Doppelklick auf eine HTML-Datei reicht nicht: CSV und gemeinsame HTML-Komponenten werden mit `fetch()` geladen und benötigen HTTP. JavaScript muss aktiviert sein. Bei einem Ladefehler bleibt ein Link zur Startseite erhalten; fehlende Spieldaten werden mit einer verständlichen Meldung angezeigt. Externe Cover benötigen eine Internetverbindung.

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

Auf kleinen Bildschirmen zeigt Home schmale Cover neben den Angaben; das normale Ranking verwendet zwei Karten pro Reihe. Ab 768 Pixeln wachsen die Home-Cover mit den Karten bis zu einer Breite von 210 Pixeln. Cover und Rangbalken bleiben dabei gleich breit. Bilder behalten ihre Proportionen; längere Texte dürfen umbrechen.

## Datenpflege

- `data/games.csv` verwendet UTF-8, Semikolons als Feldtrenner und Dezimalkommas. Kommentare stehen in der Spalte `comment`; ein leeres Feld blendet den Kommentar aus.
- Neue Spiele benötigen einen eindeutigen positiven Rang und gültige Pflichtfelder. Nach Speichern und Neuladen aktualisieren sich Ranking, Top 3, Filteroptionen und berechnete Statistiken. Die ursprüngliche Excel-Datei wird nicht automatisch synchronisiert.
- Jedes Spiel erhält genau ein projektbezogenes Genre. Einheitliche Schreibweisen verhindern doppelte Kategorien. Neue Genrebezeichnungen erhalten zunächst ein neutrales Symbol.
- Spielzeiten sind persönliche Schätzungen; Bewertungen und Kommentare sind subjektiv. Der Rang wird ausdrücklich festgelegt und nicht aus der Bewertung berechnet.
- Bei gleicher Spielzeit entscheidet der persönliche Rang über die Auswahl der genau fünf Top-Playtime-Spiele.
- Verkaufszahlen sind recherchiert und manuell in `statistics.html` hinterlegt. Sie werden nicht aus der CSV berechnet und nicht automatisch aktualisiert.

## Gestaltung und Barrierefreiheit

- Rote Akzentfarben und getrennte Farbvariablen für Hell- und Dunkelmodus sorgen für ein einheitliches Erscheinungsbild. Die Desktop-Navigation ist als eigene Leiste abgesetzt.
- Kurze Übergänge unterstützen Navigation und Back-to-top. Die Systemeinstellung für reduzierte Bewegung unterbindet diese CSS-Übergänge und das weiche Zurückscrollen.
- Ein bei Tastaturfokus sichtbarer Skip-Link führt zum Hauptinhalt. Fokusmarkierungen, zugeordnete Formularlabels und native Bedienelemente unterstützen die Tastaturbedienung.
- Das mobile Menü meldet seinen Zustand mit `aria-expanded`; Escape schließt es und setzt den Fokus zurück. Zustände der Kompaktansicht und Kriterienanimationen werden mit `aria-pressed` beschrieben.
- Cover und Foto besitzen Alternativtexte. Rein dekorative Bilder und SVG-Symbole werden für Screenreader ausgeblendet. Zahlen und Kategorien der Diagramme sind auch als Text vorhanden.
- **Bekannte Einschränkung:** Die automatisch animierten Cover besitzen keinen Pause- oder Ausblendschalter. Für diese Animationen ist WCAG 2.2, Erfolgskriterium 2.2.2, daher nicht vollständig umgesetzt. Die steuerbaren Kriterienanimationen auf About sind davon getrennt. Eine vollständige WCAG-Konformität wird nicht behauptet.

## Prüfung des Abschlussstands

Am **17.11.2026** wurde der Website-Code des Commits `f8aa508` geprüft. Der anschließende Abschlusscommit aktualisiert nur diese README; die geprüften Website-Dateien bleiben unverändert.

- **Firefox 153.0.3:** 149 automatisierte Funktions- und Layoutprüfungen bestanden. Geprüft wurden unter anderem alle 71 Genrezuordnungen, Filterergebnisse, acht Sortierrichtungen, Suche ohne Treffer, Reset, Kompaktansicht, Navigation, Tastaturaktionen, Farbspeicherung, Back-to-top, Kriterienanimationen und der Fehlerfall einer fehlenden CSV.
- **Responsive:** Prüfbreiten 320, 360, 600, 768, 900, 1024, 1440 und 1920 CSS-Pixel; die geforderte Spanne 360 bis 1920 ist damit durch repräsentative Breiten abgedeckt. In den geprüften Ansichten gab es keinen horizontalen Seitenüberlauf. Die zwölf Abgabescreenshots wurden zusätzlich visuell kontrolliert.
- **Lighthouse 13.5.0 in Chrome 157:** Alle vier Seiten wurden im hellen Design jeweils mobil und als Desktop geprüft. Alle acht Messungen erreichten **100 Accessibility und 100 Best Practices**. Firefox bleibt der Zielbrowser.
- Die Prüfungen wurden mit KI-Unterstützung automatisiert durchgeführt. Ein vollständiger Screenreader- oder WCAG-Konformitätstest wurde nicht durchgeführt. Lighthouse ersetzt diesen nicht; die oben genannte Einschränkung der Coveranimationen bleibt bestehen.

## Entwicklung und Erkenntnisse

- Phase 1: Konzept, Wireframes und semantische HTML-Inhalte.
- Phase 2: Responsive CSS-Gestaltung, eigenes Logo, CSV-Anbindung und Statistikdarstellung.
- Phase 3: Gemeinsame Komponenten, CSS-Nesting, Suche und Filter, zusätzliche Sortierungen, Dunkelmodus, SVG-Symbole, Kompaktansicht, Animationen und abschließende Prüfungen.
- Die vollständige Liste ersetzt die geplante Funktion Load more. Zusätzliche Spieldetails stehen direkt im Eintrag; View Details entfiel. Kompakte Balken blieben gegenüber dem zeitweise erprobten Kuchendiagramm die verständlichere Darstellung.
- Die Umsetzung zeigt den Nutzen einer gemeinsamen Datenquelle: Änderungen müssen nicht auf mehreren Seiten nachgetragen werden. Gemeinsame HTML-Komponenten und CSS-Variablen reduzieren doppelte Pflege. Layouts wurden schrittweise an realen Bildschirmbreiten angepasst.
- Die Entwicklung ist in kleinen, thematisch zusammengehörigen Git-Commits nachvollziehbar. Vor dem abschließenden README-Commit lagen 64 Commits vor, davon 30 seit Phase 2. Die Tags `abgabe-1`, `abgabe-2` und `abgabe-3` markieren die Abgabestände; der finale Stand liegt auf `main`.
- KI wurde für Erklärungen, Codeerstellung, Überarbeitungen, SVG-Symbole, Textentwürfe und Prüfungen eingesetzt. Gestaltung, Inhalte und Funktionsumfang wurden im Verlauf ausgewählt, überprüft und angepasst.

## Abgabe

Zum fertigen Repository gehören die README und die vollständige Git-Historie. Zusätzlich werden eine PDF mit zwölf beschrifteten Firefox-Screenshots und eine ZIP des lokalen Projektordners **inklusive `.git`** eingereicht. GitHubs automatisch erzeugte Download-ZIP ersetzt diese Projekt-ZIP nicht.
