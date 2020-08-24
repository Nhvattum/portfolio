import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return ( 
    <div>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@400&display=swap" rel="stylesheet"/>
        <title>Nick Hvattum Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/konpa/devicon@master/devicon.min.css"></link>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"></link>

      </Head>
      <Component {...pageProps} />
    </div>  
  )
}

export default MyApp
