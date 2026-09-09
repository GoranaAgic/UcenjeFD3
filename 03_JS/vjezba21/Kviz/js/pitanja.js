const skupPitanja = [
    {
        pitanje: 'Kojom ključnom riječi definiramo varijablu čiju vrijednost možemo mijenjati?',
        tocno: 'let',
        odgovori: ['const', 'let', 'function']
    },
    {
        pitanje: 'Kojom ključnom riječi definiramo konstantu?',
        tocno: 'const',
        odgovori: ['let', 'const', 'var']
    },
    {
        pitanje: 'Koji je prvi index elementa u nizu?',
        tocno: '0',
        odgovori: ['1', '0', '-1']
    },
    {
        pitanje: 'Kako saznajemo broj elemenata u nizu?',
        tocno: 'length',
        odgovori: ['size', 'length', 'count']
    },
    {
        pitanje: 'Koji operator koristimo za zbrajanje?',
        tocno: '+',
        odgovori: ['+', '-', '*']
    },
    {
        pitanje: 'Koji operator koristimo za oduzimanje?',
        tocno: '-',
        odgovori: ['+', '-', '/']
    },
    {
        pitanje: 'Koji operator koristimo za množenje?',
        tocno: '*',
        odgovori: ['+', '*', '%']
    },
    {
        pitanje: 'Koji operator koristimo za dijeljenje?',
        tocno: '/',
        odgovori: ['/', '*', '-']
    },
    {
        pitanje: 'Koji operator daje ostatak dijeljenja?',
        tocno: '%',
        odgovori: ['/', '%', '*']
    },
    {
        pitanje: 'Koji operator znači "jednako po vrijednosti i tipu"?',
        tocno: '===',
        odgovori: ['=', '==', '===']
    },
    {
        pitanje: 'Koji operator koristimo za dodjelu vrijednosti?',
        tocno: '=',
        odgovori: ['=', '==', '===']
    },
    {
        pitanje: 'Koji operator znači "nije jednako"?',
        tocno: '!=',
        odgovori: ['=', '!=', '==']
    },
    {
        pitanje: 'Koji operator znači "veće od"?',
        tocno: '>',
        odgovori: ['<', '>', '=']
    },
    {
        pitanje: 'Koji operator znači "manje od"?',
        tocno: '<',
        odgovori: ['>', '<', '==']
    },
    {
        pitanje: 'Koji operator znači "veće ili jednako"?',
        tocno: '>=',
        odgovori: ['=>', '>=', '=<']
    },
    {
        pitanje: 'Koji operator znači "manje ili jednako"?',
        tocno: '<=',
        odgovori: ['=<', '<=', '=>']
    },
    {
        pitanje: 'Koji operator koristimo za logičko I (AND)?',
        tocno: '&&',
        odgovori: ['||', '&&', '!']
    },
    {
        pitanje: 'Koji operator koristimo za logičko ILI (OR)?',
        tocno: '||',
        odgovori: ['&&', '||', '!']
    },
    {
        pitanje: 'Koji operator koristimo za logičko NE (NOT)?',
        tocno: '!',
        odgovori: ['!', '&&', '||']
    },
    {
        pitanje: 'Kako zapisujemo komentar u jednom retku?',
        tocno: '//',
        odgovori: ['//', '##', '<!-- -->']
    },
    {
        pitanje: 'Kako ispisujemo tekst u konzolu?',
        tocno: 'console.log()',
        odgovori: ['print()', 'console.log()', 'write()']
    },
    {
        pitanje: 'Kako se zove JavaScript objekt za rad s konzolom?',
        tocno: 'console',
        odgovori: ['screen', 'console', 'display']
    },
    {
        pitanje: 'Koji tip podatka predstavlja tekst?',
        tocno: 'string',
        odgovori: ['number', 'string', 'boolean']
    },
    {
        pitanje: 'Koji tip podatka predstavlja broj?',
        tocno: 'number',
        odgovori: ['string', 'number', 'text']
    },
    {
        pitanje: 'Koji tip podatka može imati vrijednost true ili false?',
        tocno: 'boolean',
        odgovori: ['string', 'number', 'boolean']
    },
    {
        pitanje: 'Koja vrijednost predstavlja istinu?',
        tocno: 'true',
        odgovori: ['true', 'false', 'null']
    },
    {
        pitanje: 'Koja vrijednost predstavlja neistinu?',
        tocno: 'false',
        odgovori: ['true', 'false', 'undefined']
    },
    {
        pitanje: 'Što predstavlja vrijednost null?',
        tocno: 'Praznu vrijednost',
        odgovori: ['Broj', 'Praznu vrijednost', 'Tekst']
    },
    {
        pitanje: 'Što predstavlja undefined?',
        tocno: 'Vrijednost nije definirana',
        odgovori: ['Vrijednost nije definirana', 'Broj nula', 'Tekst']
    },
    {
        pitanje: 'Kako pišemo tekst u JavaScriptu?',
        tocno: '\'Pozdrav\'',
        odgovori: ['Pozdrav', '\'Pozdrav\'', 'Pozdrav()']
    },
    {
        pitanje: 'Koje navodnike možemo koristiti za string?',
        tocno: 'Jednostruke ili dvostruke',
        odgovori: ['Samo jednostruke', 'Jednostruke ili dvostruke', 'Samo zagrade']
    },
    {
        pitanje: 'Kako stvaramo niz?',
        tocno: '[]',
        odgovori: ['{}', '[]', '()']
    },
    {
        pitanje: 'Kako stvaramo objekt?',
        tocno: '{}',
        odgovori: ['[]', '{}', '()']
    },
    {
        pitanje: 'Kako pristupamo prvom elementu niza niz?',
        tocno: 'niz[0]',
        odgovori: ['niz[1]', 'niz[0]', 'niz.first']
    },
    {
        pitanje: 'Kako pristupamo drugom elementu niza niz?',
        tocno: 'niz[1]',
        odgovori: ['niz[0]', 'niz[1]', 'niz[2]']
    },
    {
        pitanje: 'Koja metoda dodaje element na kraj niza?',
        tocno: 'push()',
        odgovori: ['pop()', 'push()', 'add()']
    },
    {
        pitanje: 'Koja metoda uklanja zadnji element niza?',
        tocno: 'pop()',
        odgovori: ['pop()', 'push()', 'remove()']
    },
    {
        pitanje: 'Koja metoda uklanja prvi element niza?',
        tocno: 'shift()',
        odgovori: ['shift()', 'pop()', 'first()']
    },
    {
        pitanje: 'Koja metoda dodaje element na početak niza?',
        tocno: 'unshift()',
        odgovori: ['push()', 'unshift()', 'start()']
    },
    {
        pitanje: 'Kako provjeravamo je li nešto niz?',
        tocno: 'Array.isArray()',
        odgovori: ['Array.isArray()', 'Array.check()', 'isArray[]']
    },
    {
        pitanje: 'Kako pretvaramo tekst u velika slova?',
        tocno: 'toUpperCase()',
        odgovori: ['toLowerCase()', 'toUpperCase()', 'upper()']
    },
    {
        pitanje: 'Kako pretvaramo tekst u mala slova?',
        tocno: 'toLowerCase()',
        odgovori: ['toLowerCase()', 'toUpperCase()', 'lower()']
    },
    {
        pitanje: 'Kako saznajemo duljinu stringa?',
        tocno: 'length',
        odgovori: ['size', 'length', 'count']
    },
    {
        pitanje: 'Kako spajamo dva stringa pomoću operatora?',
        tocno: '+',
        odgovori: ['+', '&', '*']
    },
    {
        pitanje: 'Što će ispisati console.log(2 + 3)?',
        tocno: '5',
        odgovori: ['23', '5', '6']
    },
    {
        pitanje: 'Što će ispisati console.log(10 - 4)?',
        tocno: '6',
        odgovori: ['14', '6', '4']
    },
    {
        pitanje: 'Što će ispisati console.log(3 * 4)?',
        tocno: '12',
        odgovori: ['7', '12', '1']
    },
    {
        pitanje: 'Što će ispisati console.log(10 / 2)?',
        tocno: '5',
        odgovori: ['5', '8', '20']
    },
    {
        pitanje: 'Što je rezultat 10 % 3?',
        tocno: '1',
        odgovori: ['0', '1', '3']
    },
    {
        pitanje: 'Što je rezultat 5 + 5?',
        tocno: '10',
        odgovori: ['10', '55', '0']
    },
    {
        pitanje: 'Što je rezultat 10 * 2?',
        tocno: '20',
        odgovori: ['12', '20', '5']
    },
    {
        pitanje: 'Što je rezultat 20 / 4?',
        tocno: '5',
        odgovori: ['4', '5', '6']
    },
    {
        pitanje: 'Kako povećavamo broj za 1?',
        tocno: '++',
        odgovori: ['--', '++', '+=0']
    },
    {
        pitanje: 'Kako smanjujemo broj za 1?',
        tocno: '--',
        odgovori: ['++', '--', '+=1']
    },
    {
        pitanje: 'Kako pišemo uvjetnu naredbu?',
        tocno: 'if',
        odgovori: ['for', 'if', 'while']
    },
    {
        pitanje: 'Koja naredba se koristi ako uvjet nije ispunjen?',
        tocno: 'else',
        odgovori: ['then', 'else', 'otherwise']
    },
    {
        pitanje: 'Kako izgleda osnovni if uvjet?',
        tocno: 'if (x > 5)',
        odgovori: ['if x > 5', 'if (x > 5)', 'if [x > 5]']
    },
    {
        pitanje: 'Koja se naredba koristi za više mogućih slučajeva?',
        tocno: 'switch',
        odgovori: ['switch', 'loop', 'select']
    },
    {
        pitanje: 'Kako se zove slučaj unutar switch naredbe?',
        tocno: 'case',
        odgovori: ['case', 'option', 'choice']
    },
    {
        pitanje: 'Kako se zove zadani slučaj u switch naredbi?',
        tocno: 'default',
        odgovori: ['else', 'default', 'standard']
    },
    {
        pitanje: 'Što radi naredba break?',
        tocno: 'Prekida petlju ili switch',
        odgovori: ['Pokreće petlju', 'Prekida petlju ili switch', 'Ponavlja kod']
    },
    {
        pitanje: 'Koja petlja se često koristi kada znamo broj ponavljanja?',
        tocno: 'for',
        odgovori: ['if', 'for', 'switch']
    },
    {
        pitanje: 'Koja petlja radi dok je uvjet istinit?',
        tocno: 'while',
        odgovori: ['while', 'switch', 'if']
    },
    {
        pitanje: 'Koja petlja se izvršava barem jednom?',
        tocno: 'do while',
        odgovori: ['for', 'while', 'do while']
    },
    {
        pitanje: 'Koja ključna riječ preskače trenutni krug petlje?',
        tocno: 'continue',
        odgovori: ['break', 'continue', 'skip']
    },
    {
        pitanje: 'Koja ključna riječ prekida petlju?',
        tocno: 'break',
        odgovori: ['stop', 'break', 'exit']
    },
    {
        pitanje: 'Kako definiramo funkciju?',
        tocno: 'function',
        odgovori: ['function', 'method', 'define']
    },
    {
        pitanje: 'Kako pozivamo funkciju pod nazivom pozdrav?',
        tocno: 'pozdrav()',
        odgovori: ['call pozdrav', 'pozdrav()', 'function pozdrav']
    },
    {
        pitanje: 'Gdje se pišu parametri funkcije?',
        tocno: 'U zagradama',
        odgovori: ['U uglatim zagradama', 'U zagradama', 'U navodnicima']
    },
    {
        pitanje: 'Koja ključna riječ vraća rezultat iz funkcije?',
        tocno: 'return',
        odgovori: ['back', 'return', 'result']
    },
    {
        pitanje: 'Može li funkcija primati parametre?',
        tocno: 'Da',
        odgovori: ['Da', 'Ne', 'Samo jedan']
    },
    {
        pitanje: 'Može li funkcija imati više parametara?',
        tocno: 'Da',
        odgovori: ['Da', 'Ne', 'Samo dva']
    },
    {
        pitanje: 'Kako definiramo arrow funkciju?',
        tocno: '=>',
        odgovori: ['->', '=>', '<=']
    },
    {
        pitanje: 'Koja metoda izvršava funkciju za svaki element niza?',
        tocno: 'forEach()',
        odgovori: ['forEach()', 'eachLoop()', 'loop()']
    },
    {
        pitanje: 'Koja metoda pronalazi element koji zadovoljava uvjet?',
        tocno: 'find()',
        odgovori: ['search()', 'find()', 'get()']
    },
    {
        pitanje: 'Koja metoda filtrira elemente niza?',
        tocno: 'filter()',
        odgovori: ['filter()', 'select()', 'findAll()']
    },
    {
        pitanje: 'Koja metoda stvara novi niz pomoću funkcije?',
        tocno: 'map()',
        odgovori: ['map()', 'newArray()', 'create()']
    },
    {
        pitanje: 'Kako pristupamo svojstvu objekta osoba koje se zove ime?',
        tocno: 'osoba.ime',
        odgovori: ['osoba->ime', 'osoba.ime', 'osoba[ime]']
    },
    {
        pitanje: 'Kako stvaramo svojstvo objekta?',
        tocno: 'ime: vrijednost',
        odgovori: ['ime = vrijednost', 'ime: vrijednost', 'ime -> vrijednost']
    },
    {
        pitanje: 'Koja vrijednost predstavlja broj 10?',
        tocno: '10',
        odgovori: ['"10"', '10', 'number 10']
    },
    {
        pitanje: 'Koji tip podatka je "Pozdrav"?',
        tocno: 'string',
        odgovori: ['number', 'string', 'boolean']
    },
    {
        pitanje: 'Koji tip podatka je 25?',
        tocno: 'number',
        odgovori: ['string', 'number', 'boolean']
    },
    {
        pitanje: 'Koji tip podatka je true?',
        tocno: 'boolean',
        odgovori: ['boolean', 'string', 'number']
    },
    {
        pitanje: 'Što je rezultat izraza !false?',
        tocno: 'true',
        odgovori: ['true', 'false', 'null']
    },
    {
        pitanje: 'Što je rezultat izraza !true?',
        tocno: 'false',
        odgovori: ['true', 'false', 'null']
    },
    {
        pitanje: 'Što znači &&?',
        tocno: 'I',
        odgovori: ['I', 'ILI', 'NE']
    },
    {
        pitanje: 'Što znači ||?',
        tocno: 'ILI',
        odgovori: ['I', 'ILI', 'NE']
    },
    {
        pitanje: 'Što znači !?',
        tocno: 'NE',
        odgovori: ['I', 'ILI', 'NE']
    },
    {
        pitanje: 'Kako provjeravamo tip podatka?',
        tocno: 'typeof',
        odgovori: ['type()', 'typeof', 'getType()']
    },
    {
        pitanje: 'Što vraća typeof 5?',
        tocno: 'number',
        odgovori: ['string', 'number', 'boolean']
    },
    {
        pitanje: 'Što vraća typeof "Hello"?',
        tocno: 'string',
        odgovori: ['number', 'string', 'text']
    },
    {
        pitanje: 'Što vraća typeof true?',
        tocno: 'boolean',
        odgovori: ['boolean', 'true', 'number']
    },
    {
        pitanje: 'Kako pretvaramo string "5" u broj?',
        tocno: 'Number("5")',
        odgovori: ['String(5)', 'Number("5")', 'Boolean("5")']
    },
    {
        pitanje: 'Kako pretvaramo broj 5 u string?',
        tocno: 'String(5)',
        odgovori: ['Number(5)', 'String(5)', 'Text(5)']
    },
    {
        pitanje: 'Kako zaokružujemo broj na najbliži cijeli broj?',
        tocno: 'Math.round()',
        odgovori: ['Math.round()', 'Math.close()', 'Math.integer()']
    },
    {
        pitanje: 'Kako dobivamo veći cijeli broj?',
        tocno: 'Math.ceil()',
        odgovori: ['Math.floor()', 'Math.ceil()', 'Math.up()']
    },
    {
        pitanje: 'Kako dobivamo manji cijeli broj?',
        tocno: 'Math.floor()',
        odgovori: ['Math.floor()', 'Math.ceil()', 'Math.down()']
    },
    {
        pitanje: 'Kako dobivamo slučajan broj?',
        tocno: 'Math.random()',
        odgovori: ['Math.random()', 'Math.randomNumber()', 'Random()']
    },
    {
        pitanje: 'Koji objekt koristimo za matematičke operacije?',
        tocno: 'Math',
        odgovori: ['Math', 'Number', 'Calculate']
    },
    {
        pitanje: 'Kako pretvaramo string u mala slova?',
        tocno: 'toLowerCase()',
        odgovori: ['toLowerCase()', 'lower()', 'smallCase()']
    },
    {
        pitanje: 'Kako pretvaramo string u velika slova?',
        tocno: 'toUpperCase()',
        odgovori: ['upper()', 'toUpperCase()', 'bigCase()']
    },
    {
        pitanje: 'Kako uklanjamo razmake s početka i kraja stringa?',
        tocno: 'trim()',
        odgovori: ['trim()', 'removeSpaces()', 'clean()']
    },
    {
        pitanje: 'Kako pronalazimo dio teksta unutar stringa?',
        tocno: 'includes()',
        odgovori: ['contains()', 'includes()', 'findText()']
    },
    {
        pitanje: 'Što vraća "Hello".length?',
        tocno: '5',
        odgovori: ['4', '5', '6']
    },
    {
        pitanje: 'Što vraća [10, 20, 30].length?',
        tocno: '3',
        odgovori: ['2', '3', '30']
    },
    {
        pitanje: 'Koji je zadnji index niza [10, 20, 30]?',
        tocno: '2',
        odgovori: ['2', '3', '1']
    },
    {
        pitanje: 'Što vraća [10, 20, 30][0]?',
        tocno: '10',
        odgovori: ['10', '20', '0']
    },
    {
        pitanje: 'Što vraća [10, 20, 30][2]?',
        tocno: '30',
        odgovori: ['10', '20', '30']
    },
    {
        pitanje: 'Kako provjeravamo postoji li određeni element u nizu?',
        tocno: 'includes()',
        odgovori: ['has()', 'includes()', 'exists()']
    },
    {
        pitanje: 'Koja metoda spaja elemente niza u string?',
        tocno: 'join()',
        odgovori: ['join()', 'combine()', 'merge()']
    },
    {
        pitanje: 'Koja metoda obrće redoslijed elemenata niza?',
        tocno: 'reverse()',
        odgovori: ['reverse()', 'back()', 'turn()']
    },
    {
        pitanje: 'Koja metoda sortira elemente niza?',
        tocno: 'sort()',
        odgovori: ['sort()', 'order()', 'arrange()']
    },
    {
        pitanje: 'Kako pristupamo elementu objekta pomoću uglatih zagrada?',
        tocno: 'objekt["ime"]',
        odgovori: ['objekt("ime")', 'objekt["ime"]', 'objekt{ime}']
    },
    {
        pitanje: 'Koji simbol koristimo za blok koda?',
        tocno: '{}',
        odgovori: ['[]', '{}', '()']
    },
    {
        pitanje: 'Koji simbol koristimo za funkcijske zagrade?',
        tocno: '()',
        odgovori: ['[]', '{}', '()']
    },
    {
        pitanje: 'Koji simbol koristimo za niz?',
        tocno: '[]',
        odgovori: ['{}', '[]', '()']
    },
    {
        pitanje: 'Koji simbol koristimo za objekt?',
        tocno: '{}',
        odgovori: ['()', '{}', '[]']
    },
    {
        pitanje: 'Koja naredba zaustavlja izvršavanje funkcije i vraća rezultat?',
        tocno: 'return',
        odgovori: ['break', 'return', 'stop']
    },
    {
        pitanje: 'Može li const varijabla dobiti novu vrijednost?',
        tocno: 'Ne',
        odgovori: ['Da', 'Ne', 'Uvijek']
    },
    {
        pitanje: 'Može li let varijabla dobiti novu vrijednost?',
        tocno: 'Da',
        odgovori: ['Da', 'Ne', 'Samo jednom']
    },
    {
        pitanje: 'Koja ključna riječ označava konstantu?',
        tocno: 'const',
        odgovori: ['constant', 'const', 'fixed']
    },
    {
        pitanje: 'Koji je programski jezik JavaScript?',
        tocno: 'Programski jezik',
        odgovori: ['Operacijski sustav', 'Programski jezik', 'Baza podataka']
    },
    {
        pitanje: 'Gdje se JavaScript često izvršava u web pregledniku?',
        tocno: 'U pregledniku',
        odgovori: ['U tipkovnici', 'U pregledniku', 'U monitoru']
    },
    {
        pitanje: 'Koji HTML element se često koristi za povezivanje vanjske JavaScript datoteke?',
        tocno: '<script>',
        odgovori: ['<style>', '<script>', '<js>']
    },
    {
        pitanje: 'Koja ekstenzija se koristi za JavaScript datoteke?',
        tocno: '.js',
        odgovori: ['.java', '.js', '.javascript']
    },
    {
        pitanje: 'Kako nazivamo grešku u programu?',
        tocno: 'error',
        odgovori: ['error', 'success', 'correct']
    },
    {
        pitanje: 'Koja metoda ispisuje poruku u konzolu?',
        tocno: 'console.log()',
        odgovori: ['console.log()', 'console.print()', 'log.console()']
    }
];
