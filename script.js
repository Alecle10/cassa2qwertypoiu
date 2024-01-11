function verificaPassword(event) {
  event.preventDefault(); // Impedisce il submit del form

  var userInserita = document.getElementById('user').value;
  var userCorretta = 'Alessandro';
  var passwordInserita = document.getElementById('password').value;
  var passwordCorretta = 'cassa2024';

  if (passwordInserita === passwordCorretta && userInserita === userCorretta) {
    document.getElementById('messaggio-errore').textContent = '';
    alert('Accesso consentito!');
    document.getElementById('over-accesso').style.display = 'none';
    document.getElementById('user').value = '';
    document.getElementById('password').value = '';
  } else {
    document.getElementById('messaggio-errore').textContent = 'Password errata o nome utente invalido. Riprova.';
  }
}

function utente() {
  document.getElementById('over-accesso').style.display = 'flex';
  document.getElementById('login-form').style.display = 'none';
  document.getElementById('profilo').style.display = 'flex';
}

function tornaIndietro() {
  document.getElementById('over-accesso').style.display = 'none';
}

function logOut() {
  document.getElementById('login-form').style.display = 'block';
  document.getElementById('profilo').style.display = 'none';
}

function clearScreen() {
    document.getElementById("result").value = "";
}
function cleardisplayresto() {
  document.getElementById("result-resto").value = "";
}

function display(value) {
    if(document.getElementById("result").value == "NaN" || document.getElementById("result").value == "undefined" ||document.getElementById("result").value == "Infinity") {
        document.getElementById("result").value = value;
    }else{
        document.getElementById("result").value += value;
    }
}
function displayresto(value) {
  if(document.getElementById("result-resto").value == "NaN" || document.getElementById("result-resto").value == "undefined" ||document.getElementById("result-resto").value == "Infinity") {
      document.getElementById("result-resto").value = value;
  }else{
      document.getElementById("result-resto").value += value;
  }
}

function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
}

function updateDate() {
    const currentDateElement = document.getElementById('current-date');

    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const currentDate = new Date().toLocaleDateString('it-IT', options);

    currentDateElement.textContent = currentDate;
}

function updateTime() {
    const currentTimeElement = document.getElementById('current-time');
    
    const options = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
    const currentTime = new Date().toLocaleTimeString('it-IT', options);

    currentTimeElement.textContent = currentTime;
}

document.addEventListener('DOMContentLoaded', function() {
    updateTime();
    setInterval(updateTime, 200); // Aggiorna ogni 0.2 secondi (200 millisecondi)
});

document.addEventListener('DOMContentLoaded', function() {
    updateDate();
    setInterval(updateDate, 10000)
});

/*function displayBibiteOptions() {
    var optionsRow = document.getElementById("bibite-options");
    
    if (optionsRow.style.display === "none") {
      optionsRow.style.display = "table-row";
    } else {
      optionsRow.style.display = "none";
    }
  }*/

function displayBibiteOptions() {
    document.getElementById("salumi-options").style.display = "none";
    document.getElementById("latticini-options").style.display = "none";
    document.getElementById("frutta-options").style.display = "none";
    document.getElementById("verdura-options").style.display = "none";
    document.getElementById("casa-options").style.display = "none";
    document.getElementById("cartoleria-options").style.display = "none";
    document.getElementById("generale-options").style.display = "none";

    var optionsRow = document.getElementById("bibite-options");
    if (optionsRow.style.display === "none") {
        optionsRow.style.display = "table-row";
      } else {
        optionsRow.style.display = "none";
      }
}
document.getElementById("cat-bibite").addEventListener("click", displayBibiteOptions);

function displaySalumiOptions() {
    document.getElementById("bibite-options").style.display = "none";
    document.getElementById("latticini-options").style.display = "none";
    document.getElementById("frutta-options").style.display = "none";
    document.getElementById("verdura-options").style.display = "none";
    document.getElementById("casa-options").style.display = "none";
    document.getElementById("cartoleria-options").style.display = "none";
    document.getElementById("generale-options").style.display = "none";

    var optionsRow = document.getElementById("salumi-options");
    if (optionsRow.style.display === "none") {
        optionsRow.style.display = "table-row";
      } else {
        optionsRow.style.display = "none";
      }
}
document.getElementById("cat-salumi").addEventListener("click", displaySalumiOptions);

