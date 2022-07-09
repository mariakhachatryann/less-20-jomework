"use strict";
// 1․ ստեղծում եք ցանկացած թեմատիկային փոքր կոնսոլային հավելված, 
// որը չպետք ա կախում ունենա բրաուզերից

// 2․ ձեր կոնսոլային հավելվածի մեջ օգտագործում եք հետևյալ մեթոդները՝ 
// toUpperCase, toLowerCase, slice, trim, split, join, forEach

// 3. աշխատացնում եք console-ում 

// Հ․Գ․ ցանկալի ա կոնսոլում ֆունկցիա գրվի, արգումենտ փոխանցվի, 
// ու ըստ էդ արգումենտի կատարվեն ներքին մեխանիզմները :)



const details = {
  country : "",
  city: "",
  hotel: "",
  arrivingDetails: {},
  leavingDetails: {},
  ages: [],
  tourists: 0,
  children: 0,
  roomsForElders: 0,
  roomsForChildren: 0,
  prefferedDet: "",
  prefferedToVisit: [],
};


function getLocation(country, city){
    const low1 = country.toLowerCase().trim();
    details.country = low1[0].toUpperCase() + low1.slice(1, low1.length);

    const low2 = city.toLowerCase().trim();
    details.city = low2[0].toUpperCase() + low2.slice(1, low2.length);
}


function getHotel(hotel){
  const low = hotel.toLowerCase().trim();
  details.hotel = low[0].toUpperCase() + low.slice(1, low.length);
}

function arrivingDay(day, month, year){
    details.arrivingDetails.day = day;
    details.arrivingDetails.month = month;
    details.arrivingDetails.year = year;
}


function getCheckIn(hour) {
    if(hour > 0 && hour <= 24){
      details.arrivingDetails.checkIn = `${hour}:00`;
    }else{
      return `please type a valid hour for checkIn`;
    }
}

function leavingDay(day, month, year){
  details.leavingDetails.day = day;
  details.leavingDetails.month = month;
  details.leavingDetails.year = year;
}

function getCheckOut(hour){
    if(hour > 0 && hour <= 24){
      details.leavingDetails.checkOut = `${hour}:00`;
    }else{
      return `please type a valid hour for checkOut`;
    }
}


function pushAges(...arr){
  details.ages.push(...arr);
}


function peopleSort(){
    details.ages.forEach(function(age){
      if(age > 16){
        details.tourists += 1;
      }else{
        details.children += 1;
      }
    });
}


function roomsCount(){
    for(let i = 0; i < details.tourists; i++){
      if(details.tourists > 0){
      details.roomsForElders += 1;
    }
  }
    for(let i = 0; i < details.children; i++){
      if(details.children > 0){
      details.roomsForChildren += 1;
    }
  }
}


function prefferedDetails(requirement){
    details.prefferedDet = requirement.join(", ");
}


function visitPlaces(arr){
    details.prefferedToVisit = arr.split(", ", 20);
}


function run(){
    getLocation("   fRaNcE", "   paris   ");
    getHotel("lutetia");
    arrivingDay(10, "July", 2022);
    getCheckIn(10);
    leavingDay(25, "July", 2022);
    getCheckOut(14);
    pushAges(12, 25, 21, 43, 16, 17);
    peopleSort();
    roomsCount();
    prefferedDetails(["good security, excellent satff, tasty food"]);
    visitPlaces("Eiffel Tower, Louvre Museum, Notre-Dame de Paris, Arc de Triomphe. Sainte-Chapelle, Luxembourg Gardens");

    console.log(details);
}


run();


// customer's opinion after trip
const {country, city, hotel, arrivingDetails, leavingDetails, tourists, children, roomsForElders, roomsForChildren, prefferedDet, prefferedToVisit} = details;
console.log(`When i visited ${country}, ${city} I was very exited beacuse I have never been there before.
We wanted iconic and luxarry hotel so we chose ${hotel} hotel.
There were ${tourists} adults and ${children} children in our group.
We rented ${roomsForElders} rooms for adults and ${roomsForChildren} rooms for children beacuse the rooms were single.
The hotel contains ${prefferedDet}. We visited ${prefferedToVisit} and many more places.
We spent ${leavingDetails.day - arrivingDetails.day} days in ${city}. This trip was really unforgettable `);