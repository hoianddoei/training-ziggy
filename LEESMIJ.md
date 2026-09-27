# Vakantie Fit als app op je telefoon (PWA)

Alleen de code komt online. Je trainingen en metingen blijven op je telefoon.

## 1. Zet de map online (één keer, gratis)

**Optie A: GitHub Pages**
1. Maak op github.com een nieuwe repository, bijvoorbeeld `vakantie-fit`.
2. Upload alle bestanden uit deze map (index.html, sw.js, manifest.webmanifest en de map icons).
3. Ga naar Settings → Pages → Build and deployment → Deploy from a branch → kies `main` en `/ (root)` → Save.
4. Na een minuutje staat de app op `https://<jouw-naam>.github.io/vakantie-fit/`.

**Optie B: Vercel**
1. Zet de map in een GitHub-repo en importeer die op vercel.com als nieuw project (framework: Other).
2. Geen build-instellingen nodig. Je krijgt een `https://...vercel.app`-adres.

Let op: de link is openbaar, maar er staat geen data in. Iemand anders die hem opent, krijgt een lege app met eigen opslag op zijn eigen toestel.

## 2. Installeren op je telefoon
1. Open de link in **Chrome** (of Samsung Internet).
2. Menu (⋮) → **App installeren** of **Toevoegen aan startscherm**.
3. Open de app voortaan via het icoon op je startscherm. Hij werkt daarna ook zonder internet.

Check onder **Plan → Backup** of er staat: "Geïnstalleerd als app: ja".

## 3. Oude gegevens overzetten
Gebruikte je al het losse HTML-bestand? Daar staat je data apart.
1. Open het oude bestand → Plan → **Backup downloaden**.
2. Open de geïnstalleerde app → Plan → **Backup terugzetten uit bestand**.

## 4. Backup
Je data staat in de opslag van de app. Verwijder je de app of wis je de sitegegevens van de browser, dan is alles weg. Maak dus elke week een backup (de app herinnert je eraan) en bewaar het bestand op een veilige plek.

## 5. Updates
Pas je `index.html` aan? Verhoog dan in `sw.js` de regel `const VERSION = 'v1'` naar `'v2'` en upload opnieuw. De app haalt de nieuwe versie op zodra je hem met internet opent; na nog een keer openen draait de update. Je data blijft gewoon staan.
