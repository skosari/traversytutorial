import styles from '../styles/Layout.module.css'
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import Meta from '../components/Meta'

const Layout = ({children}) => {
  return(
    <>
      <Meta 
        title='custom title' description='custom description' keywords='custom keywords'
      />
      
      <Nav />
  
      {children}
  
      <Footer />
  
    </>
  )
}

export default Layout