
import Chai from "./Chai"

function App() {
 const username = "chai or code"  // variables ko inject karna

  return (
    <>
    <Chai/>
    <h1>chair or react {username} //curly brackets ka istmal karke variable likno ko bolte hai evaluated expression</h1>
    <p>test para</p>
    </>
    
  )
}

// we can export only one element or we can return only one element 
// thats why when we need to export multiple elements we wrapped all of them in div and export/return as one element or '<> </>'(fragment) ke andar wrap karke export/return as one element

export default App
