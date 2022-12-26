import React from 'react'
import Me from './Me.jpg'
const About = () => {
  return (
    <div>
      <div className="part1">
        <h1>About Me</h1>
        <img src={Me} width='400' alt="Picture"/>
        <p>Hey! Welcome to my page. I'm called Patrick Nkodo.
          I like giving my name in this format at the end of my poems to be marked as the author.
          I'm a Software Engineering student in Cameroon, at the Siantou University Institute, interested in web programming.
          All the new skills I learn, I try to practice it. It's in that vision that I built this small poetry project.
          Hope it's interesting to you. Also, Im available on different social networks as listed below. Thanks for visiting.😉
        </p>
      </div>
      <div className="part2">
       <h1>Why this project</h1>
       <p>I am very interested in poetry, I might not yet follow all the rules due to ignorance, but
         a dream I have, is to valorise the gift God gave me (inspiration to write), so as to please myself, as well as that small community,
         which appreciates the few poems I write.
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