function displayLatticiniOptions() {
    document.getElementById("bibite-options").style.display = "none";
    document.getElementById("salumi-options").style.display = "none";
    document.getElementById("frutta-options").style.display = "none";
    document.getElementById("verdura-options").style.display = "none";
    document.getElementById("casa-options").style.display = "none";
    document.getElementById("cartoleria-options").style.display = "none";
    document.getElementById("generale-options").style.display = "none";

    var optionsRow = document.getElementById("latticini-options");
    if (optionsRow.style.display === "none") {
        optionsRow.style.display = "table-row";
      } else {
        optionsRow.style.display = "none";
      }
}
document.getElementById("cat-latticini").addEventListener("click", displayLatticiniOptions);

function displayFruttaOptions() {
    document.getElementById("bibite-options").style.display = "none";
    document.getElementById("salumi-options").style.display = "none";
    document.getElementById("latticini-options").style.display = "none";
    document.getElementById("verdura-options").style.display = "none";
    document.getElementById("casa-options").style.display = "none";
    document.getElementById("cartoleria-options").style.display = "none";
    document.getElementById("generale-options").style.display = "none";

    var optionsRow = document.getElementById("frutta-options");
    if (optionsRow.style.display === "none") {
        optionsRow.style.display = "table-row";
      } else {
        optionsRow.style.display = "none";
      }
}
document.getElementById("cat-frutta").addEventListener("click", displayFruttaOptions);

function displayVerduraOptions() {
    document.getElementById("bibite-options").style.display = "none";
    document.getElementById("salumi-options").style.display = "none";
    document.getElementById("latticini-options").style.display = "none";
    document.getElementById("frutta-options").style.display = "none";
    document.getElementById("casa-options").style.display = "none";
    document.getElementById("cartoleria-options").style.display = "none";
    document.getElementById("generale-options").style.display = "none";

    var optionsRow = document.getElementById("verdura-options");
    if (optionsRow.style.display === "none") {
        optionsRow.style.display = "table-row";
      } else {
        optionsRow.style.display = "none";
      }
}
document.getElementById("cat-verdura").addEventListener("click", displayVerduraOptions);

function displayCasaOptions() {
    document.getElementById("bibite-options").style.display = "none";
    document.getElementById("salumi-options").style.display = "none";
    document.getElementById("latticini-options").style.display = "none";
    document.getElementById("frutta-options").style.display = "none";
    document.getElementById("verdura-options").style.display = "none";
    document.getElementById("cartoleria-options").style.display = "none";
    document.getElementById("generale-options").style.display = "none";

    var optionsRow = document.getElementById("casa-options");
    if (optionsRow.style.display === "none") {
        optionsRow.style.display = "table-row";
      } else {
        optionsRow.style.display = "none";
      }
}
document.getElementById("cat-casa").addEventListener("click", displayCasaOptions);

function displayGeneraleOptions() {
    document.getElementById("bibite-options").style.display = "none";
    document.getElementById("salumi-options").style.display = "none";
    document.getElementById("latticini-options").style.display = "none";
    document.getElementById("frutta-options").style.display = "none";
    document.getElementById("verdura-options").style.display = "none";
    document.getElementById("casa-options").style.display = "none";
    document.getElementById("cartoleria-options").style.display = "none";

    var optionsRow = document.getElementById("generale-options");
    if (optionsRow.style.display === "none") {
        optionsRow.style.display = "table-row";
      } else {
        optionsRow.style.display = "none";
      }
}
document.getElementById("cat-generale").addEventListener("click", displayGeneraleOptions);


function displayCartoleriaOptions() {
    document.getElementById("bibite-options").style.display = "none";
    document.getElementById("salumi-options").style.display = "none";
    document.getElementById("latticini-options").style.display = "none";
    document.getElementById("frutta-options").style.display = "none";
    document.getElementById("verdura-options").style.display = "none";
    document.getElementById("casa-options").style.display = "none";
    document.getElementById("generale-options").style.display = "none";

    var optionsRow = document.getElementById("cartoleria-options");
    if (optionsRow.style.display === "none") {
        optionsRow.style.display = "table-row";
      } else {
        optionsRow.style.display = "none";
      }
}
document.getElementById("cat-cartoleria").addEventListener("click", displayCartoleriaOptions);


var totale = 0;
var iva = 0;
var nrprod = 0;
var idprod = 0;
const stringprezzi = new Array(3000);
const stringoggetti = new Array(3000);
const stringnrprod = new Array(3000);

