import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function Resume() {
  return (
    <div className="resumeDiv">
      <Navbar />
      {/* <div className="imgDiv"> */}
        <img className="resume1" src="/resume_page_1.png" />
      {/* </div> */}
      {/* <div className="imgDiv"> */}
        <img className="resume2" src="/resume_page_2.png" />
      {/* </div> */}
      {/* <object className="pdf" data="/Nick Hvattum Resume.pdf#view=FitH"/> */}
      <Footer />
    </div>
  );
}
