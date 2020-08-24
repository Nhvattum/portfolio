import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {Card} from 'react-bootstrap'
import Footer from '../components/footer'
import Home from '../components/home'


export default function Landing() {
  return (
    <div>
      {/* <Head>
        <title>Nick Hvattum Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/konpa/devicon@master/devicon.min.css"></link>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"></link>
        <link href="https://fonts.googleapis.com/css2?family=Oswald&display=swap" rel="stylesheet"/>      </Head> */}

      {/* <main className={styles.main}> */}
        {/* <div> */}
          {/* <Card style={{ width: '100%' }}>
            <Card.Body>
              <Card.Title>
              <h1 className={styles.title}>Hello, my name is Nick Hvattum</h1>
                <hr/>
              </Card.Title>
              <Card.Text>
                <h2>I am a Software Engineer, Home Cook, and Neflix Junkie </h2>
                <h2>Find out more about <a href='/home'>Nick Hvattum</a></h2>
              </Card.Text>
            </Card.Body>
          </Card> */}
          {/* <h1 className={styles.title}>Hello, my name is Nick Hvattum</h1>
          <h2>I am a Software Engineer, Home Cook, and Neflix Junkie</h2>
          <h2>Find out more about <a href='/home'>Nick Hvattum</a></h2>
          <i className="devicon-csharp-plain-wordmark colored"></i> */}
        {/* </div> */}
        <Home />
      {/* </main> */}
    </div>
  )
}
