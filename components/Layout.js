import styles from '../styles/Layout.module.css'
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import Head from "next/head"

const Layout = ({children}) => {
  return(
    <>
      <Head>
        <title>
          Siamaks first next app
        </title>
        <meta name='keywords' content='web development, programming' />
      </Head>
      
      <Nav />
  
      {children}
  
      <Footer />
  
    </>
  )
}

export default Layout