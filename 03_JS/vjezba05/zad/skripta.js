const rezulat = document.getElementById('rezultat')

document.getElementById('izvedi').addEventListener('click',()=>{
    //ovaj kod će se izvoditi svaki puta kada korisnik klikne na
    // gumb Izvedi
    //resetirati ću rezultat
    rezultat.innerHTML=''


    const aString = document.getElementById('a').value 
    const bString = document.getElementById('b').value
    const cString = document.getElementById('c').value
    const dString = document.getElementById('d').value




    const zadatak = document.getElementById('zadatak').value
    if(zadatak==='1'){
const a = Number(aString)


if(!a){//ako nisi broj (ili si 0, NaN, null )
    rezultat.innerHTML='A nije broj'
    rezultat.style.color='red'
    return //prekida izvođenje click funkcije - short

}

const b = Number(bString)
if(!b){
    rezultat.innerHTML=B nije broj
    return
}

//ja kao programer sam ovdje 100% siguran da su a i b brojevi

rezultat.innerHTML = a > b ? a : b
rezultat.style.color='green'

//kraj 1. zadatka



}



if(zadatak==='2'){
    //početak 2. zadatka

    //kraj 2. zadatka
}

if (zadatak=== '3'){
    //početak 3. zadatka

    //kraj 3. zadatka
}
})
