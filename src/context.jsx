import React, { useState, createContext, useContext, useEffect } from 'react';
import Poems from './poems'
import html2canvas from 'html2canvas'
// import sublinks from './data'
const AppContext = createContext();
const AppProvider = ({ children }) => {
	const [ welcome, setWelcome ] = useState(false);
	const [ bg, setBg ] = useState('');
	const [choice,setChoice]=useState(true)
	const [title,setTitle]=useState('')
	const [text,setText]=useState('')
	const [lineHeight,setLineHeight]=useState('')
	const [ formOpen, setFormOpen ] = useState(false);
	const [ help, sethelp ] = useState(false);
	const [ about, setAbout ] = useState(false);
	const [ poem, setPoem ] = useState(false);
	const [ name, setName ] = useState('');
	const [ category, setCategory ] = useState('');
	const [edition,setEdition]=useState(false)
	const [ overlay, setOverlay ] = useState(0);
	const [ align, setAlign ] = useState('left');
	const [ size, setSize ] = useState(.7);
	const [ textColor, setTextColor ] = useState('#ffffff');
	const [ bgColor, setBgColor ] = useState('#000000');
	const [ gradientPresent, setgradientPresent ] = useState(false);
	const [ bgImagePresent, setbgImagePresent ] = useState(false);
	const [ color1, setColor1 ] = useState('#000000');
	const [ color2, setColor2 ] = useState('#000000');
	const [ direction, setDirection ] = useState('bottom');
	const [ font, setFont ] = useState('Times New Roman');
	const [ weight, setWeight ] = useState(300);
	const [tab,setTab]=useState('Accueil');
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
		if(name && category){		
			setPoem(true)
			setChoice(false)
			sethelp(false)
			setWelcome(false);
			setFormOpen(false);
			setAbout(false)
		}
		else if(!(title && text)){
			setChoice(true)
			setPoem(false)
			sethelp(false)
			setWelcome(false);
			setFormOpen(false);
			setAbout(false)
		}
		else{
			setWelcome(true);
			setChoice(false)
			setPoem(false)
			sethelp(false)
			setFormOpen(false);
			setAbout(false)
		}
	};
	const helpFxn = (e) => {
		setTab(e.target.innerText)
		sethelp(true)
		setChoice(false)
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
	const display=(x)=>{
		// alert('ok')
		const tmp=Poems.filter((poem)=>poem.id===x)
		const {id,title,text}=tmp[0];
		setTitle(title)
		setText(text)
	}
	//BG Image
	const changeBg = (item) => {
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
	const getPoem = () => {
		if(!(title && text)){
			alert('Please make a choice first')
			return
		}
		setPoem(true);
		setChoice(false)
		setFormOpen(false);
		setWelcome(false)
		setAbout(false)
		sethelp(false)
		setEdition(false)
	};
	const getChoice = () => {
		if(!(name && category)){
			alert('Veillez remplir tous les champs svp!')
			return;
		}
		setChoice(true)
		setPoem(false);
		setFormOpen(false);
		setWelcome(false)
		setAbout(false)
		sethelp(false)
		setEdition(false)
	};
	
	const editing = () => {
		setFormOpen(true);
		setEdition(true)
		setPoem(false);
		setWelcome(false)
		setAbout(false)
		sethelp(false)
	};
	const changePoem = () => {
		setChoice(true)
		setFormOpen(false);
		setPoem(false);
		setWelcome(false)
		setAbout(false)
		sethelp(false)
	};

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
	const capture=()=>{
		document.querySelector('.img').remove()
		let div=document.createElement("div")
		div.classList.add('img')
        html2canvas(document.querySelector(`#capture`)).then(canvas => {
            document.querySelector(`.modal-body`).appendChild(div).appendChild(canvas)
        });
		// alert('ok')
    }
	return (
		<AppContext.Provider
			value={{
				openForm,
				getPoem,
				formOpen,
				setFormOpen,
				choice,
				setChoice,
				getChoice,
				display,
				title,
				setTitle,
				text,
				setText,
				homeFxn,
				poem,
				setPoem,
				name,
				setName,
				category,
				setCategory,
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
				aboutFxn,
				edition,
				setEdition,
				editing,
				lineHeight,
				setLineHeight,
				changePoem,
				capture
			}}
		>
			{children}
		</AppContext.Provider>
	);
};
export const useGlobalContext = () => useContext(AppContext);
export { AppProvider, AppContext };
