//
// fonction pour ajouter une dépense dans le tableau
//

function ajouterDepense() {
  // On récupére les valeurs qui ont été insérer dans le formulaire d'ajout
  const description = document.getElementById("description").value;
  const montant = document.getElementById("montant").value;

  // On vérifie que les champs ne sont pas vides
  if (description === "" || montant === "") {
    alert("Veuillez remplir tous les champs");
    return;
  }

  // On vérifie que le montant est un nombre valide
  if (isNaN(montant) || montant <= 0) {
    alert("Veuillez entrer un montant valide");
    return;
  }

  //On récupere le tableau qui est le tbody
  const listeDepenses = document.getElementById("listeDepenses");

  //On crée une constante qui permet de créer une nouvelle ligne dans le tableau
  const nouvelleLigne = document.createElement("tr");

  // On crée le contenu de cette nouvelle ligne qui va contenir la description et le chiffre saisie dans le formulaire avec un bouton supprimer
  nouvelleLigne.innerHTML = `
            <td>${description}</td>
            <td>${parseFloat(montant).toFixed(2)} €</td>
            <td><button class="btn-supprimer">Supprimer</button></td>`;

  // On ajoute la ligne crée dans le formulaire dans le tableau
  listeDepenses.appendChild(nouvelleLigne);

  // On met à jour le total après l'ajout
  calculerTotal();

  //On reinitialise le formulaire une fois que tout a était fait
  document.getElementById("description").value = "";
  document.getElementById("montant").value = "";
}

//
// Fonction pour calculer le total des dépenses
//

function calculerTotal() {
  // On récupère toutes les lignes du tableau
  const lignes = document.querySelectorAll("#listeDepenses tr");

  // Variable pour stocker le total
  let total = 0;

  // On parcourt chaque ligne et on additionne les montants
  lignes.forEach(function (ligne) {
    // On récupère le montant (2ème cellule, index 1)
    const montantTexte = ligne.cells[1].textContent;
    // On enlève le symbole € et on convertit en nombre
    const montant = parseFloat(montantTexte.replace(" €", ""));
    total += montant;
  });

  // Le total
  document.getElementById("montantTotal").textContent = total.toFixed(2);
}

// On appelle la fonction ajouterDepense
document.getElementById("btnAjouter").addEventListener("click", ajouterDepense);
