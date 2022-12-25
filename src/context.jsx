import React, { useState, createContext, useContext, useEffect } from 'react';
// import sublinks from './data'
const AppContext = createContext();
const AppProvider = ({ children }) => {
	const [ welcome, setWelcome ] = useState(true);
	const [ bg, setBg ] = useState('');
	const [ formOpen, setFormOpen ] = useState(false);
	const [ help, sethelp ] = useState(false);
	const [ about, setAbout ] = useState(false);
	const [ poem, setPoem ] = useState(false);
	const [ name, setName ] = useState('');
	const [ reciever, setReciever ] = useState('');
	const [ overlay, setOverlay ] = useState(0);
	const [ align, setAlign ] = useState('left');
	const [ size, setSize ] = useState(1);
	const [ textColor, setTextColor ] = useState('#ffffff');
	const [ bgColor, setBgColor ] = useState('#000000');
	const [ gradientPresent, setgradientPresent ] = useState(false);
	const [ bgImagePresent, setbgImagePresent ] = useState(false);
	const [ color1, setColor1 ] = useState('#000000');
	const [ color2, setColor2 ] = useState('#000000');
	const [ direction, setDirection ] = useState('bottom');
	const [ font, setFont ] = useState('Times New Roman');
	const [ weight, setWeight ] = useState(100);
	const [tab,setTab]=useState('Home');
	// useEffect(()=>{
	// 	// color1='#000000';
	// 	// color2='#000000'
	// 	alert(color1)
	// },[])
	const openForm = () => {
		setFormOpen(true);
		setWelcome(false);
		setAbout(false)
		sethelp(false)
		setPoem(false)
	};
	const homeFxn = (e) => {
		setTab(e.target.innerText)
		if(name && reciever){		
			setPoem(true)
			sethelp(false)
			setWelcome(false);
			setFormOpen(false);
			setAbout(false)
		}else{
			setWelcome(true);
			setPoem(false)
			sethelp(false)
			setFormOpen(false);
			setAbout(false)
		}
	};
	const helpFxn = (e) => {
		setTab(e.target.innerText)
		sethelp(true)
		setPoem(false)
		setWelcome(false);
		setFormOpen(false);
		setAbout(false)
	};
	const aboutFxn = (e) => {
		setTab(e.target.innerText)
		setAbout(true)
		setPoem(false)
		sethelp(false)
		setWelcome(false);
		setFormOpen(false);
	};
	//BG Image
	const changeBg = (item) => {
		console.log(item);
		setBg(item);
		setbgImagePresent(true);
		setgradientPresent(false);
	};
	//Bg Color
	const backgroundColor = (x) => {
		setBgColor(x);
		setbgImagePresent(false)
		setgradientPresent(false);
	};
	const getPoem = (e) => {
		setFormOpen(false);
		setWelcome(false)
		setAbout(false)
		sethelp(false)
		setPoem(true);
	};
	console.log(tab);
	//Bg Gradient
	const gradient = (a, b) => {
		// setWelcome(false)
		setBg('');
		setColor1(a);
		setColor2(b);
		setgradientPresent(true);
		setbgImagePresent(false);
	};
	const overlayHandler = (e) => {
		setOverlay(e.target.value);
		console.log(e.target.value);
	};

	return (
		<AppContext.Provider
			value={{
				openForm,
				getPoem,
				formOpen,
				setFormOpen,
				homeFxn,
				poem,
				setPoem,
				name,
				setName,
				reciever,
				setReciever,
				changeBg,
				welcome,
				bg,
				tab,
				setBg,
				size,
				setSize,
				overlay,
				setOverlay,
				overlayHandler,
				align,
				setAlign,
				textColor,
				setTextColor,
				bgColor,
				setBgColor,
				backgroundColor,
				gradientPresent,
				gradient,
				color1,
				color2,
				direction,
				setDirection,
				bgImagePresent,
				setbgImagePresent,
				font,
				setFont,
				weight,
				setWeight,
				help,
				about,
				helpFxn,
				aboutFxn
			}}
		>
			{children}
		</AppContext.Provider>
	);
};
export const useGlobalContext = () => useContext(AppContext);
export { AppProvider, AppContext };
