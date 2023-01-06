import { useGlobalContext } from '../context';
import React,{useEffect,useRef} from 'react'
import categories from '../categories'
const Command = () => {
  // const input=useRef();
  // useEffect(()=>{
  //   input.current.focus()
  // })
  const {commandName,setCommandName,sendRequest,commandMsg,setCommandMsg,prevent,commandWhere,setCommandWhere,getPoem,getChoice,composition,setComposition,commandWhat,setCommandWhat,commandRequest}=useGlobalContext()
  return (
    <div className='command'>
       <form onSubmit={sendRequest}>
          <label htmlFor="Your Name">Votre Nom</label>
          <input type="text" autoFocus className='form-control' placeholder='Entrez votre nom' onChange={(e)=>setCommandName(e.target.value)} value={commandName} required/>
          
          <div className="form-group">
         <label htmlFor="">De quoi avez-vous besoin?</label><br/>
          <select name="" id="" className='form-control' onChange={(e)=>setCommandWhat(e.target.value)} value={commandWhat} required>
            <option value="">Veillez faire un choix</option>
            <option value="poem">Poème</option>
            <option value="quote">Citation</option>
          </select>
         </div>
         <div className="form-group mt-2">
              <label htmlFor="" className='text-secondary font-weight-bolder command-text'>Pour un travail reussi, j'ai besoin de quelques informations sur vous, ou sur la personne à qui le service est destiné. Dites-moi tous ce que je dois savoir pour un meilleur service rendu.</label><br/>
                <textarea value={commandMsg} onChange={(e)=>setCommandMsg(e.target.value)} className="form-control" id="" cols="30" rows="5" placeholder={`Example: Patrick est mon frère, et je voudrais ${commandWhat=='poem'?'un poème': 'une citation'} pour son anniversaire. 
                C'est un garçon reservé, qui a vécu tant de moments avec moi. Dans le poème, incluez le fait que je le remercie encore de m'avoir montré le chemin de Dieu. Je voudrais qu'il sache que ce fût le plus beau cadeau à mes yeux.
                Aussi, il a toujours voulu recevoir un poème venant d'une amie, alors ajoute une phrase du genre 'Voici le poème que tu as toujours voulou'.`} required></textarea>
            </div>
          {commandWhat && <React.Fragment>
            <label htmlFor="">Commander {commandWhat=='poem'? 'le poème' :'la citation'} par quel réseau:</label>
            <select name="" id="" className='form-control' placeholder='Choose' onChange={(e)=>setCommandWhere(e.target.value)} value={commandWhere} required>
              <option value=''>Veillez faire un choix...</option>
             <option value="Facebook">Facebook</option>
             <option value="Whatsapp">Whatsapp</option>
             <option value="LinkedIn">LinkedIn</option>
            </select>
            </React.Fragment>}
         
          {commandWhat && <button type='submit' className='btn btn-primary mt-2' onClick={commandRequest}>{commandWhat=='poem'? 'Commander le poème' : 'Commander la Citation'}</button>}
       </form>
    </div>
  )
}

export default Command;
