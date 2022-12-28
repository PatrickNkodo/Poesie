import { useGlobalContext } from '../context';
import React,{useEffect,useRef} from 'react'
import categories from '../categories'
const Form = () => {
  // const input=useRef();
  // useEffect(()=>{
  //   input.current.focus()
  // })
const {name,category,setName,setCategory,getPoem,getChoice}=useGlobalContext()
  return (
    <div>
       <form action="" >
          <label htmlFor="Your Name">Qui offre le poème?<span>(Ce nom figurera comme étant l'auteur)</span></label>
          <input type="text" autoFocus className='form-control' placeholder='Entrez votre nom' onChange={(e)=>setName(e.target.value)} value={name} required/>
          <label htmlFor="">Catégorie du poème</label>
          <select name="" id="" className='form-control' placeholder='Choose' onChange={(e)=>setCategory(e.target.value)} value={category} required>
            <option value=''>Veillez faire un choix...</option>
            {categories.map((x,i)=>{
              return <option key={i} value={x.category}>{x.category}</option>
            })}
          </select>
          
          <button className='btn btn-primary mt-2' onClick={getChoice}>Choisir un poème</button>
       </form>
    </div>
  )
}

export default Form;
