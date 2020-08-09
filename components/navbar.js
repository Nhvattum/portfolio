import Head from 'next/head'
import Link from 'next/link'
import {useEffect} from 'react'

export default function Navbar() {

    useEffect(() => {
        document.getElementById('home').style.color = "hotpink";
    }, [])

    return (
        <div>
            <Head>
                <title>Nick Hvattum Portfolio</title>
                <script src="https://unpkg.com/react/umd/react.production.min.js" crossorigin></script>
                <script
                src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
                crossorigin></script>
                <script
                src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
                crossorigin></script>
            </Head>
            <navbar>
                <ul>
                    <li>
                        <Link href="/">
                            <a id='home'>Home</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/about">
                            <a>About</a>
                        </Link>
                    </li>
                </ul>
            </navbar>
        </div>
    )
}