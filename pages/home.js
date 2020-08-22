import Navbar from '../components/navbar'
import {Card, ListGroup, ListGroupItem} from 'react-bootstrap'

export default function Home() {

    return (
        <div className="home">
            <Navbar />
            <br/>
            
            <div className="homeSection">
                <Card style={{ width: '100%' }}>
                    <Card.Body>
                        <Card.Title>
                            <h1>NICK HVATTUM</h1>
                            <hr/>
                        </Card.Title>
                        <Card.Text className="logoList">
                        I am a Software Engineer motivated by utilizing my background in QA to achieve practical, precise solutions to technical problems. I enjoy using my unique background along with my technical skills to create software that will impact the life of the end user.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <div className="homeSection techSection">
                <div className="technologies">
                    <Card style={{ width: '100%' }}>
                        <Card.Body>
                            <Card.Title>
                                <h1>Technologies</h1>
                                    <hr/>
                            </Card.Title>
                            <Card.Text className="logoList">
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
                            </Card.Text>
                            Icons by
                            <Card.Link href="https://icons8.com/"> icons8</Card.Link>
                        </Card.Body>
                    </Card>
                </div>    
            </div>
            <div className="homeSection">
                {/* <h1>Recent Projects</h1>
                <hr/> */}
                <div className="recentProjects">
                    <Card style={{ width: '100%' }}>
                        <Card.Body>
                            <Card.Title>
                                <h1>Recent Projects</h1>
                                <hr/>
                            </Card.Title>
                            <Card.Text className="logoList">
                                <Card style={{ width: '25rem' }}>
                                    <Card.Title>Insplore</Card.Title>
                                    <Card.Img variant="top" src="/Insplore.png" alt="social distancing game screenshot" />
                                    <Card.Body>
                                        <Card.Text>
                                            Insplore is the first place winning product of a 30 hour team based hackathon.  With nothing other than the prompt "Inspirational Wonder," my team of 3 developers and 2 UX designers created this proof of concept app that is a throw-back to spinning a globe as a kid, and randomly choosing a destination.
                                            <br /><br />
                                            This app was created using NextJS, React, MongoDB, and the MapBox API.  
                                        </Card.Text>
                                    </Card.Body>
                                    <ListGroup className="list-group-flush">
                                        <ListGroupItem>
                                            <Card.Body>Check it out 
                                                <Card.Link href="https://insplore.vercel.app/"> here</Card.Link>
                                            </Card.Body>
                                        </ListGroupItem>
                                    </ListGroup>
                                </Card>
                                <Card style={{ width: '25rem' }}>
                                    <Card.Title>Stay Inside</Card.Title>
                                    <Card.Img variant="top" src="/StayInside.png" alt="stay inside app screenshot" />
                                    <Card.Body>
                                        <Card.Text>
                                            Stay Inside is an social media app that was created with React using a MongoDB database.  This was a team project with two people working on the backend while I did the frontend with one other team member.
                                            <br/><br/>
                                            Stay Inside is an online event scheduling app for the social distancing age.  It allows users to post about online events that they will be hosting, and their friends can comment on 
                                        </Card.Text>
                                    </Card.Body>
                                    <ListGroup className="list-group-flush">
                                        <ListGroupItem>
                                            <Card.Body>Create your first event  
                                                <Card.Link href="https://mix-it-up-nh.herokuapp.com"> here</Card.Link>
                                            </Card.Body>
                                        </ListGroupItem>
                                    </ListGroup>
                                </Card>

                                <Card style={{ width: '25rem' }}>
                                    <Card.Title>Mix It Up</Card.Title>
                                    <Card.Img variant="top" src="/MixItUp.png" alt="mix it up cocktail app screenshot" />
                                    <Card.Body>
                                        <Card.Text>
                                        Mix It Up is a cocktail app that was created with HTML, CSS, JavaScript, Express, and sequelize before being deployed to Heroku. This web app allows users to search for and store cocktail recipes to their favorites list and create virtual pantries containing ingredients that they currently have.
                                        </Card.Text>
                                    </Card.Body>
                                    <ListGroup className="list-group-flush">
                                        <ListGroupItem>
                                            <Card.Body>Find a new drink  
                                                <Card.Link href="https://mix-it-up-nh.herokuapp.com"> here</Card.Link>
                                            </Card.Body>
                                        </ListGroupItem>
                                    </ListGroup>
                                </Card>

                                <Card style={{ width: '25rem' }}>
                                    <Card.Title>Social Distancing</Card.Title>
                                    <Card.Img variant="top" src="/SocialDistancing.png" alt="social distancing game screenshot" />
                                    <Card.Body>
                                        <Card.Text>
                                        Social Distancing is a dungeon crawler game created with HTML, CSS, and JavaScript.
                                        </Card.Text>
                                    </Card.Body>
                                    <ListGroup className="list-group-flush">
                                        <ListGroupItem>
                                            <Card.Body>Play the game 
                                                <Card.Link href="https://mix-it-up-nh.herokuapp.com"> here</Card.Link>
                                            </Card.Body>
                                        </ListGroupItem>
                                    </ListGroup>
                                </Card>
                            </Card.Text>
                        </Card.Body>
                    </Card>  
                </div>
            </div>
            <div className="homeSection">
                <Card style={{ width: '100%' }}>
                    <Card.Body>
                        <Card.Title>
                            <h1>Education</h1>
                            <hr/>
                        </Card.Title>
                        <Card.Text className="logoList">
                            <Card style={{ width: '50rem' }}>
                                <Card.Title>General Assembly</Card.Title>
                                Software Engineering Immersive
                                <br />
                                May 2020- August 2020
                                <ul>
                                    <li>
                                        <Card.Text>
                                            500 hours of full-time full-stack education in a remote setting
                                        </Card.Text>
                                    </li>
                                    <li>
                                        <Card.Text>
                                            Provided experience with the latest front and back-end programming languages, tools, and methodologies
                                        </Card.Text>
                                    </li>
                                    <li>
                                        <Card.Text>
                                            Included developing and deploying multiple projects both as part of a team as well as alone
                                        </Card.Text>
                                    </li>
                                </ul>
                            </Card>
                            <Card style={{ width: '50rem' }}>
                                <Card.Title>Everett Community College</Card.Title>
                                Associate's of Arts and Sciences
                                <br />
                                2015- 2018
                            </Card>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div> 
        </div>
    )    
}