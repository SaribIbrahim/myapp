
import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'

export default function Home({products}) {
  return (
    <div>
      
      <Header/>
      <Main products={products}/>
      <Footer/>

    </div>
  )
}
