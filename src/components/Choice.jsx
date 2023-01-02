import React from 'react';
import categories from '../categories';
import { useGlobalContext } from '../context';
import poems from '../poems';
const Choice = () => {
	const { display, category, title, setTitle, text,author } = useGlobalContext();
	const filter=poems.filter((item)=>item.category==category)
	return (
		<div>
			<div className="main bg-light">
				<h5 className="main-title">
					Choisissez un exemplaire <b>en dessous</b>
				</h5>
				<div className="">
					{filter[0].items.map((item, index) => {
						return (
							<div className="examples  my-2" key={index} onClick={() => display(item.id,category)}>
								<p>{item.title}</p>
								<p className="poem-copy">{`${item.text.slice(0, 30)}...`}</p>
							</div>
						);
					})
					}
				</div>
			</div>
			<div className="display bg-light p-3">
				{title && text ? (
					<div>
						<p>
							{title}
						</p>
						<p>
							{text}
						</p>
						<span>
							<b>~{author}</b>
						</span>
					</div>
				) : (
					<div className="display-msg">
						<h4>Instructions</h4>
							<ol>
								<li>Sélectionnez un poème à gauche et il s'affichera ici.</li>
								<li>cliquez sur <b>selectionner</b> sur la bare de tâche pour passer à l'étape suivante.</li>
								<li>Après cela, vous pourrez<b>modifier</b> votre texte en cliquant sur le mot ou la phrase à modifier.</li>
								<li>Vous cliquerez ensuite sur <b>sauvegarder</b> sur la bare de tâche pour telecharger le resultat en image</li>
								
							</ol>
						
					</div>
				)}
			</div>
		</div>
	);
};

export default Choice;
