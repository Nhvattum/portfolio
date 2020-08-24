import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return ( 
    <div>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@400&display=swap" rel="stylesheet"/>
      </Head>
      <Component {...pageProps} />
    </div>  
  )
}

export default MyApp
