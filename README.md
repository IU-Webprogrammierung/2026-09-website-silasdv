# SilasDV's Video Game Ranking

Dieses Repository enthält mein Studienprojekt im IU-Kurs **Projekt: Web-Programmierung (DLBUXPWP01)**. Die englischsprachige Website zeigt mein persönliches Spiele-Ranking, Statistiken zu meiner Sammlung und Informationen zu meinen Bewertungskriterien.

## Seiten

- **Home:** Kompakte Einführung und die drei bestplatzierten Spiele mit denselben Angaben wie im Ranking.
- **Ranking:** Die vollständige Spieleliste mit Cover, Plattform, geschätzter Spielzeit, Bewertung und weiteren Angaben. Titelsuche, Plattform- und Genre-Filter sowie verschiedene Sortierungen lassen sich miteinander kombinieren.
- **Statistics:** Kennzahlen, Plattform- und Genreverteilungen sowie Ranglisten nach Spielzeit und Verkaufszahlen.
- **About:** Hintergrund zum Projekt und meine subjektiven Bewertungskriterien.

## Technik und Dateien

Die Website verwendet HTML, CSS und JavaScript ohne Framework. Entwicklungs- und Zielbrowser ist **Mozilla Firefox**. Auf allen vier Seiten wird mein Affinity-Logo auch als Favicon im Browser-Tab eingebunden.

| Datei | Aufgabe |
| --- | --- |
| `index.html` | Startseite |
| `ranking.html` | Ranking-Seite |
| `statistics.html` | Statistikseite |
| `about.html` | Informationen zum Projekt |
| `about-factors.js` | Standbilder und Animationen der Bewertungskriterien steuern |
| `style.css` | Gemeinsame Gestaltung und responsive Anordnung |
| `ranking.css` | Gestaltung der Suche, Filter und Sortierung auf der Ranking-Seite |
| `loader.js` | Gemeinsame HTML-Bestandteile laden |
| `components/header.html` | Gemeinsamer Kopfbereich mit Logo und Navigation |
| `components/footer.html` | Inhalt der gemeinsamen Fußzeile |
| `theme.js` | Hell-/Dunkelmodus früh setzen, Auswahl merken und Schalter steuern |
| `navigation.js` | Aktuelle Seite markieren, mobiles Menü und Tastaturbedienung |
| `back-to-top.js` | Schwebenden Zurück-nach-oben-Button auf der Ranking-Seite steuern |
| `script.js` | CSV einlesen, Spiele anzeigen, filtern und sortieren sowie Statistiken berechnen |
| `data/games.csv` | Spieledaten und Cover-URLs |
| `data/SDVVGR.svg` | Eigenes, mit Affinity gestaltetes Logo im Kopfbereich und als Tab-Symbol |
| `data/picture.jpg` | Persönliches Foto für die About-Seite |

Auf der About-Seite steht das Foto ab 768 Pixeln neben dem Einführungstext, auf kleineren Bildschirmen darüber. Das vollständige Bild bleibt ohne Beschnitt oder Verzerrung sichtbar. Ein Alternativtext beschreibt das Motiv; der rote Rahmen passt sich dem Hell- und Dunkelmodus an.

Die sieben Bewertungskriterien auf der About-Seite werden mit lokalen GIFs aus `data/` als Bildboxen dargestellt. Unter 600 Pixeln stehen sie in zwei Spalten, ab 600 Pixeln in vier und ab 1024 Pixeln gemeinsam in einer Reihe. Die Bilder füllen quadratische Flächen und können dabei an den Rändern beschnitten werden.

Standardmäßig zeigt jede Box ein unbewegtes Schwarz-Weiß-Bild, das JavaScript mit Canvas aus dem GIF erzeugt. Beim Darüberfahren mit der Maus erscheint die farbige Animation; beim Verlassen wieder das Standbild. Antippen, Enter oder die Leertaste schalten ebenfalls zwischen beiden Ansichten um. Es ist höchstens eine Animation sichtbar; beim Verlassen des Buttons mit der Tastatur oder beim Wechsel in einen anderen Browser-Tab erscheint wieder das Standbild. Der Wechsel zeigt oder verbirgt das GIF, ohne einen Neustart seiner Animation zu garantieren. Zusätzliche Bilddateien werden nicht benötigt.

Die Kriterien bleiben als Liste mit ausgeschriebenen Namen lesbar. Die Buttons besitzen eine sichtbare Fokusmarkierung und melden ihren Zustand mit `aria-pressed`; die ergänzenden Bilder sind für Screenreader dekorativ. Erst nach dem Laden eines Bildes wird dessen Button bedienbar. Ohne JavaScript oder bei einem fehlenden GIF bleiben der Name und eine leere Bildfläche sichtbar.

