
const cursuri = [
    {  id: 1,
       numeleCursului: "Manager transport marfă şi persoane",
       intrebari: "https://www.arr.ro/files/servicii/eliberare-atestate/pd_marfa.pdf" 
    },
   
   {  id: 2,        
      numeleCursului: " Consilier de sigurață",
      intrebari: "https://www.arr.ro/files/servicii/eliberare-atestate/intrebari_studii%20de%20caz_consilieri_de_siguranta.pdf"
    },
    {
       id: 3,
       numeleCursului: " Profesor de legislație atestare/ reînnoire",
       intrebari: "https://www.arr.ro/files/servicii/eliberare-atestate/aic_.pdf"
    },
    {
        id: 4,
        numeleCursului: "Instructor de conducere auto atestare/ extindere/ reînnoire",
        intrebari: "https://www.arr.ro/files/servicii/eliberare-atestate/aic_.pdf"
    },
  
    {
        id: 5,
        numeleCursului: "  Conducător auto mărfuri periculoase",
        intrebari: "https://www.arr.ro/files/servicii/eliberare-atestate/CPC-EN-M.pdf"
    },
    {
        id: 6,
        numeleCursului: "Conducător auto transporturi agabaritice",
        intrebari: "https://www.arr.ro/files/servicii/eliberare-atestate/adr.pdf"
    },
    {
        id: 7,
        numeleCursului:" Conducător auto pregătire continuă – CPC",
        intrebari: "https://www.arr.ro/files/servicii/eliberare-atestate/adr.pdf"
    },
    {
        id: 8,
        numeleCursului: "Manager TAXI/ închiriere",
        intrebari: "https://www.arr.ro/files/servicii/eliberare-atestate/taxi.pdf"
    },
    {
        id: 9,
        numeleCursului: "Conducător auto TAXI/ Viză TAXI",
        intrebari: "https://www.arr.ro/files/servicii/eliberare-atestate/taxi.pdf"
    },
    {
        id: 10,
        numeleCursului:"Conducător auto transport în regim de închiriere",
        intrebari: "https://www.arr.ro/files/servicii/eliberare-atestate/ca_inchiriere.pdf"
    },
    {
        id: 11,
        numeleCursului: " Conducător auto transport cu troleibuzul",
        intrebari: "https://www.arr.ro/files/servicii/eliberare-atestate/ca_troleibuz.pdf"
    },
    {
        id: 12,
        numeleCursului:"Conducător auto transport vehicule avariate",
        intrebari: "https://www.arr.ro/files/servicii/eliberare-atestate/ca_avariate.pdf"
    }
  
   ]
   
const cardContainer = document.querySelector('.card-container');

   window.addEventListener('DOMContentLoaded', function(){
    let displayCursuri = cursuri.map(function(item){
      return `<div class="boxes">
        <div class= "box-content">
          <h2>${item.numeleCursului}</h2>
          <button class="detalii" onclick="window.location.href='inscrieri.html';">Solicită detalii despre înscriere</button>
          <button class="intrebari" onclick="window.location.href='${item.intrebari}';">Modele de întrebări</button>
        </div>
     </div>`;
    });
    displayCursuri = displayCursuri.join('');
    cardContainer.innerHTML = displayCursuri;
   });
