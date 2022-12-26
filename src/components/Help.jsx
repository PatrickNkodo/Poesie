import React from 'react'
import Me from './Me.jpg'
const Help = () => {
  return (
    <div className='p-2'>
        <h1>Do you need help?</h1>
        <p>Here, you have the different parts of the application explained. You can follow the guide if  facing a difficulty in using it.</p>
        <div className="">
          <img src={Me} width='300' alt="img"/>
          <p>This is the homepage of the application. You are prompted to click on the button to continue to a form. 
            The navbar contains three (03) main links. Home, which redirects to this home page in case you are on a different side of the application.
            The Help link which directs to the help page, where you get information on how to use the application
          </p>
        </div>
    </div>
  )
}

export default Help
