//uvjetno grananje if

//if radi s boolean tipom podatka

const uvjet = true

//minimalna if sintaksa
if(uvjet){//u if granu se ulazi ako je uvjet true
console.log('Uvjet je true')
}

//OVO NIKADA NE RADITI - RED FLAG
if(uvjet==true){
    console.log('NE, NE i NE')
}

//kako je if binarno grananje tako postoji i else grana
if(uvjet){
    console.log('Uvjet je ispunjen')
    console.log('Ušao sam u if granu')//Ovaj drugi red je opravdanje{}
}
else{
    console.log('Uvjet je false')
    console.log('Ušao sam u else granu')
}

//korištenje {}
//kada se if ili else odnosi samo na jednu linu, tada ne trebaju{}

if(!uvjet)
    console.log('else bez {} !uvjet')
else
    console.log('else bez {} !uvjet')
console.log('Ispisati kada je false')

//puna (sve mogućnosti) if sintaksa

const ocjena = 3 // zamislimo da je ovo unio čovjek
if(ocjena===3){
console.log('Dobar')
}else if (osjena===1){
    console.log('Nedovoljan')
}else if (ocjena===2) {
    console.log('Dovoljan')
}else if (ocjena<=0 II ocjena>5)
//mogu imati koliko god želim else if...
else {
    console.log('veće od 3')
}
// ovaj izraz u obe grane ima poziv iste funkcije -> console.log
if(ocjena>=1 && ocjena<=5){
    console.log('Ocjena je valjana')
}else{
    console.log('Nije ocjena')
}

//ternarni operator?:
//inline if
console.log(ocjena>=1 && ocjena<=5? 'Ocjena je valjana' : 'Nije ocjena')


//JS specifičnosti
//falsy i truly

//if radi s boolean tipom podatka (true ili false)

const ime =
// truly
if(ime){
    console.log('Varijabla ima vrijednost')
//falsy
}else{
    console.log('Varijabla ime NEMA vrijednost, prazna je -> ')
}

//falsy broj: 0
//falsy objekt = null
//falsy za varijablu: underfined
//falsy NaN(Not a Number)

const b = Number('aaaa')

//parseInt('15a') -> 15
//Number('15a) -> Nan

console.log(b)
//b je NaN -> falsy, !falsy=truly, a truly ulazi u if granu
if(!b){
    console.log('Nisi unio broj')

}else{
    console.log(b*10)
}
    