function ottieniID(bottoneCliccato) {
  var idBottone = bottoneCliccato.id;

  //scontrino
  var bottone = document.getElementById(idBottone);
  var span = bottone.querySelector(".nome-prod");
  var span2 = bottone.querySelector(".val-prod");

  var testoSpan = span.innerText || span.textContent;
  var testoSpan2 = span2.innerText || span2.textContent;

  var nomescontrino = document.getElementById('nomi-oggetti');
  var prezzoscontrino = document.getElementById('prezzi-scontrino');
  var nomecorrente = document.getElementById('oggetto-corrente');
  var prezzocorrente = document.getElementById('prezzo-corrente');

  var result = document.getElementById("result").value;
  if(/*result != '' && result != 'NaN' && result != 'undefinied' && result != 'Infinity' &&*/ result > 1){
    
    nomescontrino.innerHTML += result + "x " + testoSpan + "<br>";
    prezzoscontrino.innerHTML += (parseFloat(testoSpan2)*result).toFixed(2) + " €<br>";
    nomecorrente.innerHTML = result + "x " + testoSpan;
    prezzocorrente.innerHTML = (parseFloat(testoSpan2)*result).toFixed(2) + " €";

    //totale
    var soloprezzo = parseFloat(testoSpan2.replace(/[ €]/g, ''));
    var divtotale = document.getElementById('totale-scontrino-nr');
    var diviva = document.getElementById('iva-scontrino-nr');
    var divnrprod = document.getElementById('nr-prodotti-scontrino-nr');

    for(let i = 0; i<result; i++){
      stringprezzi[idprod] = soloprezzo;
      stringoggetti[idprod] = testoSpan;
      idprod++;
    }
    idprod--;
    stringnrprod[idprod] = parseInt(result);
    idprod++;

    totale += (soloprezzo*result);
    divtotale.innerHTML = totale.toFixed(2);
    console.log('Totale: ' + totale);

    iva = iva + soloprezzo*result*0.103;
    diviva.innerHTML = iva.toFixed(2);
    console.log('Iva: ' + iva);


    nrprod = nrprod + parseInt(result);
    divnrprod.innerHTML = nrprod;
    console.log('Nr. prod: ' + nrprod);

    document.getElementById("result").value = '';

    console.log(stringnrprod);
    console.log(stringoggetti);
    console.log(stringprezzi);

  }else{
    nomescontrino.innerHTML += testoSpan + "<br>";
    prezzoscontrino.innerHTML += testoSpan2 + "<br>";
    nomecorrente.innerHTML = testoSpan;
    prezzocorrente.innerHTML = testoSpan2;

    //totale
    var soloprezzo = parseFloat(testoSpan2.replace(/[ €]/g, ''));
    var divtotale = document.getElementById('totale-scontrino-nr');
    var diviva = document.getElementById('iva-scontrino-nr');
    var divnrprod = document.getElementById('nr-prodotti-scontrino-nr');

    stringprezzi[idprod] = soloprezzo;
    stringoggetti[idprod] = testoSpan;
    stringnrprod[idprod] = 1; 
    idprod++;

    totale += soloprezzo;
    divtotale.innerHTML = totale.toFixed(2);
    console.log('Totale: ' + totale);

    iva += (soloprezzo*0.103);
    diviva.innerHTML = iva.toFixed(2);
    console.log('Iva: ' + iva);

    nrprod+=1;
    divnrprod.innerHTML = nrprod;
    console.log('Nr. prod: ' + nrprod);

    console.log(stringnrprod);
    console.log(stringoggetti);
    console.log(stringprezzi);
  }

}

function del() {
  var nomescontrino = document.getElementById('nomi-oggetti');
  var prezzoscontrino = document.getElementById('prezzi-scontrino');

  // Check if there are rows to delete
  if (nomescontrino.children.length > 0) {
    // Remove the last row and its corresponding price
    nomescontrino.removeChild(nomescontrino.lastChild);
    prezzoscontrino.removeChild(prezzoscontrino.lastChild);

    // Update totals
    updateTotals();
  }

}

