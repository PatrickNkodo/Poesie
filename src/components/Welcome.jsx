import React from 'react'
import {useGlobalContext} from '../context'
import { useEffect } from 'react'
const Welcome =   () => {
  const {openForm}=useGlobalContext();

  return (
    <div className='col-lg-10 col-md-10 col-sm-12'>
       <h4>Welcome to you.</h4>
       <p>I'm happy to have you here. I wish you a happy christmas celebration,
          as well as to your friends. I will do so with a poem, because that's all I can offer for now😊.
       </p>
       <button className='btn btn-primary' onClick={openForm}>Click here to continue</button>
    </div>
  )
}

export default Welcome;
