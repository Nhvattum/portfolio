import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nick Hvattum Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/konpa/devicon@master/devicon.min.css"></link>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"></link>

      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Hello, my name is Nick Hvattum</h1>
        <h2>I am a Software Engineer, Home Cook, and Neflix Junkie</h2>
        <h2>Find out more about <a href='/home'>Nick Hvattum</a></h2>
        <i className="devicon-csharp-plain-wordmark colored"></i>
      </main>
      <footer className={styles.footer}>
          Powered by MyImagination
      </footer>
    </div>
  )
}
