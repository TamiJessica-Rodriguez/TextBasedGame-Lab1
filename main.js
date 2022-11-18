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

    text.textContent = "Nu befinner sig båten mitt i stormens öga och båten börjar att gå sönder. Nicole kan höra men inte se sina två vänner, Trollet och Spöket. Dock är dem precis bredvid henne och kramar om varandra av rädlsa samtidigt som de ropar hennes namn. De har inte förstått att de är osynliga. Spöket har nämligen en hemlig kraft hen inte visste fanns och eftersom de har fysisk kontakt blir även Trollet osynlig på grund av detta. "
    question.textContent = "Nicole kan förbereda livbåten eller bli omfamnad av sina vänner. Vad behöver Nicole och hennes vänner göra för att överleva stormen?";

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

    text.textContent = "Nicole har nu föreberett livbåten men hon ser inte sina vänner. Hon ropar på dem. De ropar på henne men hon kan inte se dem- De sitter redan i livbåten. Nicole springer iväg för att försöka hitta sina vänner. ";
    question.textContent = " Spöket släpper taget om trollet för att springa efter Nicole. Tillslut ser det varandra, men nu är de för långt bort ifrån livbåten för att hinna tillbaka. De springer allt vad de kan mot livbåten, medan Trollet börjar släppa så att den kan åka ner i havet. ";

    button1.textContent = "Hoppa i livbåten";
    button1.onclick = toBeContinued;

    button2.textContent = "Alla stannar";
    button2.onclick = failScene;

}

function loadAwaitStormScene(){
    const text = document.getElementById('text');
    const question = document.getElementById('question');
    const button1 = document.getElementById('option-1');
    const button2 = document.getElementById('option-2');
    // const picture = document.querySelector('#frame');

    const frame = document.getElementById('frame');
    frame.style.backgroundImage = "url('images/frank-mckenna-OD9EOzfSOh0-unsplash.jpg')";

    text.textContent = "De avaktar och kommer på att de kan titta på deras karta och där igenom kanske hitta en alternativ väg. När de tittar och studerar kartan inser de att det finns en väg som går ännu snabbare än den beskrivning de fått innan. Och de bästa av att de slipper åka igenom stormen."; 
    question.textContent = "Stort grattis! Nu kommer de fram snabbare tack vara dig.";

    button1.style.display = 'none';

    button2.textContent = "Avsluta";
    button2.onclick = loadEndScene;

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

    text.textContent = "oj, nu gick det inte bra. För att överleva var de tvungna att förbereda livbåten. Försök igen!"; 
    question.textContent = "";

    button2.style.backgroundColor = "black";

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

// Kör om sidan helt och hållet 
function refreshPage() {
    window.location.reload();
}