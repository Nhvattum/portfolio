import Navbar from '../components/navbar'
import Footer from '../components/footer'

export default function Resume() {
    return(
        <div className="resumeDiv">
            <Navbar />
            {/* <img className="resume" src="/resume1.png" />
            <img className="resume" src="/resume2.png" /> */}
            <object className="pdf" data="/Nick Hvattum Resume.pdf#view=FitH"/>
            <Footer />
        </div>
    )
}