import React, { useState, createContext,useContext } from 'react'
// import sublinks from './data'
const AppContext=createContext();
const AppProvider=({children})=>{
    const [welcome, setWelcome]=useState(true)
    const [bg, setBg]=useState('')
    const [formOpen, setFormOpen]=useState(false)
	const [poem, setPoem]=useState(false)
	const [name, setName]=useState('My Name')
	const [reciever, setReciever]=useState('Reciever');
	const [overlay, setOverlay]=useState(0.5);
	const [textColor, setTextColor]=useState('#ffffff');
	const [bgColor, setBgColor]=useState('#000000');
	const openForm=(e)=>{
		console.log('ok');
		// e.preventDefault()
		setWelcome(false)
		setFormOpen(true);
	}
	const changeBg=(item)=>{
		console.log(item);
		setBg(item)
	}
	const backgroundColor=(x)=>{
		console.log('see',x);
		setBgColor(x)
		setBg('')
	}
	const getPoem=(e)=>{
		// e.preventDefault()
		setFormOpen(false)
		// setWelcome(false)
		setPoem(true)
	}
	const overlayHandler=(e)=>{
		setOverlay(e.target.value) 
		console.log(e.target.value);
	}

    return <AppContext.Provider 
    value={{openForm,getPoem,formOpen,setFormOpen,poem,setPoem,name,setName,reciever,setReciever,changeBg,welcome,bg,setBg,overlay,setOverlay,overlayHandler,textColor,setTextColor,bgColor,setBgColor,backgroundColor}}>
        {children}
    </AppContext.Provider>
}
export const useGlobalContext=()=>useContext(AppContext)
export {AppProvider,AppContext}
