import Navbar from './navbar'
import {ListGroup, ListGroupItem} from 'react-bootstrap'
import card from 'react-bootstrap/card'
import Footer from './footer'
import Head from 'next/head'

export default function Home() {
    
    return (
        <div className="home">
            <Head>
                <link
                    rel="stylesheet"
                    href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                    crossorigin="anonymous"
                />
            </Head>
            <Navbar />
            <br/>
            
            <div className="homeSection">
                <card style={{ width: '100%', background: 'rgba(255, 255, 255, 0.5)' }}>
                    <card.Body>
                        <card.Title>
                            <div className="homeHeader">
                                <h1 className="nickHvattum">NICK HVATTUM</h1>
                                <img className="homePhoto" src="first-portfolio-photo.jpg" />
                            </div>
                            <hr className="hrs"/>
                        </card.Title>
                        <card.Text className="logoList">
                        <h4>
                            I am a Software Engineer motivated by utilizing my background in QA to achieve practical, precise solutions to technical problems. I enjoy using my unique background along with my technical skills to create software that will impact the life of the end user.
                        </h4>
                        </card.Text>
                    </card.Body>
                </card>
            </div>
            <div className="homeSection techSection">
                <div className="technologies">
                    <card style={{ width: '100%', background: 'rgba(255, 255, 255, 0.5)' }}>
                        <card.Body>
                            <card.Title>
                                <h1>Technologies</h1>
                                    <hr/>
                            </card.Title>
                            <card.Text className="logoList">
                                <img className="logo" src="/html-5.png" alt="html-5 logo"></img>
                                <img className="logo" src="/javascript.png" alt="javascript logo"></img>
                                <img className="logo" src="/css.png" alt="CSS logo"></img>
                                <img className="logo" src="/react.png" alt="react logo"></img>
                                <img className="logo" src="/python.png" alt="python logo"></img>
                                <img className="logo" src="/typescript.png" alt="typescript logo"></img>
                                <img className="logo" src="/mongodb.png" alt="mongo db logo"></img>
                                <img className="logo" src="/postgresql.png" alt="postgresql logo"></img>
                                <img className="logo" src="/nodejs.png" alt="node js logo"></img>
                                <img className="logo" src="/heroku.png" alt="heroku logo"></img>
                                <img className="logo" src="/vscode.png" alt="visual studio code logo"></img>
                                <img className="logo" src="/github.png" alt="github logo"></img>
                            </card.Text>
                            Icons by
                            <card.Link href="https://icons8.com/"> icons8</card.Link>
                        </card.Body>
                    </card>
                </div>    
            </div>
            <div className="homeSection">
                <div className="recentProjects">
                    <card style={{ width: '100%', background: 'rgba(255, 255, 255, 0.5)' }}>
                        <card.Body>
                            <card.Title>
                                <h1>Recent Projects</h1>
                                <hr/>
                            </card.Title>
                            <card.Text className="logoList">
                                <card className="project" style={{ width: '25rem', background: 'rgba(255, 255, 255, 0.5)', marginTop: '2em' }}>
                                    <card.Title className="projectTitle">Insplore</card.Title>
                                    <card.Img variant="top" src="/Insplore.png" alt="social distancing game screenshot" />
                                    <card.Body>
                                        <card.Text>
                                            Insplore is the first place winning product of a 30 hour team based hackathon.  With nothing other than the prompt "Inspirational Wonder," my team of 3 developers and 2 UX designers created this proof of concept app that is a throw-back to spinning a globe as a kid, and randomly choosing a destination.
                                            <br /><br />
                                            This app was created using NextJS, React, MongoDB, and the MapBox API.  
                                        </card.Text>
                                    </card.Body>
                                    <ListGroup className="list-group-flush">
                                        <ListGroupItem>
                                            <card.Body>Check it out 
                                                <card.Link href="https://insplore.vercel.app/"> here</card.Link>
                                            </card.Body>
                                        </ListGroupItem>
                                    </ListGroup>
                                </card>
                                <card className="project" style={{ width: '25rem', background: 'rgba(255, 255, 255, 0.5)', marginTop: '2em' }}>
                                    <card.Title className="projectTitle">Stay Inside</card.Title>
                                    <card.Img variant="top" src="/StayInside.png" alt="stay inside app screenshot" />
                                    <card.Body>
                                        <card.Text>
                                            Stay Inside is a social media app that was created with React using a MongoDB database.  This was a team project with two people working on the backend while I did the frontend with one other team member.
                                            <br/><br/>
                                            Stay Inside is an online event scheduling app for the social distancing age.  It allows users to post about online events that they will be hosting, and their friends can comment on 
                                        </card.Text>
                                    </card.Body>
                                    <ListGroup className="list-group-flush">
                                        <ListGroupItem>
                                            <card.Body>Create your first event  
                                                <card.Link href="https://stay-inside.netlify.app/"> here</card.Link>
                                            </card.Body>
                                        </ListGroupItem>
                                    </ListGroup>
                                </card>

                                <card className="project" style={{ width: '25rem', background: 'rgba(255, 255, 255, 0.5)', marginTop: '2em' }}>
                                    <card.Title className="projectTitle">Mix It Up</card.Title>
                                    <card.Img variant="top" src="/MixItUp.png" alt="mix it up cocktail app screenshot" />
                                    <card.Body>
                                        <card.Text>
                                        Mix It Up is a cocktail app that was created with HTML, CSS, JavaScript, Express, and sequelize before being deployed to Heroku. This web app allows users to search for and store cocktail recipes to their favorites list and create virtual pantries containing ingredients that they currently have.
                                        </card.Text>
                                    </card.Body>
                                    <ListGroup className="list-group-flush">
                                        <ListGroupItem>
                                            <card.Body>Find a new drink  
                                                <card.Link href="https://mix-it-up-nh.herokuapp.com"> here</card.Link>
                                            </card.Body>
                                        </ListGroupItem>
                                    </ListGroup>
                                </card>

                                <card style={{ width: '25rem', background: 'rgba(255, 255, 255, 0.5)', marginTop: '2em' }}>
                                    <card.Title className="projectTitle">Social Distancing</card.Title>
                                    <card.Img variant="top" src="/SocialDistancing.png" alt="social distancing game screenshot" />
                                    <card.Body>
                                        <card.Text>
                                        Social Distancing is a dungeon crawler game created with HTML, CSS, and JavaScript.
                                        </card.Text>
                                    </card.Body>
                                    <ListGroup className="list-group-flush projectLink">
                                        <ListGroupItem>
                                            <card.Body>Play the game 
                                                <card.Link href="https://mix-it-up-nh.herokuapp.com"> here</card.Link>
                                            </card.Body>
                                        </ListGroupItem>
                                    </ListGroup>
                                </card>
                            </card.Text>
                        </card.Body>
                    </card>  
                </div>
            </div>
            <div className="homeSection">
                <card style={{ width: '100%', background: 'rgba(255, 255, 255, 0.5)' }}>
                    <card.Body>
                        <card.Title>
                            <h1>Education</h1>
                            <hr/>
                        </card.Title>
                        <card.Text className="logoList">
                            <card style={{ width: '50rem', background: 'rgba(255, 255, 255, 0.5)', padding: "1em" }}>
                                <card.Title>General Assembly</card.Title>
                                Software Engineering Immersive
                                <br />
                                May 2020- August 2020
                                <ul>
                                    <li>
                                        <card.Text>
                                            500 hours of full-time full-stack education in a remote setting
                                        </card.Text>
                                    </li>
                                    <li>
                                        <card.Text>
                                            Provided experience with the latest front and back-end programming languages, tools, and methodologies
                                        </card.Text>
                                    </li>
                                    <li>
                                        <card.Text>
                                            Included developing and deploying multiple projects both as part of a team as well as alone
                                        </card.Text>
                                    </li>
                                </ul>
                            </card>
                            <card style={{ width: '50rem', background: 'rgba(255, 255, 255, 0.5)', marginTop: "1em", padding: "1em" }}>
                                <card.Title>Everett Community College</card.Title>
                                Associate's of Arts and Sciences
                                <br />
                                2015- 2018
                            </card>
                            <card style={{ width: '50rem', background: 'rgba(255, 255, 255, 0.5)', marginTop: "1em", padding: "1em" }}>
                                <card.Title>Medisense Medical Coding</card.Title>
                                CPC-A (Certified Professional Coder through AAPC)
                                <br />
                                2018
                            </card>
                        </card.Text>
                    </card.Body>
                </card>
            </div> 
            <Footer />
        </div>
    )    
}