function aggiungi(btn) {
  if (result.value === '') {
    
  } else {
    var nomescontrino = document.getElementById('nomi-oggetti');
    var prezzoscontrino = document.getElementById('prezzi-scontrino');
    var nomecorrente = document.getElementById('oggetto-corrente');
    var prezzocorrente = document.getElementById('prezzo-corrente');

    var numericValue = parseFloat(result.value);

    prezzoscontrino.innerHTML += numericValue.toFixed(2) + " €<br>";
    prezzocorrente.innerHTML = numericValue.toFixed(2) + " €";

    switch (btn.id){
      case 'btn-aggiungi-bibita':
        nomescontrino.innerHTML += "Bibita<br>";
        nomecorrente.innerHTML = "Bibita";
        stringoggetti[idprod] = "Bibita (" + numericValue + "€)";
        break;
      case 'btn-aggiungi-salumi':
        nomescontrino.innerHTML += "Salumi<br>";
        nomecorrente.innerHTML = "Salumi";
        stringoggetti[idprod] = "Salumi (" + numericValue + "€)";
        break;
      case 'btn-aggiungi-carne':
        nomescontrino.innerHTML += "Carne<br>";
        nomecorrente.innerHTML = "Carne";
        stringoggetti[idprod] = "Carne (" + numericValue + "€)";
        break;
      case 'btn-aggiungi-latticino':
        nomescontrino.innerHTML += "Latticini<br>";
        nomecorrente.innerHTML = "Latticini";
        stringoggetti[idprod] = "Latticini (" + numericValue + "€)";
        break;
      case 'btn-aggiungi-frutta':
        nomescontrino.innerHTML += "Frutta<br>";
        nomecorrente.innerHTML = "Frutta";
        stringoggetti[idprod] = "Frutta (" + numericValue + "€)";
        break;
      case 'btn-aggiungi-verdura':
        nomescontrino.innerHTML += "Verdura<br>";
        nomecorrente.innerHTML = "Verdura";
        stringoggetti[idprod] = "Verdura (" + numericValue + "€)";
        break;
      case 'btn-aggiungi-casa':
        nomescontrino.innerHTML += "Casa<br>";
        nomecorrente.innerHTML = "Casa";
        stringoggetti[idprod] = "Casa (" + numericValue + "€)";
        break;
      case 'btn-aggiungi-generale':
        nomescontrino.innerHTML += "Generale<br>";
        nomecorrente.innerHTML = "Generale";
        stringoggetti[idprod] = "Generale (" + numericValue + "€)";
        break;
      case 'btn-aggiungi-cartoleria':
        nomescontrino.innerHTML += "Cartoleria<br>";
        nomecorrente.innerHTML = "Cartoleria";
        stringoggetti[idprod] = "Cartoleria (" + numericValue + "€)";
        break;
    }

    stringprezzi[idprod] = numericValue;
    idprod++;

    var divtotale = document.getElementById('totale-scontrino-nr');
    var diviva = document.getElementById('iva-scontrino-nr');
    var divnrprod = document.getElementById('nr-prodotti-scontrino-nr');

    totale += numericValue;
    iva += numericValue * 0.103;

    divtotale.innerHTML = totale.toFixed(2);
    console.log('Totale: ' + totale);

    diviva.innerHTML = iva.toFixed(2);
    console.log('Iva: ' + iva);

    nrprod += 1;
    divnrprod.innerHTML = nrprod;
    console.log('Nr. prod: ' + nrprod);

    console.log(stringoggetti);

    result.value = '';

    console.log(stringnrprod);
    console.log(stringoggetti);
    console.log(stringprezzi);

  }
}


function updateTotals() {
  var divtotale = document.getElementById('totale-scontrino-nr');
  var diviva = document.getElementById('iva-scontrino-nr');
  var divnrprod = document.getElementById('nr-prodotti-scontrino-nr');

  idprod--;

  if(stringoggetti[idprod] == 'subtot') {
    var nomescontrino = document.getElementById('nomi-oggetti');
    var prezzoscontrino = document.getElementById('prezzi-scontrino');
    nomescontrino.removeChild(nomescontrino.lastChild);
    prezzoscontrino.removeChild(prezzoscontrino.lastChild);
    nomescontrino.removeChild(nomescontrino.lastChild);
    nomescontrino.removeChild(nomescontrino.lastChild);
    stringoggetti[idprod] = '';
    idprod--;
    stringoggetti[idprod] = '';
  }else{

    var prezzoscontrino = document.getElementById('prezzi-scontrino');
    var nomescontrino = document.getElementById('nomi-oggetti');
    nomescontrino.removeChild(nomescontrino.lastChild);
    prezzoscontrino.removeChild(prezzoscontrino.lastChild);

    var nomecorrente = document.getElementById('oggetto-corrente');
    var prezzocorrente = document.getElementById('prezzo-corrente');
        
    // Update the HTML
    nomecorrente.innerHTML = '#deleted ' + stringoggetti[idprod];
    prezzocorrente.innerHTML = '';

    let tmp = stringnrprod[idprod];
    for(let i = 0; i<tmp; i++)
    {
      totale -= stringprezzi[idprod];
      iva -= stringprezzi[idprod]*0.103;
      
      console.log(document.getElementById('nomi-oggetti').lastChild);

      nrprod--;

      stringnrprod[idprod]='';
      stringoggetti[idprod] = '';
      stringprezzi[idprod] = '';
      console.log(stringoggetti[idprod]);
      console.log(stringoggetti);

      idprod--;
    }

    idprod++;

    divtotale.innerHTML = totale.toFixed(2);
    diviva.innerHTML = iva.toFixed(2);
    divnrprod.innerHTML = nrprod;
  }  
}