Auf der Startseite stehen ab 768 Pixeln alle drei Top-Spiele nebeneinander. Innerhalb der Karten stehen der farbige Rangbalken und das Cover zentriert über den Spielangaben. Beide sind gleich breit: 80 Prozent der verfügbaren Kartenbreite, höchstens 210 Pixel. So wachsen die Cover auf Tablets mit den Karten und erscheinen auf Desktop größer. Ihr Seitenverhältnis bleibt erhalten; die Animationen werden weiterhin aus der CSV geladen. Bei niedrigen Fenstern lassen sich die vollständigen Karten durch Scrollen lesen.

Unter 768 Pixeln bleibt die kompakte Ansicht mit einem 80 Pixel breiten Cover links und den Spielangaben rechts erhalten. Der Kommentar nutzt darunter die volle Breite. Auf kleinen Bildschirmen sind die Bilder weiterhin auf maximal 150 Pixel Höhe begrenzt. Der Einführungsbereich ist kompakt gestaltet, damit die Top 3 früh sichtbar sind.

Alle drei Karten zeigen Titel, Cover, Plattform, geschätzte Spielzeit, Bewertung, Erscheinungsjahr, Genre mit Symbolen und den Kommentar, sofern einer hinterlegt ist. Sie verwenden dieselben Daten wie das Ranking. Die Auswahl folgt weiterhin den drei besten Rängen aus der CSV; weder Spiele noch Bilder sind fest vorgegeben.

## Lokal öffnen

1. Den Projektordner in VS Code öffnen.
2. Die Website über einen lokalen Webserver starten, zum Beispiel mit **Open with Live Server** bei `index.html`.
3. Die lokale Adresse in Firefox öffnen.

Ein direktes Öffnen der HTML-Datei per Doppelklick reicht für das Laden der CSV-Datei nicht aus. JavaScript muss aktiviert sein, damit Spieledaten, die vollständige Navigation und die gemeinsame Fußzeile geladen werden. Bei deaktiviertem JavaScript oder einem Ladefehler des Headers bleibt ein Link zur Startseite verfügbar. Die extern verlinkten Cover benötigen eine Internetverbindung.

## Daten

Die Spieleliste wird aus `data/games.csv` geladen. Die Datei verwendet Semikolons als Feldtrenner und Kommas als Dezimaltrennzeichen. Spielzeiten sind Schätzwerte; Bewertungen und Kommentare geben meine persönliche Einschätzung wieder. Die Kommentare stehen in der Spalte `comment` derselben CSV-Datei. Ein leeres Feld bedeutet, dass bei diesem Spiel kein Kommentar angezeigt wird. Änderungen an den Texten benötigen keine Anpassung in JavaScript.

Die Verkaufszahlen wurden recherchiert und manuell in `statistics.html` eingetragen. Sie werden nicht automatisch aktualisiert. Genres, die nur einmal vorkommen, werden im Diagramm unter **Other** zusammengefasst.

Im Ranking und in der Genre-Statistik ergänzen passende Symbole die ausgeschriebenen Genres, zum Beispiel ein Auto für Racing und ein Fadenkreuz für Shooter. Zusammengesetzte Angaben erhalten ein Symbol pro Bestandteil. Die SVG-Symbole sind in `script.js` hinterlegt und benötigen keinen externen Icon-Dienst. Für neue, noch nicht zugeordnete Genres gibt es ein neutrales Ersatzsymbol. Screenreader lesen weiterhin die Namen; die dekorativen Symbole sind ausgeblendet.

Die Plattform- und Genreverteilung werden als kompakte Balkendiagramme dargestellt. Ab 900 Pixeln stehen die beiden Diagramme nebeneinander, darunter untereinander. Kategorienamen stehen links, Zahlen rechts und jeweils ein sechs Pixel hoher Balken darunter. Die Genres behalten ihre Symbole, vollständigen Namen, Anzahlen und Prozentwerte. Die Einheit wird einmal oberhalb jeder Liste erklärt. Innerhalb jedes Diagramms verwenden alle Balken dieselbe Skala. Die Diagramme werden aus der Spieleliste berechnet und benötigen keine zusätzliche Bibliothek.

**Top 5 Playtime** zeigt die fünf Spiele mit der höchsten geschätzten Spielzeit. Bei gleicher Spielzeit entscheidet der persönliche Rang aus der CSV-Datei. Dadurch stehen höchstens fünf Spiele in der Liste; alle anderen Spiele bleiben in der Sammlung und fließen weiterhin in die Kennzahlen und Verteilungen ein.

## Suche, Filter und Sortierung

