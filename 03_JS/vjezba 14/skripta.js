 document.write('Hello')



 const korisnici=[
   {
    id: 1,
    ime: 'Ana',
    prezime: 'Kartek',
    godine: '25',
    admin: false
   },
    {
    id: 2,
    ime: 'Karlo',
    prezime: 'Totig',
    godine: '29',
    admin: false
   },
    {
    id: 3,
    ime: 'Marko',
    prezime: 'Ćutoć',
    godine: '45',
    admin: false
   },
    {
    id: 4,
    ime: 'Nikola',
    prezime: 'Ćutić',
    godine: '49',
    admin: true
   },
   {
    id: 5,
    ime: 'Žana',
    prezime: 'Đitko',
    godine: '18',
    admin: false
   }

 ]

 console.table(korisnici)
 for(let i =0; i<korisnici.length; i++){
    console.log(korisnici [i].ime)
 }



 console.log('**********************')

 korisnici.forEach(korisnik => console.log(korisnik.ime))

 console.log('*********************')


 korisnici.forEach(o => console.log(`${o.ime} ${o.prezime}`))

 console.log('*************************')

 korisnici.forEach(o => {
    let oslovi = 'Poštovan'
    if(o.ime.endsWith('')){
        oslovi += 'a gospođo'
    }else{
        oslovi += 'i gospodine'
    }
    console.log(`${oslovi} ${o.ime} ${o.prezime}`)
 })

console.log('***********************')










const samoImena = korisnici.map ( o => o.ime)

console.table(samoImena)

korisnici.map(o => o.ime).forEach(ime => console.log(ime))



const ip = korisnici.map(o=> o.ime + '' +o.prezime)



console.log('*************************')


const maliNiz = korisnici.map(({id, ime, prezime}) => ({šifra:id, osoba: ime + '' + prezime}))

console.table(maliNiz)




console.log(korisnici.find(o => o.id === 13)?.ime ?? '')


console.log(korisnici.find(o => o.ime === 'Ana' && o.prezime === 'Kartek').id)

//find index()

console.log(maliNiz.findIndex(o => o.sifra === 100)) // -1 znači da ne postoji

// filter()

console.table(korisnici.filter(o => o.godine > 40))

// reduce()

console.log(korisnici.reduce((suma, o) => suma + o.godine, 0)) // 0 je početna vrijednost sujme

// some()
console.log(korisnici.some(o => o.admin) ? 'Ima admina' : 'Nema admina')

// every()
console.log(korisnici.every(o => o.godine >=18 )? 'Svi su punoljetni': 'Nisu punoljetni')

