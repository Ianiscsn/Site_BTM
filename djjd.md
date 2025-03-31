// V1

<header class="header">
        <div class="container-fluid">
            <div class="row align-items-center">
                <!-- Section gauche : Logo + Menu déroulant -->
                <div class="col-8 col-lg-10 d-flex align-items-center">
                    
                    <a href="index.html">
                    <div class="logo">
                        <img src="image_logo.jpg" alt="Logo Entreprise">
                    </div>
                    </a>
                    
                    <div class="container_info">
                        <a href="transport.html" class="contact">
                            <p> Transport de marchandises </p>
                        </a>

                        <span class="separator"></span> 

                        <a href="demenagement.html" class="contact">
                            <p> Déménagement </p>
                        </a>

                        <span class="separator"></span>

                        <a href="messagerie.html" class="contact">
                            <p> Messagerie </p>
                        </a>
                    </div>
                </div>
    
                <!-- Section droite : Bouton "Connect/Login" -->
                <div class="col-4 col-lg-2 text-right">
                    <a href="contact.html" class="login-button">Contact</a>
                </div>
            </div>
        </div>
    </header>




// V2 

<header class="header">
        <div class="container-fluid">
            <div class="row align-items-center">
                <!-- Section gauche : Logo + Menu déroulant -->
                <div class="col-8 col-lg-2 d-flex align-items-center">
                    <a href="index.html">
                        <div class="logo">
                            <img src="image_logo.jpg" alt="Logo Entreprise">
                        </div>
                    </a>
                </div>
                
                <!-- Section centrale : Menu déroulant (mobile responsive) -->
                <div class="col-12 col-lg-8 d-flex align-items-center container_info">
                    <a href="transport.html" class="contact">
                        <p>Transport de marchandises</p>
                    </a>
                    <span class="separator"></span>
                    <a href="demenagement.html" class="contact">
                        <p>Déménagement</p>
                    </a>
                    <span class="separator"></span>
                    <a href="messagerie.html" class="contact">
                        <p>Messagerie</p>
                    </a>
                </div>
    
                <!-- Section droite : Bouton "Contact" -->
                <div class="col-4 col-lg-3 text-right">
                    <a href="contact.html" class="login-button">Contact</a>
                </div>
            </div>
        </div>
    </header>



// bhyxe

<div class="container_info">
        <a href="transport.html" class="contact">
            <p>Transport de marchandises</p>
        </a>
        <span class="separator"></span>
        <a href="demenagement.html" class="contact">
            <p>Déménagement</p>
        </a>
        <span class="separator"></span>
        <a href="messagerie.html" class="contact">
            <p>Messagerie</p>
        </a>
    </div>



//bufeu

@media (max-width: 767px) {
    .contact1 {
        position : relative;
        left : 10px;
        top : 175px;
        z-index : 1000000;
        width : 90%;
        height : 75px;
        background-color: white;
        color : darkred;
        text-align: center;
        border: 1px solid brown;
        background-color: blue;
    }
    
    .contact1 p{
        position : relative;
        top : 20%;
    }
    
    .contact1:hover {
        background-color: whitesmoke;
        border-top: 1px solid darkred;
        border-bottom: 1px solid darkred;
    }
    
    .contact2 {
        position : relative;
        left : 10px;
        top : 225px;
        z-index : 1000000;
        width : 90%;
        height : 75px;
        background-color: white;
        color : darkred;
        text-align: center;
        border: 1px solid brown;
    }
    
    .contact2 p{
        position : relative;
        top : 38%;
    }
    
    .contact2:hover {
        background-color: whitesmoke;
        border-top: 1px solid darkred;
        border-bottom: 1px solid darkred;
    }
    
    .contact3 {
        position : relative;
        left : 20px;
        top: 300px;
        z-index : 1000000;
        width : 90%;
        height : 75px;
        background-color: white;
        color : darkred;
        text-align: center;
        border: 1px solid brown;
    }
    
    .contact3 p{
        position : relative;
        top : 38%;
    }
    
    .contact3:hover {
        background-color: whitesmoke;
        border-top: 1px solid darkred;
        border-bottom: 1px solid darkred;
    }
}