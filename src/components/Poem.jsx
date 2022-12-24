import React from 'react';
import {useGlobalContext} from '../context'
const Poem = () => {
  const {name,reciever,bg,textColor,bgColor,setBg,target}=useGlobalContext();
  console.log(bgColor);
	return (
		<div className="">
      <div className="bg col-sm-8" style={{backgroundImage:`url('${bg}')`,color:`${textColor}`,backgroundColor:`${bgColor}`}}>
      <div className="overlay-bg"></div>
			<p>
        {reciever}<br/>
				Un jour nous vivrons ensemble.<br/>
        Nous irons au supermarché,<br/>
        Pour chercher de quoi manger. <br/>
        <br/>
        {reciever}<br/> 
        Un jour naîtra notre fille.<br/> 
        Une princesse toute magnifique, <br/>
        Qui aimera mes textes poétiques. <br/>
        <br/>
        {reciever}<br/> 
        Un jour nous nous marierons.<br/> 
        Les alliances sur les doigts, <br/>
        Et les nôtres dans une grande joie.<br/> 
        <br/>
        {reciever}<br/> 
        Mon rêve est de rester avec toi.<br/> 
        Hier, aujourd’hui, <br/>
        Et que mon lendemain soit avec toi.<br/> 
        <span>~{name}</span><br/>
			</p>
		</div>
     {/* <div className="add-bg">
        <label  htmlFor='filea' className=''>Change Background </label>
       <div className="col-8"> <input type="file" id='file'  onChange={(e)=>setBg(e.target.value)} value={bg} className='form-control' required/></div>
     </div> */}
    </div>
	);
};

export default Poem;
