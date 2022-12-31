import React from 'react';
import categories from '../categories';
import { useGlobalContext } from '../context';
import poems from '../poems';
const Choice = () => {
	const { display, category,title,text} = useGlobalContext();
	// console.log(data);
	return (
		<div>
			<div className="main bg-light">
				<h5 className='main-title'>Choisissez un exemplaire <b>en dessous</b></h5>
				<div className="">
				{
					poems.map((item, index) => {
						return (
									<div className="examples  my-2" key={index} onClick={()=>display(item.id)}>
										<p>{item.title}</p>
										<p className="poem-copy">{`${item.text.slice(0,30)}...`}</p>
									</div>
						);
					})
					// data.filter((item)=>item.category==category)
				}
				</div>
			</div>
			<div className="display bg-light p-3">
				{title && text ? (
				<React.Fragment>
					<p>{title}</p>
					<p>{text}</p>
					<span><b>~Votre nom</b></span>
				</React.Fragment>
				) 
				: <div className='display-msg'><h4 >Sélectionnez un poème à gauche, il s'affichera ici. Puis cliquez sur <b>selectionner</b> pour passer à l'étape suivante.</h4></div>}
			</div>
		</div>
	);
};

export default Choice;
