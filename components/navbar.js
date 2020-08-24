import Head from 'next/head'
// import {useEffect} from 'react'
import {Nav, Link, NavLink} from 'react-bootstrap'

export default function Navbar() {


    return (
        <div className="navDiv">
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@400&display=swap" rel="stylesheet"/>
                <title>Nick Hvattum Portfolio</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"></link>
            </Head>
            
            <Nav className="navBar "activeKey="/home">
                <div className="favicon">
                    {/* <Nav.Item>
                        <Nav.Link className="navLink" href="/">
                            <img src="favicon.ico" />
                        </Nav.Link>
                    </Nav.Item> */}
                </div>
                <div className="navButtons">
                    <Nav.Item>
                        <Nav.Link className="navLink" href="/">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className="navLink" href="/resume">Resume</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className="navLink" href="/about">About Nick</Nav.Link>
                    </Nav.Item>
                </div>
            </Nav>
        </div>
    )
}