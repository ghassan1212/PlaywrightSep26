# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: AllureScreenshot.spec.js >> Allure screenshot test
- Location: tests\AllureScreenshot.spec.js:3:1

# Error details

```
Error: expect(page).toHaveTitle(expected) failed

Expected: "This title is intentionally wrong"
Received: "Google"
Timeout:  5000ms

Call log:
  - Expect "toHaveTitle" with timeout 5000ms
    14 × locator resolved to <html lang="nl" itemscope="" itemtype="http://schema.org/WebPage">…</html>
       - unexpected value "Google"

```

```yaml
- dialog "Voordat je verdergaat naar Google Zoeken":
  - img "Google"
  - 'button "Taal: ‪Nederlands‬"': nl
  - link "Inloggen"
  - heading "Voordat je verdergaat naar Google" [level=1]
  - text: We gebruiken
  - link "cookies":
    - /url: https://policies.google.com/technologies/cookies?utm_source=ucbs&hl=nl
  - text: "en gegevens, waaronder IP-adressen, voor het volgende:"
  - list:
    - listitem: Google-services leveren en onderhouden
    - listitem: Uitval bijhouden en bescherming bieden tegen spam, fraude en misbruik
    - listitem: Doelgroepbetrokkenheid en sitestatistieken meten om inzicht te krijgen in hoe onze services worden gebruikt en de kwaliteit van die services te verbeteren
  - text: "Als je Alles accepteren kiest, gebruiken we cookies en gegevens, waaronder IP-adressen, ook voor het volgende:"
  - list:
    - listitem: Nieuwe services ontwikkelen en verbeteren
    - listitem: Advertenties plaatsen en de effectiviteit ervan meten
    - listitem: Gepersonaliseerde content tonen (afhankelijk van je instellingen)
    - listitem: Gepersonaliseerde advertenties tonen (afhankelijk van je instellingen)
  - text: Als je Alles afwijzen kiest, gebruiken we cookies of IP-adressen niet voor deze aanvullende doeleinden. Niet-gepersonaliseerde content wordt beïnvloed door factoren zoals de content die je op dat moment bekijkt, activiteit in je actieve zoeksessie en je locatie. Niet-gepersonaliseerde advertenties worden beïnvloed door de content die je op dat moment bekijkt en je algemene locatie. Gepersonaliseerde content en advertenties kunnen ook relevantere resultaten, aanbevelingen en op jou toegespitste advertenties omvatten die zijn gebaseerd op eerdere activiteit van deze browser, zoals uitgevoerde Google-zoekopdrachten. We gebruiken cookies en gegevens ook om te zorgen dat de functionaliteit geschikt is voor je leeftijd, als dit relevant is. Selecteer Meer opties om meer informatie te bekijken, waaronder over hoe je je privacyinstellingen beheert. Je kunt ook altijd naar g.co/privacytools gaan.
  - button "Alles afwijzen"
  - button "Alles accepteren"
  - link "Meer opties voor personalisatie-instellingen en cookies": Meer opties
  - link "Privacy":
    - /url: https://policies.google.com/privacy?hl=nl&fg=1&utm_source=ucbs
  - link "Voorwaarden":
    - /url: https://policies.google.com/terms?hl=nl&fg=1&utm_source=ucbs
```

# Test source

```ts
  1  | const { test, expect } = require('@playwright/test');
  2  | 
  3  | test('Allure screenshot test', async ({ page }, testInfo) => {
  4  |     await page.goto('https://www.google.com');
  5  | 
  6  |     try {
> 7  |         await expect(page).toHaveTitle('This title is intentionally wrong');
     |                            ^ Error: expect(page).toHaveTitle(expected) failed
  8  |     } catch (error) {
  9  | 
  10 |         const screenshot = await page.screenshot();
  11 | 
  12 |         await testInfo.attach('Failure Screenshot', {
  13 |             body: screenshot,
  14 |             contentType: 'image/png'
  15 |         });
  16 | 
  17 |         throw error;
  18 |     }
  19 | });
```