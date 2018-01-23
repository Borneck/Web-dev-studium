					/* MMDE 5C-XX1-N01
					 Andreas Borneck */
		/* Slide Show
		 Funktion für den Bildwechsel */
function wechsel(id, quelle) {
	document.getElementById(id).src = quelle;
}

		/* Formulare
		 überprüfung auf Vollständigkeit */
function pruefe() {
	var fehlerFeld = "";
	checkStrg();
		if (document.formular.email_001.value == "") {
			fehlerFeld = fehlerFeld + "Bitte erneut E-Mail adresse eingeben!\n";
			email_001.focus();
		}
			if (document.formular.email.value == "") {
			fehlerFeld = fehlerFeld + "Bitte geben Sie ihre E-Mail adresse ein!\n";
			email.focus();
		}
		if (document.formular.email.value != document.formular.email_001.value) {
			fehlerFeld = fehlerFeld + "E-Mail adressen stimmen nicht überein\n";
			email.focus()
		}
		if (document.formular.email.value.indexOf(".","@") == -1 || document.formular.email_001.value.indexOf(".","@") == -1) {
			fehlerFeld = fehlerFeld + "Keine gültige E-Mail, Bitte eingeben\n";
		}
		if (document.formular.nachname.value == "") {
			fehlerFeld = fehlerFeld + "Bitte geben Sie ihren Nachnamen ein!\n";
			nachname.focus();
		}
		if (fehlerFeld != ""){
			var ausgabe = "Bitte Eingaben Kontrollieren:\n\n";
			ausgabe = ausgabe + fehlerFeld;
			alert(ausgabe);
			return false;
		}
		if (!document.formular.checkbox.checked) {
			fehlerFeld = fehlerFeld + "Sie müssen Zuerst unsere AGB Lesen und Bestätigen!\n";
		}
		if (fehlerFeld != ""){
			var ausgabe = "Fehlende Angaben:\n\n";
			ausgabe = ausgabe + fehlerFeld;
			alert(ausgabe);
			return false;
		} 
	return true;
}

		//Überprüfung der strings das nur Buschstaben enthalten sind
function checkStrg() { 
	var eingabe, c, erlaubt = "abcdefghijklmnopqrstuvwxyzöäüß-", laenge; 
	eingabe = window.document.formular.nachname.value; 
	eingabe = eingabe.toLowerCase(); 
	laenge = eingabe.length; 
		for (c = 0; c < laenge; c++){ 
		d = eingabe.charAt(c); 
			if (erlaubt.indexOf(d) == -1){ 
			alert ("Geben Sie bitte nur Buchstaben ein"); 
			return false; 
			} 
		} 
}

		// Wechselt die Farbe der eingabefelder wenn etwas drinnen steht
function los() {
	var input = document.getElementsByTagName("input");
	for (var i = 0; i < input.length; i++){
		input[i].onkeyup = input[i].onkeydown = input[i].onkeypress = input[i].onchange =  function(){
			if (this.value === "") this.style.backgroundColor = "#DDD";
			else this.style.backgroundColor = "#FFF";
		};
		input[i].onchange();
	}
}

		//Das Datum Objekt (Zeitzaehler)
		// Funktion um ein 0 an das Datum zu voranszustellen
function zweiStellen(s) {
        while (s.toString().length < 2) {
		s = "0" + s;
        }
        return s;
}

		//berechnet die differenz zwischen dem aktuellen Datum und dem der Erstellung
function rechner () { 
	var datum = new Date();
	var tag = zweiStellen(datum.getDate());
	var monat = zweiStellen(datum.getMonth() + 1);
	var jahr = datum.getFullYear();	
	var aktuell = tag + "." + monat + "." + jahr;
       	var datumEntwurf = new Date(2015,2,18);
	var tagEnt = zweiStellen(datumEntwurf.getDate());
	var monatEnt = zweiStellen(datumEntwurf.getMonth() + 1);
	var jahrEnt = datumEntwurf.getFullYear();
	var entwurf = tagEnt + "." + monatEnt + "." + jahrEnt;
	var diff = parseInt((datumEntwurf - datum) / 1000);
	var days = parseInt(diff / (60 * 60 * 24));		
		diff -= (days * 60 * 60 * 24);
                days *= -1;
                days = zweiStellen(days);
	var hours = parseInt(diff / (60 * 60));
		diff -= (hours * (60 * 60));
                hours *= -1;
	var minutes = parseInt(diff / 60);
		diff -= (minutes * 60);
                minutes *= -1;
	var seconds = parseInt(diff);
		diff -= (seconds);
                seconds *= -1;
	setTimeout(500);
		document.getElementById("zeit").innerHTML = "<p class='heute'>" +"Heute ist der : </br>" + aktuell + "</br>" + "</p>" + "<p class='zaehler'>"
		+"Die Site wurde am " + "</br>" +  tagEnt + "." + monatEnt + "." + jahrEnt +  "</br>" + " erstellt </br>" + "das ist jetzt genau </br>"
		+ days + " Tage</br>" +  hours + " Stunden</br>" + minutes + " Minuten</br>" +  seconds + " Sekunden" + "</p>";
	}
	
		// Aktualisiert die funktion jede sekunde
var aktiv = window.setInterval("rechner()", 1000);



