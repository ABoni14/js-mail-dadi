//ESERCIZIO LISTA EMAIL
// Dichiaro le variabili
const email = document.getElementById("email");
const listaEmail = ["ciao@gmail.com", "ciccio@gmail.com", "andrea@gmail.com", "antonio@gmail.com", "gallo@gmail.com", "ambrogio@gmail.com", "stefano@gmail.com", "luca@gmail.com", "emanuele@gmail.com", "cristina@gmail.com"];

// Faccio inserire l'email all'utente
let emailUser = prompt("Inserisci la tua email");

// Di default la validità è falsa
let emailTrovata = false;

// Ciclo l'array per controllare se l'email è presente nella lista e in caso cambiare la validità di "emailTrovata"
for (let i = 0; i<listaEmail.length; i++){
  if (listaEmail[i] === emailUser){
    emailTrovata = true;
  }
};

// Mando a display il risultato in base all'email inserita e controllata nella lista
if (emailTrovata == true){
  email.innerHTML = "Email trovata nella lista";
} else {
  email.innerHTML = "Email non trovata nella lista";
};
// //ESERCIZIO LISTA EMAIL

