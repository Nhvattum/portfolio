import Navbar from '../components/navbar'
import Footer from '../components/footer'
// import Head from 'next/head'

export default function Resume() {
    return(
        <div className="home">
            {/* <Head>
                <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@400&display=swap" rel="stylesheet"/>
                <title>Nick Hvattum Portfolio</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/konpa/devicon@master/devicon.min.css"></link>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"></link>

            </Head> */}
            <Navbar />
            <img className="resume" src="/resume1.png" />
            <img className="resume" src="/resume2.png" />
            <Footer />
        </div>
    )
}