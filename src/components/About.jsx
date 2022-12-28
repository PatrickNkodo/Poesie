import React from 'react'
import Me from './Me.jpg'
const About = () => {
  return (
    <div>
      <div className="part1">
        <h1>A propos de moi</h1>
        <img src={Me} width='60%' alt="Picture"/>
        <p>Hey!bienvenu(e) sur ma page. Je me nomme Patrick Nkodo.
         J'aime donner mon nom sous ce format à la fin de mes poèmes, pour marquer l'auteur.
          Je suis un étudiant de la filière <b>genie logiciel</b> au Cameroun, à l'Instutut Universitaire Siantou (IUS), et je m'interesse beaucoup à la programmation web.
          J'éssaie d'appliquer tout ce que j'apprend en créant des petits projets, et c'est dans cette lancé que j'ai crée cette application.
          J'éspère qu'elle vous plaît. Aussi, je suis disponible dans les réseaux sociaux listés ci-dessous, vous pourriez me contacter pour faire des suggestions, ou des améliorations. Merci d'avoir visité.😉
        </p>
      </div>
      <div className="part2">
       <h1>Pourquoi cette Application?</h1>
       <p>Je suis très intéréssé par la poésie. Peut-être j'ai encore beaucoup à apprendre, mais
        un de mes rêves est de valoriser cet inspiration que Dieu m'a donné, pour mon plaisir personnel, tout comme pour plaire à cette petite communauté,
         qui n'arrête d'apprécier mes écrits.
       </p>
      </div>
      <div className='part3'>
        <i class="fab fa-facebook" aria-hidden="true"></i>
        <i class="fab fa-whatsapp" aria-hidden="true"></i>
        <i class="fab fa-linkedin" aria-hidden="true"></i>
       </div>
    </div>
  )
}

export default About
