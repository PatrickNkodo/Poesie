import React from "react";
import Me from "./Me.jpg";
import "./about.css";
const About = () => {
  return (
    <div className="about">
      <div className="part1">
        <img src={Me} width="500" alt="Picture" />
        <div>
          <h1>A propos de moi</h1>
          <p>
            Hey! Bienvenu(e) sur ma page. Je me nomme <b>Patrick Nkodo</b>, je
            suis Camerounais. J'aime donner mon nom sous ce format à la fin de
            mes poèmes, pour me marquer comme auteur. Je suis un étudiant de la
            filière <b>génie logiciel</b>. Je m'interesse beaucoup à la
            programmation web. J'ai toujours voulu créer une application web qui
            contien le nécessaire pour composer un poeme complet, alors j'ai
            crée ceci. J'éssaierai de temps en temps d'améliorer, mais je crois
            que c'est déja quelquechose. C'est un des projets auquel je tiens
            beaucoup, il est d'ailleurs le premier listé dans mon{" "}
            <a href="https://essama.netlify.app">Portfolio</a>. Je suis très
            intéréssé par la poésie. Peut-être j'ai encore beaucoup à apprendre,
            mais un de mes rêves est de valoriser ce talent que Dieu m'a donné,
            pour mon plaisir personnel, tout comme pour plaire à cette petite
            communauté, qui n'arrête d'apprécier mes écrits.J'espère qu'elle
            vous plaît. Merci d'avoir visité.😉
          </p>
        </div>
      </div>
      <div className="part2">
        <div className="socials">
          <center>
            <h3>Me Contacter?</h3>
          </center>
          <div className="">
            {/*Whatsapp share link 
        <a href="whatsapp://send?text=Salut Patrick, je vous contacte depuis votre application."><i className="fab fa-whatsapp" aria-hidden="true"></i></a> */}
            <a href="https://wa.me/+237696950600/?text=Salut Patrick, je vous contacte depuis votre application.">
              <i className="fab fa-whatsapp" aria-hidden="true"></i>
            </a>
            <a href="https://www.facebook.com/patrick.nkodo.75/">
              <i className="fab fa-facebook" aria-hidden="true"></i>
            </a>
            <a href="https://www.linkedin.com/in/essama-patrick-071806227/">
              <i className="fab fa-linkedin" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
