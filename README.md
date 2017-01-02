# ex3-Astrid-Thijs

In de Rekenmachine.html bevindt zich de opbouw van de rekenmachine, knoppen met hun achterliggende functie (+, -, *, /, ...).
In de Rekenmachine.css bevindt zich de stijl van de rekenmachine, de kleuren komen ongeveer overeen met de kleurencode van Thomas More.

In de Main.js kunnen we de html pagina koppellen aan een webpagina:
1st gaan we express installeren via de terminal, het is een Framework die gebruikt wordt voor het maken van een web-applicatie.
Daarna installeren we bodyParser, deze regelt de informatie uitwisseling tussen server en cliënt.
Bodyparser.urlencoded zorgt ervoor dat de URL kan worden omgezet met behulp van de ASCII code.

In de eerste app.get gaan we de rekenmachine opvragen van de html code.
Daarna gaan we via post een berekening toevoegen met behulp van de rekenmachine. 
  Via de ingebouwde functie eval() gaan we het resultaat berekenen in een webpagina.
  Door de push functie gaan kunnen we steeds een berekening toevoegen.
In de tweede app.get gaan we alle berekeningen bijhouden, deze kan je terugvinden op: localhost(1234)/objects.

de app.listen functie geeft je de url weer waar de code op draait, nl: localhost(1234).


Ik heb alles zelf ingetypt en begrijp het ook, heb wel hulp gevonden bij Jelle Van Loock en veel documentatie op internet. 
Enkele sites die me opweg hielpen: 
  https://www.npmjs.com/package/body-parser-json,
  http://blog.modulus.io/nodejs-and-express-create-rest-api, 
  http://codereview.stackexchange.com/questions/6963/simple-four-function-calculator, 
  http://www.w3schools.com/tags/ref_urlencode.asp.

Astrid Thijs.
