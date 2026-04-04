import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'

function MyApp(){
  return(
    <div>
      <h1>
        Custom App
      </h1>
    </div>
  )
}

// const reactElement = {
//     type:'a',
//     props:{
//         href:'https://google.com',
//         target:'_blank'
//     },
//     children:'Click me to visit google'
// }

const anotherElment = (
  <a href='https://google.com' target='_black'>Visit google</a>
)

const anotherUser = "chai aur react"


// proper syntax to write object in react
const reactElementnew = React.createElement(
   'a',
   {href:'https://goggle.com'}, //agar koi aattribute nahi hai to in curly brackets ko empty chod do
   'click me to visit google',
   anotherUser
)

createRoot(document.getElementById('root')).render(
  
   // <App />
   // <MyApp/>
   // <reactElement/>  // but it wont work becouse it is object and object run directly
   // reactElement  // it still wont work becouse in this object we created keys on our own and it dont follow react standard format kull mila ke syntax galat hai
   // anotherElment // it will work becouse it will convert in object or haa ek bar me ek hi component work karega multiple nahi
  reactElementnew
)
