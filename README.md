# Tempo

První lokální etapa evidence práce. Next.js + TypeScript, statický export kompatibilní s GitHub Pages.

## Spuštění

Node.js 22 LTS nebo novější podporovaná LTS verze. `npm ci`, `npm run dev`, otevřít http://localhost:3000. `npm test` ověřuje výpočty, `npm run build` vytvoří `out/`.

## Co funguje

Vlastní zaměstnavatelé, úpravy a archivace, evidenční typ smlouvy a sazba; směny, pracovní výjezdy, ostatní cesty, úprava a mazání záznamů; měsíční seznam a součty, plán versus skutečnost; JSON export a validovaná obnova.

Data se ukládají do localStorage tohoto prohlížeče. Nejde o zabezpečenou cloudovou databázi ani synchronizaci. Vymazání dat prohlížeče data odstraní. Zálohy obsahují osobní údaje, uchovávejte je soukromě. Export pravidelně stáhněte; obnovu nejprve vyzkoušejte v jiném profilu prohlížeče.

## Současná omezení

Bez přihlášení, RLS, PWA offline cache, linek, více smluv a historie sazeb, výplat a rozpočtů. Sazba je pouze evidenční, mzda se nepočítá. Časy používají časovou zónu zařízení (nastavte Europe/Prague). Dvojznačné hodiny při podzimní změně času zatím nelze zadat jednoznačně. Měsíční přehled přiřazuje celou směnu k měsíci začátku. Současné úpravy ve více kartách nejsou podporované.

## GitHub Pages

Workflow je připravený pro větev main. Po založení vybraného repozitáře a nahrání zdrojů nastavte Settings → Pages → Source: GitHub Actions. Workflow nastaví cestu repozitáře automaticky. Nenahrávejte exporty osobních dat. Repozitář ani web dosud nebyly vytvořeny nebo publikovány.

## Další etapy

1. Supabase Auth a databáze s testovaným RLS; oddělit úložiště od obrazovky a migrovat místní data. Nasazení na Pages zůstane statické, citlivé operace vyžadují samostatný backend.
2. Více smluv, verzované sazby a příplatky; linky se sdílenými zastávkami.
3. Ověřená legislativní pravidla po obdobích a měsíční mzdové výpočty, párování přijatých výplat.
4. Příjmy, rozpočtové potřeby a přidělení bez dvojího financování.
