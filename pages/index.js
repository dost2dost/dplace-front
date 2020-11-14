import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from './components/Navbar'

export default function Home({ products }) {

  console.log(products)
  const productList = products.map(product => {
    return (
      
      <div className="cardcustSize " key={product.id}>
        <div >
          <img src={product.imgurl} width="10%" />
          <span>{product.title}</span>
        </div>
        <div >
          <p><label>Price</label>{product.price}</p>
          
          <a href="#">Add to Cart</a>
        
        </div>
        
      </div>
     
    )
  })
  return (
    <div  className={styles.container}>
    
   {productList}
      
      

      <footer className={styles.footer}>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{''}
          <img src="/dplace.png" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )

}
export async function getStaticProps() {
  const res = await fetch('http://dplace.herokuapp.com/products')
  const data = await res.json();
  return {
    props: {
      products: data
    }
  }

}
