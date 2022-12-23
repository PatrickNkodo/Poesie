import React, { useState, createContext,useContext } from 'react'
// import sublinks from './data'
const AppContext=createContext();
const AppProvider=({children})=>{
    const [welcome, setWelcome]=useState(true)
    const [bg, setBg]=useState('')
    const [formOpen, setFormOpen]=useState(false)
	const [poem, setPoem]=useState(false)
	const [name, setName]=useState('')
	const [reciever, setReciever]=useState('');
	const [overlay, setOverlay]=useState('');
	const openForm=(e)=>{
		console.log('ok');
		e.preventDefault()
		setWelcome(false)
		setFormOpen(true);
	}
	const changeBg=(item)=>{
		console.log(item);
		setBg(item)
	}
	const getPoem=(e)=>{
		e.preventDefault()
		setFormOpen(false)
		// setWelcome(false)
		setPoem(true)
	}
	const overlayHandler=(e)=>{
		setOverlay(e.target.value) 
		console.log(e.target.value);
	}

    return <AppContext.Provider 
    value={{openForm,getPoem,formOpen,setFormOpen,poem,setPoem,name,setName,reciever,setReciever,changeBg,welcome,bg,setBg,overlay,setOverlay,overlayHandler}}>
        {children}
    </AppContext.Provider>
}
export const useGlobalContext=()=>useContext(AppContext)
export {AppProvider,AppContext}
