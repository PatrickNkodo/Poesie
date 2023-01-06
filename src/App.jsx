import { useState,useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Mainnav from './components/mainNav';
import Welcome from './components/Welcome';
import Form from './components/Form';
import Choice from './components/Choice';
import Poem from './components/Poem';
import Help from './components/Help';
import About from './components/About';
import WritePoem from './components/write';
import Command from './components/Command';
import { useGlobalContext } from './context';
import './index.css';
import images from './images';

function App() {
	const {
		wrapperBg,
		formOpen,
		gradientPresent,
		setFormOpen,
		choice,
		command,
		poem,
		setPoem,
		getPoem,
		openForm,
		name,
		welcome,
		help,
		about,
		bg,
		category,
		overlay,
		setOverlay,
		align,
		setAlign,
		gradient,
		direction,
		setDirection,
		size,
		setSize,
		changeBg,
		setTextColor,
		textColor,
		bgColor,
		setBgColor,
		url,
		setUrl,
		urlBg,
		backgroundColor,
		color1,
		color2,
		font,
		setFont,
		weight,
		setWeight,
		edition,
		lineHeight,
		setLineHeight,
		shadow,
		setShadow,
		write
	} = useGlobalContext();

	useEffect(()=>{
		let filter
		if(category=='Amour'){
			alert('ok')
			filter= images.filter((img)=>img.category=='Love');
		}
		console.log(filter,category);
	},[category])
	return (
		<div className="App">
			<Mainnav />
			<div className="wrapper" style={{backgroundImage:`url('${wrapperBg}')`}}>
				{welcome && (
					<div className={`welcome col-lg-8 col-md-8 col-sm-12`}>
						<Welcome />
					</div>
				)}
				{(formOpen || edition) && (
					<div className="form col-lg-8 col-md-12 col-sm-12">
						<Form />
					</div>
				)}
				{write && (
					<div className="choice write">
						<WritePoem />
					</div>
				)}
				{choice && (
					<div className="choice">
						<Choice />
					</div>
				)}
				{poem && (
					<div className="poem">
						<Poem />
					</div>
				)}
				{poem && (
					<div className="backgrounds">
						{/* <form> */}
							<input type="text"className='form-control' onChange={(e)=>setUrl(e.target.value)} value={url} placeholder="Url pour l'arriere plan"/>
							<button className='btn btn-sm mt-1 btn-dark' onClick={()=>urlBg(url)}>Definir</button>
						{/* </form> */}
						
						{images.map((item, index) => {
							return (
								<div className="img" key={index} onClick={() => changeBg(item.img)}>
									<img src={item.img} alt={item.img} />
								</div>
							);
						})}
					</div>
				)}
				{help && (
					<div className="help">
						<Help/>
					</div>
				)}
				{about && (
					<div className="about">
						<About/>
					</div>
				)}
				{command && (
					<div className="form col-lg-8 col-md-12 col-sm-12">
						<Command/>
					</div>
				)}

				{poem && (
					<div className="modifications">
						<div className="font-size">
							<span>Taille de police:</span>
							<input
								type=""
								type="range"
								min="5"
								max="100"
								step="any"
								onChange={(e) => setSize(e.target.value)}
								value={size}
							/>
						</div>
						<div className="overlay">
							<span>Exposure:</span>
							<input
								type=""
								type="range"
								min="0"
								max="1"
								step="any"
								onChange={(e) => setOverlay(e.target.value)}
								value={overlay}
							/>
						</div>
						<div className="overlay">
							<span>Gras:</span>
							<input
								type=""
								type="range"
								min="500"
								max="600"
								step="100"
								onChange={(e) => setWeight(e.target.value)}
								value={weight}
							/>
						</div>
						<div className="line-height">
							<span>Espacement:</span>
							<input
								type="range"
								min="0"
								max="5"
								step="any"
								onChange={(e) => setLineHeight(e.target.value)}
								value={lineHeight}
							/>
						</div>
						<div className="shadow">
							<span>Ombre de texte:</span>
							<input
								type="range"
								min="0"
								max="1"
								step="any"
								onChange={(e) => setShadow(e.target.value)}
								value={shadow}
							/>
						</div>
						<div className="align">
							<span>Aligner</span><br/>
							<select name="" id="align" onChange={(e) => setAlign(e.target.value)} value={align}>
								<option value="left">Gauche</option>
								<option value="center">Centre</option>
								<option value="right">Droite</option>
								{/* <option value="justify">Justify</option> */}
							</select>
						</div>
						<div className="font">
							<span>Police</span>
							<select name="" id="aligh" onChange={(e) => setFont(e.target.value)} value={font}>
								<option value="Arial">Arial</option>
								<option value="Cambria">Cambria</option>
								<option value="Cursive">Cursive</option>
								<option value="Fantasy">Fantasy</option>
								<option value="Georgia">Georgia</option>
								<option value="Impact">Impact</option>
								<option value="monospace">Monospace</option>
								<option value="Times New Roman">Times New Roman</option>
								<option value="Trebuchet Ms">Trebuchet Ms</option>
								<option value="verdana">Verdana</option>
								{/* <option value="justify">Justify</option> */}
							</select>
						</div>
						<div className="colors">
							<span>Couleur de texte</span>
							<input
								type="color"
								className="form-control"
								onChange={(e) => setTextColor(e.target.value)}
								value={textColor}
							/>
						</div>
						<hr/>
						<div className="bgcolors">
							<span>Arrière plan</span>
							<input
								type="color"
								className="form-control"
								onChange={(e) => backgroundColor(e.target.value)}
								value={bgColor}
							/>
						</div>
						<hr/>
						<div className="gradient">
							<span>Dégradé</span>
							<div className="">
							
							<label htmlFor="">Couleur1 </label>
							<input
								type="color"
								className="form-control"
								onChange={(e) => gradient(e.target.value, color2)}
								value={color1}
							/>
							<label htmlFor="">Couleur2 </label>
							<input
								type="color"
								className="form-control"
								onChange={(e) => gradient(color1, e.target.value)}
								value={color2}
							/>
							<div className="">
							<span>Direction </span>
							<select
								name=""
								id="direction"
								onChange={(e) => setDirection(e.target.value)}
								value={direction}
							>
								<option value="left">Droite-Gauche</option>
								<option value="right">Gauche-Droite</option>
								<option value="top">Bas-Haut</option>
								<option value="bottom">Haut-Bas</option>
							</select>
							</div>
							</div>
						</div>
						<hr/>
					</div>
				)}
			</div>
		</div>
	);
}

export default App;
