import React from 'react';
import { useGlobalContext } from '../context';
const Poem = () => {
	const { name, reciever, bg, textColor, bgColor, overlay, align,size,color1,color2,direction,colorPresent} = useGlobalContext();
	console.log(bgColor);
  const style={
    fontSize: `${size}px`,
    color: `${textColor}`, 
    backgroundColor: `${bgColor}`,
    backgroundImage:`url('${bg}')`,
    
  }

	return (
		<div className="">
			<div
				className="bg col-sm-8"
				style={!colorPresent?{...style,background:`linear-gradient(to ${direction}, ${color1},${color2})`} : {...style}}
			>
				<div className="overlay-bg" style={{ opacity: `${overlay}` }} />
				<p style={{ textAlign: `${align}`}}>
					{reciever}
					<br />
					Un jour nous vivrons ensemble.<br />
					Nous irons au supermarché,<br />
					Pour chercher de quoi manger. <br />
					{reciever}
					<br />
					Un jour naîtra notre fille.<br />
					Une princesse toute magnifique, <br />
					Qui aimera mes textes poétiques. <br />
					{reciever}
					<br />
					Un jour nous nous marierons.<br />
					Les alliances sur les doigts, <br />
					Et les nôtres dans une grande joie.<br />
					{reciever}
					<br />
					Mon rêve est de rester avec toi.<br />
					Hier, aujourd’hui, <br />
					Et que mon lendemain soit avec toi.<br />
					<span>~{name}</span>
					<br />
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
