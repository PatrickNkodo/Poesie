import React, { useState, createContext, useContext, useEffect } from 'react';
import axios from 'axios'
import Poems from './poems';
import html2canvas from 'html2canvas';
import poems from './poems';
// import sublinks from './data'
const AppContext = createContext();
const AppProvider = ({ children }) => {
	const [ wrapperBg, setWrapperBg ] = useState('/images/New folder/img1 (6).jpg');
	const [ welcome, setWelcome ] = useState(true);
	const [ command, setCommand ] = useState(false);
	const [ commandName, setCommandName ] = useState('');
	const [ commandWhere, setCommandWhere ] = useState('');
	const [ commandWhat, setCommandWhat ] = useState('');
	const [ commandMsg, setCommandMsg ] = useState('');
	const [ bg, setBg ] = useState('');
	const [image,setImage]=useState('')
	const [ choice, setChoice ] = useState(false);
	const [ title, setTitle ] = useState('');
	const [ text, setText ] = useState('');
	const [ author, setAuthor ] = useState('');
	const [ lineHeight, setLineHeight ] = useState('');
	const [ formOpen, setFormOpen ] = useState(false);
	const [ help, sethelp ] = useState(false);
	const [ about, setAbout ] = useState(false);
	const [ itsPoem, setItsPoem ] = useState(false);
	const [ poem, setPoem ] = useState(false);
	const [ what, setWhat ] = useState('');
	const [ name, setName ] = useState('');
	const [ composition, setComposition ] = useState('help');
	const [ write, setWrite ] = useState(false);
	const [ category, setCategory ] = useState('');
	const [ edition, setEdition ] = useState(false);
	const [ overlay, setOverlay ] = useState(0);
	const [ align, setAlign ] = useState('left');
	const [ size, setSize ] = useState(60);
	const [ textColor, setTextColor ] = useState('#ffffff');
	const [ bgColor, setBgColor ] = useState('#000000');
	const [ url, setUrl ] = useState('');
	const [ gradientPresent, setgradientPresent ] = useState(false);
	const [ bgImagePresent, setbgImagePresent ] = useState(false);
	const [ color1, setColor1 ] = useState('#000000');
	const [ color2, setColor2 ] = useState('#000000');
	const [ shadow, setShadow ] = useState(0);
	const [ direction, setDirection ] = useState('bottom');
	const [ font, setFont ] = useState('Arial');
	const [ weight, setWeight ] = useState(300);
	const [ tab, setTab ] = useState('Accueil');
	// useEffect(()=>{
	// 	// color1='#000000';
	// 	// color2='#000000'
	// 	alert(color1)
	// },[])
	const prevent = (e) =>{
		alert('stopped')
		e.preventDefault();
	} 
	const openForm = () => {
		setFormOpen(true);
		setWrite(false);
		setWelcome(false);
		setAbout(false);
		sethelp(false);
		setPoem(false);
		setCommand(false);
	};
	const homeFxn = (e) => {
		setTab(e.target.innerText);
		if (name && what && category && composition) {
			// setPoem(true)
			// setWrite(false)
			// setChoice(false)
			// sethelp(false)
			// setWelcome(false);
			// setFormOpen(false);
			// setAbout(false)
			if (composition == 'help') {
				if (!text) {
					setChoice(true);
					setWrite(false);
					setPoem(false);
					sethelp(false);
					setWelcome(false);
					setFormOpen(false);
					setAbout(false);
					setCommand(false);
				} else {
					setPoem(true);
					setWrite(false);
					setChoice(false);
					sethelp(false);
					setWelcome(false);
					setFormOpen(false);
					setAbout(false);
					setCommand(false);
				}
			} else if (composition == 'alone') {
				if (!text) {
					setWrite(true);
					setChoice(false);
					setPoem(false);
					sethelp(false);
					setWelcome(false);
					setFormOpen(false);
					setAbout(false);
					setCommand(false);
				} else {
					setPoem(true);
					setWrite(false);
					setChoice(false);
					sethelp(false);
					setWelcome(false);
					setFormOpen(false);
					setAbout(false);
					setCommand(false);
				}
			}
		} else {
			setFormOpen(true);
			setWelcome(false);
			setWrite(false);
			setChoice(false);
			setPoem(false);
			sethelp(false);
			setAbout(false);
			setCommand(false);
		}
	};
	const helpFxn = (e) => {
		setTab(e.target.innerText);
		sethelp(true);
		setWrite(false);
		setChoice(false);
		setPoem(false);
		setWelcome(false);
		setFormOpen(false);
		setAbout(false);
		setCommand(false);
	};
	const aboutFxn = (e) => {
		setTab(e.target.innerText);
		setAbout(true);
		setChoice(false)
		setWrite(false);
		setPoem(false);
		sethelp(false);
		setWelcome(false);
		setFormOpen(false);
		setCommand(false);
	};

	const display = (ID, category) => {
		const filterCategory = poems.filter((item) => item.category == category);
		filterCategory.map((poem) => {
			let myPoem = poem.items.filter((x) => x.id == ID);
			myPoem.map((data) => {
				const { id, title, text, author } = data;
				setTitle(title);
				setText(text);
				setAuthor(author);
			});
		});
	};
	let date = new Date();
	let time = date.getHours();
	//BG Image
	const changeBg = (item) => {
		setBg(item);
		setbgImagePresent(true);
		setgradientPresent(false);
	};
	const urlBg = async (url) => {
		// e.preventDefault();
		setbgImagePresent(true);
		setgradientPresent(false);
		const res = await fetch(url);
		const img = await res.blob(); //res.json for text files
		let localUrl = URL.createObjectURL(img); //Necessary method to convert url to image
		changeBg(localUrl);
	};
	// .catch((Error)=>console.log(Error))

	useEffect(() => {
		urlBg();
	}, []); 
	const urlBgHandler=()=>{
		let img=document.getElementById('bgUrl')
		changeBg(img.value);
	}
	//Bg Color
	const backgroundColor = (x) => {
		setBgColor(x);
		setbgImagePresent(false);
		setgradientPresent(false);
	};
	const getPoem = () => {
		if (!(name && text)) {
			alert("Veillez remplir tous les champs s'il vous plaît");
			return;
		}
		// else if (!(name && text) && composition == 'alone') {
		// 	alert("Veillez remplir tous les champs s'il vous plaît");
		// 	return;
		// }
		setPoem(true);
		setWrite(false);
		setChoice(false);
		setFormOpen(false);
		setWelcome(false);
		setAbout(false);
		sethelp(false);
		setEdition(false);
		setCommand(false);
	};

	useEffect(
		() => {
			if (what == 'quote') {
				setComposition('alone');
			}
		},
		[ what ]
	);
	const getChoice = () => {
		// if (!(name && category && composition && what)) {
		// 	alert('Veillez remplir tous les champs svp!');
		// 	return;
		// }
		if (composition == 'help') {
			setChoice(true);
			setWrite(false);
			setPoem(false);
			setFormOpen(false);
			setWelcome(false);
			setAbout(false);
			sethelp(false);
			setEdition(false);
			setCommand(false);
		} else if (composition == 'alone') {
			setWrite(true);
			setChoice(false);
			setPoem(false);
			setFormOpen(false);
			setWelcome(false);
			setAbout(false);
			sethelp(false);
			setEdition(false);
			setCommand(false);
		}
	};

	const commandFxn = (e) => {
		setTab(e.target.innerText);
		setCommand(true);
		setFormOpen(false);
		setEdition(false);
		setPoem(false);
		setWelcome(false);
		setAbout(false);
		sethelp(false);
	};
	const changePoem = () => {
		if (composition == 'help') {
			setChoice(true);
			setWrite(false);
			setFormOpen(false);
			setPoem(false);
			setWelcome(false);
			setAbout(false);
			sethelp(false);
			setCommand(false);
		} else {
			setWrite(true);
			setChoice(false);
			setFormOpen(false);
			setPoem(false);
			setWelcome(false);
			setAbout(false);
			sethelp(false);
			setCommand(false);
		}
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
	const capture = () => {
		let modalBody = document.querySelector('.modal-body');
		let canvas = document.querySelector('#canvas');
		if (canvas) {
			modalBody.removeChild(canvas);
		}
		html2canvas(document.querySelector(`#capture`),
		// {width:800}
		{
		allowtaint:true,
		useCORS:true
	}
		).then((canvas) => {
			canvas.setAttribute('id', 'canvas'); //add it the id='canvas'
			// canvas.setAttribute('width',100);
			// canvas.setAttribute('height', 'auto');
			// removeAttributes(canvas,'height','width')
			modalBody.appendChild(canvas);
		});
	};
	//Function to remove attributes
	const removeAttributes=(element,...attr)=>{
		attr.forEach(attr=>element.removeAttribute(attr))
	}

	const download = () => {
		let canvas = document.getElementById('canvas');
		// canvas.setAttribute('width',2480)
		let a = document.createElement('a');
		a.href = canvas.toDataURL('image/jpeg'); //The toDataURL returns a file/format file, with details on the canvas
		a.download = `${title}.jpg`;
		a.click();
	};

	//INTERNET EXPLORER AND EDGE METHODS... ONLY SAVES AS PNG
	// const download1=()=>{
	// 	if(window.navigator.msSaveBlob){
	// 		(canvas.msSaveBlob(), "image.png")
	//     }else{
	// 	let canvas=document.getElementById('canvas')
	// 	let a=document.createElement('a')
	// 	a.href=canvas.toDataURL('image/jpeg') //The toDataURL returns a file/format file, with details on the canvas
	// 	a.download='poem.jpeg'
	// 	a.click();
	// 	}
	// }
//on input onChange
	// const uploadImg=(e)=>{
	// 	console.log(e.target.files)
	// 	setImage(e.target.files[0])
	// }
	//getImg now
	const handle=()=>{
		const formData=new formData()
		formData.append(`image`,image)
		axios.post('url',formData).then((res)=>{console.log(res);})
	}

	const sendRequest = (e) => {
		e.preventDefault()
		let a = document.createElement('a');
		if (commandWhere == 'Facebook') {
			a.href = `https://m.me/Poésie dans les airs?text=${commandName} sent a message:<br/> ${commandMsg}`; //The toDataURL returns a file/format file, with details on the canvas
		}
		if (commandWhere == 'Whatsapp') {
			a.href = `https://wa.me/237696950600/?text=${commandName} sent a message:<br/> ${commandMsg}`; //The toDataURL returns a file/format file, with details on the canvas
		}
		if (commandWhere == 'LinkedIn') {
			a.href = `https://LinkedIn/?text=${commandName} sent a message:<br/> ${commandMsg}`; //The toDataURL returns a file/format file, with details on the canvas
		}
		a.click();
		console.log(a.href);
		return
	};
	return (
		<AppContext.Provider
			value={{
				wrapperBg,
				setWrapperBg,
				openForm,
				getPoem,
				commandFxn,
				command,
				setCommand,
				commandWhat,
				setCommandWhat,
				commandWhere,
				setCommandWhere,
				commandMsg,
				image,
				setImage,
				urlBgHandler,
				prevent,
				setCommandMsg,
				commandName,
				setCommandName,
				formOpen,
				setFormOpen,
				write,
				choice,
				setChoice,
				getChoice,
				display,
				title,
				setTitle,
				what,
				setWhat,
				text,
				setText,
				author,
				setAuthor,
				homeFxn,
				itsPoem,
				setItsPoem,
				poem,
				setPoem,
				name,
				setName,
				category,
				setCategory,
				composition,
				setComposition,
				changeBg,
				welcome,
				bg,
				tab,
				setBg,
				size,
				setSize,
				shadow,
				setShadow,
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
				lineHeight,
				setLineHeight,
				changePoem,
				capture,
				download,
				urlBg,
				url,
				setUrl,
				sendRequest,
				handle,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};
export const useGlobalContext = () => useContext(AppContext);
export { AppProvider, AppContext };
