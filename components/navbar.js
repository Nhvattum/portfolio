import Head from 'next/head'
// import {useEffect} from 'react'
import {Nav} from 'react-bootstrap'

export default function Navbar() {

    // useEffect(() => {
    //     document.getElementById('home').style.color = "hotpink";
    // }, [])

    return (
        <div>
            <Head>
                <script src="https://unpkg.com/react/umd/react.production.min.js" crossorigin></script>
                <script
                    src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
                    crossorigin>
                </script>
                <script
                    src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
                    crossorigin>
                </script>
                <title>Nick Hvattum Portfolio</title>
            </Head>
            <Nav className="justify-content-end navBar" activeKey="/home">
                <Nav.Item>
                    <Nav.Link className="navLink" href="/home">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className="navLink" href="/resume">Resume</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className="navLink" href="/about">About Nick</Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    )
}