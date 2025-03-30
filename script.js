document.addEventListener("DOMContentLoaded", function() {
    const nombreInput = document.getElementById("nombre");
    const tabsContainer = document.getElementById("marchandises-tabs");
    const contentContainer = document.getElementById("marchandises-container");

    nombreInput.addEventListener("input", function() {
        let nombre = parseInt(this.value);

        // Reset des conteneurs
        tabsContainer.innerHTML = "";
        contentContainer.innerHTML = "";

        if (nombre > 0) {
            // Création des boutons pour chaque emballage
            for (let i = 1; i <= nombre; i++) {
                let tabButton = document.createElement("button");
                tabButton.innerText = i;
                tabButton.classList.add("tab-btn");
                tabButton.dataset.target = `marchandise-${i}`;
                tabButton.addEventListener("click", function() {
                    showMarchandise(i, nombre);
                });

                tabsContainer.appendChild(tabButton);

                // Création des formulaires cachés
                let div = document.createElement("div");
                div.classList.add("marchandise-item");
                div.id = `marchandise-${i}`;
                div.style.display = i === 1 ? "block" : "none"; // Affiche seulement le premier au début
                div.innerHTML = `
                    <h4>Marchandise ${i}</h4>
                    
                    <div class="trans-input">
                        <label class="type-label"> Type de marchandise :  </label>
                        <select id="type-${i}" name="type-${i}" class="type-select">
                            <option value="Emballage Vide">Emballage Vide</option>
                            <option value="Emballage Fragile">Emballage Fragile</option>
                            <option value="Accessoires automobiles">Accessoires automobiles</option>
                            <option value="Biens de consommation">Biens de consommation</option>
                            <option value="Machines">Machines</option>
                            <option value="Bois et papier">Bois et papier</option>
                            <option value="Matériaux de construction">Matériaux de construction</option>
                            <option value="Chimie">Chimie / Matières plastiques</option>
                            <option value="Métal">Métal</option>
                            <option value="Electronique">Electronique</option>
                            <option value="Autres">Autres</option>
                        </select>
                    </div>
                    <div class="trans-input">
                        <input id="desc-${i}" name="type_desc-${i}" placeholder="Déscriptif du contenu" type="text" required>
                    </div>
                    <div class="trans-input">
                        <input id="poids-${i}" name="poids-${i}" placeholder="Poids (en kg)" type="number" required>
                    </div>
                    <div class="trans-input-taille">
                        <label for="taille_emballage">Taille emballage :</label>
                        <input id="largeur-${i}" type="number" name="largeur-${i}" placeholder="Largeur" required>
                        <label> x </label>
                        <input id="longueur-${i}" type="number" name="longueur-${i}" placeholder="Longueur" required>
                    </div>
                `;

                contentContainer.appendChild(div);
            }
        }
    });

    // Fonction pour afficher la marchandise sélectionnée
    function showMarchandise(index, total) {
        for (let i = 1; i <= total; i++) {
            document.getElementById(`marchandise-${i}`).style.display = i === index ? "block" : "none";
        }
    }
});
