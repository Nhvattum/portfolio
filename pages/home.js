import Navbar from '../components/navbar'
import {Button, Accordion, Card} from 'react-bootstrap'

export default function Home() {


    return (
        <div>
            <Navbar />
            <h1>Nick Hvattum</h1>
            <h3>I am a Software Engineer motivated by utilizing my background in QA to achieve practical, precise solutions to technical problems. I enjoy using my unique background along with my technical skills to create software that will impact the life of the end user.
            </h3>
            <h2>Technologies</h2>
            <div className="logoList">
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
                
                <div>Icons by 
                    <a href="https://icons8.com/" target="_blank"> icons8</a>
                </div>    
            </div>
            <div>
                <h2>Recent Projects</h2>
                <div>
                    <Accordion className="accordion">
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                    Stay Inside
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body className="projectDescription">
                                    <a href="https://mix-it-up-nh.herokuapp.com" target="_blank">
                                        <img className="mixItUp" src="/MixItUp.png" alt="mix it up cocktail app screenshot"></img>
                                    </a>
                                    Mix It Up is a cocktail app that was created with HTML, CSS, JavaScript, Express, and sequelize before being deployed to Heroku. This web app allows users to search for and store cocktail recipes to their favorites list and create virtual pantries containing ingredients that they currently have.
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                    Mix It Up
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body className="projectDescription">
                                    <a href="https://mix-it-up-nh.herokuapp.com" target="_blank">
                                        <img className="mixItUp" src="/MixItUp.png" alt="mix it up cocktail app screenshot"></img>
                                    </a>
                                    Mix It Up is a cocktail app that was created with HTML, CSS, JavaScript, Express, and sequelize before being deployed to Heroku. This web app allows users to search for and store cocktail recipes to their favorites list and create virtual pantries containing ingredients that they currently have.
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                    Social Distancing
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="1">
                                <Card.Body className="projectDescription">
                                    <a href="https://nhvattum.github.io/Social-Distancing/" target="_blank">
                                        <img className="socialDistancing" src="/SocialDistancing.png" alt="social distancing game screenshot"/>
                                    </a>
                                    Social Distancing is a dungeon crawler game created with HTML, CSS, and JavaScript.
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        </Accordion>


                </div>
            </div>
        </div>
    )    
}