Die Titelsuche aktualisiert die Liste während der Eingabe. Groß- und Kleinschreibung sowie Leerzeichen am Anfang und Ende werden dabei ignoriert. Plattform und Genre können zusätzlich ausgewählt werden; ein Spiel muss alle gewählten Bedingungen erfüllen. Die Auswahlmöglichkeiten stammen aus der CSV-Datei. Zusammengesetzte Genreangaben wie **Platform / Adventure** bleiben dabei eigene Einträge.

Die Auswahlleiste für Plattform, Genre und Sortierung ist rechtsbündig angeordnet. Auf kleinen Bildschirmen stehen die drei Auswahl-Symbole und der Reset-Button nebeneinander; die aktuelle Auswahl erscheint als Textzeile darunter. Ab 900 Pixeln sind die Auswahltexte direkt in den Feldern sichtbar und werden durch die Symbole ergänzt. Die nativen Auswahlfelder behalten ihre zugeordneten Beschriftungen und eine sichtbare Fokusmarkierung.

Unter **Sort by** kann die Liste nach persönlichem Rang, Spielzeit, Erscheinungsjahr oder Titel sortiert werden, jeweils in beide Richtungen. Bei gleichen Werten entscheidet die ursprüngliche Rangfolge. Die angezeigten Rangnummern bezeichnen weiterhin meine persönliche Platzierung.

Mit **Reset filters** werden die Suche geleert, **All platforms** und **All genres** gewählt und die Sortierung auf **Rank: best first** zurückgesetzt. Anschließend erscheint die vollständige Liste wieder in meiner persönlichen Reihenfolge; der Fokus springt zurück ins Suchfeld. Auf kleinen Bildschirmen zeigt der Button ein Zurücksetzen-Symbol, ab 900 Pixeln zusätzlich den Text **Reset filters**. Der Button ist mit der Tastatur bedienbar und auch für Screenreader beschriftet. Eine Statusmeldung zeigt die Trefferzahl oder weist auf eine leere Ergebnisliste hin.

Unter 768 Pixeln zeigt das Ranking zwei kompakte Spielkarten pro Reihe. Cover, Spielinformationen und Kommentare bleiben vollständig erhalten; längere Texte umbrechen innerhalb der Karten. Auf größeren Bildschirmen stehen Cover und Spielinformationen weiterhin nebeneinander in einer breiten Listenansicht.

Mit **Compact** neben der Trefferzahl lässt sich eine platzsparende Ansicht einschalten. Auf kleinen Bildschirmen steht ein Eintrag pro Zeile, ab 768 Pixeln stehen zwei und ab 1200 Pixeln drei Einträge nebeneinander. Jeder Eintrag zeigt ein kleines Cover und weiterhin alle Spielinformationen einschließlich Kommentar. Ein erneuter Klick stellt die bisherige Kartenansicht wieder her. Suche, Filter und Sortierung bleiben beim Umschalten erhalten; **Reset filters** setzt nur die Auswahl zurück. Der Schalter ist mit der Tastatur bedienbar und meldet seinen Zustand an Screenreader. Nach einem Neuladen startet die Seite wieder in der bisherigen Kartenansicht.

Auf der Ranking-Seite blendet sich nach dem Herunterscrollen ein schwebender **Back to top**-Button weich ein und beim Erreichen des oberen Seitenbereichs wieder aus. Er führt zum Seitenanfang zurück und setzt den Tastaturfokus auf den Hauptinhalt. Während er ausgeblendet wird oder unsichtbar ist, lässt er sich weder anklicken noch mit der Tastatur fokussieren. Bei aktivierter Einstellung für reduzierte Bewegung entfallen sowohl die Überblendung als auch die Scrollanimation.

## Hell- und Dunkelmodus

Der Schalter in der gemeinsamen Navigation wechselt zwischen Hell- und Dunkelmodus. Ein Mond steht für den Wechsel zum dunklen Design, eine Sonne für den Wechsel zum hellen Design. Auf kleinen Bildschirmen befindet er sich im aufgeklappten Menü. Die Beschriftung nennt jeweils das Ziel: **Dark mode** im hellen Design und **Light mode** im dunklen Design. Der zugängliche Name für Screenreader und der Tooltip passen sich ebenfalls an; der Schalter ist mit der Tastatur bedienbar.

Ohne eigene Auswahl folgt die Website der Hell-/Dunkeleinstellung des Systems. Eine manuelle Auswahl wird im lokalen Browserspeicher gespeichert und gilt auf allen vier Seiten sowie nach einem Neuladen. Andere offene Tabs derselben Website übernehmen Änderungen ebenfalls. Wenn der Browser das Speichern blockiert, funktioniert der Schalter für die aktuelle Seite weiter, kann die Auswahl aber nicht dauerhaft behalten.

