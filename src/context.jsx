import React, { useState, createContext, useContext, useEffect } from 'react';
// import sublinks from './data'
const AppContext = createContext();
const AppProvider = ({ children }) => {
	const [ welcome, setWelcome ] = useState(false);
	const [ bg, setBg ] = useState('');
	const [ formOpen, setFormOpen ] = useState(false);
	const [ poem, setPoem ] = useState(true);
	const [ name, setName ] = useState('My Name');
	const [ reciever, setReciever ] = useState('Dany');
	const [ overlay, setOverlay ] = useState(0.5);
	const [ align, setAlign ] = useState('left');
	const [ size, setSize ] = useState(20);
	const [ textColor, setTextColor ] = useState('#ffffff');
	const [ bgColor, setBgColor ] = useState('#000000');
	const [ colorPresent, setColorPresent ] = useState(false);
	const [ color1, setColor1 ] = useState('');
	const [ color2, setColor2 ] = useState('');
	const [ direction, setDirection ] = useState('bottom');
	// useEffect(()=>{
	// 	// color1='#000000';
	// 	// color2='#000000'
	// 	alert(color1)
	// },[])
	const openForm = (e) => {
		console.log('ok');
		// e.preventDefault()
		setWelcome(false);
		setFormOpen(true);
	};
	const changeBg = (item) => {
		console.log(item);
		setBg(item);
	};
	const backgroundColor = (x) => {
		setBgColor(x);
		setBg('');
		setColorPresent(true)
	};
	const getPoem = (e) => {
		// e.preventDefault()
		setFormOpen(false);
		// setWelcome(false)
		setPoem(true);
	};
	const gradient = (a,b) => {
		// setWelcome(false)
		setBg('');
		setBgColor('');
		setColor1(a)
		setColor2(b)
		setColorPresent(false)
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
				poem,
				setPoem,
				name,
				setName,
				reciever,
				setReciever,
				changeBg,
				welcome,
				bg,
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
				colorPresent,
				gradient,
				color1,
				color2,
				direction,
				setDirection
			}}
		>
			{children}
		</AppContext.Provider>
	);
};
export const useGlobalContext = () => useContext(AppContext);
export { AppProvider, AppContext };
