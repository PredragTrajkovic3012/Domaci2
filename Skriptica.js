// Proizvodi
function newPicture(){
	document.getElementById("image").src="img/predator2.jpg";
}
function oldPicture(){
	document.getElementById("image").src="img/predator.jpg";
}
function newPicture2(){
	document.getElementById("image2").src="img/lap12.jpg";
}
function oldPicture2(){
	document.getElementById("image2").src="img/lap1.jpg";
}
function newPicture3(){
	document.getElementById("image3").src="img/laptop22.jpg";
}
function oldPicture3(){
	document.getElementById("image3").src="img/laptop2.jpg";
}

//Partneri
function show (elem) {  
    elem.style.display="block";
}
function hide (elem) { 
    elem.style.display=""; 
}
//Kontakt 

function validacija(){
	
var ime = document.getElementById("ime").value;
var prezime = document.getElementById("prezime").value;
var naslov = document.getElementById("naslov").value;
var poruka = document.getElementById("poruka").value;
var broj = document.getElementById("broj").value;


var format = /[ ]/;
var format1 = /[0-9+]/;
var format2 = /[a-zA-Z.@,;:'_-]/;

	if(ime == "" || prezime == "" || naslov == "" || poruka == "" || broj == ""){
		alert("Sva polja moraju biti popunjena!")
		}

	if(ime.match(format)){
		alert("Ime mora biti jedna reč bez razmaka.");
	}
	 if(prezime.match(format)){
		alert("Prezime mora biti jedna reč bez razmaka.");
	}

	 if(poruka.length < 5){ 
						    alert("Poruka mora imati minimalno 5 karaktera.");
						 }
	
	else if(poruka.length > 20){
								alert("Poruka može imati maksimalno 20 karaktera.");
							   }
							   
		
     if(!broj.match(format1) || broj.match(format2)){
						    alert("Broj telefona može sadržati samo brojeve i karakter +.");
						 }
	if(!ime.match(format) && !prezime.match(format) && poruka.length >= 5 && poruka.length <= 20 &&
       broj.match(format1) && !broj.match(format2) && ime != "" && prezime != "" && naslov != "" && 
	   poruka != "" && broj != ""){
		alert("Sve je u redu.")
		}
	
}
//Demo

function Unos(){
var unos=document.getElementById("unos").value;
var formatbr=/[0-9]/;
var formattxt = /[a-zA-Z.@,;:'_-]/;
if(unos==null || unos==""||!unos.match(formatbr)||unos.match(formattxt)){
	alert("Pogresan unos moguce je samo uneti brojeve");
}else if(unos==0){
	alert("Zao nam je nemate dovoljno sredstava");
	document.getElementById("rezultat").innerHTML ="Nemate dovoljno sredstava ako zelite posetite nasu banku koja daje povoljne kredite"; 		
}else if(unos<=2000){
	document.getElementById("rezultat2").innerHTML="Nemate dovoljno sredstava ni za jedan nas  proizvod"; 
}else if(unos>2000 && unos <=3000){
	document.getElementById("rezultat2").innerHTML="U ovom opsegu mozete kupiti 'MARVO M416+ G1' miš za vaš računar";
	document.getElementById("bela").src="img/mis.jpg";
}else if(unos>3000 && unos <=6000){
	document.getElementById("rezultat2").innerHTML="U ovom opsegu Mozete kupiti 'Zvučnici 2.1 Logitech Z533 60W' veoma odličnog kvaliteta. ";
	document.getElementById("bela").src="img/zvuc.jpg";
}else if(unos>6000 && unos <=10000){
	document.getElementById("rezultat2").innerHTML="U ovom opsegu Mozete kupiti 'Štampač Laser A4 HP M12a, 600x600dpi' veoma odličnog kvaliteta. ";
	document.getElementById("bela").src="img/stamp.jpg";
}else if(unos>10000 && unos <=16000){
	document.getElementById("rezultat2").innerHTML="U ovom opsegu Mozete kupiti 'Monitor 18.5 HP V197 TN, 1366x768 Wide' veoma solidan. ";
	document.getElementById("bela").src="img/monitor.jpg";
}else if(unos>16000 && unos <=32000){
	document.getElementById("rezultat2").innerHTML="U ovom opsegu Mozete kupiti 'Grafička kartica GeForce GTX1050 Gigabyte 2GB DDR5' izvrsnih preformansa. ";
	document.getElementById("bela").src="img/grafi.jpg";
}else if(unos>32000 && unos <=50000){
	document.getElementById("rezultat2").innerHTML="U ovom opsegu Mozete kupiti 'Procesori Intel CPU LGA1150 Intel® Core™ i7-4790, 3.60GHz qcore' izvrsnih preformansa.";
	document.getElementById("bela").src="img/procesor.jpg";
}else if(unos>50000 && unos <=70000){
	document.getElementById("rezultat2").innerHTML="U ovom opsegu Mozete kupiti jednu od nasih glavnih ponuda računar 'Predator model1' izvrsnih preformansa.";
	document.getElementById("bela").src="img/preda.jpg";
}else if(unos>70000 && unos <=100000){
	document.getElementById("rezultat2").innerHTML="U ovom opsegu Mozete kupiti jednu od nasih glavnih ponuda računar 'Laptop Dell Vostro 5459 14' izvrsnih preformansa.";
	document.getElementById("bela").src="img/dellwe.jpg";
}else if(unos>100000){
	document.getElementById("rezultat2").innerHTML="U ovom opsegu Mozete kupiti bilo koju nasu ponudu";
}

}

