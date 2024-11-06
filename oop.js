class Produit {
    constructor(id, nom, prix) {
        this.id = id;
        this.nom = nom;
        this.prix = prix;
    }
}

class PanierElement {
    constructor(produit, quantite) {
        this.produit = produit;
        this.quantite = quantite;
    }

    calculPrixTotal() {
        return this.produit.prix * this.quantite;
    }
}

class Panier {
    constructor() {
        this.item = [];
    }

    AddToPanier(produit, quantite) {
        const panierelement = new PanierElement(produit, quantite);
        this.item.push(panierelement);
    }

    calculTotalPanier() {
        let total = 0;   
        for (const panierElement of this.item) {
            total += panierElement.calculPrixTotal();
        }
        return total;
    }

    supprimerParIndex(index) {
        if (index >= 0 && index < this.item.length) {
            this.item.splice(index, 1);  
            console.log(`Élément à l'index ${index} a été supprimé du panier.`);
        } else {
            console.log(`Index ${index} non valide.`);
        }
    }

    afficherContenu() {
        if (this.item.length === 0) {
            console.log("Le panier est vide.");
            return;
        }

        console.log("Contenu du panier :");
        this.item.forEach((element, index) => {
            console.log(`Produit ${index + 1}: ${element.produit.nom}, Quantité: ${element.quantite}`);
        });
    }
}

// Création des produits
const prod1 = new Produit(1, "Crème", 25000);
const prod2 = new Produit(2, "Shampooing", 15000);
const prod3 = new Produit(3, "Gel douche", 10000);

// Création du panier
const panier = new Panier();

// Ajout de produits au panier
panier.AddToPanier(prod1, 2);  
panier.AddToPanier(prod2, 3);  
panier.AddToPanier(prod3, 1);  

//  contenu du panier
panier.afficherContenu();

//  total du panier
console.log("Le total du panier est : " + panier.calculTotalPanier());
//supression 
console.log("\n=== Test 3 - Suppression d'un produit ===");
panier.supprimerParIndex(1);  