
//Formulaire

let form = document.querySelector('#form');
let errorContainer = document.getElementById('errorContainer');
let successContainer = document.getElementById('successContainer');
   

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche l'envoi du formulaire
    errorContainer.innerHTML = '';
    

    let mail = document.getElementById('mail');
    let mailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // Expression régulière pour valider l'email

    if (mail.value.trim() === '') { // verifie que le mail est vide, trim supprime les espaces blancs
        console.log('Mail invalide : champ vide.');
    } else if (!mailPattern.test(mail.value.trim())) { // vérifie si le mail n'est pas égal au pattern
        mail.classList.add('invalide'); 
        mail.classList.remove('sucess');
     
    } else {
        console.log('Mail Valide')
        mail.classList.add('success');// applique la class css success
        mail.classList.remove('invalide');
    }


    let pseudo = document.querySelector('#pseudo');
    let pseudoError = document.querySelector('#pseudoError')

    if (pseudo.value.length >= 6) { // Vérifie si le pseudo a **au moins** 6 caractères
        console.log('Pseudo Valide');
        errorContainer.classList.add('visible'); 
        errorContainer.classList.remove('error');
        pseudo.classList.remove('invalide');
        pseudo.classList.add('success');
        form.setAttribute("style", " height: 80vh; ");

    } else {
        errorContainer.classList.add('visible');
        pseudo.classList.add('invalide');
        pseudo.classList.remove('success');

        let err = document.createElement('li');
        err.innerText = 'Le champ pseudo doit contenir au moins 6 caractères.';
        errorContainer.appendChild(err);// Ajoute err dans le container pour être afficher
    }

      // Validation du mot de passe
      let password = document.querySelector('#password');
      let passCheck = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*., ?]).{10,}$");

    // Vérification du mot de passe
    if (password.value.length < 10 || !passCheck.test(password.value)) {
        password.classList.add('invalide');
        errorContainer.classList.add('visible'); 
        errorContainer.classList.remove('error'); 
        password.classList.remove('success');
       
        form.setAttribute("style", " height: 80vh; ");

        let err = document.createElement('li');//Créer une liste
        err.innerText = 'Le mot de passe doit contenir au moins 10 caractères, une majuscule, une minuscule, un chiffre et un caractère spécial.';
        errorContainer.appendChild(err);// Ajoute err dans le container pour être afficher 

    } else {
        console.log('Mot de passe Valide'); 
        password.classList.add('success');// applique la classe success qui rends le fond vert
        password.classList.remove('invalide');
    }

    let passwordRepeat = document.querySelector('#passwordRepeat');

    if(password.value==passwordRepeat.value){
        console.log('Mot de passe de verif Valide'); 
        passwordRepeat.classList.add('success');// applique la classe success qui rends le fond vert
        passwordRepeat.classList.remove('invalide');
    } else{
        console.log('Mot de passe de verif Invalide'); 
        passwordRepeat.classList.add('invalide');
        errorContainer.classList.add('visible'); 
        errorContainer.classList.remove('error'); 
        passwordRepeat.classList.remove('success');
       
        form.setAttribute("style", " height: 80vh; ");

        let err = document.createElement('li');//Créer une liste
        err.innerText = 'Les mots de passes sont différents.';
        errorContainer.appendChild(err);// Ajoute err dans le container pour être afficher 
    }
 
  
    successContainer.classList.remove('error')
    successContainer.classList.remove('visible')
    

    if(
        pseudo.classList.contains('success')&&
        mail.classList.contains('success')&&
        password.classList.contains('success')&&
        passwordRepeat.classList.contains('success')
    ){
    
    successContainer.classList.add('visible');
    
    let message = document.createElement('li');
    message.innerText = 'Formulaire envoyé!';
    successContainer.appendChild(message); 
    }else{
        successContainer.classList.add('error');
        successContainer.classList.remove('visible')
    }
} 

);


//TABLEAU

document.querySelectorAll('li').forEach(element =>{
    element.addEventListener('click',function(){

        document.querySelectorAll('li').forEach(item=>{
         item.classList.remove('tab-active');
        })  
        this.classList.add('tab-active');

        document.querySelectorAll('div').forEach(item =>{
        item.classList.add('hide');
         })  

        if (this.classList.contains('tab-form')) {
            document.getElementById('formulaire').classList.remove('hide');
        }
        if (this.classList.contains('tab-text')) {
            document.getElementById('text').classList.remove('hide');
        }
        if (this.classList.contains('tab-img')) {
            document.getElementById('image').classList.remove('hide');
        }

        
    })
})




    // COMBAT!!
 class Guerrier {
        constructor(nom, pv, attaque) {
            this.nom = nom;
            this.pv = pv;
            this.attaque = attaque;
            this.precision = 0;
        }
    
        Attaque(adversaire) { // adversaire est un élément exterrieur c'est pourquoi on le rentre dans les paramètre et non dans le constructeur
            
            if(this.precision < Math.random()){
            adversaire.pv-= this.attaque
            console.log(this.nom + " attaque " + adversaire.nom + ": -" + damage);//afficher le resultat
            console.log(adversaire.nom + " PV restant: " + adversaire.pv);
        }
        }
    
    
        Round(adversaire) {
            while (adversaire.pv > 0 && this.pv > 0) {
                this.getPrecision();
                this.getAttack(adversaire);
    
               
                if (adversaire.pv > 0) {
                    adversaire.getPrecision();
                    adversaire.getAttack(this); 
                }
            }
    
            if (this.pv <= 0) {
                console.log(this.nom + " est KO !");
            } else {
                console.log(adversaire.nom + " est KO !");
            }
        }
    }
    
    
    let Dizzy = new Guerrier('Dizzy', 200, 70);
    let Blaze = new Guerrier('Blaze', 200, 70);
    
    Dizzy.Round(Blaze);
    
    Dizzy.Round(Blaze);
    
    //Button 
    
    let button = document.querySelector("#sombre")
    sombre.addEventListener("click", function() {
    document.body.classList.toggle('black');
    })