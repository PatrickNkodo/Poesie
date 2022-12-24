import { useGlobalContext } from '../context';

const Form = () => {
const {name,reciever,setName,setReciever,getPoem,onchangeHandler}=useGlobalContext()
  return (
    <div>
       <form action="" >
          <label htmlFor="Your Name">Who is offering the poem?<span>(This name will figure as the author)</span></label>
          <input type="text" className='form-control' placeholder='Enter your name' onChange={(e)=>setName(e.target.value)} value={name} required/>
          <label htmlFor="">To whom are you offering the poem</label>
          <input type="text" className='form-control' onChange={(e)=>setReciever(e.target.value)} value={reciever} placeholder="Enter the reciever's name here" required/>
          <button className='btn btn-primary mt-2' onClick={getPoem}>Get the poem</button>
       </form>
    </div>
  )
}

export default Form;
