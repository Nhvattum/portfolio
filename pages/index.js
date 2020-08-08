import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nick Hvattum Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Hello, my name is Nick Hvattum</h1>
        <h2>I am a Software Engineer, Home Cook, and Neflix Junkie</h2>
        <h2>Find out more about <a href='/home'>Nick Hvattum</a></h2>
      </main>
      <footer className={styles.footer}>
          Powered by MyImagination
      </footer>
    </div>
  )
}
