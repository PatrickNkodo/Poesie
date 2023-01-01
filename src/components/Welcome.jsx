import React from 'react'
import {useGlobalContext} from '../context'
import { useEffect } from 'react'
const Welcome =   () => {
  const {openForm}=useGlobalContext();

  return (
    <div className='col-lg-10 col-md-10 col-sm-12'>
       <h4>Bienvenu(e) à vous!</h4>
       <p>Content de vous voir ici. Sentez-vous à laise ici. Le monde de la poésie est à nous pendant ce petit momment passé ensemble.
          Cliquez sur Continuer pour passer à la prochaine étape. Il y'a bien un poème chez moi qui te remuera des souvenirs😊.
       </p>
       <button className='btn btn-primary' onClick={openForm}>Continuer</button>
    </div>
  )
}

export default Welcome;
