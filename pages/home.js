export default function Home() {
    return (
        <div>
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
                <img className="logo" src="/github.png" alt="github logo"></img>
                
                <div>Icons made by 
                    <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
                </div>    
            </div>
            <div>
            <h2>Recent Projects</h2>
                <div>
                    <h3>
                        <a href="https://nhvattum.github.io/Social-Distancing/">Social Distancing</a>
                    </h3>
                    <a href="https://nhvattum.github.io/Social-Distancing/">
                        <img className="socialDistancing" src="/SocialDistancing.png" alt="social distancing game screenshot"></img>
                    </a>
                    <div className="projectDescription">Social Distancing is a dungeon crawler game created with HTML, CSS, and JavaScript.</div>
                </div>
                <div>
                    <h3>
                        <a href="https://mix-it-up-nh.herokuapp.com">Mix it Up</a>
                    </h3>
                    <a href="https://mix-it-up-nh.herokuapp.com">
                        <img className="mixItUp" src="/MixItUp.png" alt="mix it up cocktail app screenshot"></img>
                    </a>
                    <div className="projectDescription">Mix It Up is a cocktail app that was created with HTML, CSS, JavaScript, Express, and sequelize before being deployed to Heroku.<br></br><br></br>This web app allows users to search for and store cocktail recipes to their favorites list and create virtual pantries containing ingredients that they currently have. </div>
                </div>
            </div>
        </div>
    )    
}