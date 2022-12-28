import React from 'react'

const Display = ({title,text,author}) => {
    console.log(author);
  return (
    <div>
      <h4>{title}</h4>
      <p  className='poem-copy'>{text}</p>
      <p>~{author}</p>
    </div>
  )
}

export default Display