function btnannullaConto(){
  document.getElementById("overlay").style.display = "flex";
  document.getElementById("conferma-annullamento").style.display = "block";
  document.getElementById("over-pagamento").style.display = "none";
}
document.getElementById("btn-annulla-conto").addEventListener("click", btnannullaConto);
function btnapriCassetto(){
  document.getElementById("overlay").style.display = "flex";
  document.getElementById("over-cassetto").style.display = "block";
  document.getElementById("over-pagamento").style.display = "none";

  setTimeout(function() {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("over-cassetto").style.display = "none";
    document.getElementById("over-pagamento").style.display = "block";
  }, 10000);
}
document.getElementById("btn-cassetto").addEventListener("click", btnapriCassetto);
function btnsubtotale(){
  document.getElementById('nomi-oggetti').innerHTML += '---------------<br>';
  document.getElementById('prezzi-scontrino').innerHTML += '<br>';
  document.getElementById('nomi-oggetti').innerHTML += 'SUBTOTALE: ' + totale.toFixed(2) + ' € - iva: ' + iva.toFixed(2) + '€<br>';
  document.getElementById('prezzi-scontrino').innerHTML += '<br>';
  stringoggetti[idprod] = 'subtot';
  idprod++;
  stringoggetti[idprod] = 'subtot';
  idprod++;
}
document.getElementById("btn-sub-totale").addEventListener("click", btnsubtotale);
function btnstorno(){
  var result = document.getElementById("result").value;
  if(result != '' && result != 'NaN' && result != 'undefinied' && result != 'Infinity'){
    document.getElementById("overlay").style.display = "flex";
    document.getElementById("over-storno").style.display = "block";
    document.getElementById("over-pagamento").style.display = "none";

    document.getElementById('valore-storno').innerHTML = result; 
    document.getElementById("result").value = '';
  }else{
    console.log("niente");
  }
}
document.getElementById("btn-storno").addEventListener("click", btnstorno);

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById("btn-annulla-conto-conf").addEventListener("click", function () {
    document.getElementById('nomi-oggetti').innerHTML = '';
    document.getElementById('prezzi-scontrino').innerHTML = '';
    document.getElementById('oggetto-corrente').innerHTML = '#Count Deleted';
    document.getElementById('prezzo-corrente').innerHTML = '';
    totale = 0;
    iva = 0;
    nrprod = 0;
    document.getElementById('totale-scontrino-nr').innerHTML = '0';
    document.getElementById('iva-scontrino-nr').innerHTML = '0';
    document.getElementById('nr-prodotti-scontrino-nr').innerHTML = '0';

    overlay.style.display = 'none';
    document.getElementById("conferma-annullamento").style.display = "none";
    document.getElementById("over-pagamento").style.display = "block";
  });
});

function displayPagamenti(){
  document.getElementById("overlay").style.display = "flex";
  document.getElementById("over-pagamento").style.display = "block";

  var divtotale1 = document.getElementById('totale-scontrino-nr1');
  var diviva1 = document.getElementById('iva-scontrino-nr1');
  console.log("totale:" + totale);
  console.log("iva:" + iva);

  diviva1.innerHTML = iva.toFixed(2);
  divtotale1.innerHTML = totale.toFixed(2);
}
document.getElementById("btn-pagamento").addEventListener("click", displayPagamenti);

