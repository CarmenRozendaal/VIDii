# Procesverslag
Markdown is een simpele manier om HTML te schrijven.  
Markdown cheat cheet: [Hulp bij het schrijven van Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

Nb. De standaardstructuur en de spartaanse opmaak van de README.md zijn helemaal prima. Het gaat om de inhoud van je procesverslag. Besteedt de tijd voor pracht en praal aan je website.

Nb. Door *open* toe te voegen aan een *details* element kun je deze standaard open zetten. Fijn om dat steeds voor de relevante stuk(ken) te doen.





## Jij

### Ontwerper:
Carmen Rozendaal, 500823349

#### Je startniveau:
Ik heb al wel ervaring met code, maar dit is niet de richting waarin ik me hebt verdiept de afgelopen jaren. Dat heeft ervoor gezorgd dat de kennis erover best is weggezakt. Daarom heb ik als beginpositie gekozen voor BLAUW maar dit zou ook ROOD kunnen worden naarmate ik er meer mee bezig ben.





# Je plan

<details open>
  <summary>Ik heb de opdracht 'Tijdlijn' gekozen, hierbij ga ik me bezighouden met het karakter Yoshi. Ik heb vroeger zelf veel Mario gespeeld en ik vond Yoshi eigenlijk altijd het leukste karakter. Hij is schattig en grappig en bestaat ook al sinds het het 1e spel van Mario. Dit was in (1990). Ook zijn er veel varianten van Yoshi gemaakt.

  Het idee voor de interface is dat je als gebruiker zelf door de geschiedenis van Yoshi heen gaat. Je gaat hier doorheen door te springen / lopen op de blokken. Bij elke groene pijp die je tegenkomt, kom je in een ander tijdperk, en veranderd Yoshi hiernaar. Bij deze Yoshi komt vervolgens een card met daarin het logo van het betreffende spel en een 'info-icoon'. Wanneer je hierop klikt, flipt deze en zit hierachter meer informatie verstopt.
  </summary>

  ### De eerste versie/schets:
  <img src="readme-images/Interface-uitwerking1.jpg" width="375px" alt="eerste versie/schets">
  <img src="readme-images/MIRO BOARD_19:4.png" width="375px" alt="Miro board 19/4">


  ### Je ambitie: 
  Aan deze technieken/punten wil ik werken:
  - html/css/js weer onder de knie krijgen.
  - Vloeiende keyframe animaties kunnen maken.
  - Een concept kunnen omzetten naar een werkende interface.
 
</details>




## Voortgang/Feedback 1

<details>
  <summary>Mijn bevindingen + oplossing </summary>

  ### Bevinding 1:
  Twijfel over keuze voor concols in interface.

  #### oplossing:
  Ik heb nagedacht over de mogelijke concols om Yoshi te laten bewegen. Ik ben hier nog niet over uit. De 'Nintendo-toetsen' passen beter bij het thema, maar zijn lastiger te realiseren aangezien ik hier veel Javascript voor moet gebruiken. Het Click & Swipe is gemakkelijker, maar daarintegen weer minder passend. Ik moet daarom kijken betreft de tijd wat het meest haalbaar is voor mij. 

  <img src="readme-images/Consols.jpg" width="375px" alt="eerste versie/schets consols idee">


  ### Bevinding 2:
  Feedback van Yentle op mijn ontwerp.

  #### oplossing:
  De feedback was nuttig. Ik heb gekeken naar opties om de interface wat speelser te maken. Idee: De informatie weergeven als een card. Wanneer je hierop klikt opent deze en wanneer je deze card sluit, veranderd deze naar een extra leven of ga je een level omhoog. Hier moet ik nog even de keuze voor maken. 

  <img src="readme-images/IdeeSchets.jpg" width="375px" alt="eerste schets">
  <img src="readme-images/Feedback1.png" width="375px" alt="feedback op eerste schets">
  

  ### Bevinding 3:
  Start html/css ging moeizaam.

  #### oplossing:
  Ik ging aan de slag met het realiseren van mijn gemaakte ontwerp, maar kwam er al snel achter dat ik het erg lastig vond om html/css te schrijven. Ik heb daarom hulp gevraagt aan klasgenoten en aan de docent. Ook heb ik gebruik gemaakt van de aangereikte online tools en de opdrachten op dlo. Uiteindelijk is er een beginnetje ontstaan. 

  <img src="readme-images/progres1.jpg" width="375px" alt="start ontwerp html/css">

</details>


## Voortgang/Feedback 2

<details>
  <summary>Mijn bevindingen + oplossing</summary>
  
  ### Bevinding 1:
  Github toont afbeeldingen niet in de browser, terwijl vanuit de map openen dit wel goed gaat.

  #### oplossing:
  De images bleken niet goed gekoppeld, zo navigeerde ik binnen de scr naar de folder die op mijn computer stond. Maar dit moest de map die ook op Github stond zijn. Mijn code was "/images/afbeelding.png" terwijl het "images/afbeelding.png" moest zijn.

  <img src="readme-images/schermProgres2.png" width="375px" alt="screenshot progress ontwerp">
  <img src="readme-images/schermGithub.png" width="375px" alt="screenshot Github">


  ### Bevinding 2:
  Github raakt overbelast wanneer je teveel achter elkaar upload.

  #### oplossing:
  Ik had mijn nieuwe ontwerp geupload op Github, maar deze bleef de oude variant van mijn ontwerp tonen. Het bleek dat github deze opsloeg in de cash-geheugen als 'backup'. Door deze af en toe te wissen, toonde hij wel steeds de nieuwste versie.
  
  ### Bevinding 3:
  Achtergrond afbeelding niet leesbaar of viel over content heen.

  #### oplossing:
  In mijn html had ik verwezen naar een lege src, dit is waarom hij dit kader weergaf. Ook had ik de achtergrond in de header gezet terwijl deze in de body moest (dan valt die wel achter de content). Dus hier heb ik vervolgens mijn 'algemene achtergrond' ingezet en een ID aan gegeven'. Daarna heb ik met javascript het zo gemaakt dat wanneer je op een groene pijp klikt, de source veranderd naar de betreffende achtergrond. 

  <img src="readme-images/schermProgres3.png" width="375px" alt="scherm fout, image over content">
  <img src="readme-images/schermProgres4.png" width="375px" alt="scherm image fout">

</details>


## Voortgang/Feedback 3

<details>
  <summary>Mijn bevindingen + oplossing</summary>
  
  ### Bevinding 1:
  Ik had alleen on-click met de muis en hover-elementen in mijn ontwerp staan.

  #### oplossing:
  Uiteindelijk ervoor gezorgt dat alle groene pijpen en knoppen BUTTONS werden. Hierdoor kwam er een focusstate en kun je nu door mijn interface navigeren met de TAB-toets en klikken via de ENTER-Toets.

  <img src="readme-images/schermProgres5.png" width="375px" alt="navigatie via tab">
  <img src="readme-images/schermProgres6.png" width="375px" alt="focusstate button">


  ### Bevinding 2:
  Site moest worden gerefreshed wanneer je aan het eind van de tijdlijn bent.

  #### oplossing:
  Wanneer je alle yoshi's hebt bekeken en je als het ware weer opnieuwe wilt beginnen, moest je oorspronkelijk de site refreshen in de browser. Maar ik vond het niet mooi en praktisch wanneer de gebruiker dit zelf moest doen. Ik heb daarom aan het eind van mijn ontwerp een refreshbutton gemaakt. Ditt is visueel aantrekkelijker en maakt het ook toegankelijker omdat de gebruiker snapt wat er gebeurt wanneer hij daarop klikt.

  <img src="readme-images/schermProgres7.png" width="375px" alt="reloadbutton">


  ### Bevinding 3:
  Het maken van een text-array en een loop in Javascript leek simpeler dan gedacht.

  #### oplossing:
  Aangezien alle interactie doormiddel van de groene pijpen ging, wilde ik een nieuwe interactie toevoegen. Ik had daarom bedacht om de extra informatie over elk tijdperk in een kader te plaatsen waar je doorheen kon navigeren. Dit zou met een array en een loop moeten lukken. 1 array voor de titel die veranderd en ook een array voor de tekst eronder. Deze zouden beide worden aangeroepen door de button met het pijltje. Dit was nog vrij lastig. IK heb uiteindelijk hulp gevraagt aan Sam, Younes en Rowin. We waren dichtbij maar steeds werkte het op 1 stukje niet: De volgorde. Hij sloeg een getal over of hij klikte eindeloos door ipv te stoppen bij de laatste.
  Uiteindelijk is het gelukt. Zo bleek het te liggen aan de startwaarde van de loop, deze moest op 0 staan. Vervolgens hebben we in de function aangegeven dat hij steeds 1 verder moest (dit was met i++). Tot slot moesten we een if toevoegen aan de funtion. DIt ging over dat als het eind van de array bereikt was, hij terug moest gaan naar 0. Het was ff ploegen maar we waren trots dat het gelukt was.

  <img src="readme-images/schermProgres8.png" width="375px" alt="array & loop in ontwerp">
  <img src="readme-images/schermProgres9.png" width="375px" alt="weergave Javascript">

</details>


## Reflectie

<details>
  <summary>Mijn eindresultaat & persoonlijke ontwikkeling</summary>

  ### Je uitkomst - karakteristiek screenshot(s):
  <img src="readme-images/Eindresultaat1.png" width="375px" alt="final ontwerp beginscherm">
  <img src="readme-images/Eindresultaat2.png" width="375px" alt="final ontwerp scherm1 volledig">
  <img src="readme-images/Eindresultaat3.png" width="375px" alt="final ontwerp scherm met animatie">
  <img src="readme-images/Eindresultaat4.png" width="375px" alt="final ontwerp scherm met interactie">
  <img src="readme-images/Eindresultaat5.png" width="375px" alt="final ontwerp eindscherm">


  ### Dit ging goed/Heb ik geleerd: 
  Ik ben tevreden met het eindresultaat, dit omdat het ontwerp overeen komt met het idee dat ik aan het begin van dit vak had. Ik heb veel geleerd over html/css/javascript, zo snap ik nu weer meer hoe het werkt en kan ik het ook uitleggen/onderbouwen. Hier ben ik blij mee, want dit was namelijk behoorlijk weggezakt de afgelopen jaren. Ik heb geleerd dat je geduld moet hebben met code en alert moet zijn wanneer je dit schrijft, een foutje zit namelijk in een klein hoekje en kan ervoor zorgen dat je hele code uiteen valt. Ook heb ik geleerd dat je er op tijd mee moet beginnen, in een klein stukje code zit meer tijd dan gedacht. Wat goed ging was het maken van de 'losse elementen', veel heb ik zelf getekend maar ook heb ik photoshop gebruikt. Tot slot ging het goed om de elementen te positioneren en ben ik trots op de gemaakte animaties. Deze maken van mijn interface erg speels, wat goed past bij het ontwerp. Wat ook een leuke toevoeging is, is dat ondanks dat mijn ontwerp niet helemaal responsive is, hij zelfs op mijn telefoon goed te bekijken is.  

  <img src="readme-images/schermmobiel1.png" width="375px" alt="begingscherm mobiel">
  <img src="readme-images/schermmobiel2.png" width="375px" alt="scherm 2 mobiel">
  <img src="readme-images/schermmobiel3.png" width="375px" alt="animatie op mobiel">
  <img src="readme-images/schermmobiel4.png" width="375px" alt="eindscherm met animatie op mobiel">


  ### Dit was lastig/Is niet gelukt:
  Waar ik moeite mee had, was dat wanneer je op de groene pijpen klikte, dat de Yoshi bleef staan. Deze veranderde wel wanneer je op een andere pijp klikte, maar hij ging niet weg. Dit heb ik geprobeerd via Javascript met het toggle-effect op te lossen maar dit lukte me niet. Uiteindelijk is het toch niet zo erg dat het niet werkt, want nu kan je wel in de tijdlijn de verschillende yoshi's met elkaar vergelijken doordat je ze tegelijk ziet. Wat er verder niet helemaal lukte, was de animatie van de vlag. Deze animatie start wel maar de vlag blijft niet op het hoogste punt staan, hij valt naar beneden. Ik heb in de keyframes dit proberen op te lossen door transformstate van 100% op dat punt te zetten, maar toch bleef die naar beneden zakken. Ik ben er nog niet achter waarom dit niet heeft gewerkt. 

  Wat ik zou doen wanneer ik meer tijd had? Mij wat meer verdiepen in de code met oog op of ik deze misschien functioneler / handiger zou kunnen schrijven.

  <img src="readme-images/scherm_lastig.png" width="375px" alt="yoshi's blijven staan">
  <img src="readme-images/scherm_lastig2.png" width="375px" alt="vlag valt naar beneden">

</details>


## Bronnenlijst

<details open>
<summary>continu bijhouden terwijl je werkt</summary>

1. bron 1: https://nl.wikipedia.org/wiki/Yoshi (informatie)
2. bron 2: https://www.bol.com/nl/nl/p/new-super-mario-bros/1004004004316136/#product_specifications (informatie)
3. bron 3: https://dlo.mijnhva.nl/d2l/le/content/324125/Home (tools)

</details>