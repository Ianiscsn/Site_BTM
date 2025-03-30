function send_mail(event) {
    event.preventDefault(); // Empêche le rechargement de la page

    // Récupération des valeurs générales
    let nom = document.getElementById("nom").value;
    let prenom = document.getElementById("prenom").value;
    let email = document.getElementById("mail").value;
    let date = document.getElementById("date").value;
    let adresse_recup = document.getElementById("adresse-recup").value;
    let adresse_livr = document.getElementById("adresse-livr").value;
    let nombre = document.getElementById("nombre").value;

    // Récupération des colis (données dynamiques)
    let colisDetails = "";
    for (let i = 1; i <= nombre; i++) {
        let type = document.getElementById(`type-${i}`).value;
        let desc = document.getElementById(`desc-${i}`).value;
        let poids = document.getElementById(`poids-${i}`).value;
        let largeur = document.getElementById(`largeur-${i}`).value;
        let longueur = document.getElementById(`longueur-${i}`).value;

        colisDetails += `Colis ${i} :\n`;
        colisDetails += `- Type : ${type}\n`;
        colisDetails += `- Descriptif : ${desc}\n`;
        colisDetails += `- Poids : ${poids} kg\n`;
        colisDetails += `- Taille : ${largeur} x ${longueur}\n\n`;
    }

    // Envoi via EmailJS
    emailjs.send("service_ui2q2zb", "template_72azhhk", {
        nom: nom,
        prenom: prenom,
        email: email,
        date: date,
        adresse_recup: adresse_recup,
        adresse_livr: adresse_livr,
        nombre: nombre,
        colis_info: colisDetails 
    })
    .then(function(response) {
        console.log("Email envoyé avec succès !", response);
        alert("Votre message a été envoyé !");
    })
    .catch(function(error) {
        console.error("Erreur lors de l'envoi :", error);
        alert("Erreur lors de l'envoi du message.");
    });
}
