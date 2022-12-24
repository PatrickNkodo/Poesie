import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Mainnav from './components/mainNav';
import Welcome from './components/Welcome';
import Form from './components/Form';
import Poem from './components/Poem';
import { useGlobalContext } from './context';
import './index.css';
import images from './images';

function App() {
	const { formOpen, setFormOpen, poem, setPoem, getPoem, openForm, name, welcome, bg,overlay,setOverlay, changeBg,setTextColor,textColor,bgColor,setBgColor,backgroundColor} = useGlobalContext();
	console.log(textColor);
	return (
		<div className="App">
			<Mainnav />
			<div className="wrapper">
				{welcome && (
					<div className={`welcome col-lg-8 col-md-8 col-sm-12`}>
						<Welcome />
					</div>
				)}
				{formOpen && (
					<div className="form col-lg-8 col-md-8 col-sm-12">
						<Form />
					</div>
				)}
				{poem && (
					<div className="poem">
						<Poem />
					</div>
				)}
				{poem && (
					<div className="backgrounds">
						{images.map((item, index) => {
							return (
								<div className="img" key={index} onClick={() => changeBg(item.img)}>
									<img src={item.img} width="100" height="100" alt="img" />
								</div>
							);
						})}
					</div>
				)}
				{poem && (
					<div className="modifications">
						<div className="overlay">
						<span>Overlay:</span>
							<input type=''type="range" min="0" max="1" step="any" onChange={(e)=>setOverlay(e.target.value)} value={overlay}/>
						</div>
						<div className="colors">
							<span>Backround Color</span>
							<input type="color" className='form-control' onChange={(e)=>backgroundColor(e.target.value)} value={bgColor}/>

						</div>
						<div className="align">
							<span>Align Text </span>
							<select name="" id="">
								<option value="left" >Left</option>
								<option value="center">Center</option>
								<option value="right" selected>Right</option>
							</select>
						</div>
						<div className="colors">
							<span>Text Color</span>
							<input type="color" className='form-control' onChange={(e)=>setTextColor(e.target.value)} value={textColor}/>

						</div>
					</div>
				)}
			</div>
		</div>
	);
}

export default App;
