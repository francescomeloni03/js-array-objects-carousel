
// Array di oggetti

const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];


// Popolare il carosello dinamicamente

const boxLeft = document.getElementById("boxLeft");
const boxInterno = document.getElementById("boxInterno");


images.forEach((element, index) => {
    boxInterno.innerHTML += `<img src="./${element.image}" alt="">`

     if ( index == 0){
        boxLeft.innerHTML += `<div class="imgLeft"><img src="./${element.image}" alt=""><div class="biografia"> <h2>${element.title}</h2><h3>${element.text}<h3/></div></div>`
     } 
     else {
        boxLeft.innerHTML += `<div class="imgLeft d-None"> <img src="./${element.image}" alt=""> <div class="biografia"> <h2>${element.title}</h2><h3>${element.text}<h3/></div></div>`
    } 
     }
    

)




let btnIndietro = document.getElementById("indietro");
let btnAvanti = document.getElementById("avanti");
let scrollImgEM = document.getElementsByClassName("imgLeft");





let pointScroll = 0;

// Click sul button per scrollare indietro

btnIndietro.addEventListener("click", function(){

    if(pointScroll>0) {
        for (let c = 0; c < scrollImgEM.length; c++) {
                const scrollImg = scrollImgEM[c];
                // console.log(pointScroll);
      

            if(c == pointScroll-1 ) {
                scrollImg.classList.remove("d-None");
            } else {
                scrollImg.classList.add("d-None");
            }
        }
        
        pointScroll--;
    } else {
        let ultimaScrollImg = scrollImgEM [images.length-1]
        let primaScrollImg =  scrollImgEM [0]
        primaScrollImg.classList.add("d-None");
        ultimaScrollImg.classList.remove("d-None");
        pointScroll = images.length-1
    }

});


// Click sul button per scrollare avanti


btnAvanti.addEventListener("click", function(){

    if(pointScroll < images.length-1) {
        for (let c = 0; c < images.length; c++) {
            const scrollImg = scrollImgEM[c];
            // console.log(pointScroll);
     
            if(c == pointScroll+1 ) {
                scrollImg.classList.remove("d-None");
            } else {
                scrollImg.classList.add("d-None");
            }
        }
        
        pointScroll++;

    } else {
        let ultimaScrollImg = scrollImgEM [images.length-1]
        ultimaScrollImg.classList.add("d-None");
        let primaScrollImg =  scrollImgEM [0]
        primaScrollImg.classList.remove("d-None");
        pointScroll = 0;
    }
});












