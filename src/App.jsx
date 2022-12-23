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
	const { formOpen, setFormOpen, poem, setPoem, getPoem, openForm, name, welcome, bg, changeBg } = useGlobalContext();
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
					<div className="poem col-lg-8 col-md-8 col-sm-12">
						<Poem />
					</div>
				)}
				{poem && (
					<div className="backgrounds">
						{images.map((item, index) => {
							return (
								<div className="image" key={index} onClick={() => changeBg(item.img)}>
									<img src={item.img} width="100" height="100" alt="img" />
								</div>
							);
						})}
					</div>
				)}
				{poem && (
					<div className="modifications">
						<div className="align">
							<span>Align Text</span>
							<select name="" id="">
								<option value="left" >Left</option>
								<option value="center">Center</option>
								<option value="right" selected>Right</option>
							</select>
						</div>
						<div className="overlay">
						<label htmlFor="">Overlay:</label>
							<input type=''type="range" min="0" max="1" step="any"/>
						</div>
						<div className="colors">
							<span>Backround Color</span>

						</div>
					</div>
				)}
			</div>
		</div>
	);
}

export default App;
