import React from 'react';
import { useGlobalContext } from '../context';
import logo from '../logo white.png';
const Poem = () => {
	const {
		name,
		reciever,
		bg,
		textColor,
		bgColor,
		overlay,
		align,
		size,
		color1,
		color2,
		direction,
		gradientPresent,
		bgImagePresent,
    font,
    weight
	} = useGlobalContext();
	console.log(bgColor);
	let style = {
		color: `${textColor}`,
		backgroundColor: `${bgColor}`,
	};
	if (gradientPresent) {
		style = { ...style, background: `linear-gradient(to ${direction}, ${color1},${color2})` };
	}
	if (bgImagePresent) {
		style = { ...style, backgroundImage: `url('${bg}')` };
	}
	console.log(size);
	return (
		<div className="">
			<div className="bg col-sm-8" style={{...style }}>
        <div className="logo" style={align=='left'?{right:'0'}:{left:'0'}}>
          <img src={logo} alt="Logo" width='100'/>
        </div>
				<div className="overlay-bg" style={{ opacity: `${overlay}` }} />
				<p className='text' style={{ textAlign:align,fontFamily:font,fontWeight:weight,fontSize: `${size}rem`,}}>
					{reciever}
					<br />
					Un jour nous vivrons ensemble.<br />
					Nous irons au supermarché,<br />
					Pour chercher de quoi manger. <br />
					{reciever}
					<br /> <br />
					Un jour naîtra notre fille.<br />
					Une princesse toute magnifique, <br />
					Qui aimera mes textes poétiques. <br />
					{reciever}
					<br /> <br />
					Un jour nous nous marierons.<br />
					Les alliances sur les doigts, <br />
					Et les nôtres dans une grande joie.<br />
					{reciever}
					<br /> <br />
					Mon rêve est de rester avec toi.<br />
					Hier, aujourd’hui, <br />
					Et que mon lendemain soit avec toi.<br />
					<span>~{name}</span>
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
