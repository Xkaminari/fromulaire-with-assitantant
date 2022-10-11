const btn = document.querySelector('.talk');
const content = document.querySelector('.content');
const theForm = document.querySelector('form')
const results = document.querySelector('#informationFiled')
let userFirstNam = document.getElementById("firstNam").value;
let userLastNam = document.getElementById("lastName").value;

function speak(sentence) {
    const text_speak = new SpeechSynthesisUtterance(sentence);

    text_speak.rate = 1;
    text_speak.pitch = 1;

    window.speechSynthesis.speak(text_speak);
}

function wishMe() {
    var day = new Date();
    var hr = day.getHours();

    if(hr >= 0 && hr < 12) {
        speak("Bonjour Chère utilisateur !");
    }

    else{
        speak("Bonsoir Chère utilisateur !");
    }
}

function submitForm() {
    // speak(`Vos données ont été enregistrées avec succès, ravie de vous rencontrer${userFirstNam + userLastNam}.`);
    console.log("the fuck");
    console.log(userFirstNam);
    console.log(userLastNam);
    theForm.style.display = "none";
    results.style.display = "block"
}

window.addEventListener('load', ()=>{
    // speak("Initialisation de l'assistant vocal");
    // wishMe();
    // speak("Je me nome MYC et je serais votre assistant durant le remplissage de se formulaire !");
})

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    sayThis(transcript.toLowerCase());
}

btn.addEventListener('click', ()=>{
    recognition.start();
})

function sayThis(message) {
    const speech = new SpeechSynthesisUtterance();

    speech.text = "Je n'ai pas compris !";

    if(message.includes('qui est le meilleur coach')) {
        const finalText = "bien évidemment c'est Mouhamed Yassine, mais mention honorable a carlos";
        speech.text = finalText;
    }

    speech.volume = 1;
    speech.pitch = 1;
    speech.rate = 1;

    window.speechSynthesis.speak(speech);
}