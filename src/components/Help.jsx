import React from 'react'
import Me from './Me.jpg'
import g1 from './Guide/guide (7).png'
import g2 from './Guide/guide (6).png'
import g3 from './Guide/guide (5).png'
import g4 from './Guide/guide (4).png'
import g5 from './Guide/guide (3).png'
import g6 from './Guide/guide (2).png'
import g7 from './Guide/guide (1).png'
const Help = () => {
  return (
    <div className='p-2'>
        <h1>Avez-vous besoin d'aide?</h1>
        <p>Ici je vais vous montrer comment procéder jusqu'à l'obtention de votre poème/citation créé.😊</p>
        <div className="">
          <div className="">
            <img class='img-fluid' src={g7} alt="img"/>
            <p>Ceci est la page d'accueil de l'application. Vous n'avez qu'à cliquer sur 'Continuer' pour passer à l'étape suivante.
             La navigation en dessus aussi, contient 04 liens, qui permettent d'avoir de l'aide, passer une commande, ou lire les informations à propos de moi.
            </p>
          </div>
          
          <div className="">
            <img class='img-fluid' src={g2} alt="img"/>
            <p>Ici, vous devez remplir les champs, avec les informations relatifs à ce que vous comptez écrire. Un poème? Une citation? Catégorie du poème/citation et autres.
              Ces informations seront requises pour les étapes suivantes.
            </p>
          </div>
          <div className="">
            <img class='img-fluid' src={g3} alt="img"/>
            <p>Vous arrivez ici, si vous avez choisi de modifier les poèmes intégrés. Choisissez un poème à gauche, et il apparaîtra dans la zone d'instruction, pour être modifié.
              Editez le texte autant que vous voulez, puis cliquez sur Appliquer dans la bare de navigation.
            </p>
          </div>
          
          <div className="">
            <img class='img-fluid' src={g5} alt="img"/>
            <p>Ici, vous passez aux dernières modifications. Le texte que vous avez choisi apparaît ici, et vous ajustez les arrières plans, taille couleur et police du texte à votre gout.
              En cas d'erreur sur le texte, vous pouvez retourner éditer le texte en cliquant sur Editer dans la bare de navigation. Si non, cliquez sur Sauvegarder pour télécharger l'image de votre poème.
            </p>
          </div>
          
          <div className="">
            <img class='img-fluid' src={g6} alt="img"/>
            <p>Ici, vous n'avez plus qu'à télécharger votre image, et vous avez terminé.
            </p>
          </div>
        </div>
    </div>
  )
}

export default Help