document.addEventListener('DOMContentLoaded', function () {
  var overlay = document.getElementById('over-pagamento');
  var btnContanti = document.getElementById('btn-pag-contanti');
  var btnCarta = document.getElementById('btn-pag-carta');
  var btnBuoni = document.getElementById('btn-pagamento-buoni');
  var btnCrypto = document.getElementById('btn-pagamento-crypto');
  var pagContanti = document.getElementById('pagina-contanti');
  var pagCarta = document.getElementById('pagina-carta');
  var pagBuoni = document.getElementById('pagina-buoni');
  var pagCrypto = document.getElementById('pagina-crypto');
  
  btnContanti.addEventListener('click', function () {
    overlay.style.display = 'none';
    pagContanti.style.display = 'block';
  });
  document.getElementById('si-storno').addEventListener('click', function () {
    overlay.style.display = 'none';
    pagContanti.style.display = 'block';
    document.getElementById('over-storno').style.display = 'none';
  });
  btnCarta.addEventListener('click', function () {
    overlay.style.display = 'none';
    pagCarta.style.display = 'block';
  });
  btnBuoni.addEventListener('click', function () {
    overlay.style.display = 'none';
    pagBuoni.style.display = 'block';
  });
  btnCrypto.addEventListener('click', function () {
    overlay.style.display = 'none';
    pagCrypto.style.display = 'block';
  });
});

document.addEventListener('DOMContentLoaded', function () {
  var overlay = document.getElementById('overlay');
  var overpagam = document.getElementById('over-pagamento');
  var chiudipagamento = document.getElementById('chiudi-pagamento');
  var chiudicontanti = document.getElementById('chiudi-contanti');
  var chiudicarta = document.getElementById('chiudi-carta');
  var chiudibuoni = document.getElementById('chiudi-buoni');
  var chiudicrypto = document.getElementById('chiudi-crypto');
  var pagContanti = document.getElementById('pagina-resto-contanti');
  var pagCarta = document.getElementById('pagina-carta');
  var pagBuoni = document.getElementById('pagina-buoni');
  var pagCrypto = document.getElementById('pagina-crypto');

  var chiudicassetto = document.getElementById('chiudi-cassetto');
  chiudicassetto.addEventListener('click', function () {
    overlay.style.display = 'none';
    document.getElementById("over-cassetto").style.display = "none";
    document.getElementById("over-pagamento").style.display = "block";
  });

  var chiudiannullaconto = document.getElementById('btn-annulla-conto-no');
  chiudiannullaconto.addEventListener('click', function () {
    overlay.style.display = 'none';
    document.getElementById("conferma-annullamento").style.display = "none";
    document.getElementById("over-pagamento").style.display = "block";
  });

  var chiudistorno = document.getElementById('chiudi-storno');
  chiudistorno.addEventListener('click', function () {
    overlay.style.display = 'none';
    document.getElementById("over-storno").style.display = "none";
    document.getElementById("over-pagamento").style.display = "block";
  });

  chiudipagamento.addEventListener('click', function () {
    overlay.style.display = 'none';
  });

  chiudicontanti.addEventListener('click', function () {
      overlay.style.display = 'none';
      pagContanti.style.display = 'none';
      overpagam.style.display = 'block';
  });

  chiudicarta.addEventListener('click', function () {
    overlay.style.display = 'none';
    pagCarta.style.display = 'none';
    overpagam.style.display = 'block';
  });

  chiudibuoni.addEventListener('click', function () {
    overlay.style.display = 'none';
    pagBuoni.style.display = 'none';
    overpagam.style.display = 'block';
  });

  chiudicrypto.addEventListener('click', function () {
    overlay.style.display = 'none';
    pagCrypto.style.display = 'none';
    overpagam.style.display = 'block';
  });
});

function resto(value){
  document.getElementById('result-resto').value = value;
}

function calcolaresto(){
  var importoversato = document.getElementById('result-resto').value;

  if(importoversato==0 || importoversato=='') return;

  document.getElementById('pagina-contanti').style.display = 'none';
  document.getElementById('pagina-resto-contanti').style.display = 'block';

  document.getElementById('totale-resto').innerHTML = totale.toFixed(2);
  document.getElementById('importo-versato-resto').innerHTML = parseFloat(importoversato).toFixed(2);
  document.getElementById('resto-resto').innerHTML = parseFloat(importoversato-totale).toFixed(2);

  document.getElementById('result-resto').value = '';
}
