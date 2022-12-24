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
	const { formOpen,colorPresent, setFormOpen, poem, setPoem, getPoem, openForm, name, welcome, bg,overlay,setOverlay,align,setAlign,gradient,direction,setDirection,size,setSize,changeBg,setTextColor,textColor,bgColor,setBgColor,backgroundColor,color1,color2} = useGlobalContext();
	console.log(colorPresent);
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
						<div className="overlay">
						<span>Font-Size:</span>
							<input type=''type="range" min="5" max="30" step="1" onChange={(e)=>setSize(e.target.value)} value={size}/>
						</div>
						<div className="colors">
							<span>Backround Color</span>
							<input type="color" className='form-control' onChange={(e)=>backgroundColor(e.target.value)} value={bgColor}/>

						</div>
						<div className="Gradient">
							<span>Backround Gradient</span><br/>
							<label htmlFor="">Color1 </label>
							<input type="color" className='form-control' onChange={(e)=>gradient(e.target.value,color2)} value={color1}/>
							<label htmlFor="">Color2 </label>
							<input type="color" className='form-control' onChange={(e)=>gradient(color1,e.target.value)} value={color2}/>
							<span>Direction </span>
							<select name="" id="direction"onChange={(e)=>setDirection(e.target.value)} value={direction}>
								<option value="left" >Right-Left</option>
								<option value="right">Left-Right</option>
								<option value="top">Bottom-Top</option>
								<option value="bottom">Top-Bottom</option>
							</select>

						</div>
						<div className="align">
							<span>Align Text </span>
							<select name="" id="aligh"onChange={(e)=>setAlign(e.target.value)} value={align}>
								<option value="left" >Left</option>
								<option value="center">Center</option>
								<option value="right">Right</option>
								<option value="justify">Justify</option>
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