`theme.js` wird auf allen Seiten vor den Stylesheets geladen. Die Farben stehen als CSS-Variablen in `style.css`; auch die Ranking-Bedienelemente verwenden diese Variablen. Das schwarze Logo wird im Dunkelmodus hell dargestellt. Die Farben der Spielcover bleiben unverändert. Die Rangnummernleisten verwenden im hellen Design einen dunkelroten Hintergrund mit weißer Schrift und im Dunkelmodus einen hellroten Hintergrund mit dunkler Schrift.

## Social Media und Fußzeile

Die Navigationslinks und Menüschalter wechseln ihre Farben mit kurzen CSS-Übergängen. Beim Darüberfahren heben sich die Social-Media-Symbole leicht an; das Sonne-/Mond-Symbol dreht sich dezent. Beim Drücken werden diese Symbole kurz kleiner, während die anklickbaren Flächen unverändert bleiben. Tastaturfokus wird sofort durch eine Umrandung sichtbar. Die Systemeinstellung für reduzierte Bewegung schaltet diese Übergänge und Symbolbewegungen ab.

Ab 1024 Pixeln erscheint der Kopfbereich als abgesetzte Leiste mit eigener Hintergrundfläche, roter Oberkante, abgerundeten Ecken und einem dezenten Schatten. Logo und Seitenname stehen links; eine senkrechte Linie trennt sie vom rechten Navigationsbereich. Dort stehen die Social-Media-Links über den Seitenlinks. Die aktuelle Seite wird farbig hervorgehoben. Die Gestaltung verwendet die vorhandenen Farben des Hell- und Dunkelmodus; die mobile Menügestaltung bleibt erhalten.

Twitch, Instagram, X/Twitter, Discord und YouTube sind zusätzlich im gemeinsamen Kopfbereich verlinkt. Ab 1024 Pixeln stehen die Symbole rechtsbündig oberhalb der Seitennavigation. Auf kleineren Bildschirmen erscheinen sie innerhalb des aufgeklappten Menüs. Bei geschlossenem Menü sind auch diese Links ausgeblendet und nicht mit der Tastatur erreichbar. Die Symbole teilen sich die Grundgestaltung mit der Fußzeile. Auf dem Desktop sind die Header-Symbole dezenter dargestellt und erhalten beim Darüberfahren einen roten Akzent.

Die gemeinsame Fußzeile enthält links den Satz **Retired professional Teamfight Tactics player.** ohne Zeilenumbruch. Rechts stehen anklickbare Symbole für Twitch, Instagram, X/Twitter, Discord und YouTube. Auf schmalen Bildschirmen stehen die Symbole bei Bedarf in einer eigenen, weiterhin rechtsbündigen Zeile. Darunter befinden sich der Copyright-Hinweis und Links zu den vier Seiten.

Die Symbole sind direkt als SVG im HTML enthalten und benötigen keinen externen Icon-Dienst. Jeder Profillink hat eine lesbare Beschriftung für Screenreader und eine sichtbare Tastatur-Fokusmarkierung. Die Profiladressen richten sich nach meinen angegebenen Benutzernamen beziehungsweise meiner Discord-Benutzer-ID. Die Website bindet keine Social-Media-Feeds oder Tracking-Skripte ein.

## Qualitätsprüfung

Am 11.10.2026 wurden alle vier Seiten lokal mit Lighthouse 13.5.0 in Chrome 154 geprüft, jeweils in der mobilen und der Desktop-Ansicht im hellen Design. Alle acht Messungen übertrafen das Tutor-Ziel von 90 Punkten für Accessibility und Best Practices. Einen dabei gemeldeten Fehler durch das fehlende Favicon habe ich mit meinem vorhandenen Logo behoben; die mobile Startseite erreichte im anschließenden Nachtest in beiden Kategorien 100 Punkte.

Lighthouse ergänzt die Bedien- und Layoutprüfungen im Zielbrowser Firefox. Die automatisierten Ergebnisse sind kein vollständiger Nachweis der WCAG-Konformität.

## Projektstand

Die Git-Tags `abgabe-1` und `abgabe-2` markieren die jeweiligen Zwischenstände. Phase 3 ist in Bearbeitung. Das CSS ist für alle vier Seiten nach Bereichen gegliedert und mit nativem CSS-Nesting organisiert. Unterelemente, Zustände und passende Regeln für unterschiedliche Bildschirmgrößen stehen zusammen beim jeweiligen Bereich. Kopfbereich und Fußzeile werden auf allen vier Seiten aus gemeinsamen Dateien geladen. Das mobile Menü wird nach dem Laden des Headers initialisiert; die aktuelle Seite wird automatisch markiert. Titelsuche, Plattform- und Genre-Filter sowie Sortierung sind umgesetzt.

Die vollständige Ranking-Liste wird bereits geladen. Zusätzliche Spielinformationen stehen direkt im Eintrag; **Load more** und **View Details** sind deshalb entfallen.
