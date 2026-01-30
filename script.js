//
// fonction pour ajouter une dépense dans le tableau
//
 
function ajouterDepense() {
  // On récupére les valeurs qui ont été insérer dans le formulaire d'ajout
  const description = document.getElementById("description").value;
  const montant = document.getElementById("montant").value;
 
  // Vérifie le montant
  if (isNaN(montant) || montant <= 0) {
    alert("Veuillez entrer un montant valide");
    return;
  }
 
  //Récupere le tableau
  const listeDepenses = document.getElementById("listeDepenses");
 
  //Constante crée une nouvelle ligne dans le tableau
  const nouvelleLigne = document.createElement("tr");
 
  // Contenu de la nouvelle ligne
  nouvelleLigne.innerHTML = `
              <td>${description}</td>
              <td>${parseFloat(montant).toFixed(2)} €</td>
              <td><button type="button" class="btn-supprimer">Supprimer</button></td>`;
 
  // Ajoute la ligne crée dans le formulaire dans le tableau
  listeDepenses.appendChild(nouvelleLigne);
 
  // On lis l'événement de suppression au bouton de cette ligne
  const boutonSupprimer = nouvelleLigne.querySelector(".btn-supprimer");
  boutonSupprimer.addEventListener("click", function () {
    // On récupère la ligne (tr) qui contient le bouton cliqué
    nouvelleLigne.remove();
    // On recalcule le total
    calculerTotal();
  });
 
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
    // récupère le montant
    const montantTexte = ligne.cells[1].textContent;
    // remplace symbole € et on convertit en nombre
    const montant = parseFloat(montantTexte.replace(" €", ""));
    total += montant;
  });
 
  // Le total
  document.getElementById("montantTotal").textContent = total.toFixed(2);
}
 
// Appelle de la fonction ajouterDepense au clic sur le bouton Ajouter
document.getElementById("btnAjouter").addEventListener("click", ajouterDepense);