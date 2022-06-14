import Footer from "./Footer"
import Navbar from "./Navbar"
import Sectiontwo from "./Sectiontwo"
import About from "./About"
import Sectionone from "./Sectionone"
import Sectionapi from "./Sectionapi"


const Layout = ({children}) => {
  return (
    <div>
        <Navbar/>

        {children}
        
        <Sectionone/>
        <Sectionapi/>
        <About/>
        <Sectiontwo/>
        <Footer/>

    </div>
  )
}

export default Layout