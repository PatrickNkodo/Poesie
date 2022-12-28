import React from 'react';
import { useGlobalContext } from '../context';
import logo from '../logo white.png';
const Poem = () => {
	const {
		name,
		title,
		text,
		bg,
		textColor,
		bgColor,
		overlay,
		align,
		size,
		color1,
		color2,
		direction,
		gradientPresent,
		bgImagePresent,
		lineHeight,
    font,
    weight
	} = useGlobalContext();
	console.log(bgColor);
	let style = {
		color: `${textColor}`,
		backgroundColor: `${bgColor}`,
	};
	if (gradientPresent) {
		style = { ...style, background: `linear-gradient(to ${direction}, ${color1},${color2})` };
	}
	if (bgImagePresent) {
		style = { ...style, backgroundImage: `url('${bg}')` };
	}
	console.log(size);
	return (
		<div className="">
			<div className="bg col-sm-8" style={{...style }}>
        <div className="logo" style={align=='left'?{right:'0'}:{left:'0'}}>
          <img src={logo} alt="Logo" width='20%'/>
        </div>
				<div className="overlay-bg" style={{ opacity: `${overlay}` }} />
				<div className='text' contentEditable spellCheck="false" style={{ textAlign:align,fontFamily:font,fontWeight:weight,fontSize: `${size}rem`,lineHeight:`${lineHeight}rem`}}>
					{title}<br/><br/>
					{text}<br/>
					~{name}
				</div>
			</div>
			{/* <div className="add-bg">
        <label  htmlFor='filea' className=''>Change Background </label>
       <div className="col-8"> <input type="file" id='file'  onChange={(e)=>setBg(e.target.value)} value={bg} className='form-control' required/></div>
     </div> */}
		</div>
	);
};

export default Poem;
