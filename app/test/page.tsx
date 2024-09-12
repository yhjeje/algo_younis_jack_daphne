"use client";

import { Crisp } from "crisp-sdk-web";
import { useEffect } from "react";

export default function Test(){

    const userLogin = () => {
        // ... Ajouter votre propre logique ici (récupératio du token de l'utilisateur connecté par exemple)
     
        // Configuration de Crisp (obligatoire pour utiliser le bot sur votre site)
        Crisp.configure(process.env.NEXT_PUBLIC_WEBSITE_ID || "", {
          autoload: false, // Si vous voulez afficher le bot immédiatement, passez à 'true' ici
        });
        // Récupération de l'historique d'une conversation Crisp
        Crisp.setTokenId("token");
        // Affichage du bot (utile uniquement si 'autoload: false' dans la configuration)
        Crisp.load();
        // Ouverture du bot
        Crisp.chat.open();
      }

      useEffect(() => {
        userLogin(); //lancement du bot
      }, [])
    
      const showCarousel = () => {
         // Préparation d'un tableau pour le carousel (voir plus bas)
    const list = [
        {
        title: "Slide 1 du carousel",
        description: "Description du slide 1",
        actions: [
            {
            label: "Texte du bouton",
            url: "Lien de redirection du bouton",
            },
        ],
        },
        {
        title: "Slide 2 du carousel",
        description: "Description du slide 2",
        actions: [
            {
            label: "Texte du bouton",
            url: "Lien de redirection du bouton",
            },
        ],
        }
    ]
    
    // Affichage d'un carousel dans le bot
    Crisp.message.show("carousel", {
        text: "Voici la liste des oeuvres :",
        targets: list,
  });
      }

    return(
    <>
        <h1>Page test</h1>
        <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil neque aliquam necessitatibus ratione delectus voluptas eaque aperiam provident? Omnis quo a dolore ut minima incidunt explicabo vero non iure? Fugit.
        </p>
        <button onClick={showCarousel}>Afficher un carousel</button>
    </>
    )
}