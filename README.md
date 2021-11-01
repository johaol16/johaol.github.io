# Skolprojekt: Vue CLI och PWA

**Krav:**

* Gör minst ett webbanrop, och visa information från en eller flera webbtjänster i webbapplikationen (Undvik CORS-problem och använd HTTPS, för applikationen ska fungera bra som publicerad; Visa åtminstone tio värden)
* Textinterpolering ({{ och }}) används
* Attributinterpolering (v-bind eller dess kortform) används
* Villkorlig rendering (v-if) används
* Listrendering (v-for) används
* Händelser (v-on eller dess kortform) används
* v-model (och värdet som matas in) används
* En Single Page Application, bestående av minst två sidor, ska skapas med Vue Router (Använd både router-link och router-view)
* Minst en .vue-komponent, som inte är App.vue eller en Vue Router-sida/destination, skapas
* Minst en komponent ska ta emot, och använda, minst en prop (via props-nyckeln)
* Minst en Bootstrap-Vue-komponent används
* Webbapplikationen ska nyttja ett Web App Manifest, som ska vara genererad via Vue CLI:s PWA-plugin – webbapplikationen ska, via detta manifest, ha ett eget appnamn, en egen temafärg, och egna ikoner
* Webbapplikationen ska fungera offline, och all information, inklusive informationen som hämtats med GET-anropen, måste gå att se även när användaren är offline – använd en Service Worker för detta, som är genererad via Vue CLI:s PWA-plugin
