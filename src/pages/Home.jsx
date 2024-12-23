import Canvas from "./Canvas";
import 'animate.css'; // Import the styles 不要忘記要import

export default function Home() {
    return (
        <>
            <div className="IntroductionSection" id='introductionSection'>
                <h1 className="animate__animated animate__bounceIn">Introduction</h1>
                {/* <Canvas width="800" height="500"/> */}
            </div>

            <div className="projectsSection" id='projectsSection'>
                <h1 className="animate__animated animate__bounceIn">PROJECTS</h1>
            </div>

            <div className="aboutSection" id='aboutSection'>
                <h1 className="animate__animated animate__bounceIn">ABOUT ME</h1>
            </div>

            <footer className="footer">
                <h2>Email</h2>
            </footer>
        </>)
}