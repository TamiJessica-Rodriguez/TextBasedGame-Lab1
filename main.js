window.addEventListener('DOMContentLoaded', main);

/**@type {HTMLParagraphEleemnt} p-tag to display scene message */ 

function main(){
    loadStartScene();
}

function loadStartScene(){
    const text = document.getElementById('text');
    const question = document.getElementById('question');
    const button1 = document.getElementById('option-1');
    const button2 = document.getElementById('option-2');

    const frame = document.getElementById('frame');
    frame.style.backgroundImage = "url('images/joseph-barrientos-oQl0eVYd_n8-unsplash.jpg')";

    text.textContent = "Välkommen till Nicole's värld. Hon och hennes två vänner seglar en stor båt, och de är påväg till latinamerika för att hitta hennes försvunna pappa. Det står just nu inför ett vägval och behöver din hjälp. "; /* samma som innerHTML, men man kan injcta en script tag i innerHTMl så det är säkrare med innerHTML*/
    question.textContent = "De har fått en specifik vägbeskrivning som de ska följa på utsatt tid annars kommer de inte in i den hemliga världen som kan ta dem dit på halva tiden. Dock visar sig en jätte storm vara på väg från den riktningen. Vad ska de göra?";

    button1.style.display = null;
    text.style.color = null;
    question.style.color = null;
    button2.style.display = null;
    

    button1.style.backgroundColor = "rgb(23, 16, 62)";
    button2.style.backgroundColor = "rgb(23, 16, 62)";
    
    button1.textContent = "Styra mot stormen";
    button1.onclick = loadStormScene;

    button2.textContent = "Avvakta";
    button2.onclick = loadAwaitStormScene;
    
}

function loadStormScene(){
    const text = document.getElementById('text');
    const question = document.getElementById('question');
    const button1 = document.getElementById('option-1');
    const button2 = document.getElementById('option-2');

    const frame = document.getElementById('frame');
    frame.style.backgroundImage = "url('images/image6.webp')";

    text.style.color = "white";
    question.style.color = "white";
    button1.style.backgroundColor = "black";
    button2.style.backgroundColor = "black";

    text.textContent = "Nu befinner de sig båten mitt i stormens öga och båten börjar att gå sönder. Nicole kan höra men fortfarande inte se sina två vänner."
    question.textContent = "Vad behöver Nicole och hennes vänner göra för att överleva stormen?";

    button1.textContent = "Förbereda livbåten";
    button1.onclick = loadAfterStormScene;

    button2.textContent = "Stanna kvar i båten";
    button2.onclick = failScene;

}

function loadAfterStormScene(){
    const text = document.getElementById('text');
    const question = document.getElementById('question');
    const button1 = document.getElementById('option-1');
    const button2 = document.getElementById('option-2');

    const frame = document.getElementById('frame');
    frame.style.backgroundImage = "url('images/image5.jpeg')";

    button1.style.backgroundColor = "rgb(110, 151, 152)";
    button2.style.backgroundColor = "rgb(110, 151, 152)";

    text.textContent = "De har nu föreberett livbåten. Nicole kommer på att de inte får glömma kartan som visar dem vägen och springer iväg för att hämta den. Henns två vänner väntar nerväst i livbåten och börjar lossa den.";
    question.textContent = "Nicole hittar kartan tillslut och börja springa mot livbåten, men den börjar lossar helt i förväg och försvinner ner i havet. Vad ska Nicole göra? ";

    button1.textContent = "Hoppa i havet";
    button1.onclick = toBeContinued;

    button2.textContent = "Stanna kvar";
    button2.onclick = failScene;

}

function loadAwaitStormScene(){
    const text = document.getElementById('text');
    const question = document.getElementById('question');
    const button1 = document.getElementById('option-1');
    const button2 = document.getElementById('option-2');

    const frame = document.getElementById('frame');
    frame.style.backgroundImage = "url('images/frank-mckenna-OD9EOzfSOh0-unsplash.jpg')";

    text.textContent = "De avaktar och kommer på att de kan titta på deras karta och där igenom kanske hitta en alternativ väg. De hittar en alternativ väg och funderar på att ta den."; 
    question.textContent = "Ska de ta den alternativa vägen eller åka igenom stormen?";

    button1.textContent = "Alternativ väg"
    button1.onclick = loadWinScene;

    button2.textContent = "Styr mot stormen";
    button2.onclick = failScene;

}

function loadEndScene (){

    const text = document.getElementById('text');
    const question = document.getElementById('question');
    const button1 = document.getElementById('option-1');
    const button2 = document.getElementById('option-2');

    text.textContent = "Vill du testa att gå en annan väg?"; 
    question.textContent = "";

    button1.style.display = 'none';
    button2.textContent = "Börja om";
    button2.onclick = loadStartScene;
}

function failScene (){

    const text = document.getElementById('text');
    const question = document.getElementById('question');
    const button1 = document.getElementById('option-1');
    const button2 = document.getElementById('option-2');

    const frame = document.getElementById('frame');
    frame.style.backgroundImage = "url('images/storm4.jpeg')";

    text.textContent = "Oj, nu gick det inte bra. För att överleva var de tvungna att förbereda livbåten. Försök igen!"; 
    question.textContent = "";

    button2.style.backgroundColor = "black";
    text.style.color = "white";

    button1.style.display = 'none';
    button2.textContent = "Börja om";
    button2.onclick = loadStartScene;


}

function toBeContinued(){

    const text = document.getElementById('text');
    const question = document.getElementById('question');
    const button1 = document.getElementById('option-1');
    const button2 = document.getElementById('option-2');


    const frame = document.getElementById('frame');
    frame.style.backgroundImage = "url('images/image6.webp')";

    text.textContent = "Fortsättning följer....."; 
    question.textContent = "";

    text.style.color = "black";
    button2.style.color = "white";
    button2.style.backgroundColor = "black";
    button1.style.display = 'none';
    button2.textContent = "Börja om";
    button2.onclick = loadStartScene;

}

function loadWinScene(){

    const text = document.getElementById('text');
    const question = document.getElementById('question');
    const button1 = document.getElementById('option-1');
    const button2 = document.getElementById('option-2');

    button2.style.display = 'none';

    const frame = document.getElementById('frame');
    frame.style.backgroundImage = "url('images/beach.jpeg')";

    text.textContent = "Stort grattis! De överlevde"; 
    question.textContent = "";

    text.style.color = "black";
    button2.style.color = "white";
    button2.style.backgroundColor = "black";
    button1.textContent = "Börja om";
    button1.onclick = loadStartScene;

  

}

// Kör om sidan helt och hållet 
function refreshPage() {
    window.location.reload();
}