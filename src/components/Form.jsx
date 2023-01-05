import { useGlobalContext } from '../context';
import React,{useEffect,useRef} from 'react'
import categories from '../categories'
const Form = () => {
  // const input=useRef();
  // useEffect(()=>{
  //   input.current.focus()
  // })
const {name,category,setName,setCategory,getPoem,getChoice,composition,setComposition,what,setWhat}=useGlobalContext()
  return (
    <div>
       <form action="" >
          <label htmlFor="Your Name">Votre Nom<span>(Ce nom figurera comme étant l'auteur de vos poèmes)</span></label>
          <input type="text" autoFocus className='form-control' placeholder='Entrez votre nom' onChange={(e)=>setName(e.target.value)} value={name} required/>
          
          <div className="form-group">
         <label htmlFor="">Que voulez-vous écrire</label><br/>
          <select name="" id="" className='form-control' onChange={(e)=>setWhat(e.target.value)} value={what} required>
            <option value="">Veillez faire un choix</option>
            <option value="poem">Poème</option>
            <option value="quote">Citation</option>
          </select>
         </div>

          {what=='poem' && <React.Fragment>
            <label htmlFor="">Catégorie du poème</label>
            <select name="" id="" className='form-control' placeholder='Choose' onChange={(e)=>setCategory(e.target.value)} value={category} required>
              <option value=''>Veillez faire un choix...</option>
              {categories.map((x,i)=>{
                return <option key={i} value={x.category}>{x.category}</option>
              })}
            </select>
            <div className="form-group">
              <label htmlFor="">Composition du poème</label><br/>
                <select name="" id="" className='form-control' onChange={(e)=>setComposition(e.target.value)} value={composition}>
                  <option value="help">Je vous propose quelques poèmes à modifier</option>
                  <option value="alone">Par vous même uniquement</option>
                </select>
            </div>
            </React.Fragment>}
          {what=='quote' && <React.Fragment>
            <label htmlFor="">Catégorie de la Citation</label>
            <select name="" id="" className='form-control' placeholder='Choose' onChange={(e)=>setCategory(e.target.value)} value={category} required>
              <option value=''>Veillez faire un choix...</option>
              {categories.map((x,i)=>{
                return <option key={i} value={x.category}>{x.category}</option>
              })}
            </select>
            </React.Fragment>}
          
        
         
          <button className='btn btn-primary mt-2' onClick={getChoice}>{what=='poem'? 'Ecrire le poème' : 'Ecrire la Citation'}</button>
       </form>
    </div>
  )
}

export default Form;
