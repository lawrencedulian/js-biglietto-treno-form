// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

const userNameInput = document.getElementById("user-name");
const userKmInput = document.getElementById("user-km");
const userAgeInput = document.getElementById("user-age");
const submitBtn = document.getElementById("submit");

// OUTPUT ELEMENTS
const showPrice = document.querySelector("p");

submitBtn.addEventListener("click", function () {
    const userName = userNameInput.value;
    console.log(userName);
    const userKm = userKmInput.value;
    console.log(userKm);
    const userAge = userAgeInput.value;
    console.log(userAge);

   

    // PROCESSING DATA
    // CALCULATE THE TOTAL FARE FOR THE TRIP
    const fareTicket = 0.21;
    let amountTicket = fareTicket * userKm;
    console.log(amountTicket, typeof(amountTicket)); //ORIGINAL PRICE
    let discountFare = amountTicket;
    // IF THE AGE IS BELOW 18 THEN A 20% DISCOUNT WILL BE APPLIED 
    // OUTPUT MESSAGE: YOUR DISCOUNT FARE TICKET AMOUNT IS:
    // IF THE AGE IS OVER 65 THEN A 40% DISCOUNT WILL BE APPLIED
    // OUTPUT MESSAGE: YOUR DISCOUNT FARE TICKET AMOUNT IS:
    if (userAge === "minorenne") {
        let discountMinor = (amountTicket * 20) / 100;
        discountFare = amountTicket - discountMinor;
    } else if (userAge === "over65") {
        let discountOver = (amountTicket * 40) / 100;
        discountFare = amountTicket - discountOver;
    } 

    discountFare = discountFare.toFixed(2);
    console.log(discountFare);

    // OUTPUT
    showPrice.innerHTML = `Ciao! ${userName} il prezzo del biglietto è di ${discountFare}`;
    // CLEAN UP THE FIELDS
    userNameInput.value = "";
    userKmInput.value = "";
    userAgeInput.value = "";


    
})

