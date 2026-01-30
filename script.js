// On commence par créer une fonction qui va nous permettre d'ajouter notre dépense dans le tableau avec un bouton supprimer
function ajouterDepense() {
    // On récupére les valeurs qui ont été insérer dans le formulaire d'ajout 
    const description = document.getElementById('description').value;
    const montant = document.getElementById('montant').value;

    //On récupere le tableau qui est le tbody
    const listeDepenses = document.getElementById('listeDepenses');

    //On crée une constante qui permet de créer une nouvelle ligne dans le tableau
    const nouvelleLigne = document.createElement('tr');

    // On crée le contenu de cette nouvelle ligne qui va contenir la description et le chiffre saisie dans le formulaire avec un bouton supprimer
    nouvelleLigne.innerHTML = `
        <td>${description}</td>
        <td>${parseFloat(montant).toFixed(2)} €</td>
        <td><button class="btn-supprimer">Supprimer</button></td>` ;

    // On ajoute la ligne crée dans le formulaire dans le tableau
    listeDepenses.appendChild(nouvelleLigne);

    //On reinitialise le formulaire une fois que tout a était fait
    document.getElementById('description').value = '';
    document.getElementById('montant').value = '';
}

//On crée l'évenement sur le bouton ajouter, au "click", on appelle la fonction ajouterDepense
document.getElementById('btnAjouter').addEventListener("click", ajouterDepense);